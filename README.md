# AMIER — 3D Portfolio

Professional portfolio of **Amier** — Full-Stack Web Developer & 3D Web Engineering.
Built to present live work for jobs, grants and opportunities.

🔗 **Live:** https://amier-3d-portfolio.vercel.app

## What's inside

- **Hero:** React Three Fiber scene — glass icosahedron core, orbit rings, satellites, starfield (PMREM/RoomEnvironment lighting, zero external downloads).
- **Stats band:** animated counters (14 public repos · 12 live deployments · 50+ projects · 4+ years).
- **Work grid:** 14 real projects, each linking to its **live Vercel deployment** and **source repository**. Filter by category; cards have magnetic tilt + cursor glow; a modal shows details.
- **About / Skills / Contact:** bio, services, stack chips; contact section with copy-email, WhatsApp, Telegram and a 3D planet scene.
- **Craft details:** custom cursor, scroll-reveal choreography, preloader, CV download (`/cv-amier.pdf`), OG/Twitter meta, favicon, reduced-motion support throughout.

## Stack

| Layer      | Tech                                        |
| ---------- | ------------------------------------------- |
| Framework  | Next.js 15 (App Router) + React 19           |
| 3D         | three 0.180 · @react-three/fiber 9 · drei 10 |
| Language   | TypeScript (strict)                         |
| Styling    | Hand-written CSS design system (no Tailwind) |
| Fonts      | Self-hosted Space Grotesk + Manrope (`next/font/local`) |

## Run locally

```bash
npm install
npm run dev    # http://localhost:3000
npm run build && npm start
```

## Project data

All project cards are defined in `src/data/projects.ts` — live URLs, repositories, tags and accents.
Screenshots of the real deployments live in `public/shots/`.
