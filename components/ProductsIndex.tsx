"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import Magnetic from "./Magnetic";
import PageHero from "./PageHero";
import Reveal from "./Reveal";

export default function ProductsIndex() {
  return (
    <>
      <PageHero
        eyebrow="( Products )"
        title={
          <>
            Live products.{" "}
            <span className="text-gradient">Real users.</span>
          </>
        }
        sub="We are not an agency that only ships decks — we design, build and operate our own software, trusted every day by hundreds of businesses and thousands of users."
      />

      {/* trust bar */}
      <section className="border-y border-line bg-panel/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-line lg:grid-cols-4">
          {[
            { v: "1M+", l: "Orders processed" },
            { v: "500+", l: "POS terminals live" },
            { v: "200+", l: "Companies on ERP" },
            { v: "99.9%", l: "Fleet uptime" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`flex flex-col items-center gap-1 px-4 py-10 text-center ${
                i >= 2 ? "border-t border-line lg:border-t-0" : ""
              }`}
            >
              <span className="font-display text-4xl font-bold text-mist md:text-5xl">{s.v}</span>
              <span className="text-xs tracking-[0.2em] text-fog uppercase">{s.l}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* product sections */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl space-y-24 px-6 lg:px-10 md:space-y-32">
          {PRODUCTS.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* info */}
              <div>
                <span className="gradient-border inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-2 text-[11px] tracking-[0.25em] text-fog uppercase">
                  <span className="animate-pulse-dot h-2 w-2 rounded-full bg-green-400" />
                  {p.status} product
                </span>
                <h2 className="mt-6 font-display text-5xl font-bold tracking-tight text-mist md:text-6xl">
                  {p.name}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-fog">{p.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-fog/80">{p.description}</p>

                <ul className="mt-8 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm text-mist/90">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-iris to-orchid text-white">
                        <Check className="h-3 w-3" />
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>

                <Magnetic strength={0.25} className="mt-10 inline-block">
                  <a
                    href={`mailto:hello@deskgoo.com?subject=${encodeURIComponent(
                      `Demo request — ${p.name}`
                    )}`}
                    className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-iris to-orchid px-7 py-4 text-sm font-semibold text-white shadow-[0_8px_40px_-8px_rgba(110,91,255,0.7)]"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    Book a demo
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </Magnetic>
              </div>

              {/* stat card */}
              <Reveal delay={0.15}>
                <div className="gradient-border relative overflow-hidden rounded-[2rem] border border-line bg-panel p-10 text-center md:p-14">
                  <div className="bg-grid mask-fade-radial absolute inset-0 opacity-60" />
                  <div className="animate-drift pointer-events-none absolute -top-16 right-0 h-56 w-56 rounded-full bg-iris/25 blur-[100px]" />
                  <div className="relative">
                    <span className="text-xs tracking-[0.3em] text-fog uppercase">
                      {p.statLabel}
                    </span>
                    <p className="text-gradient mt-4 font-display text-[clamp(4rem,10vw,8rem)] leading-none font-bold">
                      {p.stat}
                    </p>
                    <p className="mt-4 text-sm text-fog">{p.users}</p>
                  </div>
                </div>
              </Reveal>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
