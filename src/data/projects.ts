export type Category = "3d" | "ai" | "web" | "apps";

export interface Project {
  slug: string;
  title: string;
  kind: string; // short badge shown on the card
  cat: Category;
  blurb: string; // card line
  detail: string; // modal paragraph
  tags: string[];
  live?: string;
  repo?: string;
  shot?: string; // /shots/*.jpg
  accent: string; // hex accent used for the card glow
  featured?: boolean;
}

export const FILTERS: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "3d", label: "3D & Immersive" },
  { id: "ai", label: "AI Products" },
  { id: "web", label: "Websites & Commerce" },
  { id: "apps", label: "Desktop & Mobile" },
];

export const PROJECTS: Project[] = [
  {
    slug: "amier-cars",
    title: "AMIER CARS — 3D Showroom",
    kind: "3D Showroom",
    cat: "3d",
    blurb: "Seven cars under one glass roof — open hoods, spin wheels, sit inside. Procedural cabin lighting.",
    detail:
      "A private-collection showroom where every vehicle is streamed on demand as a Draco-compressed GLB and materialised live: hood, brakes, wheels and cabins open in real time, with an optional AR viewer on mobile.",
    tags: ["Three.js", "GLB / Draco", "WebGL", "On-demand streaming"],
    live: "https://amier-cars-3d-showroom.vercel.app",
    repo: "https://github.com/Xerox1010555/amier-cars-3d-showroom",
    shot: "/shots/cars.jpg",
    accent: "#d4af37",
    featured: true,
  },
  {
    slug: "carx",
    title: "CARX ATELIER — Configurator",
    kind: "Full-stack 3D Configurator",
    cat: "3d",
    blurb: "BMW M5 E34 studio: paint, rims, roofs and checkout with a real order book and admin console.",
    detail:
      "A full-stack configurator atelier: vanilla ES-module SPA with strict CSP, a self-hosted Three.js pipeline, live pricing served by Express, JWT-protected admin console, SQLite persistence, PWA offline shell and a 10-assertion API test suite.",
    tags: ["Express 5", "node:sqlite", "Three.js r186", "JWT admin", "PWA", "EN/AR"],
    live: "https://carx-3d-configurator.vercel.app",
    repo: "https://github.com/Xerox1010555/carx-3d-configurator",
    shot: "/shots/carx.jpg",
    accent: "#e8c46a",
    featured: true,
  },
  {
    slug: "aurelia",
    title: "AURELIA — Haute Boutique",
    kind: "3D Commerce (EN/AR)",
    cat: "3d",
    blurb: "Haute horlogerie rebuilt in Next.js 15: story, collection, configurator and cart — bilingual.",
    detail:
      "Next.js 15 + React 19 rebuild of a haute horlogerie experience: scroll-choreographed watch stage, collection, configurator, cart and boutiques — prerendered for /en and /ar with a legacy single-file PoC kept in the repo as reference.",
    tags: ["Next.js 15", "React 19", "Three.js", "GSAP", "Zustand", "EN/AR"],
    live: "https://aurelia-boutique.vercel.app",
    repo: "https://github.com/Xerox1010555/aurelia",
    shot: "/shots/aurelia.jpg",
    accent: "#c9a86b",
  },
  {
    slug: "crown",
    title: "Crown & Co — Rolex Boutique",
    kind: "3D Boutique (EN/AR)",
    cat: "web",
    blurb: "Authorized-boutique experience with a live 3D Submariner, multi-currency and cart.",
    detail:
      "A single-file engineering piece: three.js + GSAP watch boutique with live 3D hero, EN/AR full RTL, multi-currency cart and checkout flows — pure client-side, no build step.",
    tags: ["Three.js", "GSAP", "RTL", "Multi-currency", "Single-file"],
    live: "https://crown-watch-boutique.vercel.app",
    repo: "https://github.com/Xerox1010555/crown-watch-boutique",
    shot: "/shots/crown.jpg",
    accent: "#c9a86b",
  },
  {
    slug: "oyster",
    title: "OYSTER & CO. — Platform",
    kind: "Next.js Platform",
    cat: "web",
    blurb: "Authorized Rolex boutique: Next.js 15 platform (repo) + a refined landing experience live.",
    detail:
      "An authorized-boutique production platform in Next.js 15: i18n, collection detail pages, configurator, craft storytelling, boutiques booking and admin — Prisma-data-driven. The live link serves the polished landing experience; the full platform ships in the repository.",
    tags: ["Next.js 15", "Prisma", "i18n", "Admin", "3D stage"],
    live: "https://oyster-co.vercel.app",
    repo: "https://github.com/Xerox1010555/oyster-co",
    shot: "/shots/oyster.jpg",
    accent: "#c9a86b",
  },
  {
    slug: "villas",
    title: "BRAND — Villas in New Cairo",
    kind: "Procedural 3D Real Estate",
    cat: "3d",
    blurb: "Walkable villa generated procedurally in the browser — aerial, dollhouse, walk and tour.",
    detail:
      "Real-estate showcase where the villa is not a model but a build: generated procedurally in the browser, explorable aerial/dollhouse/walk/tour, with switching between light/night moods and EN/AR copy.",
    tags: ["Three.js", "Procedural", "GSAP", "EN/AR", "Real estate"],
    live: "https://brand-villas-3d.vercel.app",
    repo: "https://github.com/Xerox1010555/brand-villas-3d",
    shot: "/shots/villas.jpg",
    accent: "#e07a3f",
    featured: true,
  },
  {
    slug: "grido1",
    title: "GRIDO1 — Racing Platform",
    kind: "Astro Driver Platform",
    cat: "web",
    blurb: "Data-driven F1 driver platform — 3D hero, telemetry storytelling, full EN/AR.",
    detail:
      "An Astro F1 driver platform: data-driven sections, 3D hero, i18n EN/AR, zero-framework islands for speed.",
    tags: ["Astro", "Three.js", "i18n", "Data-driven"],
    live: "https://grido1-f1-platform.vercel.app",
    repo: "https://github.com/Xerox1010555/grido1-f1-platform",
    shot: "/shots/grido1.jpg",
    accent: "#e10600",
  },
  {
    slug: "diet-soda",
    title: "Diet Soda — Pure Zero",
    kind: "Brand Site",
    cat: "web",
    blurb: "Zero-sugar brand site with a real 3D can via model-viewer — type-safe Lit.",
    detail:
      "A brand microsite for a zero-sugar soda line: product storytelling, nutrition tables and an interactive 3D can — built with Lit and official <model-viewer> under a strict TS setup (76 type errors squeezed to 0).",
    tags: ["Lit", "model-viewer", "TypeScript strict", "Branding"],
    live: "https://diet-soda.vercel.app",
    repo: "https://github.com/Xerox1010555/diet-soda",
    shot: "/shots/soda.jpg",
    accent: "#7ef0c9",
  },
  {
    slug: "emo",
    title: "Emo — AI English Tutor",
    kind: "AI Learning App",
    cat: "ai",
    blurb: "Hourly AI voice lessons with real auth, streaks and a teacher persona.",
    detail:
      "An AI English-learning assistant: sign-up with real authentication, hourly AI-generated lessons, voice interaction, curriculum tracking and streaks — Supabase-backed.",
    tags: ["React", "Supabase", "AI voice", "PWA"],
    live: "https://emo-ai-english-tutor.vercel.app",
    repo: "https://github.com/Xerox1010555/emo-ai-english-tutor",
    shot: "/shots/emo.jpg",
    accent: "#f8696b",
  },
  {
    slug: "solo",
    title: "The System — Solo Edition",
    kind: "Gamified Trainer",
    cat: "apps",
    blurb: "Solo-Leveling-style habits & quests: analytics, business mode, 22 themes — web + Windows + Android.",
    detail:
      "A gamified habit & quest trainer inspired by Solo Leveling: local player accounts, weekly analytics, business mode, 22 themes, and native builds for Windows and signed Android — one single-file core.",
    tags: ["Vanilla JS", "PWA", "Desktop", "Android APK"],
    live: "https://solo-edition.vercel.app",
    repo: "https://github.com/Xerox1010555/solo-system",
    shot: "/shots/solo.jpg",
    accent: "#38bdf8",
  },
  {
    slug: "glass",
    title: "Glass UI Gallery",
    kind: "Component Library",
    cat: "web",
    blurb: "18 standalone glassmorphism components — forms, cards, nav, heatmap, 404…",
    detail:
      "A design-system playground: 18 production-ready glassmorphism components (auth, dashboards, heatmap, empty states) each shipped as an independent demo page with its own a11y notes.",
    tags: ["CSS", "Glassmorphism", "Components", "a11y"],
    live: "https://glass-ui-gallery.vercel.app",
    repo: "https://github.com/Xerox1010555/glass-ui-gallery",
    shot: "/shots/glass.jpg",
    accent: "#5eead4",
  },
  {
    slug: "graven",
    title: "GRAVEN — Drafting Works",
    kind: "Studio Website",
    cat: "web",
    blurb: "Drafting-studio site with video reels, case studies and a booking flow.",
    detail:
      "A professional drafting-studio presence: video storytelling, work case studies, method copy, contact form with validation and automated Playwright checks.",
    tags: ["React 18", "Vite", "Tailwind 4", "Playwright"],
    live: "https://graven-drafting-works.vercel.app",
    repo: "https://github.com/Xerox1010555/graven-drafting-works",
    shot: "/shots/graven.jpg",
    accent: "#8fa3b8",
  },
  {
    slug: "aira",
    title: "AIRA — Windows AI Assistant",
    kind: "Windows App",
    cat: "ai",
    blurb: "Always-on Windows assistant in C#/.NET 8 — LLM tool-calling, voice, Android companion.",
    detail:
      "A native Windows AI assistant (C#/.NET 8 WPF): always-on, voice in/out, LLM tool-calling that can open apps and act on the OS, with an Android companion app.",
    tags: ["C#", ".NET 8", "WPF", "LLM tools", "Voice", "Android"],
    repo: "https://github.com/Xerox1010555/aira-ai-assistant",
    accent: "#a78bfa",
  },
  {
    slug: "amier-os",
    title: "Amier OS",
    kind: "Desktop + Android OS",
    cat: "apps",
    blurb: "A personal-OS experience for desktop & Android — with a one-click signed APK build pipeline.",
    detail:
      "A personal-OS experiment: a full desktop shell experience extended to Android, with a one-click local build script that produces a signed 6MB APK and solved three Windows-path build traps.",
    tags: ["Android", "APK signing", "Shell UI", "Build tooling"],
    repo: "https://github.com/Xerox1010555/amier-os",
    accent: "#7dd3fc",
  },
];

export const LINK = {
  email: "abddo4443@gmail.com",
  whatsapp: "https://wa.me/201008655235?text=Hello%20Amier%2C%20I%20would%20like%20to%20discuss%20a%20project.",
  telegram: "https://t.me/Amier1t5",
  github: "https://github.com/Xerox1010555",
  vercelProfile: "https://vercel.com/amier1",
  cv: "/cv-amier.pdf",
};
