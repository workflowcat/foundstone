import Link from "next/link";
import { FadeIn } from "@/components/animate";
import { FinancePipeline } from "@/components/function-diagrams";

export default function FinancePage() {
  return (
    <>
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <Link href="/services" className="text-xs tracking-wider text-stone-600 hover:text-stone-400 transition-colors uppercase mb-6 inline-block">&larr; Services</Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-cream">Finance &amp; Treasury</h1>
            <p className="mt-4 text-stone-500 text-sm tracking-wider">Fractional CFO</p>
          </FadeIn>
        </div>
      </section>

      <section className="relative px-6 md:px-12 pb-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="py-6 border-t border-b border-white/[0.04]">
              <FinancePipeline className="w-full h-auto" />
            </div>
          </FadeIn>
        </div>
      </section>

      <article className="relative px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="space-y-6 text-stone-300 leading-relaxed text-[16px]">
              <p>
                Your bookkeeper records what happened. Nobody interprets what
                the numbers mean, whether you will run out of money in four
                months, or why margins dropped 8 points since Q2. The data
                exists. The interpretation does not. A fractional CFO is the
                interpretation layer — the person who turns transactions into
                decisions and makes sure the{" "}
                <Link href="/notes/venetian-bookkeeping" className="text-amber/60 hover:text-amber/80 transition-colors">
                  distinction between cash received and revenue earned
                </Link>{" "}
                is something your company actually tracks rather than
                something it discovers during a board meeting.
              </p>

              <h2 className="font-serif text-xl text-cream mt-12 mb-4">What this looks like at each level</h2>

              <div className="space-y-6">
                <div className="pl-5 border-l border-amber/20">
                  <p className="text-cream/80 text-sm font-medium mb-2">Advisory · 2&ndash;5 hrs/month</p>
                  <p className="text-stone-400 text-[15px]">
                    Monthly review of your management accounts with someone
                    who will tell you what they see, including the parts you
                    would rather not hear about. Pre-board-meeting prep.
                    Cash flow questions answered within 24 hours instead of
                    whenever the bookkeeper gets around to it.
                  </p>
                </div>

                <div className="pl-5 border-l border-amber/20">
                  <p className="text-cream/80 text-sm font-medium mb-2">Embedded · 10&ndash;15 hrs/week</p>
                  <p className="text-stone-400 text-[15px]">
                    Cash flow forecasting that actually forecasts. Budget
                    vs. actuals that explain variance instead of displaying
                    it. Board-ready financials. Multi-entity consolidation
                    across jurisdictions. Bank relationship management —
                    including the conversation where someone needs to know
                    what EBITDA is because they do. We run this for our own
                    companies across Estonia, Cyprus, and Ukraine. If your
                    situation is complicated, ours is worse and we handle it.
                  </p>
                </div>

                <div className="pl-5 border-l border-amber/20">
                  <p className="text-cream/80 text-sm font-medium mb-2">Project · 60&ndash;90 days</p>
                  <p className="text-stone-400 text-[15px]">
                    Produce a complete financial model and reporting stack:
                    management accounts template, KPI dashboard, cash flow
                    model, board deck format. Train someone internal to
                    maintain it. Common post-fundraise engagement — the
                    investors want reporting that the company does not yet
                    have the infrastructure to produce.
                  </p>
                </div>

                <div className="pl-5 border-l border-amber/20">
                  <p className="text-cream/80 text-sm font-medium mb-2">Build &amp; transition · 6&ndash;12 months</p>
                  <p className="text-stone-400 text-[15px]">
                    Build the finance function: hire the controller or
                    finance manager, set up the reporting cadence, implement
                    the tools, close the books for the first time in under
                    a week. Then write the CFO job description and help
                    hire the person who replaces us.
                  </p>
                </div>
              </div>

              <h2 className="font-serif text-xl text-cream mt-12 mb-4">Typical deliverables</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Monthly management accounts",
                  "Cash flow forecast",
                  "Board-ready financials",
                  "Budget vs. actuals",
                  "Multi-entity consolidation",
                  "Revenue recognition model",
                  "Bank compliance documentation",
                  "KPI dashboard",
                ].map((d) => (
                  <span key={d} className="text-xs tracking-wider text-stone-600 border border-white/[0.04] px-3 py-1">{d}</span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-16 text-center">
              <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 border border-amber/40 text-amber text-sm tracking-wider uppercase hover:bg-amber/10 transition-all duration-300">
                Discuss scope
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </article>
    </>
  );
}
