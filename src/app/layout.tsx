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
    default: "Heart In Heaven",
    template: "%s | Heart In Heaven",
  },
  description:
    "One gift. Twenty ministries. Eternal impact. Heart In Heaven pools your monthly giving across 20+ vetted Christian relief partners.",
  metadataBase: new URL("https://heartinheaven.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Heart In Heaven",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
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
