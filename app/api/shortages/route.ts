// app/api/shortages/route.ts
import { NextResponse } from "next/server";

const DRUG_QUERIES = [
  { generic: "semaglutide", brands: ["ozempic", "wegovy"] },
  { generic: "tirzepatide", brands: ["mounjaro", "zepbound"] },
];

const FALLBACK = {
  ozempic: "limited",
  wegovy: "shortage",
  mounjaro: "available",
  zepbound: "limited",
};

export async function GET() {
  const results: Record<string, string> = {};

  try {
    await Promise.all(
      DRUG_QUERIES.map(async ({ generic, brands }) => {
        try {
          const res = await fetch(
            `https://api.fda.gov/drug/shortages.json?search=generic_name:"${generic}"&limit=10`,
            { next: { revalidate: 3600 } }
          );

          if (!res.ok) throw new Error(`FDA API returned ${res.status}`);

          const data = await res.json();
          const records: any[] = data.results ?? [];

          const hasActiveShortage = records.some(
            (r) =>
              r.status?.toLowerCase().includes("shortage") ||
              r.availability?.toLowerCase().includes("no")
          );
          const hasLimited = records.some(
            (r) =>
              r.availability?.toLowerCase().includes("limited") ||
              r.status?.toLowerCase().includes("limited")
          );

          const status = hasActiveShortage
            ? "shortage"
            : hasLimited
            ? "limited"
            : records.length > 0
            ? "limited"
            : "available";

          for (const brand of brands) {
            results[brand] = status;
          }
        } catch {
          for (const brand of brands) {
            results[brand] =
              FALLBACK[brand as keyof typeof FALLBACK] ?? "limited";
          }
        }
      })
    );

    return NextResponse.json(
      { data: results, source: "fda", ts: Date.now() },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
        },
      }
    );
  } catch {
    return NextResponse.json(
      { data: FALLBACK, source: "fallback", ts: Date.now() },
      { status: 200 }
    );
  }
}
