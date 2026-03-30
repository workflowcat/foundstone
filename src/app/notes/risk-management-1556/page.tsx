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
              <span className="text-xs tracking-wider text-stone-600">9 min read</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-cream">
              What mining engineers knew about risk management in 1556 that startup founders don&apos;t
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-stone-400 text-lg leading-relaxed">
              Georgius Agricola catalogued six categories of risk 470 years
              ago. Modern compliance frameworks are still catching up.
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
                In 1556, a German physician named Georgius Agricola published
                <em> De Re Metallica</em> &mdash; a treatise on mining and
                metallurgy that would remain the standard reference for
                nearly 200 years. Herbert Hoover translated it into English
                in 1912, before he became president and while he was still a
                mining engineer. He recognized it as the first systematic
                treatment of industrial risk.
              </p>

              <p>
                Agricola treated mining as a system of categorized risks,
                each requiring specific mitigations. Where his predecessors
                described an art learned through apprenticeship, he described
                an engineering discipline managed through rational analysis.
              </p>

              <NoteFigure
                src="https://upload.wikimedia.org/wikipedia/commons/a/a6/DeReMetallicaShaft.jpg"
                alt="Woodcut of a mine shaft from De Re Metallica, 1556"
                caption="Mine shaft cross-section from De Re Metallica (1556), showing underground workings, timber supports, and drainage systems."
                aspect="portrait"
              />

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                Six categories of risk
              </h2>

              <p>
                His categories map directly to modern enterprise risk
                management:
              </p>

              <div className="my-8 space-y-4">
                {[
                  { risk: "Geological risk", modern: "Product-market fit", desc: "The vein may be barren. Agricola recommended systematic surveying and test digging before committing major capital." },
                  { risk: "Technical risk", modern: "Operational risk", desc: "Shafts collapse, ventilation fails, water floods the workings. He prescribed specific engineering solutions: timber shoring, ventilation shafts, drainage pumps." },
                  { risk: "Financial risk", modern: "Capital/liquidity risk", desc: "Mining requires large outlays before revenue. He described the Kuxe share system — dividing a mine into 128 tradeable parts to distribute risk." },
                  { risk: "Labour risk", modern: "Human capital risk", desc: "Skilled miners were scarce and could be injured. He recommended limiting shift lengths and providing protective equipment." },
                  { risk: "Political risk", modern: "Regulatory risk", desc: "Mines depended on sovereign favour. He documented the legal framework of mining rights and taxation." },
                  { risk: "Market risk", modern: "Market risk", desc: "Metal prices fluctuated. A mine profitable at one price could be worthless at another." },
                ].map((item) => (
                  <div key={item.risk} className="pl-5 border-l border-amber/20">
                    <p className="text-cream/90 text-sm font-medium">
                      {item.risk}
                      <span className="text-stone-500 ml-2">&rarr; {item.modern}</span>
                    </p>
                    <p className="text-stone-400 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The Kuxe system
              </h2>

              <p>
                The most interesting financial innovation in <em>De Re
                Metallica</em> is the <em>Kuxe</em> &mdash; mining shares.
                Saxon miners divided a mine into 128 parts that could be
                bought, sold, and traded. This created a liquid market in
                mining interests, allowing investors to diversify across
                multiple mines.
              </p>

              <p>
                Structurally identical to modern equity financing, and it
                predates the Dutch East India Company&apos;s stock offering
                by half a century. He also described stage-gate investment:
                small capital for exploration, larger amounts only if results
                were promising. Venture capital staging. Saxon miners were
                doing it in the 1500s.
              </p>

              <NoteFigure
                src="https://upload.wikimedia.org/wikipedia/commons/2/25/Agricola-1.png"
                alt="Technical illustration from De Re Metallica showing mining equipment"
                caption="Technical illustration from De Re Metallica. Every mechanism drawn with the precision of an engineering manual, not a history book."
                aspect="landscape"
              />

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                Risk as information
              </h2>

              <p>
                Agricola insisted that risk was information, not fate. It
                could be identified, categorized, measured, and mitigated
                through rational analysis. Mining was an engineering problem,
                not a gamble against nature.
              </p>

              <p>
                Modern risk registers required by ISO 31000, COSO ERM, or
                SOC 2 follow the same structure: identify risks, categorize
                them, assess likelihood and impact, document mitigations,
                assign owners, review periodically.
              </p>

              <p>
                Agricola&apos;s mine operators who understood geology,
                engineering, and finance produced more ore per ducat of
                capital deployed than operators who relied on luck. The
                Kuxe investors who diversified across multiple mines lost
                less money than those who concentrated. The engineers who
                documented their drainage systems could rebuild after a
                flood. Those who didn&apos;t could not.
              </p>

              <p>
                <em>De Re Metallica</em> went through multiple editions
                across Germany, Italy, and eventually England. It was the
                standard text until the late 18th century. Herbert Hoover
                kept a copy on his desk for the rest of his life.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-16 pt-8 border-t border-white/[0.04]">
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
