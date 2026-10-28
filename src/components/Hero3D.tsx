"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import { Suspense, useMemo, useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener?.("change", on);
    return () => mq.removeEventListener?.("change", on);
  }, []);
  return reduced;
}

/** Glassy icosahedron core with wireframe orbit rings */
function Core({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const ringA = useRef<THREE.Mesh>(null!);
  const ringB = useRef<THREE.Mesh>(null!);
  const scene = useThree((s) => s.scene);
  const gl = useThree((s) => s.gl);

  // local, zero-download environment lighting (PMREM room)
  useEffect(() => {
    const env = new RoomEnvironment();
    const pmrem = new THREE.PMREMGenerator(gl);
    const envMap = pmrem.fromScene(env, 0.06).texture;
    scene.environment = envMap;
    return () => {
      envMap.dispose();
      pmrem.dispose();
      (env as unknown as { dispose?: () => void }).dispose?.();
    };
  }, [gl, scene]);

  useFrame((state, dt) => {
    if (reduced) return;
    const t = state.clock.elapsedTime;
    if (group.current) {
      // pointer parallax
      const tx = state.pointer.x * 0.22;
      const ty = state.pointer.y * 0.14;
      group.current.rotation.y += (tx - group.current.rotation.y) * Math.min(1, dt * 2.4);
      group.current.rotation.x += (-ty - group.current.rotation.x) * Math.min(1, dt * 2.4);
      group.current.position.y = Math.sin(t * 0.6) * 0.14;
    }
    if (ringA.current) ringA.current.rotation.z = t * 0.16;
    if (ringB.current) ringB.current.rotation.z = -t * 0.1;
  });

  const ringMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#22d3ee", roughness: 0.3, metalness: 0.8, transparent: true, opacity: 0.5 }),
    []
  );
  const ringMat2 = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#a78bfa", roughness: 0.3, metalness: 0.8, transparent: true, opacity: 0.38 }),
    []
  );

  return (
    <group ref={group} scale={1.12}>
      <Float speed={reduced ? 0 : 1.4} rotationIntensity={reduced ? 0 : 0.5} floatIntensity={reduced ? 0 : 0.8}>
        <mesh castShadow>
          <icosahedronGeometry args={[1.05, 1]} />
          <meshPhysicalMaterial
            color="#0d1420"
            metalness={0.28}
            roughness={0.12}
            transmission={0.62}
            thickness={1.4}
            ior={1.45}
            envMapIntensity={1.35}
            clearcoat={1}
            clearcoatRoughness={0.08}
          />
        </mesh>
        {/* inner glowing core */}
        <mesh scale={0.55}>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial color={new THREE.Color("#22d3ee").multiplyScalar(0.9)} emissive="#22d3ee" emissiveIntensity={0.65} roughness={0.25} metalness={0.2} transparent opacity={0.85} />
        </mesh>
      </Float>

      <mesh ref={ringA} rotation={[Math.PI / 2.25, 0.2, 0]}>
        <torusGeometry args={[2.05, 0.012, 10, 160]} />
        <primitive object={ringMat} attach="material" />
      </mesh>
      <mesh ref={ringB} rotation={[Math.PI / 1.85, -0.32, 0.4]}>
        <torusGeometry args={[2.75, 0.008, 10, 180]} />
        <primitive object={ringMat2} attach="material" />
      </mesh>

      {/* 4 orbiting shards */}
      <Satellite angle={0.4} radius={2.05} speed={0.5} color="#22d3ee" reduced={reduced} />
      <Satellite angle={2.2} radius={2.05} speed={0.5} color="#a78bfa" reduced={reduced} />
      <Satellite angle={4.2} radius={2.75} speed={-0.32} color="#d4af37" reduced={reduced} size={0.07} />
      <Satellite angle={5.4} radius={2.75} speed={-0.32} color="#22d3ee" reduced={reduced} size={0.055} />
    </group>
  );
}

function Satellite({ angle, radius, speed, color, reduced, size = 0.085 }: { angle: number; radius: number; speed: number; color: string; reduced: boolean; size?: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    if (reduced || !ref.current) return;
    const t = angle + clock.elapsedTime * speed;
    ref.current.position.set(Math.cos(t) * radius, Math.sin(t * 1.4) * 0.32, Math.sin(t) * radius);
    ref.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[size, 0]} />
      <meshPhysicalMaterial color={color} metalness={0.9} roughness={0.18} envMapIntensity={1.2} />
    </mesh>
  );
}

export default function Hero3D() {
  const reduced = useReducedMotion();
  return (
    <Canvas
      className="hero-canvas"
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.4, 6.6], fov: 52 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop={reduced ? "demand" : "always"}
      style={{ position: "absolute", inset: 0 }}
    >
      <color attach="background" args={["#05060a"]} />
      <fog attach="fog" args={["#05060a", 9, 26]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 4]} intensity={1.4} color="#bfe9ff" />
      <pointLight position={[-4, -2, 3]} intensity={2.6} color="#22d3ee" distance={12} />
      <pointLight position={[5, 2.5, -3]} intensity={2.2} color="#a78bfa" distance={13} />
      <Suspense fallback={null}>
        <Stars radius={58} depth={42} count={3600} factor={3.4} saturation={0.35} fade speed={reduced ? 0 : 0.55} />
        <Core reduced={reduced} />
      </Suspense>
    </Canvas>
  );
}
