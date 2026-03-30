import Link from "next/link";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animate";

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
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-cream">
              What we run
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 text-stone-400 text-lg max-w-2xl leading-relaxed">
              Foundstone manages a group of B2B data and API businesses
              across Estonia, Cyprus, and Ukraine. Everything we offer
              as a service to external clients, we built and run for
              these companies first. Below is what the operational
              landscape looks like, without naming individual entities.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Portfolio segments — challenge-focused */}
      <section className="relative px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto space-y-0">

          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <p className="text-amber/50 text-sm font-mono mb-2">01</p>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-6">
                Data APIs &mdash; social media intelligence
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p>
                  Enterprise-grade APIs serving social media data to
                  clients who build market intelligence, brand monitoring,
                  and research products on top of it. The business has been
                  operating since 2018 and processes billions of data
                  points annually across multiple social platforms.
                </p>
                <p>
                  The operational challenges are specific to data
                  businesses at scale: platform API policies change without
                  notice and you have 72 hours to adapt before clients
                  start breaking. Compliance requirements differ across EU
                  and North American clients. Pricing is usage-based, which
                  means revenue recognition requires tracking consumption
                  at the API-call level and reconciling it against
                  contracts that were negotiated by a sales team that
                  thinks in annual terms while the billing system thinks
                  in monthly terms.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Multi-platform data ingestion", "Usage-based billing", "GDPR compliance", "Enterprise SLAs", "API versioning"].map((t) => (
                  <span key={t} className="text-xs tracking-wider text-stone-600 border border-white/[0.04] px-3 py-1">{t}</span>
                ))}
              </div>
            </article>
          </FadeIn>

          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <p className="text-amber/50 text-sm font-mono mb-2">02</p>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-6">
                Geocoding &amp; distance APIs
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p>
                  High-throughput geocoding, reverse geocoding, and
                  distance calculation for applications that depend on
                  location data being fast and accurate. Sub-50ms response
                  times at scale, global address coverage.
                </p>
                <p>
                  Different operational profile from the data business:
                  lower margins, higher volume, infrastructure costs that
                  scale linearly with usage unless you are very careful
                  about caching and CDN strategy. The finance challenge is
                  that a geocoding business looks profitable in aggregate
                  but can be losing money on individual high-volume clients
                  if you do not track cost-per-request at the customer
                  level. We learned this by not tracking it and then
                  discovering the problem in a quarterly review.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Sub-50ms latency", "Global coverage", "Per-request cost tracking", "CDN optimization", "High-volume contracts"].map((t) => (
                  <span key={t} className="text-xs tracking-wider text-stone-600 border border-white/[0.04] px-3 py-1">{t}</span>
                ))}
              </div>
            </article>
          </FadeIn>

          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <p className="text-amber/50 text-sm font-mono mb-2">03</p>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-6">
                B2B SaaS infrastructure
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p>
                  Adjacent products serving the B2B technology ecosystem —
                  tools that solve specific, recurring problems for
                  companies building data-intensive applications. Recurring
                  revenue model, smaller teams, different growth dynamics
                  than the API businesses.
                </p>
                <p>
                  The management challenge across all three segments is
                  that they share operational infrastructure (finance,
                  compliance, vendor management) but have different product
                  cycles, different client profiles, and different margin
                  structures. Running them as one undifferentiated group
                  produces bad resource allocation decisions. Running them
                  as fully independent companies produces duplicated
                  overhead and compliance gaps. The holding company exists
                  to solve this problem.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Recurring revenue", "Shared infrastructure", "Multi-entity management", "Transfer pricing", "Consolidated reporting"].map((t) => (
                  <span key={t} className="text-xs tracking-wider text-stone-600 border border-white/[0.04] px-3 py-1">{t}</span>
                ))}
              </div>
            </article>
          </FadeIn>

        </div>
      </section>

      {/* What we learned — operational specifics */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-600 mb-10">
              What running these companies taught us
            </p>
          </FadeIn>

          <FadeIn>
            <div className="space-y-6 text-stone-400 leading-relaxed text-[15px] md:text-base">
              <p>
                Multi-entity consolidation across three jurisdictions with
                different fiscal years, different currencies, and different
                tax regimes is a problem that looks straightforward from
                outside and is genuinely difficult from inside. The
                intercompany agreements alone took three months to get
                right, and they need updating every time a new product
                line launches or a pricing structure changes.
              </p>
              <p>
                Bank relationships for a holding company with post-Soviet
                jurisdictional exposure require documentation at a level
                that most companies at this stage do not produce. We
                produce it because we have been through enhanced due
                diligence multiple times and have seen what happens to
                companies that do not have it ready. The 72-hour drill
                described in our{" "}
                <Link href="/notes/what-your-bank-sees" className="text-amber/60 hover:text-amber/80 transition-colors">
                  note on bank compliance
                </Link>{" "}
                is a real event we have experienced.
              </p>
              <p>
                Payroll across Estonia, Cyprus, and Ukraine means three
                different employment law regimes, three different tax
                withholding systems, and three different sets of
                expectations about how employment contracts work. We set
                this up from scratch and we maintain it. When we offer
                People Operations as a service, we are not describing a
                theoretical capability.
              </p>
              <p>
                The fractional services we offer to external clients are
                not products we designed in a workshop. They are functions
                we perform every day for our own companies and have
                formalized into repeatable processes that work for
                others.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* External engagements — anonymized challenges */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-600 mb-10">
              Selected engagements
            </p>
            <p className="text-stone-400 leading-relaxed text-[15px] md:text-base mb-12">
              We do not name clients. Below are the operational challenges
              we were engaged to address, described at a level that
              respects confidentiality while being specific enough to be
              useful.
            </p>
          </FadeIn>

          <StaggerChildren className="space-y-0" stagger={0.1}>
            {[
              {
                challenge: "B2B SaaS company, 25 employees, Series A. CEO spending 40%+ of time on operational overhead. No COO, no documented processes, vendor contracts managed in a spreadsheet that two people maintained differently.",
                work: "Built operating cadence, consolidated vendor management, established management reporting. Engagement: 8 months. Transitioned to a full-time hire.",
                tags: ["Fractional COO", "Process design"],
              },
              {
                challenge: "Data platform company, multi-entity structure across two EU jurisdictions. Finance run by a bookkeeper with no CFO oversight. Board-ready financials did not exist. Bank requesting enhanced documentation with a two-week deadline.",
                work: "Produced consolidated management accounts, transfer pricing documentation, and compliance package within the deadline. Continued as fractional CFO for ongoing reporting and bank relationship management.",
                tags: ["Fractional CFO", "Compliance"],
              },
              {
                challenge: "B2B company approaching profitability. Marketing: founder writing occasional LinkedIn posts, one junior hire running paid ads. No attribution model, no content strategy, website unchanged for 14 months.",
                work: "Positioning audit, channel strategy based on unit economics, rebuilt content pipeline. Attribution system implemented within first 60 days.",
                tags: ["Fractional CMO", "Positioning"],
              },
              {
                challenge: "Holding company with four subsidiaries. Corporate housekeeping incomplete. Regulatory review flagged documentation gaps across multiple entities. Risk register did not exist.",
                work: "Full corporate governance package: compliance frameworks, risk registers, intercompany agreements, board documentation. Ongoing governance office function.",
                tags: ["Governance", "Entity management"],
              },
            ].map((engagement, i) => (
              <StaggerItem key={i}>
                <div className="py-10 md:py-12 border-t border-white/[0.06]">
                  <p className="text-stone-300 text-[15px] leading-relaxed mb-4">
                    {engagement.challenge}
                  </p>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4">
                    {engagement.work}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {engagement.tags.map((t) => (
                      <span key={t} className="text-xs tracking-wider text-amber/40 border border-amber/15 px-2.5 py-0.5">{t}</span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
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
