import type { Metadata, Viewport } from "next";
import "./globals.css";

const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap";

export const metadata: Metadata = {
  title: "Investasi Startup Pre-Seed — Kahade",
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
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href={GOOGLE_FONTS_URL} rel="stylesheet" />
      </head>
      <body>
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Lewati ke konten
        </a>
        {children}
      </body>
    </html>
  );
}
