import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animate";

const segments = [
  {
    label: "01",
    title: "Social Media Data APIs",
    description:
      "Enterprise-grade APIs for accessing, processing, and analyzing social media data at scale. Serving clients who need reliable, compliant data infrastructure for market intelligence, brand monitoring, and research.",
    metrics: ["Enterprise clients across EU & NA", "Billions of data points processed"],
    color: "from-amber/5 to-transparent",
  },
  {
    label: "02",
    title: "Geocoding & Distance APIs",
    description:
      "High-performance geocoding, reverse geocoding, and distance calculation APIs for applications that depend on accurate location data. Built for throughput, accuracy, and global coverage.",
    metrics: ["Sub-50ms response times", "Global address coverage"],
    color: "from-stone-800/50 to-transparent",
  },
  {
    label: "03",
    title: "B2B SaaS Infrastructure",
    description:
      "Adjacent infrastructure products serving the B2B technology ecosystem. Tools and platforms that solve specific, recurring problems for companies building data-intensive applications.",
    metrics: ["Multiple product lines", "Recurring revenue model"],
    color: "from-amber/5 to-transparent",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-amber mb-6">
              Portfolio
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-cream">
              B2B technology businesses
              <br className="hidden md:block" /> in data and infrastructure.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 text-stone-400 text-lg max-w-2xl leading-relaxed">
              The Foundstone group operates across three core segments — each
              one solving a specific infrastructure problem for companies that
              process data at scale.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Segments */}
      <section className="relative px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto">
          <StaggerChildren className="space-y-6 md:space-y-8" stagger={0.15}>
            {segments.map((segment) => (
              <StaggerItem key={segment.label}>
                <div className="relative overflow-hidden border border-white/[0.04] rounded-sm">
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${segment.color}`}
                  />

                  <div className="relative z-10 p-8 md:p-12 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                      <div className="lg:col-span-7">
                        <span className="text-amber/50 text-sm font-mono block mb-4">
                          {segment.label}
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
                          {segment.title}
                        </h2>
                        <p className="text-stone-400 leading-relaxed text-[15px] max-w-xl">
                          {segment.description}
                        </p>
                      </div>

                      <div className="lg:col-span-5 flex flex-col justify-end">
                        <div className="space-y-4 lg:pl-8 lg:border-l lg:border-white/[0.06]">
                          {segment.metrics.map((metric) => (
                            <div
                              key={metric}
                              className="flex items-center gap-3"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-amber/40" />
                              <span className="text-stone-300 text-sm">
                                {metric}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
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
              Every business in the group solves one problem exceptionally well.
              Foundstone exists so they never have to solve anything else.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
