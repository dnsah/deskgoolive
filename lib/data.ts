import {
  Boxes,
  Code2,
  PenTool,
  Smartphone,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Services — 4 pillars, each with its own page at /services/[slug]   */
/* ------------------------------------------------------------------ */

export type ServicePillar = {
  slug: string;
  index: string;
  name: string;
  short: string;
  hero: string;
  description: string;
  icon: LucideIcon;
  capabilities: { title: string; desc: string }[];
  stack: string[];
  outcomes: { value: string; label: string }[];
};

export const SERVICES: ServicePillar[] = [
  {
    slug: "software-development",
    index: "01",
    name: "Software Development",
    short: "Custom software, ERP & POS systems built for how you work",
    hero: "Software built around how your business actually works",
    description:
      "Off-the-shelf tools force you to work their way. We design and engineer custom software — ERPs, POS systems, internal tools and integrations — that fits your operation exactly, scales with it, and stays supported for years.",
    icon: Code2,
    capabilities: [
      { title: "Custom Software", desc: "Purpose-built applications for operations no generic tool can serve." },
      { title: "ERP & POS Systems", desc: "Inventory, billing, accounting and reporting — unified in one system." },
      { title: "Integrations & APIs", desc: "Connect payments, marketplaces, logistics and whatever you already run." },
      { title: "Legacy Modernization", desc: "Move ageing systems to a modern, fast, cloud-ready stack — without downtime." },
    ],
    stack: ["Node.js", "Next.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    outcomes: [
      { value: "50+", label: "Systems shipped" },
      { value: "99.9%", label: "Uptime in production" },
      { value: "24/7", label: "Support cover" },
    ],
  },
  {
    slug: "web-design",
    index: "02",
    name: "Website & Web App Design",
    short: "Marketing sites, web apps & e-commerce that convert",
    hero: "Websites that look beautiful — and sell harder",
    description:
      "Your website is your hardest-working employee. We design and build marketing sites, SaaS web apps and e-commerce stores that load fast, rank well, and turn visitors into enquiries and orders.",
    icon: PenTool,
    capabilities: [
      { title: "Marketing Websites", desc: "Brand-grade design with copy structure built to convert." },
      { title: "Web & SaaS Apps", desc: "Dashboards and platforms with clean UX and solid architecture." },
      { title: "E-commerce", desc: "Storefronts with smooth checkout, payments and inventory hooks." },
      { title: "CMS & Content", desc: "Edit everything yourself — structured content, no developer needed." },
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shopify", "Sanity"],
    outcomes: [
      { value: "2x", label: "Avg. enquiry lift" },
      { value: "<1s", label: "Target page load" },
      { value: "100%", label: "SEO-ready builds" },
    ],
  },
  {
    slug: "mobile-apps",
    index: "03",
    name: "Mobile App Development",
    short: "iOS & Android apps people love to use daily",
    hero: "Native-quality apps, one streamlined build",
    description:
      "From idea to App Store — we design, build and publish mobile apps that feel native, sync in real time and keep users coming back. One team handles strategy, design, development and release.",
    icon: Smartphone,
    capabilities: [
      { title: "iOS & Android", desc: "Both platforms from one codebase — or fully native when it matters." },
      { title: "Flutter & React Native", desc: "Fast, cost-efficient cross-platform builds without the compromise." },
      { title: "Store Launch", desc: "App Store and Play Store publishing, compliance and release management." },
      { title: "Push & Analytics", desc: "Notifications, deep links and funnels wired in from day one." },
    ],
    stack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Supabase"],
    outcomes: [
      { value: "4.8★", label: "Avg. store rating" },
      { value: "1M+", label: "App installs driven" },
      { value: "100%", label: "On-time launches" },
    ],
  },
  {
    slug: "seo-marketing",
    index: "04",
    name: "SEO & Digital Marketing",
    short: "Search, ads & content that compound over time",
    hero: "Get found. Get chosen. Get remembered.",
    description:
      "Great products still lose to visible ones. We run technical SEO, paid campaigns and content programs that put you in front of buyers with intent — and report on revenue, not vanity metrics.",
    icon: TrendingUp,
    capabilities: [
      { title: "Technical & On-page SEO", desc: "Core Web Vitals, schema, content architecture — the full stack of ranking factors." },
      { title: "Google & Meta Ads", desc: "Campaigns tuned to cost-per-acquisition, not clicks." },
      { title: "Content & Social", desc: "Calendars, creatives and copy that build a brand people remember." },
      { title: "Analytics & CRO", desc: "GA4, funnels and A/B tests that squeeze more from the same traffic." },
    ],
    stack: ["GA4", "Search Console", "Ahrefs", "Google Ads", "Meta Ads", "Hotjar"],
    outcomes: [
      { value: "3x", label: "Avg. organic growth" },
      { value: "-32%", label: "Avg. cost per lead" },
      { value: "Monthly", label: "Revenue reporting" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Products — live software with real user bases                      */
/* ------------------------------------------------------------------ */

export type Product = {
  id: string;
  name: string;
  status: string;
  tagline: string;
  description: string;
  stat: string;
  statLabel: string;
  users: string;
  points: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "pos",
    name: "DeskgooPOS",
    status: "Live",
    tagline: "Lightning-fast billing & inventory for retail stores and restaurants.",
    description:
      "The POS that keeps selling even when the internet does not. Built with store owners, refined across hundreds of counters.",
    stat: "500+",
    statLabel: "active terminals",
    users: "10,000+ bills printed daily",
    points: [
      "One-tap billing with GST invoices",
      "Offline-first — never stop selling",
      "Inventory, variants & barcode sync",
      "Daily sales & profit reports",
    ],
  },
  {
    id: "erp",
    name: "DeskgooERP",
    status: "Live",
    tagline: "Run your whole business — stock, accounts, HR, CRM — in one suite.",
    description:
      "The system growing companies switch to when spreadsheets start breaking. Modular, so you turn on what you need.",
    stat: "200+",
    statLabel: "companies run on it",
    users: "3,000+ daily active users",
    points: [
      "Inventory, purchasing & accounting unified",
      "Role-based dashboards for every team",
      "HR, payroll & CRM modules",
      "Open API for custom integrations",
    ],
  },
  {
    id: "order",
    name: "DeskgooOrder",
    status: "Live",
    tagline: "QR menu ordering & kitchen display for cafes, food courts and QSRs.",
    description:
      "Customers scan, order and pay from the table — no app download. Your kitchen sees every ticket live.",
    stat: "1M+",
    statLabel: "orders processed",
    users: "150+ kitchens onboard",
    points: [
      "Scan-to-order — no app needed",
      "Live kitchen display screens",
      "Upsell prompts that raise ticket size",
      "Owner app with live sales",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Homepage service rows (link into pillar pages)                     */
/* ------------------------------------------------------------------ */

export const HOME_SERVICE_ROWS = [
  { index: "01", title: "Website Development", tags: ["Next.js", "React", "E-commerce", "CMS"], href: "/services/web-design", icon: PenTool },
  { index: "02", title: "Mobile App Development", tags: ["iOS", "Android", "Flutter"], href: "/services/mobile-apps", icon: Smartphone },
  { index: "03", title: "ERP & POS Software", tags: ["Inventory", "Billing", "Analytics"], href: "/services/software-development", icon: Boxes },
  { index: "04", title: "SEO & Digital Marketing", tags: ["SEO", "Ads", "Content"], href: "/services/seo-marketing", icon: TrendingUp },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "DeskgooPOS runs all four of our stores. Billing that used to take minutes now takes seconds — and the reports are spot on.",
    name: "Rahul K.",
    role: "Retail Chain Owner",
  },
  {
    quote:
      "From design to launch, the team was responsive at every step. Our new website doubled our enquiries within a month.",
    name: "Arun M.",
    role: "Founder, Services Company",
  },
  {
    quote:
      "We moved from spreadsheets to DeskgooERP in three weeks. Purchase, stock and accounts finally talk to each other.",
    name: "Meera T.",
    role: "Manufacturing Director",
  },
];
