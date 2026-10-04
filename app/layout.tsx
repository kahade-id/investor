import type { Metadata } from "next";
import "./globals.css";

const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap";

export const metadata: Metadata = {
  title: "Kahade — Peluang Investasi Pre-Seed",
  description:
    "Kahade adalah aplikasi jual-beli pengguna ke pengguna yang tampilannya seperti media sosial. Pre-seed Rp100–500 juta. Produk sudah jadi, launch 8 Desember 2026.",
  metadataBase: new URL("https://investor.kahade.id"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Kahade Investor",
    title: "Kahade — Peluang Investasi Pre-Seed",
    description:
      "Social commerce Indonesia. Produk sudah jadi, launch 8 Desember 2026. Pre-seed Rp100–500 juta.",
  },
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
      <body>{children}</body>
    </html>
  );
}
