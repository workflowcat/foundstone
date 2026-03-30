import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animate";
import { GeometricSection } from "@/components/geometric-bg";
import Link from "next/link";

const team = [
  {
    name: "Andrii",
    role: "Chief of Staff",
    initial: "A",
    lines: [
      "Operations, compliance, automation.",
      "Three jurisdictions, one operating cadence.",
      "Writes the notes.",
    ],
  },
  {
    name: "Jana",
    role: "CFO",
    initial: "J",
    lines: [
      "Multi-entity finance. Estonia, Cyprus, Ukraine.",
      "Closes the books in five days.",
      "Knows what your bank wants before they ask.",
    ],
  },
  {
    name: "Marina",
    role: "CMO",
    initial: "M",
    lines: [
      "B2B positioning and channel strategy.",
      "Builds systems that compound.",
      "Measures with numbers.",
    ],
  },
];

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

      {/* Origin story — dark, no cream section */}
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
                Over a few years we built internal systems for payment
                controls, management reporting, compliance tracking,
                operational automation. Formalized them into repeatable
                processes. Then started noticing that every founder we
                talked to was solving the same problems from scratch —
                usually while also trying to build product, usually
                discovering the compliance gap when a bank asked for
                documentation that did not exist.
              </p>
              <p>
                Same team, same systems. Now on retainer for companies
                that are not ours.
              </p>
              <p className="text-stone-500 text-sm">
                Registered in Cyprus (HE&nbsp;483648, Limassol). Real
                office. Real employees.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How we operate */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 border-t border-white/[0.04]">
        <GeometricSection variant="strata" />
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-600 mb-16">
              How we operate
            </p>
          </FadeIn>

          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
            stagger={0.15}
          >
            <StaggerItem>
              <div className="relative pl-6 border-l border-amber/30">
                <h3 className="font-serif text-xl md:text-2xl text-cream mb-4">
                  Embedded
                </h3>
                <p className="text-stone-400 leading-relaxed text-[15px]">
                  We join your Slack, your standups, your board prep. The
                  deliverable is not a report — it is the thing getting done.
                  If your AP workflow is broken, we fix the workflow. If
                  nobody is closing the books, we close the books.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="relative pl-6 border-l border-amber/30">
                <h3 className="font-serif text-xl md:text-2xl text-cream mb-4">
                  Repeatable
                </h3>
                <p className="text-stone-400 leading-relaxed text-[15px]">
                  Every process we run for our own companies is documented,
                  version-controlled, and available to every client. Payment
                  controls, management reporting templates, compliance
                  checklists, vendor evaluation frameworks. Built once,
                  maintained permanently.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="relative pl-6 border-l border-amber/30">
                <h3 className="font-serif text-xl md:text-2xl text-cream mb-4">
                  Compliance-native
                </h3>
                <p className="text-stone-400 leading-relaxed text-[15px]">
                  We have been through enhanced due diligence recently,
                  multiple times, across multiple jurisdictions. We know
                  what banks want to see because we produce it for ourselves.
                  This is not a service we added. It is how we operate.
                </p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 border-t border-white/[0.04]">
        <div className="max-w-[1200px] mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-600 mb-16">
              Team
            </p>
          </FadeIn>

          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
            stagger={0.12}
          >
            {team.map((person) => (
              <StaggerItem key={person.name}>
                <div className="relative p-8 border border-white/[0.04] bg-stone-900/30">
                  {/* Geometric initial */}
                  <div className="w-12 h-12 flex items-center justify-center border border-amber/30 mb-6">
                    <span className="font-serif text-xl text-amber/70">
                      {person.initial}
                    </span>
                  </div>

                  <p className="font-serif text-xl text-cream mb-1">
                    {person.name}
                  </p>
                  <p className="text-xs tracking-[0.2em] uppercase text-amber/40 mb-5">
                    {person.role}
                  </p>

                  <div className="space-y-2">
                    {person.lines.map((line) => (
                      <p key={line} className="text-stone-400 text-sm leading-relaxed">
                        {line}
                      </p>
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
