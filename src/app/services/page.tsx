import Link from "next/link";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animate";

const services = [
  {
    label: "01",
    title: "Operational Management",
    tagline: "We run the operations you'd rather not think about.",
    points: [
      "Fractional COO services for portfolio companies",
      "Process design and continuous improvement",
      "Vendor management and procurement",
      "Organizational design and hiring frameworks",
    ],
  },
  {
    label: "02",
    title: "Financial Operations",
    tagline:
      "Payment calendars, management reporting, AP/AR controls — built once, maintained permanently.",
    points: [
      "Accounts payable and receivable management",
      "Cash flow forecasting and payment scheduling",
      "Monthly management reporting packages",
      "Multi-entity consolidation and intercompany flows",
    ],
  },
  {
    label: "03",
    title: "AI & Automation Advisory",
    tagline:
      "We assess what AI can actually do for your business, then implement it. No hype.",
    points: [
      "AI readiness assessment and gap analysis",
      "Workflow automation design and deployment",
      "Tool selection and vendor evaluation",
      "Integration architecture and implementation",
    ],
  },
  {
    label: "04",
    title: "Corporate Governance",
    tagline:
      "Board reporting, risk monitoring, contract management — the infrastructure of trust.",
    points: [
      "Board-level reporting and documentation",
      "Risk identification and monitoring frameworks",
      "Contract portfolio management",
      "Regulatory compliance coordination",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-amber mb-6">
              Services
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] text-cream">
              Operational infrastructure
              <br className="hidden md:block" /> for technology businesses.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 text-stone-400 text-lg max-w-2xl leading-relaxed">
              We deliver management services on a retainer basis — embedded
              within your operations, not layered on top.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services list */}
      <section className="relative px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto">
          <StaggerChildren className="space-y-0" stagger={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.label}>
                <div className="group border-t border-white/[0.04] py-16 md:py-20">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    {/* Label */}
                    <div className="md:col-span-1">
                      <span className="text-amber/60 text-sm font-mono">
                        {service.label}
                      </span>
                    </div>

                    {/* Title and tagline */}
                    <div className="md:col-span-5">
                      <h2 className="font-serif text-2xl md:text-3xl text-cream mb-4">
                        {service.title}
                      </h2>
                      <p className="text-stone-400 leading-relaxed">
                        {service.tagline}
                      </p>
                    </div>

                    {/* Points */}
                    <div className="md:col-span-6">
                      <ul className="space-y-3">
                        {service.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-stone-300 text-[15px]"
                          >
                            <span className="w-1 h-1 rounded-full bg-amber/50 mt-2 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
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
              We don&apos;t do one-off projects. Every engagement is structured as a
              retained partnership with monthly deliverables, regular reporting,
              and continuous improvement.
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
