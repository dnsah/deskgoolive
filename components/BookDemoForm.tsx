"use client";

import { motion } from "motion/react";
import { ArrowUpRight, CalendarCheck, CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { bookDemo } from "@/lib/demo-api";

const PRODUCTS = [
  "DeskgooPOS — Point of Sale",
  "DeskgooERP — Business Operations",
  "DeskgooOrder — Ordering Platform",
  "Custom software project",
];

const SLOTS = ["10:00 – 11:00", "12:00 – 13:00", "15:00 – 16:00", "17:00 – 18:00"];

const TEAM_SIZES = ["1 – 10", "11 – 50", "51 – 200", "200+"];

const inputClass =
  "w-full rounded-xl border border-line bg-panel px-4 py-3.5 text-sm text-mist placeholder:text-fog/50 outline-none transition-all duration-300 focus:border-iris/60 focus:bg-panel2 focus:shadow-[0_0_0_3px_rgba(110,91,255,0.15)]";

const labelClass = "mb-2 block text-xs tracking-[0.2em] text-fog uppercase";

const todayIso = () => new Date().toISOString().slice(0, 10);

export default function BookDemoForm() {
  const searchParams = useSearchParams();
  // Pre-select the product passed as ?product=DeskgooPOS (from /products).
  const requestedProduct = PRODUCTS.find((p) =>
    p.startsWith(searchParams.get("product") ?? "\u0000")
  );
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setSending(true);
    setError("");
    try {
      await bookDemo({
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        company: String(data.get("company") ?? ""),
        product: String(data.get("product") ?? ""),
        date: String(data.get("date") ?? ""),
        slot: String(data.get("slot") ?? ""),
        teamSize: String(data.get("teamSize") ?? ""),
        notes: String(data.get("notes") ?? ""),
      });
      setSent(true);
    } catch {
      setError("Could not book your demo. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="gradient-border rounded-3xl border border-line bg-panel/60 p-8 backdrop-blur-sm md:p-10"
      >
        <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
          <CheckCircle2 className="h-14 w-14 text-green-400" />
          <h3 className="mt-6 font-display text-3xl font-bold text-mist">
            Your demo is booked
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-fog">
            A calendar invite is on its way to your inbox. We will walk you
            through the product live — bring your hardest questions.
          </p>
          <button
            onClick={() => setSent(false)}
            className="mt-8 text-sm font-semibold text-fog transition-colors hover:text-mist"
          >
            <span className="text-gradient">Book another slot</span>
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div id="demo-form" className="scroll-mt-28">
      <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="gradient-border rounded-3xl border border-line bg-panel/60 p-8 backdrop-blur-sm md:p-10"
    >
      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="demo-name" className={labelClass}>
              Your name
            </label>
            <input id="demo-name" name="name" required placeholder="Priya Sharma" className={inputClass} />
          </div>
          <div>
            <label htmlFor="demo-email" className={labelClass}>
              Work email
            </label>
            <input
              id="demo-email"
              name="email"
              type="email"
              required
              placeholder="you@company.com"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="demo-company" className={labelClass}>
              Company
            </label>
            <input id="demo-company" name="company" required placeholder="Sharma Retail Pvt Ltd" className={inputClass} />
          </div>
          <div>
            <label htmlFor="demo-team" className={labelClass}>
              Team size
            </label>
            <select id="demo-team" name="teamSize" className={inputClass} defaultValue={TEAM_SIZES[1]}>
              {TEAM_SIZES.map((t) => (
                <option key={t} value={t} className="bg-panel">
                  {t} people
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="demo-product" className={labelClass}>
            What would you like to see?
          </label>
          <select
            id="demo-product"
            name="product"
            className={inputClass}
            defaultValue={requestedProduct ?? PRODUCTS[0]}
          >
            {PRODUCTS.map((p) => (
              <option key={p} value={p} className="bg-panel">
                {p}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="demo-date" className={labelClass}>
              Preferred date
            </label>
            <input
              id="demo-date"
              name="date"
              type="date"
              required
              min={todayIso()}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="demo-slot" className={labelClass}>
              Time slot (IST)
            </label>
            <select id="demo-slot" name="slot" className={inputClass} defaultValue={SLOTS[0]}>
              {SLOTS.map((s) => (
                <option key={s} value={s} className="bg-panel">
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="demo-notes" className={labelClass}>
            Anything specific? <span className="normal-case">(optional)</span>
          </label>
          <textarea
            id="demo-notes"
            name="notes"
            rows={4}
            placeholder="e.g. multi-outlet billing, GST reports, WhatsApp ordering…"
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-iris to-orchid px-7 py-4 text-sm font-semibold text-white shadow-[0_8px_40px_-8px_rgba(110,91,255,0.7)] transition-shadow hover:shadow-[0_8px_60px_-4px_rgba(110,91,255,0.9)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          {sending ? "Booking…" : "Book my demo"}
          <CalendarCheck className="h-4 w-4" />
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
        </button>
        {error && <p className="text-center text-xs text-red-400">{error}</p>}
        <p className="text-center text-xs text-fog/60">
          30 minutes, live product walkthrough, zero slideware. No spam, ever.
        </p>
      </form>
      </motion.div>
    </div>
  );
}
