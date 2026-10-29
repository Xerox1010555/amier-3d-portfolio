"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { LINK } from "@/data/projects";

const Hero3D = dynamic(() => import("@/components/Hero3D"), {
  ssr: false,
  loading: () => null,
});

const MARQUEE = [
  "Available for hire — Remote · Worldwide",
  "12 live deployments",
  "Next.js 15 ✱ React Three Fiber",
  "Full-Stack ✱ 3D ✱ AI",
  "Reply within 24 hours",
  "Portfolio ✱ 2026",
];

export default function Hero() {
  const [ready, setReady] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      setTimeout(() => setReady(true), 350);
      setTimeout(() => setGone(true), 1100);
    };
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    return () => window.removeEventListener("load", finish);
  }, []);

  return (
    <>
      {!gone && (
        <div className={`preloader ${ready ? "done" : ""}`} aria-hidden="true">
          <div className="preloader-mark">
            <div className="preloader-logo">
              AMIER<span className="ast">.</span>
            </div>
            <div className="preloader-bar"><i /></div>
            <div className="preloader-tip">Printing the moment</div>
          </div>
        </div>
      )}

      <header className="hero" id="top">
        <Hero3D />
        <div className="hero-inner wrap">
          <span className="hero-status">
            <i className="dot" /> Available for new projects · Remote · Worldwide
          </span>
          <h1 className="hero-name">
            AMIER<span className="ast">.</span>
          </h1>
          <div className="hero-line">
            <span className="hero-role">Full-Stack Developer</span>
            <span className="hero-role verm">✱</span>
            <span className="hero-role outline">3D Engineer</span>
          </div>
          <p className="hero-sub">
            I design and build the whole thing — pixel-perfect interfaces, secure back-ends,
            and 3D that makes products unforgettable. Below: the index of 14 builds,
            12 of them live right now. One click each.
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn btn-primary">Open the index ↓</a>
            <a href={LINK.whatsapp} target="_blank" rel="noreferrer" className="ghostlink">
              Message on WhatsApp →
            </a>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">Scroll</div>
      </header>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i}>
              {m} <b className="ast">✱</b>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
