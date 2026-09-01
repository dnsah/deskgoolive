"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import CTA from "./CTA";
import Magnetic from "./Magnetic";
import PageHero from "./PageHero";
import Reveal from "./Reveal";

export default function ServiceDetail({ slug }: { slug: string }) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return null;

  const others = SERVICES.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow={`( Service — ${service.index} )`}
        title={
          <>
            {service.hero.split("—")[0]}
            {service.hero.includes("—") && (
              <span className="text-gradient">—{service.hero.split("—")[1]}</span>
            )}
          </>
        }
        sub={service.description}
      >
        <Magnetic strength={0.25} className="inline-block">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-iris to-orchid px-7 py-4 text-sm font-semibold text-white shadow-[0_8px_40px_-8px_rgba(110,91,255,0.7)] transition-shadow hover:shadow-[0_8px_60px_-4px_rgba(110,91,255,0.9)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </Link>
        </Magnetic>
      </PageHero>

      {/* capability grid */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="mb-12 font-display text-4xl font-bold tracking-tight text-mist uppercase md:text-6xl">
              What you <span className="text-gradient">get</span>
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {service.capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-line bg-panel p-8 transition-colors duration-500 hover:border-iris/40"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-iris to-orchid text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-mist">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fog">{c.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* outcomes + stack band */}
      <section className="border-y border-line bg-panel/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_1fr] lg:px-10">
          <div className="grid grid-cols-3 gap-4">
            {service.outcomes.map((o, i) => (
              <motion.div
                key={o.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="text-center"
              >
                <span className="font-display text-4xl font-bold text-mist md:text-5xl">
                  {o.value}
                </span>
                <span className="mt-2 block text-xs tracking-[0.2em] text-fog uppercase">
                  {o.label}
                </span>
              </motion.div>
            ))}
          </div>
          <div>
            <h3 className="mb-4 text-xs tracking-[0.3em] text-fog/60 uppercase">
              Tools we use
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-panel px-4 py-2 text-xs text-fog"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* other services */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="mb-10 font-display text-3xl font-bold tracking-tight text-mist uppercase md:text-5xl">
              Also in the <span className="text-gradient">toolbox</span>
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {others.map((o, i) => (
              <motion.div
                key={o.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
              >
                <Link
                  href={`/services/${o.slug}`}
                  className="group flex h-full flex-col justify-between rounded-3xl border border-line bg-panel p-7 transition-all duration-500 hover:-translate-y-2 hover:border-iris/40"
                >
                  <div>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-fog transition-colors group-hover:border-iris/50 group-hover:text-mist">
                      <o.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-bold text-mist">
                      {o.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-fog">{o.short}</p>
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-fog transition-colors group-hover:text-mist">
                    <span className="text-gradient">Explore</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
