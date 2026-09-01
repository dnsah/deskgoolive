"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import Magnetic from "./Magnetic";
import { useLoaded } from "./SiteShell";

const LINES = [
  { text: "WE CRAFT", style: "solid" },
  { text: "DIGITAL", style: "stroke" },
  { text: "THAT PERFORMS", style: "gradient" },
] as const;

const CHIPS = [
  { label: "Next.js", className: "left-[6%] top-[22%]", anim: "animate-float" },
  { label: "Flutter", className: "right-[7%] top-[26%]", anim: "animate-float-slow" },
  { label: "ERP / POS", className: "left-[9%] bottom-[24%]", anim: "animate-float-slow" },
  { label: "Cloud", className: "right-[10%] bottom-[30%]", anim: "animate-float" },
];

export default function Hero() {
  const started = useLoaded();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const lineAnim = (i: number) => ({
    initial: { y: "115%", rotate: 4 },
    animate: started ? { y: 0, rotate: 0 } : {},
    transition: { duration: 1, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24"
    >
      {/* ---- background ---- */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-grid mask-fade-radial absolute inset-0" />
        <motion.div style={{ y: orbY }} className="absolute inset-0">
          <div className="animate-drift absolute top-[-12%] left-[8%] h-[34rem] w-[34rem] rounded-full bg-iris/25 blur-[140px]" />
          <div className="animate-drift absolute top-[10%] right-[-6%] h-[30rem] w-[30rem] rounded-full bg-orchid/20 blur-[140px] [animation-delay:-6s]" />
          <div className="animate-drift absolute bottom-[-14%] left-[30%] h-[28rem] w-[28rem] rounded-full bg-aqua/15 blur-[150px] [animation-delay:-11s]" />
        </motion.div>
      </div>

      {/* floating tech chips */}
      {CHIPS.map((c) => (
        <motion.div
          key={c.label}
          className={`absolute z-10 hidden lg:block ${c.className}`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={started ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className={`${c.anim} gradient-border rounded-full border border-line bg-panel/60 px-5 py-2.5 font-display text-sm font-medium text-fog backdrop-blur-md`}
          >
            {c.label}
          </div>
        </motion.div>
      ))}

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto w-full max-w-7xl px-6 lg:px-10"
      >
        {/* badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-panel/60 px-4 py-2 text-xs tracking-widest text-fog uppercase backdrop-blur-md"
        >
          <span className="animate-pulse-dot h-2 w-2 rounded-full bg-green-400" />
          Software · Web · Mobile · Growth
        </motion.div>

        {/* headline */}
        <h1 className="font-display text-[clamp(2.9rem,10.5vw,9.5rem)] leading-[0.93] font-bold tracking-tight uppercase">
          {LINES.map((line, i) => (
            <span key={line.text} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className={`block ${
                  line.style === "stroke"
                    ? "text-stroke"
                    : line.style === "gradient"
                      ? "text-gradient"
                      : "text-mist"
                }`}
                {...lineAnim(i)}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* sub + ctas */}
        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="max-w-xl text-base leading-relaxed text-fog md:text-lg"
          >
            Deskgoo is a software company building{" "}
            <span className="text-mist">websites, mobile apps and products</span>{" "}
            that thousands of users rely on every day — and we can build yours
            too.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-iris to-orchid px-7 py-4 text-sm font-semibold text-white shadow-[0_8px_40px_-8px_rgba(110,91,255,0.7)] transition-shadow hover:shadow-[0_8px_60px_-4px_rgba(110,91,255,0.9)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-4 text-sm font-semibold text-mist transition-colors hover:border-white/30 hover:bg-white/5"
              >
                Explore services
                <ArrowDown className="h-4 w-4" />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={started ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16 flex items-center gap-3 text-xs tracking-[0.3em] text-fog/70 uppercase"
        >
          <span className="relative h-10 w-px overflow-hidden bg-white/15">
            <motion.span
              className="absolute top-0 left-0 h-4 w-px bg-gradient-to-b from-iris to-aqua"
              animate={{ y: [-16, 40] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
          Scroll to explore
        </motion.div>
      </motion.div>
    </section>
  );
}
