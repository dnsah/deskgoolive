"use client";

import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";
import type { Post } from "@/lib/posts";
import { formatDate } from "@/lib/posts";
import CommentsSection from "./CommentsSection";
import ReactionBar from "./ReactionBar";
import Reveal from "./Reveal";
import ShareBar from "./ShareBar";

export default function BlogPost({ post, related }: { post: Post; related: Post[] }) {
  return (
    <article className="relative pb-28 pt-40 md:pb-36 md:pt-48">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-fog transition-colors hover:text-mist"
          >
            <ArrowLeft className="h-4 w-4" />
            All articles
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-iris/40 bg-iris/15 px-3.5 py-1.5 text-xs font-semibold text-mist">
              {post.category}
            </span>
            <span className="text-xs text-fog">{formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5 text-xs text-fog">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-mist md:text-5xl">
            {post.title}
          </h1>

          <p className="mt-6 text-base leading-relaxed text-fog md:text-lg">
            {post.excerpt}
          </p>

          <div className="mt-8 flex items-center gap-3 border-y border-line py-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-gradient-to-br from-iris/30 to-aqua/30 text-sm font-bold text-mist">
              {post.author.name.charAt(0)}
            </span>
            <div>
              <p className="text-sm font-semibold text-mist">{post.author.name}</p>
              <p className="text-xs text-fog">{post.author.role}</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 space-y-8">
          {post.blocks.map((b, i) => (
            <Reveal key={i} delay={0.05}>
              {b.type === "h2" && (
                <h2 className="pt-4 font-display text-2xl font-bold tracking-tight text-mist md:text-3xl">
                  {b.text}
                </h2>
              )}
              {b.type === "p" && (
                <p className="text-base leading-[1.9] text-fog">{b.text}</p>
              )}
              {b.type === "quote" && (
                <blockquote className="rounded-2xl border border-line bg-panel px-8 py-6 font-display text-lg font-semibold leading-relaxed text-mist md:text-xl">
                  “{b.text}”
                </blockquote>
              )}
              {b.type === "list" && (
                <ul className="space-y-4">
                  {b.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-base leading-[1.8] text-fog">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-iris to-aqua" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>

        {/* Engagement: reactions + share */}
        <Reveal>
          <div className="mt-16 flex flex-col gap-6 rounded-3xl border border-line bg-panel p-8 sm:flex-row sm:items-center sm:justify-between">
            <ReactionBar slug={post.slug} />
            <ShareBar title={post.title} />
          </div>
        </Reveal>

        <CommentsSection slug={post.slug} />

        {related.length > 0 && (
          <div className="mt-20 border-t border-line pt-12">
            <p className="mb-6 text-xs tracking-[0.3em] text-fog/60 uppercase">
              Keep reading
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group rounded-2xl border border-line bg-panel p-6 transition-all duration-500 hover:border-iris/40 hover:bg-panel2"
                >
                  <p className="text-xs text-fog">{r.category}</p>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug text-mist transition-colors group-hover:text-white">
                    {r.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-fog transition-colors group-hover:text-mist">
                    Read
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
