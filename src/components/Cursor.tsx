"use client";

import { useEffect, useRef } from "react";

/** Custom cursor: smooth lerped ring + instant dot. Disabled on touch devices. */
export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (max-width: 720px)").matches) return;

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
      const t = e.target as HTMLElement | null;
      const hovering = !!t?.closest?.("a, button, [role='button'], input, textarea, select");
      targetScale = hovering ? 1.7 : 1;
    };

    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      scale += (targetScale - scale) * 0.2;
      if (ring.current) {
        ring.current.style.transform = `translate(${x}px, ${y}px) scale(${scale.toFixed(3)})`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={ring} aria-hidden="true" />
      <div className="cursor-dot" ref={dot} aria-hidden="true" />
    </>
  );
}
