"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { getReactions, react, type ReactionSummary } from "@/lib/blog-api";

const EMOJIS = ["👍", "❤️", "🔥", "😂", "🤯", "👏"];
// The API strips variation selectors (❤️ vs ❤) — match that here.
const normalize = (emoji: string) => emoji.replace(/\uFE0F/g, "");

export default function ReactionBar({ slug }: { slug: string }) {
  const [state, setState] = useState<ReactionSummary | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    getReactions(slug).then(setState).catch(() => setState({ counts: {}, total: 0, mine: null }));
  }, [slug]);

  const pick = async (emoji: string) => {
    const key = normalize(emoji);
    if (busy) return;
    setBusy(true);
    // Optimistic update — reconcile with the server response.
    if (state) {
      const counts = { ...state.counts };
      if (state.mine) counts[state.mine] = Math.max(0, (counts[state.mine] ?? 1) - 1);
      const togglingOff = state.mine === key;
      if (!togglingOff) counts[key] = (counts[key] ?? 0) + 1;
      setState({
        counts,
        total: Object.values(counts).reduce((a, b) => a + b, 0),
        mine: togglingOff ? null : key,
      });
    }
    try {
      setState(await react(slug, key));
    } catch {
      // server unreachable — optimistic state stands
    } finally {
      setBusy(false);
    }
  };

  if (!state) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {EMOJIS.map((emoji) => {
        const key = normalize(emoji);
        const active = state.mine === key;
        const count = state.counts[key] ?? 0;
        return (
          <motion.button
            key={emoji}
            whileTap={{ scale: 0.85 }}
            onClick={() => pick(emoji)}
            aria-label={`React with ${emoji}`}
            aria-pressed={active}
            className={`flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm transition-all duration-300 ${
              active
                ? "border-iris/60 bg-iris/20 text-mist"
                : "border-line text-fog hover:border-iris/40 hover:text-mist"
            }`}
          >
            <span className="text-base leading-none">{emoji}</span>
            {count > 0 && <span className="text-xs font-semibold">{count}</span>}
          </motion.button>
        );
      })}
      {state.total > 0 && (
        <span className="ml-1 text-xs text-fog">{state.total} reactions</span>
      )}
    </div>
  );
}
