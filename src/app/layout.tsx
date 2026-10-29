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

const title = "AMIER — Building at the intersection of Business, Software & AI";
const desc =
  "Portfolio of Amier: full-stack developer building 3D product experiences, AI products and platforms. 14 public repositories, 12 live deployments — every number verifiable. EN/AR.";

export const metadata: Metadata = {
  metadataBase: new URL("https://amier-3d-portfolio.vercel.app"),
  title: {
    default: title,
    template: "%s",
  },
  description: desc,
  openGraph: {
    title,
    description: desc,
    url: "https://amier-3d-portfolio.vercel.app",
    images: [{ url: "/og", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: desc,
    images: ["/og"],
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%23060a13'/%3E%3Ctext x='16' y='23' font-family='Arial' font-size='18' font-weight='700' text-anchor='middle' fill='%23ffb35c'%3EA%E2%9C%B1%3C/text%3E%3C/svg%3E",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#060a13",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Cairo — Arabic editorial face (CSP already allows these measured origins) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
