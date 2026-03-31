import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animate";
import { CharacterSheet, PartyComposition } from "@/components/character-sheets";
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
                Foundstone exists because running multiple companies across
                multiple countries produces a specific kind of operational
                overhead that nobody warns you about. Finance, compliance,
                contracts, vendor relationships, payroll in three
                jurisdictions, bank due diligence that arrives on its own
                schedule. Someone has to handle it. For our group of B2B
                data and API businesses, we were that someone.
              </p>
              <p>
                We built internal systems for payment controls, management
                reporting, compliance tracking, operational automation. Then
                we noticed that every founder we talked to was solving the
                same problems from scratch — usually while trying to build
                product, usually discovering the compliance gap when a bank
                asked for documentation that did not exist.
              </p>
              <p>
                Same team, same systems. Now on retainer for companies
                that are not ours. Registered in Cyprus (HE&nbsp;483648,
                Limassol).
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ The Party ═══ */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 border-t border-white/[0.04]">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-600 mb-4">
              The party
            </p>
            <p className="text-stone-400 leading-relaxed max-w-2xl mb-16">
              Three people covering strategy, finance, and marketing
              across a group of businesses in three jurisdictions. Below
              is what each person actually does, what they have been
              through, and where the coverage gaps are.
            </p>
          </FadeIn>

          {/* Character sheets */}
          <StaggerChildren
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            stagger={0.12}
          >
            <StaggerItem>
              <CharacterSheet
                name="Andrii"
                role="Chief of Staff"
                origin="Cornell Law. Joined recently to build out the corporate structure, market entry strategy, and hiring infrastructure. Thinks about what the company looks like in three years when you are trying to raise or sell."
                stats={[
                  { name: "Corporate structure", value: 5 },
                  { name: "Legal / compliance", value: 5 },
                  { name: "Market entry", value: 4 },
                  { name: "Hiring strategy", value: 4 },
                  { name: "Fundraise prep", value: 4 },
                  { name: "Daily ops", value: 2 },
                  { name: "Marketing", value: 1 },
                ]}
                carries={["Entity structure", "Governance frameworks", "Hiring scorecards", "Market entry playbooks", "Due diligence prep"]}
                hasSeen={[
                  "Corporate restructuring ahead of a fundraise",
                  "Multi-jurisdiction entity setup from scratch",
                  "Hiring pipelines built for teams entering new markets",
                  "What investors and acquirers actually look at in the back office",
                ]}
              />
            </StaggerItem>

            <StaggerItem>
              <CharacterSheet
                name="Jana"
                role="CFO"
                origin="Multi-entity finance across Estonia, Cyprus, and Ukraine. Closes the books in five days. Knows what the bank wants before they ask because she has produced the documentation set enough times to do it from memory."
                stats={[
                  { name: "Financial reporting", value: 5 },
                  { name: "Cash management", value: 5 },
                  { name: "Bank relationships", value: 5 },
                  { name: "Multi-entity", value: 5 },
                  { name: "Compliance", value: 4 },
                  { name: "Operations", value: 2 },
                  { name: "Marketing", value: 0 },
                ]}
                carries={["Management accounts", "Cash flow models", "Transfer pricing docs", "Board deck templates", "Bank file set"]}
                hasSeen={[
                  "Enhanced due diligence across multiple jurisdictions simultaneously",
                  "Multi-currency consolidation with three fiscal calendars",
                  "Usage-based revenue recognition at the API-call level",
                  "The moment a founder looks at their bank balance and thinks it is revenue",
                ]}
              />
            </StaggerItem>

            <StaggerItem>
              <CharacterSheet
                name="Marina"
                role="CMO"
                origin="B2B positioning and channel strategy. Builds systems that compound. Measures with numbers. Has rebuilt the marketing function for companies that were running on LinkedIn posts and hope."
                stats={[
                  { name: "Positioning", value: 5 },
                  { name: "Channel strategy", value: 5 },
                  { name: "Content systems", value: 4 },
                  { name: "Attribution", value: 4 },
                  { name: "Unit economics", value: 3 },
                  { name: "Operations", value: 1 },
                  { name: "Finance", value: 1 },
                ]}
                carries={["Positioning framework", "Channel playbook", "Content calendar", "Attribution model", "Competitive landscape"]}
                hasSeen={[
                  "Company with 18-month-old website and no attribution model",
                  "Founder postponing positioning decisions for a year",
                  "The difference between content that compounds and content that evaporates",
                  "Marketing hire with no direction and no metrics",
                ]}
              />
            </StaggerItem>
          </StaggerChildren>

          {/* Party composition table */}
          <FadeIn>
            <div className="mt-12">
              <PartyComposition />
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
