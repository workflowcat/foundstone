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
              <time className="text-xs tracking-wider text-stone-600">March 2025</time>
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
                The purpose of an anti-money-laundering programme is not to
                prevent money laundering. The purpose is to manage the
                bank&apos;s regulatory risk.<sup className="text-stone-500 text-xs">1</sup> These
                are different goals, and understanding the difference explains
                almost everything about how banks treat their corporate
                clients.
              </p>

              <p>
                A bank does not care, in the first instance, whether you are a
                good person. It cares whether your file, when reviewed by a
                regulator, will cause the bank a problem. The compliance
                officer reviewing your account is not asking &ldquo;is this
                client doing anything wrong?&rdquo; They are asking &ldquo;if
                someone asks me why we have this client, can I explain it in a
                way that sounds reasonable?&rdquo;
              </p>

              <p>
                This distinction determines what &ldquo;good
                documentation&rdquo; actually means. Good documentation is
                documentation that makes it easy for a compliance officer to
                write a memo explaining why you are legitimate. The compliance
                officer needs to pass an audit. Your job is to make their
                job easy.
              </p>

              <NoteFigure
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Emanuel_de_Witte_-_The_Courtyard_of_the_Old_Exchange_in_Amsterdam_-_WGA25798.jpg"
                alt="The Amsterdam Exchange interior by Emanuel de Witte"
                caption="The courtyard of the Beurs van Hendrick de Keyser, Amsterdam, by Emanuel de Witte (c. 1653). Commercial trust has required institutional verification for as long as commerce has existed."
                aspect="landscape"
              />

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The file
              </h2>

              <p>
                When a bank opens a corporate account, or when the periodic
                review cycle comes around (typically every 1&ndash;3 years,
                depending on risk rating), a compliance officer assembles
                the customer file. For a holding company with subsidiaries
                across multiple jurisdictions, this file contains eight
                categories of documentation.
              </p>

              <div className="my-8 space-y-4">
                {[
                  { num: "1", title: "Constitutional documents", desc: "Certificate of incorporation, memorandum and articles of association, certificate of registered office, certificate of directors and secretary. Issued by the relevant registrar in the jurisdiction of incorporation." },
                  { num: "2", title: "Ownership structure", desc: "Register of members, share certificates, and the chain of ownership up to the Ultimate Beneficial Owner (UBO). The EU's 4th Anti-Money Laundering Directive (Directive 2015/849) sets the UBO threshold at 25% ownership or control. If nobody holds 25%, the bank documents the senior management who exercise effective control." },
                  { num: "3", title: "Board and management", desc: "Passports and proof of address for all directors, company secretary, authorized signatories. Police clearance certificates in some jurisdictions. CVs that explain why these individuals are running this company." },
                  { num: "4", title: "Source of funds", desc: "Where specifically did the money in this account come from? The bank wants contracts, invoices, wire transfer confirmations, tax returns. Source of funds is a moment-in-time question about a specific deposit or transfer." },
                  { num: "5", title: "Source of wealth", desc: "Different from source of funds. This is a lifetime question: how did the UBO accumulate their wealth? Employment history, business ownership records, inheritance documentation, investment portfolios. The bank is reconstructing a financial biography." },
                  { num: "6", title: "Business rationale", desc: "What does this company do and why does it exist in this jurisdiction? The compliance officer looks for substance: real office, real employees, real activity. Board minutes, management accounts, intercompany agreements." },
                  { num: "7", title: "Tax documentation", desc: "Tax residency certificates, tax returns, transfer pricing documentation if intercompany transactions exist. For jurisdictions with favourable corporate tax rates, the officer looks for evidence of substance beyond the rate." },
                  { num: "8", title: "Ongoing monitoring material", desc: "Bank statements from other institutions, audited financial statements, transaction histories. The bank is comparing what you told them you would do with what you are actually doing." },
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
                The difference between a file that gets approved in a day and
                one that sits in a queue for three months is rarely the quality
                of the business. It is the quality of the documentation. A
                legitimate company with disorganized records looks identical
                to a suspicious company when someone is reading a file.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                What triggers enhanced due diligence
              </h2>

              <p>
                Standard customer due diligence (CDD) applies to most
                corporate clients. Enhanced due diligence (EDD) is triggered
                by specific risk factors defined in the EU&apos;s 5th
                Anti-Money Laundering Directive (Directive 2018/843),
                transposed into national law across member states. The
                triggers:
              </p>

              <p>
                The client is established in a high-risk third country (the
                FATF and EU each maintain lists; they change periodically).
                The ownership structure involves multiple jurisdictions. The
                client is a Politically Exposed Person or associated with one.
                The transaction pattern is unusual relative to the stated
                business purpose. There are adverse media results. The
                business involves cash-intensive sectors, cryptocurrency, or
                complex corporate structures without clear commercial
                rationale.
              </p>

              <p>
                A holding company with subsidiaries across multiple
                jurisdictions will trigger EDD at most European banks. This
                is mechanical — a consequence of the risk scoring model, not
                a judgement on the company. Multi-jurisdictional structures
                score higher. Complex corporate structures score higher. A
                completely clean operation can trigger every flag.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The Medici problem
              </h2>

              <NoteFigure
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Pacioli.jpg"
                alt="Portrait of Luca Pacioli with geometric instruments, c. 1495"
                caption="Luca Pacioli, attr. Jacopo de' Barbari (c. 1495). Pacioli published the Summa de Arithmetica in 1494 — the same year the Medici Bank collapsed. The bookkeeping system he documented outlived the institution that perfected it."
                aspect="landscape"
              />

              <p>
                The Medici Bank operated from 1397 to 1494, with branches in
                Florence, Venice, Rome, Bruges, London, Avignon, and several
                other cities. Each branch was structured as a legally separate
                partnership. Giovanni di Bicci de&apos; Medici and his
                descendants were the senior partners in each, providing
                capital and taking the majority of profits. Junior partners
                ran the branches.<sup className="text-stone-500 text-xs">2</sup>
              </p>

              <p>
                This created a problem that every multi-entity structure
                still faces: how does the centre know what the branches are
                doing? The Medici solved it with standardized bookkeeping,
                regular written reports, and physical audits — a
                representative from Florence would visit a branch and inspect
                the books. The Rome branch once reported losses that
                Florence had not been told about. The branch manager was
                replaced.
              </p>

              <p>
                A modern bank compliance review of a holding company is the
                same exercise. The bank is Florence. The subsidiaries are the
                branches. The compliance officer is the auditor who shows up
                and asks to see the books. The question is whether
                intercompany agreements, management accounts, and board
                minutes tell a coherent story about money flowing between
                entities for documented commercial reasons.
              </p>

              <p>
                The Medici kept a <em>libro segreto</em> — a secret ledger
                that recorded the true financial position of the whole
                network, including intercompany balances and profit
                allocations that the individual branch books did not
                show.<sup className="text-stone-500 text-xs">3</sup> The
                equivalent today is consolidated management accounts. When a
                bank asks for consolidated financials and they cannot be
                produced, the company has the same problem the Medici
                branches had when Florence came asking questions and the
                books did not reconcile.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                What &ldquo;looks legitimate&rdquo; means in practice
              </h2>

              <p>
                Banks operate on what the Japanese call <em>sontaku</em> —
                acting in accordance with what you believe authority wants,
                without being explicitly told.<sup className="text-stone-500 text-xs">4</sup> Regulators
                do not issue a list of which clients to accept or reject.
                They issue guidelines. Banks interpret the guidelines
                conservatively, because the penalty for being too loose is
                catastrophic (loss of banking licence) while the penalty for
                being too strict is merely commercial (lost revenue from
                rejected clients).
              </p>

              <p>
                This asymmetry determines everything. A compliance officer
                will reject a file that is probably fine rather than approve
                one that might be problematic. The downside is not symmetric.
              </p>

              <p>
                In practice, &ldquo;looks legitimate&rdquo; means:
              </p>

              <div className="my-8 space-y-3">
                {[
                  "The corporate structure has a clear commercial rationale that can be explained in two sentences.",
                  "The UBO chain is fully documented with no gaps or nominee layers that cannot be penetrated.",
                  "Source of funds traces back to identifiable commercial activity with supporting contracts and bank statements.",
                  "The company has substance in its jurisdiction of registration: employees, an office, board meetings that actually happen, decisions that are actually made there.",
                  "Intercompany transactions are documented with transfer pricing policies that a tax authority would accept.",
                  "Management accounts exist, are current, and tell the same story as the bank statements.",
                  "The directors can explain the business without reading from a script.",
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
                Some jurisdictions carry institutional memory that affects how
                compliance officers read a file. Ireland after the Celtic
                Tiger collapse. Latvia after ABLV Bank&apos;s closure in 2018
                for AML failures. Estonia after the Danske Bank scandal
                (€200 billion in suspicious transactions through its Estonian
                branch between 2007 and 2015).<sup className="text-stone-500 text-xs">5</sup> Cyprus
                after the 2013 bail-in, when Bank of Cyprus depositors with
                more than €100,000 had 47.5% of their uninsured deposits
                converted to equity and Laiki Bank depositors recovered
                approximately six cents on the euro.
              </p>

              <p>
                None of these events made these jurisdictions formally suspect.
                All remain EU member states, fully compliant with FATF
                recommendations, with AML frameworks that have been
                significantly strengthened since the events in question. But
                institutional memory persists. A compliance officer reviewing
                a file from a jurisdiction that has had a banking crisis is
                slightly more attentive. This is not written in any
                regulation.
              </p>

              <p>
                The practical effect: companies registered in these
                jurisdictions that maintain institutional-grade documentation
                are making a stronger implicit argument than companies in
                jurisdictions where nobody expects it. The higher the
                perceived risk, the more the quality of the file matters.
              </p>

              <NoteFigure
                src="https://upload.wikimedia.org/wikipedia/commons/6/6f/The_Return_of_the_Fleet_of_the_Dutch_East_India_Company_%28Louvre%2C_INV_987%29.jpg"
                alt="Return of the VOC Fleet by Ludolf Bakhuizen, 1675"
                caption="Return of the VOC Fleet, Ludolf Bakhuizen (1675), Louvre. The VOC operated across a dozen jurisdictions. Its accounting never caught up with its geography."
                aspect="landscape"
              />

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The 72-hour drill
              </h2>

              <p>
                At some point a bank will send an email requesting updated
                documentation. It will be polite. It will contain a list.
                There will be a deadline — typically 5&ndash;15 business
                days, sometimes 72 hours if the request originates from the
                bank&apos;s own regulatory review.
              </p>

              <p>
                The request, in approximate order of frequency: updated
                passports and proof of address for all directors and UBOs.
                Current certificate of good standing. Most recent audited
                financial statements. Management accounts for the current
                year. Board resolution confirming authorized signatories.
                Updated corporate structure chart. Source of funds
                documentation for large deposits in the review period.
                Description of business activities and any material changes
                since the last review.
              </p>

              <p>
                Companies that produce this within 48 hours get renewed
                without further questions. Companies that take three weeks
                get escalated to a senior compliance review, which may result
                in account restrictions or, in the worst case, a notice of
                closure with 60&ndash;90 days to find a new banking
                relationship.
              </p>

              <p>
                The difference is whether someone set up a system for keeping
                corporate documentation current and immediately producible.
                A register of documents with expiry dates. A shared drive
                with a consistent folder structure. A calendar reminder 30
                days before each director&apos;s proof of address expires.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The Lloyd&apos;s principle
              </h2>

              <p>
                Lloyd&apos;s of London began in Edward Lloyd&apos;s
                coffeehouse in 1689. Merchants and shipowners seeking
                insurance would present information about their vessel, cargo,
                and voyage to underwriters who sat in the coffeehouse and
                decided whether to accept the risk and at what
                premium.<sup className="text-stone-500 text-xs">6</sup>
              </p>

              <p>
                In 1764, Lloyd&apos;s established the Register Book — the
                first standardized system for documenting and classifying
                merchant vessels. Ships were inspected, graded, and the
                grades published. An underwriter could assess risk without
                personally inspecting the ship. The documentation became the
                trust mechanism.
              </p>

              <NoteFigure
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Hendrick_Cornelisz._Vroom_001.jpg"
                alt="VOC ships at sea by Hendrick Cornelisz. Vroom"
                caption="Merchant vessels, Hendrick Cornelisz. Vroom. Lloyd's Register graded ships like these beginning in 1764. The principle: standardized documentation as a proxy for direct inspection."
                aspect="landscape"
              />

              <p>
                A bank compliance review operates on the same principle. The
                compliance officer cannot visit your offices, attend your
                board meetings, or audit your transactions in person. They
                assess risk based entirely on the documentation in your file.
                The file is the ship inspection. The grade is the risk rating.
              </p>

              <p>
                Lloyd&apos;s Register survives today as an independent
                classification society. It still inspects ships. The system
                has been refined over 260 years. The principle is unchanged:
                standardized documentation as a proxy for direct inspection.
              </p>

              <p>
                In 2024, financial institutions globally filed approximately
                4.7 million suspicious activity reports.<sup className="text-stone-500 text-xs">7</sup> Each
                SAR is confidential under applicable law (12 CFR 21.11(k) in
                the US; equivalent provisions across the EU under Directive
                2015/849, Article 39). The institution cannot tell you a
                report was filed. The subject may never know. A SAR does not
                necessarily mean the account will be closed. It means someone
                in the compliance department looked at the file and could not,
                with the documentation available, construct a satisfactory
                explanation for a pattern they observed.
              </p>

              <p>
                4.7 million times, in a single year, someone opened a file
                and the paper did not answer the question.
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
                    Acronyms.&rdquo; <em>Bits About Money.</em> On the
                    distinction between preventing financial crime and managing
                    regulatory exposure.
                  </p>
                  <p>
                    <sup className="text-stone-600">2</sup>{" "}
                    de Roover, R. (1963). <em>The Rise and Decline of the
                    Medici Bank, 1397&ndash;1494.</em> Harvard University Press.
                    The standard academic history of the Medici banking network.
                  </p>
                  <p>
                    <sup className="text-stone-600">3</sup>{" "}
                    de Roover, R. (1956). &ldquo;The Development of Accounting
                    Prior to Luca Pacioli According to the Account-books of
                    Medieval Merchants.&rdquo; In Littleton &amp; Yamey (eds.),
                    <em> Studies in the History of Accounting.</em> On the
                    <em> libro segreto</em> and Medici consolidated reporting.
                  </p>
                  <p>
                    <sup className="text-stone-600">4</sup>{" "}
                    McKenzie, P. (2024). &ldquo;Debanking and
                    Debunking.&rdquo; <em>Bits About Money.</em> On
                    <em> sontaku</em>, the asymmetric incentive structure
                    in bank compliance, and mechanistic debanking.
                  </p>
                  <p>
                    <sup className="text-stone-600">5</sup>{" "}
                    Bruun &amp; Hjejle (2018). <em>Report on the Non-Resident
                    Portfolio at Danske Bank&apos;s Estonian Branch.</em> The
                    independent investigation that documented the scale of
                    suspicious flows.
                  </p>
                  <p>
                    <sup className="text-stone-600">6</sup>{" "}
                    Wright, C. &amp; Fayle, C.E. (1928). <em>A History of
                    Lloyd&apos;s from the Founding of Lloyd&apos;s Coffee House
                    to the Present Day.</em> Macmillan.
                  </p>
                  <p>
                    <sup className="text-stone-600">7</sup>{" "}
                    FinCEN (2025). <em>BSA/AML Annual Statistics.</em> US
                    Treasury Financial Crimes Enforcement Network. SAR
                    filing volumes. EU-wide figures aggregated from national
                    FIU annual reports.
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
