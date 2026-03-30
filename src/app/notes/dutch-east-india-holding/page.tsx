import { FadeIn } from "@/components/animate";
import { ShipCrossSection } from "@/components/note-illustrations";
import Link from "next/link";

export default function DutchEastIndiaNote() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <time className="text-xs tracking-wider text-stone-600">January 2025</time>
              <span className="text-stone-800">&middot;</span>
              <span className="text-xs tracking-wider text-stone-600">11 min read</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-cream">
              How the Dutch East India Company invented the holding company structure and what we still get wrong about it
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-stone-400 text-lg leading-relaxed">
              The VOC lasted 197 years. Its institutional innovations are
              still the architecture of modern corporate capitalism. Its
              mistakes are still the ones we make.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Illustration */}
      <section className="relative px-6 md:px-12 pb-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="relative py-8 border-t border-b border-white/[0.04]">
              <ShipCrossSection className="w-full max-w-lg mx-auto h-auto" />
              <p className="mt-4 text-center text-xs tracking-wider text-stone-600 italic">
                Cross-section of a VOC merchant vessel, six chambers, one company
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
                On March 20, 1602, the States-General of the Netherlands
                granted a charter to the Vereenigde Oostindische
                Compagnie &mdash; the United East India Company. It was
                formed by merging six competing trading firms that had been
                driving up each other&apos;s costs in the spice trade with
                Asia. The merger was pragmatic, not ideological: competition
                was destroying everyone&apos;s margins.
              </p>

              <p>
                What emerged was an organizational form that had never existed
                before. The VOC was not a partnership, not a one-voyage
                venture, and not a government agency. It was a permanent,
                multi-subsidiary entity with transferable shares, limited
                liability, decentralized operations, and centralized
                strategy. It was, in other words, a holding company.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                Three things the VOC invented
              </h2>

              <p>
                <strong className="text-cream/90">Permanent capital with tradeable shares.</strong>{" "}
                Before the VOC, investors committed capital for a single
                voyage. Ships returned, cargo was sold, profits were
                distributed, the venture was dissolved. The VOC locked in
                capital for a decade and told investors: you cannot withdraw,
                but you can sell your share to someone else.
              </p>

              <p>
                This created the first stock market. By the 1630s, the
                Amsterdam Exchange had market makers, short selling, options,
                and futures &mdash; all built around VOC shares. The
                shareholders included merchants, professionals, widows, and
                servants. Limited liability made this possible: you could lose
                your investment, but your house and your liberty were safe.
              </p>

              <p>
                <strong className="text-cream/90">Decentralized operations, centralized strategy.</strong>{" "}
                The VOC was organized into six regional chambers &mdash;
                Amsterdam, Zeeland, Delft, Rotterdam, Hoorn, Enkhuizen. Each
                fitted out its own ships, managed its own warehouses,
                conducted its own auctions. The central board, the Heeren
                XVII (Lords Seventeen), set overall strategy and allocated
                capital across the chambers.
              </p>

              <p>
                This is the ideal that modern multi-subsidiary holding
                companies aspire to: local expertise and responsiveness with
                strategic coherence from the centre. Most err toward
                excessive centralization (killing local responsiveness) or
                excessive decentralization (losing coherence). The VOC found
                a workable balance for nearly two centuries.
              </p>

              <p>
                <strong className="text-cream/90">Risk pooling across ventures and time.</strong>{" "}
                By operating as a permanent entity, the VOC could absorb the
                loss of individual ships without collapsing. Profitable
                voyages subsidized unprofitable ones. A single ship might be
                captured by pirates or sunk in a storm, but the company
                survived. This is the fundamental logic of diversification,
                and it is why holding companies exist.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                Three things the VOC got wrong
              </h2>

              <p>
                <strong className="text-cream/90">Governance opacity.</strong>{" "}
                The Heeren XVII refused to share detailed financials with
                shareholders. They argued that disclosure would benefit
                competitors. The actual reason was that it would reveal how
                much the directors were paying themselves and how poorly some
                investments had performed.
              </p>

              <p>
                This created principal-agent problems that compounded over
                decades. By the 18th century, corruption was systemic.
                Directors enriched themselves while shareholders received
                declining returns. The modern equivalent: companies with poor
                disclosure practices that erode investor trust until a crisis
                forces transparency.
              </p>

              <p>
                <strong className="text-cream/90">Intercompany complexity.</strong>{" "}
                The VOC never solved multi-entity accounting. Each chamber
                kept its own books in its own way. The Asian operations,
                managed from Batavia, kept yet another set. A consolidated
                picture of the entire company&apos;s financial position was
                rarely if ever produced.
              </p>

              <p>
                This remains the central challenge for holding companies.
                Intercompany eliminations, transfer pricing, multi-currency
                translation, and producing consolidated accounts that
                reflect economic reality &mdash; these are difficult
                problems, and most companies solve them badly. The VOC
                invented the structure but failed at the accounting. Four
                centuries later, the accounting is still the hard part.
              </p>

              <p>
                <strong className="text-cream/90">Mission creep into sovereignty.</strong>{" "}
                The VOC&apos;s charter granted it the power to negotiate
                treaties, wage war, establish colonies, and mint currency. It
                became a quasi-governmental entity &mdash; a private company
                with sovereign powers. This entangled it in military and
                colonial obligations that consumed capital and distracted from
                commercial objectives.
              </p>

              <p>
                Modern companies that take on regulatory, quasi-governmental,
                or expansive social roles beyond their commercial mandate face
                analogous dilution of focus. The VOC shows that scope creep
                is not a modern phenomenon. The temptation to do everything,
                because you can, has been destroying companies for 400 years.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The architecture survives
              </h2>

              <p>
                The VOC was dissolved on December 31, 1799, its debts assumed
                by the Dutch state. It lasted 197 years. But its institutional
                innovations &mdash; joint-stock ownership, limited liability,
                transferable shares, the multi-subsidiary holding structure,
                and the separation of ownership from management &mdash;
                remain the foundational architecture of modern corporate
                capitalism.
              </p>

              <p>
                Every holding company operating today is a descendant of the
                VOC. Every stock exchange is a descendant of the Amsterdam
                Beurs. Every shareholder who can lose their investment but
                not their house is benefiting from a principle the Dutch
                established in 1602.
              </p>

              <p className="text-amber/70 italic">
                The structure works. It has worked for four centuries. The
                challenge has never been the architecture &mdash; it has been
                the execution. Governance, accounting, and knowing when to
                stop expanding. The same three problems, since 1602.
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
