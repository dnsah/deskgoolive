"use client";

import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "deskgoo-theme";

/**
 * Applies the persisted (or preferred) theme before first paint.
 * Inlined in <head> by the root layout to avoid a flash of the wrong theme.
 */
export const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("${STORAGE_KEY}");
    var light = stored === "light" || (!stored && window.matchMedia("(prefers-color-scheme: light)").matches);
    document.documentElement.classList.toggle("light", light);
  } catch (e) {}
})();
`;

/**
 * The icon crossfade is driven purely by CSS (the `light:` variant targets
 * html.light), so there is no state to hydrate and no post-mount flicker.
 */
export default function ThemeToggle() {
  const toggle = () => {
    const light = document.documentElement.classList.toggle("light");
    try {
      localStorage.setItem(STORAGE_KEY, light ? "light" : "dark");
    } catch {
      /* private mode — theme just won't persist */
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle light/dark theme"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-mist transition-colors hover:border-iris/50 hover:text-mist"
    >
      <Sun className="h-[18px] w-[18px] rotate-90 scale-0 opacity-0 transition-all duration-300 light:rotate-0 light:scale-100 light:opacity-100" />
      <Moon className="absolute h-[18px] w-[18px] rotate-0 scale-100 opacity-100 transition-all duration-300 light:-rotate-90 light:scale-0 light:opacity-0" />
    </button>
  );
}
