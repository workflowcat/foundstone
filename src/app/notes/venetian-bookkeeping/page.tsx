import { FadeIn } from "@/components/animate";
import { LedgerIllustration } from "@/components/note-illustrations";
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
                published a 615-page mathematics textbook in Venice. Buried
                inside it were 27 pages that would become the most durable
                technology in the history of business: a description of
                double-entry bookkeeping.
              </p>

              <p>
                Pacioli didn&apos;t invent it. He was careful to note that he
                was documenting &ldquo;the method of Venice&rdquo; &mdash; a
                system that Venetian merchants had been using for at least two
                centuries. The earliest surviving double-entry records date to
                1299, from a Florentine firm called Farolfi. What Pacioli did
                was write it down clearly enough that anyone could learn it.
              </p>

              <p>
                The timing was not accidental. Venice in the 1490s was the
                centre of European commerce, and the printing press had just
                made it possible to distribute knowledge at scale. A mature
                practice met a new distribution technology. Within decades,
                the Venetian method had spread across Europe.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The three books
              </h2>

              <p>
                Venetian bookkeeping required three books. The <em>memoriale</em> was
                a raw diary &mdash; every transaction recorded as it happened,
                in narrative form, with full details of who, what, when, and
                how much. The <em>giornale</em> translated those narratives
                into formal entries with explicit debit and credit
                designations. The <em>quaderno</em>, or master ledger, organized
                everything by account.
              </p>

              <p>
                Each account in the ledger had two sides: <em>dare</em> (to give,
                the left) and <em>avere</em> (to have, the right). Every
                transaction touched at least two accounts. When a merchant
                bought spices for cash, his inventory account was debited and
                his cash account was credited. The total of all debits always
                equalled the total of all credits.
              </p>

              <p>
                This isn&apos;t a convention. It&apos;s a mathematical
                identity. Assets equal liabilities plus equity, by
                definition. Every transaction preserves this equation. If
                your books don&apos;t balance, something is wrong &mdash; and
                you can detect it mechanically, without needing to understand
                the substance of every entry.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                What the Venetians understood about cash
              </h2>

              <p>
                Most people still get this wrong: <strong className="text-cream/90">receiving money
                is not the same as earning it.</strong>
              </p>

              <p>
                If a merchant received an advance payment for goods not yet
                delivered, he understood himself to have an obligation
                &mdash; a liability &mdash; until he fulfilled the order. The
                cash hit one account; the obligation hit another. They were
                only reconciled when the performance occurred.
              </p>

              <p>
                Modern SaaS accounting calls this deferred revenue. When a company receives an annual prepayment of
                $120,000 for a subscription, cash increases by $120,000 and
                deferred revenue (a liability) increases by $120,000. Each
                month, as the service is delivered, $10,000 moves from
                deferred revenue to recognized revenue.
              </p>

              <p>
                A company like Salesforce carries billions in deferred revenue
                at any given time. Without the structural discipline that
                Pacioli documented, tracking which portions of which payments
                have been earned would be impossible.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The voyage account and MRR
              </h2>

              <p>
                Venetian merchants treated each trading voyage as a discrete
                profit centre. They opened an account, accumulated all
                costs &mdash; cargo, insurance, crew wages, port fees,
                bribes &mdash; recognized revenue upon sale, and closed the
                account with a profit or loss.
              </p>

              <p>
                A SaaS subscription is structurally the same thing: start
                date, cycle, defined revenue, expandable or terminable.
                New MRR, expansion MRR, churned MRR, net revenue
                retention? A categorization scheme for flows into and out
                of subscription voyage accounts.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                What Pacioli would recognize
              </h2>

              <p>
                Show Pacioli the general ledger of a modern B2B company and
                he would recognize the chart of accounts, the trial balance
                (his <em>summa summarum</em>), accounts receivable and
                payable, the capital account (his <em>conto del cavedal</em>).
                Depreciation, stock-based compensation, goodwill, tax
                accounting would confuse him. But the mechanical discipline
                of recording every economic event in two places, so the
                system checks itself? Unchanged in 530 years.
              </p>

              <p>
                ASC 606, the current US revenue recognition standard, maps
                directly to Venetian concepts: identify the contract,
                identify performance obligations, determine the price,
                allocate it, recognize revenue when obligations are
                satisfied. A Venetian merchant would recognize every step.
                The formalization is modern. The logic is not.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The infrastructure lesson
              </h2>

              <p>
                Venice&apos;s commercial success ran on infrastructure: the
                colleganza partnership structure, the Banco di Rialto
                (a public bank for giro transfers between accounts),
                regulated marine insurance, mandatory bookkeeping. These
                systems let trade scale. GAAP, auditing standards, stock
                exchanges, banking regulation serve the same function today.
                Commercial innovation depends on institutional plumbing.
              </p>

              <p className="text-amber/70 italic">
                Someone has to build the infrastructure. The merchants
                want to trade.
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
