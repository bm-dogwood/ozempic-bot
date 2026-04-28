// app/pharmacies/page.tsx
import { fetchPharmacyPrices } from "@/lib/api";
import PharmaciesClient from "./PharmaciesClient";

export const revalidate = 3600;

export default async function PharmaciesPage() {
  const pharmacies = await fetchPharmacyPrices();
  return <PharmaciesClient pharmacies={pharmacies} />;
}
