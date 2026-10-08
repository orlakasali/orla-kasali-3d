"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function GlassOrb({
  position,
  scale,
  color,
  opacity,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  opacity: number;
  speed: number;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    const time = state.clock.elapsedTime;

    group.current.rotation.x = time * speed * 0.18;
    group.current.rotation.y = time * speed * 0.24;
    group.current.position.y =
      position[1] + Math.sin(time * speed * 0.45) * 0.12;
  });

  return (
    <group ref={group} position={position} scale={scale}>
      <mesh>
        <icosahedronGeometry args={[1.7, 4]} />

        <meshPhysicalMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.16}
          metalness={0.08}
          roughness={0.08}
          transmission={0.9}
          thickness={1.2}
          ior={1.45}
          transparent
          opacity={opacity}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>

      <mesh scale={1.035}>
        <icosahedronGeometry args={[1.7, 4]} />

        <meshBasicMaterial
          color="#ff3030"
          transparent
          opacity={0.08}
          wireframe
        />
      </mesh>
    </group>
  );
}

function GlassDisc({
  position,
  rotation,
  scale,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;

    mesh.current.rotation.z =
      rotation[2] + Math.sin(state.clock.elapsedTime * 0.15) * 0.12;

    mesh.current.rotation.y =
      rotation[1] + state.clock.elapsedTime * 0.04;
  });

  return (
    <mesh
      ref={mesh}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <torusGeometry args={[2.2, 0.035, 24, 180]} />

      <meshPhysicalMaterial
        color="#ff3838"
        emissive="#ff1515"
        emissiveIntensity={0.15}
        metalness={0.15}
        roughness={0.12}
        transmission={0.7}
        thickness={0.5}
        transparent
        opacity={0.22}
      />
    </mesh>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.3} />

      <pointLight
        position={[4, 3, 4]}
        intensity={8}
        color="#ff2020"
        distance={10}
      />

      <pointLight
        position={[-4, 1, 1]}
        intensity={5}
        color="#8f0000"
        distance={9}
      />

      <pointLight
        position={[0, -3, -3]}
        intensity={3}
        color="#ffffff"
        distance={8}
      />

      {/* Large translucent glass form */}
      <Float
        speed={0.7}
        rotationIntensity={0.18}
        floatIntensity={0.35}
      >
        <GlassOrb
          position={[2.9, 0.8, -0.5]}
          scale={1.65}
          color="#ff1717"
          opacity={0.16}
          speed={0.8}
        />
      </Float>

      {/* Smaller floating glass form */}
      <Float
        speed={0.95}
        rotationIntensity={0.3}
        floatIntensity={0.5}
      >
        <GlassOrb
          position={[-2.9, 1.5, -1.5]}
          scale={0.7}
          color="#ff3b3b"
          opacity={0.13}
          speed={0.7}
        />
      </Float>

      {/* Lower glass form */}
      <Float
        speed={0.6}
        rotationIntensity={0.25}
        floatIntensity={0.45}
      >
        <GlassOrb
          position={[0.8, -2.2, -1.2]}
          scale={0.85}
          color="#a50000"
          opacity={0.12}
          speed={0.55}
        />
      </Float>

      {/* Very distant atmospheric glass */}
      <Float
        speed={0.45}
        rotationIntensity={0.15}
        floatIntensity={0.3}
      >
        <GlassOrb
          position={[-4.3, -1.7, -3]}
          scale={1.05}
          color="#ff2424"
          opacity={0.08}
          speed={0.4}
        />
      </Float>

      {/* Soft glass rings integrated into the atmosphere */}
      <GlassDisc
        position={[3.2, 0.4, -1.8]}
        rotation={[0.8, 0.2, 0.5]}
        scale={1.15}
      />

      <GlassDisc
        position={[-2.6, 1.5, -3]}
        rotation={[1.2, -0.4, -0.7]}
        scale={0.55}
      />

      <Sparkles
        count={160}
        scale={[14, 10, 10]}
        size={1.1}
        speed={0.18}
        opacity={0.4}
        color="#ff4a4a"
      />
    </>
  );
}

export default function PortfolioScene() {
  return (
    <div
      className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 48,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}