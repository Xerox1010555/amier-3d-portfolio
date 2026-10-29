"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
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

export default function NorthStar() {
  const { t } = useLang();
  const [can3D, setCan3D] = useState(false);
  const [checked, setChecked] = useState(false);
  const [active, setActive] = useState<string>("software");

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

  return (
    <section className="ns wrap" id="northstar">
      <div className="ns-head">
        <span className="kicker reveal">{t(SECTIONS.northstar.no)}</span>
        <h2 className="h2 reveal">{t(SECTIONS.northstar.h2)}</h2>
        <p className="lede reveal">{t(SECTIONS.northstar.intro)}</p>
      </div>

      <div className="ns-stage">
        <div className="ns-canvas-wrap reveal" aria-label={t(SECTIONS.northstar.coreLabel)}>
          {checked && can3D ? (
            <NorthStar3D
              active={active}
              onSelect={setActive}
              labels={Object.fromEntries(ORBITS.map((o) => [o.id, t(o.name)]))}
            />
          ) : (
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
                    onClick={() => setActive(o.id)}
                  >
                    {t(o.name)}
                  </button>
                ))}
              </div>
              <p className="ns-fb-hint">{t(SECTIONS.northstar.fallbackHint)}</p>
            </div>
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
