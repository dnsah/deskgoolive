import type { Metadata } from "next";
import CTA from "@/components/CTA";
import PageHero from "@/components/PageHero";
import Process from "@/components/Process";
import Statement from "@/components/Statement";
import Stats from "@/components/Stats";
import Values from "@/components/Values";

export const metadata: Metadata = {
  title: "About — Deskgoo",
  description:
    "Deskgoo is a software company of engineers and designers building products used by thousands daily — and custom software, web, mobile and marketing work for growing businesses.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="( About the studio )"
        title={
          <>
            A software company, <span className="text-gradient">not an agency</span>
          </>
        }
        sub="We build our own products with thousands of daily users — so when we build for you, we are betting on the same engineering discipline we bet on ourselves."
      />
      <Statement />
      <Values />
      <Process />
      <Stats />
      <CTA />
    </>
  );
}
