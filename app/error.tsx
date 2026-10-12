"use client";

import { WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { Button, Container, EmptyState } from "@kahade/ui";
import { WhitepaperLink } from "@/components/investor/ActionLink";

/** Error boundary: pesan ramah dan jalan keluar yang jelas. */
export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container className="flex min-h-[60vh] items-center justify-center py-16">
      <EmptyState
        icon={WarningCircle}
        title="Terjadi kesalahan"
        description="Maaf, halaman ini gagal dimuat. Silakan coba lagi, atau unduh whitepaper langsung."
        action={
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button onClick={() => reset()}>Coba lagi</Button>
            <WhitepaperLink variant="secondary">Unduh whitepaper</WhitepaperLink>
          </div>
        }
      />
    </Container>
  );
}
