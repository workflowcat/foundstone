import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animate";
import { GeometricSection } from "@/components/geometric-bg";

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
                Foundstone started as the management company for a group of B2B
                data and API businesses. Someone had to handle the finance,
                compliance, contracts, vendor relationships, and general
                operational overhead that accumulates when you run multiple
                companies across multiple countries. We were that someone.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Over time, we got unreasonably good at the boring parts of
                running companies. (The boring parts, it turns out, are most of
                the parts.) We built internal systems for payment controls,
                management reporting, compliance tracking, and operational
                automation. We formalized them into repeatable processes. Then we
                started noticing that every founder we talked to was solving the
                same problems from scratch, usually badly, usually while also
                trying to build product.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-stone-700">
                So we opened the door. Same team, same systems, same operational
                infrastructure &mdash; now available on retainer to companies
                that aren&apos;t ours.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-stone-700">
                We&apos;re registered in Cyprus (HE&nbsp;483648, Limassol). We
                have a real office, real employees, and strong opinions about
                accounts payable workflows.
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

      {/* Philosophy */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-2xl md:text-3xl leading-relaxed text-cream/90">
              The stone is natural. The structure is human. Someone had to
              choose it, shape it, place it. That&apos;s what we do &mdash; the
              craft in how a foundation gets laid.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
