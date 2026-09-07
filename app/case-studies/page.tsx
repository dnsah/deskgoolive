import type { Metadata } from "next";
import CaseStudiesIndex from "@/components/CaseStudiesIndex";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Case Studies — Deskgoo",
  description:
    "Real deployments with real numbers: how a supermarket chain, a pharma distributor and a food court run on Deskgoo software.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesIndex />
      <CTA />
    </>
  );
}
