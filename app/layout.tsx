import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import { SiteFooter } from "@kahade/ui";
import { Header } from "@/components/site/Header";
import "./globals.css";

// Plus Jakarta Sans self-hosted via next/font: tanpa CSS pihak ketiga yang
// memblokir render. Variabel dipasang di <html> agar token --font-sans di
// :root ikut terisi (memasangnya di <body> membuat font jatuh ke fallback).
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Investasi Startup Pre-Seed — Kahade",
    template: "%s — Kahade Investor",
  },
  description:
    "Peluang investasi startup Indonesia: Kahade, aplikasi jual-beli pengguna ke pengguna yang tampilannya seperti media sosial. Pre-seed Rp100–500 juta, launch 8 Desember 2026.",
  metadataBase: new URL("https://investor.kahade.id"),
  alternates: {
    canonical: "https://investor.kahade.id",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  // themeColor dipindah ke export `viewport` (metadata themeColor deprecated di Next 15+).
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Kahade Investor",
    title: "Investasi Startup Pre-Seed — Kahade",
    description:
      "Peluang investasi startup Indonesia. Pre-seed Rp100–500 juta, launch 8 Desember 2026.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Investasi Startup Pre-Seed — Kahade",
    description:
      "Peluang investasi startup Indonesia. Pre-seed Rp100–500 juta, launch 8 Desember 2026.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={jakarta.variable} data-scroll-behavior="smooth">
      <body className="flex min-h-screen flex-col">
        <a href="#konten-utama" className="kh-skip-link">
          Lewati ke konten utama
        </a>
        <Header />
        <main id="konten-utama" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <SiteFooter site="investor" linkAs={Link} note="NIB & NPWP terbit." />
      </body>
    </html>
  );
}
