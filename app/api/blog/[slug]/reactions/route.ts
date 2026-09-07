import { NextResponse } from "next/server";

/**
 * In-memory emoji-reaction store, one reaction per visitor per post
 * (visitor identified by a `visitor` cookie; picking a new emoji replaces
 * the old one). Replace with a database when integrating a real backend.
 */

const REACTIONS = ["👍", "❤️", "🔥", "😂", "🤯", "👏"] as const;
// Normalize variation selectors (e.g. ❤️ vs ❤) so clients agree with the store.
const normalize = (emoji: string) => emoji.replace(/\uFE0F/g, "");
const REACTION_SET = new Set(REACTIONS.map(normalize));

type Store = { counts: Record<string, number>; mine: Record<string, string> };
const storeBySlug = new Map<string, Store>();

type Params = { params: Promise<{ slug: string }> };

function getStore(slug: string): Store {
  let s = storeBySlug.get(slug);
  if (!s) {
    s = { counts: {}, mine: {} };
    storeBySlug.set(slug, s);
  }
  return s;
}

function summary(slug: string, visitor: string) {
  const s = getStore(slug);
  return {
    counts: s.counts,
    total: Object.values(s.counts).reduce((a, b) => a + b, 0),
    mine: s.mine[visitor] ?? null,
  };
}

function getVisitor(req: Request): string {
  const cookie = req.headers.get("cookie") ?? "";
  const match = cookie.match(/(?:^|;\s*)visitor=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : "";
}

export async function GET(req: Request, { params }: Params) {
  const { slug } = await params;
  return NextResponse.json(summary(slug, getVisitor(req)));
}

export async function POST(req: Request, { params }: Params) {
  const { slug } = await params;
  const { emoji } = (await req.json()) as { emoji?: string };
  if (!emoji || !REACTION_SET.has(normalize(emoji))) {
    return NextResponse.json({ error: "Unknown reaction." }, { status: 400 });
  }
  const normalized = normalize(emoji);

  let visitor = getVisitor(req);
  const res = NextResponse.json({});
  if (!visitor) {
    visitor = crypto.randomUUID();
    res.cookies.set("visitor", visitor, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  const s = getStore(slug);
  const previous = s.mine[visitor];
  if (previous === normalized) {
    // toggle off
    s.counts[previous] = Math.max(0, (s.counts[previous] ?? 1) - 1);
    delete s.mine[visitor];
  } else {
    if (previous) s.counts[previous] = Math.max(0, (s.counts[previous] ?? 1) - 1);
    s.counts[normalized] = (s.counts[normalized] ?? 0) + 1;
    s.mine[visitor] = normalized;
  }

  const body = summary(slug, visitor);
  return NextResponse.json(body, { headers: res.headers });
}
