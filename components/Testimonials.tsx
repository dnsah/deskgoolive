"use client";

import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute top-0 right-0 -z-10 h-[24rem] w-[24rem] rounded-full bg-orchid/10 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="mb-4 text-xs tracking-[0.35em] text-fog uppercase">
              ( 04 — Words )
            </p>
            <h2 className="font-display text-5xl font-bold tracking-tight text-mist uppercase md:text-7xl">
              Kind <span className="text-gradient">words</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex items-center gap-2 text-fog">
              <span className="flex gap-0.5 text-ember">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span className="text-sm">Trusted by teams that ship</span>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className={`flex min-h-[280px] flex-col justify-between rounded-3xl border p-8 backdrop-blur-sm transition-colors duration-500 ${
                i === 1
                  ? "gradient-border bg-panel2"
                  : "border-line bg-panel hover:border-white/20"
              }`}
            >
              <div>
                <Quote className="mb-6 h-8 w-8 text-iris/70" />
                <blockquote className="text-base leading-relaxed text-mist/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-iris to-orchid font-display text-sm font-bold text-white">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-display font-semibold text-mist">{t.name}</span>
                  <span className="block text-sm text-fog">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
