"use client";

import { useState, useCallback, useRef } from "react";
import { PROJECTS, FILTERS, LINK, type Project } from "@/data/projects";

export default function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const [active, setActive] = useState<Project | null>(null);

  const items = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <section className="work wrap" id="work">
      <div className="work-head reveal">
        <div>
          <span className="kicker">Selected work</span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            Every card below is <span style={{ color: "var(--cyan)" }}>live</span> — open one, try it.
          </h2>
          <p className="section-sub" style={{ marginTop: 12 }}>
            Real deployments, real repositories. No screenshots of sad folders — everything here
            runs on Vercel right now, and you are invited to push on it.
          </p>
        </div>
        <div className="filters" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button key={f.id} className="filter" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="work-grid">
        {items.map((p, i) => (
          <Card key={p.slug} p={p} index={i} onOpen={() => setActive(p)} />
        ))}
      </div>

      {active && <ProjectModal p={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function Card({ p, index, onOpen }: { p: Project; index: number; onOpen: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const [broken, setBroken] = useState(false);

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
    const rx = ((e.clientY - r.top) / r.height - 0.5) * -3.4;
    const ry = ((e.clientX - r.left) / r.width - 0.5) * 3.8;
    el.style.transform = `translateY(-6px) perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  }, []);

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (el) el.style.transform = "";
  }, []);

  return (
    <article
      ref={ref}
      className="card reveal"
      style={{ "--ac": p.accent, animationDelay: `${(index % 3) * 60}ms` } as React.CSSProperties}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onOpen}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), onOpen())}
      tabIndex={0}
      role="button"
      aria-label={`Open details of ${p.title}`}
    >
      <div className="card-glow" />
      <div className="card-shot">
        {p.shot && !broken ? (
          <img src={p.shot} alt={`${p.title} — live screenshot`} loading="lazy" onError={() => setBroken(true)} />
        ) : (
          <div className="no-shot">{p.kind.toUpperCase()}</div>
        )}
      </div>
      <div className="card-body">
        <div className="card-kind">{p.kind}</div>
        <h3>{p.title}</h3>
        <p>{p.blurb}</p>
        <div className="card-tags">
          {p.tags.slice(0, 4).map((t) => <span key={t}>{t}</span>)}
        </div>
        <div className="card-links">
          {p.live && (
            <a className="live" href={p.live} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
              Live demo ↗
            </a>
          )}
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
              Source ↗
            </a>
          )}
          {!p.live && <span className="card-tags" style={{ padding: 8, color: "var(--ink-2)", fontSize: 12 }}>Desktop app — source on GitHub</span>}
        </div>
      </div>
    </article>
  );
}

function ProjectModal({ p, onClose }: { p: Project; onClose: () => void }) {
  const [broken, setBroken] = useState(false);

  return (
    <div className="modal-veil" role="dialog" aria-modal="true" aria-label={p.title} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" aria-label="Close" onClick={onClose}>✕</button>
        {p.shot && !broken ? (
          <img className="modal-shot" src={p.shot} alt={`${p.title} screenshot`} onError={() => setBroken(true)} />
        ) : (
          <div className="no-shot" style={{ aspectRatio: "16/9" }}>{p.kind.toUpperCase()}</div>
        )}
        <div className="modal-body">
          <div className="card-kind">{p.kind}</div>
          <h3 style={{ fontSize: 26, marginTop: 8 }}>{p.title}</h3>
          <div className="card-tags">
            {p.tags.map((t) => <span key={t}>{t}</span>)}
          </div>
          <p>{p.detail}</p>
          <div className="modal-cta">
            {p.live && <a className="btn btn-primary btn-sm" href={p.live} target="_blank" rel="noreferrer">Open live deployment ↗</a>}
            {p.repo && <a className="btn btn-sm" href={p.repo} target="_blank" rel="noreferrer">View source ↗</a>}
            <a className="btn btn-ghost btn-sm" href={LINK.whatsapp} target="_blank" rel="noreferrer">Ask about this project</a>
          </div>
        </div>
      </div>
    </div>
  );
}
