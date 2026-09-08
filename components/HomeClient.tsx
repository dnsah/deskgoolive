"use client";

import dynamic from "next/dynamic";
import Hero from "./Hero";
import Marquee from "./Marquee";
import Services from "./Services";

/* Below-fold sections load as separate chunks after hydration, so the
   initial parse/execute cost (and TBT) stays low. They still SSR. */
const Brands = dynamic(() => import("./Brands"));
const ProductsStrip = dynamic(() => import("./ProductsStrip"));
const Stats = dynamic(() => import("./Stats"));
const Testimonials = dynamic(() => import("./Testimonials"));
const CaseStudiesPreview = dynamic(() => import("./CaseStudiesPreview"));
const LatestPosts = dynamic(() => import("./LatestPosts"));
const CTA = dynamic(() => import("./CTA"));

export default function HomeClient() {
  return (
    <>
      <Hero />
      <Marquee />
      <Brands />
      <Services />
      <ProductsStrip />
      <Stats />
      <Testimonials />
      <CaseStudiesPreview />
      <LatestPosts />
      <CTA />
    </>
  );
}
