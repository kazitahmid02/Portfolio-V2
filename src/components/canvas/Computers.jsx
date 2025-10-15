import React, { Suspense, useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Preload,
  useGLTF,
  ContactShadows,
  Environment,
  Lightformer,
  OrbitControls,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

/* ---------------- Computer Model ---------------- */
const ComputerModel = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");
  const ref = useRef();

  // Gentle idle animation
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      ref.current.rotation.y = Math.sin(t * 0.15) * 0.25;
      ref.current.rotation.x = Math.sin(t * 0.05) * 0.05;
    }
  });

  return (
    <group ref={ref} castShadow receiveShadow>
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.9 : 0.6}
        position={isMobile ? [0, -1.5, -2] : [0, -3, -1.4]}
        rotation={[-0.01, -0.25, -0.05]}
      />
    </group>
  );
};

/* ---------------- Static Neon Grid (not affected by OrbitControls) ---------------- */
function NeonWave() {
  const ref = useRef();
  const count = 90;
  const separation = 0.35;

  const positions = [];
  for (let x = 0; x < count; x++) {
    for (let y = 0; y < count; y++) {
      positions.push((x - count / 2) * separation, (y - count / 2) * separation, 0);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() * 0.5; // slower, smoother wave
    const pos = geometry.attributes.position.array;
    let i = 0;
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        pos[i + 2] =
          Math.sin(x * 0.15 + time) * 0.35 + Math.cos(y * 0.2 + time) * 0.35;
        i += 3;
      }
    }
    geometry.attributes.position.needsUpdate = true;
  });

  // Keep fixed to world (not orbiting with camera)
  const { camera } = useThree();
  useFrame(() => {
    if (ref.current) ref.current.quaternion.copy(camera.quaternion);
  });

  return (
    <points
      ref={ref}
      geometry={geometry}
      position={[0, -4, -12]}
      rotation={[-Math.PI / 2.8, 0, 0]}
    >
      <pointsMaterial color="#ec6f00" size={0.09} transparent opacity={0.8} />
    </points>
  );
}

/* ---------------- Main Canvas ---------------- */
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 500px)");
    setIsMobile(mq.matches);
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [6, 3.8, 8.5], fov: 38 }}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.SRGBColorSpace,
        physicallyCorrectLights: false,
        preserveDrawingBuffer: false,
      }}
      style={{ background: "black" }} // 🔥 Pitch-black background
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* ---- Optimized Orange Lighting ---- */}
        <ambientLight intensity={0.4} color="#ec6f00" />
        <spotLight
          position={[5, 8, 6]}
          angle={0.4}
          penumbra={0.8}
          intensity={2.0}
          color="#ff8c1a"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[0, 3, -6]} intensity={0.8} color="#ff8c1a" />

        {/* Simple Environment for soft reflections */}
        <Environment resolution={256}>
          <Lightformer
            intensity={0.8}
            rotation-x={Math.PI / 2}
            position={[0, 3, -4]}
            scale={[6, 6, 1]}
            color="#ff8c1a"
          />
        </Environment>

        {/* Neon Grid — locked in world space */}
        <NeonWave />

        {/* Computer model */}
        <ComputerModel isMobile={isMobile} />

        {/* Realistic Shadows */}
        <ContactShadows
          position={[0, -0.6, 0]}
          opacity={0.4}
          scale={14}
          blur={2}
          far={8}
          color="#ff6600"
        />

        {/* Orbit only affects computer, not grid */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.05}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2.2}
        />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export { ComputersCanvas };
export default ComputersCanvas;
