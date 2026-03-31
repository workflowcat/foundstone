import Link from "next/link";
import { FadeIn } from "@/components/animate";

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-amber mb-6">
              Portfolio
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-cream">
              The group
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 text-stone-400 text-lg max-w-2xl leading-relaxed">
              Four operating businesses across data, APIs, and B2B
              infrastructure. Each one has a different operational
              profile, different challenges, and a different set of
              things we handle for it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Companies */}
      <section className="relative px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto space-y-0">

          {/* ─── Data365 ─── */}
          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <div className="flex items-center gap-4 mb-2">
                <p className="text-amber/50 text-sm font-mono">01</p>
                <p className="text-xs tracking-wider text-stone-600">
                  Estonia &middot; Since 2018
                </p>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-6">
                Social media data APIs
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p className="text-stone-300">
                  Enterprise APIs for social media data. Market
                  intelligence, brand monitoring, academic research.
                  The first business in the group and the one that
                  generated the operational infrastructure everything
                  else runs on.
                </p>
                <p>
                  <strong className="text-cream/70 text-sm">Focus:</strong>{" "}
                  The product works. The operational challenge is
                  everything around it. Platform API policies change
                  without warning — a deprecation notice arrives and
                  you have days to adapt before enterprise clients
                  start experiencing failures. The function we perform
                  here is coordination under time pressure: getting
                  engineering, client success, and product aligned
                  within hours when something breaks, and making sure
                  the client communication goes out before the support
                  tickets arrive.
                </p>
                <p>
                  <strong className="text-cream/70 text-sm">What we handle:</strong>{" "}
                  Operating cadence and incident response. Revenue
                  recognition for usage-based contracts (annual sales
                  agreements vs monthly consumption billing — the
                  reconciliation is where most of the finance work
                  lives). Client health monitoring: a client consuming
                  at 60% of their contracted capacity might be healthy
                  or might be leaving, and the difference is context
                  that someone needs to surface proactively.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* ─── Distancematrix ─── */}
          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <div className="flex items-center gap-4 mb-2">
                <p className="text-amber/50 text-sm font-mono">02</p>
                <p className="text-xs tracking-wider text-stone-600">
                  Estonia
                </p>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-6">
                Geocoding &amp; distance APIs
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p className="text-stone-300">
                  Geocoding, reverse geocoding, and distance calculation
                  APIs. High throughput, sub-50ms latency, global
                  address coverage. Different economics from the data
                  business — lower margins, much higher volume.
                </p>
                <p>
                  <strong className="text-cream/70 text-sm">Focus:</strong>{" "}
                  Cost discipline. The difference between profitable and
                  unprofitable is a fraction of a cent per request
                  multiplied across billions of requests. That makes
                  infrastructure decisions into finance decisions.
                  Caching strategy, CDN configuration, cloud provider
                  negotiation — each one directly affects the margin
                  line.
                </p>
                <p>
                  <strong className="text-cream/70 text-sm">What we handle:</strong>{" "}
                  Per-request cost tracking at the customer level.
                  Vendor management on a continuous cycle — cloud
                  contracts, data source licensing, CDN agreements,
                  each on a different renewal schedule. Capacity
                  planning that connects the sales pipeline to
                  infrastructure spend so we are not buying capacity
                  three months too late or three months too early.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* ─── SaaS products ─── */}
          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <div className="flex items-center gap-4 mb-2">
                <p className="text-amber/50 text-sm font-mono">03</p>
                <p className="text-xs tracking-wider text-stone-600">
                  Estonia &middot; Cyprus
                </p>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-6">
                B2B SaaS products
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p className="text-stone-300">
                  Adjacent tools and platforms for companies building
                  data-intensive applications. Recurring revenue,
                  smaller teams, earlier stage than the API businesses.
                </p>
                <p>
                  <strong className="text-cream/70 text-sm">Focus:</strong>{" "}
                  Getting repeatable systems in place before the team
                  outgrows the founder&apos;s direct attention. These
                  products tend to run on Slack threads and memory
                  until something falls through, then they scramble.
                  The operational work is process design — onboarding
                  flows, support routing, billing automation, product
                  feedback collection — installed before the team is
                  large enough to justify a dedicated ops hire but
                  after it is too large to run without one.
                </p>
                <p>
                  <strong className="text-cream/70 text-sm">What we handle:</strong>{" "}
                  Process design and documentation. Support workflows.
                  Billing operations for recurring revenue (subscription
                  management, dunning, churn tracking). The kind of
                  operational foundation that a 6-person product team
                  needs but nobody on that team has time to build.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* ─── The holding layer ─── */}
          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <div className="flex items-center gap-4 mb-2">
                <p className="text-amber/50 text-sm font-mono">04</p>
                <p className="text-xs tracking-wider text-stone-600">
                  Cyprus &middot; HE 483648
                </p>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-6">
                Foundstone Capital
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p className="text-stone-300">
                  The holding and management company. Limassol. This
                  is the layer that runs the shared functions so the
                  portfolio companies can focus on product and clients.
                </p>
                <p>
                  <strong className="text-cream/70 text-sm">Focus:</strong>{" "}
                  Running the businesses as one undifferentiated group
                  hides which one is generating the margin. Running
                  them as fully separate entities duplicates everything
                  — bank relationships, payroll, vendor contracts, each
                  done slightly differently. The holding company exists
                  between those two: shared operational infrastructure,
                  separate product and commercial decisions.
                </p>
                <p>
                  <strong className="text-cream/70 text-sm">What we handle here:</strong>{" "}
                  Consolidated management reporting across all entities.
                  Bank relationships and ongoing compliance
                  documentation. People operations across three
                  employment law regimes. Group-level vendor management
                  and procurement. Corporate governance, entity
                  administration, intercompany agreements. Capital
                  allocation across the portfolio.
                </p>
                <p>
                  The fractional services we offer to external clients
                  are these same functions, packaged for companies that
                  need them but do not have the team to run them
                  internally. More detail in our{" "}
                  <Link href="/notes/what-your-bank-sees" className="text-amber/60 hover:text-amber/80 transition-colors">
                    note on bank compliance
                  </Link>,{" "}
                  <Link href="/notes/venetian-bookkeeping" className="text-amber/60 hover:text-amber/80 transition-colors">
                    Venetian bookkeeping
                  </Link>, and the{" "}
                  <Link href="/notes/master-craftsman-constraint" className="text-amber/60 hover:text-amber/80 transition-colors">
                    master craftsman piece
                  </Link>{" "}on scaling.
                </p>
              </div>
            </article>
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
              Discuss your situation
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
