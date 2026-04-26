// app/shortage/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Side Effects· Ozempic.bot",
  description:
    "FDA-reported supply status and 12-month availability history for GLP-1 medications.",
};

export default function ShortageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
