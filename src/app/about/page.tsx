import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animate";
import { GeometricSection } from "@/components/geometric-bg";

const principles = [
  {
    title: "Centralized Capital Allocation",
    description:
      "All investment and reinvestment decisions flow through a single governance layer, ensuring discipline and coherence across the group.",
  },
  {
    title: "Operational Services at Group Level",
    description:
      "Finance, legal, compliance, HR, and technology infrastructure are shared services — built once, maintained permanently, available to every portfolio company.",
  },
  {
    title: "Compliance-First Structure",
    description:
      "Regulatory requirements are embedded into operations from day one, not bolted on after the fact. Every process, every tool, every decision considers the compliance context.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-amber mb-6">
              About
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-cream">
              We build the infrastructure
              <br className="hidden md:block" /> that holding companies need.
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
                We built our first data product in 2018. What started as a
                single API serving social media data to enterprise clients
                grew into a group of interconnected B2B technology businesses
                — each one solving a specific infrastructure problem for
                companies that process data at scale.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Foundstone Capital Ltd was established in Cyprus in 2025 to
                centralize governance, capital allocation, and operational
                services across the group. The goal was straightforward: let
                each portfolio company focus entirely on its product and
                customers, while Foundstone handles everything else — finance,
                compliance, legal, technology infrastructure, and
                organizational design.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-stone-700">
                Operating companies in Estonia and Cyprus cover social media
                data APIs, geocoding and distance APIs, and adjacent B2B SaaS
                products. The group serves enterprise clients across the EU
                and North America.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Governance principles — dark */}
      <section className="relative py-24 md:py-32 px-6 md:px-12">
        <GeometricSection variant="lines" />
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-600 mb-16">
              How we operate
            </p>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12" stagger={0.15}>
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

      {/* Values / philosophy */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-2xl md:text-3xl leading-relaxed text-cream/90">
              A management company should be invisible to the end customer
              and indispensable to the businesses it serves. That is the
              standard we hold ourselves to.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
