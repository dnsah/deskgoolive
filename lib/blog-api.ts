/**
 * Client-side data access for blog engagement (comments & reactions).
 *
 * Everything goes through `API_BASE`. To integrate a real backend, change
 * API_BASE to e.g. "https://api.deskgoo.com" and implement the same
 * endpoints there — no component changes needed.
 *
 *   GET  {API_BASE}/api/blog/:slug/comments    -> Comment[]
 *   POST {API_BASE}/api/blog/:slug/comments    body: { author, text }  -> Comment
 *   GET  {API_BASE}/api/blog/:slug/reactions   -> { counts: Record<emoji, number>, total }
 *   POST {API_BASE}/api/blog/:slug/reactions   body: { emoji }         -> { counts, total, mine }
 */

export const API_BASE = "";

export type BlogComment = {
  id: string;
  author: string;
  text: string;
  createdAt: string; // ISO
};

export type ReactionSummary = {
  counts: Record<string, number>;
  total: number;
  mine: string | null; // emoji the current visitor already picked, if any
};

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json() as Promise<T>;
}

export function getComments(slug: string) {
  return request<BlogComment[]>(`/api/blog/${slug}/comments`);
}

export function postComment(slug: string, author: string, text: string) {
  return request<BlogComment>(`/api/blog/${slug}/comments`, {
    method: "POST",
    body: JSON.stringify({ author, text }),
  });
}

export function getReactions(slug: string) {
  return request<ReactionSummary>(`/api/blog/${slug}/reactions`);
}

export function react(slug: string, emoji: string) {
  return request<ReactionSummary>(`/api/blog/${slug}/reactions`, {
    method: "POST",
    body: JSON.stringify({ emoji }),
  });
}
