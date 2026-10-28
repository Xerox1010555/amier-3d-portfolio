"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { LINK } from "@/data/projects";

const Hero3D = dynamic(() => import("@/components/Hero3D"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const [ready, setReady] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      setTimeout(() => setReady(true), 350);
      setTimeout(() => setGone(true), 1200);
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
            <div className="preloader-logo">AMIER</div>
            <div className="preloader-bar"><i /></div>
            <div className="preloader-tip">Rendering the moment</div>
          </div>
        </div>
      )}

      <header className="hero" id="top">
        <Hero3D />
        <div className="hero-fade" aria-hidden="true" />
        <div className="hero-inner wrap">
          <span className="hero-status">
            <i className="dot" /> Available for new projects — Remote · Worldwide
          </span>
          <h1 className="hero-title">AMIER</h1>
          <p className="hero-role">
            Full-Stack Developer <b>·</b> 3D Web Engineering <b>·</b> AI Products
          </p>
          <p className="hero-sub">
            I design and build the whole thing — pixel-perfect interfaces, secure back-ends and 3D
            experiences that make products unforgettable. 12 live deployments below, all one click away.
          </p>
          <div className="hero-cta">
            <a href="#work" className="btn btn-primary magnet">View my work ↓</a>
            <a href={LINK.whatsapp} target="_blank" rel="noreferrer" className="btn magnet">Message me on WhatsApp</a>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true">Scroll</div>
      </header>
    </>
  );
}
