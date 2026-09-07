"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Building2 } from "lucide-react";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/case-studies";
import PageHero from "./PageHero";

export default function CaseStudiesIndex() {
  return (
    <>
      <PageHero
        eyebrow="( Case Studies )"
        title={
          <>
            Proof, with <span className="text-gradient">receipts.</span>
          </>
        }
        sub="Real deployments with real numbers — what broke, what we built, what changed. No logos-on-a-wall claims; every figure below is from the client's own reports."
      />

      <section className="relative pb-28 md:pb-36">
        <div className="mx-auto max-w-7xl space-y-6 px-6 lg:px-10">
          {CASE_STUDIES.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/case-studies/${c.slug}`}
                className="group grid gap-8 overflow-hidden rounded-3xl border border-line bg-panel p-8 transition-all duration-500 hover:border-iris/40 hover:bg-panel2 md:p-12 lg:grid-cols-[1fr_auto] lg:gap-14"
              >
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-fog">
                    <span className="flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 transition-colors group-hover:border-iris/40 group-hover:text-mist">
                      <Building2 className="h-3.5 w-3.5" />
                      {c.client}
                    </span>
                    <span>{c.industry}</span>
                    <span className="text-fog/50">•</span>
                    <span>{c.year}</span>
                  </div>
                  <h2 className="max-w-3xl font-display text-2xl font-bold leading-snug tracking-tight text-mist transition-colors group-hover:text-white md:text-3xl">
                    {c.headline}
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog md:text-base">
                    {c.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-gradient font-display text-2xl font-bold">{m.value}</p>
                        <p className="mt-1 text-xs tracking-[0.15em] text-fog uppercase">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <span className="hidden h-16 w-16 shrink-0 items-center justify-center self-center rounded-full border border-line transition-all duration-500 group-hover:rotate-45 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-iris group-hover:to-orchid group-hover:text-white lg:flex">
                  <ArrowUpRight className="h-6 w-6" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
