import { FadeIn } from "@/components/animate";
import { NoteFigure } from "@/components/note-figure";
import { CommunicationPaths, ArsenalAssemblyLine, CommandStructure, CynefinDiagram } from "@/components/scaling-illustrations";
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

              {/* ─── The feeling ─── */}

              <p>
                At 15 people, the founder can hold the whole company in
                their head. Every customer relationship, every vendor
                contract, every hire, every product decision. They know
                who said what to which client last Tuesday. They know the
                deployment schedule because they wrote it. They know the
                cash position because they check it every morning. This
                works. Robin Dunbar&apos;s research on group cognition
                suggests 15 is near the upper limit of a social group
                where everyone can maintain strong personal bonds with
                everyone
                else.<sup className="text-stone-500 text-xs">1</sup> A
                company of 15 runs on the founder&apos;s direct
                knowledge. Formal processes feel like overhead because at
                that size, they are.
              </p>

              <p>
                Then the company tries to grow to 30. Phil Libin, who ran
                Evernote, learned something from Hiroshi Mikitani at
                Rakuten (which grew from 1 person to over 10,000):
                everything about how a company operates breaks at roughly
                every multiple of three. At 3, at 10, at 30, at 100, at
                300.<sup className="text-stone-500 text-xs">2</sup> Each
                time the headcount triples, the number of communication
                pathways increases by roughly 10x. Libin&apos;s
                observation: most CEOs of rapidly growing startups
                &ldquo;blow right through these triplings without even
                realizing it.&rdquo;
              </p>

              <p>
                At 30, the founder is fielding questions they cannot
                answer because they no longer have first-hand knowledge
                of what happened. Someone made a promise to a vendor
                the founder didn&apos;t know about, an engineer shipped a
                feature that contradicts something the sales team told a
                client three weeks ago, and the founder finds out about
                all of it on Friday afternoon when the client emails
                asking why the product does something they were told it
                wouldn&apos;t.
              </p>

              <FadeIn>
                <div className="my-12 py-8 border-t border-b border-white/[0.06]">
                  <CommunicationPaths className="w-full h-auto" />
                </div>
              </FadeIn>

              <p>
                The founder is the most capable person in the company and
                the biggest constraint on its growth, and these two facts
                coexist in a way that makes the situation genuinely
                difficult to resolve. Delegating means accepting that a
                new hire will not do it as well as the founder, at least
                not for the first six months, while also accepting that
                the company cannot grow past what one brain can process.
                Both of these are real, and the company can stay stuck
                between them for years while the founder tells themselves
                they just need to work harder.
              </p>

              {/* ─── How you notice ─── */}

              <h2 className="font-serif text-2xl text-cream mt-16 mb-6">
                How you notice before it breaks
              </h2>

              <p>
                The catastrophe version is obvious: you lose a key client,
                miss a deadline badly, or someone good quits and says the
                reason is that nothing moves without your approval. But by
                the time that happens the problem has been compounding for
                months. The earlier signals are quieter and most founders
                misread them as personal failures rather than structural
                ones.
              </p>

              <p>
                Your calendar is the first sensor. If more than half of
                your meetings are about things other people could decide —
                vendor selection, hiring calls for roles you will not
                manage, internal process questions where the answer should
                already exist in a document somewhere — you are not
                leading. You are load-bearing. The difference matters
                because one of them scales and the other does not.
              </p>

              <p>
                The second sensor is response time. When someone on your
                team asks a question and the answer takes two days because
                it is waiting in your inbox behind forty other things, the
                team starts routing around you. They make the decision
                themselves (sometimes well, sometimes badly) or they wait
                (which is worse). Either way, you have become the
                constraint without anyone formally announcing it, and the
                workarounds people build to avoid depending on you will
                create their own problems six months later.
              </p>

              <p>
                The third sensor is what you do not know. At 15 people you
                can sense when something is off because you are close to
                every function. At 30, the things you do not know about
                accumulate silently. The question to ask yourself is not
                &ldquo;am I on top of everything&rdquo; — you are not, and
                the honest answer to that question at 30 people is always
                no — but &ldquo;do I have a way of finding out what I do
                not know about, other than someone telling me directly or
                a problem becoming visible?&rdquo; If the answer is no,
                you are operating on the same information model Prussia
                used at Jena.
              </p>

              <p>
                The people who can help you see this are usually already in
                the company. Your most experienced direct reports know where
                the bottleneck is. They are waiting for you to ask, or they
                have been hinting in ways you have been reading as
                complaints rather than diagnostics. An outside operator —
                a fractional COO, a board advisor, a coach who has seen
                this transition before — can also name it, because they are
                not inside the emotional structure of having built the thing
                and being told that their way of running it no longer works.
              </p>

              {/* ─── The Arsenal ─── */}

              <h2 className="font-serif text-2xl text-cream mt-16 mb-6">
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

              <p>
                The production sequence had roughly ten stages: hull
                framing, planking, caulking, decking, mast fitting,
                rigging, oar fitting, arming, provisioning. Empty hulls
                were launched into the Rio dell&apos;Arsenale — the
                internal canal — and towed past outfitting stations. The
                work came to the ship. Components were prefabricated to
                standard specifications and warehoused by category. Each
                zone of the Arsenal produced one type of part: hulls,
                oars, masts, rigging, rope, munitions.
              </p>

              <FadeIn>
                <div className="my-12 py-8 border-t border-b border-white/[0.06]">
                  <ArsenalAssemblyLine className="w-full h-auto" />
                </div>
              </FadeIn>

              <p>
                In July 1574, when Henry III of France visited Venice,
                the Arsenal staged a demonstration: workers assembled,
                armed, and provisioned a complete galley during a state
                banquet. Reportedly in under an
                hour.<sup className="text-stone-500 text-xs">4</sup> Historians
                note this was carefully orchestrated using pre-staged
                parts — a proof of throughput capacity, not routine
                operations. But the system that made the demonstration
                possible was real. It was the first moving assembly line,
                three centuries before Henry Ford.
              </p>

              <NoteFigure
                src="https://upload.wikimedia.org/wikipedia/commons/2/2e/View_of_the_entrance_to_the_Arsenal_by_Canaletto%2C_1732.jpg"
                alt="The Venetian Arsenal by Canaletto, 1732"
                caption="Entrance to the Arsenale, Canaletto (1732). Woburn Abbey collection."
                aspect="landscape"
              />

              <p>
                The transition from craft to assembly required the
                marangone — the master carpenter who could build an
                entire ship — to stop building and start supervising
                people who built parts of ships. The guilds specialized:
                calafati (caulkers), remeri (oar makers), alboranti (mast
                workers), each with their own protomaestri (foremen).
                Quality inspectors checked work daily. If a caulker
                produced a split seam, it was traced back to them. If a
                rope spinner produced a weak line, it was traced back to
                them.
              </p>

              <p>
                The arsenalotti were state employees with stable wages,
                exemption from civic burdens, and were described as
                &ldquo;aristocrats among workingmen.&rdquo; Caulkers were
                regularly posted on warships for emergency repairs at
                sea. Specialists whose value came from depth in one
                function.
              </p>

              <p>
                Some marangoni made the transition to supervisor. Some
                did not. The ones who couldn&apos;t were competent
                craftsmen in an organizational form that no longer
                applied. Robert C. Davis, studying Arsenal workers from
                1620 to 1670 through nearly 1,000 petitions to the
                Venetian government, documents a workforce that was
                highly skilled and deeply specialized — each person
                excellent at their stage, none capable of building a
                whole
                ship.<sup className="text-stone-500 text-xs">5</sup> The
                skills that made a great marangone were different from
                the skills that made a great protomaestro. The Arsenal
                needed both. It had to grow the second from the first.
              </p>

              {/* ─── The bandwidth problem ─── */}

              <h2 className="font-serif text-2xl text-cream mt-16 mb-6">
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
                Prussian soldiers and generals were competent, but
                Prussian command doctrine had not changed in fifty years
                and every decision still flowed up to the commanding
                general while every order flowed back down through the
                same single point of processing, which meant that when
                the situation on the ground at Auerstedt started moving
                faster than one person could assess it, the entire
                command structure locked up and 60,000 soldiers stood
                waiting for instructions that could not arrive in time.
              </p>

              <NoteFigure
                src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Iena.jpg"
                alt="Battle of Jena, 1806"
                caption="The Battle of Jena, Horace Vernet. October 14, 1806."
                aspect="landscape"
              />

              <p>
                Gerhard von Scharnhorst was appointed to chair the
                Military Reorganization Commission on July 25,
                1807.<sup className="text-stone-500 text-xs">7</sup> His
                background is worth knowing: born in Bordenau, Hanover,
                the son of an independent small farmer whose two brothers
                sold fish to the Elector&apos;s kitchen — not the sort of
                person who normally reformed a nation&apos;s military, but
                he had gained admission to a military academy, published a
                handbook for officers, founded a military journal, and his
                writing income remained his chief means of support while
                he was still a lieutenant.
              </p>

              <p>
                His core reform was the Kriegsakademie, re-founded
                October 15, 1810 in Berlin. Inaugural class: 20
                carefully vetted captains. 7 hours per week on military
                history — the most of any subject. Scharnhorst believed
                officers needed analytical judgment, not memorized
                procedures. He also abolished corporal punishment, ended
                the aristocratic monopoly on officer commissions, and
                devised the Krümpersystem — a rotation scheme that
                secretly expanded Prussia&apos;s trained manpower while
                staying within the Treaty of Tilsit&apos;s 42,000-soldier
                limit.
              </p>

              <p>
                The organizational innovation: the General Staff. Officers
                trained in a shared analytical framework, assigned to
                field commanders, organized into sections — operations,
                logistics, topography, intelligence, history. A staff
                officer could develop contingency plans, assess an
                unfolding situation, and act on the commander&apos;s
                intent without waiting for specific instructions. Later
                formalized as Auftragstaktik: specify the objective and
                the reason. Leave the method to the person on the
                ground.<sup className="text-stone-500 text-xs">8</sup>
              </p>

              <FadeIn>
                <div className="my-12 py-8 border-t border-b border-white/[0.06]">
                  <CommandStructure className="w-full h-auto" />
                </div>
              </FadeIn>

              <p>
                Scharnhorst was wounded at Lützen, May 2, 1813. Infected
                wound. Died June 28 in Prague, negotiating Austria&apos;s
                entry into the war. His student Clausewitz, his
                collaborator Gneisenau — who became Blücher&apos;s chief
                of staff, one of the great command partnerships in
                military history — and the officers they trained together
                won the Wars of Liberation and Waterloo. The system
                worked without its architect.
              </p>

              {/* ─── When the domain shifts ─── */}

              <h2 className="font-serif text-2xl text-cream mt-16 mb-6">
                When analysis stops working
              </h2>

              <p>
                Dave Snowden&apos;s Cynefin
                framework<sup className="text-stone-500 text-xs">9</sup> makes
                a distinction the Arsenal and Prussian cases already
                demonstrate: there are problems you can analyze your way
                through, and problems where the answer only becomes
                visible after you act. At 15 people, most operational
                problems are the first kind — the founder can think
                through them and find the answer. At 30, many have shifted
                to the second kind, and the founder is still trying to
                analyze their way through situations that require
                experimentation instead.
              </p>

              <FadeIn>
                <div className="my-12 py-8 border-t border-b border-white/[0.06]">
                  <CynefinDiagram className="w-full h-auto" />
                </div>
              </FadeIn>

              <p>
                Hiring is the clearest example. At 15, the founder
                interviews everyone and makes every call on direct
                judgment. At 40, other people are interviewing candidates
                using criteria the founder has never written down because
                they never had to — the criteria lived in their head,
                worked perfectly when they were the only interviewer, and
                became invisible the moment someone else needed to apply
                them.
              </p>

              {/* ─── The split ─── */}

              <h2 className="font-serif text-2xl text-cream mt-16 mb-6">
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
                The marangone who could build a whole ship was replaced
                by a team that could build a ship in an hour. The Arsenal
                lasted 700 years.
              </p>

              <p>
                If you are the founder in this situation, here are the
                questions that actually matter, in roughly the order they
                become urgent:
              </p>

              <div className="my-8 space-y-4">
                {[
                  "Which of the three workflows — product, commercial, operations — would suffer least if you stepped back from it for 90 days?",
                  "Is there someone already in the company who could run that function if you gave them the authority and stopped overriding their decisions?",
                  "What are you doing today that only you can do, and what are you doing today that you do only because you have always done it?",
                  "If the bank called tomorrow asking for updated compliance documentation, could someone other than you produce it within 48 hours?",
                  "When was the last time you learned about a problem in the company from a report rather than from being in the room when it happened?",
                ].map((q, i) => (
                  <div key={i} className="pl-5 border-l border-amber/20">
                    <p className="text-stone-400 text-[15px]">{q}</p>
                  </div>
                ))}
              </div>

              <p>
                The Arsenal lasted 700 years. Scharnhorst&apos;s staff
                system outlived every general who used it. Both required
                someone to make the transition from doing the work to
                building the system that does the work. The transition
                itself is the hard part, and there is no version of it
                that feels comfortable while it is happening.
              </p>

              {/* ─── Sources ─── */}
              <div className="mt-16 pt-8 border-t border-white/[0.06]">
                <h3 className="text-xs tracking-[0.2em] uppercase text-stone-600 mb-6">
                  Sources &amp; references
                </h3>
                <div className="space-y-3 text-stone-500 text-[13px] leading-relaxed">
                  <p><sup className="text-stone-600">1</sup> Dunbar, R. (2010). <em>How Many Friends Does One Person Need?</em> Group size layers: 5, 15, 50, 150.</p>
                  <p><sup className="text-stone-600">2</sup> Libin, P. (2019). Interview, <em>Inc. Magazine.</em> The rule of 3 and 10, learned from Hiroshi Mikitani (Rakuten).</p>
                  <p><sup className="text-stone-600">3</sup> Davis, R.C. (1991). <em>Shipbuilders of the Venetian Arsenal.</em> Johns Hopkins University Press.</p>
                  <p><sup className="text-stone-600">4</sup> Henry III demonstration (July 1574). Likely used pre-staged standardized parts.</p>
                  <p><sup className="text-stone-600">5</sup> Davis (1991), pp. 45&ndash;89. Based on nearly 1,000 petitions from shipbuilders.</p>
                  <p><sup className="text-stone-600">6</sup> Paret, P. (1976). <em>Clausewitz and the State.</em> Princeton University Press.</p>
                  <p><sup className="text-stone-600">7</sup> Scharnhorst: born 1755, Bordenau. Military Reorganization Commission appointed July 25, 1807.</p>
                  <p><sup className="text-stone-600">8</sup> Auftragstaktik formalized by Moltke the Elder, 1869. Prussian field manual 1888.</p>
                  <p><sup className="text-stone-600">9</sup> Snowden, D.J. &amp; Boone, M.E. (2007). <em>Harvard Business Review</em>, November 2007.</p>
                </div>
              </div>

            </div>
          </FadeIn>

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
