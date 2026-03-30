# Research: What Banks Actually See When They Review Your Corporate File

## Compiled research for long-form article — March 2026

---

## 1. BANK COMPLIANCE PROCESS FOR CORPORATE ACCOUNTS

### What a Compliance Officer Actually Looks At

When a bank compliance officer opens a corporate client file for review, they work through a structured checklist. A complete KYB (Know Your Business) file covers eight document categories:

1. **Certificate of Good Standing** from the relevant registrar (e.g., Cyprus Registrar of Companies)
2. **Articles of incorporation / Certificate of formation** — current version
3. **Beneficial ownership information** — identifying all natural persons owning 25%+ or exercising significant control
4. **Valid identity documents** for all officers and authorized signatories (passport or national ID with photo)
5. **Corporate resolution or power of attorney** for any signatory who is not a registered officer
6. **Most recent annual report and financial statements** (audited under IFRS for Cyprus companies)
7. **Current proof of principal business address** — utility bill or bank statement within 3 months
8. **Bank account details** with the account holder matching the legal entity name exactly

The compliance officer's internal review report contains: file summary (customer name, account number, customer type, risk rating), completeness checklist for CIP/CDD/EDD elements, findings table with description and severity, remediation recommendations, and overall assessment with escalation flags.

**Source**: [Swift KYC Process](https://www.swift.com/risk-and-compliance/know-your-customer-kyc/kyc-process), [CheckFile.ai KYB Guide](https://www.checkfile.ai/en-US/blog/kyb-business-document-verification-onboarding), [Agent Skills Finance - KYC Documentation Review](https://agentskills.finance/skills/reviewing-kyc-documentation)

### What Triggers Enhanced Due Diligence (EDD)

EDD is triggered when a client or transaction poses a heightened risk. Common triggers include:

- **Politically Exposed Persons (PEPs)** — current or former senior government officials, their family members, or close associates
- **High-risk jurisdictions** — countries flagged by FATF or EU (see FATF grey/black lists, updated regularly)
- **Opaque ownership structures** — multiple layers of corporate entities, nominee shareholders, trust arrangements
- **Unusually large transactions** without clear commercial rationale
- **Higher-risk sectors** — foreign exchange trading, cryptocurrency services, online gaming, affiliate marketing, certain e-commerce
- **Adverse media** — connections to corruption, financial crime, or sanctions
- **Complex multi-jurisdictional structures** — company in one jurisdiction, subsidiaries in others, operations in a third
- **Red flags during standard CDD** — inconsistencies between stated business and available evidence

**Source**: [Fenergo EDD Checklist](https://resources.fenergo.com/blogs/enhanced-due-diligence-checklist), [Neotas EDD Checklist](https://www.neotas.com/enhanced-due-diligence-checklist/), [Savva Cyprus KYC Requirements](https://www.savvacyprus.com/kyc-requirements-corporate-bank-accounts-cyprus/)

### Specific Documents Requested During EDD

Beyond standard CDD documents, EDD typically requires:

- **Source of funds documentation** — bank statements, sale agreements, loan documents showing the origin of specific funds for the transaction/relationship
- **Source of wealth documentation** — tax returns, asset statements, proof of inheritance, evidence of business ownership showing how the individual accumulated their overall wealth
- **Detailed ownership structure chart** — diagramming all layers to the ultimate natural persons
- **Senior management approval** before establishing the relationship
- **Enhanced ongoing monitoring** — more frequent transaction reviews
- **Professional references or CV** for directors and beneficial owners

**Key distinction — Source of Funds vs Source of Wealth:**
- **Source of Funds (SOF)** = the origin of money used in a *particular* transaction. A "moment in time" analysis. Verified through payslips, sale agreements, loan documents, bank statements.
- **Source of Wealth (SOW)** = the origin of a person's *overall* financial assets over time. A broader picture. Verified through tax returns, asset statements, proof of inheritance, business ownership evidence.

Both are FATF-recommended elements of KYC protocols. SOF answers "where did this specific money come from?" SOW answers "how did this person become wealthy?"

**Source**: [KYC Hub SOF vs SOW](https://www.kychub.com/blog/source-of-funds-vs-source-of-wealth/), [Sumsub SOF/SOW Guide](https://sumsub.com/blog/proof-of-source-of-funds-posof/), [ComplyAdvantage SOF/SOW](https://complyadvantage.com/insights/what-is-source-of-funds-source-wealth/)

### What Makes Banks Close an Account or Refuse to Open One

**Refusal triggers:**
- Incomplete or outdated documentation
- Unclear ownership structures with undisclosed layers
- Inconsistencies between stated business and available evidence
- Connections to sanctioned jurisdictions or individuals
- Inability to adequately explain fund sources
- Criminal history, especially financial crimes (fraud, money laundering)
- Business type classified as high-risk without adequate controls

**Account closure triggers:**
- Suspicious activity flagged by automated monitoring systems
- Multiple SAR filings (often as few as 2-3 SARs trigger closure)
- Customer unable to verify legitimacy of transactions when asked
- High-risk designation carries heavy ongoing compliance burden — the cost of monitoring exceeds the revenue from the relationship
- Regulatory pressure or "moral suasion" — when regulators suggest action, banks treat it as an order

Banks use euphemisms: "offboarding," "derisking," "exiting." Closures often cascade through household accounts and controlled entities — banks presume accounts under the same roof share common control.

**Source**: [Bank Policy Institute - Truth About Account Closures](https://bpi.com/the-truth-about-account-closures/), [ABA Banking Journal](https://bankingjournal.aba.com/2024/01/closing-the-book-on-account-closures/)

### How Long Does Review Take?

- **Low-to-medium risk customers (standard CDD)**: A few hours to a couple of days
- **Enhanced Due Diligence**: Several weeks to a few months
- **Corporate bank accounts (Cyprus, traditional institutions)**: 4-8 weeks standard; several months for complex cases
- **Electronic Money Institutions**: 1-2 weeks typical
- **Ongoing EDD refresh for high-risk profiles**: Every 6-12 months

Variables affecting timeline: industry, company size, jurisdiction, complexity of ownership structure, availability/completeness of documentation.

**Source**: [Altery Business Account Approval](https://altery.com/guides/business/business-account-approval-time), [Fourthline EDD Guide](https://www.fourthline.com/glossary/enhanced-due-diligence-edd), [Savva Cyprus Corporate Banking Guide](https://www.savvacyprus.com/cyprus-business-bank-account-opening-guide/)

### Suspicious Activity Reports (SARs)

**What they are:** A SAR is not a conviction or accusation — it is an internal document, approximately 2-3 pages, recording an irregularity. It is filed with the relevant Financial Intelligence Unit (FinCEN in the US, MOKAS in Cyprus, NCA in the UK).

**Filing thresholds (US/Bank Secrecy Act):**
- Insider abuse involving any amount
- Violations aggregating $5,000+ where a suspect can be identified
- Violations aggregating $25,000+ regardless of whether a suspect is identified
- Transactions aggregating $5,000+ involving potential money laundering or BSA violations

**Volume:** 4.7 million SARs were filed in the US in 2024 (up from 3.1 million in 2020 — a 51.8% increase). Over 10,000 per day. Over 42 million total since April 1996.

**Filing timeline:** Within 30 calendar days of initial detection. If no suspect identified, may delay an additional 30 days (60 days maximum).

**Critical legal constraint:** Disclosing the existence of a SAR is illegal under 12 CFR 21.11(k). Banks cannot confirm or deny whether a SAR has been filed. Bank employees are read into SAR confidentiality rules within days of joining.

**Practical consequence:** When SARs trigger account closures, the bank legally cannot explain why. The customer-facing staff may genuinely not know. This creates Kafkaesque experiences where no one can explain what happened.

**Source**: [OCC SAR Program](https://www.occ.treas.gov/publications-and-resources/forms/sar-program/index-sar-program.html), [FinCEN SAR Stats](https://www.fincen.gov/reports/sar-stats), [12 CFR 21.11](https://www.law.cornell.edu/cfr/text/12/21.11), Patrick McKenzie - [Debanking and Debunking](https://www.bitsaboutmoney.com/archive/debanking-and-debunking/)

---

## 2. KYC REQUIREMENTS FOR HOLDING COMPANIES

### UBO (Ultimate Beneficial Owner) Identification

**FATF definition:** "The natural person(s) who ultimately owns or controls a customer and/or the natural person on whose behalf a transaction is being conducted. It also includes those persons who exercise ultimate effective control over a legal person or arrangement."

**Ownership thresholds vary by jurisdiction:**
- **EU (including Cyprus):** 25% of shares or voting rights, or control through other means
- **US (FinCEN Corporate Transparency Act):** 25% ownership threshold
- **UK PSC Register:** 25% of shares or voting rights, or authority to appoint/remove directors

**Verification process:** When shares are held by intermediary legal entities, the full ownership structure must be analyzed until controlling natural persons (the UBOs) are ascertained. Documents or registry information help identify natural persons who have a percentage of shares or interests, and whether control is direct or indirect.

**Source**: [Swift UBO Definition](https://www.swift.com/risk-and-compliance/know-your-customer-kyc/ultimate-beneficial-owner-ubo), [Moody's UBO Guide](https://www.moodys.com/web/en/us/kyc/resources/insights/ubos-what-they-are-disclosure-requirements-data-challenge.html), [FATF Recommendation 24](https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Guidance-Beneficial-Ownership-Transparency-Legal-Arrangements.html)

### What Does "Satisfactory" Corporate Documentation Look Like?

For a Cyprus holding company specifically:

**Corporate documents:**
- Certificate of Incorporation from Registrar of Companies
- Registered office address certificate
- Certificate showing directors and secretary
- Certificate of shareholders
- Memorandum and Articles of Association
- Recent official register extract (within 3 months for older firms)
- Board authorization resolution for account opening

**For each individual director/shareholder/UBO:**
- Certified passport or national ID
- Proof of residential address dated within 3 months
- Curriculum vitae or professional background
- Written declaration explaining source of wealth

**For corporate shareholders in the chain:**
- Certificate of incorporation (within 6 months)
- Constitutional documents
- Register of directors and shareholders
- Beneficial ownership structure chart
- KYC documentation for ALL natural persons behind the corporate shareholder

**Source**: [Savva Cyprus KYC Requirements](https://www.savvacyprus.com/kyc-requirements-corporate-bank-accounts-cyprus/), [Savva Cyprus AML Requirements](https://www.savvacyprus.com/aml-requirements-cyprus-holding-companies/)

### Multi-Jurisdictional Complications

**The core challenge:** UBO definitions, disclosure requirements, and verification standards differ worldwide and continue to evolve. Regulated entities must ensure compliance in all jurisdictions where they operate.

**For a structure like Foundstone (Cyprus holding, Estonia subsidiary, Ukraine operations):**

**Cyprus-specific issues:**
- Central Bank of Cyprus, CySEC, and MOKAS all have oversight roles
- Annual beneficial ownership confirmation required (October 1 - December 31)
- Changes must be reported within 14 days
- Annual audited financial statements under IFRS — no exemptions for smaller entities
- Substance requirements: local directors, Cyprus board meetings, physical office, local advisors

**Estonia-specific issues:**
- Post-Danske Bank scandal (2017-2018), much stricter KYC for non-residents
- Banks generally require business to have a strong connection to Estonia (50%+ of shareholders, suppliers, customers, staff, or assets in Estonia)
- Tax residency complications under CRS — if company is incorporated in Estonia but managed from abroad, banks may flag this
- E-residency companies face significant banking access challenges

**Ukraine-specific issues:**
- Not currently on FATF grey/black lists (cleared deficiencies)
- Historical issues: identified as non-cooperative by FATF in September 2001; designated primary money-laundering concern by US Treasury in December 2002 (revoked April 2003)
- Ongoing conflict creates additional compliance scrutiny for any Ukraine-connected transactions
- Enhanced scrutiny for transactions that route through third jurisdictions
- Russian/Belarusian connections require additional sanctions compliance checks

**Source**: [FATF Ukraine Page](https://www.fatf-gafi.org/en/countries/detail/Ukraine.html), [Estonia e-Residency Banking Guide](https://www.e-resident.gov.ee/blog/posts/business-banking-options-for-e-residents/), [Key2Law Estonia Compliance](https://key2law.com/en/news/using-estonias-e-residency-to-form-companies-legal-limits-and-hidden-compliance-costs)

### Red Flags Compliance Officers Look For

- Unclear descriptions of business when opening accounts
- Multiple transactions that don't align with stated business purpose
- Unusual patterns of cash deposits
- Many international wire payments or electronic transfers without clear commercial rationale
- Large cash withdrawals
- Trouble verifying identity of beneficial owners
- Frequent small-dollar transfers to multiple beneficiaries
- Transactions inconsistent with customer profile
- Use of third-party senders
- Routing of transactions through third jurisdictions in ways unrelated to commercial necessities
- Nominee shareholders with no clear connection to the business
- Rapid movement of funds through accounts with minimal holding periods

---

## 3. CYPRUS-SPECIFIC BANKING ENVIRONMENT

### Regulatory Bodies

Three authorities supervise financial institutions in Cyprus:

1. **Central Bank of Cyprus (CBC)** — supervises commercial banks and cooperative credit institutions. After the SSM (Single Supervisory Mechanism) in 2014, the largest banks (Bank of Cyprus, Hellenic Bank, RCB Bank) were transferred to ECB direct supervision.
2. **Cyprus Securities and Exchange Commission (CySEC)** — regulates investment services sector. Published Directive R.A.D 282/2024 in August 2024 updating customer identification and electronic verification requirements.
3. **MOKAS (Unit for Combating Money Laundering)** — the Financial Intelligence Unit. Collects, classifies, evaluates, and analyses suspicious activity reports. Can issue administrative orders to postpone transactions. Members can apply for court orders for freezing and confiscation.

Additional bodies: ICPAC (Institute of Certified Public Accountants of Cyprus) oversees accountants and auditors. Registrar of Companies maintains beneficial ownership registry.

### The 2013 Banking Crisis and Its Aftermath

**Timeline:**
- **March 15, 2013:** The two major banks (Laiki/Popular Bank and Bank of Cyprus) are abruptly closed
- **March 16, 2013:** Eurogroup announces plan for a one-time tax on ALL deposits — 9.9% for deposits over EUR 100,000 and 6.7% for deposits under EUR 100,000
- **March 19, 2013:** Cypriot parliament votes down the initial agreement
- **March 25, 2013:** New plan announced — only uninsured deposits (over EUR 100,000) would be affected:
  - Laiki Bank to be closed entirely
  - 47.5% haircut on uninsured deposits at Bank of Cyprus
  - EUR 10 billion international bailout from Eurogroup, EC, ECB, and IMF
- **March 28, 2013:** Banks reopen with capital controls

**Outcome for depositors:**
- Laiki Bank uninsured depositors ultimately received approximately 6 cents on the euro
- Bank of Cyprus uninsured depositors lost 47.5%
- Laiki's legacy entity received 18% of restructured Bank of Cyprus share capital

**How it changed compliance:**
- This was the first ever "bail-in" of bank depositors in the eurozone
- Destroyed short- and medium-term confidence among retail investors
- Led to thousands of court actions against the CBC, Bank of Cyprus, and the government
- Cyprus became synonymous with banking risk, making compliance scrutiny for Cyprus-connected entities much more intense
- Banks operating in/with Cyprus adopted significantly stricter due diligence
- The 2014 SSM transfer moved supervision of the largest banks to ECB level

**Source**: [Library of Congress - Cyprus Banking Crisis](https://blogs.loc.gov/law/2013/04/the-cyprus-banking-crisis-and-its-aftermath-bank-depositors-be-aware/), [Yale EliScholar - Laiki/BoC Restructuring](https://elischolar.library.yale.edu/cgi/viewcontent.cgi?article=1533&context=journal-of-financial-crises), [CEPR - Lessons from Cyprus](https://cepr.org/voxeu/columns/failing-banks-bail-ins-and-central-bank-independence-lessons-cyprus), [Cyprus Profile](https://www.cyprusprofile.com/articles/cyprus-banking-crisis-causes-and-consequences-bailout)

### Current AML/Compliance Framework

**Primary legislation:** Prevention and Suppression of Money Laundering and Terrorist Financing Law of 2007 (Law 188(I)/2007), as amended — transposes EU directives and incorporates FATF recommendations.

**Recent updates:**
- CySEC Directive R.A.D 282/2024 (August 2024) — updated customer identification, electronic verification, adverse media monitoring
- Central Bank AML/CFT Directive K.D.P. 120/2025 (effective June 2, 2025)
- Banks must adhere to Basel III capital adequacy and liquidity standards

**Penalties:**
- Money laundering conviction: up to 14 years imprisonment, fine up to EUR 500,000, or both
- AML compliance breaches: fines up to EUR 350,000 for serious violations
- Beneficial ownership registration failures: EUR 100 on first day, EUR 50/day thereafter, capped at EUR 5,000; strike-off proceedings for persistent non-compliance
- Sanctions violations: administrative fines up to EUR 100,000 plus EUR 100/day for ongoing non-compliance

**Source**: [Savva Cyprus AML Requirements](https://www.savvacyprus.com/aml-requirements-cyprus-holding-companies/), [AML Watcher Cyprus Coverage](https://amlwatcher.com/our-coverage/cyprus/), [Cyprus Legal 500 Banking Guide](https://www.legal500.com/guides/chapter/cyprus-banking-finance/)

### Current Banking Environment for Holding Companies

- Traditional Cyprus bank account opening: 4-8 weeks standard, several months for complex structures
- Electronic Money Institutions: 1-2 weeks
- Post-2013 crisis environment means heightened scrutiny for all corporate accounts
- Post-Danske Bank scandal (2017-2018) further tightened non-resident requirements across European banking
- Substance requirements are enforced — banks want to see local directors, Cyprus board meetings, physical office, local professional advisors
- Holding companies with multi-jurisdictional structures automatically trigger enhanced due diligence

---

## 4. PATRICK McKENZIE (patio11) REFERENCES

### Key Publications

**"KYC and AML: Beyond the Acronyms"** — [bitsaboutmoney.com/archive/kyc-and-aml-beyond-the-acronyms/](https://www.bitsaboutmoney.com/archive/kyc-and-aml-beyond-the-acronyms/)

Core arguments:
- KYC/AML regulations function as "stochastic management of crime" — the goal is probabilistic reduction of financial crime across the system, not perfect enforcement
- Regulations "primarily require that financial institutions have documented programs of action and that they adhere to them" — process over outcome
- The risk-based approach is intentionally vague, granting institutions flexibility to segment customers by risk level
- Compliance culture is performative — compliance officers must show deference to regulators or face career consequences
- KYC questionnaires serve as indirect crime-detection tools: criminals must interface with banks and lie on applications, creating prosecutable offenses (parallel to Al Capone's tax evasion prosecution)
- "The optimal amount of fraud is not zero" — the system expects overlapping, porous surveillance filters across institutions

**"Debanking (and Debunking?)"** — [bitsaboutmoney.com/archive/debanking-and-debunking/](https://www.bitsaboutmoney.com/archive/debanking-and-debunking/)

Core arguments:
- Distinguishes involuntary account closures from account denials — most closures stem from credit risk or operational cost, not political targeting
- SAR confidentiality is legally mandated (12 CFR 21.11(k)), not discretionary — banks file ~4 million/year, most never read by regulators
- A second SAR mechanistically triggers debanking decisions without individualized investigation
- Banks universally classify money services businesses as high-risk; many choose to avoid them entirely rather than invest in EDD
- Concept of "sontaku" (anticipating a superior's unstated desires) — banks self-censor without explicit regulatory directives
- Operation Choke Point precedent: Obama administration used ambiguous authority to coerce banks into debanking payday lenders, debt collectors, gun sellers — created lasting wariness
- Silvergate Bank case study: genuine compliance failures (transaction monitoring non-functional for 15 months, $1 trillion+ in unmonitored transfers) rather than political persecution
- The fundamental tension: democracies should judge individuals on merit, but financial systems necessarily operate on probabilistic risk models

**"Bank CEO: Retract your debanking piece? Me: No."** — [kalzumeus.com/2025/02/10/retraction-request-denied/](https://www.kalzumeus.com/2025/02/10/retraction-request-denied/)
- Demonstrates the dynamics of bank-journalist relationships in compliance reporting

### Key McKenzie Concepts Relevant to the Article

1. **The compliance function as theater with real consequences** — documented programs matter more than actual outcomes, but the theater has teeth
2. **Stochastic crime management** — the system doesn't catch every criminal; it makes crime more expensive and creates paper trails
3. **The lying mechanism** — KYC forms create a surface where criminals must commit additional prosecutable offenses
4. **Risk-based approach as institutional flexibility** — banks choose who to bank based on commercial logic dressed in compliance language
5. **SAR confidentiality as structural injustice** — people get debanked and legally cannot be told why
6. **Regulatory "moral suasion"** — when a regulator suggests something, it functions as an order
7. **The cost-benefit of compliance** — banks exit entire customer categories because the compliance cost exceeds the revenue

**Newsletter and podcast:** [Bits About Money](https://www.bitsaboutmoney.com/) (biweekly newsletter), [Complex Systems podcast](https://www.complexsystemspodcast.com/) (weekly)

---

## 5. HISTORICAL/LITERARY PARALLELS

### The Medici Bank (1397-1494): Correspondent Banking and Trust

**Founded:** 1397 by Giovanni di Bicci de' Medici in Florence.

**Branch structure:** Branches in Venice, Milan, Rome, London, Bruges, Lyon, Geneva, Avignon. Correspondent relationships with banks in Constantinople, Alexandria, and Cairo.

**Key innovation — the partnership model:** Each branch was an independent partnership held under the central holding company in Florence. Branch partners had local relationships and knowledge — the Rome partner had direct access to the papal curia, the London partner knew the English merchant class, the Geneva partner understood Lyon fair trade cycles.

**Trust mechanism:** The Medici cultivated reputation through public acts, visible patronage, and political placement. Reputation functioned as an early form of credit rating that reduced transaction costs. When a Florentine merchant needed to execute a transaction in any market, the Medici could facilitate it in ways that no equally capitalized but less networked competitor could match.

**Innovations:** Developed letters of credit and bills of exchange, enabling cross-border transfers, bill-of-exchange clearing, and risk diversification.

**Relevance to modern compliance:** The Medici model demonstrates that trust in cross-border finance has always been a function of (a) documented local presence with knowledgeable partners, (b) visible reputation investment, and (c) network effects. Modern KYC requirements — substance requirements, local directors, physical offices — are the bureaucratic descendants of the Medici partnership model.

**Decline:** Declared bankruptcy in 1494, partly due to over-extension of credit to sovereigns and loss of disciplined risk management as the family became more political than commercial.

**Source**: [Wikipedia - Medici Bank](https://en.wikipedia.org/wiki/Medici_Bank), [Logic Atlas - Medici Case Study](https://logicatlas.org/cases/medici-bank/), [Ithron - Medici Model](https://www.ithron.co/post/the-medici-model-what-renaissance-florence-knew-about-network-capital)

### Lloyd's of London: Documentation Standards as Trust Infrastructure

**Origins:** Edward Lloyd's coffee-house, Tower Street, London, c. 1689. The shop evolved into a meeting place for maritime occupations where participants made bets on which ships would return to port.

**How "underwriting" was born:** Bankers physically wrote their names under ships listed on wall-to-wall blackboards showing cargo, crew, destination, and weather. By 1691, Lloyd's gained reputation for latest shipping news and maritime auction prices. Bankers began collecting "premiums" in exchange for taking on shipping risks.

**The Register Book (1764):** First published by the Society, providing a classification service assessing seaworthiness of ships. For the first time, underwriters and merchants could assess vessel condition before insuring or chartering. Ship builders could demonstrate seaworthiness. This was the first systematic attempt at standardized risk documentation.

**Trust framework:** The market's motto is "Fidentia" (confidence). Closely associated with "uberrima fides" (utmost good faith) — representing the ideal relationship between underwriters and brokers. The doctrine of utmost good faith requires both parties to disclose all material information.

**Modern parallel:** The Market Reform Contract line slip template has been compulsory in the Lloyd's market since June 1, 2018 — standardized documentation reducing ambiguity in risk assessment. The Franchise Board lays down guidelines for all syndicates and operates business planning and monitoring.

**Relevance:** Lloyd's evolution from informal coffee-house assessments to standardized documentation mirrors how banking compliance evolved from informal trust to codified KYC. The Register Book of 1764 is conceptually similar to a modern UBO register — a standardized way of answering "can we trust this entity?"

**Source**: [Lloyd's History](https://www.lloyds.com/about-lloyds/history), [Britannica - Lloyd's](https://www.britannica.com/money/Lloyds), [Oxford Global Capitalism - Lloyd's Register Case Study](https://globalcapitalism.history.ox.ac.uk/files/case13-lloydsregisterpdf)

### Champagne Fairs (c. 1180-1300): Reputation Systems and Cross-Border Trust

**What they were:** An annual cycle of trade fairs in the County of Champagne, northeastern France, attracting merchants from across Europe, North Africa, and the Middle East.

**Trust infrastructure:**
- Before any deal, merchants would ask a **private judge** about the reputation of potential trading partners
- Private judges communicated reputational status on demand, enabling merchants to boycott previous defaulters
- The Counts of Champagne provided a police force — the "Guards of the Fair" — who heard complaints and enforced contracts
- Defaulters were excluded from future participation — essentially "debanked" from the trade system

**Financial innovation:** Even after physical trade routes shifted, the fairs continued functioning as an **international clearing house for paper debts and credits**. They had built a system of commercial law, regulated by private judges separate from feudal social order.

**Relevance:** The Champagne fairs' reputation system — where a third party (the private judge) assessed creditworthiness, and exclusion from the system was the ultimate sanction — is the direct ancestor of modern credit ratings, compliance screening, and debanking. The Guards of the Fair are the medieval equivalent of compliance officers.

**Source**: [CEPR - Medieval Champagne Fairs](https://cepr.org/voxeu/columns/medieval-champagne-fairs-lessons-development), [Wikipedia - Champagne Fairs](https://en.wikipedia.org/wiki/Champagne_fairs), [Tontine Coffee-House - Medieval Trade](https://tontinecoffeehouse.com/2022/10/17/finance-and-medieval-fairs/)

### Letters of Credit: The Original KYC Document

**Origins:** Trace to ancient trade hubs; refined in 12th-13th century Europe.

**The Templar connection:** Wealthy men could deposit money in Templar treasury houses and receive a letter of credit allowing them to receive the same amount (less fees and interest) in local currency at any Templar preceptory in Europe or the Holy Land. This was the first systematic cross-border value transfer system backed by institutional trust.

**Champagne fairs development:** Guilds and merchant networks in Florence, Venice, and Bruges helped establish standard terms for credit letters, enabling them to function across different legal and linguistic boundaries. Merchants could present letters to counterparts they had never met, with the issuing institution's reputation providing the trust.

**What they solved:** The same problem modern KYC solves — how do you transact with someone you have never met, across jurisdictions with different laws, when you cannot verify their honesty through direct experience? The answer in 1200 was the same as in 2026: an intermediary institution stakes its reputation on the identity and creditworthiness of the customer.

**Source**: [Faisal Khan - History of Letters of Credit](https://faisalkhan.com/knowledge-center/magazine/trade-trade-finance/the-history-of-the-letter-of-credit/), [Britannica - Letters of Credit](https://www.britannica.com/money/letter-of-credit), [Fiveable - Medieval Letters of Credit](https://fiveable.me/key-terms/europe-1000-1500/letters-of-credit)

---

## 6. COMPLIANCE FRAMEWORKS

### FATF (Financial Action Task Force) Recommendations

**Founded:** 1989 by the G7 summit in Paris. Currently has 40 Recommendations (the international standard for AML/CFT).

**Key Recommendations for corporate compliance:**

- **Recommendation 1:** Risk-based approach. Institutions must identify, assess, and understand their ML/TF risks, then allocate resources proportionate to those risks.
- **Recommendation 10:** Customer Due Diligence. Requires FIs to identify and verify customer identity and beneficial owners, understand nature/purpose of business relationship, conduct ongoing monitoring. Applied when establishing relationships, conducting significant transactions, or upon suspicion.
- **Recommendation 24:** Transparency of Legal Persons. Countries must ensure adequate, accurate, timely information on beneficial ownership and control of legal persons. Amended March 2022.
- **Recommendation 25:** Transparency of Legal Arrangements. Same requirements for trusts and similar structures. Revised February 2023.

**Recent developments:** In June 2025, FATF issued new guidance requiring firms to apply risk-based approach to AML, CFT, and counter-proliferation financing. In November 2025, FATF added the British Virgin Islands and Bolivia to "Jurisdictions Under Increased Monitoring" (grey list).

**Source**: [FATF Recommendations](https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html), [FATF High-Risk Jurisdictions](https://www.fatf-gafi.org/en/topics/high-risk-and-other-monitored-jurisdictions.html)

### EU Anti-Money Laundering Directives

**Evolution:**
- **4AMLD (2015):** Established beneficial ownership registers, risk-based approach
- **5AMLD (2020):** Public access to beneficial ownership registers, extended obligations to crypto exchanges, lowered thresholds
- **6AMLD (June 2021 implementation deadline):** Criminal law focused — expanded definition of money laundering, added offenses (cybercrime, environmental crime), minimum 4-year prison sentence (up from 1 year), both individuals and legal entities liable, managers can be held liable for failing to supervise/prevent/detect ML

**Key 6AMLD features:**
- "Aiding and abetting" money laundering is now a standalone offense
- Self-laundering explicitly criminalized
- Predicate offenses expanded to 22 categories
- Cross-border harmonization of enforcement

**The new AML package (adopted April 2024):**
- **EU Anti-Money Laundering Authority (AMLA):** Established in Frankfurt. Applies from July 1, 2025. Direct supervision of 40 large, high-risk financial institutions starting January 1, 2028.
- **Single Rulebook Regulation:** Applies from July 10, 2027. Harmonizes CDD and beneficial ownership requirements across EU.
- **Beneficial ownership registers:** Reinforced rules including verification of accuracy, digital access, interconnection of national registers, inclusion of historical information for up to 10 years. Journalists, media, civil society get immediate, unfiltered, free access.
- **Non-EU entities:** Required to register beneficial ownership in EU central registers if they have an EU link (e.g., own real estate). Registration required retroactively to January 1, 2014.

**Source**: [European Parliament Press Release](https://www.europarl.europa.eu/news/en/press-room/20240419IPR20586/new-eu-rules-to-combat-money-laundering-adopted), [Moody's 6AMLD Guide](https://www.moodys.com/web/en/us/kyc/resources/insights/understanding-the-6th-anti-money-laundering-directive-6amld-key-changes-and-compliance.html), [Trulioo AMLA Overview](https://www.trulioo.com/blog/aml/amla)

### CDD vs EDD vs SDD — When Each Applies

**Simplified Due Diligence (SDD):**
- Applies to demonstrably low-risk customers only
- Examples: publicly listed companies in FATF-compliant jurisdictions, regulated banks, government entities
- Still subject to sanctions checks
- Reduced documentation and faster onboarding

**Standard Customer Due Diligence (CDD):**
- Baseline applied to most customers
- Retail banking clients, SMEs, low-to-medium risk corporate entities
- Involves: KYC verification, sanctions screening, beneficial ownership checks, risk-proportionate monitoring
- Triggered when: establishing business relationship, conducting significant transactions

**Enhanced Due Diligence (EDD):**
- Applied to high-risk customers, transactions, or jurisdictions
- Required for: PEPs, sanctioned jurisdictions, complex ownership structures, high-value unusual transactions
- Involves: deeper background checks, source of funds/wealth verification, senior management approval, more frequent monitoring
- Timeframe: weeks to months

**The risk-based approach in practice:** Banks assign each customer a risk score based on multiple factors (jurisdiction, business type, ownership complexity, transaction patterns, PEP status). The score determines which level of due diligence applies. The score can change — a previously low-risk customer whose transactions suddenly change pattern may be escalated to EDD.

As McKenzie notes, the risk-based approach grants banks commercial flexibility — they choose who to bank partly based on commercial logic, using compliance language to justify those decisions. A bank may decide an entire sector is "too high risk" not because the regulations require it, but because the compliance cost exceeds the revenue.

**Source**: [Sanctions.io CDD/SDD/KYC Guide](https://www.sanctions.io/blog/cdd-sdd-and-kyc-explained), [Financial Crime Academy CDD Guidelines](https://financialcrimeacademy.org/cdd-guidelines/), [Flagright FATF Compliance Guide](https://www.flagright.com/post/understanding-fatf-recommendations-for-aml-compliance)

---

## KEY DATES AND REGULATION NUMBERS REFERENCE

| Date/Number | What |
|---|---|
| 1989 | FATF founded at G7 Paris summit |
| Law 188(I)/2007 | Cyprus AML/CFT primary legislation |
| March 2013 | Cyprus banking crisis and bail-in |
| 2014 | SSM transfers largest Cyprus banks to ECB supervision |
| 4AMLD (2015/849) | EU 4th Anti-Money Laundering Directive |
| 5AMLD (2018/843) | EU 5th AMLD — public BO registers, crypto |
| 6AMLD (2018/1673) | EU 6th AMLD — criminal law, 4yr minimum sentence |
| June 2021 | 6AMLD implementation deadline |
| March 2022 | FATF Recommendation 24 amendments |
| February 2023 | FATF Recommendation 25 revisions |
| August 2024 | CySEC Directive R.A.D 282/2024 |
| April 2024 | EU adopts new AML package (AMLA + Single Rulebook) |
| July 1, 2025 | AMLA becomes operational |
| June 2, 2025 | CBC AML/CFT Directive K.D.P. 120/2025 effective |
| November 2025 | FATF adds BVI and Bolivia to grey list |
| July 10, 2027 | Single Rulebook Regulation applies |
| January 1, 2028 | AMLA direct supervision begins |
| 12 CFR 21.11 | US regulation governing SAR filing and confidentiality |
| FATF Rec. 1 | Risk-based approach |
| FATF Rec. 10 | Customer due diligence |
| FATF Rec. 24 | Transparency of legal persons |
| FATF Rec. 25 | Transparency of legal arrangements |

---

## NARRATIVE THREADS FOR THE ARTICLE

### Thread 1: "What Does Legitimate Look Like?"
The central question across 800 years of commercial documentation: from the Champagne fairs' private judges to Lloyd's Register Book to FATF Recommendation 24, commerce has always needed a standardized answer to "can I trust this counterparty I've never met?"

### Thread 2: The Medici Partnership as Modern Holding Company
The Medici structure — independent but affiliated entities across jurisdictions, held by a central holding company, with local partners who had local knowledge — is structurally identical to a modern holding company with subsidiaries. The compliance challenges are the same: how do you prove to an outsider that the network is legitimate?

### Thread 3: McKenzie's "Stochastic Crime Management"
The system isn't designed to catch every criminal. It's designed to make crime more expensive and create paper trails. When a compliance officer reviews your file, they're not asking "is this person a criminal?" — they're asking "does this file create defensible documentation that we followed our process?"

### Thread 4: The Cost of Being Interesting
Multi-jurisdictional structures, non-standard business models, and connections to countries with complicated histories (Ukraine, post-crisis Cyprus) all make a corporate file "interesting" — and interesting is expensive in compliance terms. The bank's question is: does the revenue from this client justify the compliance cost?

### Thread 5: The 2013 Shadow
The Cyprus bail-in didn't just destroy EUR 4.5 billion in deposits — it permanently changed how every compliance officer in Europe reads "Cyprus-registered holding company" on an application.
