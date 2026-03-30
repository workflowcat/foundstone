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
                Double-entry bookkeeping is 530 years old, mass-produced
                since 1494, and functionally unchanged. This is unusual.
                Most technologies from the 1490s are in museums. This one
                runs every company on earth.
              </p>

              <p>
                Several things are true about it at once: it is a
                mathematical identity that checks itself automatically, it
                is an institutional trust mechanism that makes strangers
                willing to do business, and it is a daily practice that most
                of the people performing it do not fully understand. All
                three matter. The interesting question is which one kept the
                system alive for five centuries.
              </p>

              <NoteFigure
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Pacioli.jpg"
                alt="Portrait of Luca Pacioli with geometric instruments, attributed to Jacopo de' Barbari, c. 1495"
                caption="Luca Pacioli, attr. Jacopo de&rsquo; Barbari, c. 1495. Museo di Capodimonte, Naples."
                aspect="landscape"
              />

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                What Pacioli actually did
              </h2>

              <p>
                In November 1494, a Franciscan friar named Luca Pacioli
                published a 615-page mathematics textbook in Venice. 27
                pages described double-entry bookkeeping. He did not invent
                it. He documented what he called &ldquo;the method of
                Venice&rdquo; — a system the merchants had been using for
                at least two centuries. The earliest surviving records date
                to 1299, from a Florentine firm called Farolfi.
              </p>

              <p>
                What Pacioli did was write it down clearly enough that
                anyone could learn it. Venice in the 1490s had the printing
                press and the commercial density. A mature practice met a
                new distribution technology. Within decades the Venetian
                method had spread across Europe. This pattern — working
                knowledge that exists in practice for a long time before
                someone codifies and distributes it — repeats. Spreadsheets.
                Cloud accounting. We are probably in the middle of another
                cycle now with automated bookkeeping and we don&apos;t have
                good data yet on what it changes.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The three books
              </h2>

              <p>
                The <em>memoriale</em>: a raw diary. Every transaction as
                it happened, narrative form, who, what, when, how much.
                The <em>giornale</em>: those narratives translated into
                formal entries with explicit debit and credit designations.
                The <em>quaderno</em> (master ledger): everything organized
                by account.
              </p>

              <p>
                Each account had two sides: <em>dare</em> (to give) and
                <em> avere</em> (to have). Every transaction touched at
                least two accounts. Merchant buys spices for cash: inventory
                debited, cash credited. Total debits always equal total
                credits.
              </p>

              <p>
                This is not a convention. It is a mathematical identity.
                Assets = liabilities + equity, by definition. Every
                transaction preserves the equation. If the books don&apos;t
                balance, something is wrong, and you can detect it
                mechanically. You do not need to understand the substance of
                each entry to know an error exists. This is a remarkable
                property for a system designed in the 13th century. Most
                modern software does not self-check this reliably.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                Cash and earning
              </h2>

              <p>
                Receiving money and earning money are different events. This
                is obvious when stated. It is routinely confused in practice.
              </p>

              <p>
                A Venetian merchant who received advance payment for
                undelivered goods recorded it as an obligation — a liability.
                Cash hit one account. The obligation hit another. They
                reconciled when performance occurred. A 15th-century spice
                trader understood the distinction that most founders mix up
                when they look at their bank balance and think they know
                their revenue.
              </p>

              <p>
                SaaS accounting calls this deferred revenue. Annual
                prepayment of $120,000: cash up by $120,000, deferred
                revenue (liability) up by $120,000. Each month, $10,000
                moves from liability to recognized revenue as the service
                is delivered. Salesforce carries billions in deferred
                revenue at any given time. The structural discipline that
                makes this trackable is the same one Pacioli documented.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                Voyage accounts
              </h2>

              <p>
                Venetian merchants treated each trading voyage as its own
                profit centre. Open an account, accumulate costs — cargo,
                insurance, crew wages, port fees, bribes — recognize revenue
                on sale, close the account with a profit or loss.
              </p>

              <p>
                A SaaS subscription is the same structure: start date,
                cycle, defined revenue, expandable or terminable. New MRR,
                expansion MRR, churned MRR, net revenue retention — a
                categorization scheme for flows into and out of subscription
                voyage accounts. We use different words. The ledger entries
                would map.
              </p>

              <NoteFigure
                src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Pacioli_-_Summa_de_arithmetica_geometria%2C_1523_-_1363187.jpeg"
                alt="Page from Pacioli's Summa de Arithmetica"
                caption="Interior page from the Summa de Arithmetica. 27 of 615 pages."
                aspect="portrait"
              />

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                What survived
              </h2>

              <p>
                Show Pacioli a modern general ledger and he would recognize
                the chart of accounts, the trial balance (his <em>summa
                summarum</em>), receivables, payables, the capital account
                (his <em>conto del cavedal</em>). Stock-based compensation
                and goodwill would confuse him. The core mechanic — record
                every event in two places so the system checks itself —
                would not.
              </p>

              <p>
                ASC 606 (current US revenue recognition standard): identify
                the contract, identify performance obligations, determine
                price, allocate it, recognize revenue when obligations are
                satisfied. A Venetian merchant would recognize every step.
                The compliance layer is new. The accounting logic is not.
              </p>

              <p>
                Venice&apos;s commercial success ran on infrastructure that
                individual merchants did not build and mostly did not think
                about: the colleganza partnership structure, the Banco di
                Rialto (public bank for giro transfers), regulated marine
                insurance, mandatory bookkeeping. The merchants came and
                went. The Banco della Piazza di Rialto was established in
                1587 — a full-reserve public bank, forbidden from making
                loans, mandated by the state for wholesale settlement. The
                infrastructure outlasted every merchant who used it.
              </p>

              <p>
                GAAP, auditing standards, stock exchanges, banking
                regulation. Different vocabulary. Same function. Whether
                the current version of this infrastructure is the right
                one, or merely the one we have — that question is also
                530 years old.
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
