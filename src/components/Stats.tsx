"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/i18n/dictionary";
import { useLang } from "@/i18n/lang";

/** Count-up that respects reduced motion and ?static=1. */
function Tile({
  n, suffix, label, href, run,
}: {
  n: number; suffix: string; label: string; href: string; run: boolean;
}) {
  const [v, setV] = useState(run ? n : 0);

  useEffect(() => {
    if (!run) return;
    setV(n);
    return;
  }, [run, n]);

  useEffect(() => {
    if (!run) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setV(n);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const dur = 900;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(n * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, n]);

  return (
    <a className="stat-tile" href={href}>
      <span className="stat-n">{v}{suffix}</span>
      <span className="stat-l">{label}</span>
    </a>
  );
}

export default function Stats() {
  const { t } = useLang();
  const band = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = band.current;
    if (!el) return;
    if (new URLSearchParams(window.location.search).has("static")) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="stats-band" ref={band}>
      {STATS.items.map((s) => (
        <Tile key={s.label.en} n={s.n} suffix={s.suffix} label={t(s.label)} href={s.href} run={on} />
      ))}
      <div className="stat-tile stat-zero">
        <span className="stat-n amber">{STATS.zeroTile.n}</span>
        <span className="stat-l">{t(STATS.zeroTile.label)}</span>
      </div>
      <p className="stats-caption">{t(STATS.caption)}</p>
    </div>
  );
}
