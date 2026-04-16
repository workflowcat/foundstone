import type { Metadata } from "next";
import { Inter, Playfair_Display, EB_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://foundstonecap.com"),
  title: {
    default: "Foundstone Capital — Limassol, Cyprus",
    template: "%s · Foundstone Capital",
  },
  description:
    "Cyprus-based management company running nine operational practice areas for B2B technology businesses in data, APIs, and infrastructure. Based in Limassol.",
  openGraph: {
    title: "Foundstone Capital",
    description:
      "Nine practice areas — from transactions and governance to finance, data, AI, KYC, and managed services. Built on businesses we run ourselves. Available on retainer.",
    type: "website",
    siteName: "Foundstone Capital",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foundstone Capital",
    description:
      "Nine practice areas — from transactions and governance to finance, data, AI, KYC, and managed services. Built on businesses we run ourselves. Available on retainer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${garamond.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
