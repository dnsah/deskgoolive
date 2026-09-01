"use client";

import { motion } from "motion/react";

const ITEMS = [
  "WEBSITES",
  "MOBILE APPS",
  "ERP & POS",
  "CUSTOM SOFTWARE",
  "UI / UX",
  "SEO",
  "DIGITAL MARKETING",
  "E-COMMERCE",
];

function Row({ reverse = false, subtle = false }: { reverse?: boolean; subtle?: boolean }) {
  const list = [...ITEMS, ...ITEMS];
  return (
    <div className="flex w-max" style={{ animation: `var(--animate-${reverse ? "marquee-rev" : "marquee"})` }}>
      {list.map((item, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`px-6 font-display text-2xl font-bold tracking-tight whitespace-nowrap uppercase md:px-10 md:text-4xl ${
              subtle ? "text-white/25" : "text-ink"
            }`}
          >
            {item}
          </span>
          <span
            className={`text-xl ${subtle ? "text-white/15" : "text-ink/60"} md:text-2xl`}
            aria-hidden
          >
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="relative -my-6 overflow-hidden py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* bold gradient strip — Trionn style */}
        <div className="-rotate-2 scale-[1.03] border-y border-white/10 bg-gradient-to-r from-iris via-orchid to-aqua py-4 md:py-5">
          <Row />
        </div>
        {/* ghost strip underneath */}
        <div className="absolute inset-x-0 bottom-0 rotate-1 border-y border-line py-3 opacity-70 [margin-inline:-2rem]">
          <Row reverse subtle />
        </div>
      </motion.div>
    </section>
  );
}
