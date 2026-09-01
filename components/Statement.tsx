"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

const TEXT =
  "We are a team of engineers and designers obsessed with craft — building software that makes businesses faster, smarter and ready to scale.";

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  const y = useTransform(progress, range, [14, 0]);
  return (
    <motion.span style={{ opacity, y }} className="mr-[0.28em] inline-block">
      {word}
    </motion.span>
  );
}

export default function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  const words = TEXT.split(" ");

  return (
    <section id="studio" className="relative py-28 md:py-40">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[26rem] w-[60rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-iris/10 blur-[160px]" />
      <div className="mx-auto max-w-5xl px-6 lg:px-10" ref={ref}>
        <p className="mb-10 text-xs tracking-[0.35em] text-fog uppercase">
          ( 02 — The studio )
        </p>
        <p className="font-display text-3xl leading-[1.25] font-medium tracking-tight text-mist sm:text-4xl md:text-5xl">
          {words.map((word, i) => (
            <Word
              key={i}
              word={word}
              progress={scrollYProgress}
              range={[i / words.length, Math.min(1, (i + 6) / words.length)]}
            />
          ))}
        </p>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 h-px origin-left bg-gradient-to-r from-iris via-orchid to-transparent"
        />
      </div>
    </section>
  );
}
