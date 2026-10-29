import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({
  src: [
    { path: "../../public/fonts/space-grotesk-400-latin.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/space-grotesk-500-latin.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/space-grotesk-700-latin.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: [
    { path: "../../public/fonts/manrope-400-latin.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/manrope-500-latin.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/manrope-700-latin.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

const title = "AMIER — Full-Stack Developer & 3D Web Engineering";
const desc =
  "Portfolio of Amier: full-stack web developer building immersive 3D experiences, AI products and secure, scalable web platforms — 12 live deployments, 14 public repositories.";

export const metadata: Metadata = {
  metadataBase: new URL("https://amier-3d-portfolio.vercel.app"),
  title,
  description: desc,
  keywords: [
    "Amier",
    "Full-Stack Developer",
    "Three.js Engineer",
    "React Three Fiber",
    "Next.js developer",
    "3D web",
    "AI applications",
    "portfolio",
  ],
  authors: [{ name: "Amier" }],
  openGraph: {
    title,
    description: desc,
    url: "https://amier-3d-portfolio.vercel.app",
    siteName: "AMIER — Portfolio",
    type: "website",
    images: [{ url: "/og", width: 1200, height: 630, alt: "AMIER — portfolio" }],
  },
  twitter: { card: "summary_large_image", title, description: desc, images: ["/og"] },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#f2ede4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#work" className="skip-link">Skip to projects</a>
        <div className="page-poles" aria-hidden="true" />
        <div className="page-noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
