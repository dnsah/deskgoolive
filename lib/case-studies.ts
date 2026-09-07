/* ------------------------------------------------------------------ */
/*  Case studies — deep client stories with metrics, phases, quotes.  */
/* ------------------------------------------------------------------ */

export type CaseMetric = { value: string; label: string };

export type CasePhase = {
  title: string;
  duration: string;
  body: string;
  deliverables: string[];
};

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  offering: string; // which Deskgoo product / service carried the work
  year: string;
  duration: string;
  headline: string;
  summary: string;
  metrics: CaseMetric[];
  challenge: string[];
  solution: string[];
  phases: CasePhase[];
  results: { value: string; label: string; note: string }[];
  quote: { text: string; author: string; role: string };
  stack: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "14-outlet-retail-pos-unification",
    client: "MetroBazaar Retail",
    industry: "Supermarket chain — 14 outlets",
    offering: "DeskgooPOS + central ERP sync",
    year: "2025",
    duration: "5 months",
    headline: "Fourteen outlets, one till: how MetroBazaar stopped reconciling by hand",
    summary:
      "A regional supermarket chain ran every store on standalone billing machines. Month-end meant exporting CSVs into spreadsheets and praying the numbers matched. We rolled out DeskgooPOS across all 14 outlets with a central catalog, live stock sync and consolidated GST reporting.",
    metrics: [
      { value: "−63%", label: "billing time per customer" },
      { value: "−41%", label: "stock shrinkage in 6 months" },
      { value: "14 → 1", label: "systems reconciled daily" },
    ],
    challenge: [
      "Every store was an island: separate price lists, separate stock ledgers, and a head-office team that spent the first week of every month reconciling fourteen sets of books.",
      "Promotions changed centrally but landed in stores days late — and when they did land, cashiers applied them as manual overrides that no report could trace.",
      "Shrinkage was invisible until it was annual: because stock was counted per store on paper, nobody could say which outlet, category or shift was leaking.",
    ],
    solution: [
      "We deployed DeskgooPOS with a single central catalog — prices, promotions and tax rules publish from head office and reach every terminal in seconds, with per-outlet overrides only where genuinely local.",
      "Stock movements post live to a central ledger. Goods receipt, transfers and returns are barcode-driven, so the ledger reflects the floor within minutes, not month-end.",
      "Every override and discount is tagged to a cashier, a reason code and a manager approval, which turned the promotion history from a mystery into a query.",
    ],
    phases: [
      {
        title: "Discovery & data model",
        duration: "Weeks 1–4",
        body: "We shadowed cashiers and store managers in three outlets, mapped every SKU flow, and designed the central catalog and override policy with the CFO's team before writing code.",
        deliverables: ["Workflow audit", "Catalog & tax schema", "Rollout plan per outlet"],
      },
      {
        title: "Pilot — 2 flagship stores",
        duration: "Weeks 5–10",
        body: "Two high-volume stores ran DeskgooPOS alongside the old machines. We tuned receipt printers, weighing-scale integrations and offline mode until billing never stopped, even when the internet did.",
        deliverables: ["Offline-first billing", "Scale & printer integrations", "Cashier training kit"],
      },
      {
        title: "Chain-wide rollout",
        duration: "Weeks 11–18",
        body: "Remaining twelve outlets migrated in weekend waves — data loaded Friday night, new tills live Monday. Every wave ended with a joint reconciliation against the legacy numbers.",
        deliverables: ["Weekend migration playbook", "Central dashboard", "GST report pack"],
      },
      {
        title: "Hardening & handover",
        duration: "Weeks 19–21",
        body: "We added auto-replenishment suggestions, shrinkage alerts per category, and trained an internal admin team to run the catalog without us.",
        deliverables: ["Replenishment engine", "Shrinkage alerts", "Admin certification program"],
      },
    ],
    results: [
      { value: "−63%", label: "billing time", note: "average customer checkout across all 14 outlets" },
      { value: "−41%", label: "shrinkage", note: "within six months of live stock ledger" },
      { value: "0", label: "reconciliation days", note: "month-end close dropped from 5 days to same-day" },
      { value: "99.97%", label: "till uptime", note: "offline mode carried 100% of outages" },
    ],
    quote: {
      text: "For the first time in eleven years, our month-end closes on the 1st. The stores used to report to us; now we all report to one number.",
      author: "Rakesh Menon",
      role: "COO, MetroBazaar Retail",
    },
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Electron tills", "RabbitMQ"],
  },
  {
    slug: "pharma-distributor-erp-compliance",
    client: "Zenith Pharma Distribution",
    industry: "Pharmaceutical distribution",
    offering: "Custom ERP — batch, expiry & compliance",
    year: "2024",
    duration: "7 months",
    headline: "Batch-level traceability for a distributor that could not afford one bad recall",
    summary:
      "A pharmaceutical distributor supplying 900+ pharmacies needed batch-level traceability to satisfy audits — every box in, every box out, expiries watched daily. Their existing tooling was three Excel workbooks and a hero employee.",
    metrics: [
      { value: "100%", label: "batch traceability" },
      { value: "9 min", label: "full recall trace, was 2 days" },
      { value: "₹18L", label: "expiry write-offs avoided / yr" },
    ],
    challenge: [
      "Auditors asked a simple question — which pharmacies received batch B of drug X? — and the honest answer took two days of cross-referencing spreadsheets.",
      "Expiry management was reactive: stock that aged past its window was discovered when pharmacies returned it, at full write-off cost.",
      "The process lived in one senior employee's head. Every vacation was a compliance risk.",
    ],
    solution: [
      "We built a custom ERP whose core primitive is the batch: purchase orders receive against batch numbers, and every sale, return and transfer carries the batch it moved.",
      "FEFO (first-expire-first-out) picking is enforced at the counter, not suggested — the system physically won't allocate a shorter-dated batch when a longer one covers the order, with supervisor override logged.",
      "A daily expiry radar surfaces every batch inside its warning window with a suggested action: return to supplier under credit terms, discount, or destroy with documented disposal.",
    ],
    phases: [
      {
        title: "Compliance mapping",
        duration: "Weeks 1–6",
        body: "We sat with their QA head and their auditor. The data model was designed backwards from the audit questionnaire, so every report auditors ask for is a query, not a project.",
        deliverables: ["Audit requirement matrix", "Batch data model", "Validation protocol"],
      },
      {
        title: "Core ERP build",
        duration: "Weeks 7–18",
        body: "Purchasing, inventory, sales and returns built batch-first. Integration with their accounting package kept the CFO in familiar reports while the operational side went live.",
        deliverables: ["Batch-first inventory", "Tally integration", "Role-based approvals"],
      },
      {
        title: "FEFO & expiry radar",
        duration: "Weeks 19–24",
        body: "Allocation engine enforced FEFO, and the expiry radar went live with supplier-credit workflows attached to every warning.",
        deliverables: ["FEFO allocation engine", "Expiry radar", "Supplier credit automation"],
      },
      {
        title: "Recall drill & handover",
        duration: "Weeks 25–30",
        body: "We ran a mock recall: from product name to the full list of affected pharmacies and quantities in under ten minutes, evidenced end-to-end. Then we documented and handed over.",
        deliverables: ["Recall trace report", "Mock-audit evidence pack", "Ops runbook"],
      },
    ],
    results: [
      { value: "9 min", label: "recall trace", note: "product → batch → pharmacy, fully evidenced" },
      { value: "₹18L", label: "write-offs avoided", note: "annualised, via expiry radar + supplier credits" },
      { value: "0", label: "audit findings", note: "first audit after go-live, previously 11 findings" },
      { value: "3 → 0", label: "key-person risks", note: "process documented and system-enforced" },
    ],
    quote: {
      text: "Our auditor asked how long a recall trace would take. We showed him live — he thought we had prepared it in advance.",
      author: "Dr. Sunitha Rao",
      role: "Director, Zenith Pharma Distribution",
    },
    stack: ["NestJS", "PostgreSQL", "Prisma", "Next.js", "Tally bridge", "Docker"],
  },
  {
    slug: "food-court-qr-ordering-surge",
    client: "The Food Street Court",
    industry: "Food court — 12 kitchens",
    offering: "DeskgooOrder — QR ordering & KDS",
    year: "2025",
    duration: "10 weeks",
    headline: "Surviving Saturday: QR ordering for a food court that drowned at peak",
    summary:
      "Twelve kitchens shared a Saturday rush that queued out the door and emptied onto the street. Orders were shouted, bills were handwritten, and two kitchens' staff quit over the stress. We rolled out DeskgooOrder — table QR ordering and kitchen displays — in ten weeks.",
    metrics: [
      { value: "3.2×", label: "peak-hour order capacity" },
      { value: "−78%", label: "order errors" },
      { value: "22%", label: "average bill increase" },
    ],
    challenge: [
      "Peak throughput was capped by how fast a cashier could shout a table number. Kitchens queued on paper tickets that blew off counters and got ordered twice.",
      "Errors were expensive twice over — remade food that wasn't paid for, and refunds that turned into arguments.",
      "No data: the court couldn't say which kitchen sold what on Saturday, so rents were flat and popular kitchens subsidised empty ones.",
    ],
    solution: [
      "Customers scan a table QR, order from all twelve kitchens in one cart, and pay once — split payments included. The system routes each item to the right kitchen's display automatically.",
      "Kitchen Display Systems replaced paper: tickets arrive sorted, timers show aging, and completing an order is one tap. Nothing blows off a counter.",
      "Per-kitchen sales analytics gave management real numbers for revenue-share rent, and pushed daily sales reports to every kitchen owner at midnight.",
    ],
    phases: [
      {
        title: "Menu & flow design",
        duration: "Weeks 1–2",
        body: "We photographed and structured all twelve menus into one catalogue, designed the shared-cart flow, and piloted with one kitchen's regulars to validate ordering speed.",
        deliverables: ["Unified catalogue", "Shared cart UX", "Pilot feedback report"],
      },
      {
        title: "KDS rollout — 4 kitchens",
        duration: "Weeks 3–5",
        body: "First four kitchens cut paper entirely. We tuned ticket sorting per kitchen type — chaat needs batching, biryani needs prep-ahead timers.",
        deliverables: ["Kitchen displays", "Per-cuisine ticket rules", "Printer fallback"],
      },
      {
        title: "Full court + payments",
        duration: "Weeks 6–8",
        body: "All twelve kitchens live, UPI and cards settled through a single checkout, with instant refunds and a one-tap dispute flow for staff.",
        deliverables: ["Unified checkout", "Refund & dispute tools", "Staff console"],
      },
      {
        title: "Analytics & rents",
        duration: "Weeks 9–10",
        body: "Revenue-share dashboards replaced flat rents, and midnight sales reports went out automatically. Saturday's queue got chairs again.",
        deliverables: ["Revenue-share dashboard", "Midnight reports", "Ops handover"],
      },
    ],
    results: [
      { value: "3.2×", label: "peak capacity", note: "orders per hour at Saturday rush, same staff count" },
      { value: "−78%", label: "order errors", note: "remakes + refunds combined, vs paper baseline" },
      { value: "+22%", label: "average bill", note: "cross-kitchen add-ons in one cart" },
      { value: "12/12", label: "kitchens retained", note: "including the two that had resigned staff" },
    ],
    quote: {
      text: "Saturdays used to be survival. Now they're just our best day — the screens tell every kitchen what's next, and nobody shouts.",
      author: "Imran Qureshi",
      role: "Managing Partner, The Food Street Court",
    },
    stack: ["Next.js", "React Native", "WebSockets", "Node.js", "PostgreSQL", "Razorpay"],
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
