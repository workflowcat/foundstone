import Link from "next/link";
import { FadeIn } from "@/components/animate";
import { AdvisoryDiagram, EmbeddedDiagram, ProjectDiagram, TransitionDiagram } from "@/components/engagement-diagrams";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-amber mb-6">
              Services
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-cream">
              What fractional means in practice
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-10 text-stone-400 text-lg leading-relaxed">
              We provide operational capability that takes different
              shapes depending on what you need and where you are.
              Sometimes that looks like someone attending your standups
              and running your vendor reviews. Sometimes it looks like
              a biweekly call where you talk through decisions before
              you make them. Sometimes it is a 90-day project with a
              specific deliverable. The shape emerges from the
              situation. Below is how the different shapes work.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ How engagements work ═══ */}
      <section className="relative px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-600 mb-10">
              Engagement shapes
            </p>
          </FadeIn>

          <div className="space-y-0">
            <FadeIn>
              <article className="py-12 md:py-14 border-t border-white/[0.06]">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-16 text-right">
                    <p className="text-stone-600 text-xs tracking-wider">2&ndash;5 hrs</p>
                    <p className="text-stone-700 text-xs">per month</p>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-cream mb-4">Advisory</h3>
                    <div className="mb-5 py-3 overflow-x-auto">
                      <AdvisoryDiagram className="w-full min-w-[360px] h-auto" />
                    </div>
                    <p className="text-stone-400 leading-relaxed text-[15px]">
                      A standing call, biweekly or monthly, where you talk
                      through operational decisions with someone who has seen
                      the same situation at other companies. Between calls,
                      async access for questions that cannot wait. The
                      Venetians had a word for the investor who stayed home
                      while the merchant sailed: the <em>stans</em>. The
                      stans provided capital and judgment. The merchant
                      provided execution. An advisory engagement is closer to
                      this than to a traditional consulting retainer — the
                      value is in sharpening your decisions, not in replacing
                      your capacity.
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>

            <FadeIn>
              <article className="py-12 md:py-14 border-t border-white/[0.06]">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-16 text-right">
                    <p className="text-stone-600 text-xs tracking-wider">10&ndash;15 hrs</p>
                    <p className="text-stone-700 text-xs">per week</p>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-cream mb-4">Embedded</h3>
                    <div className="mb-5 py-3 overflow-x-auto">
                      <EmbeddedDiagram className="w-full min-w-[360px] h-auto" />
                    </div>
                    <p className="text-stone-400 leading-relaxed text-[15px]">
                      Two to three days a week inside your operations. We
                      join your Slack, attend your standups, own the weekly
                      leadership meeting, and have either direct reports or
                      the authority to direct work without going through the
                      founder for every decision. Military organisations
                      call this the attach&eacute; model — an experienced
                      officer embedded in another army, advising and
                      training and influencing, but with the host
                      maintaining command. You set the objectives. We figure
                      out how to execute them and we do the work. This is
                      the most common engagement shape and where most of
                      our clients start.
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>

            <FadeIn>
              <article className="py-12 md:py-14 border-t border-white/[0.06]">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-16 text-right">
                    <p className="text-stone-600 text-xs tracking-wider">60&ndash;90</p>
                    <p className="text-stone-700 text-xs">day scope</p>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-cream mb-4">Project</h3>
                    <div className="mb-5 py-3 overflow-x-auto">
                      <ProjectDiagram className="w-full min-w-[360px] h-auto" />
                    </div>
                    <p className="text-stone-400 leading-relaxed text-[15px]">
                      A defined deliverable with a written scope, a
                      timeline, and a clear endpoint. Examples: produce
                      board-ready financial model and KPI dashboard within
                      60 days. Build SOC 2 readiness package over 6 months.
                      Design and implement the operating cadence for a
                      post-acquisition integration. Restructure the vendor
                      portfolio and renegotiate the top 10 contracts. Each
                      project has a one-page scope document that specifies
                      what is included and what is not, because scope creep
                      in operational work is quiet and expensive. The
                      Venetian{" "}
                      <Link href="/notes/venetian-bookkeeping" className="text-amber/60 hover:text-amber/80 transition-colors">
                        colleganza
                      </Link>{" "}
                      worked the same way — single voyage, defined
                      profit-sharing, accounts settled on return. Our
                      project engagements often convert to a lighter
                      retained relationship once the deliverable is
                      complete and someone needs to maintain it.
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>

            <FadeIn>
              <article className="py-12 md:py-14 border-t border-white/[0.06]">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-16 text-right">
                    <p className="text-stone-600 text-xs tracking-wider">6&ndash;12</p>
                    <p className="text-stone-700 text-xs">months</p>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-cream mb-4">Build &amp; transition</h3>
                    <div className="mb-5 py-3 overflow-x-auto">
                      <TransitionDiagram className="w-full min-w-[360px] h-auto" />
                    </div>
                    <p className="text-stone-400 leading-relaxed text-[15px]">
                      The full arc: build the function from scratch, hire
                      the team underneath it, run it until the right
                      permanent person is found, then write the job
                      description, participate in the interviews, onboard
                      the new hire, mentor them for the first two months,
                      and step back to advisory or exit. Guild systems in
                      medieval Europe worked on a similar principle — the
                      journeyman brought expertise from other workshops,
                      built the capability, and moved on when the local
                      team could sustain it. The engagement gets lighter
                      over time by design, not because we are losing
                      interest but because the point was always to make
                      the function work without us.
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ The four functions — compact grid linking to subpages ═══ */}
      <section className="relative px-6 md:px-12 pb-16 md:pb-24 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-600 mt-16 mb-4">
              What we do
            </p>
            <p className="text-stone-400 leading-relaxed mb-12 max-w-2xl">
              Four functional areas. Each one can be delivered in any
              of the engagement shapes above. Click through for
              detailed descriptions, diagrams, deliverable examples,
              and how the engagement scales from advisory to full
              build-and-transition.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.03]">
            {[
              {
                num: "01",
                title: "Operations",
                role: "Fractional COO",
                desc: "Operating cadence, vendor management, hiring pipeline, process design. The 40% of the CEO\u2019s time that isn\u2019t their job.",
                href: "/services/operations",
              },
              {
                num: "02",
                title: "Finance & Treasury",
                role: "Fractional CFO",
                desc: "Cash flow forecasting, board-ready financials, multi-entity consolidation, bank relationships. The interpretation layer.",
                href: "/services/finance",
              },
              {
                num: "03",
                title: "Marketing",
                role: "Fractional CMO",
                desc: "Positioning, channel strategy, content systems, attribution. Where the next 50 customers come from.",
                href: "/services/marketing",
              },
              {
                num: "04",
                title: "Back Office",
                role: "Entity · Compliance · People Ops",
                desc: "Entity management, AML/EDD readiness, bank file maintenance, payroll across jurisdictions, corporate housekeeping.",
                href: "/services/back-office",
              },
            ].map((fn) => (
              <FadeIn key={fn.num}>
                <Link href={fn.href} className="group block bg-stone-950 p-8 md:p-10 h-full transition-colors hover:bg-stone-900/50">
                  <p className="text-amber/50 text-sm font-mono mb-1">{fn.num}</p>
                  <h3 className="font-serif text-xl md:text-2xl text-cream group-hover:text-amber/90 transition-colors mb-1">
                    {fn.title}
                  </h3>
                  <p className="text-xs tracking-wider text-stone-600 mb-4">{fn.role}</p>
                  <p className="text-stone-400 text-[15px] leading-relaxed mb-6">{fn.desc}</p>
                  <span className="inline-flex items-center gap-2 text-xs tracking-wider text-stone-600 group-hover:text-stone-400 uppercase transition-colors">
                    Details
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ What most engagements look like ═══ */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-600 mb-10">
              In practice
            </p>
            <div className="space-y-5 text-stone-400 leading-relaxed text-[15px] md:text-base">
              <p>
                Most engagements start with one function, usually
                operations or finance, because that is where the pain
                is most visible. The first month is diagnostic — we look
                at what exists, what is broken, and what is missing. The
                second month is building: setting up the cadence, the
                reporting, the processes. The third month is running it,
                which is when the engagement finds its steady state and
                you can see whether it is working.
              </p>
              <p>
                About half expand into a second function within six
                months, usually because fixing one area exposes problems
                in an adjacent one — you cannot do management reporting
                properly if nobody is running the operating cadence that
                generates the data, and you cannot run the operating
                cadence if nobody is tracking the hiring pipeline.
              </p>
              <p>
                Some engagements stay advisory-only and that is fine.
                A biweekly call with someone who has seen the same
                problems at other companies is sometimes the
                highest-leverage use of the budget. The shape that
                works is the shape that works.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-16 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 border border-amber/40 text-amber text-sm tracking-wider uppercase hover:bg-amber/10 transition-all duration-300"
              >
                Discuss your situation
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
