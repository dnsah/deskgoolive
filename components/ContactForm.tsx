"use client";

import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SERVICES } from "@/lib/data";

const inputClass =
  "w-full rounded-xl border border-line bg-panel px-4 py-3.5 text-sm text-mist placeholder:text-fog/50 outline-none transition-all duration-300 focus:border-iris/60 focus:bg-panel2 focus:shadow-[0_0_0_3px_rgba(110,91,255,0.15)]";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const interest = data.get("interest");
    const message = data.get("message");
    const subject = encodeURIComponent(`Project enquiry — ${interest} (${name})`);
    const body = encodeURIComponent(
      `Hi Deskgoo team,\n\nName: ${name}\nEmail: ${email}\nInterested in: ${interest}\n\n${message}\n`
    );
    window.location.href = `mailto:hello@deskgoo.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div id="contact-form" className="scroll-mt-28">
      <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="gradient-border rounded-3xl border border-line bg-panel/60 p-8 backdrop-blur-sm md:p-10"
    >
      {sent ? (
        <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
          <CheckCircle2 className="h-14 w-14 text-green-400" />
          <h3 className="mt-6 font-display text-3xl font-bold text-mist">
            Your email app is opening
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-fog">
            We pre-filled everything — just hit send. We reply within 24 hours
            on working days.
          </p>
          <button
            onClick={() => setSent(false)}
            className="mt-8 text-sm font-semibold text-fog transition-colors hover:text-mist"
          >
            <span className="text-gradient">Send another enquiry</span>
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs tracking-[0.2em] text-fog uppercase">
                Your name
              </label>
              <input id="name" name="name" required placeholder="Priya Sharma" className={inputClass} />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-xs tracking-[0.2em] text-fog uppercase">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="interest" className="mb-2 block text-xs tracking-[0.2em] text-fog uppercase">
              I am interested in
            </label>
            <select id="interest" name="interest" className={inputClass} defaultValue={SERVICES[0].name}>
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.name} className="bg-panel">
                  {s.name}
                </option>
              ))}
              <option value="A Deskgoo product (POS / ERP / Order)" className="bg-panel">
                A Deskgoo product (POS / ERP / Order)
              </option>
              <option value="Something else" className="bg-panel">
                Something else
              </option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-xs tracking-[0.2em] text-fog uppercase">
              Tell us about the project
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="What are you building, and what does success look like?"
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-iris to-orchid px-7 py-4 text-sm font-semibold text-white shadow-[0_8px_40px_-8px_rgba(110,91,255,0.7)] transition-shadow hover:shadow-[0_8px_60px_-4px_rgba(110,91,255,0.9)]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            Send enquiry
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </button>
          <p className="text-center text-xs text-fog/60">
            Opens your email app with everything pre-filled. No spam, ever.
          </p>
        </form>
      )}
      </motion.div>
    </div>
  );
}
