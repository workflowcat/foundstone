import { FadeIn } from "@/components/animate";
import { NoteFigure } from "@/components/note-figure";
import Link from "next/link";

export default function WhatYourBankSeesNote() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <time className="text-xs tracking-wider text-stone-600">March 2026</time>
              <span className="text-stone-800">&middot;</span>
              <span className="text-xs tracking-wider text-stone-600">16 min read</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-cream">
              What your bank actually sees when they open your file
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-stone-400 text-lg leading-relaxed">
              A compliance officer at a European bank has between 40 and
              200 corporate files on their desk. Yours is one of them.
              Here is what they are looking at.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Body */}
      <article className="relative px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="space-y-6 text-stone-300 leading-relaxed text-[16px]">

              <p>
                A bank compliance review is simultaneously: a regulatory
                obligation the bank would prefer not to perform, a genuine
                risk management exercise, a jobs programme for compliance
                professionals, and the closest thing to a credit check that
                a corporate entity undergoes. All of these are true. Which
                one matters depends on who is reading your file and what kind
                of day they are having.
              </p>

              <p>
                The stated purpose of anti-money-laundering programmes is to
                prevent financial crime. The operational purpose is to manage
                the bank&apos;s regulatory risk.<sup className="text-stone-500 text-xs">1</sup> These
                are different goals. They produce different behaviours. A
                system designed to catch criminals would optimize for
                detection. A system designed to manage regulatory risk
                optimizes for documentation. The banking system optimizes
                for documentation.
              </p>

              <p>
                So the compliance officer reviewing your account is not
                really asking &ldquo;is this client doing anything
                wrong?&rdquo; They are asking &ldquo;if someone asks me why
                we have this client, can I explain it?&rdquo; Your job is
                to make that explanation easy to write.
              </p>

              <NoteFigure
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Emanuel_de_Witte_-_The_Courtyard_of_the_Old_Exchange_in_Amsterdam_-_WGA25798.jpg"
                alt="The Amsterdam Exchange interior by Emanuel de Witte"
                caption="The Beurs van Hendrick de Keyser, Amsterdam, Emanuel de Witte (c. 1653)."
                aspect="landscape"
              />

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The file
              </h2>

              <p>
                When a bank opens a corporate account, or when the periodic
                review comes around (every 1&ndash;3 years, depending on
                risk rating), a compliance officer assembles the customer
                file. For a holding company with subsidiaries across multiple
                jurisdictions, this file contains eight categories of
                documentation. The categories are the same everywhere. The
                interpretation varies by bank, by officer, by jurisdiction,
                and — honestly — by workload.
              </p>

              <div className="my-8 space-y-4">
                {[
                  { num: "1", title: "Constitutional documents", desc: "Certificate of incorporation, memorandum and articles of association, certificate of registered office, certificate of directors and secretary." },
                  { num: "2", title: "Ownership structure", desc: "Register of members, share certificates, chain of ownership up to the Ultimate Beneficial Owner (UBO). The EU's 4th AMLD (Directive 2015/849) sets the UBO threshold at 25% ownership or control. Below that, the bank documents senior management who exercise effective control." },
                  { num: "3", title: "Board and management", desc: "Passports and proof of address for all directors, company secretary, authorized signatories. CVs. Police clearance in some jurisdictions. The bank wants to understand why these specific people are running this specific company." },
                  { num: "4", title: "Source of funds", desc: "Where did the money come from? Contracts, invoices, wire confirmations, tax returns. This is a moment-in-time question about a specific transfer." },
                  { num: "5", title: "Source of wealth", desc: "Different question. How did the UBO accumulate their wealth over a lifetime? Employment history, business records, inheritance documentation. The bank is reconstructing a financial biography." },
                  { num: "6", title: "Business rationale", desc: "What does this company do and why does it exist here? Substance: real office, real employees, real board meetings, real decisions made in this jurisdiction." },
                  { num: "7", title: "Tax documentation", desc: "Tax residency certificates, returns, transfer pricing documentation. For jurisdictions with low corporate tax rates, the officer is looking for reasons beyond the rate." },
                  { num: "8", title: "Ongoing monitoring", desc: "Bank statements from other institutions, audited financials, transaction histories. The bank is comparing what you said you would do with what you are doing." },
                ].map((item) => (
                  <div key={item.num} className="pl-5 border-l border-white/[0.06]">
                    <p className="text-cream/90 text-sm font-medium">
                      <span className="text-amber/50 mr-2">{item.num}.</span>
                      {item.title}
                    </p>
                    <p className="text-stone-400 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p>
                A legitimate company with disorganized records and a
                suspicious company with good records look the same in a file.
                That is a problem with the system. It is also the system.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                Several things about enhanced due diligence
              </h2>

              <p>
                Standard customer due diligence (CDD) applies to most
                clients. Enhanced due diligence (EDD) is triggered by risk
                factors in the EU&apos;s 5th AMLD (Directive
                2018/843): high-risk third countries, multi-jurisdictional
                ownership, PEP connections, unusual transaction patterns,
                adverse media, crypto involvement, complex structures without
                clear commercial rationale.
              </p>

              <p>
                Several things are true at once about EDD:
              </p>

              <div className="my-6 space-y-4 pl-5 border-l border-amber/15">
                <p className="text-stone-400 text-[15px]">
                  A holding company with subsidiaries in multiple countries
                  will trigger EDD at most European banks. This is mechanical.
                  The risk scoring model does not know you. It knows your
                  structure.
                </p>
                <p className="text-stone-400 text-[15px]">
                  A completely clean operation can trigger every flag. A dirty
                  operation with a simple structure might not trigger any.
                  The system catches complexity, not crime. These are
                  correlated but not the same thing.
                </p>
                <p className="text-stone-400 text-[15px]">
                  EDD does not mean the bank suspects you. It means the bank
                  needs more paper before it can stop thinking about you.
                  Whether this is a reasonable system is a different question
                  from whether it is the system you are operating within.
                </p>
              </div>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The Medici problem
              </h2>

              <NoteFigure
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Pacioli.jpg"
                alt="Portrait of Luca Pacioli with geometric instruments, c. 1495"
                caption="Luca Pacioli, attr. Jacopo de' Barbari (c. 1495). The Summa was published the same year the Medici Bank collapsed."
                aspect="landscape"
              />

              <p>
                The Medici Bank operated from 1397 to 1494. Branches in
                Florence, Venice, Rome, Bruges, London, Avignon. Each branch
                a legally separate partnership. Giovanni di Bicci de&apos;
                Medici was the senior partner in each, providing capital.
                Junior partners ran the
                branches.<sup className="text-stone-500 text-xs">2</sup>
              </p>

              <p>
                The problem every multi-entity structure faces: how does the
                centre know what the branches are doing? The Medici used
                standardized bookkeeping, regular written reports, and
                physical audits from Florence. When the Rome branch reported
                losses it had hidden, the branch manager was replaced.
              </p>

              <p>
                A compliance review of a holding company is the same exercise
                performed by a stranger. The bank is Florence. Your
                subsidiaries are the branches. The question is whether
                intercompany agreements, management accounts, and board
                minutes tell a coherent story. The Medici kept a
                <em> libro segreto</em> — a secret ledger with the true
                consolidated position of the whole
                network.<sup className="text-stone-500 text-xs">3</sup> The
                modern equivalent is consolidated management accounts. When
                a bank asks for them and they don&apos;t exist, the bank has
                the same reaction Florence had when the Rome books didn&apos;t
                reconcile.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The asymmetry
              </h2>

              <p>
                Banks operate on what the Japanese call <em>sontaku</em> —
                acting in accordance with what you believe authority wants,
                without being explicitly
                told.<sup className="text-stone-500 text-xs">4</sup> Regulators
                issue guidelines, not lists. Banks interpret the guidelines
                conservatively. The penalty for being too loose: loss of
                banking licence. The penalty for being too strict: lost
                revenue from rejected clients.
              </p>

              <p>
                A compliance officer will reject a probably-fine file rather
                than approve a might-be-problematic one. This is rational
                given the incentives. Whether it is rational for the broader
                economy is a question that regulators, banks, and clients
                would each answer differently, and they would all be partly
                right.
              </p>

              <p>
                What &ldquo;looks legitimate&rdquo; in practice:
              </p>

              <div className="my-8 space-y-3">
                {[
                  "Corporate structure with a commercial rationale explainable in two sentences.",
                  "UBO chain fully documented. No gaps, no nominee layers that cannot be penetrated.",
                  "Source of funds traceable to commercial activity with supporting documents.",
                  "Substance in the jurisdiction: employees, office, board meetings that happen, decisions made there.",
                  "Intercompany transactions documented with transfer pricing that a tax authority would accept.",
                  "Management accounts that exist, are current, and match the bank statements.",
                  "Directors who can explain the business without reading from a script.",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3 text-stone-400 text-[15px]">
                    <span className="w-1 h-1 rounded-full bg-amber/40 mt-2 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                Jurisdiction and institutional memory
              </h2>

              <p>
                Some jurisdictions carry weight that is not in the
                regulations. Ireland after the Celtic Tiger. Latvia after
                ABLV (2018, closed for AML failures). Estonia after Danske
                Bank (€200 billion in suspicious transactions through its
                Estonian branch, 2007&ndash;2015).<sup className="text-stone-500 text-xs">5</sup> Cyprus
                after the 2013 bail-in (47.5% of uninsured Bank of Cyprus
                deposits converted to equity; Laiki depositors recovered
                roughly six cents on the euro).
              </p>

              <p>
                None of these jurisdictions are formally suspect. All are EU
                member states with FATF-compliant AML frameworks that have
                been significantly strengthened since the events in question.
                But a compliance officer reviewing a file from one of these
                jurisdictions is slightly more attentive. How much more
                attentive depends on the officer, the bank, and — again —
                the day. We don&apos;t have great data on this. The effect
                is real but not quantified, which is itself part of the
                problem.
              </p>

              <NoteFigure
                src="https://upload.wikimedia.org/wikipedia/commons/6/6f/The_Return_of_the_Fleet_of_the_Dutch_East_India_Company_%28Louvre%2C_INV_987%29.jpg"
                alt="Return of the VOC Fleet by Ludolf Bakhuizen, 1675"
                caption="Return of the VOC Fleet, Ludolf Bakhuizen (1675), Louvre."
                aspect="landscape"
              />

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The 72-hour drill
              </h2>

              <p>
                At some point a bank will email requesting updated
                documentation. Polite email. Long list. Deadline
                of 5&ndash;15 business days, sometimes 72 hours if it
                originates from the bank&apos;s own regulatory review.
              </p>

              <p>
                The request: updated passports and proof of address for all
                directors and UBOs. Certificate of good standing. Audited
                financials. Current-year management accounts. Board
                resolution confirming authorized signatories. Corporate
                structure chart. Source of funds for large deposits.
                Description of business activities and material changes.
              </p>

              <p>
                Companies that produce this within 48 hours get renewed.
                Companies that take three weeks get escalated, which can
                mean account restrictions or a closure notice with
                60&ndash;90 days to find a new bank.
              </p>

              <p>
                The difference is a document register with expiry dates, a
                shared drive with a folder structure, a calendar reminder 30
                days before each director&apos;s proof of address expires.
                Not sophisticated. Not interesting. Effective.
              </p>

              <p>
                There is probably a version of this system that is automated,
                cheaper, less dependent on individual diligence, and more
                fair. We don&apos;t have it yet. In the meantime, the
                calendar reminder is what works.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The Lloyd&apos;s principle
              </h2>

              <p>
                Lloyd&apos;s of London started in a coffeehouse in
                1689.<sup className="text-stone-500 text-xs">6</sup> Merchants
                presented information about their ships to underwriters who
                decided whether to accept the risk. In 1764, Lloyd&apos;s
                created the Register Book — standardized documentation and
                grading for the physical condition of merchant vessels. An
                underwriter could assess risk without inspecting the ship.
                The documentation became the trust mechanism.
              </p>

              <p>
                A compliance review operates on the same principle. The
                officer cannot visit your offices or attend your board
                meetings. They assess risk from the file. The file is the
                ship inspection.
              </p>

              <NoteFigure
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Hendrick_Cornelisz._Vroom_001.jpg"
                alt="Merchant vessels by Hendrick Cornelisz. Vroom"
                caption="Merchant vessels, Hendrick Cornelisz. Vroom. Lloyd's graded ships like these from 1764. The grading system has been refined for 260 years. The principle has not."
                aspect="landscape"
              />

              <p>
                Lloyd&apos;s Register still exists. Still inspects ships.
                260 years of refinement. The principle — standardized
                documentation as a proxy for direct inspection — is
                unchanged.
              </p>

              <p>
                In 2024, financial institutions globally filed approximately
                4.7 million suspicious activity
                reports.<sup className="text-stone-500 text-xs">7</sup> Each
                SAR is confidential under applicable law. The institution
                cannot tell you a report was filed. The subject may never
                know. A SAR does not mean the account will be closed. It
                means someone looked at the file and could not construct a
                satisfactory explanation for a pattern they observed.
              </p>

              <p>
                4.7 million times, someone opened a file and the paper
                did not answer the question.
              </p>

              <p>
                Whether the question was the right one to ask — that is a
                longer conversation.
              </p>

              {/* Sources */}
              <div className="mt-16 pt-8 border-t border-white/[0.06]">
                <h3 className="text-xs tracking-[0.2em] uppercase text-stone-600 mb-6">
                  Sources &amp; references
                </h3>
                <div className="space-y-3 text-stone-500 text-[13px] leading-relaxed">
                  <p>
                    <sup className="text-stone-600">1</sup>{" "}
                    McKenzie, P. (2023). &ldquo;KYC and AML: Beyond the
                    Acronyms.&rdquo; <em>Bits About Money.</em>
                  </p>
                  <p>
                    <sup className="text-stone-600">2</sup>{" "}
                    de Roover, R. (1963). <em>The Rise and Decline of the
                    Medici Bank, 1397&ndash;1494.</em> Harvard University Press.
                  </p>
                  <p>
                    <sup className="text-stone-600">3</sup>{" "}
                    de Roover, R. (1956). &ldquo;The Development of Accounting
                    Prior to Luca Pacioli.&rdquo; In Littleton &amp; Yamey
                    (eds.), <em>Studies in the History of Accounting.</em>
                  </p>
                  <p>
                    <sup className="text-stone-600">4</sup>{" "}
                    McKenzie, P. (2024). &ldquo;Debanking and
                    Debunking.&rdquo; <em>Bits About Money.</em>
                  </p>
                  <p>
                    <sup className="text-stone-600">5</sup>{" "}
                    Bruun &amp; Hjejle (2018). <em>Report on the Non-Resident
                    Portfolio at Danske Bank&apos;s Estonian Branch.</em>
                  </p>
                  <p>
                    <sup className="text-stone-600">6</sup>{" "}
                    Wright, C. &amp; Fayle, C.E. (1928). <em>A History of
                    Lloyd&apos;s.</em> Macmillan.
                  </p>
                  <p>
                    <sup className="text-stone-600">7</sup>{" "}
                    FinCEN (2025). <em>BSA/AML Annual Statistics.</em>
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
