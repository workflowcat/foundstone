import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animate";
import { GeometricSection } from "@/components/geometric-bg";
import { PortraitAndrii, PortraitJana, PortraitMarina } from "@/components/team-portraits";

const principles = [
  {
    title: "Repeatable Systems",
    description:
      "We formalized our internal processes into repeatable infrastructure — payment controls, management reporting, compliance tracking, operational automation. Built once, maintained permanently, available to every client.",
  },
  {
    title: "Embedded, Not Layered",
    description:
      "We join your tools, attend your standups, and own the outcomes. This isn't advisory. This is someone waking up in the morning and deciding your accounts payable is their problem.",
  },
  {
    title: "Compliance-First",
    description:
      "Regulatory requirements are embedded from day one, not bolted on after the fact. We know what banks want to see because we've been through the process ourselves — recently, multiple times, across multiple jurisdictions.",
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

      {/* Origin story — light section */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-cream">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="space-y-6 text-stone-950">
              <p className="text-lg md:text-xl leading-relaxed">
                Foundstone started because someone had to handle the finance,
                compliance, contracts, vendor relationships, and operational
                overhead that accumulates when you run multiple B2B technology
                companies across multiple countries. We built the first data
                product in 2018. The management infrastructure came after,
                because it had to.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                We built internal systems for payment controls, management
                reporting, compliance tracking, operational automation. Then
                we noticed that every founder we talked to was solving the
                same problems from scratch — usually badly, usually while
                trying to build product, usually discovering the compliance
                gap when a bank asked for documentation they did not have.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-stone-700">
                Same team, same systems, same infrastructure. Now available
                on retainer to companies that are not ours. Registered in
                Cyprus (HE&nbsp;483648, Limassol). Real office, real
                employees, strong opinions about accounts payable.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Governance principles — dark with strata */}
      <section className="relative py-24 md:py-32 px-6 md:px-12">
        <GeometricSection variant="strata" />
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-600 mb-16">
              How we operate
            </p>
          </FadeIn>

          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
            stagger={0.15}
          >
            {principles.map((principle) => (
              <StaggerItem key={principle.title}>
                <div className="relative pl-6 border-l border-amber/30">
                  <h3 className="font-serif text-xl md:text-2xl text-cream mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-stone-400 leading-relaxed text-[15px]">
                    {principle.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
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
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16"
            stagger={0.12}
          >
            <StaggerItem>
              <div className="text-center">
                <PortraitAndrii className="w-44 h-56 md:w-52 md:h-64 mx-auto mb-8" />
                <p className="font-serif text-xl text-cream mb-1">Andrii</p>
                <p className="text-xs tracking-[0.2em] uppercase text-amber/50 mb-4">
                  Chief of Staff
                </p>
                <p className="text-stone-400 text-sm leading-relaxed max-w-xs mx-auto">
                  Built the group&apos;s first data product in 2018.
                  Runs operations, compliance, and automation across three
                  jurisdictions. Writes the notes.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center">
                <PortraitJana className="w-44 h-56 md:w-52 md:h-64 mx-auto mb-8" />
                <p className="font-serif text-xl text-cream mb-1">Jana</p>
                <p className="text-xs tracking-[0.2em] uppercase text-amber/50 mb-4">
                  CFO
                </p>
                <p className="text-stone-400 text-sm leading-relaxed max-w-xs mx-auto">
                  Multi-entity finance across Estonia, Cyprus, and Ukraine.
                  Cash flow forecasting, management reporting, bank
                  relationships. Closes the books in five days.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center">
                <PortraitMarina className="w-44 h-56 md:w-52 md:h-64 mx-auto mb-8" />
                <p className="font-serif text-xl text-cream mb-1">Marina</p>
                <p className="text-xs tracking-[0.2em] uppercase text-amber/50 mb-4">
                  CMO
                </p>
                <p className="text-stone-400 text-sm leading-relaxed max-w-xs mx-auto">
                  B2B positioning and channel strategy. Builds systems
                  that compound. Measures with numbers.
                </p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
