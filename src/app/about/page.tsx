import { FadeIn } from "@/components/animate";
import { Teams } from "@/components/teams";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-amber mb-6">
              About
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-cream">
              How we got here
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Origin story */}
      <section className="relative py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="space-y-6 text-stone-300 leading-relaxed text-[16px]">
              <p>
                Foundstone is a management company. We run the operations,
                finance, marketing, and back-office functions for a group
                of B2B technology businesses we operate ourselves, and for
                a small number of external clients on retainer.
              </p>
              <p>
                The first business in the group launched in 2018 — a B2B
                data API serving enterprise clients across the EU and
                North America. As the group grew, the operational overhead
                of running multiple companies across multiple countries
                became its own discipline. Finance, compliance, contracts,
                vendor relationships, payroll in three jurisdictions, bank
                due diligence that arrives on its own schedule. Someone
                had to handle all of it. We were that someone.
              </p>
              <p>
                Over time we built internal systems for payment controls,
                management reporting, compliance tracking, and operational
                automation. Then we noticed that every founder we talked
                to was solving the same problems from scratch — usually
                while trying to build product, usually discovering the
                compliance gap when a bank asked for documentation that
                did not exist. So we opened the door. Same team, same
                systems, now available on retainer to companies that are
                not ours.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Teams ═══ */}
      <section className="relative py-16 md:py-24 px-6 md:px-12 border-t border-white/[0.04]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-4">
              Teams
            </p>
            <p className="text-stone-400 leading-relaxed max-w-2xl mb-12 text-[15px]">
              Three teams covering operations, finance, and marketing.
              Each team has key people who work with you directly and
              a network of specialists behind them.
            </p>
          </FadeIn>

          <FadeIn>
            <Teams />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 border-t border-white/[0.04]">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
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
