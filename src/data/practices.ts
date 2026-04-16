/**
 * Practice areas — the operational capabilities Foundstone runs for its own
 * group of B2B businesses and offers on retainer to a small number of
 * companies that are not ours.
 *
 * Scoping note: every service listed here is deliverable under Cyprus
 * "management consulting" scope. Anything that requires a licensed advocate,
 * licensed ASP, or a regulated professional (e.g. contract drafting for
 * execution, statutory filings, investment advice, acting as AML Compliance
 * Officer) is either coordinated through external counsel or excluded.
 * The `coordinated` flag surfaces items where we manage the process but a
 * licensed partner signs the final deliverable.
 */

export interface Deliverable {
  label: string;
  coordinated?: boolean;
}

export interface Practice {
  slug: string;
  num: string;
  shortName: string;
  name: string;
  tagline: string;
  summary: string;
  deliverables: Deliverable[];
}

export const practices: Practice[] = [
  {
    slug: "transactions",
    num: "01",
    shortName: "Transactions",
    name: "Transactions & deal support",
    tagline: "NDAs, LOIs, due diligence, deal coordination.",
    summary:
      "Running the operational side of a transaction from first conversation to signature. We scope the process, build the data room, coordinate the due diligence, and quarterback the counterparties. Contract drafting and execution stay with licensed advocates — we manage the process around them.",
    deliverables: [
      { label: "NDA and LOI framework preparation" },
      { label: "Data room build-out and deal document organisation" },
      { label: "Financial, commercial, and operational due diligence" },
      { label: "SPA negotiation support and counterparty coordination", coordinated: true },
      { label: "Closing checklist, signature coordination, post-deal handover" },
    ],
  },
  {
    slug: "governance",
    num: "02",
    shortName: "Governance",
    name: "Corporate governance & structure",
    tagline: "Entity architecture, shareholder frameworks, board toolkits.",
    summary:
      "The boring infrastructure that decides who owns what, who decides what, and what happens when things change. We design the structure, draft the internal policies, and build the board-level machinery. Statutory filings and constitutive documents are coordinated through licensed counsel.",
    deliverables: [
      { label: "Holding and operating entity architecture" },
      { label: "Shareholder and founder agreement frameworks", coordinated: true },
      { label: "Board composition, charters, and meeting cadence" },
      { label: "Internal governance policies and delegation of authority" },
      { label: "Organisational design and reporting lines" },
    ],
  },
  {
    slug: "finance",
    num: "03",
    shortName: "Finance & treasury",
    name: "Finance & treasury operations",
    tagline: "Multi-entity reporting, banks, cash management, board packs.",
    summary:
      "The interpretation layer between your accountant and your board. We run the management reporting, the cash-flow forecasting, the multi-entity consolidation, and the bank-relationship file that a growing B2B group actually needs. Statutory accounting and audit stay with licensed firms.",
    deliverables: [
      { label: "Management reporting and board-ready financial packs" },
      { label: "Cash flow forecasting and treasury operations" },
      { label: "Multi-entity consolidation across jurisdictions" },
      { label: "Bank relationship file, EDD readiness, payment controls" },
      { label: "KPI architecture and monthly close cadence" },
    ],
  },
  {
    slug: "kyc-intelligence",
    num: "04",
    shortName: "KYC & intelligence",
    name: "KYC, OSINT & intelligence research",
    tagline: "Counterparty due diligence, OSINT, market research.",
    summary:
      "Structured research on the companies, people, and markets you are about to do business with. Before you sign the deal, hire the executive, or enter the market, you want to know who you are actually dealing with. We run the research, not the regulated filings.",
    deliverables: [
      { label: "Individual KYC packages (identity, sanctions, adverse media)" },
      { label: "Corporate KYC and ultimate beneficial owner mapping" },
      { label: "OSINT investigations on counterparties and key hires" },
      { label: "Market entry and competitive intelligence research" },
      { label: "Risk-based due diligence reports for transactions" },
    ],
  },
  {
    slug: "digital-operations",
    num: "05",
    shortName: "Digital operations",
    name: "Digital operations & automation",
    tagline: "CRM, workflow automation, BI dashboards, process engineering.",
    summary:
      "The systems layer that turns ad-hoc work into repeatable operations. We set up the CRM, build the workflow automations, wire the dashboards, and write the runbooks your team can actually follow. When the people change, the system stays.",
    deliverables: [
      { label: "CRM selection, implementation, and migration" },
      { label: "Workflow automation across Make.com, Zapier, n8n" },
      { label: "Power BI and Looker dashboards wired to source systems" },
      { label: "Process documentation, SOPs, and team training" },
      { label: "Integration projects between operational tools" },
    ],
  },
  {
    slug: "ai-operations",
    num: "06",
    shortName: "AI operations",
    name: "AI implementation & intelligent automation",
    tagline: "AI strategy, document workflows, chatbots, governance.",
    summary:
      "AI that gets past the demo and into production. We pick the models, wire them into your existing systems, measure whether they actually save time, and build the governance so the output is auditable. Not a pitch deck — a working workflow.",
    deliverables: [
      { label: "AI strategy and use-case prioritisation" },
      { label: "Document intelligence and extraction pipelines" },
      { label: "Internal knowledge-base chatbots wired to your data" },
      { label: "Workflow automation with LLM-in-the-loop steps" },
      { label: "AI governance, audit trail, and risk framework" },
    ],
  },
  {
    slug: "data-protection",
    num: "07",
    shortName: "Data protection",
    name: "Data protection & privacy operations",
    tagline: "GDPR gap analysis, privacy frameworks, DPA operations.",
    summary:
      "The operational backbone of a compliant B2B company under GDPR and equivalent regimes. We run the gap analysis, build the internal framework, maintain the records, and handle the day-to-day privacy operations. Privacy policies for execution are drafted with external counsel.",
    deliverables: [
      { label: "GDPR gap analysis and remediation roadmap" },
      { label: "Record of processing activities and data mapping" },
      { label: "DPA and cross-border transfer operations" },
      { label: "Privacy policy and notice drafting", coordinated: true },
      { label: "Ongoing privacy-operations support and incident response" },
    ],
  },
  {
    slug: "managed-services",
    num: "08",
    shortName: "Managed services",
    name: "Managed services & ongoing support",
    tagline: "Monitoring, maintenance, admin, second-line support.",
    summary:
      "The quiet work of keeping systems running after the build. Small monthly retainers to monitor the things we built, fix what breaks, and handle the recurring admin your team shouldn't burn time on.",
    deliverables: [
      { label: "Monitoring and alerting on operational systems" },
      { label: "Bug fixes and second-line support on automations" },
      { label: "CRM administration, user management, data hygiene" },
      { label: "Recurring reporting cycles and close coordination" },
      { label: "Vendor management and subscription oversight" },
    ],
  },
  {
    slug: "advisory",
    num: "09",
    shortName: "Advisory",
    name: "Strategic advisory & business consulting",
    tagline: "Business model, KPIs, founder alignment, operating strategy.",
    summary:
      "The standing call with someone who has run the same problems at other companies. Not a strategy deck — a sparring partner for the decisions that don't fit neatly into any of the categories above. Often where an engagement starts before it expands.",
    deliverables: [
      { label: "Business model and unit economics review" },
      { label: "KPI architecture and management operating system" },
      { label: "Founder and co-founder alignment sessions" },
      { label: "Quarterly operating reviews and goal setting" },
      { label: "Ad-hoc operational decisions and sounding-board" },
    ],
  },
];

/**
 * Engagement shapes — the delivery modes a practice can take. Every practice
 * above can be delivered in any of these shapes. The shape is picked based on
 * what the situation actually needs, not packaged upfront.
 */
export interface EngagementShape {
  slug: string;
  name: string;
  cadence: string;
  cadenceNote: string;
  description: string;
}

export const engagementShapes: EngagementShape[] = [
  {
    slug: "advisory",
    name: "Advisory",
    cadence: "2–5 hrs",
    cadenceNote: "per month",
    description:
      "A standing call — biweekly or monthly — where you talk through decisions with someone who has seen the same situation at other companies. Between calls, async access for questions that cannot wait. The value is in sharpening your decisions, not replacing your capacity.",
  },
  {
    slug: "embedded",
    name: "Embedded",
    cadence: "10–15 hrs",
    cadenceNote: "per week",
    description:
      "Two to three days a week inside your operations. We join your Slack, attend your standups, and have either direct reports or the authority to direct work without going through the founder for every decision. You set the objectives, we execute them. This is the most common shape and where most of our clients start.",
  },
  {
    slug: "project",
    name: "Project",
    cadence: "60–90",
    cadenceNote: "day scope",
    description:
      "A defined deliverable with a written scope, a timeline, and a clear endpoint. Examples: build a board-ready financial model in 60 days, restructure the vendor portfolio, stand up the KYC operations workflow, deliver a GDPR gap analysis with remediation plan. Projects often convert to a lighter retained relationship once someone needs to maintain what was built.",
  },
  {
    slug: "build-transition",
    name: "Build & transition",
    cadence: "6–12",
    cadenceNote: "months",
    description:
      "The full arc: build the capability from scratch, run it until the permanent team is in place, then write the job descriptions, participate in hiring, onboard the new people, and step back to advisory or exit. The engagement gets lighter over time by design — the point was always to make the function work without us.",
  },
];
