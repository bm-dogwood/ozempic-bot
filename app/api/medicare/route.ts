// app/api/medicare/route.ts
import { NextResponse } from "next/server";

// CMS Part D Drug Spending Dashboard dataset IDs
// https://data.cms.gov/summary-statistics-on-use-and-payments/medicare-medicaid-spending-by-drug
const CMS_DATASET = "4de3dfa0-8c2b-4b78-96c6-8c32c3e1b95d";

const DRUG_BRAND_NAMES: Record<string, string> = {
  ozempic: "OZEMPIC",
  wegovy: "WEGOVY",
  mounjaro: "MOUNJARO",
  zepbound: "ZEPBOUND",
};

// Fallback: 2023 CMS negotiated / avg prices (publicly reported)
const FALLBACK_PRICES: Record<string, number> = {
  ozempic: 936,
  wegovy: 1349,
  mounjaro: 1023,
  zepbound: 550,
};

async function fetchDrugPrice(brandName: string): Promise<number | null> {
  try {
    const url = new URL(
      `https://data.cms.gov/data-api/v1/dataset/${CMS_DATASET}/data`
    );
    url.searchParams.set("filter[brnd_name]", brandName);
    url.searchParams.set("size", "1");
    url.searchParams.set("sort", "-year"); // most recent first

    const res = await fetch(url.toString(), {
      next: { revalidate: 86400 },
      headers: { Accept: "application/json" },
    });

    if (!res.ok) return null;

    const data = await res.json();
    const record = data?.[0];

    if (!record) return null;

    // tot_spndng / tot_clms = avg spend per claim ≈ monthly cost
    const totalSpend = parseFloat(record.tot_spndng ?? "0");
    const totalClaims = parseInt(record.tot_clms ?? "1", 10);

    if (totalSpend > 0 && totalClaims > 0) {
      return Math.round(totalSpend / totalClaims);
    }

    // Some records have avg_spnd_per_bene (avg spend per beneficiary)
    if (record.avg_spnd_per_bene) {
      return Math.round(parseFloat(record.avg_spnd_per_bene));
    }

    return null;
  } catch {
    return null;
  }
}

export async function GET() {
  const results: Record<string, number> = {};
  const sources: Record<string, string> = {};

  await Promise.all(
    Object.entries(DRUG_BRAND_NAMES).map(async ([slug, brandName]) => {
      const livePrice = await fetchDrugPrice(brandName);
      if (livePrice && livePrice > 0) {
        results[slug] = livePrice;
        sources[slug] = "cms-live";
      } else {
        results[slug] = FALLBACK_PRICES[slug];
        sources[slug] = "fallback";
      }
    })
  );

  return NextResponse.json(
    {
      data: results,
      sources,
      note: "Average Medicare Part D spend per claim. Actual patient cost varies by plan, deductible, and phase.",
      ts: Date.now(),
    },
    {
      headers: {
        "Cache-Control":
          "public, s-maxage=86400, stale-while-revalidate=172800",
      },
    }
  );
}
