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
              <span className="text-xs tracking-wider text-stone-600">12 min read</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-cream">
              Why the Venetian Republic&apos;s bookkeeping system matters for modern SaaS companies
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-stone-400 text-lg leading-relaxed">
              The longest-lived operational technology in business is 530 years
              old, and you use it every day without thinking about it.
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
            <div className="prose-foundstone space-y-6 text-stone-300 leading-relaxed text-[16px]">
              <p>
                In November 1494, a Franciscan friar named Luca Pacioli
                published a 615-page mathematics textbook in Venice. 27
                pages described how to do bookkeeping. Those 27 pages are
                still, functionally, how bookkeeping works. Everything else
                from 1494 is in a museum.
              </p>

              <p>
                Pacioli did not invent double-entry. He documented what he
                called &ldquo;the method of Venice&rdquo; — a system the
                merchants had been running for at least two centuries. The
                earliest surviving records are from 1299, a Florentine firm
                called Farolfi. What Pacioli did was write it down clearly
                enough that you could learn it from the book instead of from
                a Venetian merchant. Venice had the printing press. Within
                decades the method had spread across Europe.
              </p>

              <p>
                The same thing happens with spreadsheets, cloud accounting,
                now probably automated bookkeeping. Working knowledge exists
                in practice for a long time, then someone packages it with
                a distribution technology and suddenly everyone has it. We
                don&apos;t have great data yet on what the current cycle
                changes. But the pattern is old.
              </p>

              <NoteFigure
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Pacioli.jpg"
                alt="Portrait of Luca Pacioli with geometric instruments, attributed to Jacopo de' Barbari, c. 1495"
                caption="Luca Pacioli, attr. Jacopo de&rsquo; Barbari, c. 1495. Museo di Capodimonte, Naples."
                aspect="landscape"
              />

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                How it works
              </h2>

              <p>
                Venetian bookkeeping used three books. The <em>memoriale</em> was
                a diary — every transaction as it happened, in plain
                language. The <em>giornale</em> translated those into
                formal entries with explicit debits and credits.
                The <em>quaderno</em>, the master ledger, organized
                everything by account.
              </p>

              <p>
                Every account had two columns: <em>dare</em> (to give,
                the left side) and <em>avere</em> (to have, the right
                side). Every transaction touched at least two accounts.
                You buy spices for cash: spice inventory goes up on the
                left, cash goes down on the right. The sum of all left
                columns always equals the sum of all right columns.
              </p>

              <p>
                This is not a convention someone decided on. It is a
                mathematical identity: assets = liabilities + equity. Every
                transaction preserves the equation. If your books do not
                balance, there is an error, and you can find it without
                understanding any of the individual entries. Your bookkeeper
                does not need to know what the business does in order to
                tell you something is wrong. Most software built in the
                last twenty years does not self-check this cleanly.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                Cash is not revenue
              </h2>

              <p>
                If you have run a company, you have probably looked at your
                bank balance and felt good about it, and then someone in
                finance told you that most of that money is not actually
                yours yet. This is the deferred revenue problem, and the
                Venetians had already solved it.
              </p>

              <p>
                A merchant who received advance payment for goods he had not
                yet delivered recorded it as a liability — an obligation.
                The cash went into one account. The obligation went into
                another. They only met when he actually shipped the goods.
                In SaaS terms: you get a $120,000 annual prepayment, cash
                goes up $120,000, deferred revenue (a liability) goes up
                $120,000. Each month you deliver the service, $10,000 moves
                from the liability column to recognized revenue. Salesforce
                carries billions in deferred revenue at any given time.
                The accounting structure that makes this trackable is
                Pacioli&apos;s.
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
                cycle, defined revenue amount, can be expanded or cancelled.
                New MRR, expansion MRR, churned MRR, net revenue retention —
                these are categories for flows into and out of what are
                essentially subscription voyage accounts. The vocabulary is
                different. The ledger entries would look the same.
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
                If you showed Pacioli the general ledger of a modern B2B
                company, he would know what he was looking at. Chart of
                accounts, trial balance (he called it the <em>summa
                summarum</em>), receivables, payables, capital account
                (his <em>conto del cavedal</em>). Stock-based compensation
                would confuse him. The mechanic of recording every event
                twice so the system catches its own errors would not.
              </p>

              <p>
                ASC 606, the current US revenue recognition standard, works
                like this: identify the contract, identify what you owe,
                set the price, allocate it, recognize revenue when you
                deliver. A Venetian merchant following Pacioli&apos;s
                instructions would recognize every step. The compliance
                paperwork around it is new. The accounting is not.
              </p>

              <p>
                Venice ran on infrastructure the merchants themselves did
                not build: the colleganza partnership structure, the Banco
                di Rialto (a public bank for transfers between accounts),
                regulated marine insurance, mandatory bookkeeping.
                Individual merchants came and went. In 1587 the state
                established the Banco della Piazza di Rialto — full-reserve,
                no loans allowed, mandated for wholesale settlement. The
                merchants used it. They did not maintain it. It outlasted
                all of them.
              </p>

              <p>
                GAAP, auditing standards, stock exchanges, banking
                regulation — different words for the same function. The
                plumbing changes. The need for plumbing does not.
              </p>
            </div>
          </FadeIn>

          {/* Back link */}
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
