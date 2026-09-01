"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data";
import Reveal from "./Reveal";

/** Homepage preview of the live product suite — full page at /products. */
export default function ProductsStrip() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="mb-4 text-xs tracking-[0.35em] text-fog uppercase">
              ( Our products )
            </p>
            <h2 className="font-display text-5xl font-bold tracking-tight text-mist uppercase md:text-7xl">
              In the <span className="text-gradient">wild</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm leading-relaxed text-fog">
              We do not just build for clients — we ship and run our own software,
              used by thousands of people every single day.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl border border-line bg-panel p-8 transition-colors duration-500 hover:border-iris/40"
            >
              <div className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-iris/0 blur-3xl transition-all duration-700 group-hover:bg-iris/20" />

              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="gradient-border rounded-full border border-line bg-panel2 px-3.5 py-1.5 text-[11px] tracking-[0.2em] text-fog uppercase">
                    <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-green-400 align-middle" />
                    {p.status}
                  </span>
                  <span className="text-xs text-fog/60">{p.users}</span>
                </div>
                <h3 className="font-display text-3xl font-bold tracking-tight text-mist">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{p.tagline}</p>
              </div>

              <div className="mt-8 flex items-end justify-between border-t border-line pt-6">
                <span>
                  <span className="font-display text-4xl font-bold text-mist">
                    {p.stat}
                  </span>{" "}
                  <span className="block text-xs tracking-[0.2em] text-fog/70 uppercase">
                    {p.statLabel}
                  </span>
                </span>
                <Link
                  href="/products"
                  aria-label={`Learn more about ${p.name}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-fog transition-all duration-500 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-iris group-hover:to-orchid group-hover:text-white"
                >
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
