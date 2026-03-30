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
                Fractional means you get the person without the full-time
                commitment. Monthly retainer, 3&ndash;12 month engagements, no
                equity conversations. We embed into your tools, attend your
                standups, and do the actual work.
              </p>
              <p>
                This is not advisory. Advisory is when someone tells you what to
                do and then leaves. This is when someone does it.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services — long-form prose */}
      <section className="relative px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto space-y-0">
          {/* Fractional COO */}
          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <p className="text-amber/60 text-sm font-mono mb-4">01</p>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-8">
                Fractional COO
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p>
                  Your CEO is spending 40% of their time on things that
                  aren&apos;t their job. Vendor contracts. Hiring logistics.
                  Making sure payroll actually happened. Internal tooling
                  decisions that someone needs to own but nobody wants to.
                </p>
                <p>
                  That&apos;s operations. It&apos;s not glamorous work. It is,
                  however, the work that determines whether your company
                  functions or merely exists. The difference between a company
                  that closes its books in 5 days and one that takes 25 is not
                  accounting software. It&apos;s whether someone woke up and
                  decided it was their problem.
                </p>
                <p>
                  We will be that someone. We&apos;ll build your operating
                  cadence, unfuck your vendor stack, set up reporting that humans
                  actually read, and either hand it off to a full-time hire when
                  you&apos;re ready or keep running it.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* Fractional CFO */}
          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <p className="text-amber/60 text-sm font-mono mb-4">02</p>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-8">
                Fractional CFO
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p>
                  You have a bookkeeper. The bookkeeper records what happened.
                  You do not have anyone who tells you what the numbers mean,
                  whether you&apos;re going to run out of money, or why your
                  margins look like that.
                </p>
                <p>
                  A fractional CFO does the thinking layer on top of the
                  recording layer. Cash flow forecasting. Budget vs. actuals
                  that actually explain variance instead of just displaying it.
                  Board-ready financials. The conversation with your bank where
                  someone needs to sound like they know what EBITDA is because
                  they do.
                </p>
                <p>
                  We&apos;ve run finance for a group of B2B companies across
                  multiple jurisdictions &mdash; Estonia, Cyprus, Ukraine.
                  Multi-currency, multi-entity, intercompany flows. If your
                  financial situation is complicated, that&apos;s fine. Ours is
                  worse and we handle it.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* Fractional CMO */}
          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <p className="text-amber/60 text-sm font-mono mb-4">03</p>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-8">
                Fractional CMO
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p>
                  Most B2B companies between Series A and profitability have the
                  same marketing setup: a founder who writes LinkedIn posts
                  occasionally, a junior hire managing paid ads with unclear
                  attribution, and a website that was &ldquo;good enough for
                  now&rdquo; eighteen months ago.
                </p>
                <p>
                  A fractional CMO fixes the architecture. Positioning that maps
                  to how customers actually buy, not how you wish they bought.
                  Channel strategy based on your unit economics, not on what
                  worked for a company five times your size. Content that
                  compounds instead of evaporating.
                </p>
                <p>
                  We won&apos;t build you a brand book with mood boards.
                  We&apos;ll figure out where your next 50 customers are coming
                  from, build the system to reach them, and measure whether
                  it&apos;s working with numbers, not vibes.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* Fractional CTO */}
          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <p className="text-amber/60 text-sm font-mono mb-4">04</p>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-8">
                Fractional CTO
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p>
                  Not product &mdash; infrastructure. CI/CD pipelines,
                  monitoring, incident response, vendor security reviews, SOC 2
                  prep. The engineering equivalent of accounts payable: everyone
                  needs it, nobody&apos;s excited about it, and getting it wrong
                  is catastrophic.
                </p>
                <p>
                  Your engineering team wants to build features. They do not want
                  to set up PagerDuty rotation schedules, argue with your cloud
                  provider about reserved instances, or figure out why the
                  staging environment hasn&apos;t matched production since
                  November. Someone has to care about the foundation under the
                  product. That&apos;s us.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* Data Operations */}
          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <p className="text-amber/60 text-sm font-mono mb-4">05</p>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-8">
                Data Operations
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p>
                  We build data platforms for our own companies. The external
                  version: set up the data warehouse, build the dashboards,
                  connect the sources, make sure the CEO can actually answer
                  &ldquo;how are we doing?&rdquo; without asking three people.
                </p>
                <p>
                  The bedrock layer of decision-making. Most companies have
                  data &mdash; somewhere, in some format, accessible to the one
                  person who set it up and nobody else. We turn that into
                  infrastructure that outlasts any individual employee.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* People Ops */}
          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <p className="text-amber/60 text-sm font-mono mb-4">06</p>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-8">
                People Operations
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p>
                  Not recruiting &mdash; the systems around it. Payroll setup
                  across jurisdictions, employment contracts, onboarding
                  workflows, benefits administration, compliance with local labor
                  law. Especially relevant for companies expanding into new
                  countries.
                </p>
                <p>
                  The ground you hire people on. If it&apos;s not solid, every
                  hire is a risk you didn&apos;t price correctly. We&apos;ve set
                  this up across Estonia, Cyprus, and Ukraine, and we know which
                  parts look simple and aren&apos;t.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* Treasury */}
          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <p className="text-amber/60 text-sm font-mono mb-4">07</p>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-8">
                Treasury &amp; Cash Management
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p>
                  Multi-entity cash positioning, intercompany flows, FX
                  management, bank relationship management. We do this for our
                  own group across three jurisdictions. For external clients:
                  we&apos;ll make sure your money is where it needs to be, when
                  it needs to be there, and that your bank doesn&apos;t close
                  your account because you forgot to answer a KYC questionnaire.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* Procurement */}
          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <p className="text-amber/60 text-sm font-mono mb-4">08</p>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-8">
                Procurement &amp; Vendor Operations
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p>
                  Beyond the &ldquo;47 SaaS subscriptions nobody
                  audits&rdquo; problem &mdash; full vendor lifecycle. Sourcing,
                  negotiation, contract management, renewal tracking, spend
                  analysis. The supply chain underneath the org chart.
                </p>
                <p>
                  The average 50-person company is spending 15&ndash;20% more on
                  vendors than it needs to, and the person who would notice is
                  the person who doesn&apos;t exist yet. We&apos;ll be that
                  person.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* Entity Management */}
          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <p className="text-amber/60 text-sm font-mono mb-4">09</p>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-8">
                Corporate Structure &amp; Entity Management
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p>
                  Setting up entities, managing intercompany agreements, transfer
                  pricing documentation, registered agent coordination, annual
                  filings. The literal corporate foundation.
                </p>
                <p>
                  This one is almost too on-the-nose for the name, but
                  that&apos;s because the name was chosen by people who do this
                  work every day and think it matters.
                </p>
              </div>
            </article>
          </FadeIn>

          {/* Governance Office */}
          <FadeIn>
            <article className="py-16 md:py-20 border-t border-white/[0.06]">
              <p className="text-amber/60 text-sm font-mono mb-4">10</p>
              <h2 className="font-serif text-2xl md:text-3xl text-cream mb-8">
                Governance Office
              </h2>
              <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
                <p>
                  Yes, this is a thing. No, it&apos;s not as boring as it
                  sounds. Okay &mdash; it is as boring as it sounds, but
                  it&apos;s the boring thing that keeps your bank account open
                  and your board from firing you.
                </p>
                <p>
                  Compliance frameworks. Risk registers. Corporate housekeeping.
                  The documentation that nobody thinks about until a bank asks
                  for it during enhanced due diligence and you have 72 hours to
                  produce something that looks like a real company made it.
                </p>
                <p>
                  We know what banks want to see because we&apos;ve been through
                  the process ourselves, recently, multiple times, across
                  multiple jurisdictions. We will make your corporate
                  documentation look like it was produced by a company that takes
                  itself seriously, because after we&apos;re done, it will be.
                </p>
              </div>
            </article>
          </FadeIn>
        </div>
      </section>

      {/* Engagement model */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 border-t border-white/[0.04]">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-600 mb-8">
              Engagement Model
            </p>
            <p className="font-serif text-2xl md:text-3xl text-cream mb-6">
              Retainer-based. Embedded. Ongoing.
            </p>
            <p className="text-stone-400 leading-relaxed mb-10">
              Monthly retainer, 3&ndash;12 month engagements, no equity
              conversations. We don&apos;t do one-off projects. We embed into
              your operations and do the actual work until either you hire
              someone full-time or you decide you&apos;d rather we kept going.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-amber/40 text-amber text-sm tracking-wider uppercase hover:bg-amber/10 transition-all duration-300"
            >
              Discuss scope
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
