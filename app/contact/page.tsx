import type { Metadata } from "next";
import { Clock, Mail, MessageSquare } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ContactMap from "@/components/ContactMap";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact — Deskgoo",
  description:
    "Tell us what you are building — software, website, mobile app or marketing. We reply within 24 hours on working days.",
};

const INFO = [
  {
    icon: Mail,
    title: "Email us",
    line: "hello@deskgoo.com",
    href: "mailto:hello@deskgoo.com",
  },
  {
    icon: Clock,
    title: "Working hours",
    line: "Mon – Sat, 9:00 – 19:00",
  },
  {
    icon: MessageSquare,
    title: "Response time",
    line: "Within 24 hours, guaranteed",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="( Contact )"
        title={
          <>
            Tell us the problem.{" "}
            <span className="text-gradient">We map the build.</span>
          </>
        }
        sub="Software, website, mobile app or growth — every engagement starts with a free consultation and an honest timeline."
      />

      <section className="relative pb-28 md:pb-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-10">
          <div className="space-y-4">
            {INFO.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="group flex items-center gap-5 rounded-2xl border border-line bg-panel p-6 transition-colors duration-500 hover:border-iris/40">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-fog transition-all duration-500 group-hover:border-iris/50 group-hover:bg-iris/15 group-hover:text-mist">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs tracking-[0.25em] text-fog/60 uppercase">{item.title}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block font-display text-lg font-semibold text-mist transition-colors hover:text-gradient"
                      >
                        {item.line}
                      </a>
                    ) : (
                      <p className="mt-1 font-display text-lg font-semibold text-mist">{item.line}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.35}>
              <div className="rounded-2xl border border-line bg-gradient-to-br from-iris/15 via-panel to-panel p-6">
                <p className="font-display text-lg font-semibold text-mist">
                  Prefer to see it live?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  Skip the email —{" "}
                  <a href="/demo#demo-form" className="text-gradient font-semibold">
                    book a 30-minute demo
                  </a>{" "}
                  of DeskgooPOS or DeskgooERP with a product specialist.
                </p>
              </div>
            </Reveal>
          </div>

          <ContactForm />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ContactMap />
        </div>
      </section>
    </>
  );
}
