import type { SVGProps } from "react";
import Link from "next/link";
import { PRODUCTS, SERVICES } from "@/lib/data";

/* lucide-react dropped brand icons — inline SVGs instead */
const socialIconProps: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  className: "h-4 w-4",
  "aria-hidden": true,
};

function LinkedInIcon() {
  return (
    <svg {...socialIconProps} fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg {...socialIconProps} fill="currentColor">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg {...socialIconProps} fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg {...socialIconProps} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9.5" />
      <path d="M18.6 5.5C15 9.3 10 10.6 2.6 11M21.4 13c-6.3-1.3-11.6 1-15.7 6M9 2.9c4.2 5.7 5.7 9 7.6 17" />
    </svg>
  );
}

const SOCIALS = [
  { Icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { Icon: InstagramIcon, label: "Instagram", href: "#" },
  { Icon: XIcon, label: "X / Twitter", href: "#" },
  { Icon: DribbbleIcon, label: "Dribbble", href: "#" },
];

const SITEMAP = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-panel/40">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr_1fr_0.9fr]">
          <div>
            <Link href="/" className="font-display text-2xl font-bold text-mist">
              deskgoo<span className="text-gradient">®</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fog">
              A software company building products used by thousands every day —
              and custom web, mobile and marketing work for businesses that want
              to grow.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-fog transition-all duration-300 hover:-translate-y-1 hover:border-iris/50 hover:bg-iris/15 hover:text-mist"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Sitemap">
            <h3 className="mb-5 text-xs tracking-[0.3em] text-fog/60 uppercase">Explore</h3>
            <ul className="space-y-3">
              {SITEMAP.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-fog transition-colors hover:text-mist">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-5 text-xs tracking-[0.3em] text-fog/60 uppercase">Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-fog transition-colors hover:text-mist"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs tracking-[0.3em] text-fog/60 uppercase">Products</h3>
            <ul className="space-y-3">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <Link href="/products" className="text-sm text-fog transition-colors hover:text-mist">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 mb-4 text-xs tracking-[0.3em] text-fog/60 uppercase">Get in touch</h3>
            <a
              href="mailto:hello@deskgoo.com"
              className="text-sm text-fog transition-colors hover:text-mist"
            >
              hello@deskgoo.com
            </a>
          </div>
        </div>

        {/* giant wordmark */}
        <div className="mt-16 overflow-hidden" aria-hidden>
          <p className="text-stroke-faint -mb-[0.16em] text-center font-display text-[18vw] leading-none font-bold tracking-tight uppercase select-none">
            Deskgoo
          </p>
        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-fog/70 md:flex-row">
          <p>© {new Date().getFullYear()} Deskgoo. All rights reserved.</p>
          <p>
            Crafted with <span className="text-gradient font-semibold">code & caffeine</span> by the Deskgoo team
          </p>
        </div>
      </div>
    </footer>
  );
}
