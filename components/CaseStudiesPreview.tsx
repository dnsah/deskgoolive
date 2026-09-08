"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/case-studies";
import Reveal from "./Reveal";

export default function CaseStudiesPreview() {
  return (
    <section className="relative border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs tracking-[0.3em] text-fog/60 uppercase">
                ( Case Studies )
              </p>
              <h2 className="font-display text-4xl font-bold tracking-tight text-mist md:text-5xl">
                Proof, with <span className="text-gradient">receipts.</span>
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="group flex items-center gap-1.5 text-sm font-semibold text-fog transition-colors hover:text-mist"
            >
              All case studies
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
            >
              <Link
                href={`/case-studies/${c.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-panel p-8 transition-all duration-500 hover:border-iris/40 hover:bg-panel2"
              >
                <div className="mb-4 flex items-center gap-3 text-xs text-fog">
                  <span className="rounded-full border border-line px-3.5 py-1.5 transition-colors group-hover:border-iris/40 group-hover:text-mist">
                    {c.client}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold leading-snug tracking-tight text-mist transition-colors group-hover:text-white">
                  {c.headline}
                </h3>
                <div className="mt-auto grid grid-cols-3 gap-2 pt-6">
                  {c.metrics.slice(0, 3).map((m) => (
                    <div key={m.label}>
                      <p className="text-gradient font-display text-xl font-bold">{m.value}</p>
                      <p className="mt-1 text-[11px] leading-tight tracking-wide text-fog uppercase">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
