"use client";

import { animate, motion } from "motion/react";
import { useEffect, useState } from "react";

const LOGO = "DESKGOO®";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 2,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => setTimeout(onDone, 350),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
      exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="overflow-hidden">
        <motion.h1
          className="font-display text-[13vw] leading-none font-bold tracking-tight text-mist md:text-8xl"
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          {LOGO.split("").map((ch, i) => (
            <motion.span
              key={i}
              className={ch === "®" ? "text-gradient align-super text-[0.35em]" : ""}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {ch}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      <motion.p
        className="mt-4 text-xs tracking-[0.4em] text-fog uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        Software · Web · Mobile · ERP
      </motion.p>

      {/* progress line */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-iris via-orchid to-aqua"
          style={{ width: `${count}%` }}
        />
      </div>

      <div className="absolute right-6 bottom-8 font-display text-5xl font-bold text-white/20 tabular-nums md:text-7xl">
        {count}%
      </div>
    </motion.div>
  );
}
