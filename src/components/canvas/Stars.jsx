import { useState, useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const GalacticStars = (props) => {
  const ref = useRef();

  // ✅ Fewer stars = better FPS, smoother motion
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(2200), { radius: 1.5 })
  );

  // ✅ Slow, cinematic rotation
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 45;
      ref.current.rotation.y -= delta / 65;
    }
  });

  // ✅ Memoize for performance
  const positions = useMemo(() => sphere, [sphere]);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={positions}
        stride={3}
        frustumCulled
        {...props}
      >
        {/* Gradient-colored material */}
        <PointMaterial
          transparent
          vertexColors
          size={0.002}
          sizeAttenuation
          depthWrite={false}
          opacity={0.9}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const gradientColors = useMemo(() => {
    // Randomly assign warm/cool hues for each point
    const palette = [
      [242 / 255, 114 / 255, 200 / 255], // pinkish
      [236 / 255, 111 / 255, 0 / 255],   // orange
      [255 / 255, 180 / 255, 80 / 255],  // golden
      [120 / 255, 180 / 255, 255 / 255], // blue glow
    ];

    // Flattened array of RGB values per star
    const colors = new Float32Array(2200 * 3);
    for (let i = 0; i < 2200; i++) {
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c[0];
      colors[i * 3 + 1] = c[1];
      colors[i * 3 + 2] = c[2];
    }
    return colors;
  }, []);

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.4]}
        gl={{ antialias: false }}
      >
        <Suspense fallback={null}>
          <GalacticStars colors={gradientColors} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
