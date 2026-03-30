import Link from "next/link";
import { FadeIn } from "@/components/animate";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-amber mb-6">
              Services
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-cream">
              What fractional means in practice
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-10 space-y-5 text-stone-400 text-lg leading-relaxed">
              <p>
                Monthly retainer, 3&ndash;12 month engagements. We embed
                into your tools, attend your standups, and do the actual
                work. Most engagements start with one or two of these and
                expand from there.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Core services ═══ */}
      <section className="relative px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto space-y-0">

          {/* Operations */}
          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <div className="flex items-start gap-4 mb-2">
                <p className="text-amber/50 text-sm font-mono">01</p>
                <p className="text-xs tracking-[0.2em] uppercase text-amber/40">
                  Where most engagements start
                </p>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-8">
                Fractional COO
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p>
                  Your CEO is spending 40% of their time on vendor
                  contracts, hiring logistics, payroll, and internal
                  tooling decisions that someone needs to own. They know
                  this. They also know that hiring a full-time COO at this
                  stage is a $200K+ commitment they cannot evaluate because
                  they have never had one. Both things are true, and the
                  company stays stuck between them.
                </p>
                <p>
                  We build the operating cadence, clean up the vendor
                  stack, set up reporting that people actually read, and
                  run it until you hire someone permanent or decide you
                  would rather we kept going. Most engagements start here
                  because this is where the pain is most visible.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Operating cadence", "Vendor management", "Hiring frameworks", "Process design", "Procurement"].map((t) => (
                  <span key={t} className="text-xs tracking-wider text-stone-600 border border-white/[0.04] px-3 py-1">{t}</span>
                ))}
              </div>
            </article>
          </FadeIn>

          {/* Finance */}
          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <p className="text-amber/50 text-sm font-mono mb-2">02</p>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-8">
                Fractional CFO &amp; Treasury
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p>
                  Your bookkeeper records what happened. Nobody tells you
                  what the numbers mean, whether you will run out of money
                  in four months, or why margins dropped 8 points since
                  Q2. The data exists. The interpretation does not.
                </p>
                <p>
                  Cash flow forecasting that actually forecasts. Budget
                  vs. actuals that explain variance. Board-ready financials.
                  Multi-entity consolidation across jurisdictions. The
                  conversation with your bank where someone needs to sound
                  like they understand what EBITDA is, because they do.
                  We have run this across Estonia, Cyprus, and Ukraine
                  simultaneously. Multi-currency, multi-entity,
                  intercompany flows. If your situation is complicated,
                  ours is worse and we handle it.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Cash flow forecasting", "Management reporting", "Multi-entity consolidation", "Bank relationships", "Transfer pricing"].map((t) => (
                  <span key={t} className="text-xs tracking-wider text-stone-600 border border-white/[0.04] px-3 py-1">{t}</span>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/notes/venetian-bookkeeping" className="text-xs tracking-wider text-amber/40 hover:text-amber/70 transition-colors">
                  Read: Why Venetian bookkeeping matters for SaaS &rarr;
                </Link>
              </div>
            </article>
          </FadeIn>

          {/* Marketing */}
          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <p className="text-amber/50 text-sm font-mono mb-2">03</p>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-8">
                Fractional CMO
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p>
                  Most B2B companies between seed and profitability have a
                  founder writing occasional LinkedIn posts, a junior hire
                  running paid ads with unclear attribution, and a website
                  from eighteen months ago. Everybody knows this is not
                  enough. Nobody has time to fix it because fixing it
                  requires decisions about positioning that the founder
                  keeps postponing.
                </p>
                <p>
                  We figure out where your next 50 customers come from,
                  build the system to reach them, and measure it. Channel
                  strategy based on your unit economics. Content that
                  compounds. Numbers, not vibes.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Positioning", "Channel strategy", "Content systems", "Attribution", "Unit economics"].map((t) => (
                  <span key={t} className="text-xs tracking-wider text-stone-600 border border-white/[0.04] px-3 py-1">{t}</span>
                ))}
              </div>
            </article>
          </FadeIn>

          {/* Infrastructure */}
          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <p className="text-amber/50 text-sm font-mono mb-2">04</p>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-8">
                Infrastructure &amp; Governance
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p>
                  The functions nobody wants to think about and everybody
                  needs. Technical operations: CI/CD pipelines, monitoring,
                  incident response, SOC 2 prep ($30K&ndash;$150K and
                  6&ndash;12 months — 29% of companies report losing deals
                  without it). Data infrastructure: warehouse, dashboards,
                  the ability for the CEO to answer &ldquo;how are we
                  doing?&rdquo; without asking three people.
                </p>
                <p>
                  People operations: payroll across jurisdictions,
                  employment contracts, onboarding workflows. Compliance:
                  risk registers, corporate housekeeping, the documentation
                  that banks ask for during enhanced due diligence and
                  you have 72 hours to produce. Entity management: the
                  literal corporate foundation.
                </p>
                <p>
                  Most companies need at least two of these. Most have
                  none of them systematized. Whether that is a problem
                  depends on whether anyone has asked yet.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Technical ops", "Data infrastructure", "People ops", "Compliance", "Entity management", "SOC 2"].map((t) => (
                  <span key={t} className="text-xs tracking-wider text-stone-600 border border-white/[0.04] px-3 py-1">{t}</span>
                ))}
              </div>
              <div className="mt-6 space-y-2">
                <Link href="/notes/risk-management-1556" className="block text-xs tracking-wider text-amber/40 hover:text-amber/70 transition-colors">
                  Read: What mining engineers knew about risk management &rarr;
                </Link>
                <Link href="/notes/what-your-bank-sees" className="block text-xs tracking-wider text-amber/40 hover:text-amber/70 transition-colors">
                  Read: What your bank sees when they open your file &rarr;
                </Link>
              </div>
            </article>
          </FadeIn>

        </div>
      </section>

      {/* Engagement model */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 border-t border-white/[0.04]">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-2xl md:text-3xl text-cream mb-6">
              Retainer-based. Embedded. Ongoing.
            </p>
            <p className="text-stone-400 leading-relaxed mb-10">
              We don&apos;t do one-off projects. Monthly retainer,
              3&ndash;12 month engagements. We embed into your operations
              until either you hire someone full-time or you decide
              you&apos;d rather we kept going.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-amber/40 text-amber text-sm tracking-wider uppercase hover:bg-amber/10 transition-all duration-300"
            >
              Discuss scope
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
