// app/telehealth/page.tsx
import { TELEHEALTH_DATA } from "@/lib/api";
import TelehealthClient from "./TelehealthClient";

export const revalidate = 86400;

async function enrichTelehealthData() {
  // Attempt to fetch live ratings from a public reviews API
  // In production you'd scrape Trustpilot/G2 via a server-side API route
  // For now we return the base data — extend here with real scraping
  return TELEHEALTH_DATA;
}

export default async function TelehealthPage() {
  const providers = await enrichTelehealthData();
  return <TelehealthClient providers={providers} />;
}
