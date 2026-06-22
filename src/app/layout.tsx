import type { Metadata } from "next";
import { Source_Serif_4, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileGivePill } from "@/components/MobileGivePill";

const sourceSerif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-ibm-plex",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Heart In Heaven | Donate to Christian Relief and Education in Liberia",
    template: "%s | Heart In Heaven",
  },
  description:
    "Heart In Heaven is a 501(c)(3) nonprofit that pools your monthly donation across 20+ vetted Christian relief partners and funds education in Liberia. One gift. Twenty ministries. Eternal impact.",
  metadataBase: new URL("https://heartinheaven.org"),
  keywords: [
    "donate to Liberia",
    "Christian nonprofit",
    "leveraged giving",
    "donate to Christian charity",
    "Liberia education",
    "nonprofit donation",
    "Heart In Heaven",
    "501c3 charity",
    "give to multiple nonprofits",
    "Christian relief",
    "donate to Africa",
    "feed children Liberia",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Heart In Heaven",
    title: "Heart In Heaven | Donate to Christian Relief and Education in Liberia",
    description:
      "Pool your monthly donation across 20+ vetted Christian relief partners. Fund education, meals, and church-led development in Liberia.",
    images: [
      {
        url: "/images/hero-liberia.jpg",
        width: 3024,
        height: 4032,
        alt: "Students at Champion Academy in Paynesville, Liberia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heart In Heaven | One gift. Twenty ministries. Eternal impact.",
    description:
      "Pool your monthly donation across 20+ vetted Christian relief partners and fund education in Liberia.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://heartinheaven.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${ibmPlex.variable}`}>
      <body className="font-body text-body text-charcoal bg-cream antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileGivePill />
      </body>
    </html>
  );
}
