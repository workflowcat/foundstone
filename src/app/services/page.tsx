import Link from "next/link";
import { FadeIn } from "@/components/animate";
import { AdvisoryDiagram, EmbeddedDiagram, ProjectDiagram, TransitionDiagram } from "@/components/engagement-diagrams";
import { practices, engagementShapes } from "@/data/practices";

const shapeDiagrams: Record<string, React.ComponentType<{ className?: string }>> = {
  advisory: AdvisoryDiagram,
  embedded: EmbeddedDiagram,
  project: ProjectDiagram,
  "build-transition": TransitionDiagram,
};

export default function ServicesPage() {
  return (
    <>
      {/* ═══ Hero ═══ */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-amber mb-6">
              Services
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-cream">
              Nine practice areas.
              <br />
              <span className="text-amber/80">One operating team.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-10 text-stone-400 text-lg leading-relaxed">
              Everything below is something we run for our own group of
              B2B technology businesses. The list grew as our own
              companies grew — each practice was added when we hit a
              problem the existing team could not solve. Each one can be
              delivered as advisory, embedded retainer, a 60–90 day
              project, or a full build-and-transition. The shape emerges
              from the situation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Practice index ═══ */}
      <section className="relative px-6 md:px-12 pb-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-600 mb-6">
              Practice areas
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 border-t border-white/[0.06] pt-6 pb-2">
              {practices.map((p) => (
                <a
                  key={p.slug}
                  href={`#${p.slug}`}
                  className="flex items-baseline gap-3 py-1.5 text-stone-400 hover:text-amber transition-colors text-[13px]"
                >
                  <span className="font-mono text-amber/40 text-[11px]">{p.num}</span>
                  <span>{p.shortName}</span>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Practice areas — full list ═══ */}
      <section className="relative px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-0">
            {practices.map((practice) => (
              <FadeIn key={practice.slug}>
                <article
                  id={practice.slug}
                  className="py-12 md:py-14 border-t border-white/[0.06] scroll-mt-24"
                >
                  <div className="flex items-start gap-6">
                    <div className="shrink-0 w-10 md:w-12 text-right">
                      <p className="font-mono text-amber/50 text-sm">{practice.num}</p>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-xl md:text-2xl text-cream mb-2">
                        {practice.name}
                      </h3>
                      <p className="text-amber/60 text-[13px] tracking-wide mb-5">
                        {practice.tagline}
                      </p>
                      <p className="text-stone-400 leading-relaxed text-[15px] mb-6">
                        {practice.summary}
                      </p>
                      <ul className="space-y-2">
                        {practice.deliverables.map((d) => (
                          <li
                            key={d.label}
                            className="flex items-start gap-3 text-stone-500 text-[14px] leading-relaxed"
                          >
                            <span className="text-amber/30 mt-[7px] shrink-0">
                              <span className="block w-1 h-1 bg-current rounded-full" />
                            </span>
                            <span>
                              {d.label}
                              {d.coordinated && (
                                <span className="text-stone-600 ml-1.5" title="Coordinated through licensed counsel">
                                  †
                                </span>
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="text-stone-600 text-[12px] leading-relaxed mt-10 max-w-xl border-t border-white/[0.04] pt-6">
              <span className="text-stone-500">†</span> Items marked
              coordinated are managed end-to-end by Foundstone but the
              final document is drafted or signed by licensed Cyprus
              counsel. You get one point of contact and one invoice;
              the regulated work happens at the right professional under
              the right license.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Engagement shapes ═══ */}
      <section className="relative px-6 md:px-12 pb-16 md:pb-24 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-amber/60 mt-16 mb-4">
              How engagements work
            </p>
            <p className="text-stone-400 leading-relaxed mb-12 max-w-2xl text-[15px]">
              Any practice can be delivered in any of the four shapes
              below. Most clients start with one practice in one shape
              and expand as the fit becomes obvious. The shape is the
              delivery mode — the practice is what gets delivered.
            </p>
          </FadeIn>

          <div className="space-y-0">
            {engagementShapes.map((shape) => {
              const Diagram = shapeDiagrams[shape.slug];
              return (
                <FadeIn key={shape.slug}>
                  <article className="py-12 md:py-14 border-t border-white/[0.06]">
                    <div className="flex items-start gap-6">
                      <div className="shrink-0 w-16 text-right">
                        <p className="text-stone-600 text-xs tracking-wider">
                          {shape.cadence}
                        </p>
                        <p className="text-stone-700 text-xs">{shape.cadenceNote}</p>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-xl text-cream mb-4">
                          {shape.name}
                        </h3>
                        {Diagram && (
                          <div className="mb-5 py-3 overflow-x-auto">
                            <Diagram className="w-full min-w-[360px] h-auto" />
                          </div>
                        )}
                        <p className="text-stone-400 leading-relaxed text-[15px]">
                          {shape.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ How pricing works ═══ */}
      <section className="relative px-6 md:px-12 pb-16 md:pb-24 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-600 mt-16 mb-4">
              How pricing works
            </p>
            <p className="text-stone-400 leading-relaxed mb-10 max-w-2xl text-[15px]">
              Pricing follows the shape of the engagement, not a rate
              card. Each shape has a pricing structure that matches how
              value actually gets delivered.
            </p>
          </FadeIn>

          <div className="space-y-0">
            {[
              {
                shape: "Advisory",
                model: "Fixed monthly retainer",
                note: "Priced by seniority and number of standing calls per month. No per-minute billing, no time sheets, no nickel-and-diming async questions.",
              },
              {
                shape: "Embedded",
                model: "Day-rate × days per week",
                note: "Invoiced monthly in arrears. Rate reflects the seniority of the person and the practice area. Minimum three-month commitment because the first month is always diagnostic.",
              },
              {
                shape: "Project",
                model: "Fixed fee against a one-page scope",
                note: "Priced at contract signing. Scope changes get a written amendment and a price adjustment. We do not do uncapped time-and-materials on operational work — it is how scope creep eats both sides.",
              },
              {
                shape: "Build & transition",
                model: "Blended monthly rate that steps down as handover progresses",
                note: "High while we are running the function, lower once the permanent hire is in, zero at exit. The math is spelled out in the engagement letter so nobody is guessing what month three looks like.",
              },
            ].map((p) => (
              <FadeIn key={p.shape}>
                <div className="border-t border-white/[0.06] py-8 grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-3">
                    <h4 className="font-serif text-lg text-cream">{p.shape}</h4>
                  </div>
                  <div className="md:col-span-9">
                    <p className="text-amber/70 text-sm mb-2">{p.model}</p>
                    <p className="text-stone-500 text-[14px] leading-relaxed">{p.note}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="text-stone-500 text-[13px] leading-relaxed mt-10 max-w-2xl italic">
              Exact numbers come after a diagnostic call — we need to
              see the situation before quoting. If the fit is not
              obvious we will say so on that call, not three weeks in.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Not a fit if ═══ */}
      <section className="relative px-6 md:px-12 pb-16 md:pb-24 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-600 mt-16 mb-4">
              Not a fit if
            </p>
            <p className="text-stone-400 leading-relaxed mb-10 max-w-2xl text-[15px]">
              Operational work on retainer has a narrow band of
              situations where it actually makes sense. We would rather
              save both sides the cycles than start an engagement that
              was not going to work.
            </p>
          </FadeIn>

          <div className="space-y-5">
            {[
              {
                title: "Pre-revenue seed stage",
                body: "If you do not yet have paying customers and the question is still whether the product works, you do not need an operational function — you need to ship. Come back when the operational surface area exists.",
              },
              {
                title: "Looking for a contractor on individual tasks",
                body: "We are not a staffing agency. If the ask is \"write me a financial model\" or \"set up a CRM\", you want a specialist on a project basis, not a management company. A project engagement with us only makes sense when the deliverable touches multiple functions at once.",
              },
              {
                title: "Outside B2B technology",
                body: "Our operating playbooks were built for software, data, and infrastructure businesses. Consumer, retail, services-only, and physical-goods businesses work differently and we are not the right team for them.",
              },
              {
                title: "Looking for regulated services we cannot legally provide",
                body: "We are not licensed advocates, auditors, investment advisors, or administrative service providers. We coordinate with the right professionals where that work is needed, but if you are looking to retain a law firm, an audit firm, or a CySEC-licensed advisor directly, you want those firms — not us.",
              },
              {
                title: "Looking for someone to outsource decisions to",
                body: "We run the function. You run the company. Engagements that try to flip that arrangement — where the CEO wants us to decide what the strategy is — do not work for either side.",
              },
            ].map((item) => (
              <FadeIn key={item.title}>
                <div className="border-l-2 border-amber/20 pl-5 py-1">
                  <p className="text-cream text-[15px] mb-1">{item.title}</p>
                  <p className="text-stone-500 text-[14px] leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 border-t border-white/[0.04]">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="font-serif text-3xl md:text-4xl text-cream mb-6">
              Tell us about your situation.
            </p>
            <p className="text-stone-400 leading-relaxed mb-10 max-w-xl mx-auto">
              We will tell you which practice areas fit, what shape the
              engagement should take, and whether we are the right team
              at all. No pitch deck.
            </p>
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
