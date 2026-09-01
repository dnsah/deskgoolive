import type { Metadata } from "next";
import CTA from "@/components/CTA";
import ServicesIndex from "@/components/ServicesIndex";

export const metadata: Metadata = {
  title: "Services — Deskgoo",
  description:
    "Software development, website & web app design, mobile apps, and SEO & digital marketing — four disciplines delivered by one senior team.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesIndex />
      <CTA />
    </>
  );
}
