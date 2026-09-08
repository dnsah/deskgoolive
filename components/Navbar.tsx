"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SERVICES } from "@/lib/data";
import Magnetic from "./Magnetic";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-ink/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link
            href="/"
            className="font-display text-xl font-bold tracking-tight text-mist transition-colors hover:text-white"
          >
            deskgoo<span className="text-gradient">®</span>
          </Link>

          <ul className="hidden items-center gap-9 md:flex">
            {/* Services dropdown */}
            <li className="group relative">
              <Link
                href="/services"
                className={`flex items-center gap-1 text-sm transition-colors group-hover:text-mist ${
                  isActive("/services") ? "text-mist" : "text-fog"
                }`}
              >
                Services
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="w-[22rem] rounded-2xl border border-line bg-panel/95 p-2 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="group/item flex items-start gap-3.5 rounded-xl p-3 transition-colors hover:bg-white/5"
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line text-fog transition-colors group-hover/item:border-iris/50 group-hover/item:text-mist">
                        <s.icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-mist">{s.name}</span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-fog">{s.short}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`group relative text-sm transition-colors ${
                    isActive(l.href) ? "text-mist" : "text-fog hover:text-mist"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-iris to-aqua transition-all duration-300 ${
                      isActive(l.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Magnetic strength={0.25} className="hidden lg:block">
              <Link
                href="/contact#contact-form"
                className="flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-mist transition-colors hover:border-iris/50"
              >
                Start a project
              </Link>
            </Magnetic>
            <Magnetic strength={0.25} className="hidden md:block">
              <Link
                href="/demo#demo-form"
                className="group flex items-center gap-1.5 rounded-full bg-mist px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-white"
              >
                Book a demo
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </Link>
            </Magnetic>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-mist md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex flex-col overflow-y-auto bg-ink/95 backdrop-blur-2xl"
            initial={{ opacity: 0, clipPath: "circle(0% at 92% 6%)" }}
            animate={{ opacity: 1, clipPath: "circle(140% at 92% 6%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 92% 6%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex h-[72px] items-center justify-between px-6">
              <span className="font-display text-xl font-bold text-mist">
                deskgoo<span className="text-gradient">®</span>
              </span>
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-mist"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            <nav className="flex flex-1 flex-col gap-1 px-8 py-8">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-2 text-xs tracking-[0.3em] text-fog/60 uppercase"
              >
                Services
              </motion.p>
              {SERVICES.map((s, i) => (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                >
                  <Link
                    href={`/services/${s.slug}`}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-4 font-display text-2xl font-bold text-mist"
                  >
                    {s.name}
                  </Link>
                </motion.div>
              ))}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mb-2 mt-8 text-xs tracking-[0.3em] text-fog/60 uppercase"
              >
                Company
              </motion.p>
              {[{ label: "Home", href: "/" }, ...NAV_LINKS, { label: "All services", href: "/services" }, { label: "Book a demo", href: "/demo#demo-form" }].map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + i * 0.05, duration: 0.5 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-4 font-display text-2xl font-bold text-mist"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
