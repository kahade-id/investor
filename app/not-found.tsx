import type { Metadata } from "next";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink, Container, EmptyState } from "@kahade/ui";

export const metadata: Metadata = {
  title: "Halaman tidak ditemukan",
  robots: { index: false, follow: true },
};

/**
 * 404 — di-render di dalam root layout (SiteHeader + SiteFooter sudah ada),
 * jadi hanya isi konten.
 */
export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] items-center justify-center py-16">
      <EmptyState
        icon={MagnifyingGlass}
        headingLevel={1}
        title="Halaman tidak ditemukan"
        description="Alamat yang kamu tuju tidak ada atau sudah dipindahkan."
        action={<ButtonLink href="/">Kembali ke beranda</ButtonLink>}
      />
    </Container>
  );
}
