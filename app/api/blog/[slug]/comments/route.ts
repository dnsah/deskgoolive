import { NextResponse } from "next/server";

/**
 * In-memory comment store — survives per server process only.
 * Replace with a database when integrating a real backend
 * (the HTTP contract is documented in lib/blog-api.ts).
 */
const commentsBySlug = new Map<string, { id: string; author: string; text: string; createdAt: string }[]>();

type Params = { params: Promise<{ slug: string }> };

export async function GET(_req: Request, { params }: Params) {
  const { slug } = await params;
  const list = commentsBySlug.get(slug) ?? [];
  return NextResponse.json(list);
}

export async function POST(req: Request, { params }: Params) {
  const { slug } = await params;
  const body = (await req.json()) as { author?: string; text?: string };

  const author = (body.author ?? "").trim().slice(0, 60);
  const text = (body.text ?? "").trim().slice(0, 2000);
  if (!author || !text) {
    return NextResponse.json({ error: "Name and comment are required." }, { status: 400 });
  }

  const comment = {
    id: crypto.randomUUID(),
    author,
    text,
    createdAt: new Date().toISOString(),
  };
  const list = commentsBySlug.get(slug) ?? [];
  list.unshift(comment);
  commentsBySlug.set(slug, list);

  return NextResponse.json(comment, { status: 201 });
}
