import type { ReactNode } from "react";
import {
  Accordion,
  Avatar,
  ButtonLink,
  Container,
  CopyButton,
  DescriptionList,
  Eyebrow,
  Icon,
  IndexList,
  PageHeader,
  SectionHeader,
  Stat,
  Steps,
  Table,
  TBody,
  TD,
  TextLink,
  TH,
  THead,
  Toc,
  TR,
  type TocItem,
} from "@kahade/ui";
import { Check } from "@phosphor-icons/react/dist/ssr";
import {
  ContactLink,
  WHITEPAPER_HREF,
  WhitepaperLink,
} from "@/components/investor/ActionLink";

const EMAIL = "halo@kahade.id"; // PLACEHOLDER: ganti dengan email investor resmi bila ada

const MAIL_INVEST = `mailto:${EMAIL}?subject=Investasi%20Pre-Seed%20Kahade`;
const MAIL_CALL = `mailto:${EMAIL}?subject=Jadwal%20Panggilan%20%E2%80%94%20Investasi%20Pre-Seed%20Kahade&body=Halo%2C%0A%0ASaya%20tertarik%20berdiskusi%20lebih%20lanjut%20tentang%20investasi%20pre-seed%20Kahade.%20Mohon%20info%20jadwal%20yang%20tersedia.%0A%0ATerima%20kasih.`;

/* ── Isi ──────────────────────────────────────────────────────────── */

const SECTIONS = [
  { id: "masalah", label: "Masalah" },
  { id: "solusi", label: "Solusi" },
  { id: "model-bisnis", label: "Model bisnis" },
  { id: "traksi", label: "Traksi & rencana" },
  { id: "moat", label: "Keunggulan kompetitif" },
  { id: "tim", label: "Tim" },
  { id: "pendanaan", label: "Pendanaan" },
  { id: "faq", label: "FAQ" },
  { id: "kontak", label: "Kontak" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

const TOC: TocItem[] = SECTIONS.map((s) => ({ id: s.id, label: s.label }));

/** Nomor urut seksi dua digit ("01"), bersumber dari urutan SECTIONS. */
function indexOf(id: SectionId): string {
  return String(SECTIONS.findIndex((s) => s.id === id) + 1).padStart(2, "0");
}

const KEY_FACTS = [
  { label: "Putaran pre-seed", value: "Rp100–500 juta" },
  { label: "Launch publik", value: "8 Desember 2026" },
  { label: "Target 6 bulan", value: "1 juta transaksi" },
  { label: "Biaya transaksi", value: "2,5%", hint: "Min Rp2.500 · maks Rp250.000" },
];

const PROBLEMS = [
  {
    title: "Jual-beli via DM rawan penipuan",
    desc: "Penjual fiktif, barang tidak sesuai, pembeli nakal, akun kloningan. Tidak ada pihak ketiga yang menjamin transaksi — korban penipuan online mencapai ratusan ribu kasus per tahun.",
  },
  {
    title: "Marketplace membosankan",
    desc: "Katalog, kolom pencarian, keranjang — seperti belanja di katalog tahun 2010. Generasi yang menghabiskan 3–4 jam sehari di medsos tidak “menemukan” barang, mereka disuruh “mencari” barang.",
  },
  {
    title: "Keterbatasan kategori",
    desc: "Marketplace dirancang untuk barang fisik. Jasa, produk digital, dan barang preloved unik tidak pernah pas di format katalog — penjualnya terpaksa kembali ke DM yang tidak aman.",
  },
];

const MARKET_GAP = [
  ["Pengalaman sosial", "Seru", "Kaku", "Seru"],
  ["Keamanan transaksi", "Tidak ada", "Ada", "Ada"],
  ["Jual jasa & digital", "Fleksibel", "Terbatas", "Fleksibel"],
  ["Penemuan organik", "Feed", "Katalog", "Feed"],
] as const;

const FEATURES = [
  {
    title: "Social commerce feed",
    desc: "Scroll feed, temukan barang menarik dari orang yang kamu follow, like, komen, chat dengan penjual. Belanja menjadi hiburan: penemuan, interaksi, keseruan — seperti scroll medsos biasa.",
  },
  {
    title: "Fitur unik: patungan & jastip",
    desc: "Fitur yang tidak dimiliki marketplace katalog: beli bareng (patungan) dan jasa titip (jastip) yang terintegrasi langsung dengan transaksi aman.",
  },
];

const PLUS_BENEFITS = [
  "Potongan 50% biaya transaksi",
  "Kuota pembebasan biaya Rp990.000 per periode",
  "Prioritas layanan pelanggan",
  "Badge Plus di profil",
];

const SHIPPED = [
  "Backend API lengkap (300+ endpoint)",
  "Aplikasi mobile iOS & Android: feed, etalase, chat, checkout, dompet transaksi",
  "Panel admin: moderasi, keuangan, sengketa, analitik",
  "Web kahade.id: landing + handler deeplink",
  "Badan hukum: PT Kawal Hak Dengan Aman (NIB & NPWP terbit)",
];

const LAUNCH_STEPS = [
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
];

const COMMUNITIES = [
  {
    title: "Thrift / preloved",
    desc: "Transaksi harian, harga terjangkau — cocok untuk volume.",
  },
  {
    title: "Sneakers & streetwear",
    desc: "Nilai transaksi tinggi, budaya kepercayaan komunitas kuat.",
  },
  {
    title: "Fandom K-pop",
    desc: "Frekuensi jual-beli photocard & merch sangat tinggi.",
  },
  {
    title: "Kampus",
    desc: "Early adopter alami: melek digital dan terbiasa patungan.",
  },
];

const MOATS = [
  {
    title: "Network effect bersisi sosial",
    desc: "Makin banyak penjual, makin menarik feed-nya; makin banyak pembeli, makin besar peluang laku. Memindahkan “toko” berarti meninggalkan followers dan reputasi — switching cost yang emosional, jauh lebih sulit ditiru.",
  },
  {
    title: "Kepercayaan komunitas organik",
    desc: "Dibangun dari bawah lewat interaksi nyata dan ulasan jujur — tidak bisa dibeli dengan budget iklan sebesar apa pun, dan menyebar sendiri lewat pengguna yang puas.",
  },
  {
    title: "Innovator dilemma kompetitor",
    desc: "Shopee dan TikTok Shop bisa meniru feed sosial — tapi tidak akan sungguh-sungguh: model katalog mereka akan terkanibalisasi. Fokus mereka brand dan penjual profesional, bukan pengguna individu.",
  },
  {
    title: "Kecepatan eksekusi",
    desc: "Tim ramping: keputusan dalam hitungan jam, fitur baru dalam hitungan hari. Burn rate rendah berarti runway panjang — setiap rupiah bekerja lebih keras.",
  },
];

const HIRING_PLAN = [
  "Co-Founder (bisnis/operasional)",
  "COO",
  "2–3 engineer",
  "1 desainer produk",
  "1 community manager",
];

const ALLOCATION = [
  {
    title: "Marketing & akuisisi user",
    desc: "program komunitas, kreator, insentif awal",
    value: 50,
  },
  {
    title: "Operasional & tim",
    desc: "gaji tim inti, server, operasional",
    value: 30,
  },
  {
    title: "Pengembangan lanjutan",
    desc: "fitur pasca-launch, optimasi, riset blockchain",
    value: 20,
  },
];

const PROJECTION = [
  {
    term: "Bulan 1–3",
    detail: "Fokus akuisisi 1.000–5.000 pengguna awal; burn rate moderat, pembelajaran di atas segalanya",
  },
  {
    term: "Bulan 4–6",
    detail: "Dorong menuju 1 juta transaksi; unit economics diuji dengan data nyata",
  },
  {
    term: "Bulan 7–12",
    detail: "Bila traksi sesuai target, siapkan putaran seed dengan valuasi lebih tinggi",
  },
];

const WHY_NOW = [
  {
    title: "Valuasi terendah",
    desc: "Investasi sebelum traksi berarti harga masuk termurah.",
  },
  {
    title: "Risiko eksekusi sudah kecil",
    desc: "Produk sudah dibangun dan siap launch — bukan sekadar slide.",
  },
  {
    title: "Pasar sudah valid",
    desc: "Jual-beli via DM adalah perilaku masif yang tinggal dipindahkan.",
  },
  {
    title: "Tim efisien",
    desc: "Struktur ramping: setiap rupiah bekerja maksimal untuk pertumbuhan.",
  },
];

const FAQ = [
  {
    q: "Berapa minimal investasi?",
    a: "Putaran pre-seed Kahade dibuka untuk total Rp100–500 juta. Minimal partisipasi per investor bersifat fleksibel — hubungi tim kami untuk mendiskusikannya.",
  },
  {
    q: "Bagaimana struktur investasinya?",
    a: "Struktur investasi fleksibel: saham langsung di PT Kawal Hak Dengan Aman, atau convertible note dengan diskon valuasi. Detail final disepakati bersama sebelum penandatanganan.",
  },
  {
    q: "Kapan Kahade diluncurkan?",
    a: "Kahade dijadwalkan diluncurkan pada 8 Desember 2026. Produknya sudah jadi — bukan sekadar ide — dan saat ini dalam tahap persiapan peluncuran.",
  },
  {
    q: "Bagaimana cara menghubungi tim?",
    a: "Kirim email ke halo@kahade.id — kami merespons maksimal 2 hari kerja. Kamu juga bisa menjadwalkan panggilan langsung dari bagian Kontak di halaman ini.",
  },
];

/* ── JSON-LD ──────────────────────────────────────────────────────── */

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// JSON-LD Organization — logo memakai favicon.svg (file yang benar-benar ada di public/).
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PT Kawal Hak Dengan Aman",
  url: "https://investor.kahade.id",
  logo: "https://investor.kahade.id/favicon.svg",
  sameAs: [
    "https://kahade.id",
    "https://karir.kahade.id",
    "https://legal.kahade.id",
    "https://bantuan.kahade.id",
    "https://status.kahade.id",
    "https://investor.kahade.id",
    "https://artikel.kahade.id",
  ],
};

/* ── Pola lokal ───────────────────────────────────────────────────── */

/** Seksi bernomor di kolom isi; hairline di antara seksi. */
function MemoSection({
  id,
  title,
  description,
  children,
}: {
  id: SectionId;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  const label = SECTIONS.find((s) => s.id === id)?.label ?? "";
  const first = SECTIONS[0].id === id;
  // Margin gulir: eyebrow mendarat ±40px di bawah header (64px) saat dilompati dari daftar isi.
  const scroll = first ? "scroll-mt-26" : "scroll-mt-10 sm:scroll-mt-6 lg:scroll-mt-2";
  return (
    <section
      id={id}
      className={`border-t border-line py-16 first:border-t-0 first:pt-0 last:pb-4 sm:py-20 lg:py-24 ${scroll}`}
    >
      <SectionHeader index={indexOf(id)} eyebrow={label} title={title} description={description} />
      <div className="mt-10 sm:mt-12">{children}</div>
    </section>
  );
}

/** Sub-judul di dalam seksi. */
function SubHeading({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h3 className={`mb-5 text-h4 text-fg ${className}`}>{children}</h3>;
}

/** Blok teks berhairline (judul + paragraf) untuk grid dua kolom. */
function RuleGrid({
  items,
  titleAs: Title = "h3",
}: {
  items: { title: string; desc: string }[];
  titleAs?: "h3" | "h4";
}) {
  return (
    <ul className="grid gap-x-10 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.title} className="border-t border-line py-6">
          <Title className="text-h4 text-fg">{item.title}</Title>
          <p className="mt-2 text-body text-fg-muted">{item.desc}</p>
        </li>
      ))}
    </ul>
  );
}

/** Daftar periksa berhairline — tanda centang bermakna "sudah ada / termasuk". */
function CheckList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`border-t border-line ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 border-b border-line py-3.5">
          <Icon icon={Check} size={18} className="mt-0.5 text-fg" />
          <span className="text-body text-fg-2">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ── Halaman ──────────────────────────────────────────────────────── */

export default function InvestorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHeader
        size="display"
        eyebrow="Peluang investasi · Pre-seed"
        title="Jual beli semudah scroll medsos."
        lede="Kahade adalah aplikasi jual-beli pengguna ke pengguna yang tampilannya seperti media sosial. Jutaan anak muda Indonesia sudah jual-beli lewat DM setiap hari — tanpa perlindungan apa pun. Kami memberi mereka tempat yang lebih baik: pengalaman sosial yang seru, dengan keamanan transaksi setara marketplace."
        actions={
          <>
            <WhitepaperLink size="lg">Unduh whitepaper</WhitepaperLink>
            <ContactLink size="lg">Hubungi kami</ContactLink>
          </>
        }
      >
        <dl
          className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:mt-16 lg:grid-cols-4 lg:gap-x-8"
        >
          {KEY_FACTS.map((f) => (
            <div key={f.label} className="min-w-0 border-t-2 border-fg pt-4">
              <dt className="text-small text-fg-muted">{f.label}</dt>
              <dd className="mt-2 text-h3 font-bold text-fg tabular-nums">{f.value}</dd>
              {f.hint && (
                <dd className="mt-1 text-caption text-fg-subtle tabular-nums">{f.hint}</dd>
              )}
            </div>
          ))}
        </dl>
      </PageHeader>

      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28 max-h-[calc(100dvh-8rem)] overflow-y-auto pb-4">
              <Toc items={TOC} />
              <div className="mt-8 border-t border-line pt-6">
                <p className="text-caption text-fg-subtle">Whitepaper lengkap · 17 bab</p>
                <WhitepaperLink variant="secondary" size="sm" className="mt-3">
                  Unduh PDF
                </WhitepaperLink>
              </div>
            </div>
          </aside>

          <div className="min-w-0 lg:col-span-9">
            <Toc
              items={TOC}
              title="Di halaman ini"
              variant="disclosure"
              className="mb-12 lg:hidden"
            />

            <div>

              {/* 01 — Masalah */}
              <MemoSection
                id="masalah"
                title="Perilakunya sudah ada. Platformnya belum."
                description="Jutaan anak muda Indonesia jual-beli lewat DM Instagram, X, dan WhatsApp setiap hari: thrift, sneakers, merchandise K-pop, jasa desain, produk digital. Tiga masalah besar belum terselesaikan."
              >
                <IndexList
                  aria-label="Tiga masalah"
                  items={PROBLEMS.map((p, i) => ({
                    key: p.title,
                    index: String(i + 1),
                    title: p.title,
                    description: p.desc,
                  }))}
                />

                <SubHeading className="mt-16">Celah di pasar</SubHeading>
                <div
                  role="region"
                  aria-label="Tabel celah di pasar (bisa digulir ke samping)"
                  tabIndex={0}
                  className="overflow-x-auto"
                >
                  <Table className="min-w-[34rem]">
                    <THead>
                      <TR>
                        <TH scope="col" className="sticky left-0 z-10 bg-surface">
                          Aspek
                        </TH>
                        <TH scope="col">Jual-beli via DM</TH>
                        <TH scope="col">Marketplace besar</TH>
                        <th
                          scope="col"
                          className="border-b border-fg bg-surface-2 px-4 py-3 text-left text-caption font-semibold text-fg"
                        >
                          Kahade
                        </th>
                      </TR>
                    </THead>
                    <TBody>
                      {MARKET_GAP.map(([aspek, dm, mp, kahade]) => (
                        <TR key={aspek}>
                          <th
                            scope="row"
                            className="sticky left-0 z-10 border-b border-line bg-surface py-4 pr-6 text-left align-top font-semibold text-fg"
                          >
                            {aspek}
                          </th>
                          <TD>{dm}</TD>
                          <TD>{mp}</TD>
                          <td className="border-b border-line bg-surface-2 px-4 py-4 align-top">
                            <span className="inline-flex items-center gap-1.5 font-semibold text-fg">
                              <Icon icon={Check} size={16} />
                              {kahade}
                            </span>
                          </td>
                        </TR>
                      ))}
                    </TBody>
                  </Table>
                </div>
                <p className="mt-3 text-caption text-fg-subtle sm:hidden">
                  Geser tabel ke samping untuk melihat semua kolom.
                </p>
              </MemoSection>

              {/* 02 — Solusi */}
              <MemoSection
                id="solusi"
                title="Aplikasi jualan yang dikemas seperti media sosial"
                description="Bukan media sosial yang kebetulan bisa jualan. Feed, like, komen, follow — tidak ada cara pakai baru yang harus dipelajari. Keamanan yang baik adalah keamanan yang tidak terasa: cukup tekan “Beli via Kahade”, semuanya beres."
              >
                <RuleGrid items={FEATURES} />
                <p className="mt-10 max-w-[40rem] border-l-2 border-fg pl-5 text-lead text-fg">
                  Jual apa saja: barang fisik, jasa, produk digital, hingga barang
                  preloved unik — semua dalam format feed yang personal.
                </p>
              </MemoSection>

              {/* 03 — Model bisnis */}
              <MemoSection
                id="model-bisnis"
                title="Dua sumber pendapatan yang jelas"
                description="Transparansi biaya adalah standar kami: semua biaya ditampilkan di awal, tidak ada biaya tersembunyi."
              >
                <div className="grid gap-12 md:grid-cols-2 md:gap-10">
                  <div className="border-t-2 border-fg pt-6">
                    <h3 className="text-small font-semibold text-fg-muted">Biaya transaksi</h3>
                    <p className="mt-3 text-h1 text-fg tabular-nums">2,5%</p>
                    <p className="mt-4 text-body text-fg-muted">
                      Per transaksi. Minimum Rp2.500, maksimum Rp250.000. Jauh lebih
                      murah daripada risiko kehilangan jutaan rupiah karena tertipu.
                    </p>
                    <p className="mt-5 flex items-start gap-3 border-t border-line pt-4 text-body font-semibold text-fg">
                      <Icon icon={Check} size={18} className="mt-0.5" />
                      1.000 transaksi pertama gratis biaya
                    </p>
                  </div>
                  <div className="border-t-2 border-fg pt-6">
                    <h3 className="text-small font-semibold text-fg-muted">Kahade Plus</h3>
                    <p className="mt-3 text-h1 text-fg tabular-nums">
                      Rp99.000
                      <span className="text-h4 text-fg-muted">/bln</span>
                    </p>
                    <p className="mt-4 text-body text-fg-muted tabular-nums">
                      atau Rp899.000/tahun{" "}
                      <span className="font-semibold text-fg">(hemat ~24%)</span>
                    </p>
                    <CheckList items={PLUS_BENEFITS} className="mt-5" />
                  </div>
                </div>
                <div className="mt-14 grid gap-10 sm:grid-cols-2">
                  <Stat label="Estimasi titik impas" value="±20.000" hint="transaksi per bulan" />
                  <Stat
                    label="Target 6 bulan pasca-launch"
                    value="1.000.000"
                    hint="transaksi kumulatif"
                  />
                </div>
              </MemoSection>

              {/* 04 — Traksi & rencana */}
              <MemoSection
                id="traksi"
                title="Pre-launch — dan produknya sudah jadi"
                description="Berbeda dengan startup tahap ide yang masih berupa slide: risiko eksekusi teknis sudah lewat. Yang tersisa tinggal finalisasi pembayaran dan pengujian terakhir."
              >
                <div className="grid gap-12 xl:grid-cols-2 xl:gap-10">
                  <div>
                    <SubHeading>Yang sudah berjalan</SubHeading>
                    <CheckList items={SHIPPED} />
                  </div>
                  <div>
                    <SubHeading>Menuju launch</SubHeading>
                    <div className="border-t border-line pt-6">
                      <Steps current={0} steps={LAUNCH_STEPS} />
                    </div>
                  </div>
                </div>

                <SubHeading className="mt-16">Go-to-market: mulai dari komunitas</SubHeading>
                <p className="mb-8 max-w-[40rem] text-body text-fg-muted">
                  Tanpa iklan massal. Akuisisi awal berfokus pada empat komunitas yang
                  sudah punya budaya jual-beli aktif — didukung kreator
                  micro-influencer (10rb–100rb followers) yang memang berjualan di
                  Kahade.
                </p>
                <DescriptionList
                  items={COMMUNITIES.map((c) => ({ key: c.title, term: c.title, detail: c.desc }))}
                />
              </MemoSection>

              {/* 05 — Keunggulan kompetitif */}
              <MemoSection id="moat" title="Sulit ditiru, sulit dikejar">
                <IndexList
                  aria-label="Keunggulan kompetitif"
                  items={MOATS.map((m, i) => ({
                    key: m.title,
                    index: String(i + 1),
                    title: m.title,
                    description: m.desc,
                  }))}
                />
              </MemoSection>

              {/* 06 — Tim */}
              <MemoSection
                id="tim"
                title="Ramping sejak hari pertama"
                description="Tim kecil bukan keterbatasan — ini strategi. Efisiensi modal, kecepatan keputusan, dan perekrutan yang sangat selektif."
              >
                <article className="grid gap-8 border-t border-line pt-8 md:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] md:gap-10">
                  <div className="flex items-center gap-4 md:flex-col md:items-start">
                    {/* Inisial dekoratif: nama lengkap diumumkan oleh judul di sebelahnya. */}
                    <span aria-hidden="true">
                      <Avatar name="Muhammad Agung" size="lg" />
                    </span>
                    <div>
                      <h3 className="text-h4 text-fg">Muhammad Agung Kurniawan</h3>
                      <p className="mt-0.5 text-small text-fg-muted">Founder & CTO</p>
                    </div>
                  </div>
                  <div className="min-w-0 max-w-reading">
                    <div className="space-y-4 text-body-lg text-fg-2">
                      <p>
                        Membangun seluruh sistem Kahade sendiri: arsitektur backend,
                        aplikasi mobile iOS dan Android, panel admin, dan web —
                        termasuk sistem transaksi dengan perlindungan pembeli dan
                        penjual, integrasi payment gateway, notifikasi real-time, dan
                        infrastruktur server production.
                      </p>
                      <p>
                        Tidak ada lapisan antara pembuat produk dan pengguna — feedback
                        langsung menjadi perbaikan. Founder solo berarti bakar uang
                        kecil dan setiap rupiah pendanaan bekerja untuk pertumbuhan,
                        bukan birokrasi.
                      </p>
                    </div>
                    <h4 className="mt-10 text-small font-semibold text-fg">
                      Setelah pendanaan awal, merekrut:
                    </h4>
                    <ul className="mt-3 border-t border-line">
                      {HIRING_PLAN.map((role) => (
                        <li key={role} className="border-b border-line py-3 text-body text-fg-2">
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </MemoSection>

              {/* 07 — Pendanaan */}
              <MemoSection
                id="pendanaan"
                title="Pre-seed: Rp100–500 juta"
                description="Dana yang dicari bukan untuk membangun produk dari nol — melainkan bahan bakar untuk mendapatkan pengguna awal. Investor pre-seed masuk di valuasi terendah, sebelum traksi mendorong valuasi naik."
              >
                <SubHeading>Alokasi dana</SubHeading>
                <ul className="border-t border-line">
                  {ALLOCATION.map((a) => (
                    <li key={a.title} className="border-b border-line py-5">
                      <div className="flex items-baseline justify-between gap-6">
                        <p className="min-w-0">
                          <span className="text-body font-semibold text-fg">{a.title}</span>
                          <span className="mt-0.5 block text-small text-fg-muted">{a.desc}</span>
                        </p>
                        <p className="shrink-0 text-h3 text-fg tabular-nums">{a.value}%</p>
                      </div>
                      <div aria-hidden="true" className="mt-4 h-2 w-full rounded-full bg-surface-3">
                        <div className="h-full rounded-full bg-fg" style={{ width: `${a.value}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>

                <SubHeading className="mt-16">Proyeksi 12 bulan</SubHeading>
                <DescriptionList items={PROJECTION.map((p) => ({ key: p.term, ...p }))} />

                <SubHeading className="mt-16">Struktur investasi yang fleksibel</SubHeading>
                <p className="max-w-[40rem] text-body-lg text-fg-2">
                  Saham langsung di PT Kawal Hak Dengan Aman, atau{" "}
                  <strong className="font-semibold text-fg">convertible note</strong>{" "}
                  yang dikonversi menjadi saham pada putaran berikutnya dengan diskon
                  valuasi.
                </p>

                <SubHeading className="mt-16">Mengapa berinvestasi sekarang</SubHeading>
                <RuleGrid items={WHY_NOW} titleAs="h4" />

                <p className="mt-10 max-w-[40rem] border-l-2 border-fg pl-5 text-body-lg text-fg-2">
                  Visi jangka panjang: ekspansi regional dan riset blockchain memberi
                  upside moonshot, sementara rencana bisnis inti memberi jalur jelas
                  menuju profitabilitas.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <p className="text-h4 text-fg">Tertarik berinvestasi?</p>
                  <ContactLink variant="primary" size="lg">
                    Hubungi kami
                  </ContactLink>
                </div>
              </MemoSection>

              {/* 08 — FAQ */}
              <MemoSection
                id="faq"
                title="Pertanyaan umum"
                description="Hal yang paling sering ditanyakan calon investor tentang putaran pre-seed Kahade."
              >
                <Accordion
                  size="lg"
                  items={FAQ.map((f, i) => ({
                    id: `faq-${i}`,
                    title: f.q,
                    content: <p>{f.a}</p>,
                  }))}
                />
              </MemoSection>
            </div>
          </div>
        </div>
      </Container>

      {/* 09 — Kontak: strip penutup */}
      <section
        id="kontak"
        aria-labelledby="kontak-judul"
        className="scroll-mt-16 bg-surface-inverse text-white"
      >
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <Eyebrow index={indexOf("kontak")} inverse className="mb-5">
                Kontak
              </Eyebrow>
              <h2 id="kontak-judul" className="text-h3 text-white">
                Mari bicara
              </h2>
              <p className="mt-4 max-w-[34rem] text-body-lg text-white/70">
                Tertarik berinvestasi atau ingin tahu lebih dalam? Whitepaper
                lengkap (17 bab) tersedia untuk diunduh. Kami merespons maksimal
                2 hari kerja.
              </p>
            </div>
            <div className="min-w-0 lg:col-span-7 lg:border-l lg:border-white/15 lg:pl-12">
              <p className="text-small text-white/60">Email investor</p>
              <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-4">
                <a
                  href={MAIL_INVEST}
                  className="min-w-0 break-words text-h2 text-white underline decoration-white/30 decoration-1 underline-offset-[6px] hover:decoration-white"
                >
                  {EMAIL}
                </a>
                <CopyButton text={EMAIL} label="Salin email" />
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={MAIL_INVEST} variant="inverse">
                  Kirim email
                </ButtonLink>
                <ButtonLink href={MAIL_CALL} variant="inverseSecondary">
                  Jadwalkan panggilan
                </ButtonLink>
              </div>
            </div>
          </div>

          <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-1 border-t border-white/15 pt-6">
            <li>
              <TextLink href={WHITEPAPER_HREF} download inverse arrow="none">
                Unduh whitepaper (PDF)
              </TextLink>
            </li>
            <li>
              <TextLink
                href="https://kahade.id"
                target="_blank"
                rel="noopener noreferrer"
                inverse
                arrow="external"
              >
                kahade.id
              </TextLink>
            </li>
            <li>
              <TextLink
                href="https://karir.kahade.id"
                target="_blank"
                rel="noopener noreferrer"
                inverse
                arrow="external"
              >
                karir.kahade.id
              </TextLink>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
}
