import { FadeIn } from "@/components/animate";
import { LedgerIllustration } from "@/components/note-illustrations";
import { NoteFigure } from "@/components/note-figure";
import Link from "next/link";

export default function VenetianBookkeepingNote() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <time className="text-xs tracking-wider text-stone-600">March 2025</time>
              <span className="text-stone-800">&middot;</span>
              <span className="text-xs tracking-wider text-stone-600">14 min read</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-cream">
              Why the Venetian Republic&apos;s bookkeeping system matters for modern SaaS companies
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-stone-400 text-lg leading-relaxed">
              27 pages from 1494 are still, functionally, how bookkeeping
              works. Everything else from that year is in a museum.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Illustration */}
      <section className="relative px-6 md:px-12 pb-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="relative py-8 border-t border-b border-white/[0.04]">
              <LedgerIllustration className="w-full max-w-lg mx-auto h-auto" />
              <p className="mt-4 text-center text-xs tracking-wider text-stone-600 italic">
                The libro maestro: dare (debit) and avere (credit), Venice, c. 1494
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
                In November 1494, a Franciscan friar named Luca Pacioli
                published a 615-page mathematics textbook in Venice. 27 pages
                described how to do bookkeeping. He called it &ldquo;the
                method of Venice&rdquo; — a system the merchants had been
                running for at least two centuries. The earliest surviving
                double-entry records are from 1299, kept by a Florentine
                firm called
                Farolfi.<sup className="text-stone-500 text-xs">1</sup> What
                Pacioli did was write it down clearly enough that you could
                learn it from the book instead of from a Venetian merchant.
              </p>

              <p>
                Venice had the printing press. Within decades the method had
                spread across Europe. The same distribution pattern repeats:
                spreadsheets made financial modelling accessible, cloud
                accounting made bookkeeping accessible, and something
                similar is probably happening now with automated revenue
                recognition. We don&apos;t have great data yet on what the
                current cycle changes.
              </p>

              <NoteFigure
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Pacioli.jpg"
                alt="Portrait of Luca Pacioli with geometric instruments, c. 1495"
                caption="Luca Pacioli, attr. Jacopo de' Barbari, c. 1495. Museo di Capodimonte, Naples."
                aspect="landscape"
              />

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                How it works
              </h2>

              <p>
                Venetian bookkeeping used three books. The <em>memoriale</em> was
                a diary — every transaction in plain language as it happened.
                The <em>giornale</em> translated those into formal entries
                with explicit debits and credits. The <em>quaderno</em>, the
                master ledger, organized everything by account.
              </p>

              <p>
                Every account had two columns: <em>dare</em> (to give, left)
                and <em>avere</em> (to have, right). Every transaction
                touched at least two accounts. You buy spices for cash:
                spice inventory goes up on the left, cash goes down on the
                right. The sum of all left columns always equals the sum of
                all right columns.
              </p>

              <p>
                This is a mathematical identity: assets = liabilities +
                equity. Every transaction preserves the equation. If your
                books do not balance, there is an error, and you can find it
                without understanding any of the individual entries. Your
                bookkeeper does not need to know what the business does to
                tell you something is wrong. Most software built in the last
                twenty years does not self-check this
                cleanly.<sup className="text-stone-500 text-xs">2</sup>
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                Cash is not revenue
              </h2>

              <p>
                If you have run a company, you have probably looked at your
                bank balance and felt good about it, and then someone in
                finance told you that most of that money is not actually
                yours yet.
              </p>

              <p>
                A Venetian merchant who got paid in advance for goods he had
                not shipped recorded it as a liability. The cash went into
                one account. The obligation went into another. They only met
                when he delivered. This is what SaaS accounting calls
                deferred revenue. You get a $120,000 annual prepayment: cash
                goes up $120,000, deferred revenue (a liability) goes up
                $120,000. Each month you deliver the service, $10,000 moves
                from the liability to recognized revenue.
              </p>

              <p>
                Salesforce had $20.7 billion in deferred revenue on its
                balance sheet at the end of FY2025 — roughly 55% of annual
                revenue sitting as a liability at any given
                moment.<sup className="text-stone-500 text-xs">3</sup> Their
                total remaining performance obligations (contracted revenue
                not yet delivered) were $63.4 billion. The accounting
                structure that makes this trackable across millions of
                subscriptions is Pacioli&apos;s.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                What goes wrong
              </h2>

              <p>
                The temptation to confuse cash with revenue is not
                hypothetical. In 2021, the SEC charged three executives at
                Pareteum Corp. for recognizing revenue from non-binding
                purchase orders — overstating revenue by 60% for FY2018 and
                91% for the first half of 2019. The CFO pleaded guilty. The
                CCO went to
                prison.<sup className="text-stone-500 text-xs">4</sup>
              </p>

              <p>
                Groupon&apos;s 2011 S-1 introduced a metric called
                &ldquo;Adjusted Consolidated Segment Operating Income&rdquo;
                which excluded customer acquisition costs and turned a $420
                million GAAP loss into a positive $61
                million.<sup className="text-stone-500 text-xs">5</sup> The
                SEC made them remove it. WeWork went further in 2019 with
                &ldquo;community-adjusted EBITDA&rdquo; — essentially rent
                collected minus rent paid, with everything else
                excluded.<sup className="text-stone-500 text-xs">6</sup> Neither
                ARR nor MRR is a GAAP metric. There is no mandated
                calculation methodology. Companies can define them to their
                advantage, and they do.
              </p>

              <p>
                A 2021 SEC analysis of 500+ enforcement actions between 2014
                and 2019 found that improper revenue recognition accounted
                for 43% of all accounting fraud
                cases.<sup className="text-stone-500 text-xs">7</sup> The
                Venetian system was designed to make this kind of error
                detectable. The modern version of the system is much more
                complex, but the detection mechanism — every entry recorded
                in two places, books that must balance — is the same one
                Pacioli described.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                ASC 606
              </h2>

              <p>
                The current US revenue recognition standard, ASC 606, took
                effect in 2018 for public companies. It replaced a patchwork
                of industry-specific rules with a single five-step model:
                identify the contract, identify what you owe (performance
                obligations), set the price, allocate the price across
                obligations, recognize revenue when you
                deliver.<sup className="text-stone-500 text-xs">8</sup>
              </p>

              <p>
                For SaaS companies this matters because a subscription
                bundled with onboarding and API access is at least two
                performance obligations, possibly three. Each has to be
                priced separately. Revenue for each is recognized on its own
                schedule. A Venetian merchant doing the same exercise — a
                cargo of spices sold with a shipping guarantee and an
                insurance arrangement — would have opened three voyage
                accounts.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                Voyage accounts
              </h2>

              <p>
                Venetian merchants opened a separate account for each
                trading voyage. All costs went in — cargo, insurance, crew
                wages, port fees, bribes. Revenue was recognized on sale.
                The account closed with a profit or loss. Each voyage was
                its own P&amp;L.
              </p>

              <p>
                A SaaS subscription works the same way. Start date, billing
                cycle, defined revenue, can be expanded or cancelled. New
                MRR, expansion MRR, churned MRR, net revenue retention —
                these are categories for flows into and out of what are
                essentially subscription voyage accounts. The vocabulary
                changed. The ledger entries would look the same.
              </p>

              <NoteFigure
                src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Pacioli_-_Summa_de_arithmetica_geometria%2C_1523_-_1363187.jpeg"
                alt="Page from Pacioli's Summa de Arithmetica"
                caption="Interior page from the Summa de Arithmetica. 27 of 615 pages."
                aspect="portrait"
              />

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                530 years later
              </h2>

              <p>
                If you showed Pacioli a modern general ledger he would know
                what he was looking at. Chart of accounts. Trial balance (he
                called it the <em>summa summarum</em>). Receivables,
                payables, capital account (his <em>conto del
                cavedal</em>). Stock-based compensation would confuse him.
                The core mechanic — record every event twice so the system
                catches its own errors — would not.
              </p>

              <p>
                Venice ran on infrastructure the merchants did not build:
                the colleganza partnership structure, the Banco di Rialto (a
                public bank for giro transfers, established
                1587),<sup className="text-stone-500 text-xs">9</sup> regulated
                marine insurance, mandatory bookkeeping. In 1593, Venetian
                law required citizens to settle all bills of exchange
                through the Banco. The merchants used it. They did not
                maintain it. It outlasted all of them.
              </p>

              <p>
                GAAP, auditing standards, stock exchanges, banking
                regulation. The plumbing changes. The need for plumbing
                does not.
              </p>

              {/* Sources */}
              <div className="mt-16 pt-8 border-t border-white/[0.06]">
                <h3 className="text-xs tracking-[0.2em] uppercase text-stone-600 mb-6">
                  Sources &amp; references
                </h3>
                <div className="space-y-3 text-stone-500 text-[13px] leading-relaxed">
                  <p>
                    <sup className="text-stone-600">1</sup>{" "}
                    Lee, G.A. (1977). &ldquo;The Coming of Age of Double
                    Entry: The Giovanni Farolfi Ledger of
                    1299&ndash;1300.&rdquo;{" "}
                    <em>Accounting Historians Journal</em>, 4(2).
                    The earliest known complete double-entry records.
                  </p>
                  <p>
                    <sup className="text-stone-600">2</sup>{" "}
                    Gleeson-White, J. (2012). <em>Double Entry: How the
                    Merchants of Venice Created Modern Finance.</em> W.W. Norton.
                    On the self-checking property and its durability.
                  </p>
                  <p>
                    <sup className="text-stone-600">3</sup>{" "}
                    Salesforce Q4 FY2025 earnings release. $20.7B
                    unearned revenue, $63.4B total RPO.
                  </p>
                  <p>
                    <sup className="text-stone-600">4</sup>{" "}
                    SEC Press Release 2023-205. Pareteum Corp. executives
                    charged with fraudulent revenue recognition. Revenue
                    overstated 60% (FY2018), 91% (H1 2019).
                  </p>
                  <p>
                    <sup className="text-stone-600">5</sup>{" "}
                    Groupon S-1 (June 2011). &ldquo;Adjusted CSOI&rdquo;
                    excluded customer acquisition costs, turning a $420M
                    GAAP loss into +$61M. Removed from amended filing
                    August 2011 after SEC review.
                  </p>
                  <p>
                    <sup className="text-stone-600">6</sup>{" "}
                    WeWork S-1 (2019). &ldquo;Community-adjusted
                    EBITDA&rdquo; excluded marketing, G&amp;A, and
                    development costs.
                  </p>
                  <p>
                    <sup className="text-stone-600">7</sup>{" "}
                    Vinson &amp; Elkins (2021). SEC enforcement analysis:
                    improper revenue recognition = 43% of accounting fraud
                    actions, 2014&ndash;2019.
                  </p>
                  <p>
                    <sup className="text-stone-600">8</sup>{" "}
                    ASC 606, effective for public companies fiscal years
                    beginning after Dec 15, 2017. Replaced ASC 605 and
                    industry-specific standards. See Deloitte,
                    &ldquo;Revenue recognition for SaaS and software
                    companies.&rdquo;
                  </p>
                  <p>
                    <sup className="text-stone-600">9</sup>{" "}
                    Dunbar, C.F. (1892). &ldquo;The Bank of
                    Venice.&rdquo; <em>Quarterly Journal of Economics</em>,
                    6(3), 308&ndash;335. On giro transfers and the
                    full-reserve mandate.
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
