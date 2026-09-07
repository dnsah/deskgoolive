import { NextResponse } from "next/server";

/**
 * In-memory demo-booking store — per server process only.
 * Swap for a database / CRM when integrating a real backend
 * (HTTP contract documented in lib/demo-api.ts).
 */
const bookings: object[] = [];

export async function POST(req: Request) {
  const body = (await req.json()) as Record<string, unknown>;

  const required = ["name", "email", "company", "product", "date", "slot"] as const;
  for (const field of required) {
    const v = body[field];
    if (typeof v !== "string" || !v.trim()) {
      return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 });
    }
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(body.email as string)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  const booking = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...body,
  };
  bookings.push(booking);

  return NextResponse.json({ ok: true, id: booking.id }, { status: 201 });
}
