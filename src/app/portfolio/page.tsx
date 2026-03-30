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
              What we run
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 text-stone-400 text-lg max-w-2xl leading-relaxed">
              Foundstone manages a group of B2B data and API businesses
              operating across Estonia, Cyprus, and Ukraine. Everything
              we offer to external clients we built for these companies
              first.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The group */}
      <section className="relative px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="space-y-6 text-stone-300 leading-relaxed text-[16px]">

              <p>
                The group started with a social media data API built in
                2018, serving enterprise clients who needed reliable
                access to platform data for market intelligence and
                research. That product still runs. Over time it expanded
                into geocoding and distance APIs, and then into adjacent
                B2B SaaS products that solve specific infrastructure
                problems for companies working with data at scale.
              </p>

              <p>
                The businesses have different margin structures, different
                client profiles, and different product cycles. A data API
                business lives and dies by platform policy changes that
                arrive without warning — you get a deprecation notice and
                you have days, not months, to adapt before your clients
                start calling. A geocoding business has the opposite
                problem: it looks stable from the outside, but the unit
                economics are sensitive to how aggressively you cache and
                how carefully you negotiate infrastructure costs, because
                the difference between profitable and unprofitable can be
                a fraction of a cent per request multiplied across
                billions of requests.
              </p>

              <p>
                Running them as one undifferentiated group produces bad
                capital allocation — you end up funding the wrong product
                at the wrong time because the consolidated numbers hide
                which segment is actually generating the margin. Running
                them as fully separate companies produces duplicated
                overhead: three sets of compliance documentation, three
                bank relationships, three payroll systems, three versions
                of the same vendor contracts negotiated slightly
                differently each time. The holding company structure
                exists to sit between those two failure modes — shared
                operational infrastructure, separate product decisions.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-6">
                The operational reality
              </h2>

              <p>
                Multi-entity consolidation across three jurisdictions
                with different fiscal years, different currencies, and
                different tax regimes is a problem that gets described in
                abstract terms by people who have not done it and in very
                specific terms by people who have. The intercompany
                agreements took months to get right, and they need
                revisiting every time a new product line launches or a
                pricing model changes, because transfer pricing
                documentation that was accurate six months ago may not
                reflect the current commercial reality and the tax
                authority in each jurisdiction has its own view of what
                arm&apos;s-length pricing looks like.
              </p>

              <p>
                Bank relationships for a holding company with
                subsidiaries in Estonia and operations that have
                historically touched Ukraine require a level of
                documentation that most companies at this revenue stage
                do not produce. Enhanced due diligence is a regular event
                for us, not an emergency. We maintain a standing document
                set — constitutional documents, UBO chains, source of
                funds evidence, management accounts, transfer pricing
                files, board minutes — that can be produced within 48
                hours of a bank request because we have learned what
                happens to companies that take three weeks instead.
                That experience is described in more detail in
                our{" "}
                <Link href="/notes/what-your-bank-sees" className="text-amber/60 hover:text-amber/80 transition-colors">
                  note on bank compliance
                </Link>.
              </p>

              <p>
                Payroll across Estonia, Cyprus, and Ukraine means three
                employment law regimes, three tax withholding systems,
                and three sets of expectations about how contracts,
                benefits, and termination procedures work. Estonian
                employment law is relatively straightforward. Cypriot
                employment law has specificities around social insurance
                contributions and the 13th-month salary convention that
                catch people who are used to other EU jurisdictions.
                Ukrainian employment law has been subject to wartime
                amendments that change the rules about remote work,
                reservations, and mobilisation-related obligations in
                ways that require ongoing legal monitoring. We run all
                three.
              </p>

              <p>
                Revenue recognition for usage-based API products is its
                own discipline. The sales team negotiates annual contracts.
                The billing system generates monthly invoices based on
                actual consumption. The finance team needs to reconcile
                the two, account for prepayments (deferred revenue),
                track overages, and produce management accounts that
                tell you whether a client who signed a $100K annual
                contract and is using $6K per month of capacity is a
                healthy account or a churn risk. The Venetians had a
                system for this — we describe it in
                our{" "}
                <Link href="/notes/venetian-bookkeeping" className="text-amber/60 hover:text-amber/80 transition-colors">
                  note on double-entry bookkeeping
                </Link>{" "}
                — and the modern version involves the same conceptual
                distinction between cash received and revenue earned,
                applied at the level of individual API calls.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-6">
                What this means for clients
              </h2>

              <p>
                When we say we provide fractional COO, CFO, or CMO
                services, the processes behind those services were not
                designed in a workshop or borrowed from a consulting
                playbook. They were built under pressure, for companies
                we own, in jurisdictions that add complexity at every
                step. The payment control system we use for clients is
                the one we built for ourselves. The compliance checklist
                is the one we maintain for our own bank reviews. The
                management reporting template is the one our CFO uses
                to close our own books.
              </p>

              <p>
                This is not a theoretical advantage. It means the person
                helping you set up management reporting has spent the
                last several years doing management reporting across
                multiple entities and currencies, and has already
                encountered most of the edge cases your setup will
                produce.
              </p>

            </div>
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
