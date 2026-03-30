import Link from "next/link";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animate";
import { GeometricHero, StrataDivider } from "@/components/geometric-bg";
import { IconFile, IconLedger, IconMineShaft, IconShip } from "@/components/note-icons";

const notes = [
  {
    slug: "what-your-bank-sees",
    date: "Mar 2026",
    title: "What your bank actually sees when they open your file",
    readTime: "16 min",
    Icon: IconFile,
  },
  {
    slug: "venetian-bookkeeping",
    date: "Feb 2026",
    title: "Why the Venetian Republic\u2019s bookkeeping system matters for modern SaaS companies",
    readTime: "14 min",
    Icon: IconLedger,
  },
  {
    slug: "risk-management-1556",
    date: "Jan 2026",
    title: "What mining engineers knew about risk management in 1556 that startup founders don\u2019t",
    readTime: "14 min",
    Icon: IconMineShaft,
  },
  {
    slug: "dutch-east-india-holding",
    date: "Dec 2025",
    title: "How the Dutch East India Company invented the holding company structure",
    readTime: "11 min",
    Icon: IconShip,
  },
];

const services = [
  {
    title: "Operations",
    roles: "Fractional COO",
    desc: "Operating cadence, vendor management, reporting, process design. The 40% of the CEO\u2019s time that isn\u2019t their job.",
  },
  {
    title: "Finance",
    roles: "Fractional CFO \u00b7 Treasury",
    desc: "Cash flow forecasting, board-ready financials, multi-entity consolidation, bank relationships. The thinking layer on top of the recording layer.",
  },
  {
    title: "Marketing",
    roles: "Fractional CMO",
    desc: "Positioning, channel strategy, content systems. Where the next 50 customers come from, measured with numbers.",
  },
  {
    title: "Infrastructure",
    roles: "CTO \u00b7 Data Ops \u00b7 People Ops \u00b7 Governance",
    desc: "Technical operations, data warehousing, HR systems, compliance frameworks, entity management. The load-bearing functions.",
  },
];

export default function Home() {
  return (
    <>
      {/* ═══ Hero ═══ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12">
        <GeometricHero />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight text-cream italic">
              &ldquo;Every company between 15 and 150 people has the same problem.&rdquo;
            </h1>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="mt-10 max-w-2xl mx-auto text-stone-400 text-lg leading-relaxed text-center">
              Fractional COO, CFO, and CMO on retainer. We&apos;ve been
              running these functions for our own companies since 2018.
              Now we run them for yours.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-3 px-8 py-4 border border-amber/40 text-amber text-sm tracking-wider uppercase hover:bg-amber/10 transition-all duration-300"
              >
                How it works
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={1.4} className="absolute bottom-12">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-600">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-stone-600 to-transparent" />
          </div>
        </FadeIn>
      </section>

      {/* ═══ Notes — content leads ═══ */}
      <section className="relative py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-amber/60 mb-4">
              Notes from the back office
            </p>
            <p className="text-stone-400 leading-relaxed max-w-2xl mb-16">
              Things we&apos;ve learned from running companies, managing
              money across borders, and automating processes that
              shouldn&apos;t require a human.
            </p>
          </FadeIn>

          <StaggerChildren className="space-y-0" stagger={0.08}>
            {notes.map((note) => (
              <StaggerItem key={note.slug}>
                <Link href={`/notes/${note.slug}`} className="group block">
                  <article className="py-8 md:py-10 border-t border-white/[0.04] group-hover:border-amber/15 transition-colors">
                    <div className="flex items-start gap-5">
                      <note.Icon className="w-12 h-12 shrink-0 opacity-40 group-hover:opacity-70 transition-opacity hidden sm:block mt-1" />
                      <div className="flex-1 min-w-0 flex items-start justify-between gap-4">
                        <h3 className="font-serif text-xl md:text-2xl text-cream group-hover:text-amber/90 transition-colors leading-snug">
                          {note.title}
                        </h3>
                        <div className="hidden md:flex flex-col items-end shrink-0 pt-1">
                          <span className="text-xs text-stone-600">{note.date}</span>
                          <span className="text-xs text-stone-700 mt-1">{note.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn>
            <div className="pt-8">
              <Link
                href="/notes"
                className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-400 transition-colors text-xs tracking-wider uppercase"
              >
                All notes
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <StrataDivider />

      {/* ═══ Services — simplified to 4 groups ═══ */}
      <section className="relative py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-amber/60 mb-4">
              Services
            </p>
            <p className="text-stone-400 leading-relaxed max-w-2xl mb-16">
              Monthly retainer, 3&ndash;12 month engagements. We embed into
              your tools, attend your standups, and do the actual work.
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.03]" stagger={0.1}>
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <div className="bg-stone-950 p-8 md:p-10 h-full">
                  <p className="text-xs tracking-[0.2em] uppercase text-amber/50 mb-2">
                    {s.title}
                  </p>
                  <p className="text-cream/80 text-sm mb-3">{s.roles}</p>
                  <p className="text-stone-400 text-[15px] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn>
            <div className="pt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-400 transition-colors text-xs tracking-wider uppercase"
              >
                All services
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Contact ═══ */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 border-t border-white/[0.04]">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-3xl md:text-4xl text-cream mb-10">
              Interested in working with us?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-amber/40 text-amber text-sm tracking-wider uppercase hover:bg-amber/10 transition-all duration-300"
            >
              Contact Foundstone
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
