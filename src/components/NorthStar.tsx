"use client";

import dynamic from "next/dynamic";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import { ORBITS } from "@/data/stories";
import { SECTIONS } from "@/i18n/dictionary";
import { useLang } from "@/i18n/lang";

const NorthStar3D = dynamic(() => import("@/components/NorthStar3D"), {
  ssr: false,
  loading: () => null,
});

const HUES: Record<string, string> = {
  business: "#ffb35c",
  software: "#7fd7ff",
  ai: "#9ff0e4",
};

/** CSS orbit diagram — the honest fallback for touch, small screens or WebGL-less machines. */
function FallbackDiagram({
  active, onSelect, hint,
}: {
  active: string;
  onSelect: (id: string) => void;
  hint: string;
}) {
  const { t } = useLang();
  return (
    <div className="ns-fallback" role="presentation">
      <div className="ns-fb-rings" aria-hidden="true">
        <span className="r1" /><span className="r2" /><span className="r3" />
        <span className="ns-fb-core" />
      </div>
      <div className="ns-fb-orbs">
        {ORBITS.map((o) => (
          <button
            key={o.id}
            type="button"
            className={`ns-orb n-${o.id}${active === o.id ? " is-active" : ""}`}
            style={{ color: HUES[o.id] }}
            onClick={() => onSelect(o.id)}
          >
            {t(o.name)}
          </button>
        ))}
      </div>
      <p className="ns-fb-hint">{t(SECTIONS.northstar.fallbackHint)}</p>
    </div>
  );
}

/** Runtime airbag: if the 3D centerpiece throws (driver crash, context loss),
    switch this panel back to the CSS diagram instead of losing the page. */
class NorthStarBoundary extends Component<
  { children: ReactNode; onCrash: () => void },
  { crashed: boolean }
> {
  state = { crashed: false };
  static getDerivedStateFromError() {
    return { crashed: true };
  }
  componentDidCatch() {
    this.props.onCrash();
  }
  render() {
    return this.state.crashed ? null : this.props.children;
  }
}

export default function NorthStar() {
  const { t } = useLang();
  const [can3D, setCan3D] = useState(false);
  const [checked, setChecked] = useState(false);
  const [crashed3D, setCrashed3D] = useState(false);
  const [mounted3D, setMounted3D] = useState(false);
  const [active, setActive] = useState<string>("software");
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // WebGL available AND a reasonably large screen → the 3D centerpiece.
    // Otherwise the CSS orbit diagram (also the touch-friendly mobile view).
    let gl = false;
    try {
      const c = document.createElement("canvas");
      gl = !!(c.getContext("webgl2") || c.getContext("webgl"));
    } catch {
      gl = false;
    }
    const big = window.matchMedia("(min-width: 721px) and (hover: hover)").matches;
    setCan3D(!!gl && big);
    setChecked(true);
  }, []);

  const orb = ORBITS.find((o) => o.id === active) ?? ORBITS[1];
  const show3D = checked && can3D && !crashed3D;

  // Hide the diagram underlay the moment a real 3D canvas exists above it.
  useEffect(() => {
    if (!show3D || mounted3D) return undefined;
    const el = wrapRef.current;
    if (!el) return undefined;
    if (el.querySelector("canvas")) {
      setMounted3D(true);
      return undefined;
    }
    const obs = new MutationObserver(() => {
      if (el.querySelector("canvas")) {
        obs.disconnect();
        setMounted3D(true);
      }
    });
    obs.observe(el, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, [show3D, mounted3D]);

  const diagram = (
    <FallbackDiagram
      active={active}
      onSelect={setActive}
      hint={t(SECTIONS.northstar.fallbackHint)}
    />
  );

  return (
    <section className="ns wrap" id="northstar">
      <div className="ns-head">
        <span className="kicker reveal">{t(SECTIONS.northstar.no)}</span>
        <h2 className="h2 reveal">{t(SECTIONS.northstar.h2)}</h2>
        <p className="lede reveal">{t(SECTIONS.northstar.intro)}</p>
      </div>

      <div className="ns-stage">
        <div className="ns-canvas-wrap reveal" aria-label={t(SECTIONS.northstar.coreLabel)} ref={wrapRef}>
          {show3D ? (
            <>
              {/* The diagram stays legible while the 3D chunk warms up,
                  then the canvas exactly covers it. Never an empty panel. */}
              <div className={`ns-under${mounted3D ? " is-hidden" : ""}`}>{diagram}</div>
              <NorthStarBoundary onCrash={() => setCrashed3D(true)}>
                <NorthStar3D
                  active={active}
                  onSelect={setActive}
                  labels={Object.fromEntries(ORBITS.map((o) => [o.id, t(o.name)]))}
                  onReady={() => setMounted3D(true)}
                />
              </NorthStarBoundary>
            </>
          ) : (
            diagram
          )}
        </div>

        <aside className="ns-panel glass reveal" aria-live="polite">
          <span className="ns-panel-tag" style={{ color: HUES[orb.id] }}>
            ✱ {t(orb.name)}
          </span>
          <h3>{t(orb.line)}</h3>
          <p>{t(orb.vision)}</p>
          <ul className="ns-panel-links">
            {orb.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {t(l.title)} <span className="dir-a">{l.live ? "↗" : "·"}</span>
                </a>
                {l.note ? <span className="ns-link-note">{t(l.note)}</span> : null}
              </li>
            ))}
          </ul>
          <p className="ns-foot">{t(SECTIONS.northstar.coreHint)}</p>
        </aside>
      </div>
    </section>
  );
}
