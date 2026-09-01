import type { Metadata } from "next";
import CTA from "@/components/CTA";
import ProductsIndex from "@/components/ProductsIndex";

export const metadata: Metadata = {
  title: "Products — Deskgoo",
  description:
    "DeskgooPOS, DeskgooERP and DeskgooOrder — live software products used daily by hundreds of businesses and thousands of users.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductsIndex />
      <CTA />
    </>
  );
}
