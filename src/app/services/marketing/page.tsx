import Link from "next/link";
import { FadeIn } from "@/components/animate";
import { MarketingLoop } from "@/components/function-diagrams";

export default function MarketingPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <Link href="/services" className="text-xs tracking-wider text-stone-600 hover:text-stone-400 transition-colors uppercase mb-6 inline-block">&larr; Services</Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-cream">Marketing</h1>
            <p className="mt-4 text-stone-500 text-sm tracking-wider">Fractional CMO</p>
          </FadeIn>
        </div>
      </section>

      <section className="relative px-6 md:px-12 pb-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="py-6 border-t border-b border-white/[0.04]">
              <MarketingLoop className="w-full max-w-sm mx-auto h-auto" />
            </div>
          </FadeIn>
        </div>
      </section>

      <article className="relative px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="space-y-6 text-stone-300 leading-relaxed text-[16px]">
              <p>
                Most B2B companies between seed and profitability have a
                founder writing occasional LinkedIn posts, a junior hire
                running paid ads with unclear attribution, and a website from
                eighteen months ago. Everybody knows this is insufficient.
                Nobody has time to fix it because fixing it requires
                positioning decisions the founder keeps postponing — and
                positioning decisions require saying no to some audiences in
                order to say something clear to others, which feels risky
                when you are not sure yet who your best customers are.
              </p>

              <h2 className="font-serif text-xl text-cream mt-12 mb-4">What this looks like at each level</h2>

              <div className="space-y-6">
                <div className="pl-5 border-l border-amber/20">
                  <p className="text-cream/80 text-sm font-medium mb-2">Advisory · 2&ndash;5 hrs/month</p>
                  <p className="text-stone-400 text-[15px]">
                    Biweekly sessions to work through positioning, review
                    what the junior hire is doing, and set direction. Often
                    the cheapest intervention and the highest leverage one,
                    because the problem is usually not execution capacity —
                    it is that nobody has decided what the positioning is,
                    so every piece of content and every campaign is
                    improvised from scratch.
                  </p>
                </div>

                <div className="pl-5 border-l border-amber/20">
                  <p className="text-cream/80 text-sm font-medium mb-2">Embedded · 10&ndash;15 hrs/week</p>
                  <p className="text-stone-400 text-[15px]">
                    Own the channel strategy, build the content pipeline,
                    set up attribution, manage the marketing hire, run the
                    measurement loop. The question at the centre of the
                    loop is always the same: where do the next 50 customers
                    come from, what does it cost to reach them, and is the
                    return compounding or evaporating?
                  </p>
                </div>

                <div className="pl-5 border-l border-amber/20">
                  <p className="text-cream/80 text-sm font-medium mb-2">Project · 60&ndash;90 days</p>
                  <p className="text-stone-400 text-[15px]">
                    A positioning and channel audit that produces a
                    documented strategy, an implementation plan, and the
                    first round of execution. The deliverable is a system
                    someone else can run, not a deck that sits in a shared
                    drive. Often converts to retained once the founder sees
                    the system working and does not want it to stop.
                  </p>
                </div>

                <div className="pl-5 border-l border-amber/20">
                  <p className="text-cream/80 text-sm font-medium mb-2">Build &amp; transition · 6&ndash;12 months</p>
                  <p className="text-stone-400 text-[15px]">
                    Build the marketing function: hire the team, set up the
                    tools, establish the measurement cadence, create the
                    content library. Then hire the permanent CMO and hand
                    off a function that already works.
                  </p>
                </div>
              </div>

              <h2 className="font-serif text-xl text-cream mt-12 mb-4">Typical deliverables</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Positioning document",
                  "Channel strategy",
                  "Content pipeline",
                  "Attribution model",
                  "Campaign measurement",
                  "Website redesign scope",
                  "Team hiring plan",
                  "Competitive landscape",
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
