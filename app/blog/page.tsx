import type { Metadata } from "next";
import BlogIndex from "@/components/BlogIndex";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Blog — Deskgoo",
  description:
    "Notes from the build: what we learn shipping custom software, websites, mobile apps and growth work.",
};

export default function BlogPage() {
  return (
    <>
      <BlogIndex />
      <CTA />
    </>
  );
}
