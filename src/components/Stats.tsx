"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { n: 14, label: "Public repositories", suffix: "" },
  { n: 12, label: "Live deployments", suffix: "" },
  { n: 50, label: "Projects delivered", suffix: "+" },
  { n: 4, label: "Years of experience", suffix: "+" },
];

export default function Stats() {
  const band = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = band.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="stats-band" ref={band}>
      {STATS.map((s) => (
        <Stat key={s.label} n={s.n} suffix={s.suffix} label={s.label} run={on} />
      ))}
    </div>
  );
}

function Stat({ n, suffix, label, run }: { n: number; suffix: string; label: string; run: boolean }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(n);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      setVal(Math.round(eased * n));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, n]);

  return (
    <div className="stat">
      <b>
        {val}
        {suffix ? <sup>{suffix}</sup> : null}
      </b>
      <span>{label}</span>
    </div>
  );
}
