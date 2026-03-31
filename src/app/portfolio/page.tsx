import Link from "next/link";
import { FadeIn } from "@/components/animate";
import { GroupStructure, DuplicationCalculator } from "@/components/portfolio-visuals";
import { DataAPIDiagram, GeocodeDiagram, ManufacturingDiagram } from "@/components/entity-diagrams";

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
            <div className="mt-8 text-stone-400 text-lg max-w-2xl leading-relaxed space-y-4">
              <p>
                Foundstone manages a group of businesses across data
                infrastructure, B2B services, consulting, and
                manufacturing, operating out of Estonia, Cyprus, and
                Ukraine. They have different margin structures, different
                client profiles, different regulatory exposure, and
                different operational rhythms — which is both the
                challenge and the reason the holding company exists.
              </p>
              <p>
                What follows is a description of each business through
                the lens of what it actually requires from us
                operationally, because that is where the complexity
                lives and where most of the interesting problems are.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Group structure map */}
      <section className="relative px-6 md:px-12 pb-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="py-8 border-t border-b border-white/[0.04]">
              <GroupStructure className="w-full h-auto" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Companies */}
      <section className="relative px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto space-y-0">

          {/* ─── Data APIs ─── */}
          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <div className="flex items-center gap-4 mb-2">
                <p className="text-amber/50 text-sm font-mono">01</p>
                <p className="text-xs tracking-wider text-stone-600">
                  Estonia &middot; Since 2018
                </p>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-6">
                Data infrastructure APIs
              </h2>
              <div className="mb-8 py-4 border-t border-b border-white/[0.04] overflow-x-auto">
                <DataAPIDiagram className="w-full min-w-[480px] h-auto" />
              </div>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p className="text-stone-300">
                  Enterprise-grade APIs serving structured data to clients
                  who build intelligence, monitoring, and research products
                  on top of it. The first business in the group and the
                  one whose operational needs generated most of the
                  infrastructure that everything else now runs on.
                </p>
                <p>
                  The product itself is stable and well-understood, which
                  means the operational challenge is everything around the
                  product — the part that determines whether clients renew
                  or leave, whether margins hold or erode, and whether the
                  team spends its time building or firefighting. Upstream
                  data source policies change without notice and the
                  adaptation window is measured in days, which means the
                  operating cadence has to support rapid coordination
                  across engineering, client success, and product without
                  anyone waiting for a meeting that has not been scheduled
                  yet, and the client communication has to go out before
                  the support tickets arrive rather than after.
                </p>
                <p>
                  The finance side is about the gap between how contracts
                  are sold and how revenue is actually consumed. Sales
                  negotiates annual agreements denominated in committed
                  capacity. Billing generates monthly invoices based on
                  actual API consumption. These produce different numbers
                  and the{" "}
                  <Link href="/notes/venetian-bookkeeping" className="text-amber/60 hover:text-amber/80 transition-colors">
                    reconciliation between cash received and revenue earned
                  </Link>{" "}
                  is where most of the finance work lives — determining
                  whether a client consuming at 60% of their contracted
                  capacity is a healthy account with headroom or a quiet
                  churn risk that nobody has flagged because the invoice
                  is still being paid.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* ─── Geocoding ─── */}
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
              <div className="mb-8 py-4 border-t border-b border-white/[0.04] overflow-x-auto">
                <GeocodeDiagram className="w-full min-w-[480px] h-auto" />
              </div>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p className="text-stone-300">
                  High-throughput geocoding, reverse geocoding, and
                  distance calculation for applications where location
                  data needs to be fast and accurate at the same time.
                  Sub-50ms response times, global address coverage,
                  fundamentally different economics from the data
                  business.
                </p>
                <p>
                  The margin on a geocoding API is thin and sensitive to
                  infrastructure decisions that most people would classify
                  as engineering rather than finance, except that in this
                  business they are finance — caching strategy determines
                  cost-per-request, CDN configuration determines latency
                  which determines client retention, and cloud provider
                  negotiation determines whether the whole thing is
                  profitable or not at the volumes the sales team is
                  closing. We learned the hard way that a product can look
                  profitable in aggregate while losing money on individual
                  high-volume accounts, because the cost-per-request was
                  not being tracked at the customer level and the
                  consolidated reporting did not surface what was happening
                  inside the average.
                </p>
                <p>
                  The vendor management here is continuous and
                  unglamorous — cloud contracts, data source licensing,
                  CDN agreements, each on a different renewal cycle, each
                  with pricing that drifts quietly if nobody is watching.
                  The kind of work that does not produce visible results
                  until you stop doing it and the margins start sliding.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* ─── B2B SaaS ─── */}
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
                  data-intensive applications. Recurring revenue, smaller
                  teams, earlier stage than the API businesses, and a
                  different kind of operational attention because the
                  product is still finding its shape while the business
                  around it needs to function.
                </p>
                <p>
                  Smaller products tend to run on the founder&apos;s
                  direct attention until the day they outgrow it, and
                  that day arrives without announcement — it just becomes
                  gradually true that things are falling through gaps that
                  did not exist three months ago because the team was
                  smaller three months ago and the gaps were covered by
                  someone who now has other things to do. The operational
                  work here is{" "}
                  <Link href="/notes/master-craftsman-constraint" className="text-amber/60 hover:text-amber/80 transition-colors">
                    process design for the transition period
                  </Link>{" "}
                  — onboarding flows, support routing, billing automation,
                  product feedback collection — installed before a
                  dedicated ops person is justified but after the team is
                  too large to run on Slack threads and institutional
                  memory.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* ─── Consulting ─── */}
          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <div className="flex items-center gap-4 mb-2">
                <p className="text-amber/50 text-sm font-mono">04</p>
                <p className="text-xs tracking-wider text-stone-600">
                  Cyprus &middot; Ukraine
                </p>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-6">
                Services &amp; consulting
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p className="text-stone-300">
                  Consulting and advisory engagements that grew out of the
                  operational expertise the group accumulated over the
                  years — initially for companies in the same ecosystem,
                  then for companies outside it who were dealing with
                  similar problems and did not have the in-house capacity
                  to solve them.
                </p>
                <p>
                  The operational challenge of a services business is
                  different from a product business in ways that are easy
                  to underestimate. Revenue is tied to people and hours
                  rather than subscriptions and usage, which means
                  capacity planning is about human bandwidth rather than
                  server bandwidth, and the constraint on growth is
                  finding and retaining people who can deliver at the
                  level the brand promises — a problem that compounds
                  quickly because every underdelivered engagement damages
                  the next three sales conversations. We handle this by
                  keeping the team small and the engagement scope tight,
                  and by saying no to work that falls outside the
                  operational functions we actually run for our own
                  companies.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* ─── Manufacturing ─── */}
          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <div className="flex items-center gap-4 mb-2">
                <p className="text-amber/50 text-sm font-mono">05</p>
                <p className="text-xs tracking-wider text-stone-600">
                  Ukraine
                </p>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-6">
                Hardware &amp; manufacturing
              </h2>
              <div className="mb-8 py-4 border-t border-b border-white/[0.04] overflow-x-auto">
                <ManufacturingDiagram className="w-full min-w-[480px] h-auto" />
              </div>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p className="text-stone-300">
                  A small-scale manufacturing operation producing
                  specialised hardware components. Different from
                  everything else in the group in almost every respect —
                  physical supply chains, inventory management, production
                  scheduling, quality control processes that have nothing
                  in common with software QA, and a regulatory environment
                  that adds layers of documentation and approval that
                  software businesses do not encounter.
                </p>
                <p>
                  The operational reality of running a manufacturing
                  business alongside software businesses is that the
                  rhythms are completely different and the shared
                  infrastructure has to accommodate both without forcing
                  one into the other&apos;s cadence. Finance for a
                  manufacturing business involves inventory accounting,
                  cost-of-goods-sold tracking, and procurement cycles that
                  are measured in weeks and months rather than
                  milliseconds. Compliance involves product certification,
                  export documentation, and regulatory approvals that have
                  their own timelines and their own bureaucracies. The
                  people involved have different backgrounds, different
                  expectations about how work is organised, and different
                  tolerances for the kind of ambiguity that software teams
                  live with daily.
                </p>
                <p>
                  We include this business in the portfolio because it
                  tests the limits of what a shared operational
                  infrastructure can handle. If the finance, compliance,
                  and governance systems we built can serve both a
                  geocoding API company and a hardware manufacturer across
                  different jurisdictions, they can probably serve yours.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* ─── The holding layer ─── */}
          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <div className="flex items-center gap-4 mb-2">
                <p className="text-amber/50 text-sm font-mono">06</p>
                <p className="text-xs tracking-wider text-stone-600">
                  Cyprus &middot; HE 483648
                </p>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-6">
                Foundstone Capital
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p className="text-stone-300">
                  The holding and management company. Limassol. The layer
                  that runs shared functions so the portfolio businesses
                  can focus on their products and clients.
                </p>
                <p>
                  Running five businesses as one undifferentiated group
                  hides which one is generating the margin and which one
                  is consuming the capital, and the consolidated numbers
                  tell a story that may have very little to do with
                  what is actually happening inside any individual
                  entity. Running them as fully independent companies
                  produces five sets of bank relationships, five payroll
                  systems, five compliance packages, five versions of
                  every vendor contract negotiated slightly differently
                  each time by someone who does not know what the other
                  four negotiated. The holding company sits between those
                  two, absorbing the shared operational overhead so the
                  businesses are neither over-consolidated nor
                  over-separated.
                </p>
                <p>
                  The shared functions: consolidated management reporting
                  across all entities and jurisdictions. Bank
                  relationships and the{" "}
                  <Link href="/notes/what-your-bank-sees" className="text-amber/60 hover:text-amber/80 transition-colors">
                    standing compliance documentation
                  </Link>{" "}
                  that keeps those relationships stable. People operations
                  across three employment law regimes. Group-level vendor
                  management. Corporate governance and entity
                  administration. Capital allocation — deciding where the
                  next dollar goes and why, based on reporting that
                  actually reflects what each business is doing rather
                  than what the aggregated numbers suggest.
                </p>
                <p>
                  These are the same functions we offer on retainer to
                  companies outside the group. We did not design them as
                  products. They accumulated as solutions to problems we
                  encountered while running our own businesses, and at
                  some point we noticed that every founder we talked to
                  was encountering the same problems and solving them
                  from scratch.
                </p>
              </div>
            </article>
          </FadeIn>

        </div>
      </section>

      {/* Duplication calculator */}
      <section className="relative py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <DuplicationCalculator />
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
