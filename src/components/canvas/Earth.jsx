import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  Environment,
  Lightformer,
} from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

/* -------------------- Earth Model -------------------- */
const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");
  const ref = useRef();

  // Slow continuous rotation for realism
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <primitive
      ref={ref}
      object={earth.scene}
      scale={2.6}
      position={[0, 0, 0]}
      rotation={[0.2, 0, 0]}
      castShadow
      receiveShadow
    />
  );
};

/* -------------------- Canvas -------------------- */
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-5, 3, 8],
      }}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.SRGBColorSpace,
        physicallyCorrectLights: true,
        preserveDrawingBuffer: true,
      }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* 🌞 Warm Orange Key Light (like sunrise) */}
        <directionalLight
          position={[8, 3, 5]}
          intensity={2.4}
          color="#ec6f00"
          castShadow
          shadow-mapSize-width={4096}
          shadow-mapSize-height={4096}
        />

        {/* 🌌 Cool fill light from opposite side (space reflection) */}
        <directionalLight
          position={[-6, -2, -8]}
          intensity={0.5}
          color="#3366ff"
        />

        {/* 🌍 Faint ambient scattering light */}
        <ambientLight intensity={0.2} color="#ffffff" />

        {/* 🔥 Rim glow using Environment Lightformers */}
        <Environment resolution={1024}>
          <Lightformer
            intensity={2}
            rotation-x={Math.PI / 2}
            position={[0, 10, -10]}
            scale={[20, 20, 1]}
            color="#ff8c1a"
          />
          <Lightformer
            intensity={1.4}
            rotation-y={Math.PI / 2}
            position={[10, 0, 0]}
            scale={[10, 10, 1]}
            color="#ec6f00"
          />
          <Lightformer
            intensity={0.8}
            rotation-y={-Math.PI / 2}
            position={[-10, 0, 0]}
            scale={[8, 8, 1]}
            color="#ffaa66"
          />
        </Environment>

        {/* 🪐 Orbit Controls */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 2.1}
        />

        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
