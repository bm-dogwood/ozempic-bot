// app/pharmacies/PharmaciesClient.tsx
"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import {
  Search,
  ArrowUpDown,
  ExternalLink,
  RefreshCw,
  Wifi,
  WifiOff,
} from "lucide-react";
import { PageHead } from "@/components/PageHead";
import type { PharmacyPrice } from "@/lib/api";

type Drug = "ozempic" | "wegovy" | "mounjaro" | "zepbound";

interface Props {
  pharmacies: PharmacyPrice[];
}

interface PriceResponse {
  data: PharmacyPrice[];
  source: "goodrx-live" | "baseline";
  zip: string | null;
  drug: Drug;
  ts: number;
}

export default function PharmaciesClient({
  pharmacies: initialPharmacies,
}: Props) {
  const [zip, setZip] = useState("");
  const [drug, setDrug] = useState<Drug>("ozempic");
  const [sortAsc, setSortAsc] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [pharmacies, setPharmacies] =
    useState<PharmacyPrice[]>(initialPharmacies);
  const [dataSource, setDataSource] = useState<"goodrx-live" | "baseline">(
    "baseline"
  );
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [error, setError] = useState<string | null>(null);

  const fetchPrices = useCallback(
    async (zipCode: string, drugName: Drug) => {
      setIsLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams({ drug: drugName });
        if (zipCode.length === 5) params.set("zip", zipCode);

        const res = await fetch(`/api/prices?${params}`);
        if (!res.ok) throw new Error(`API error ${res.status}`);

        const json: PriceResponse = await res.json();
        setPharmacies(json.data);
        setDataSource(json.source);
        setLastUpdated(new Date(json.ts));
      } catch {
        setError("Using cached prices — live data unavailable.");
        setPharmacies(initialPharmacies);
      } finally {
        setIsLoading(false);
      }
    },
    [initialPharmacies]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchPrices(zip, drug);
    }, 400);
    return () => clearTimeout(timer);
  }, [zip, drug, fetchPrices]);

  const data = useMemo(() => {
    return [...pharmacies]
      .filter((p) => (p[drug] as number) > 0)
      .sort((a, b) =>
        sortAsc
          ? (a[drug] as number) - (b[drug] as number)
          : (b[drug] as number) - (a[drug] as number)
      );
  }, [pharmacies, drug, sortAsc]);

  const min = data.length ? Math.min(...data.map((d) => d[drug] as number)) : 0;
  const max = data.length ? Math.max(...data.map((d) => d[drug] as number)) : 0;
  const avg = data.length
    ? Math.round(
        data.reduce((s, d) => s + (d[drug] as number), 0) / data.length
      )
    : 0;

  return (
    <div className="mx-auto max-w-[1600px] px-6 py-16">
      <PageHead
        num="05"
        title="Pharmacies"
        sub="Cash-pay price comparison across major U.S. pharmacies. Enter your ZIP for regional pricing."
      />

      {/* Live data status bar */}
      <div className="flex items-center gap-3 mb-6 font-mono text-[10px] uppercase tracking-widest">
        {dataSource === "goodrx-live" ? (
          <>
            <Wifi className="h-3 w-3 text-mint" />
            <span className="text-mint">Live GoodRx data</span>
          </>
        ) : (
          <>
            <WifiOff className="h-3 w-3 text-muted-foreground" />
            <span className="text-muted-foreground">Baseline pricing</span>
          </>
        )}
        {isLoading && (
          <RefreshCw className="h-3 w-3 text-mint animate-spin ml-2" />
        )}
        {error && <span className="text-amber ml-2">{error}</span>}
        <span className="text-muted-foreground ml-auto">
          Updated {lastUpdated.toLocaleTimeString()}
        </span>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-3 gap-px bg-border mb-8">
        <div className="bg-background p-5">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Avg cash price
          </div>
          <div className="font-display text-3xl mt-1">
            ${avg.toLocaleString()}
          </div>
          <div className="font-mono text-[10px] text-muted-foreground mt-1 capitalize">
            {drug} · 28-day supply
          </div>
        </div>
        <div className="bg-background p-5">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Best price
          </div>
          <div className="font-display text-3xl mt-1 text-mint">
            ${min.toLocaleString()}
          </div>
          <div className="font-mono text-[10px] text-mint/70 mt-1">
            {data[0]?.name ?? "—"}
          </div>
        </div>
        <div className="bg-background p-5">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Max savings vs. highest
          </div>
          <div className="font-display text-3xl mt-1 text-amber">
            ${(max - min).toLocaleString()}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="grid md:grid-cols-12 gap-px bg-border mb-8">
        <div className="md:col-span-5 bg-background p-6">
          <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            ZIP code
            {zip.length === 5 && (
              <span className="text-mint ml-2">· Regional pricing applied</span>
            )}
          </label>
          <div className="mt-2 flex items-center gap-3 border-b-2 border-border focus-within:border-mint pb-2 transition-colors">
            <Search className="h-4 w-4 text-muted-foreground shrink-0" />
            <input
              value={zip}
              onChange={(e) =>
                setZip(e.target.value.replace(/\D/g, "").slice(0, 5))
              }
              placeholder="e.g. 10001"
              className="flex-1 bg-transparent outline-none font-display text-3xl placeholder:text-muted-foreground/40 min-w-0"
            />
          </div>
        </div>
        <div className="md:col-span-7 bg-background p-6">
          <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Medication
          </label>
          <div className="mt-3 flex flex-wrap gap-2">
            {(["ozempic", "wegovy", "mounjaro", "zepbound"] as Drug[]).map(
              (d) => (
                <button
                  key={d}
                  onClick={() => setDrug(d)}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-widest border transition-colors ${
                    drug === d
                      ? "bg-mint text-primary-foreground border-mint"
                      : "border-border hover:border-mint hover:text-mint"
                  }`}
                >
                  {d}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Price table */}
      <div className="border border-border">
        <div className="grid grid-cols-12 gap-4 border-b border-border bg-surface px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <div className="col-span-1">#</div>
          <div className="col-span-4">Pharmacy</div>
          <div className="col-span-2">Type</div>
          <div className="col-span-3">Relative Price</div>
          <div
            className="col-span-2 text-right flex items-center justify-end gap-1 cursor-pointer hover:text-mint transition-colors select-none"
            onClick={() => setSortAsc(!sortAsc)}
          >
            Cash <ArrowUpDown className="h-3 w-3" />
          </div>
        </div>

        {data.length === 0 && (
          <div className="px-6 py-12 text-center text-muted-foreground font-mono text-sm">
            {isLoading
              ? "Fetching prices…"
              : "No data available for this selection."}
          </div>
        )}

        {data.map((p, i) => {
          const price = p[drug] as number;
          const pct = max > min ? ((price - min) / (max - min)) * 100 : 0;
          return (
            <div
              key={p.name}
              className={`grid grid-cols-12 gap-4 border-b border-border px-6 py-5 items-center hover:bg-surface transition-colors last:border-b-0 ${
                isLoading ? "opacity-60" : ""
              }`}
            >
              <div className="col-span-1 font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="col-span-4">
                <div className="font-display text-2xl">{p.name}</div>
                {price === min && (
                  <div className="font-mono text-[10px] uppercase tracking-widest text-mint mt-1">
                    Lowest {zip.length === 5 ? `near ${zip}` : "listed"}
                  </div>
                )}
              </div>
              <div className="col-span-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {p.type}
              </div>
              <div className="col-span-3 h-2 bg-surface relative overflow-hidden">
                <div
                  className="h-full transition-all duration-700"
                  style={{
                    width: `${100 - pct}%`,
                    background:
                      pct < 30
                        ? "var(--mint)"
                        : pct < 70
                        ? "var(--amber)"
                        : "var(--crimson)",
                  }}
                />
              </div>
              <div className="col-span-2 text-right font-display text-3xl tracking-tight">
                ${price.toLocaleString()}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 border border-border bg-surface p-5 text-sm text-muted-foreground">
        <div className="font-mono text-[10px] uppercase tracking-widest text-mint mb-2">
          ⌗ Price sources
        </div>
        <p className="text-xs leading-relaxed">
          Cash prices represent estimated 28-day supply costs.{" "}
          {dataSource === "goodrx-live"
            ? "Live GoodRx data served via our pricing API."
            : "Baseline prices from public pharmacy pricing data; regional variance modeled from CMS geographic adjustment factors."}{" "}
          <a
            href={`https://www.goodrx.com/${drug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mint hover:underline inline-flex items-center gap-1"
          >
            Verify on GoodRx <ExternalLink className="h-3 w-3" />
          </a>{" "}
          before purchasing. Always confirm with the pharmacy.
        </p>
      </div>
    </div>
  );
}
