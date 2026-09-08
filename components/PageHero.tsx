"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  children?: ReactNode;
};

/** Shared animated hero band for inner pages. */
export default function PageHero({ eyebrow, title, sub, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="bg-grid mask-fade-radial absolute inset-0" />
        <div className="animate-drift absolute top-[-20%] left-[15%] h-[26rem] w-[26rem] rounded-full bg-iris/20 blur-[140px]" />
        <div className="animate-drift absolute top-[0%] right-[5%] h-[22rem] w-[22rem] rounded-full bg-orchid/15 blur-[140px] [animation-delay:-7s]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mb-5 text-xs tracking-[0.35em] text-fog uppercase"
        >
          {eyebrow}
        </motion.p>
        <h1 className="max-w-4xl font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[1.02] font-bold tracking-tight text-mist">
          {title}
        </h1>
        {/* gradient rule draws in under the title */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 h-px w-40 origin-left bg-gradient-to-r from-iris via-orchid to-transparent"
        />
        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-fog md:text-lg"
          >
            {sub}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-10"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
