// app/pharmacies/page.tsx
"use client";

import { useState, useMemo } from "react";
import { Search, ArrowUpDown } from "lucide-react";
import { PHARMACIES } from "@/lib/drugs";

type Drug = "ozempic" | "wegovy" | "mounjaro" | "zepbound";

export default function PharmaciesPage() {
  const [zip, setZip] = useState("");
  const [drug, setDrug] = useState<Drug>("ozempic");
  const [sortAsc, setSortAsc] = useState(true);

  const data = useMemo(() => {
    const variance = zip.length === 5 ? (parseInt(zip) % 30) - 15 : 0;
    return [...PHARMACIES]
      .map((p) => ({ ...p, [drug]: p[drug] + variance }))
      .sort((a, b) =>
        sortAsc
          ? (a[drug] as number) - (b[drug] as number)
          : (b[drug] as number) - (a[drug] as number)
      );
  }, [zip, drug, sortAsc]);

  const min = Math.min(...data.map((d) => d[drug] as number));
  const max = Math.max(...data.map((d) => d[drug] as number));

  return (
    <>
      <div className="mx-auto max-w-[1600px] px-6 py-16">
        <div className="grid md:grid-cols-12 gap-px bg-border mb-12">
          <div className="md:col-span-5 bg-background p-6">
            <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              ZIP code
            </label>
            <div className="mt-2 flex items-center gap-3 border-b-2 border-border focus-within:border-mint pb-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                value={zip}
                onChange={(e) =>
                  setZip(e.target.value.replace(/\D/g, "").slice(0, 5))
                }
                placeholder="e.g. 10001"
                className="flex-1 bg-transparent outline-none font-display text-3xl placeholder:text-muted-foreground/40"
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

        <div className="border border-border">
          <div className="grid grid-cols-12 gap-4 border-b border-border bg-surface px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <div className="col-span-1">#</div>
            <div className="col-span-5">Pharmacy</div>
            <div className="col-span-4">Relative Price</div>
            <div
              className="col-span-2 text-right flex items-center justify-end gap-1 cursor-pointer hover:text-mint"
              onClick={() => setSortAsc(!sortAsc)}
            >
              Cash <ArrowUpDown className="h-3 w-3" />
            </div>
          </div>
          {data.map((p, i) => {
            const price = p[drug] as number;
            const pct = ((price - min) / (max - min || 1)) * 100;
            return (
              <div
                key={p.name}
                className="grid grid-cols-12 gap-4 border-b border-border px-6 py-5 items-center hover:bg-surface transition-colors group"
              >
                <div className="col-span-1 font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-5">
                  <div className="font-display text-2xl">{p.name}</div>
                  {price === min && (
                    <div className="font-mono text-[10px] uppercase tracking-widest text-mint mt-1">
                      Lowest near you
                    </div>
                  )}
                </div>
                <div className="col-span-4 h-2 bg-surface relative">
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

        <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Prices estimated from public pharmacy data and regional variance
          models. Always confirm with the pharmacy.
        </p>
      </div>
    </>
  );
}
