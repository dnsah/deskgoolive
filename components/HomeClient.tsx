"use client";

import CTA from "./CTA";
import Hero from "./Hero";
import Marquee from "./Marquee";
import ProductsStrip from "./ProductsStrip";
import Services from "./Services";
import Stats from "./Stats";
import Testimonials from "./Testimonials";

export default function HomeClient() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <ProductsStrip />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}
