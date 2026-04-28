// app/api/fda/[drug]/route.ts
import { NextRequest, NextResponse } from "next/server";

const BRAND_TO_GENERIC: Record<string, string> = {
  ozempic: "semaglutide",
  wegovy: "semaglutide",
  mounjaro: "tirzepatide",
  zepbound: "tirzepatide",
  rybelsus: "semaglutide",
};

export async function GET(
  _req: NextRequest,
  { params }: { params: { drug: string } }
) {
  const drug = params.drug.toLowerCase();
  const brandName = drug.charAt(0).toUpperCase() + drug.slice(1);

  try {
    // Fetch label info from OpenFDA
    const [labelRes, adverseRes] = await Promise.all([
      fetch(
        `https://api.fda.gov/drug/label.json?search=openfda.brand_name:"${brandName}"&limit=1`,
        { next: { revalidate: 86400 } }
      ),
      fetch(
        `https://api.fda.gov/drug/event.json?search=patient.drug.medicinalproduct:"${brandName}"&count=patient.reaction.reactionmeddrapt.exact&limit=10`,
        { next: { revalidate: 86400 } }
      ),
    ]);

    const labelData = labelRes.ok ? await labelRes.json() : null;
    const adverseData = adverseRes.ok ? await adverseRes.json() : null;

    const label = labelData?.results?.[0] ?? null;
    const topReactions = adverseData?.results ?? [];

    return NextResponse.json(
      {
        drug,
        brand: brandName,
        generic: BRAND_TO_GENERIC[drug] ?? null,
        label: label
          ? {
              indications:
                label.indications_and_usage?.[0]?.slice(0, 500) ?? null,
              dosage:
                label.dosage_and_administration?.[0]?.slice(0, 500) ?? null,
              warnings: label.warnings?.[0]?.slice(0, 500) ?? null,
              manufacturer: label.openfda?.manufacturer_name?.[0] ?? null,
              rxcui: label.openfda?.rxcui?.[0] ?? null,
            }
          : null,
        topAdverseReactions: topReactions.slice(0, 5).map((r: any) => ({
          reaction: r.term,
          count: r.count,
        })),
        ts: Date.now(),
      },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=86400, stale-while-revalidate=172800",
        },
      }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch FDA data", drug, ts: Date.now() },
      { status: 500 }
    );
  }
}
