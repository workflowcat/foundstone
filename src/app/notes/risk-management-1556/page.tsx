import { FadeIn } from "@/components/animate";
import { MineShaftIllustration } from "@/components/note-illustrations";
import { NoteFigure } from "@/components/note-figure";
import Link from "next/link";

export default function RiskManagementNote() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <time className="text-xs tracking-wider text-stone-600">February 2025</time>
              <span className="text-stone-800">&middot;</span>
              <span className="text-xs tracking-wider text-stone-600">14 min read</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-cream">
              What mining engineers knew about risk management in 1556 that startup founders don&apos;t
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-stone-400 text-lg leading-relaxed">
              Agricola described women in the mining districts who had
              married seven husbands. Consumption carried each one off.
              He wrote the book anyway, because the alternative to
              managing risk was not avoiding risk.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Illustration */}
      <section className="relative px-6 md:px-12 pb-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="relative py-8 border-t border-b border-white/[0.04]">
              <MineShaftIllustration className="w-full max-w-lg mx-auto h-auto" />
              <p className="mt-4 text-center text-xs tracking-wider text-stone-600 italic">
                Cross-section of a Saxon mine, after Agricola, De Re Metallica, 1556
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Body */}
      <article className="relative px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="space-y-6 text-stone-300 leading-relaxed text-[16px]">

              <p>
                In 1556, Georgius Agricola published <em>De Re
                Metallica</em> — a treatise on mining and metallurgy that
                stayed in print for nearly 200 years. Agricola was a
                physician. He worked in Joachimsthal and Chemnitz, two of
                the most active mining districts in Saxony. He watched
                miners die. He studied why. Then he wrote down how to run
                a mine so that fewer of them did.
              </p>

              <p>
                Herbert Hoover and his wife Lou Henry Hoover translated it
                into English in 1912. Hoover was a mining engineer before
                he was president. The Hoovers&apos; footnotes became the
                most comprehensive history of mining written up to that
                point. They won the first gold medal ever awarded by the
                Mining and Metallurgical Society of
                America.<sup className="text-stone-500 text-xs">1</sup> Hoover
                kept a copy on his desk for the rest of his life.
              </p>

              <NoteFigure
                src="https://upload.wikimedia.org/wikipedia/commons/a/a6/DeReMetallicaShaft.jpg"
                alt="Woodcut of a mine shaft from De Re Metallica, 1556"
                caption="Mine shaft cross-section, De Re Metallica (1556). Timber supports, drainage system, hoisting mechanism."
                aspect="portrait"
              />

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The drainage problem
              </h2>

              <p>
                The number one engineering problem in 16th-century mining
                was water. Every mine floods. The ore is underground, and
                so is the water table. You cannot get the ore without
                dealing with the water.
              </p>

              <p>
                Agricola devoted all of Book VI to drainage and ventilation
                machinery. He described at least six varieties of
                rag-and-chain pumps, multiple piston pump designs, and
                power sources ranging from human treadmills to water
                wheels. A single-action piston pump could drain to about
                70 metres depth. Beyond that, you needed batteries of pumps
                stacked in series — each one lifting water to the level
                of the next.<sup className="text-stone-500 text-xs">2</sup>
              </p>

              <p>
                If you run a company with 47 SaaS subscriptions that nobody
                audits, a monitoring system that pages the wrong person at
                3am, and a staging environment that stopped matching
                production in November — you have a drainage problem. The
                water is getting in. The question is whether you have pumps
                and whether they work.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                Six categories
              </h2>

              <p>
                Agricola identified six categories of risk in Book I. He
                addressed them directly because critics of mining argued it
                was too dangerous and too expensive to be worthwhile. His
                response was to list every risk, describe each one
                specifically, and then describe the mitigation. The risks:
              </p>

              <div className="my-8 space-y-4">
                {[
                  { risk: "Geological", desc: "The vein may be barren. Agricola recommended systematic surveying and test digging before committing capital. You sink a test shaft. You evaluate what you find. You decide whether to invest more. This is the logic behind every MVP and every seed round — small capital first, evidence before commitment." },
                  { risk: "Technical", desc: "Shafts collapse, ventilation fails, water floods the workings. He prescribed specific engineering solutions and illustrated them in detail — six types of pumps, half a dozen ventilation schemes. The woodcuts in De Re Metallica are engineering drawings, not decorations." },
                  { risk: "Financial", desc: "Mining requires large outlays before any revenue. The Kuxe share system distributed this: a mine divided into 128 tradeable parts, sold at the Leipzig trade fairs beginning in 1472. Specialized brokers (Kuxkrenzler) handled trades. Prices fluctuated. Insider trading was common." },
                  { risk: "Labour", desc: "Skilled miners were scarce and died young. Agricola described 'Bergsucht' — miner's consumption, what we now call silicosis and lung cancer from dust and radon. He noted women in the mining districts who had married seven husbands. He recommended limiting shift lengths and providing protective equipment." },
                  { risk: "Political", desc: "Mines depended on sovereign favour and the Bergmeister — a government inspector who visited mines regularly, identified hazards, and functioned as safety inspector, judge, and regulator combined. Mining rights could be revoked." },
                  { risk: "Market", desc: "Metal prices fluctuated. A mine profitable at one silver price could be worthless at another. This risk had no mitigation. Agricola was honest about it." },
                ].map((item) => (
                  <div key={item.risk} className="pl-5 border-l border-amber/20">
                    <p className="text-cream/90 text-sm font-medium">
                      {item.risk}
                    </p>
                    <p className="text-stone-400 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The Kuxe and stage-gate capital
              </h2>

              <p>
                The Kuxe system deserves its own section because it
                predates the stock market by 130 years. A mine
                (Gewerkschaft) was divided into 128 shares. These could be
                subdivided, mortgaged, and sold. Trading happened at the
                Leipzig fairs starting in 1472 — three decades before the
                VOC issued the first stock.<sup className="text-stone-500 text-xs">3</sup>
              </p>

              <p>
                The structure had what we now call stage-gate investment
                built in. Robert Cooper coined the term &ldquo;stage-gate&rdquo;
                in 1988,<sup className="text-stone-500 text-xs">4</sup> but
                Saxon miners were doing it 500 years earlier: small capital
                to sink a test shaft, evaluate what you find, then decide
                whether to commit more. Less than 15% of seed-funded
                startups secure Series A today. Most Kuxe-funded mines
                also failed. The mortality rate at the gate between
                exploration and production was brutal then too.
              </p>

              <p>
                Kuxe investors who diversified across multiple mines lost
                less than those who concentrated. This is portfolio theory
                applied through practice, centuries before Markowitz
                formalized it.
              </p>

              <NoteFigure
                src="https://upload.wikimedia.org/wikipedia/commons/2/25/Agricola-1.png"
                alt="Technical illustration from De Re Metallica"
                caption="Technical illustration, De Re Metallica. Engineering drawings, not decorations."
                aspect="landscape"
              />

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                What a risk register looks like
              </h2>

              <p>
                Modern risk management uses a tool called a risk register.
                If you have never seen one, it is a spreadsheet with these
                columns: risk ID, description, category, likelihood score
                (1&ndash;5), impact score (1&ndash;5), risk score
                (likelihood &times; impact, giving a 1&ndash;25 range),
                risk owner (a named person), existing controls, planned
                controls, residual risk after controls, review
                date.<sup className="text-stone-500 text-xs">5</sup> Scores
                map to a colour grid: green (1&ndash;4), yellow
                (5&ndash;9), orange (10&ndash;15), red (16&ndash;25).
              </p>

              <p>
                Agricola did not use a 5&times;5 matrix. He used prose. But
                the structure maps directly: identify a risk (the vein is
                barren), categorize it (geological), assess likelihood
                (depends on survey data), describe the mitigation (test
                shaft before committing), assign ownership (the
                Bergmeister inspects). ISO 31000 was published in 2009.
                COSO ERM was published in 2004, updated in
                2017.<sup className="text-stone-500 text-xs">6</sup> The
                framework they describe is the framework Agricola used in
                prose 450 years earlier.
              </p>

              <p>
                69% of organizations do not have comprehensive enterprise
                risk management. Only 22% of finance leaders describe
                theirs as &ldquo;mature.&rdquo; 85% of Fortune 500
                companies have adopted ERM, but for SMEs the number was
                38% in
                2023.<sup className="text-stone-500 text-xs">7</sup> Most
                risk registers are compliance artifacts that get filled in
                once and reviewed when someone asks.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                What happens without it
              </h2>

              <p>
                In March 2017, Apache disclosed a critical vulnerability
                in Apache Struts and released a patch the same day. The
                Department of Homeland Security notified Equifax directly
                the next day. Equifax sent an internal email directing
                admins to patch. One day later, attackers gained access
                through the unpatched system. Equifax ran vulnerability
                scans but failed to identify the vulnerable server. The
                breach was discovered 141 days later. 147 million people
                affected. Total cost: $1.38 billion in settlements plus
                $1 billion in mandated security
                improvements.<sup className="text-stone-500 text-xs">8</sup> The
                patch had been available for two months.
              </p>

              <p>
                In 2019, Russian intelligence began breaching SolarWinds&apos;
                build system. Up to 18,000 customers received a
                compromised software update, including US Treasury,
                Commerce, and DHS. An intern had set the update server
                password to &ldquo;solarwinds123.&rdquo; A security
                researcher found it publicly exposed and notified
                SolarWinds. They changed the password. They did not
                disclose the
                leak.<sup className="text-stone-500 text-xs">9</sup> The
                SEC later charged SolarWinds and its CISO with fraud for
                misleading investors about security practices.
              </p>

              <p>
                At FTX, CEO Sam Bankman-Fried stated that he spent zero
                time managing risk. There was no risk officer, no CFO, no
                independent board. The board was SBF, one employee, and
                one outside lawyer. John Ray III, the restructuring CEO
                who had handled Enron&apos;s bankruptcy, said there were
                &ldquo;absolutely no internal controls
                whatsoever.&rdquo;<sup className="text-stone-500 text-xs">10</sup>
              </p>

              <p>
                Agricola would have recognized all three failures. The
                Equifax breach is a ventilation problem — poison
                accumulating because nobody checked the airflow. SolarWinds
                is a structural problem — rot in the timber supports that
                hold the shaft open. FTX is simpler: nobody was looking at
                the mine at all.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                SOC 2 and the Bergmeister
              </h2>

              <p>
                The Bergmeister — the government mining inspector —
                visited mines regularly, wore a distinctive uniform (black
                hat with yellow band, red waistcoat), and combined the
                roles of safety inspector, judge, and
                regulator.<sup className="text-stone-500 text-xs">3</sup> If
                he found hazards, the mine was shut down until they were
                fixed.
              </p>

              <p>
                A SOC 2 Type II audit is the modern equivalent. An
                independent auditor evaluates whether your security
                controls have operated effectively over 6&ndash;12 months,
                across five trust service criteria: security (mandatory),
                availability, processing integrity, confidentiality, and
                privacy.<sup className="text-stone-500 text-xs">11</sup> A
                first-time SOC 2 takes 6&ndash;12 months and costs
                $30,000&ndash;$150,000.
              </p>

              <p>
                29% of companies report losing deals because they lacked
                compliance certification. A startup lost a $2.3 million
                annual contract with a Fortune 500 healthcare company —
                procurement approved the product, but the deal stalled
                eight months waiting for SOC 2, and the client signed with
                a compliant
                competitor.<sup className="text-stone-500 text-xs">12</sup> 72%
                of companies that completed SOC 2 audits did so
                specifically to win business.
              </p>

              <p>
                The Bergmeister wore a uniform because authority needs to
                be visible. The SOC 2 report serves the same function. It
                is a document that says: someone independent looked at
                this operation, and the operation is sound. The Bergmeister
                inspected the timber supports. The auditor inspects the
                access controls. The mine owner wanted the certificate
                because it attracted investment. The SaaS company wants it
                because it closes deals.
              </p>

              <p>
                <em>De Re Metallica</em> went through multiple editions
                across Germany, Italy, and England. It was the standard
                reference until the late 18th century. 470 years later,
                most companies still do not have a comprehensive risk
                management process, and the ones that do often treat it as
                a checkbox. Agricola documented real deaths, real
                engineering solutions, and real financial structures
                because he lived in a mining town and watched what happened
                when people did not.
              </p>

              {/* Sources */}
              <div className="mt-16 pt-8 border-t border-white/[0.06]">
                <h3 className="text-xs tracking-[0.2em] uppercase text-stone-600 mb-6">
                  Sources &amp; references
                </h3>
                <div className="space-y-3 text-stone-500 text-[13px] leading-relaxed">
                  <p>
                    <sup className="text-stone-600">1</sup>{" "}
                    Hoover, H.C. &amp; Hoover, L.H. (1912). Translation of
                    <em> De Re Metallica</em> by Georgius Agricola. The Mining
                    Magazine, London.
                  </p>
                  <p>
                    <sup className="text-stone-600">2</sup>{" "}
                    Macini, P. (2004). &ldquo;Agricola and the History of
                    Pumping Machinery.&rdquo; <em>Journal of Hydraulic
                    Engineering</em>, ASCE, 130(11).
                  </p>
                  <p>
                    <sup className="text-stone-600">3</sup>{" "}
                    Tontine Coffee-House (2024). &ldquo;Kuxe: German Mining
                    Shares.&rdquo; On the Leipzig fairs, Kuxkrenzler brokers,
                    and Bergmeister governance.
                  </p>
                  <p>
                    <sup className="text-stone-600">4</sup>{" "}
                    Cooper, R.G. (1988). First published use of
                    &ldquo;Stage-Gate&rdquo; framework. See <em>Winning at
                    New Products</em> (1986, 1st ed.).
                  </p>
                  <p>
                    <sup className="text-stone-600">5</sup>{" "}
                    ISO 31000:2018. Risk management guidelines. 5&times;5
                    matrix methodology.
                  </p>
                  <p>
                    <sup className="text-stone-600">6</sup>{" "}
                    COSO ERM (2004, updated 2017). Committee of Sponsoring
                    Organizations of the Treadway Commission.
                  </p>
                  <p>
                    <sup className="text-stone-600">7</sup>{" "}
                    AICPA / NC State (2018, 2022). Enterprise Risk Management
                    surveys. 69% without comprehensive ERM; 22% of finance
                    leaders report maturity.
                  </p>
                  <p>
                    <sup className="text-stone-600">8</sup>{" "}
                    FTC (2019). Equifax settlement. $575&ndash;700M FTC/CFPB
                    + $1B mandated improvements. CVE-2017-5638.
                  </p>
                  <p>
                    <sup className="text-stone-600">9</sup>{" "}
                    GAO (2021). SolarWinds incident report. SEC charged
                    SolarWinds and CISO (2023).
                  </p>
                  <p>
                    <sup className="text-stone-600">10</sup>{" "}
                    Ray, J.J. III (2022). FTX bankruptcy declaration.
                    &ldquo;Absolutely no internal controls whatsoever.&rdquo;
                  </p>
                  <p>
                    <sup className="text-stone-600">11</sup>{" "}
                    AICPA. SOC 2 Trust Service Criteria. Type II: 6&ndash;12
                    month observation period.
                  </p>
                  <p>
                    <sup className="text-stone-600">12</sup>{" "}
                    Vanta (2024). Compliance statistics. 29% deal loss rate;
                    72% audit-for-business-development.
                  </p>
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
