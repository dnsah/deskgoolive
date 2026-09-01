"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { HOME_SERVICE_ROWS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="mb-4 text-xs tracking-[0.35em] text-fog uppercase">
              ( 01 — Services )
            </p>
            <h2 className="font-display text-5xl font-bold tracking-tight text-mist uppercase md:text-7xl">
              What we <span className="text-gradient">do</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-sm leading-relaxed text-fog">
              Four disciplines, one team. Everything your product needs —
              strategy, design, engineering and growth — under a single roof.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-line">
          {HOME_SERVICE_ROWS.map((s, i) => (
            <motion.div
              key={s.index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="border-b border-line"
            >
              <Link
                href={s.href}
                className="group relative block overflow-hidden"
              >
                {/* hover fill sweep */}
                <div className="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-r from-iris/15 via-orchid/10 to-aqua/10 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100" />

                <div className="relative z-10 flex items-center gap-6 px-2 py-8 transition-all duration-500 group-hover:px-6 md:gap-10 md:py-10">
                  <span className="font-display text-sm font-medium text-fog/60 tabular-nums transition-colors group-hover:text-iris">
                    ({s.index})
                  </span>

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-fog transition-all duration-500 group-hover:border-iris/50 group-hover:bg-iris/15 group-hover:text-mist md:h-14 md:w-14">
                    <s.icon className="h-5 w-5 md:h-6 md:w-6" />
                  </span>

                  <h3 className="flex-1 font-display text-2xl font-bold tracking-tight text-mist transition-transform duration-500 group-hover:translate-x-2 sm:text-3xl md:text-5xl">
                    {s.title}
                  </h3>

                  <div className="hidden gap-2 xl:flex">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line px-3.5 py-1.5 text-xs text-fog transition-colors group-hover:border-white/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-500 group-hover:rotate-45 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-iris group-hover:to-orchid group-hover:text-white md:h-14 md:w-14">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-fog transition-colors hover:text-mist"
          >
            <span className="text-gradient">View all services in detail</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
