// app/shortage/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shortage Tracker · Ozempic.bot",
  description:
    "Reported in clinical trials. Percentages reflect % of patients who experienced each event during the study period.",
};

export default function ShortageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
