"use client";

import { animate, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 30, suffix: "+", label: "Happy clients" },
  { value: 10, suffix: "K+", label: "Daily product users" },
  { value: 6, suffix: "+", label: "Years of craft" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      <span className="text-gradient">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-line bg-panel/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-line lg:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className={`flex flex-col items-center gap-2 px-4 py-12 text-center md:py-16 ${
              i >= 2 ? "border-t border-line lg:border-t-0" : ""
            }`}
          >
            <span className="font-display text-5xl font-bold text-mist md:text-6xl">
              <Counter value={s.value} suffix={s.suffix} />
            </span>
            <span className="text-xs tracking-[0.25em] text-fog uppercase">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
