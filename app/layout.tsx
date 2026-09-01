import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import SiteShell from "@/components/SiteShell";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deskgoo — Software, Web & Mobile Development Studio",
  description:
    "Deskgoo is a full-stack software studio crafting websites, mobile apps, ERP & POS systems and growth-focused digital marketing that move business forward.",
  keywords: [
    "software development",
    "web development",
    "mobile apps",
    "ERP software",
    "POS billing",
    "SEO",
    "digital marketing",
  ],
  openGraph: {
    title: "Deskgoo — We craft digital products that perform",
    description:
      "Websites, mobile apps, ERP & POS software — designed and engineered to move business forward.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${grotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
