import type { Metadata } from "next";
import { CalendarCheck, MonitorPlay, ShieldCheck } from "lucide-react";
import { Suspense } from "react";
import BookDemoForm from "@/components/BookDemoForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Book a demo — Deskgoo",
  description:
    "See DeskgooPOS, DeskgooERP or DeskgooOrder live with a product specialist. Pick a slot that works for you — 30 minutes, zero slideware.",
};

const PERKS = [
  {
    icon: MonitorPlay,
    title: "Live walkthrough",
    line: "Real product, your use-case — no slideware, no recording.",
  },
  {
    icon: CalendarCheck,
    title: "30 focused minutes",
    line: "See the workflows that matter to your business, nothing else.",
  },
  {
    icon: ShieldCheck,
    title: "No-pressure pricing",
    line: "You get the quote in writing. Decide on your own timeline.",
  },
];

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="( Book a demo )"
        title={
          <>
            See it running. <span className="text-gradient">Not a deck.</span>
          </>
        }
        sub="Pick a slot and a product specialist will walk you through the exact workflows you ask about — billing, inventory, reporting, ordering."
      />

      <section className="relative pb-28 md:pb-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-10">
          <div className="space-y-4">
            {PERKS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="group flex items-center gap-5 rounded-2xl border border-line bg-panel p-6 transition-colors duration-500 hover:border-iris/40">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-fog transition-all duration-500 group-hover:border-iris/50 group-hover:bg-iris/15 group-hover:text-mist">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-mist">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-fog">{item.line}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.35}>
              <div className="rounded-2xl border border-line bg-gradient-to-br from-iris/15 via-panel to-panel p-6">
                <p className="font-display text-lg font-semibold text-mist">
                  Can&apos;t find a slot that works?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  Email{" "}
                  <a
                    href="/contact"
                    className="text-gradient font-semibold"
                  >
                    hello@deskgoo.com
                  </a>{" "}
                  and we will set something up around your calendar.
                </p>
              </div>
            </Reveal>
          </div>

          <Suspense>
            <BookDemoForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
