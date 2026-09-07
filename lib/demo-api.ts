/**
 * Client-side access for demo bookings.
 *
 * To integrate a real backend, point API_BASE at it and implement:
 *   POST {API_BASE}/api/demo  body: BookingInput  -> { ok: true, id }
 */

export const API_BASE = "";

export type BookingInput = {
  name: string;
  email: string;
  company: string;
  product: string;
  date: string; // ISO yyyy-mm-dd
  slot: string;
  teamSize: string;
  notes?: string;
};

export async function bookDemo(input: BookingInput) {
  const res = await fetch(`${API_BASE}/api/demo`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  if (!res.ok) throw new Error(`Booking failed: ${res.status}`);
  return res.json() as Promise<{ ok: true; id: string }>;
}
