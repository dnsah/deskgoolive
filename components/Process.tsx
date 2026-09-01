"use client";

import { motion } from "motion/react";
import { Compass, PenLine, Code2, Rocket, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

type Step = {
  n: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};

const STEPS: Step[] = [
  { n: "01", title: "Discover", desc: "We dig into your goals, users and market to define what winning looks like.", icon: Compass },
  { n: "02", title: "Design", desc: "Wireframes to polished interfaces — crafted around clarity and conversion.", icon: PenLine },
  { n: "03", title: "Develop", desc: "Clean, tested code shipped in weekly sprints with demos you can click.", icon: Code2 },
  { n: "04", title: "Deliver", desc: "Launch, measure, iterate. We stay on board to scale what works.", icon: Rocket },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16">
          <Reveal>
            <p className="mb-4 text-xs tracking-[0.35em] text-fog uppercase">
              ( 03 — Process )
            </p>
            <h2 className="font-display text-5xl font-bold tracking-tight text-mist uppercase md:text-7xl">
              How we <span className="text-gradient">work</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl border border-line bg-panel p-7 transition-colors duration-500 hover:border-iris/40"
            >
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-iris/0 blur-3xl transition-all duration-700 group-hover:bg-iris/20" />

              <div className="flex items-start justify-between">
                <span className="text-stroke-faint font-display text-6xl font-bold transition-all duration-500 group-hover:[-webkit-text-stroke-color:rgba(110,91,255,0.6)]">
                  {s.n}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-fog transition-all duration-500 group-hover:border-iris/50 group-hover:bg-iris/15 group-hover:text-mist">
                  <s.icon className="h-5 w-5" />
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-mist">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{s.desc}</p>
                <div className="mt-6 h-px w-full bg-line">
                  <div className="h-px w-0 bg-gradient-to-r from-iris to-aqua transition-all duration-700 group-hover:w-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
