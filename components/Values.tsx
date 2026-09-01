"use client";

import { motion } from "motion/react";
import { Gem, MessagesSquare, Rocket, LifeBuoy, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

const VALUES: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Gem,
    title: "Craft over shortcuts",
    desc: "We sweat the details users never notice — because they feel them everywhere.",
  },
  {
    icon: MessagesSquare,
    title: "Clear communication",
    desc: "Weekly demos, honest timelines, no jargon. You always know where things stand.",
  },
  {
    icon: Rocket,
    title: "Ship fast, iterate",
    desc: "Working software in weeks, not months. Then we measure, learn and improve.",
  },
  {
    icon: LifeBuoy,
    title: "Support forever",
    desc: "Launch day is the start of the relationship, not the end. We stay on board.",
  },
];

export default function Values() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16">
          <Reveal>
            <p className="mb-4 text-xs tracking-[0.35em] text-fog uppercase">
              ( What we believe )
            </p>
            <h2 className="font-display text-5xl font-bold tracking-tight text-mist uppercase md:text-7xl">
              How we <span className="text-gradient">think</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-line bg-panel p-7 transition-colors duration-500 hover:border-iris/40"
            >
              <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-line text-fog transition-all duration-500 group-hover:border-iris/50 group-hover:bg-iris/15 group-hover:text-mist">
                <v.icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-bold text-mist">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-fog">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
