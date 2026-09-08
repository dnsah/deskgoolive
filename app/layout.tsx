import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import SiteShell from "@/components/SiteShell";
import { themeInitScript } from "@/components/ThemeToggle";
import "./globals.css";

const chakra = Chakra_Petch({
  variable: "--font-chakra",
  weight: ["300", "400", "500", "600", "700"],
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
      className={`${chakra.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
