"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
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

function Globe({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null!);
  const orbiters = useRef<THREE.Group>(null!);
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

  useFrame(({ clock }, dt) => {
    if (reduced) return;
    group.current.rotation.y += dt * 0.18;
    orbiters.current.rotation.y -= dt * 0.38;
    orbiters.current.position.y = Math.sin(clock.elapsedTime * 0.75) * 0.08;
  });

  return (
    <group ref={group} rotation={[0.28, 0, 0.06]}>
      <mesh>
        <sphereGeometry args={[1.35, 52, 52]} />
        <meshPhysicalMaterial color="#15110d" metalness={0.88} roughness={0.28} envMapIntensity={1.15} clearcoat={0.5} clearcoatRoughness={0.3} />
      </mesh>
      {/* hairline print rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.9, 0.006, 8, 180]} />
        <meshBasicMaterial color="#16130f" transparent opacity={0.5} />
      </mesh>
      <mesh rotation={[Math.PI / 2.35, 0.45, 0]}>
        <torusGeometry args={[2.55, 0.006, 8, 180]} />
        <meshBasicMaterial color="#ff4d00" transparent opacity={0.6} />
      </mesh>
      <group ref={orbiters}>
        <Orbiter angle={0} radius={1.9} color="#ff4d00" shape="sphere" reduced={reduced} />
        <Orbiter angle={2.2} radius={1.9} color="#16130f" shape="octa" reduced={reduced} />
        <Orbiter angle={4.4} radius={2.55} color="#fffcf6" shape="stamp" reduced={reduced} />
      </group>
    </group>
  );
}

function Orbiter({
  angle,
  radius,
  color,
  shape,
  reduced,
}: {
  angle: number;
  radius: number;
  color: string;
  shape: "sphere" | "octa" | "stamp";
  reduced: boolean;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  const ring = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }, dt) => {
    if (reduced || !ref.current || !ring.current) return;
    const t = angle + clock.elapsedTime * 0.8;
    ref.current.position.set(Math.cos(t) * radius, shape === "stamp" ? Math.sin(t * 2) * 0.5 : 0.03, Math.sin(t) * radius);
    ref.current.rotation.y += dt * 0.5;
  });
  return (
    <>
      <mesh ref={ring} rotation={[Math.PI / 2, 0, angle]}>
        <torusGeometry args={[radius, 0.004, 6, 140]} />
        <meshBasicMaterial color="#16130f" transparent opacity={0.32} />
      </mesh>
      <mesh ref={ref}>
        {shape === "sphere" && <sphereGeometry args={[0.085, 24, 24]} />}
        {shape === "octa" && <octahedronGeometry args={[0.1, 0]} />}
        {shape === "stamp" && <torusGeometry args={[0.09, 0.03, 10, 28]} />}
        <meshPhysicalMaterial color={color} metalness={0.55} roughness={0.3} envMapIntensity={1.1} />
      </mesh>
    </>
  );
}

export default function Contact3D() {
  const reduced = useReducedMotion();
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.55, 5.5], fov: 48 }}
      gl={{ antialias: true, alpha: true }}
      frameloop={reduced ? "demand" : "always"}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 6, 4]} intensity={1.1} color="#fffdf8" />
      <pointLight position={[-3.5, -1.5, 2.5]} intensity={1.8} color="#ff4d00" distance={11} />
      <Suspense fallback={null}>
        <Float speed={1} floatIntensity={0.5} rotationIntensity={reduced ? 0 : 0.3}>
          <Globe reduced={reduced} />
        </Float>
      </Suspense>
    </Canvas>
  );
}
