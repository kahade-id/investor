"use client";

import { useEffect } from "react";
import { WarningDiamond } from "@phosphor-icons/react/dist/ssr";
import { Button, EmptyState, Logo } from "@kahade/ui";

/** Error boundary: menangkap error render dan memberi jalan keluar yang jelas. */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-5">
      <div className="mb-6 flex items-center gap-2.5">
        {/* Logo dekoratif: teks "Kahade Investor" di sebelahnya sudah diumumkan SR. */}
        <span aria-hidden="true">
          <Logo size={26} />
        </span>
        <span className="text-base font-extrabold tracking-tight text-black">
          Kahade Investor
        </span>
      </div>
      <main>
        <EmptyState
          icon={WarningDiamond}
          title="Terjadi kesalahan"
          description="Maaf, halaman ini gagal dimuat. Silakan coba lagi, atau unduh whitepaper langsung."
          action={
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button onClick={reset}>Coba lagi</Button>
            </div>
          }
        />
      </main>
    </div>
  );
}
