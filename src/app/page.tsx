import Link from "next/link";
import { FadeIn, StaggerChildren, StaggerItem, CountUp } from "@/components/animate";
import { GeometricHero, StrataDivider } from "@/components/geometric-bg";

const cards = [
  {
    href: "/portfolio",
    label: "Portfolio",
    description:
      "Four operating businesses across social data, geocoding, and SaaS infrastructure.",
  },
  {
    href: "/services",
    label: "Services",
    description:
      "Fractional COO, CFO, and CMO on retainer. We run the functions you can't afford to staff full-time.",
  },
  {
    href: "/notes",
    label: "Notes",
    description:
      "Things we've learned from running companies, managing money across borders, and automating the boring parts.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — full viewport, dark */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12">
        <GeometricHero />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight text-cream italic">
              &ldquo;Every company between 15 and 150 people has the same problem.&rdquo;
            </h1>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-10 max-w-2xl mx-auto space-y-5 text-stone-400 text-lg leading-relaxed text-left sm:text-center">
              <p>
                You need a COO, a CFO, and probably someone running marketing
                who actually understands unit economics. You can&apos;t afford
                three senior hires. You definitely can&apos;t afford three bad
                senior hires, which is what happens when you rush it.
              </p>
              <p>
                We provide fractional operations, finance, and marketing
                leadership on retainer. We&apos;ve been running these functions
                for our own group of B2B technology companies since 2018. At
                some point we noticed everyone else needed the same thing, so
                here we are.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-3 px-8 py-4 border border-amber/40 text-amber text-sm tracking-wider uppercase hover:bg-amber/10 transition-all duration-300"
              >
                How it works
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <FadeIn delay={1.4} className="absolute bottom-12">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone-600">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-stone-600 to-transparent" />
          </div>
        </FadeIn>
      </section>

      {/* Cards section */}
      <section className="relative py-32 md:py-40 px-6 md:px-12 bg-stone-900">
        <div className="max-w-[1400px] mx-auto">
          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            stagger={0.15}
          >
            {cards.map((card) => (
              <StaggerItem key={card.href}>
                <Link href={card.href} className="group block">
                  <div className="relative p-8 md:p-10 border border-white/[0.04] rounded-sm bg-stone-950/50 transition-all duration-500 hover:border-amber/30">
                    {/* Amber top line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-amber/40 transition-all duration-500 group-hover:h-[2px] group-hover:bg-amber/70" />

                    <p className="text-xs tracking-[0.25em] uppercase text-amber mb-6">
                      {card.label}
                    </p>
                    <p className="text-stone-300 leading-relaxed text-[15px]">
                      {card.description}
                    </p>

                    <div className="mt-8 flex items-center gap-2 text-stone-600 group-hover:text-stone-400 transition-colors">
                      <span className="text-xs tracking-wider uppercase">
                        Explore
                      </span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Strata divider */}
      <StrataDivider />

      {/* Statement section — with geological photo backdrop */}
      <section className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden">
        {/* Dark stone texture background */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=1920&q=80&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-transparent to-stone-950/80" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl leading-relaxed text-cream/90">
              The boring parts, it turns out, are most of the parts. We got
              unreasonably good at them so you don&apos;t have to.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats section */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 border-t border-b border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto">
          <StaggerChildren
            className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8"
            stagger={0.1}
          >
            {[
              { value: 4, label: "Operating\nBusinesses" },
              { value: 2018, label: "Building\nSince", noCount: true },
              { value: 3, label: "Jurisdictions", suffix: "" },
              { value: 100, label: "Enterprise\nClients", suffix: "+" },
            ].map((stat) => (
              <StaggerItem
                key={stat.label}
                className="text-center md:text-left"
              >
                <p className="font-serif text-4xl md:text-5xl text-cream mb-3">
                  {stat.noCount ? (
                    stat.value
                  ) : (
                    <CountUp
                      target={stat.value}
                      suffix={stat.suffix || ""}
                      duration={1.5}
                    />
                  )}
                </p>
                <p className="text-xs tracking-widest uppercase text-stone-500 whitespace-pre-line">
                  {stat.label}
                </p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative py-32 md:py-40 px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-600 mb-8">
              Get in touch
            </p>
            <p className="font-serif text-3xl md:text-4xl text-cream mb-10">
              Interested in working with us?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-amber/40 text-amber text-sm tracking-wider uppercase hover:bg-amber/10 transition-all duration-300"
            >
              Contact Foundstone
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
