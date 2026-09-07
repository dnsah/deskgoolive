"use client";

import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import Link from "next/link";
import type { CaseStudy } from "@/lib/case-studies";
import { CASE_STUDIES } from "@/lib/case-studies";
import CTA from "./CTA";
import Reveal from "./Reveal";

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="mt-20 first:mt-0">
        <p className="mb-3 text-xs tracking-[0.3em] text-fog/60 uppercase">{eyebrow}</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-mist md:text-4xl">
          {title}
        </h2>
        <div className="mt-6 space-y-5">{children}</div>
      </div>
    </Reveal>
  );
}

export default function CaseStudyDetail({ study }: { study: CaseStudy }) {
  const idx = CASE_STUDIES.findIndex((c) => c.slug === study.slug);
  const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];

  return (
    <>
      <article className="relative pb-24 pt-40 md:pt-48">
        {/* glow backdrop */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px]">
          <div className="bg-grid mask-fade-radial absolute inset-0 opacity-50" />
          <div className="animate-drift absolute top-1/3 left-1/2 h-96 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-iris/15 blur-[140px]" />
        </div>

        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm text-fog transition-colors hover:text-mist"
            >
              <ArrowLeft className="h-4 w-4" />
              All case studies
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-fog">
              <span className="rounded-full border border-iris/40 bg-iris/15 px-3.5 py-1.5 font-semibold text-mist">
                {study.offering}
              </span>
              <span>{study.client}</span>
              <span className="text-fog/50">•</span>
              <span>{study.industry}</span>
              <span className="text-fog/50">•</span>
              <span>
                {study.year} — {study.duration}
              </span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-mist md:text-5xl">
              {study.headline}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-fog md:text-lg">
              {study.summary}
            </p>
          </motion.div>

          {/* headline metrics band */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="gradient-border mt-12 grid gap-6 rounded-3xl border border-line bg-panel/80 p-8 sm:grid-cols-3 md:p-10"
          >
            {study.metrics.map((m) => (
              <div key={m.label} className="text-center sm:text-left">
                <p className="text-gradient font-display text-4xl font-bold md:text-5xl">
                  {m.value}
                </p>
                <p className="mt-2 text-xs tracking-[0.15em] text-fog uppercase">{m.label}</p>
              </div>
            ))}
          </motion.div>

          {/* narrative */}
          <div className="mt-16">
            <Section eyebrow="( 01 — The situation )" title="The challenge">
              {study.challenge.map((p, i) => (
                <p key={i} className="text-base leading-[1.9] text-fog">
                  {p}
                </p>
              ))}
            </Section>

            <Section eyebrow="( 02 — The build )" title="What we did">
              {study.solution.map((p, i) => (
                <p key={i} className="text-base leading-[1.9] text-fog">
                  {p}
                </p>
              ))}
            </Section>
          </div>

          {/* implementation phases */}
          <Reveal>
            <div className="mt-20">
              <p className="mb-3 text-xs tracking-[0.3em] text-fog/60 uppercase">
                ( 03 — How it ran )
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-mist md:text-4xl">
                Implementation, phase by phase
              </h2>
              <div className="mt-8 space-y-4">
                {study.phases.map((ph, i) => (
                  <motion.div
                    key={ph.title}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, delay: i * 0.05 }}
                    className="grid gap-5 rounded-2xl border border-line bg-panel p-7 transition-colors duration-500 hover:border-iris/40 md:grid-cols-[auto_1fr] md:gap-8"
                  >
                    <span className="text-stroke-faint font-display text-6xl font-bold leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-display text-xl font-bold text-mist">{ph.title}</h3>
                        <span className="rounded-full border border-line px-3 py-1 text-xs text-fog">
                          {ph.duration}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-fog">{ph.body}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {ph.deliverables.map((d) => (
                          <span
                            key={d}
                            className="rounded-full border border-line bg-panel2 px-3 py-1 text-xs text-fog"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* results */}
          <Reveal>
            <div className="mt-20">
              <p className="mb-3 text-xs tracking-[0.3em] text-fog/60 uppercase">
                ( 04 — The outcome )
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight text-mist md:text-4xl">
                Results, measured
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {study.results.map((r) => (
                  <div
                    key={r.label}
                    className="rounded-2xl border border-line bg-panel p-7 transition-colors duration-500 hover:border-iris/40"
                  >
                    <p className="text-gradient font-display text-4xl font-bold md:text-5xl">
                      {r.value}
                    </p>
                    <p className="mt-2 font-display text-lg font-semibold text-mist">{r.label}</p>
                    <p className="mt-1 text-sm text-fog">{r.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* quote */}
          <Reveal>
            <blockquote className="relative mt-20 rounded-3xl border border-line bg-gradient-to-br from-iris/15 via-panel to-panel p-8 md:p-12">
              <Quote className="h-8 w-8 text-iris/60" />
              <p className="mt-5 font-display text-xl font-semibold leading-relaxed text-mist md:text-2xl">
                “{study.quote.text}”
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-gradient-to-br from-iris/30 to-aqua/30 text-sm font-bold text-mist">
                  {study.quote.author.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-mist">{study.quote.author}</p>
                  <p className="text-xs text-fog">{study.quote.role}</p>
                </div>
              </footer>
            </blockquote>
          </Reveal>

          {/* stack */}
          <Reveal>
            <div className="mt-16">
              <p className="mb-4 text-xs tracking-[0.3em] text-fog/60 uppercase">
                Stack behind it
              </p>
              <div className="flex flex-wrap gap-2">
                {study.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line bg-panel px-4 py-2 text-xs text-fog"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* next study */}
          <Reveal>
            <Link
              href={`/case-studies/${next.slug}`}
              className="group mt-20 flex items-center justify-between gap-6 rounded-3xl border border-line bg-panel p-8 transition-all duration-500 hover:border-iris/40 hover:bg-panel2 md:p-10"
            >
              <div>
                <p className="text-xs tracking-[0.3em] text-fog/60 uppercase">Next case study</p>
                <h3 className="mt-3 max-w-xl font-display text-xl font-bold leading-snug text-mist transition-colors group-hover:text-white md:text-2xl">
                  {next.headline}
                </h3>
              </div>
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-500 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-iris group-hover:to-orchid group-hover:text-white">
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </Reveal>

          <Reveal>
            <div className="mt-10 text-center">
              <Link
                href="/demo#demo-form"
                className="inline-flex items-center gap-2 text-sm font-semibold text-fog transition-colors hover:text-mist"
              >
                <span className="text-gradient">Want results like these?</span>
                Book a demo
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      <CTA />
    </>
  );
}
