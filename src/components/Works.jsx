import React, { Suspense, useRef, useMemo } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise.js";
import { ContactShadows, Environment } from "@react-three/drei";

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

/* -------------------- REALISTIC ORANGE ASTEROID -------------------- */
const RealisticAsteroid = ({ position, velocity, size }) => {
  const ref = useRef();
  const noise = useMemo(() => new SimplexNoise(), []);

  const geometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(size, 64, 64);
    const pos = geo.attributes.position;
    const temp = new THREE.Vector3();

    for (let i = 0; i < pos.count; i++) {
      temp.fromBufferAttribute(pos, i);
      const n =
        noise.noise3d(temp.x * 1.3, temp.y * 1.3, temp.z * 1.3) * 0.6 +
        noise.noise3d(temp.x * 3.2, temp.y * 3.2, temp.z * 3.2) * 0.25;
      const crater = Math.pow(Math.abs(n), 1.6) * (n > 0 ? 1 : -1);
      const scale = 1 + crater * 0.5;
      temp.multiplyScalar(scale);
      pos.setXYZ(i, temp.x, temp.y, temp.z);
    }

    pos.needsUpdate = true;
    geo.computeVertexNormals();
    return geo;
  }, [noise, size]);

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#3b2b17",
        roughness: 0.8,
        metalness: 0.35,
        emissive: "#ec6f00",
        emissiveIntensity: 0.25,
      }),
    []
  );

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += 0.05 * delta;
    ref.current.rotation.y += 0.08 * delta;

    ref.current.position.x += velocity[0] * delta;
    ref.current.position.y += velocity[1] * delta;
    ref.current.position.z += velocity[2] * delta;

    const limit = 60;
    ["x", "y", "z"].forEach((axis) => {
      if (ref.current.position[axis] > limit) ref.current.position[axis] = -limit;
      else if (ref.current.position[axis] < -limit) ref.current.position[axis] = limit;
    });
  });

  return (
    <mesh ref={ref} geometry={geometry} material={material} position={position} castShadow receiveShadow />
  );
};

/* -------------------- ASTEROID FIELD -------------------- */
const AsteroidField = () => {
  const asteroids = useMemo(
    () =>
      Array.from({ length: 14 }, () => ({
        position: [
          (Math.random() - 0.5) * 70,
          (Math.random() - 0.5) * 70,
          (Math.random() - 0.5) * 60,
        ],
        velocity: [
          (Math.random() - 0.5) * 1.4,
          (Math.random() - 0.5) * 1.4,
          (Math.random() - 0.5) * 1.0,
        ],
        size: 2.2,
      })),
    []
  );

  return (
    <>
      <ambientLight intensity={0.4} color="#ffb366" />
      <directionalLight position={[20, 25, 15]} intensity={2.1} color="#ff8c1a" castShadow />
      <pointLight position={[-12, -10, -8]} intensity={1.1} color="#ec6f00" />
      <pointLight position={[6, 6, 20]} intensity={0.8} color="#ffd699" />
      <Environment preset="sunset" background={false} />
      <ContactShadows position={[0, -10, 0]} opacity={0.4} scale={60} blur={2} far={20} />
      {asteroids.map((a, i) => (
        <RealisticAsteroid key={i} {...a} />
      ))}
    </>
  );
};

/* -------------------- PROJECT CARD -------------------- */
const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.4, 0.75)}>
      <Tilt
        options={{ max: 25, scale: 1.05, speed: 400 }}
        className="relative group 
                   w-[420px] h-[580px] 
                   sm:w-[380px] sm:h-[520px] 
                   md:w-[420px] md:h-[560px] 
                   lg:w-[440px] lg:h-[580px]
                   max-w-[90vw] flex flex-col"
      >
        <div
          className="absolute inset-0 clip-octagon bg-[#0b0d10]/85 border border-[#ec6f00]/60 
                     shadow-[0_0_25px_#ec6f00] hover:shadow-[0_0_60px_#ec6f00] 
                     hover:border-[#ff8c1a] backdrop-blur-md 
                     flex flex-col justify-between items-center 
                     p-6 sm:p-8 md:p-8 transition-all duration-500"
        >
          {/* Project Image */}
          <div className="relative w-full aspect-[16/9] mb-4 rounded-lg overflow-hidden flex-shrink-0 bg-[#0b0d10] border border-[#ec6f00]/40">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-center rounded-lg transition-transform duration-500 group-hover:scale-[1.05]"
              loading="lazy"
            />
          </div>

          {/* Title + Description */}
          <div className="flex flex-col justify-start flex-grow text-center">
            <h3 className="text-white font-bold text-[20px] sm:text-[18px] mb-2">{name}</h3>
            <p className="text-white/80 text-[13px] sm:text-[12px] leading-relaxed mb-3 px-2">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-3 px-1">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[12px] sm:text-[11px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>

          {/* Link Button */}
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-[#ec6f00] flex justify-center items-center 
                       cursor-pointer hover:scale-110 transition duration-300 shadow-[0_0_15px_#ec6f00]"
          >
            <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain invert" />
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

/* -------------------- MAIN -------------------- */
const Works = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-transparent">
      <div className="absolute inset-0 z-0">
        <Canvas
          shadows
          gl={{ alpha: true, physicallyCorrectLights: true }}
          camera={{ position: [0, 0, 30], fov: 55 }}
          style={{ background: "transparent" }}
        >
          <Suspense fallback={null}>
            <AsteroidField />
          </Suspense>
        </Canvas>
      </div>

      {/* Header */}
      <motion.div variants={textVariant()} className="text-center z-10 mb-12 mt-24 sm:mt-20">
        <h2 className={`${styles.sectionHeadText} text-[#ec6f00] text-[36px] sm:text-[28px]`}>
          Portfolio
        </h2>
      </motion.div>

      {/* Description */}
      <div className="w-full flex justify-center z-10 px-4 sm:px-6">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-2 text-white/90 text-[15px] sm:text-[13px] max-w-2xl text-center leading-[26px] sm:leading-[22px]"
        >
          These projects highlight my ability to design, build, and deploy interactive
          applications using modern technologies — combining creativity and scalability.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 sm:gap-x-8 gap-y-16 sm:gap-y-10 px-6 pb-28 justify-items-center items-start mt-16 sm:mt-12">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <style>
        {`
          .clip-octagon {
            clip-path: polygon(
              30% 0%, 70% 0%, 
              100% 30%, 100% 70%, 
              70% 100%, 30% 100%, 
              0% 70%, 0% 30%
            );
          }
        `}
      </style>
    </div>
  );
};

export default SectionWrapper(Works, "works");
