// app/shortage/page.tsx
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { DRUGS, SHORTAGE_HISTORY } from "@/lib/drugs";

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

export default function ShortagePage() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-12">
        {DRUGS.map((d) => {
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
                className="font-mono text-[11px] uppercase tracking-[0.2em] mt-2"
                style={{ color: s.color }}
              >
                Status · {s.label}
              </div>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                {s.desc}
              </p>
            </div>
          );
        })}
      </div>

      <div className="border border-border bg-surface p-6 md:p-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-mint mb-2">
              12-month availability
            </div>
            <h3 className="font-display text-3xl">
              % of pharmacies reporting in-stock
            </h3>
          </div>
        </div>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={SHORTAGE_HISTORY}>
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
              />
              {DRUGS.map((d) => (
                <Line
                  key={d.slug}
                  type="monotone"
                  dataKey={d.slug}
                  stroke={d.color}
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-widest">
          {DRUGS.map((d) => (
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
