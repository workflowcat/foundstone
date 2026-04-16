import Link from "next/link";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animate";
import { GeometricHero, StrataDivider } from "@/components/geometric-bg";
import { practices } from "@/data/practices";
import { notes } from "@/data/notes";

export default function Home() {
  return (
    <>
      {/* ═══ Hero ═══ */}
      {/* pt-24 keeps content clear of the fixed h-20 nav on mobile where
          the centered content would otherwise drift under it. */}
      <section className="relative min-h-screen pt-24 pb-12 flex flex-col items-center justify-center px-6 md:px-12">
        <GeometricHero />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn delay={0.3}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight text-cream">
              We run the operations
              <br />
              <span className="text-amber/80">behind B2B technology companies.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="mt-10 max-w-2xl mx-auto text-stone-400 text-lg leading-relaxed">
              Nine practice areas — from transactions and governance to
              finance, data, AI, KYC, and managed services. Built on
              businesses we run ourselves. Available on retainer.
            </p>
          </FadeIn>

          <FadeIn delay={0.9}>
            <div className="mt-10 flex items-center justify-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-3 px-8 py-4 border border-amber/40 text-amber text-sm tracking-wider uppercase hover:bg-amber/10 transition-all duration-300"
              >
                What we do
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>

        </div>

      </section>

      {/* ═══ Practice areas grid ═══ */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 border-t border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-amber/60 mb-4">
              Practice areas
            </p>
            <p className="text-stone-400 leading-relaxed max-w-2xl mb-16 text-lg">
              Nine practices, each built when one of our own companies
              hit a problem the existing team couldn&apos;t solve. Each
              one delivered as advisory, embedded retainer, a project,
              or a full build-and-transition — depending on what you
              need.
            </p>
          </FadeIn>

          <StaggerChildren
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]"
            stagger={0.05}
          >
            {practices.map((practice) => (
              <StaggerItem key={practice.slug}>
                <Link
                  href={`/services#${practice.slug}`}
                  className="group block bg-stone-950 p-7 md:p-8 h-full transition-colors hover:bg-stone-900/50"
                >
                  <p className="font-mono text-amber/50 text-[11px] mb-3">
                    {practice.num}
                  </p>
                  <h3 className="font-serif text-lg md:text-xl text-cream group-hover:text-amber/90 transition-colors mb-2 leading-snug">
                    {practice.name}
                  </h3>
                  <p className="text-stone-500 text-[13px] leading-relaxed">
                    {practice.tagline}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <FadeIn>
            <div className="pt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-300 transition-colors text-xs tracking-wider uppercase"
              >
                See how engagements work
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <StrataDivider />

      {/* ═══ Notes ═══ */}
      <section className="relative py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-amber/60 mb-4">
              Notes from the back office
            </p>
            <p className="text-stone-400 leading-relaxed max-w-2xl mb-16">
              Long-form notes on operations, compliance, scaling, and
              what we have learned running these functions.
            </p>
          </FadeIn>

          <StaggerChildren className="space-y-0" stagger={0.08}>
            {notes.map((note) => (
              <StaggerItem key={note.slug}>
                <Link href={`/notes/${note.slug}`} className="group block">
                  <article className="py-8 md:py-10 border-t border-white/[0.04] group-hover:border-amber/20 transition-colors">
                    <div className="flex items-start gap-5">
                      <note.Icon className="w-12 h-12 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity hidden sm:block mt-1" />
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
                className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-300 transition-colors text-xs tracking-wider uppercase"
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

      {/* ═══ Contact ═══ */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 border-t border-white/[0.04]">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-3xl md:text-4xl text-cream mb-6">
              Tell us about your situation.
            </p>
            <p className="text-stone-400 leading-relaxed mb-10">
              We will tell you which practice areas fit, what shape
              the engagement should take, and whether we are the right
              team at all. No pitch deck.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-amber/40 text-amber text-sm tracking-wider uppercase hover:bg-amber/10 transition-all duration-300"
            >
              Get in touch
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
