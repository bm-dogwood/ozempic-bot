// app/insurance/page.tsx
import { Check, X, AlertCircle } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import { INSURANCE_PLANS_DATA } from "@/lib/api";
import InsuranceClient from "./InsuranceClient";

export const revalidate = 86400; // revalidate once per day

export default async function InsurancePage() {
  // Fetch Medicare Part D negotiated pricing for supplemental context
  let medicareNote = "";
  try {
    const res = await fetch(
      "https://data.cms.gov/data-api/v1/dataset/4de3dfa0-8c2b-4b78-96c6-8c32c3e1b95d/data?filter[brnd_name]=OZEMPIC&size=1",
      { next: { revalidate: 86400 } }
    );
    if (res.ok) {
      const data = await res.json();
      const year = data?.[0]?.year ?? "2023";
      medicareNote = `Medicare Part D data sourced from CMS (${year} dataset).`;
    }
  } catch {
    medicareNote = "Medicare Part D data sourced from CMS public datasets.";
  }

  return (
    <InsuranceClient plans={INSURANCE_PLANS_DATA} medicareNote={medicareNote} />
  );
}
