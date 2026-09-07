"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";
import { POSTS, formatDate } from "@/lib/posts";
import PageHero from "./PageHero";

export default function BlogIndex() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      <PageHero
        eyebrow="( Journal )"
        title={
          <>
            Notes from the <span className="text-gradient">build.</span>
          </>
        }
        sub="What we learn shipping software, websites, apps and growth work — written by the people who did the work, not a content farm."
      />

      <section className="relative pb-28 md:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Featured post */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid gap-8 overflow-hidden rounded-3xl border border-line bg-panel p-8 transition-all duration-500 hover:border-iris/40 hover:bg-panel2 md:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14"
            >
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-iris/40 bg-iris/15 px-3.5 py-1.5 text-xs font-semibold text-mist">
                    {featured.category}
                  </span>
                  <span className="text-xs text-fog">{formatDate(featured.date)}</span>
                  <span className="flex items-center gap-1.5 text-xs text-fog">
                    <Clock className="h-3.5 w-3.5" />
                    {featured.readTime}
                  </span>
                </div>
                <h2 className="max-w-3xl font-display text-3xl font-bold tracking-tight text-mist transition-colors group-hover:text-white md:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-fog md:text-base">
                  {featured.excerpt}
                </p>
              </div>
              <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-500 group-hover:rotate-45 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-iris group-hover:to-orchid group-hover:text-white lg:flex">
                <ArrowUpRight className="h-6 w-6" />
              </span>
            </Link>
          </motion.div>

          {/* Remaining posts */}
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-panel p-8 transition-all duration-500 hover:border-iris/40 hover:bg-panel2"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full border border-line px-3.5 py-1.5 text-xs text-fog transition-colors group-hover:border-iris/40 group-hover:text-mist">
                      {p.category}
                    </span>
                    <span className="text-xs text-fog">{formatDate(p.date)}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold leading-snug tracking-tight text-mist transition-colors group-hover:text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-fog">
                    {p.excerpt}
                  </p>
                  <span className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-fog transition-colors group-hover:text-mist">
                    Read article
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
