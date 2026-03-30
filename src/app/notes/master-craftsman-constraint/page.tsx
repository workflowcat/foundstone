import { FadeIn } from "@/components/animate";
import { NoteFigure } from "@/components/note-figure";
import Link from "next/link";

export default function MasterCraftsmanNote() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <time className="text-xs tracking-wider text-stone-600">March 2026</time>
              <span className="text-stone-800">&middot;</span>
              <span className="text-xs tracking-wider text-stone-600">15 min read</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-cream">
              When the master craftsman becomes the constraint
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-stone-400 text-lg leading-relaxed">
              A company doubles in size. Everything that worked breaks.
              The person who was best at every function is now the
              bottleneck at every function. They know this.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Body */}
      <article className="relative px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="space-y-6 text-stone-300 leading-relaxed text-[16px]">

              {/* ─── Segment 1: The feeling ─── */}

              <p>
                At 15 people, the founder can hold the whole company in
                their head. Every customer relationship, every vendor
                contract, every hire, every product decision. This works.
                Robin Dunbar&apos;s research on group sizes suggests 15 is
                near the upper limit of a social group where everyone can
                maintain strong bonds with everyone
                else.<sup className="text-stone-500 text-xs">1</sup> At
                that size, a company runs on the founder&apos;s direct
                knowledge. Formal processes feel like overhead because
                they are.
              </p>

              <p>
                Then the company grows to 30. Or it tries to. Phil Libin,
                who ran Evernote and later learned this from Hiroshi
                Mikitani at Rakuten, observed that everything about how a
                company operates breaks at roughly every multiple of
                three: 3, 10, 30, 100,
                300.<sup className="text-stone-500 text-xs">2</sup> At
                each threshold the communication lines multiply faster
                than the headcount. The founder who could track everything
                at 15 is fielding questions they cannot answer at 30
                because they no longer have first-hand knowledge of what
                happened.
              </p>

              <p>
                The founder is simultaneously the most capable person in
                the company and the biggest constraint on its growth.
                Delegating means accepting worse outcomes in the short
                term. The company cannot grow past what one person can
                process. Both of these are real. The company stays stuck
                between them, sometimes for years.
              </p>

              {/* ─── Segment 2: The Arsenal ─── */}

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The Arsenal
              </h2>

              <p>
                The Arsenale di Venezia was established around 1104 and
                by the 1320 expansion had become the largest industrial
                complex in Europe — roughly 45 hectares, about 15% of
                Venice&apos;s total
                area.<sup className="text-stone-500 text-xs">3</sup> At
                peacetime it employed 1,500 to 2,000 arsenalotti. At
                wartime surge, up to 5,000.
              </p>

              <p>
                Before the expansion, ships were built by master
                craftsmen — marangoni — who constructed an entire vessel.
                A marangone knew every joint, every plank, every fitting.
                The work was slow, dependent on individual skill, and
                could not scale. After 1320, the Venetian state mandated
                that all galleys be built at the Arsenal and reorganized
                production around a canal-based sequential system.
              </p>

              <NoteFigure
                src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Venetian_Arsenal_by_Canaletto%2C_1732.jpg"
                alt="The Venetian Arsenal by Canaletto, 1732"
                caption="The entrance to the Arsenale di Venezia, Canaletto (1732). 45 hectares, 15% of Venice. The largest industrial complex in pre-industrial Europe."
                aspect="landscape"
              />

              <p>
                The process had roughly ten stages: hull framing,
                planking, caulking, decking, mast fitting, rigging, oar
                fitting, arming, and provisioning. Galleys were towed
                along an internal canal past outfitting stations — the
                work came to the ship instead of the ship coming to the
                work. Components were prefabricated to standard
                specifications and stored in warehouses. When Henry III
                of France visited in July 1574, the Arsenal demonstrated
                the system by assembling, arming, and provisioning a
                complete galley during a state banquet — reportedly in
                under an
                hour.<sup className="text-stone-500 text-xs">4</sup>
              </p>

              <p>
                The transition required the marangone to stop building
                ships and start supervising people who built parts of
                ships. Each guild specialized: calafati (caulkers), remeri
                (oar makers), alboranti (mast workers), each with their
                own protomaestri (foremen). Quality inspectors checked
                work daily. Caulkers were held accountable for split seams.
                Rope spinners for weak lines.
              </p>

              <p>
                Some marangoni made the transition. Some did not. The
                ones who could not were not bad craftsmen. They were
                specialists in an organizational form that no longer
                applied. The Arsenal needed supervisors, not artisans.
                The skills were different. Robert C. Davis, in his study
                of Arsenal workers from 1620 to 1670, documents a
                workforce that was simultaneously highly skilled and
                deeply specialized — each person excellent at their
                stage, none of them capable of building a whole
                ship.<sup className="text-stone-500 text-xs">5</sup>
              </p>

              {/* ─── Segment 3: The bandwidth problem ─── */}

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The bandwidth problem
              </h2>

              <p>
                On October 14, 1806, at the twin battles of Jena and
                Auerstedt, Napoleon&apos;s army destroyed Prussia.
                At Auerstedt, Marshal Davout&apos;s corps of 26,000
                defeated the main Prussian army of 60,500 — outnumbered
                more than two to one. The Prussians lost 10,000 dead and
                wounded, 3,000 captured, 115 cannons. Three weeks later,
                Napoleon entered Berlin through the Brandenburg
                Gate.<sup className="text-stone-500 text-xs">6</sup>
              </p>

              <p>
                Prussian soldiers and generals were competent. Prussian
                command doctrine had not changed in fifty years. Decisions flowed upward
                to the commanding general and orders flowed back down.
                The commanding general was a single point of processing.
                When the situation moved faster than one brain could
                assess, the system failed.
              </p>

              <p>
                Gerhard von Scharnhorst, a commoner from Hanover whose
                uncles sold fish, was appointed to chair the Military
                Reorganization Commission in July
                1807.<sup className="text-stone-500 text-xs">7</sup> He
                re-founded the Kriegsakademie on October 15, 1810 with
                an inaugural class of 20 captains. The curriculum
                allocated 7 hours per week to military history — the most
                of any subject — because Scharnhorst believed officers
                needed to think analytically, not follow orders
                mechanically.
              </p>

              <p>
                The system he built extended the commander&apos;s
                cognitive bandwidth. Staff officers trained in a common
                analytical framework were assigned to field commanders.
                They could develop plans, assess situations, and act
                on the commander&apos;s intent without waiting for
                instructions. Later formalized as Auftragstaktik —
                mission-type tactics: specify the objective and the
                reason, leave the method to the person on the
                ground.<sup className="text-stone-500 text-xs">8</sup>
              </p>

              <p>
                Scharnhorst died of an infected wound in June 1813,
                before his system was fully tested. His student
                Clausewitz, his collaborator Gneisenau, and the officers
                they trained won the Wars of Liberation without him.
                The system worked because it did not depend on any single
                person.
              </p>

              <NoteFigure
                src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Iena.jpg"
                alt="Battle of Jena, 1806"
                caption="The Battle of Jena, October 14, 1806. Davout's 26,000 defeated 60,500 Prussians at Auerstedt the same day. The command structure was the bottleneck."
                aspect="landscape"
              />

              {/* ─── Segment 4: Complicated vs. Complex ─── */}

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                When the domain shifts
              </h2>

              <p>
                Dave Snowden&apos;s Cynefin framework, developed at IBM
                in the late 1990s and published in the Harvard Business
                Review in 2007, draws a line between two kinds of
                problems that most people
                conflate.<sup className="text-stone-500 text-xs">9</sup>
              </p>

              <p>
                <strong className="text-cream/80">Complicated</strong> problems
                have cause-and-effect relationships that can be
                discovered through analysis. You can hire an expert, do
                enough research, and find the answer. Building a bridge.
                Configuring a database. Closing the books. There may be
                multiple right answers, but they are discoverable. The
                approach: sense, analyze, respond.
              </p>

              <p>
                <strong className="text-cream/80">Complex</strong> problems
                have cause-and-effect relationships that are only visible
                in retrospect. You cannot analyze your way to the answer
                because the answer emerges from the interaction of too
                many variables. Raising a child. Building a culture.
                Hiring the 30th employee. The approach: probe, sense,
                respond. Run small experiments, see what happens, amplify
                what works.
              </p>

              <p>
                At 15 people, most operational problems are Complicated.
                The founder can analyze them. At 30, many have shifted to
                Complex — and the founder is still trying to analyze.
                Hiring is the clearest example. At 15, the founder
                interviews everyone and makes every call based on direct
                judgment. At 40, other people are interviewing using
                criteria the founder has never articulated because they
                never had to.
              </p>

              <p>
                Snowden&apos;s recommendation for Complex domains:
                safe-to-fail probes. Small experiments run in parallel.
                If a probe works, amplify it. If it starts to fail,
                dampen it. This requires accepting that you cannot know
                the outcome in advance — which is exactly what the
                founder who built the company by knowing the outcome in
                advance finds hardest to accept.
              </p>

              {/* ─── Segment 5: Concurrent workflows ─── */}

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The split
              </h2>

              <p>
                At 30 or more people, the company runs at least three
                concurrent workflows that cannot share a bottleneck:
                product and R&amp;D, commercial and revenue, and
                operations and compliance. The Arsenal solved this with
                guilds — marangoni, calafati, remeri — each with their
                own foremen. The Prussians solved it with staff
                sections — operations, logistics, topography, history.
              </p>

              <p>
                The founder who is simultaneously the best product
                thinker, the best salesperson, and the best operations
                person has to choose which one they will be. The other
                two need someone else. This is the hardest decision in
                the scaling transition because it means giving up
                something you are good at. Not because you failed at it.
                Because you succeeded, and the company grew past the
                point where one person can hold all of it.
              </p>

              <p>
                The Arsenal&apos;s arsenalotti were described as
                &ldquo;aristocrats among workingmen&rdquo; — state
                employees with stable wages, privileges, and direct
                contact with centres of power. They were not
                interchangeable labour. They were specialists whose
                value came from depth in one function, not breadth
                across many.
              </p>

              <p>
                The marangone who could build a whole ship was replaced
                by a team that could build a ship in an hour. Whether
                that was a gain or a loss depends on what you are
                measuring and how much time you have. Both answers are
                defensible. The Arsenal lasted 700 years.
              </p>

              {/* ─── Sources ─── */}
              <div className="mt-16 pt-8 border-t border-white/[0.06]">
                <h3 className="text-xs tracking-[0.2em] uppercase text-stone-600 mb-6">
                  Sources &amp; references
                </h3>
                <div className="space-y-3 text-stone-500 text-[13px] leading-relaxed">
                  <p>
                    <sup className="text-stone-600">1</sup>{" "}
                    Dunbar, R. (2010). <em>How Many Friends Does One Person
                    Need?</em> Group size layers: 5, 15, 50, 150.
                  </p>
                  <p>
                    <sup className="text-stone-600">2</sup>{" "}
                    Libin, P. (2019). Interview, <em>Inc. Magazine.</em> The
                    rule of 3 and 10, learned from Hiroshi Mikitani (Rakuten).
                  </p>
                  <p>
                    <sup className="text-stone-600">3</sup>{" "}
                    Davis, R.C. (1991). <em>Shipbuilders of the Venetian
                    Arsenal: Workers and Workplace in the Preindustrial
                    City.</em> Johns Hopkins University Press.
                  </p>
                  <p>
                    <sup className="text-stone-600">4</sup>{" "}
                    The Henry III demonstration (July 1574) is documented
                    in multiple contemporary sources. Likely used pre-staged
                    standardized parts.
                  </p>
                  <p>
                    <sup className="text-stone-600">5</sup>{" "}
                    Davis (1991), pp. 45&ndash;89. Based on nearly 1,000
                    petitions from shipbuilders to the Venetian government.
                  </p>
                  <p>
                    <sup className="text-stone-600">6</sup>{" "}
                    Paret, P. (1976). <em>Clausewitz and the State.</em> Princeton
                    University Press. Chapter on &ldquo;Scharnhorst&apos;s
                    Mediation between Old and New.&rdquo;
                  </p>
                  <p>
                    <sup className="text-stone-600">7</sup>{" "}
                    Scharnhorst: born 1755 Bordenau, Hanover. Son of an
                    independent farmer. Military Reorganization Commission
                    appointed July 25, 1807.
                  </p>
                  <p>
                    <sup className="text-stone-600">8</sup>{" "}
                    Auftragstaktik formalized by Moltke the Elder in his
                    1869 Instructions. Adopted in Prussian field manual 1888.
                    Term itself first used c. 1919&ndash;1920.
                  </p>
                  <p>
                    <sup className="text-stone-600">9</sup>{" "}
                    Snowden, D.J. &amp; Boone, M.E. (2007). &ldquo;A
                    Leader&apos;s Framework for Decision Making.&rdquo;
                    <em> Harvard Business Review</em>, November 2007.
                  </p>
                </div>
              </div>

            </div>
          </FadeIn>

          {/* Back link */}
          <FadeIn>
            <div className="mt-12 pt-8 border-t border-white/[0.04]">
              <Link
                href="/notes"
                className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-400 transition-colors text-sm tracking-wider uppercase"
              >
                <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                All notes
              </Link>
            </div>
          </FadeIn>
        </div>
      </article>
    </>
  );
}
