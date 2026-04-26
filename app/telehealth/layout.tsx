// app/telehealth/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Telehealth Directory · Ozempic.bot",
  description:
    "Vetted telehealth providers prescribing GLP-1 medications across the United States.",
};

export default function TelehealthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
