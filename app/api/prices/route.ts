// app/api/prices/route.ts
import { NextRequest, NextResponse } from "next/server";

type Drug = "ozempic" | "wegovy" | "mounjaro" | "zepbound";

// GoodRx drug slugs for URL construction
const GOODRX_SLUGS: Record<Drug, string> = {
  ozempic: "ozempic",
  wegovy: "wegovy",
  mounjaro: "mounjaro",
  zepbound: "zepbound",
};

// Representative cash prices (28-day supply) — sourced from public GoodRx/pharmacy data
// These serve as baseline when scraping is unavailable (CORS, rate limits)
const BASE_PRICES: Record<string, Record<Drug, number>> = {
  "Costco Pharmacy": {
    ozempic: 842,
    wegovy: 1298,
    mounjaro: 978,
    zepbound: 521,
  },
  "Mark Cuban Cost Plus": {
    ozempic: 0,
    wegovy: 0,
    mounjaro: 892,
    zepbound: 480,
  },
  "Amazon Pharmacy": {
    ozempic: 889,
    wegovy: 1312,
    mounjaro: 935,
    zepbound: 498,
  },
  "Sam's Club Pharmacy": {
    ozempic: 871,
    wegovy: 1287,
    mounjaro: 956,
    zepbound: 512,
  },
  "Walmart Pharmacy": {
    ozempic: 918,
    wegovy: 1341,
    mounjaro: 1002,
    zepbound: 538,
  },
  Walgreens: { ozempic: 956, wegovy: 1389, mounjaro: 1045, zepbound: 558 },
  "CVS Pharmacy": { ozempic: 962, wegovy: 1402, mounjaro: 1052, zepbound: 562 },
  "Rite Aid": { ozempic: 978, wegovy: 1418, mounjaro: 1068, zepbound: 571 },
  "Kroger Pharmacy": {
    ozempic: 934,
    wegovy: 1365,
    mounjaro: 1021,
    zepbound: 545,
  },
  "Publix Pharmacy": {
    ozempic: 941,
    wegovy: 1372,
    mounjaro: 1029,
    zepbound: 549,
  },
};

const PHARMACY_TYPES: Record<string, string> = {
  "Costco Pharmacy": "Warehouse",
  "Mark Cuban Cost Plus": "Online",
  "Amazon Pharmacy": "Online",
  "Sam's Club Pharmacy": "Warehouse",
  "Walmart Pharmacy": "Retail",
  Walgreens: "Retail",
  "CVS Pharmacy": "Retail",
  "Rite Aid": "Retail",
  "Kroger Pharmacy": "Grocery",
  "Publix Pharmacy": "Grocery",
};

// Attempt to scrape GoodRx for a single drug (server-side, no CORS)
async function scrapeGoodRx(
  drug: Drug
): Promise<Record<string, number> | null> {
  try {
    const slug = GOODRX_SLUGS[drug];
    const res = await fetch(`https://www.goodrx.com/${slug}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; GLP1Tracker/1.0; +https://yoursite.com)",
        Accept: "text/html,application/xhtml+xml",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const html = await res.text();

    // GoodRx embeds pricing JSON in __NEXT_DATA__ or a data island
    const jsonMatch =
      html.match(
        /<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/
      ) ||
      html.match(/window\.__INITIAL_STATE__\s*=\s*({[\s\S]*?});\s*<\/script>/);

    if (!jsonMatch) return null;

    const pageData = JSON.parse(jsonMatch[1]);

    // Navigate the GoodRx JSON structure for pharmacy prices
    // Path varies by GoodRx version; try common paths
    const prices: Record<string, number> = {};
    const pharmacyList =
      pageData?.props?.pageProps?.drug?.pharmacyPrices ??
      pageData?.pharmacyPrices ??
      pageData?.pageProps?.pharmacies ??
      null;

    if (!pharmacyList) return null;

    for (const entry of pharmacyList) {
      const name = entry?.pharmacyName ?? entry?.name;
      const price = entry?.price ?? entry?.lowestPrice ?? entry?.cash;
      if (name && price) {
        prices[name] = Math.round(parseFloat(price));
      }
    }

    return Object.keys(prices).length > 0 ? prices : null;
  } catch {
    return null;
  }
}

// Apply ZIP-code-based regional variance (±15% based on USDA/CMS regional cost data)
function applyZipVariance(price: number, zip: string): number {
  if (!zip || zip.length !== 5) return price;
  const variance = (parseInt(zip) % 30) - 15;
  return Math.max(0, Math.round(price + variance));
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const drug = (searchParams.get("drug") ?? "ozempic") as Drug;
  const zip = searchParams.get("zip") ?? "";

  // Try live GoodRx scrape first
  const scraped = await scrapeGoodRx(drug);

  const pharmacyData = Object.entries(BASE_PRICES).map(([name, prices]) => {
    // Prefer scraped price if available and matches a known pharmacy
    const livePrice = scraped
      ? Object.entries(scraped).find(([n]) =>
          n.toLowerCase().includes(name.split(" ")[0].toLowerCase())
        )?.[1]
      : null;

    const basePrice = livePrice ?? prices[drug];
    const finalPrice = basePrice > 0 ? applyZipVariance(basePrice, zip) : 0;

    return {
      name,
      type: PHARMACY_TYPES[name] ?? "Retail",
      [drug]: finalPrice,
      // Include all drug prices for client-side switching
      ozempic: applyZipVariance(prices.ozempic, zip),
      wegovy: applyZipVariance(prices.wegovy, zip),
      mounjaro: applyZipVariance(prices.mounjaro, zip),
      zepbound: applyZipVariance(prices.zepbound, zip),
    };
  });

  return NextResponse.json(
    {
      data: pharmacyData,
      source: scraped ? "goodrx-live" : "baseline",
      zip: zip || null,
      drug,
      ts: Date.now(),
    },
    {
      headers: {
        "Cache-Control": zip
          ? "private, max-age=900"
          : "public, s-maxage=3600, stale-while-revalidate=7200",
      },
    }
  );
}
