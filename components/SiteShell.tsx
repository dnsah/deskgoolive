"use client";

import { AnimatePresence } from "motion/react";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import CustomCursor from "./CustomCursor";
import Footer from "./Footer";
import HashFocus from "./HashFocus";
import Navbar from "./Navbar";
import Preloader from "./Preloader";

const LoadedContext = createContext(true);

/** True once the intro preloader has finished (false only on initial page load). */
export const useLoaded = () => useContext(LoadedContext);

export default function SiteShell({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.overflow = loading ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [loading]);

  return (
    <LoadedContext.Provider value={!loading}>
      <AnimatePresence>
        {loading && <Preloader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <CustomCursor />
      <HashFocus />
      <div className="noise-overlay" aria-hidden />

      <Navbar />
      <main>{children}</main>
      <Footer />
    </LoadedContext.Provider>
  );
}
