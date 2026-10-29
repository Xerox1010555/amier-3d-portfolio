"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
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

/** Ink-chrome torus knot with hairline orbits — the "gallery object". */
function Object1({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const ringA = useRef<THREE.Mesh>(null!);
  const ringB = useRef<THREE.Mesh>(null!);
  const scene = useThree((s) => s.scene);
  const gl = useThree((s) => s.gl);

  useEffect(() => {
    const env = new RoomEnvironment();
    const pmrem = new THREE.PMREMGenerator(gl);
    const envMap = pmrem.fromScene(env, 0.04).texture;
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
      const tx = state.pointer.x * 0.2;
      const ty = state.pointer.y * 0.12;
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, group.current.rotation.y + tx * 0.002 + dt * 0.06, 0.9);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -ty * 0.3, 0.06);
      group.current.position.y = Math.sin(t * 0.55) * 0.1;
    }
    if (ringA.current) ringA.current.rotation.z = t * 0.14;
    if (ringB.current) ringB.current.rotation.z = -t * 0.09;
  });

  const inkMat = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#17130e"),
        metalness: 0.9,
        roughness: 0.24,
        envMapIntensity: 1.3,
        clearcoat: 0.7,
        clearcoatRoughness: 0.22,
      }),
    []
  );

  return (
    <group ref={group} scale={0.98}>
      <Float speed={reduced ? 0 : 1.1} rotationIntensity={reduced ? 0 : 0.35} floatIntensity={reduced ? 0 : 0.65}>
        <mesh material={inkMat}>
          <torusKnotGeometry args={[1, 0.335, 280, 42, 2, 3]} />
        </mesh>
      </Float>

      {/* hairline print orbits */}
      <mesh ref={ringA} rotation={[Math.PI / 2.2, 0.25, 0]}>
        <torusGeometry args={[2.55, 0.007, 8, 220]} />
        <meshBasicMaterial color="#16130f" transparent opacity={0.4} />
      </mesh>
      <mesh ref={ringB} rotation={[Math.PI / 1.78, -0.42, 0.3]}>
        <torusGeometry args={[3.25, 0.006, 8, 240]} />
        <meshBasicMaterial color="#ff4d00" transparent opacity={0.55} />
      </mesh>

      <Satellite angle={0.7} radius={2.55} speed={0.4} color="#ff4d00" size={0.1} shape="sphere" reduced={reduced} />
      <Satellite angle={3.65} radius={3.25} speed={-0.28} color="#16130f" size={0.13} shape="knot" reduced={reduced} />

      {/* floating ink beads */}
      <Bead position={[2.5, 0.85, -0.5]} size={0.05} color="#16130f" reduced={reduced} />
      <Bead position={[-2.9, -0.6, 0.6]} size={0.042} color="#16130f" reduced={reduced} />
      <Bead position={[1.75, -1.15, 0.9]} size={0.035} color="#ff4d00" reduced={reduced} />
      <Bead position={[-1.6, 1.2, -1]} size={0.03} color="#16130f" reduced={reduced} />
    </group>
  );
}

function Satellite({
  angle,
  radius,
  speed,
  color,
  size,
  shape,
  reduced,
}: {
  angle: number;
  radius: number;
  speed: number;
  color: string;
  size: number;
  shape: "sphere" | "knot";
  reduced: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }, dt) => {
    if (reduced || !ref.current) return;
    const t = angle + clock.elapsedTime * speed;
    ref.current.position.set(Math.cos(t) * radius, Math.sin(t * 1.3) * 0.4, Math.sin(t) * radius);
    ref.current.rotation.y += dt * 0.6;
    ref.current.rotation.x += dt * 0.25;
  });
  return (
    <mesh ref={ref}>
      {shape === "sphere" ? <sphereGeometry args={[size, 28, 28]} /> : <octahedronGeometry args={[size, 0]} />}
      <meshPhysicalMaterial color={color} metalness={shape === "sphere" ? 0.35 : 0.85} roughness={0.28} envMapIntensity={1.1} />
    </mesh>
  );
}

function Bead({ position, size, color, reduced }: { position: [number, number, number]; size: number; color: string; reduced: boolean }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    if (reduced || !ref.current) return;
    const t = clock.elapsedTime;
    ref.current.position.y = position[1] + Math.sin(t * 0.7 + position[0]) * 0.08;
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 20, 20]} />
      <meshStandardMaterial color={color} roughness={0.35} metalness={0.5} />
    </mesh>
  );
}

export default function Hero3D() {
  const reduced = useReducedMotion();
  return (
    <Canvas
      className="hero-canvas"
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.35, 7.4], fov: 46 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop={reduced ? "demand" : "always"}
      style={{ position: "absolute", inset: 0 }}
    >
      <ambientLight intensity={0.62} />
      <directionalLight position={[4, 7, 5]} intensity={1.15} color="#fffdf8" />
      <pointLight position={[-5, -2, 3]} intensity={1.7} color="#ff4d00" distance={14} />
      <pointLight position={[4, 3, -4]} intensity={1.2} color="#ffe9d6" distance={16} />
      <Suspense fallback={null}>
        <Object1 reduced={reduced} />
      </Suspense>
    </Canvas>
  );
}
