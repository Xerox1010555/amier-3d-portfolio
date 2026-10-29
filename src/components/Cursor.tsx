"use client";

import { useEffect, useRef } from "react";

/** Restrained cursor: lerped cyan ring + instant dot, disabled on touch and reduced-motion. */
export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (max-width: 720px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let scale = 1;
    let targetScale = 1;
    let raf = 0;

    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${tx}px, ${ty}px)`;
      }
      const tgt = e.target as HTMLElement | null;
      const hovering = !!tgt?.closest?.("a, button, [role='button'], input, textarea, select");
      targetScale = hovering ? 1.6 : 1;
    };

    const loop = () => {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      scale += (targetScale - scale) * 0.14;
      if (ring.current) {
        ring.current.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
      }
      raf = requestAnimationFrame(loop);
    };

    document.documentElement.classList.add("has-cursor");
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", move, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return (
    <div className="cursor-layer" aria-hidden="true">
      <div className="cursor-ring" ref={ring} />
      <div className="cursor-dot" ref={dot} />
    </div>
  );
}
