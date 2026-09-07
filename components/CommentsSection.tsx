"use client";

import { MessageCircle, SendHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { getComments, postComment, type BlogComment } from "@/lib/blog-api";

function timeAgo(iso: string): string {
  const seconds = Math.max(1, Math.floor((Date.now() - new Date(iso).getTime()) / 1000));
  if (seconds < 60) return `${seconds}s ago`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 2592000) return `${Math.floor(seconds / 86400)}d ago`;
  return new Date(iso).toLocaleDateString();
}

export default function CommentsSection({ slug }: { slug: string }) {
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    getComments(slug).then(setComments).catch(() => setComments([]));
  }, [slug]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !text.trim() || sending) return;
    setSending(true);
    setError("");
    try {
      const created = await postComment(slug, author.trim(), text.trim());
      setComments((prev) => [created, ...prev]);
      setText("");
    } catch {
      setError("Could not post your comment. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="mt-16 border-t border-line pt-12">
      <h2 className="flex items-center gap-2.5 font-display text-2xl font-bold tracking-tight text-mist">
        <MessageCircle className="h-5 w-5 text-fog" />
        Comments
        <span className="text-base font-normal text-fog">({comments.length})</span>
      </h2>

      <form onSubmit={submit} className="mt-8 rounded-2xl border border-line bg-panel p-6">
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your name"
          maxLength={60}
          required
          className="w-full rounded-xl border border-line bg-transparent px-4 py-3 text-sm text-mist placeholder:text-fog/60 focus:border-iris/50 focus:outline-none"
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Share your thoughts…"
          maxLength={2000}
          required
          rows={3}
          className="mt-3 w-full resize-none rounded-xl border border-line bg-transparent px-4 py-3 text-sm leading-relaxed text-mist placeholder:text-fog/60 focus:border-iris/50 focus:outline-none"
        />
        <div className="mt-3 flex items-center justify-between">
          {error ? (
            <p className="text-xs text-red-400">{error}</p>
          ) : (
            <p className="text-xs text-fog/70">Be kind. Comments are moderated.</p>
          )}
          <button
            type="submit"
            disabled={sending || !author.trim() || !text.trim()}
            className="group flex items-center gap-1.5 rounded-full bg-mist px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            {sending ? "Posting…" : "Post comment"}
            <SendHorizontal className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </form>

      <div className="mt-8 space-y-4">
        {comments.length === 0 && (
          <p className="text-sm text-fog">No comments yet — start the conversation.</p>
        )}
        {comments.map((c) => (
          <article key={c.id} className="rounded-2xl border border-line bg-panel p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-gradient-to-br from-iris/30 to-aqua/30 text-sm font-bold text-mist">
                {c.author.charAt(0).toUpperCase()}
              </span>
              <div>
                <p className="text-sm font-semibold text-mist">{c.author}</p>
                <p className="text-xs text-fog">{timeAgo(c.createdAt)}</p>
              </div>
            </div>
            <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-fog">
              {c.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
