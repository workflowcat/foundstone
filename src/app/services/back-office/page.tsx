import Link from "next/link";
import { FadeIn } from "@/components/animate";
import { BackOfficeLifecycle } from "@/components/function-diagrams";

export default function BackOfficePage() {
  return (
    <>
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <Link href="/services" className="text-xs tracking-wider text-stone-600 hover:text-stone-400 transition-colors uppercase mb-6 inline-block">&larr; Services</Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-cream">Back Office</h1>
            <p className="mt-4 text-stone-500 text-sm tracking-wider">Entity Management · Compliance · People Ops · Governance</p>
          </FadeIn>
        </div>
      </section>

      <section className="relative px-6 md:px-12 pb-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="py-6 border-t border-b border-white/[0.04]">
              <BackOfficeLifecycle className="w-full h-auto" />
            </div>
          </FadeIn>
        </div>
      </section>

      <article className="relative px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="space-y-6 text-stone-300 leading-relaxed text-[16px]">
              <p>
                Entity management, compliance documentation, people
                operations, corporate housekeeping — the functions that
                keep a multi-entity structure clean and bankable. Nobody
                starts a company because they are excited about registered
                agent coordination or document expiry tracking. But the
                company that does not do these things discovers the gap
                when a{" "}
                <Link href="/notes/what-your-bank-sees" className="text-amber/60 hover:text-amber/80 transition-colors">
                  bank asks for documentation
                </Link>{" "}
                it cannot produce, or when a regulatory review surfaces
                gaps across entities, or when an employment contract in a
                new jurisdiction turns out to contain obligations that
                nobody reviewed because nobody was assigned to review them.
              </p>

              <h2 className="font-serif text-xl text-cream mt-12 mb-4">What this covers</h2>

              <div className="space-y-6">
                <div className="pl-5 border-l border-white/[0.06]">
                  <p className="text-cream/80 text-sm font-medium mb-2">Entity management</p>
                  <p className="text-stone-400 text-[15px]">
                    Setting up companies, maintaining intercompany
                    agreements, transfer pricing documentation, registered
                    agent coordination, annual filings. The literal
                    corporate foundation — the paperwork that makes a
                    company a company and keeps it one.
                  </p>
                </div>

                <div className="pl-5 border-l border-white/[0.06]">
                  <p className="text-cream/80 text-sm font-medium mb-2">Compliance &amp; bank readiness</p>
                  <p className="text-stone-400 text-[15px]">
                    AML/EDD readiness, bank file maintenance, document
                    registers with expiry tracking,{" "}
                    <Link href="/notes/risk-management-1556" className="text-amber/60 hover:text-amber/80 transition-colors">
                      risk registers
                    </Link>. We maintain a standing document set —
                    constitutional documents, UBO chains, source of funds
                    evidence, management accounts, board minutes — that can
                    be produced within 48 hours of a bank request. The
                    72-hour drill either works or it does not.
                  </p>
                </div>

                <div className="pl-5 border-l border-white/[0.06]">
                  <p className="text-cream/80 text-sm font-medium mb-2">People operations</p>
                  <p className="text-stone-400 text-[15px]">
                    Payroll across jurisdictions, employment contracts,
                    onboarding workflows, benefits administration. If you
                    are operating across the EU and Ukraine, that is three
                    employment law regimes with different expectations about
                    how contracts, termination, and social contributions
                    work. We run all three for our own companies.
                  </p>
                </div>
              </div>

              <h2 className="font-serif text-xl text-cream mt-12 mb-4">How engagements typically work</h2>

              <p>
                Back office engagements almost always start as projects —
                build the compliance package, set up payroll in a new
                jurisdiction, produce the corporate documentation set
                that a bank needs. They then convert to a light retained
                function to maintain what was built, because compliance
                documentation expires, bank reviews recur on their own
                schedule, and passport and proof-of-address documents
                need refreshing on cycles that nobody tracks unless
                someone is assigned to track them. The governance office
                is a standing engagement by nature.
              </p>

              <h2 className="font-serif text-xl text-cream mt-12 mb-4">Typical deliverables</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Corporate documentation set",
                  "Bank compliance package",
                  "Document register with expiry tracking",
                  "Risk register",
                  "Intercompany agreements",
                  "Payroll setup (new jurisdiction)",
                  "Employment contract templates",
                  "Onboarding workflow",
                  "Annual filing calendar",
                  "Board minutes templates",
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
