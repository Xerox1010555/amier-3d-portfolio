"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState, type ComponentRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import type { Orbit } from "@/data/stories";

const HUES: Record<string, number> = {
  business: 0xffb35c,
  software: 0x7fd7ff,
  ai: 0x9ff0e4,
};

/** Tilt + speed + radius per orbit — three visibly distinct planes. */
const RING_CFG: { id: Orbit["id"]; tilt: [number, number, number]; radius: number; speed: number; phase: number }[] = [
  { id: "business", tilt: [-0.55, 0, 0.35], radius: 2.05, speed: 0.16, phase: 0.2 },
  { id: "software", tilt: [0.5, 0.35, -0.3], radius: 2.4, speed: -0.12, phase: 2.3 },
  { id: "ai", tilt: [0.15, -0.5, 0.75], radius: 2.75, speed: 0.09, phase: 4.4 },
];

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

function SceneEnvironment() {
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
      scene.environment = null;
    };
  }, [scene, gl]);
  return null;
}

/** Glass core: faceted icosahedron with a hairline wire cage + colored heart. */
function Core({ activeColor, reduced }: { activeColor: string; reduced: boolean }) {
  const group = useRef<THREE.Group>(null!);
  const heart = useRef<THREE.Mesh>(null!);
  const mat = useRef<THREE.MeshPhysicalMaterial>(null!);
  const target = new THREE.Color(activeColor);

  useFrame((state) => {
    const tt = state.clock.elapsedTime;
    if (!reduced) {
      group.current.rotation.y = tt * 0.12;
      heart.current.scale.setScalar(1 + Math.sin(tt * 1.4) * 0.06);
    }
    mat.current?.emissive.lerp(target, 0.04);
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.12, 1]} />
        <meshPhysicalMaterial
          ref={mat}
          color="#101a30"
          metalness={0.08}
          roughness={0.16}
          clearcoat={1}
          clearcoatRoughness={0.22}
          transparent
          opacity={0.92}
          emissive="#0b1225"
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.24, 1]} />
        <meshBasicMaterial color="#7fd7ff" wireframe transparent opacity={0.18} />
      </mesh>
      <mesh ref={heart}>
        <octahedronGeometry args={[0.3, 0]} />
        <meshBasicMaterial color={activeColor} />
      </mesh>
    </group>
  );
}

/** One tilted ring + its orb (clickable, with an HTML button label). */
function Ring({
  cfg, active, onSelect, reduced, label,
}: {
  cfg: (typeof RING_CFG)[number];
  active: boolean;
  onSelect: (id: Orbit["id"]) => void;
  reduced: boolean;
  label: string;
}) {
  const group = useRef<THREE.Group>(null!);
  const orbRef = useRef<THREE.Group>(null!);
  const [hover, setHover] = useState(false);
  const hue = HUES[cfg.id];

  useFrame((_state, dt) => {
    if (!reduced) group.current.rotation.z += dt * cfg.speed;
    const want = active || hover ? 1.35 : 1;
    const current = orbRef.current.scale.x;
    const next = current + (want - current) * 0.14;
    orbRef.current.scale.setScalar(next);
  });

  return (
    <group rotation={cfg.tilt}>
      <mesh>
        <torusGeometry args={[cfg.radius, 0.006, 8, 110]} />
        <meshBasicMaterial color={hue} transparent opacity={active ? 0.75 : 0.3} />
      </mesh>
      <group ref={group} rotation={[0, 0, cfg.phase]}>
        <group ref={orbRef} position={[cfg.radius, 0, 0]}>
          <mesh
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            onPointerDown={() => onSelect(cfg.id)}
          >
            <octahedronGeometry args={[0.17, 0]} />
            <meshStandardMaterial
              color={hue}
              emissive={hue}
              emissiveIntensity={active ? 0.9 : 0.25}
              roughness={0.35}
            />
          </mesh>
          <Html center distanceFactor={7} zIndexRange={[20, 0]} style={{ pointerEvents: "auto" }}>
            <button
              type="button"
              className={`ns-orb n-${cfg.id}${active || hover ? " is-active" : ""}`}
              style={{ color: `#${new THREE.Color(hue).getHexString()}` }}
              onClick={() => onSelect(cfg.id)}
              aria-pressed={active}
            >
              {label}
            </button>
          </Html>
        </group>
      </group>
    </group>
  );
}

export type NorthStar3DHandle = ComponentRef<typeof Canvas>;

export default function NorthStar3D({
  active,
  onSelect,
  labels,
}: {
  active: string;
  onSelect: (id: Orbit["id"]) => void;
  labels: Record<string, string>;
}) {
  const reduced = useReducedMotion();
  const world = useRef<THREE.Group>(null!);
  const activeColor = `#${new THREE.Color(HUES[active] ?? HUES.software).getHexString()}`;

  // Restrained parallax: the whole constellation leans toward the pointer.
  useFrame((state) => {
    if (reduced) return;
    const ty = state.pointer.x * 0.16;
    const tx = state.pointer.y * 0.09;
    world.current.rotation.y += (ty - world.current.rotation.y) * 0.04;
    world.current.rotation.x += (tx - world.current.rotation.x) * 0.04;
  });

  return (
    <Canvas
      className="ns-canvas"
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.55, 6.4], fov: 42 }}
      frameloop={reduced ? "demand" : "always"}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <SceneEnvironment />
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 4, 2]} intensity={0.9} />
        <group ref={world}>
          <Core activeColor={activeColor} reduced={reduced} />
          {RING_CFG.map((cfg) => (
            <Ring
              key={cfg.id}
              cfg={cfg}
              active={active === cfg.id}
              onSelect={onSelect}
              reduced={reduced}
              label={labels[cfg.id] ?? cfg.id}
            />
          ))}
        </group>
      </Suspense>
    </Canvas>
  );
}
