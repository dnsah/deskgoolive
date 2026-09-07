"use client";

import { useEffect } from "react";

/**
 * When the URL carries a hash (e.g. /contact#contact-form), scroll to that
 * element and focus its first form field. Retries briefly because streamed
 * Suspense content may not be in the DOM at hydration time.
 */
export default function HashFocus() {
  useEffect(() => {
    const handle = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
      let tries = 0;
      const attempt = () => {
        const el = document.getElementById(hash);
        if (!el) return false;
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        const field = el.querySelector<HTMLElement>("input, textarea, select");
        field?.focus({ preventScroll: true });
        return true;
      };
      if (!attempt()) {
        const timer = setInterval(() => {
          if (attempt() || ++tries > 10) clearInterval(timer);
        }, 200);
      }
    };

    handle();
    window.addEventListener("hashchange", handle);
    return () => window.removeEventListener("hashchange", handle);
  }, []);

  return null;
}
