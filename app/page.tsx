"use client";

import {
  Alert,
  Badge,
  Button,
  Card,
  CopyButton,
  Divider,
  Icon,
  Logo,
  Progress,
  Stat,
  Steps,
  Table,
  TBody,
  TD,
  TH,
  THead,
  TR,
} from "@kahade/ui";
import {
  ArrowRight,
  ArrowSquareOut,
  Buildings,
  ChartLineUp,
  Check,
  CurrencyCircleDollar,
  DownloadSimple,
  EnvelopeSimple,
  FileText,
  Handshake,
  Heart,
  Lightning,
  MagnifyingGlass,
  Megaphone,
  Package,
  ShieldCheck,
  SmileyWink,
  TrendUp,
  UsersThree,
  WarningDiamond,
} from "@phosphor-icons/react/dist/ssr";

const EMAIL = "halo@kahade.id"; // PLACEHOLDER: ganti dengan email investor resmi bila ada

const NAV = [
  { label: "Masalah", href: "#masalah" },
  { label: "Solusi", href: "#solusi" },
  { label: "Model Bisnis", href: "#model-bisnis" },
  { label: "Traksi", href: "#traksi" },
  { label: "Moat", href: "#moat" },
  { label: "Tim", href: "#tim" },
  { label: "Pendanaan", href: "#pendanaan" },
];

function SectionHead({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-3 text-base leading-relaxed text-neutral-600">{desc}</p>}
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black">
        <Icon icon={Check} size={14} weight="bold" className="text-white" />
      </span>
      <span className="text-[15px] leading-relaxed text-neutral-700">{children}</span>
    </li>
  );
}

export default function InvestorPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* ── Nav ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#hero" className="flex items-center gap-2.5">
            <Logo size={28} />
            <span className="text-lg font-extrabold tracking-tight">Kahade</span>
            <Badge variant="neutral" className="ml-1 hidden sm:inline-flex">
              Investor
            </Badge>
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigasi utama">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-neutral-600 transition-colors hover:text-black"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a href="/whitepaper-kahade.pdf" download>
            <Button size="sm" leftIcon={DownloadSimple}>
              Whitepaper
            </Button>
          </a>
        </div>
      </header>

      <main>
        {/* ── 1. Hero ───────────────────────────────────── */}
        <section id="hero" className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:pt-24">
          <div className="max-w-3xl">
            <Badge variant="brand" className="mb-6">
              Pre-seed · Rp100–500 juta
            </Badge>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
              Jual Beli Semudah
              <br />
              Scroll Medsos
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
              Kahade adalah aplikasi jual-beli pengguna ke pengguna yang
              tampilannya seperti media sosial. Jutaan anak muda Indonesia sudah
              jual-beli lewat DM setiap hari — tanpa perlindungan apa pun. Kami
              memberi mereka tempat yang lebih baik: pengalaman sosial yang seru,
              dengan keamanan transaksi setara marketplace.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/whitepaper-kahade.pdf" download>
                <Button size="lg" leftIcon={DownloadSimple}>
                  Unduh Whitepaper
                </Button>
              </a>
              <a href="#kontak">
                <Button size="lg" variant="secondary" rightIcon={ArrowRight}>
                  Hubungi Kami
                </Button>
              </a>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Stat label="Launch publik" value="8 Des 2026" />
              <Stat label="Target 6 bulan" value="1 jt transaksi" />
              <Stat label="Biaya transaksi" value="2,5%" hint="Min Rp2.500 · maks Rp250.000" />
            </div>
          </div>
        </section>

        <Divider />

        {/* ── 2. Masalah ────────────────────────────────── */}
        <section id="masalah" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
          <SectionHead
            eyebrow="Masalah"
            title="Perilakunya sudah ada. Platformnya belum."
            desc="Jutaan anak muda Indonesia jual-beli lewat DM Instagram, X, dan WhatsApp setiap hari: thrift, sneakers, merchandise K-pop, jasa desain, produk digital. Tiga masalah besar belum terselesaikan."
          />
          <div className="grid gap-5 md:grid-cols-3">
            <Card className="p-6">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50">
                <Icon icon={WarningDiamond} size={22} className="text-red-600" />
              </span>
              <h3 className="mb-2 text-lg font-bold">Jual-beli via DM rawan penipuan</h3>
              <p className="text-[15px] leading-relaxed text-neutral-600">
                Penjual fiktif, barang tidak sesuai, pembeli nakal, akun
                kloningan. Tidak ada pihak ketiga yang menjamin transaksi —
                korban penipuan online mencapai ratusan ribu kasus per tahun.
              </p>
            </Card>
            <Card className="p-6">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100">
                <Icon icon={SmileyWink} size={22} className="text-neutral-700" />
              </span>
              <h3 className="mb-2 text-lg font-bold">Marketplace membosankan</h3>
              <p className="text-[15px] leading-relaxed text-neutral-600">
                Katalog, kolom pencarian, keranjang — seperti belanja di katalog
                tahun 2010. Generasi yang menghabiskan 3–4 jam sehari di medsos
                tidak "menemukan" barang, mereka disuruh "mencari" barang.
              </p>
            </Card>
            <Card className="p-6">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100">
                <Icon icon={Package} size={22} className="text-neutral-700" />
              </span>
              <h3 className="mb-2 text-lg font-bold">Keterbatasan kategori</h3>
              <p className="text-[15px] leading-relaxed text-neutral-600">
                Marketplace dirancang untuk barang fisik. Jasa, produk digital,
                dan barang preloved unik tidak pernah pas di format katalog —
                penjualnya terpaksa kembali ke DM yang tidak aman.
              </p>
            </Card>
          </div>

          <h3 className="mb-4 mt-12 text-xl font-bold">Celah di pasar</h3>
          <Card className="overflow-x-auto p-0">
            <Table>
              <THead>
                <TR>
                  <TH>Aspek</TH>
                  <TH>Jual-beli via DM</TH>
                  <TH>Marketplace besar</TH>
                  <TH>Kahade</TH>
                </TR>
              </THead>
              <TBody>
                {[
                  ["Pengalaman sosial", "Seru", "Kaku", "Seru"],
                  ["Keamanan transaksi", "Tidak ada", "Ada", "Ada"],
                  ["Jual jasa & digital", "Fleksibel", "Terbatas", "Fleksibel"],
                  ["Penemuan organik", "Feed", "Katalog", "Feed"],
                ].map(([aspek, dm, mp, kahade]) => (
                  <TR key={aspek}>
                    <TD className="font-semibold">{aspek}</TD>
                    <TD>{dm}</TD>
                    <TD>{mp}</TD>
                    <TD>
                      <span className="inline-flex items-center gap-1.5 font-semibold text-black">
                        <Icon icon={Check} size={15} weight="bold" />
                        {kahade}
                      </span>
                    </TD>
                  </TR>
                ))}
              </TBody>
            </Table>
          </Card>
        </section>

        <Divider />

        {/* ── 3. Solusi ─────────────────────────────────── */}
        <section id="solusi" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
          <SectionHead
            eyebrow="Solusi"
            title="Aplikasi jualan yang dikemas seperti media sosial"
            desc="Bukan media sosial yang kebetulan bisa jualan. Feed, like, komen, follow — tidak ada cara pakai baru yang harus dipelajari. Keamanan yang baik adalah keamanan yang tidak terasa: cukup tekan “Beli via Kahade”, semuanya beres."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <Card className="p-6">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-900">
                <Icon icon={Heart} size={22} className="text-white" />
              </span>
              <h3 className="mb-2 text-lg font-bold">Social commerce feed</h3>
              <p className="text-[15px] leading-relaxed text-neutral-600">
                Scroll feed, temukan barang menarik dari orang yang kamu follow,
                like, komen, chat dengan penjual. Belanja menjadi hiburan:
                penemuan, interaksi, keseruan — seperti scroll medsos biasa.
              </p>
            </Card>
            <Card className="p-6">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-900">
                <Icon icon={UsersThree} size={22} className="text-white" />
              </span>
              <h3 className="mb-2 text-lg font-bold">Fitur unik: patungan & jastip</h3>
              <p className="text-[15px] leading-relaxed text-neutral-600">
                Fitur yang tidak dimiliki marketplace katalog: beli bareng
                (patungan) dan jasa titip (jastip) yang terintegrasi langsung
                dengan transaksi aman.
              </p>
            </Card>
          </div>
          <Alert variant="info" className="mt-8">
            Jual apa saja: barang fisik, jasa, produk digital, hingga barang
            preloved unik — semua dalam format feed yang personal.
          </Alert>
        </section>

        <Divider />

        {/* ── 4. Model bisnis ───────────────────────────── */}
        <section id="model-bisnis" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
          <SectionHead
            eyebrow="Model bisnis"
            title="Dua sumber pendapatan yang jelas"
            desc="Transparansi biaya adalah standar kami: semua biaya ditampilkan di awal, tidak ada biaya tersembunyi."
          />
          <div className="grid gap-5 md:grid-cols-2">
            <Card className="p-7">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-black">
                <Icon icon={CurrencyCircleDollar} size={22} className="text-white" />
              </span>
              <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                Biaya transaksi
              </p>
              <p className="mt-2 text-5xl font-extrabold tracking-tight">2,5%</p>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
                Per transaksi. Minimum Rp2.500, maksimum Rp250.000. Jauh lebih
                murah daripada risiko kehilangan jutaan rupiah karena tertipu.
              </p>
              <div className="mt-5">
                <Badge variant="success">1.000 transaksi pertama GRATIS biaya</Badge>
              </div>
            </Card>
            <Card className="p-7">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-black">
                <Icon icon={Lightning} size={22} className="text-white" />
              </span>
              <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                Kahade Plus
              </p>
              <p className="mt-2 text-5xl font-extrabold tracking-tight">
                Rp99<span className="text-xl font-bold text-neutral-500">rb/bln</span>
              </p>
              <p className="mt-1 text-sm text-neutral-500">
                atau Rp899.000/tahun
              </p>
              <ul className="mt-4 space-y-2.5">
                <CheckItem>Potongan 50% biaya transaksi</CheckItem>
                <CheckItem>Kuota pembebasan biaya Rp990.000 per periode</CheckItem>
                <CheckItem>Prioritas layanan pelanggan</CheckItem>
                <CheckItem>Badge Plus di profil</CheckItem>
              </ul>
            </Card>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Stat label="Estimasi titik impas" value="±20.000" hint="transaksi per bulan" />
            <Stat label="Target 6 bulan pasca-launch" value="1.000.000" hint="transaksi kumulatif" />
          </div>
        </section>

        <Divider />

        {/* ── 5. Traksi ─────────────────────────────────── */}
        <section id="traksi" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
          <SectionHead
            eyebrow="Traksi & rencana"
            title="Pre-launch — dan produknya sudah jadi"
            desc="Berbeda dengan startup tahap ide yang masih berupa slide: risiko eksekusi teknis sudah lewat. Yang tersisa tinggal finalisasi pembayaran dan pengujian terakhir."
          />
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-bold">Yang sudah berjalan</h3>
              <ul className="space-y-3">
                <CheckItem>Backend API lengkap (300+ endpoint)</CheckItem>
                <CheckItem>Aplikasi mobile iOS & Android: feed, etalase, chat, checkout</CheckItem>
                <CheckItem>Panel admin: moderasi, keuangan, sengketa, analitik</CheckItem>
                <CheckItem>Web kahade.id: landing + handler deeplink</CheckItem>
                <CheckItem>Badan hukum: PT Kawal Hak Dengan Aman (NIB & NPWP terbit)</CheckItem>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Menuju launch</h3>
              <Steps
                current={0}
                steps={[
                  {
                    label: "Oktober 2026",
                    description: "Finalisasi integrasi pembayaran & pengujian internal",
                  },
                  {
                    label: "November 2026",
                    description: "Beta tertutup 100–200 pengguna komunitas inti",
                  },
                  {
                    label: "8 Desember 2026",
                    description: "Launch publik + 1.000 transaksi pertama gratis biaya",
                  },
                  {
                    label: "6 bulan pasca-launch",
                    description: "1.000.000 transaksi kumulatif",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <Divider />

        {/* ── 6. Moat ───────────────────────────────────── */}
        <section id="moat" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
          <SectionHead
            eyebrow="Keunggulan kompetitif"
            title="Tiga alasan fundamental — bukan janji manis"
          />
          <div className="grid gap-5 md:grid-cols-2">
            <Card className="p-6">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-900">
                <Icon icon={TrendUp} size={22} className="text-white" />
              </span>
              <h3 className="mb-2 text-lg font-bold">Network effect bersisi sosial</h3>
              <p className="text-[15px] leading-relaxed text-neutral-600">
                Makin banyak penjual, makin menarik feed-nya; makin banyak
                pembeli, makin besar peluang laku. Memindahkan "toko" berarti
                meninggalkan followers dan reputasi — switching cost yang
                emosional, jauh lebih sulit ditiru.
              </p>
            </Card>
            <Card className="p-6">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-900">
                <Icon icon={Handshake} size={22} className="text-white" />
              </span>
              <h3 className="mb-2 text-lg font-bold">Kepercayaan komunitas organik</h3>
              <p className="text-[15px] leading-relaxed text-neutral-600">
                Dibangun dari bawah lewat interaksi nyata dan ulasan jujur —
                tidak bisa dibeli dengan budget iklan sebesar apa pun, dan
                menyebar sendiri lewat pengguna yang puas.
              </p>
            </Card>
            <Card className="p-6">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-900">
                <Icon icon={ShieldCheck} size={22} className="text-white" />
              </span>
              <h3 className="mb-2 text-lg font-bold">Innovator dilemma kompetitor</h3>
              <p className="text-[15px] leading-relaxed text-neutral-600">
                Shopee dan TikTok Shop bisa meniru feed sosial — tapi tidak akan
                sungguh-sungguh: model katalog mereka akan terkanibalisasi.
                Fokus mereka brand dan penjual profesional, bukan pengguna
                individu.
              </p>
            </Card>
            <Card className="p-6">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-900">
                <Icon icon={Lightning} size={22} className="text-white" />
              </span>
              <h3 className="mb-2 text-lg font-bold">Kecepatan eksekusi</h3>
              <p className="text-[15px] leading-relaxed text-neutral-600">
                Tim ramping: keputusan dalam hitungan jam, fitur baru dalam
                hitungan hari. Burn rate rendah berarti runway panjang — setiap
                rupiah bekerja lebih keras.
              </p>
            </Card>
          </div>
        </section>

        <Divider />

        {/* ── 7. Tim ────────────────────────────────────── */}
        <section id="tim" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
          <SectionHead
            eyebrow="Tim"
            title="Ramping sejak hari pertama"
            desc="Tim kecil bukan keterbatasan — ini strategi. Efisiensi modal, kecepatan keputusan, dan perekrutan yang sangat selektif."
          />
          <Card className="flex flex-col gap-6 p-7 sm:flex-row sm:items-center">
            <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-black text-2xl font-extrabold text-white">
              MA
            </span>
            <div>
              <h3 className="text-xl font-bold">Muhammad Agung Kurniawan</h3>
              <p className="mt-1 text-sm font-semibold text-neutral-500">
                Founder & CTO
              </p>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-neutral-600">
                Membangun seluruh sistem Kahade sendiri: backend, aplikasi
                mobile, panel admin, dan web. Tidak ada lapisan antara pembuat
                produk dan pengguna — feedback langsung menjadi perbaikan.
                Founder solo berarti bakar uang kecil dan setiap rupiah
                pendanaan bekerja untuk pertumbuhan, bukan birokrasi.
              </p>
            </div>
          </Card>
        </section>

        <Divider />

        {/* ── 8. Pendanaan ──────────────────────────────── */}
        <section id="pendanaan" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
          <SectionHead
            eyebrow="Pendanaan"
            title="Pre-seed: Rp100–500 juta"
            desc="Dana yang dicari bukan untuk membangun produk dari nol — melainkan bahan bakar untuk mendapatkan pengguna awal. Investor pre-seed masuk di valuasi terendah, sebelum traksi mendorong valuasi naik."
          />
          <h3 className="mb-4 text-lg font-bold">Alokasi dana</h3>
          <div className="mb-10 space-y-4">
            <Progress label="Marketing & akuisisi user — program komunitas, kreator, insentif awal" value={50} />
            <Progress label="Operasional & tim — tim inti, server, operasional" value={30} />
            <Progress label="Pengembangan lanjutan — fitur pasca-launch, optimasi" value={20} />
          </div>
          <h3 className="mb-4 text-lg font-bold">Mengapa berinvestasi sekarang</h3>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                icon: ChartLineUp,
                title: "Valuasi terendah",
                desc: "Investasi sebelum traksi berarti harga masuk termurah.",
              },
              {
                icon: Check,
                title: "Risiko eksekusi sudah kecil",
                desc: "Produk sudah dibangun dan siap launch — bukan sekadar slide.",
              },
              {
                icon: UsersThree,
                title: "Pasar sudah valid",
                desc: "Jual-beli via DM adalah perilaku masif yang tinggal dipindahkan.",
              },
              {
                icon: Lightning,
                title: "Tim efisien",
                desc: "Struktur ramping: setiap rupiah bekerja maksimal untuk pertumbuhan.",
              },
            ].map((r) => (
              <Card key={r.title} className="p-6">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100">
                  <Icon icon={r.icon} size={22} className="text-black" />
                </span>
                <h4 className="mb-1.5 font-bold">{r.title}</h4>
                <p className="text-[15px] text-neutral-600">{r.desc}</p>
              </Card>
            ))}
          </div>
          <Alert variant="info" className="mt-8">
            Visi jangka panjang: ekspansi regional dan riset blockchain memberi
            upside moonshot, sementara rencana bisnis inti memberi jalur jelas
            menuju profitabilitas.
          </Alert>
        </section>

        <Divider />

        {/* ── 9. Kontak ─────────────────────────────────── */}
        <section id="kontak" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
          <SectionHead
            eyebrow="Kontak"
            title="Mari bicara"
            desc="Tertarik berinvestasi atau ingin tahu lebih dalam? Whitepaper lengkap (17 bab) tersedia untuk diunduh."
          />
          <Card className="flex flex-col items-start gap-5 p-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black">
                <Icon icon={EnvelopeSimple} size={22} className="text-white" />
              </span>
              <div>
                <p className="text-sm font-semibold text-neutral-500">Email investor</p>
                <p className="text-lg font-bold">{EMAIL}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <CopyButton text={EMAIL} label="Salin email" />
              <a href={`mailto:${EMAIL}?subject=Investasi%20Pre-Seed%20Kahade`}>
                <Button rightIcon={ArrowSquareOut}>Kirim email</Button>
              </a>
            </div>
          </Card>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="/whitepaper-kahade.pdf" download>
              <Button variant="secondary" leftIcon={FileText}>
                Unduh whitepaper (PDF)
              </Button>
            </a>
            <a href="https://kahade.id" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" rightIcon={ArrowSquareOut}>
                kahade.id
              </Button>
            </a>
            <a href="https://karir.kahade.id" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" rightIcon={ArrowSquareOut}>
                karir.kahade.id
              </Button>
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="border-t border-neutral-100">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <Logo size={24} />
            <span className="text-sm font-bold">Kahade</span>
          </div>
          <p className="flex items-center gap-1.5 text-xs text-neutral-500">
            <Icon icon={Buildings} size={14} />
            PT Kawal Hak Dengan Aman · NIB & NPWP terbit · © 2026
          </p>
        </div>
      </footer>

      {/* GTM note */}
      <div className="sr-only">
        Go-to-market: komunitas thrift/preloved, sneakers & streetwear, fandom
        K-pop, dan kampus. Kreator micro-influencer 10rb–100rb followers.
      </div>
    </div>
  );
}
