import Link from "next/link";
import { FadeIn } from "@/components/animate";
import { OperationsCadence } from "@/components/function-diagrams";

export default function OperationsPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <Link href="/services" className="text-xs tracking-wider text-stone-600 hover:text-stone-400 transition-colors uppercase mb-6 inline-block">
              &larr; Services
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-cream">
              Operations
            </h1>
            <p className="mt-4 text-stone-500 text-sm tracking-wider">Fractional COO</p>
          </FadeIn>
        </div>
      </section>

      <section className="relative px-6 md:px-12 pb-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="py-6 border-t border-b border-white/[0.04]">
              <OperationsCadence className="w-full h-auto" />
            </div>
          </FadeIn>
        </div>
      </section>

      <article className="relative px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="space-y-6 text-stone-300 leading-relaxed text-[16px]">
              <p>
                The CEO is spending 40% of their time on vendor contracts,
                hiring logistics, payroll, and tooling decisions that someone
                needs to own, and they know that hiring a full-time COO is a
                $200K+ commitment they cannot evaluate because they have
                never had one. The company stays stuck between these two
                facts until someone from outside names the problem and starts
                solving it.
              </p>

              <h2 className="font-serif text-xl text-cream mt-12 mb-4">What this looks like at each level</h2>

              <div className="space-y-6">
                <div className="pl-5 border-l border-amber/20">
                  <p className="text-cream/80 text-sm font-medium mb-2">Advisory · 2&ndash;5 hrs/month</p>
                  <p className="text-stone-400 text-[15px]">
                    Biweekly call to review operational dashboards,
                    identify where bottlenecks are forming, and help you
                    decide which ones to address first. Between calls,
                    async access for the question that cannot wait until
                    Thursday. Good for founders who know what they need to
                    do but want someone experienced to pressure-test their
                    thinking before they do it.
                  </p>
                </div>

                <div className="pl-5 border-l border-amber/20">
                  <p className="text-cream/80 text-sm font-medium mb-2">Embedded · 10&ndash;15 hrs/week</p>
                  <p className="text-stone-400 text-[15px]">
                    We run the operating cadence: the weekly leadership
                    meeting, vendor review cycle, hiring pipeline, incident
                    triage, reporting rhythm. We are in Slack, at the
                    standup, and the person people escalate to when
                    cross-functional work stalls. This is where most
                    operations engagements land because this is where the{" "}
                    <Link href="/notes/master-craftsman-constraint" className="text-amber/60 hover:text-amber/80 transition-colors">
                      founder bottleneck
                    </Link>{" "}
                    is most acute.
                  </p>
                </div>

                <div className="pl-5 border-l border-amber/20">
                  <p className="text-cream/80 text-sm font-medium mb-2">Project · 60&ndash;90 days</p>
                  <p className="text-stone-400 text-[15px]">
                    Build the operating infrastructure from scratch: cadence
                    design, reporting templates, vendor portfolio audit,
                    hiring scorecard, process documentation. Deliver the
                    system, train someone to run it, hand off. Common
                    post-fundraise engagement when the company has capital
                    to invest in infrastructure but no ops person yet.
                  </p>
                </div>

                <div className="pl-5 border-l border-amber/20">
                  <p className="text-cream/80 text-sm font-medium mb-2">Build &amp; transition · 6&ndash;12 months</p>
                  <p className="text-stone-400 text-[15px]">
                    Full arc: build the function, hire the ops team, write
                    the job description for the permanent COO, participate
                    in the interview process, onboard and mentor the new
                    hire, step back to advisory. The engagement gets lighter
                    over time because the point is to make the function
                    work without us.
                  </p>
                </div>
              </div>

              <h2 className="font-serif text-xl text-cream mt-12 mb-4">Typical deliverables</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Weekly leadership meeting cadence",
                  "Vendor portfolio audit and renegotiation",
                  "Hiring pipeline and scorecard",
                  "Operating dashboard",
                  "Process documentation",
                  "Escalation framework",
                  "Quarterly planning rhythm",
                  "Incident response playbook",
                ].map((d) => (
                  <span key={d} className="text-xs tracking-wider text-stone-600 border border-white/[0.04] px-3 py-1">{d}</span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-16 text-center">
              <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 border border-amber/40 text-amber text-sm tracking-wider uppercase hover:bg-amber/10 transition-all duration-300">
                Discuss scope
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </article>
    </>
  );
}
