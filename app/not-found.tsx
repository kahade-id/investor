import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink, EmptyState, Logo } from "@kahade/ui";

export default function NotFound() {
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
          icon={MagnifyingGlass}
          title="Halaman tidak ditemukan"
          headingLevel={1}
          description="Alamat yang kamu tuju tidak ada atau sudah dipindahkan."
          action={<ButtonLink href="/">Kembali ke beranda</ButtonLink>}
        />
      </main>
    </div>
  );
}
