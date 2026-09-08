"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const LOGO = "DESKGOO®";
const HOLD_MS = 950; // logo hold before slide-out

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Reduced motion or repeat visits within the session skip the show.
    let skip = false;
    try {
      skip =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        sessionStorage.getItem("deskgoo-intro") === "1";
    } catch {
      /* private mode */
    }
    if (skip) {
      onDone();
      return;
    }
    try {
      sessionStorage.setItem("deskgoo-intro", "1");
    } catch {
      /* ignore */
    }

    // Coarse counter (no rAF churn) + CSS progress bar keep TBT low.
    const start = performance.now();
    const timer = setInterval(() => {
      const t = Math.min(1, (performance.now() - start) / HOLD_MS);
      setCount(Math.round(t * 100));
      if (t === 1) {
        clearInterval(timer);
        setTimeout(onDone, 150);
      }
    }, 90);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
      exit={{ y: "-100%", transition: { duration: 0.45, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="overflow-hidden">
        <h1 className="font-display text-[13vw] leading-none font-bold tracking-tight text-mist md:text-8xl">
          {LOGO.split("").map((ch, i) => (
            <motion.span
              key={i}
              className={`inline-block ${ch === "®" ? "text-gradient align-super text-[0.35em]" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {ch}
            </motion.span>
          ))}
        </h1>
      </div>

      <motion.p
        className="mt-4 text-xs tracking-[0.4em] text-fog uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        Software · Web · Mobile · ERP
      </motion.p>

      {/* progress line — pure CSS, no per-frame JS */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-iris via-orchid to-aqua"
          style={{ animation: `deskgoo-load ${HOLD_MS}ms linear forwards` }}
        />
      </div>

      <div className="absolute right-6 bottom-8 font-display text-5xl font-bold text-white/20 tabular-nums md:text-7xl">
        {count}%
      </div>
    </motion.div>
  );
}
