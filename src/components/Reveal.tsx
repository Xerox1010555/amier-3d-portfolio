"use client";

import { useEffect } from "react";

/**
 * Adds .in to every .reveal element when it scrolls into view.
 * A MutationObserver keeps an eye on framework-inserted nodes (e.g. re-filtered cards),
 * so newly mounted .reveal elements animate too.
 */
export default function Reveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    const sweep = (root: ParentNode) => {
      root.querySelectorAll?.(".reveal:not(.in)").forEach((el) => io.observe(el));
    };

    sweep(document);
    const mo = new MutationObserver((muts) => {
      for (const m of muts) {
        m.addedNodes.forEach((n) => {
          if (!(n instanceof HTMLElement)) return;
          if (n.classList.contains("reveal") && !n.classList.contains("in")) io.observe(n);
          sweep(n);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
