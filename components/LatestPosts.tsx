"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { POSTS, formatDate } from "@/lib/posts";
import Reveal from "./Reveal";

export default function LatestPosts() {
  const posts = POSTS.slice(0, 3);

  return (
    <section className="relative border-t border-line py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs tracking-[0.3em] text-fog/60 uppercase">
                ( Journal )
              </p>
              <h2 className="font-display text-4xl font-bold tracking-tight text-mist md:text-5xl">
                Notes from the <span className="text-gradient">build.</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="group flex items-center gap-1.5 text-sm font-semibold text-fog transition-colors hover:text-mist"
            >
              All articles
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
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
  );
}
