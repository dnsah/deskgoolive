"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Mail } from "lucide-react";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 md:py-44">
      {/* glow backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-fade-radial absolute inset-0 opacity-60" />
        <div className="animate-drift absolute top-1/2 left-1/2 h-[30rem] w-[44rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-iris/20 blur-[150px]" />
        <div className="absolute right-[15%] bottom-[10%] h-[18rem] w-[18rem] rounded-full bg-aqua/15 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="mb-6 text-xs tracking-[0.35em] text-fog uppercase">
            ( 05 — Contact )
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-[clamp(2.8rem,9vw,8rem)] leading-[0.95] font-bold tracking-tight uppercase">
            <span className="block text-mist">Have an idea?</span>
            <span className="text-gradient block">Let&apos;s build it.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-fog md:text-lg">
            Tell us where your business needs to go — we will engineer the software
            that gets you there. Free consultation, honest timelines.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <Magnetic strength={0.3}>
              <a
                href="mailto:hello@deskgoo.com"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-iris to-orchid px-9 py-5 text-base font-semibold text-white shadow-[0_10px_50px_-10px_rgba(110,91,255,0.8)] transition-shadow hover:shadow-[0_10px_70px_-6px_rgba(110,91,255,1)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <Mail className="h-5 w-5" />
                hello@deskgoo.com
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="mt-10 text-xs tracking-[0.3em] text-fog/60 uppercase"
          >
            Response within 24 hours
          </motion.p>
        </Reveal>
      </div>
    </section>
  );
}
