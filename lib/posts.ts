export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readTime: string;
  author: { name: string; role: string };
  blocks: PostBlock[];
};

export const POSTS: Post[] = [
  {
    slug: "custom-erp-vs-off-the-shelf",
    title: "Custom ERP vs off-the-shelf: how to decide without regretting it",
    excerpt:
      "Off-the-shelf tools are cheaper on day one and expensive on day 400. Here is the decision framework we walk clients through before writing a single line of code.",
    category: "Software",
    date: "2026-08-18",
    readTime: "6 min read",
    author: { name: "Deskgoo Engineering", role: "Build team" },
    blocks: [
      {
        type: "p",
        text: "Every growing operation hits the same wall: the spreadsheet that ran the company stops working, and the packaged software that replaces it comes with a workflow that was designed for somebody else's company.",
      },
      { type: "h2", text: "The honest cost comparison" },
      {
        type: "p",
        text: "Packaged software bills you per seat, per month, forever — and charges again for the customization that makes it usable. Custom software costs more upfront and then costs almost nothing per seat. The crossover point, in our experience, lands between 18 and 36 months for teams of 15+ people.",
      },
      {
        type: "list",
        items: [
          "Choose off-the-shelf when your workflow is genuinely standard and you expect to stay small.",
          "Choose custom when your operation is your competitive advantage — inventory logic, pricing rules, fulfilment paths nobody else runs.",
          "Choose hybrid when you integrate a packaged tool for a commodity function (payroll, email) and build custom only where you differ.",
        ],
      },
      { type: "h2", text: "The question that decides it" },
      {
        type: "quote",
        text: "If a competitor could buy the same software and run the same workflow tomorrow, the software is not your edge — it is your tax.",
      },
      {
        type: "p",
        text: "When we build an ERP or POS system, we start from the operation as it actually runs on the floor, not from a feature checklist. That is the whole difference: the tool bends to the business, not the other way around.",
      },
    ],
  },
  {
    slug: "website-speed-is-a-feature",
    title: "Your website's speed is a feature, not a technical chore",
    excerpt:
      "Every 100ms of load time costs you conversions you will never see. What we measure, what we target, and the boring wins that matter most.",
    category: "Web",
    date: "2026-07-02",
    readTime: "5 min read",
    author: { name: "Deskgoo Design", role: "Web team" },
    blocks: [
      {
        type: "p",
        text: "Clients ask for animation, motion, wow. They rarely ask for speed — until they see the numbers. Speed is invisible when present and expensive when absent.",
      },
      { type: "h2", text: "What we actually measure" },
      {
        type: "list",
        items: [
          "Largest Contentful Paint under 2.5 seconds on mid-range mobile.",
          "Interaction to Next Paint under 200ms — the site must feel instant when tapped.",
          "Cumulative Layout Shift effectively zero; nothing jumps while loading.",
        ],
      },
      { type: "h2", text: "The boring wins" },
      {
        type: "p",
        text: "Most speed budgets are won before a single line of application code is written: serving images in modern formats at the sizes they are displayed, shipping less JavaScript, deferring what is below the fold. The fancy wins — edge rendering, streaming — matter, but they rescue a page that was built well to begin with.",
      },
      {
        type: "quote",
        text: "A fast site is not one that loads quickly once. It is one that stays fast on a three-year-old phone on a weak connection.",
      },
    ],
  },
  {
    slug: "shipping-a-mobile-app-users-keep",
    title: "Shipping a mobile app people actually keep using",
    excerpt:
      "Most apps are downloaded once and opened twice. The retention problem is a product-design problem, and it is solvable — with discipline.",
    category: "Mobile",
    date: "2026-05-27",
    readTime: "7 min read",
    author: { name: "Deskgoo Product", role: "Mobile team" },
    blocks: [
      {
        type: "p",
        text: "The average app loses most of its users within a week. The apps that survive share a trait that has nothing to do with features: they do one job, immediately, every time.",
      },
      { type: "h2", text: "Day-one design" },
      {
        type: "p",
        text: "We design the first session before anything else. What can a user accomplish before they have created an account? If the answer is nothing, the account wall moves or dies. Friction on the first screen is the most expensive friction in the entire product.",
      },
      {
        type: "list",
        items: [
          "The core action is reachable in one tap from launch — always.",
          "Every feature added must name the job it serves; 'nice to have' is a delete candidate.",
          "Offline-first where the data allows it: the app must never feel dead in an elevator.",
          "Release rhythm matters more than release size — small, boring, frequent updates.",
        ],
      },
      { type: "h2", text: "Retention is designed, not hoped for" },
      {
        type: "quote",
        text: "Push notifications do not retain users. They only notify the ones your product already retained.",
      },
      {
        type: "p",
        text: "Retention comes from the product becoming part of a routine — a habit loop with a trigger, an action, and a reward that is actually rewarding. We map that loop on paper before we open the codebase.",
      },
    ],
  },
  {
    slug: "seo-after-ai-search",
    title: "SEO when the answer is an AI, not ten blue links",
    excerpt:
      "Search results are increasingly summarized, cited, and condensed. What still works for visibility — and what quietly stopped mattering.",
    category: "Growth",
    date: "2026-04-09",
    readTime: "6 min read",
    author: { name: "Deskgoo Growth", role: "SEO & marketing team" },
    blocks: [
      {
        type: "p",
        text: "The front page of search is no longer a list of links; it is often a synthesized answer with citations. The tactical response is not to panic — it is to become the source worth citing.",
      },
      { type: "h2", text: "What still works" },
      {
        type: "list",
        items: [
          "First-party expertise: content written by people who have actually done the thing.",
          "Structured data and clean semantics so machines can parse what you claim.",
          "Answers, not articles: pages that resolve a specific question completely.",
          "Brand mentions and reviews across the web — the new backlink.",
        ],
      },
      { type: "h2", text: "What stopped mattering" },
      {
        type: "p",
        text: "Keyword density, exact-match domains, volume-for-volume's-sake blog factories. Publishing 40 thin posts a month now dilutes your authority rather than building it. One definitive page beats ten vague ones — with readers and with the machines summarizing them.",
      },
      {
        type: "quote",
        text: "Optimize for being quoted, not just for being ranked. The citation is the new click.",
      },
    ],
  },
];

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
