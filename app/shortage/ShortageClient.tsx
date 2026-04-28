// app/shortage/ShortageClient.tsx
"use client";

import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { PageHead } from "@/components/PageHead";
import { RefreshCw } from "lucide-react";

interface DrugWithStatus {
  slug: string;
  brand: string;
  generic: string;
  color: string;
  shortage: "available" | "limited" | "shortage";
}

interface HistoryPoint {
  month: string;
  ozempic: number;
  wegovy: number;
  mounjaro: number;
  zepbound: number;
}

interface Props {
  drugs: DrugWithStatus[];
  history: HistoryPoint[];
}

const statusMap = {
  available: {
    label: "Resolved",
    color: "var(--mint)",
    desc: "Manufacturer reports adequate supply.",
  },
  limited: {
    label: "Limited",
    color: "var(--amber)",
    desc: "Some strengths backordered; pharmacies rotating allocations.",
  },
  shortage: {
    label: "Shortage",
    color: "var(--crimson)",
    desc: "FDA-confirmed shortage. Compounded alternatives may be permitted.",
  },
};

export default function ShortageClient({
  drugs: initialDrugs,
  history,
}: Props) {
  const [drugs, setDrugs] = useState(initialDrugs);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [source, setSource] = useState<"fda" | "fallback">("fda");

  const refresh = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch("/api/shortages", { cache: "no-store" });
      if (!res.ok) throw new Error();
      const json = await res.json();
      setSource(json.source);
      setLastUpdated(new Date(json.ts));
      setDrugs((prev) =>
        prev.map((d) => ({ ...d, shortage: json.data[d.slug] ?? d.shortage }))
      );
    } catch {
      // keep existing data
    } finally {
      setIsRefreshing(false);
    }
  };

  // Poll every 5 minutes
  useEffect(() => {
    refresh();
    const interval = setInterval(refresh, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto max-w-[1600px] px-6 py-16">
      <PageHead
        num="03"
        title="Supply"
        sub="Live shortage status from FDA drug shortage database, updated hourly."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-6">
        {drugs.map((d) => {
          const s = statusMap[d.shortage];
          return (
            <div key={d.slug} className="bg-background p-6">
              <div className="flex items-center justify-between">
                <div className="font-display text-3xl">{d.brand}</div>
                <span className="relative flex h-3 w-3">
                  <span
                    className="absolute inset-0 rounded-full opacity-50 animate-ping"
                    style={{ background: s.color }}
                  />
                  <span
                    className="relative h-3 w-3 rounded-full"
                    style={{ background: s.color }}
                  />
                </span>
              </div>
              <div
                className="font-mono text-[10px] uppercase tracking-[0.2em] mt-2"
                style={{ color: s.color }}
              >
                Status · {s.label}
              </div>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                {s.desc}
              </p>
              <div className="font-mono text-[10px] text-muted-foreground mt-2 opacity-60">
                {d.generic}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mb-6 border border-border bg-surface px-5 py-3 flex items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-mint">
          ⌗ Source
        </span>
        <span className="text-xs text-muted-foreground flex-1">
          Status pulled from{" "}
          <a
            href="https://api.fda.gov/drug/shortages.json"
            target="_blank"
            rel="noopener noreferrer"
            className="text-mint hover:underline"
          >
            FDA Drug Shortage API
          </a>{" "}
          · {source === "fda" ? "Live data" : "Fallback data"} · Updated{" "}
          {lastUpdated.toLocaleTimeString()}
        </span>
        <button
          onClick={refresh}
          disabled={isRefreshing}
          className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-mint hover:text-mint/70 transition-colors disabled:opacity-50"
        >
          <RefreshCw
            className={`h-3 w-3 ${isRefreshing ? "animate-spin" : ""}`}
          />
          Refresh
        </button>
      </div>

      <div className="border border-border bg-surface p-6 md:p-8">
        <div className="mb-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-mint mb-2">
            12-month availability
          </div>
          <h3 className="font-display text-3xl">
            % of pharmacies reporting in-stock
          </h3>
        </div>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={history}>
              <CartesianGrid
                stroke="var(--border)"
                strokeDasharray="2 4"
                vertical={false}
              />
              <XAxis
                dataKey="month"
                stroke="var(--muted-foreground)"
                tick={{ fontSize: 11, fontFamily: "monospace" }}
              />
              <YAxis
                stroke="var(--muted-foreground)"
                tick={{ fontSize: 11, fontFamily: "monospace" }}
                domain={[0, 100]}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip
                contentStyle={{
                  background: "var(--background)",
                  border: "1px solid var(--border)",
                  borderRadius: 0,
                  fontFamily: "monospace",
                  fontSize: 11,
                }}
                labelStyle={{ color: "var(--mint)" }}
                formatter={(value, name) => [
                  `${value}%`,
                  drugs.find((d) => d.slug === name)?.brand ?? name,
                ]}
              />
              {drugs.map((d) => (
                <Line
                  key={d.slug}
                  type="monotone"
                  dataKey={d.slug}
                  stroke={d.color}
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4 }}
                  name={d.brand}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-widest">
          {drugs.map((d) => (
            <div key={d.slug} className="flex items-center gap-2">
              <span className="h-0.5 w-6" style={{ background: d.color }} />
              <span className="text-muted-foreground">{d.brand}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
