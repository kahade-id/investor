"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiteHeader } from "@kahade/ui";
import { WhitepaperLink } from "@/components/investor/ActionLink";

/**
 * Header global (DS). Situs investor adalah satu halaman panjang: navigasi
 * seksi ada di daftar isi menempel (desktop) dan daftar isi lipat (seluler),
 * jadi header hanya membawa aksi utama — tanpa menu seluler.
 */
export function Header() {
  const pathname = usePathname();
  return (
    <SiteHeader
      site="investor"
      pathname={pathname}
      linkAs={Link}
      cta={{ label: "Hubungi kami", href: "/#kontak" }}
      actions={
        <WhitepaperLink variant="ghost" size="sm">
          Whitepaper
        </WhitepaperLink>
      }
    />
  );
}
