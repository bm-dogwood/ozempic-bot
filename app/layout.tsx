import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.tsx

export const metadata: Metadata = {
  title: {
    default: "Ozempic.bot — GLP-1 Price Index & Information Hub",
    template: "%s · Ozempic.bot",
  },
  description:
    "Independent price tracker, pharmacy lookup, insurance coverage, side effects, shortage status, and telehealth directory for Ozempic, Wegovy, Mounjaro, and Zepbound.",
  authors: [{ name: "Ozempic.bot" }],
  openGraph: {
    title: "Ozempic.bot — GLP-1 Price Index",
    description:
      "Track GLP-1 drug prices, shortages, side effects and coverage in real time.",
    type: "website",
  },

  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
