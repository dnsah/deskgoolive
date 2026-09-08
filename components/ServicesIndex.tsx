"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SERVICES } from "@/lib/data";
import PageHero from "./PageHero";
import Reveal from "./Reveal";

export default function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="( Services )"
        title={
          <>
            Four disciplines. <span className="text-gradient">One team.</span>
          </>
        }
        sub="Software, web, mobile and growth — delivered by the same people who build and run our own products. Pick a pillar to see exactly how we work."
      />

      <section className="relative pb-28 md:pb-36">
        <div className="mx-auto max-w-7xl space-y-6 px-6 lg:px-10">
          {SERVICES.map((s) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/services/${s.slug}`}
                className="group grid gap-8 overflow-hidden rounded-3xl border border-line bg-panel p-8 transition-all duration-500 hover:border-iris/40 hover:bg-panel2 md:p-12 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-14"
              >
                <span className="text-stroke-faint font-display text-7xl font-bold transition-all duration-500 group-hover:[-webkit-text-stroke-color:rgba(110,91,255,0.6)] md:text-8xl">
                  {s.index}
                </span>

                <div>
                  <div className="mb-4 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-fog transition-all duration-500 group-hover:border-iris/50 group-hover:bg-iris/15 group-hover:text-mist">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <h2 className="font-display text-3xl font-bold tracking-tight text-mist md:text-4xl">
                      {s.name}
                    </h2>
                  </div>
                  <p className="max-w-2xl text-sm leading-relaxed text-fog md:text-base">
                    {s.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.stack.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line px-3.5 py-1.5 text-xs text-fog"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-iris group-hover:to-orchid group-hover:text-white lg:flex">
                  <ArrowRight className="h-6 w-6" />
                </span>
              </Link>
            </motion.div>
          ))}

          <Reveal delay={0.15}>
            <p className="pt-4 text-center text-sm text-fog">
              Not sure which one you need?{" "}
              <Link href="/contact" className="text-gradient font-semibold">
                Tell us the problem
              </Link>{" "}
              — we will map the service to it.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
