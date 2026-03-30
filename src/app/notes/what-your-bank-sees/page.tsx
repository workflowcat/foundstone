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
                Patrick McKenzie, who writes about financial infrastructure
                with more clarity than most people who work inside it, has a
                line about compliance that I think about often: the purpose of
                an anti-money-laundering programme is not to prevent money
                laundering. The purpose is to manage the bank&apos;s
                regulatory risk. These are different goals, and understanding
                the difference explains almost everything about how banks
                treat their corporate clients.
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
                This distinction matters because it determines what
                &ldquo;good documentation&rdquo; actually means. Good
                documentation is not documentation that proves you are
                legitimate. It is documentation that makes it easy for a
                compliance officer to write a memo explaining why you are
                legitimate. The compliance officer needs to pass an audit.
                Your job is to make their job easy.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The file
              </h2>

              <p>
                When a bank opens a corporate account, or when the periodic
                review cycle comes around (typically every 1&ndash;3 years,
                depending on risk rating), a compliance officer assembles what
                is internally called the customer file. For a holding company
                registered in Cyprus with subsidiaries in Estonia and
                operations touching Ukraine, this file will contain eight
                categories of documentation. I will list them because most
                people have never seen the list.
              </p>

              <div className="my-8 space-y-4">
                {[
                  { num: "1", title: "Constitutional documents", desc: "Certificate of incorporation, memorandum and articles of association, certificate of registered office, certificate of directors and secretary. For Cyprus: issued by the Department of Registrar of Companies and Official Receiver under HE number." },
                  { num: "2", title: "Ownership structure", desc: "Register of members, share certificates, and — critically — the chain of ownership up to the Ultimate Beneficial Owner (UBO). EU's 4th Anti-Money Laundering Directive sets the UBO threshold at 25% ownership or control. If nobody holds 25%, the bank needs to understand why and document the senior management who exercise effective control." },
                  { num: "3", title: "Board and management", desc: "Passports and proof of address for all directors, company secretary, authorized signatories. Police clearance certificates for some jurisdictions. CVs that explain why these people are running this company." },
                  { num: "4", title: "Source of funds", desc: "Where specifically did the money in this account come from? Not 'revenue from operations.' The bank wants to see: contracts, invoices, wire transfer confirmations, tax returns. Source of funds is a moment-in-time question about a specific deposit or transfer." },
                  { num: "5", title: "Source of wealth", desc: "Different from source of funds. This is a lifetime question: how did the UBO accumulate their wealth? Employment history, business ownership records, inheritance documentation, investment portfolios. The bank is reconstructing a financial biography." },
                  { num: "6", title: "Business rationale", desc: "What does this company do and why does it exist in this jurisdiction? For a Cyprus holding company, the compliance officer wants to see: substance (real office, real employees, real activity), a business plan or corporate presentation, evidence of actual operations (board minutes, management accounts, intercompany agreements)." },
                  { num: "7", title: "Tax documentation", desc: "Tax residency certificates, tax returns, transfer pricing documentation if intercompany transactions exist. Cyprus's corporate tax rate is 12.5%. The compliance officer has seen hundreds of companies that are in Cyprus for the tax rate. They need to see evidence that you are there for a reason beyond the rate." },
                  { num: "8", title: "Ongoing monitoring material", desc: "Bank statements from other institutions, audited financial statements, transaction histories that explain the pattern of activity in the account. The bank is comparing what you told them you would do with what you are actually doing." },
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
                A compliance officer in Limassol told me once that the
                difference between a file they can approve in a day and a file
                that sits in their queue for three months is not the quality
                of the business. It is the quality of the documentation. A
                perfectly legitimate company with disorganized records looks
                exactly like a suspicious company to someone reading a file.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                What triggers enhanced due diligence
              </h2>

              <p>
                Standard customer due diligence (CDD) applies to most
                corporate clients. Enhanced due diligence (EDD) is triggered
                by specific risk factors defined in the EU&apos;s 5th
                Anti-Money Laundering Directive and transposed into Cyprus law
                under Law 188(I)/2007, as amended. The triggers include:
              </p>

              <p>
                The client is established in a high-risk third country (the EU
                maintains a list; it changes). The ownership structure
                involves multiple jurisdictions. The client is a Politically
                Exposed Person or associated with one. The transaction pattern
                is unusual relative to the stated business purpose. There are
                adverse media results. The business involves cash-intensive
                sectors, cryptocurrency, or complex corporate structures
                without clear commercial rationale.
              </p>

              <p>
                A holding company registered in Cyprus with subsidiaries in
                Estonia and historical connections to Ukraine will trigger EDD
                at virtually every European bank. This is not a judgement on
                the company. It is a mechanical consequence of the risk
                scoring model. Multi-jurisdictional structures score higher.
                Post-Soviet jurisdictions score higher. Complex corporate
                structures score higher. You can run a completely clean
                operation and still trigger every flag.
              </p>

              <NoteFigure
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Emanuel_de_Witte_-_The_Courtyard_of_the_Old_Exchange_in_Amsterdam_-_WGA25798.jpg"
                alt="The Amsterdam Exchange interior by Emanuel de Witte"
                caption="The Amsterdam Beurs, Emanuel de Witte. Commercial trust has always required institutional infrastructure. The question is always the same: does this entity look like what it claims to be?"
                aspect="landscape"
              />

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The Medici problem
              </h2>

              <p>
                The Medici Bank, which operated from 1397 to 1494 (the year
                Pacioli published the Summa, as it happens), ran branches in
                Florence, Venice, Rome, Bruges, London, Avignon, and several
                other cities. Each branch was structured as a legally separate
                partnership. Giovanni di Bicci de&apos; Medici, and later his
                descendants, were the senior partners in each partnership,
                providing capital and taking the majority of profits. The
                junior partners ran the branches day-to-day.
              </p>

              <p>
                This created a problem that every multi-entity holding company
                still faces: how does the central entity know what the
                branches are doing? The Medici solved it with a combination
                of standardized bookkeeping (double-entry, naturally), regular
                written reports, and physical audits where a representative
                from Florence would visit a branch and inspect the books. The
                Rome branch once reported losses that the Florence office
                had not been told about. The branch manager was replaced.
              </p>

              <p>
                A modern bank compliance review of a holding company is
                structurally the same exercise. The bank is Florence. Your
                subsidiaries are the branches. The compliance officer is the
                auditor who shows up and asks to see the books. The question
                is whether your intercompany agreements, management accounts,
                and board minutes tell a coherent story about money flowing
                between entities for documented commercial reasons.
              </p>

              <p>
                The Medici kept a <em>libro segreto</em> — a secret book that
                recorded the true financial position of the whole network,
                including intercompany balances and profit allocations that
                the individual branch books did not show. The equivalent today
                is consolidated management accounts. If a bank asks for
                consolidated financials and you cannot produce them, you have
                the same problem the Medici branches had when Florence came
                asking questions and the books did not reconcile.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                What &ldquo;looks legitimate&rdquo; means in practice
              </h2>

              <p>
                McKenzie makes the observation that banks operate on what the
                Japanese call <em>sontaku</em> — a concept roughly translating
                to &ldquo;acting in accordance with what you believe authority
                wants, without being explicitly told.&rdquo; Regulators do not
                issue a list of which clients banks should accept or reject.
                They issue guidelines. The bank interprets the guidelines
                conservatively, because the penalty for being too loose is
                catastrophic (loss of banking licence) while the penalty for
                being too strict is merely commercial (lost revenue from
                rejected clients).
              </p>

              <p>
                This asymmetry determines everything. It is why a compliance
                officer will reject a file that is probably fine rather than
                approve a file that might be problematic. The downside risk is
                not symmetric. And it is why your documentation needs to be
                not merely adequate but actively reassuring.
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
                The Cyprus variable
              </h2>

              <p>
                On March 15, 2013, the Eurogroup proposed a one-time levy on
                all bank deposits in Cyprus as a condition for a €10 billion
                bailout. The proposal was rejected by the Cypriot parliament
                on March 19. On March 25, a revised deal was reached: Laiki
                Bank (Cyprus Popular Bank) would be dissolved. Bank of Cyprus
                depositors with more than €100,000 would have 47.5% of their
                uninsured deposits converted to equity. Laiki depositors
                eventually recovered approximately six cents on the euro.
              </p>

              <p>
                Every compliance review of a Cyprus-registered company that
                involves a European bank happens in the long shadow of March
                2013. The bail-in did not make Cyprus a suspect jurisdiction in
                any formal sense — Cyprus remains an EU member state, fully
                compliant with FATF recommendations, and has significantly
                strengthened its AML framework since 2013. But the institutional
                memory persists. A compliance officer reviewing a Cyprus file
                is slightly more attentive than one reviewing a Dutch file.
                This is not written in any regulation. It is <em>sontaku</em>.
              </p>

              <p>
                The Central Bank of Cyprus (CBC) responded to 2013 by
                implementing one of the stricter AML frameworks in the EU.
                Directive K.D.P. 120/2025 (the most recent update) imposes
                specific obligations on credit institutions regarding customer
                identification, ongoing monitoring, and suspicious transaction
                reporting. Penalties for non-compliance run up to €350,000 and
                14 years imprisonment. MOKAS (the Financial Intelligence Unit)
                processes over 2,000 suspicious activity reports annually.
              </p>

              <p>
                The practical effect for a company like ours: the
                documentation standard is higher in Cyprus than it would be in
                Ireland or Luxembourg, not because the law requires more, but
                because the banks apply more scrutiny. A Cyprus-registered
                holding company that maintains institutional-grade corporate
                documentation is making a stronger implicit argument than the
                same company in a jurisdiction where nobody expects it.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The 72-hour drill
              </h2>

              <p>
                At some point — and this is a &ldquo;when&rdquo; not an
                &ldquo;if&rdquo; — a bank will send your compliance officer or
                your director an email requesting updated documentation. The
                email will be polite. It will contain a list. The list will be
                long. There will be a deadline, typically 5&ndash;15 business
                days, but sometimes 72 hours if the request comes from the
                bank&apos;s own regulator review.
              </p>

              <p>
                What they ask for, in approximate order of frequency:
                updated passports and proof of address for all directors and
                UBOs. Current certificate of good standing. Most recent
                audited financial statements. Management accounts for the
                current year. Board resolution confirming authorized
                signatories. Updated corporate structure chart. Source of
                funds documentation for any large deposits in the review
                period. Description of business activities and any material
                changes since the last review.
              </p>

              <p>
                Companies that produce this within 48 hours get renewed
                without further questions. Companies that take three weeks and
                produce incomplete documentation get escalated to a senior
                compliance review, which may result in restrictions on the
                account or, in the worst case, a notice of account closure
                with 60&ndash;90 days to find a new banking relationship.
              </p>

              <p>
                The difference between these two outcomes is not the quality
                of the underlying business. It is whether someone, at some
                point, set up a system for keeping corporate documentation
                current, organized, and immediately producible. A register
                of documents with expiry dates. A shared drive with a
                consistent folder structure. A calendar reminder 30 days
                before each director&apos;s proof of address expires.
              </p>

              <p>
                This is not sophisticated work. It is not interesting work.
                But the company that does it does not lose its bank account.
              </p>

              <h2 className="font-serif text-2xl text-cream mt-12 mb-4">
                The Lloyd&apos;s principle
              </h2>

              <p>
                Lloyd&apos;s of London began in Edward Lloyd&apos;s
                coffeehouse in 1689. Merchants and shipowners seeking
                insurance would present information about their vessel, cargo,
                and voyage to underwriters who would sit in the coffeehouse
                and decide, on the basis of the information presented, whether
                to accept the risk and at what premium.
              </p>

              <p>
                In 1764, Lloyd&apos;s established the Register Book — the
                first standardized system for documenting and classifying the
                physical condition of merchant vessels. Ships were inspected,
                graded, and the grades published. An underwriter could now
                assess a risk without personally inspecting the ship. The
                documentation was the trust mechanism.
              </p>

              <p>
                A bank compliance review of a corporate client operates on
                the same principle. The compliance officer cannot visit your
                offices, attend your board meetings, or audit your
                transactions in person. They are assessing your risk based
                entirely on the documentation in your file. The file is the
                ship inspection. The grade is the risk rating. The
                underwriting decision is whether to keep the account open.
              </p>

              <p>
                Lloyd&apos;s Register survives today as an independent
                classification society. It still inspects ships. The grading
                system has been refined over 260 years, but the principle is
                unchanged: standardized documentation as a proxy for direct
                inspection. The compliance officer reading your corporate
                file in 2025 is performing the same function as the Lloyd&apos;s
                surveyor in 1764. They are looking at paper and deciding
                whether to trust what it represents.
              </p>

              <p>
                In 2024, financial institutions globally filed approximately
                4.7 million suspicious activity reports. Each SAR is
                confidential — 12 CFR 21.11(k) in the US, with equivalent
                provisions across the EU. The institution cannot tell you
                that a report was filed. The subject of the report may never
                know it exists. The filing does not necessarily mean the
                account will be closed. It means someone in the compliance
                department looked at the file and could not, with the
                documentation available, construct a satisfactory explanation
                for a pattern they observed.
              </p>

              <p>
                4.7 million times, in a single year, someone opened a file
                and the paper did not answer the question.
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
