export type Product = {
  slug: "counsel" | "manifest";
  label: string;
  name: string;
  description: string;
  /** The product's own homepage headline, split so the brass phrase can be highlighted. */
  headline: [before: string, accent: string, after: string];
  longDescription: string;
  /** Facts taken from the product's own site. */
  facts: string[];
  tags: string[];
  modules: { name: string; detail: string }[];
  audience: string;
  href: string;
  cta: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "counsel",
    label: "CloudTech Legal Suite",
    name: "The Counsel",
    description: "Legal practice management, built around the way modern law firms work.",
    headline: ["Run your ", "law firm", " with confidence."],
    facts: [
      "Six modules in one workspace",
      "Naira billing and invoicing built in",
      "Row-level security isolating each firm's data",
      "30-day free trial, no card required",
    ],
    longDescription:
      "The Counsel brings a firm's matters, clients, documents, court dates and people into one place. Partners, associates and support staff all see the same record of each case.",
    tags: ["Matters", "Clients", "Documents", "Hearings", "Tasks", "Team"],
    modules: [
      { name: "Matters", detail: "Every case with its parties, status, history and responsible lawyers." },
      { name: "Clients", detail: "Client records linked to their matters, documents and correspondence." },
      { name: "Documents", detail: "Organized, matter-linked document management for the whole firm." },
      { name: "Hearings & Calendar", detail: "Court dates, adjournments and deadlines in a shared calendar." },
      { name: "Tasks", detail: "Assign work on a matter and see who is doing what, and by when." },
      { name: "Staff", detail: "Roles, responsibilities and workloads across the practice." },
    ],
    audience: "Law firms and in-house legal teams",
    href: "https://thecounsels.org",
    cta: "Explore The Counsel",
  },
  {
    slug: "manifest",
    label: "CloudTech Logistics Suite",
    name: "The Manifest",
    description: "Operations software for freight, logistics and trade workflows.",
    headline: ["The operating system for modern ", "freight forwarders", "."],
    facts: [
      "Quotations to invoicing in one workspace",
      "Every branch and role scoped to what it needs",
      "Live milestone alerts on shipments",
      "Free trial available",
    ],
    longDescription:
      "The Manifest follows a shipment from the first enquiry to the final invoice. Sales, operations, documentation, customs and billing work from one record of the job.",
    tags: ["CRM", "Quotations", "Shipments", "Operations", "Documentation", "Billing"],
    modules: [
      { name: "CRM & Quotations", detail: "Manage customers, enquiries and quotes through to confirmed jobs." },
      { name: "Shipments", detail: "Track each consignment and its status across every stage." },
      { name: "Operations", detail: "Coordinate teams, tasks and handovers on live jobs." },
      { name: "Documentation & Customs", detail: "Keep shipping and clearance documents organized and complete." },
      { name: "Terminal processes", detail: "Support port and terminal steps within the same workflow." },
      { name: "Billing", detail: "Invoice from the job record, so charges are not typed in twice." },
    ],
    audience: "Freight forwarders, logistics operators and trade businesses",
    href: "https://the-manifest-test.vercel.app/dashboard",
    cta: "Explore The Manifest",
  },
];

export type Service = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  capabilities: string[];
};

export const SERVICES: Service[] = [
  {
    id: "data-analytics",
    title: "Data & Analytics",
    summary: "Turn operational data into dashboards, insights and decisions.",
    detail:
      "We bring data out of the systems and spreadsheets where it sits, clean it, and build the reports and dashboards people use to run the business. That can be one monthly report or a full Power BI setup.",
    capabilities: [
      "Data Analytics",
      "Business Intelligence",
      "Power BI",
      "Data Preparation",
      "Reporting",
      "Forecasting",
      "Data Automation",
      "Database Solutions",
    ],
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    summary: "Design and build business applications around the way your organization actually works.",
    detail:
      "When a process runs on spreadsheets and email threads, we build software that follows how it actually runs. The Counsel and The Manifest started this way.",
    capabilities: [
      "Business Applications",
      "SaaS Products",
      "Workflow Systems",
      "Database Applications",
      "API Integrations",
      "Internal Tools",
      "Enterprise Solutions",
    ],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    summary: "Apply practical AI and automation to repetitive, document-heavy and decision-heavy work.",
    detail:
      "We look for the steps where people copy information between systems, read through documents or re-type the same details. Those steps are usually where automation and AI save time. A person still reviews anything that matters.",
    capabilities: [
      "AI Applications",
      "Workflow Automation",
      "Document Intelligence",
      "Intelligent Assistants",
      "Process Automation",
      "AI Integrations",
    ],
  },
];

export const PRINCIPLES = [
  {
    index: "01",
    title: "Understand the workflow.",
    body: "Technology works better when it reflects how people actually work.",
  },
  {
    index: "02",
    title: "Build around the business.",
    body: "Every organization has different processes, data and operational realities.",
  },
  {
    index: "03",
    title: "Measure what changes.",
    body: "Good technology should make work clearer, faster, more manageable or more measurable.",
  },
];

export const INDUSTRIES = [
  { name: "Legal", note: "Law firms and in-house teams. Home of The Counsel." },
  { name: "Logistics & Freight", note: "Forwarders and operators. Home of The Manifest." },
  { name: "Maritime & Terminal Operations", note: "Port and terminal steps in the cargo process" },
  { name: "Professional Services", note: "Firms that report to clients on their work" },
  { name: "Operations-Heavy Businesses", note: "Processes that have outgrown spreadsheets" },
];

export const VALUES = [
  { name: "Clarity", body: "We make complex information easier to understand." },
  { name: "Practicality", body: "We build technology that solves actual problems." },
  { name: "Craft", body: "We care about the details behind reliable software." },
  { name: "Progress", body: "We continuously improve how businesses work with technology." },
];
