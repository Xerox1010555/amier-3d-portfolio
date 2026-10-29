"use client";

import { useState, useCallback, useRef } from "react";
import { PROJECTS, FILTERS, LINK, type Project } from "@/data/projects";

export default function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all");
  const [active, setActive] = useState<Project | null>(null);
  const [cap, setCap] = useState("");

  const previewRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const items = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);
  const count = (id: (typeof FILTERS)[number]["id"]) =>
    id === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.cat === id).length;

  /** Floating preview follows the cursor over the list. */
  const onMove = useCallback((e: React.MouseEvent) => {
    const pv = previewRef.current;
    if (!pv) return;
    const x = Math.min(e.clientX + 28, window.innerWidth - 356);
    const y = Math.max(e.clientY - 215, 14);
    pv.style.left = `${x}px`;
    pv.style.top = `${y}px`;
  }, []);

  const enterRow = useCallback((p: Project) => {
    if (!p.shot || !imgRef.current) return;
    if (!imgRef.current.src.endsWith(p.shot)) imgRef.current.src = p.shot;
    setCap(`${p.title} — LIVE ↗`);
    previewRef.current?.classList.add("on");
  }, []);

  const leaveRow = useCallback(() => {
    previewRef.current?.classList.remove("on");
  }, []);

  return (
    <section className="work wrap" id="work">
      <div className="work-head reveal">
        <div>
          <span className="kicker">Index of work</span>
          <h2 className="section-title" style={{ marginTop: 14 }}>
            14 builds. 12 live.
          </h2>
          <p className="section-sub" style={{ marginTop: 12 }}>
            Hover a row to preview it. Open one, push on it — every deployment is real
            and every repository is public.
          </p>
        </div>
        <div className="filters" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button key={f.id} className="filter" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
              {f.label} <span className="cnt">({count(f.id)})</span>
            </button>
          ))}
        </div>
      </div>

      <div
        className="preview"
        ref={previewRef}
        aria-hidden="true"
        onClick={() => window.open(active?.live, "_blank")}
      >
        <img ref={imgRef} alt="" />
        <span className="cap">{cap}</span>
      </div>

      <div className="index-list reveal" onMouseMove={onMove} style={{ transitionDelay: "80ms" }}>
        {items.map((p, i) => (
          <Row key={p.slug} p={p} num={i + 1} onOpen={() => setActive(p)} onEnter={() => enterRow(p)} onLeave={leaveRow} />
        ))}
      </div>

      {active && <ProjectModal p={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function Row({
  p,
  num,
  onOpen,
  onEnter,
  onLeave,
}: {
  p: Project;
  num: number;
  onOpen: () => void;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <article
      className={p.live ? "row" : "row no-live"}
      tabIndex={0}
      role="button"
      aria-label={`Open details of ${p.title}`}
      onMouseEnter={p.shot ? onEnter : undefined}
      onMouseLeave={onLeave}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen();
        }
      }}
    >
      <span className="r-num">№{String(num).padStart(2, "0")}</span>
      <div>
        <h3 className="r-title">{p.title}</h3>
        <div className="r-kind">{p.kind}</div>
      </div>
      <div className="r-side">
        <span className="r-tag">{p.tags[0]}</span>
        <div className="r-links">
          {p.live && (
            <a className="blueprint" href={p.live} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
              Live ↗
            </a>
          )}
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
              Source ↗
            </a>
          )}
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
          <img className="modal-shot" src={p.shot} alt={`${p.title} — live screenshot`} onError={() => setBroken(true)} />
        ) : (
          <div className="no-shot">{p.kind.toUpperCase()}</div>
        )}
        <div className="modal-body">
          <div className="card-kind">{p.kind}</div>
          <h3>{p.title}</h3>
          <div className="card-tags">
            {p.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <p>{p.detail}</p>
          <div className="modal-cta">
            {p.live && (
              <a className="btn btn-primary btn-sm" href={p.live} target="_blank" rel="noreferrer">
                Open live ↗
              </a>
            )}
            {p.repo && (
              <a className="btn btn-sm" href={p.repo} target="_blank" rel="noreferrer">
                Source ↗
              </a>
            )}
            <a className="btn btn-sm" href={LINK.whatsapp} target="_blank" rel="noreferrer">
              Ask about it →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
