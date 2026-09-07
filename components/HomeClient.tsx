"use client";

import Brands from "./Brands";
import CTA from "./CTA";
import Hero from "./Hero";
import LatestPosts from "./LatestPosts";
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
      <Brands />
      <Services />
      <ProductsStrip />
      <Stats />
      <Testimonials />
      <LatestPosts />
      <CTA />
    </>
  );
}
