"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
  }, []);
  return reduced;
}

function Planet({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null!);
  const orbiters = useRef<THREE.Group>(null!);
  const scene = useThree((s) => s.scene);
  const gl = useThree((s) => s.gl);

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

  useFrame(({ clock }, dt) => {
    if (reduced) return;
    group.current.rotation.y += dt * 0.22;
    orbiters.current.rotation.y -= dt * 0.4;
    orbiters.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.1;
  });

  return (
    <group ref={group} rotation={[0.3, 0, 0.08]}>
      <mesh>
        <sphereGeometry args={[1.35, 48, 48]} />
        <meshStandardMaterial color="#0b1322" metalness={0.65} roughness={0.3} envMapIntensity={1.1} />
      </mesh>
      {/* meridian glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.85, 0.01, 10, 150]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.9} transparent opacity={0.65} />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0.5, 0]}>
        <torusGeometry args={[2.5, 0.007, 10, 150]} />
        <meshStandardMaterial color="#a78bfa" emissive="#a78bfa" emissiveIntensity={0.7} transparent opacity={0.5} />
      </mesh>
      <group ref={orbiters}>
        <Orbiter angle={0} radius={1.85} color="#22d3ee" reduced={reduced} />
        <Orbiter angle={2.1} radius={1.85} color="#a78bfa" reduced={reduced} />
        <Orbiter angle={4.4} radius={1.85} color="#d4af37" reduced={reduced} />
      </group>
    </group>
  );
}

function Orbiter({ angle, radius, color, reduced }: { angle: number; radius: number; color: string; reduced: boolean }) {
  const ref = useRef<THREE.Mesh>(null!);
  const inRing = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    if (reduced || !ref.current || !inRing.current) return;
    const t = angle + clock.elapsedTime * 0.85;
    ref.current.position.set(Math.cos(t) * radius, 0.04, Math.sin(t) * radius);
    ref.current.rotation.y += 0.02;
    inRing.current.rotation.set(Math.PI / 2 + Math.cos(t) * 0.12, Math.sin(t) * 0.12, t);
  });
  return (
    <>
      <mesh ref={inRing} rotation={[Math.PI / 2, 0, angle]}>
        <torusGeometry args={[radius, 0.004, 8, 120]} />
        <meshStandardMaterial color="#cfe6f5" transparent opacity={0.32} roughness={0.4} metalness={0.2} />
      </mesh>
      <mesh ref={ref}>
        <octahedronGeometry args={[0.085, 0]} />
        <meshPhysicalMaterial color={color} metalness={0.9} roughness={0.15} envMapIntensity={1.4} />
      </mesh>
    </>
  );
}

export default function Contact3D() {
  const reduced = useReducedMotion();
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.6, 5.4], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      frameloop={reduced ? "demand" : "always"}
      style={{ width: "100%", height: "100%" }}
    >
      <color attach="background" args={["#070a12"]} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[3, 5, 4]} intensity={1.15} color="#cfeaff" />
      <pointLight position={[-3.5, -1.5, 2.5]} intensity={2.4} color="#22d3ee" distance={10} />
      <Suspense fallback={null}>
        <Float speed={1.1} floatIntensity={0.55} rotationIntensity={reduced ? 0 : 0.35}>
          <Planet reduced={reduced} />
        </Float>
        <Stars radius={34} depth={26} count={1400} factor={2.6} saturation={0.3} fade speed={reduced ? 0 : 0.4} />
      </Suspense>
    </Canvas>
  );
}
