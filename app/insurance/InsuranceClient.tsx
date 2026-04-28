// app/insurance/InsuranceClient.tsx
"use client";

import { useState } from "react";
import { Check, X, AlertCircle } from "lucide-react";
import { PageHead } from "@/components/PageHead";
import type { InsurancePlan } from "@/lib/api";

interface Props {
  plans: InsurancePlan[];
  medicareNote: string;
}

export default function InsuranceClient({ plans, medicareNote }: Props) {
  const [planName, setPlan] = useState(plans[0].name);
  const selected = plans.find((p) => p.name === planName)!;

  const status = (s: string) => {
    if (/not covered|not on/i.test(s))
      return { icon: X, color: "text-crimson", label: "Not covered" };
    if (/limited|varies|pa|step|select/i.test(s))
      return { icon: AlertCircle, color: "text-amber", label: "Conditional" };
    return { icon: Check, color: "text-mint", label: "Covered" };
  };

  return (
    <div className="mx-auto max-w-[1600px] px-6 py-16">
      <PageHead
        num="04"
        title="Insurance"
        sub="Coverage rules vary widely. This is a snapshot of how the major U.S. plans handle each GLP-1."
      />

      <div className="grid lg:grid-cols-12 gap-8">
        <aside className="lg:col-span-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
            Select your plan
          </div>
          <div className="border border-border">
            {plans.map((p) => (
              <button
                key={p.name}
                onClick={() => setPlan(p.name)}
                className={`w-full text-left px-5 py-4 border-b border-border last:border-b-0 transition-colors font-display text-lg ${
                  planName === p.name
                    ? "bg-mint text-primary-foreground"
                    : "hover:bg-surface"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </aside>

        <div className="lg:col-span-8">
          <div className="border border-border p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-mint mb-3">
              Carrier · {selected.name}
            </div>
            <h2 className="font-display text-4xl mb-8">{selected.name}</h2>

            <div className="grid sm:grid-cols-2 gap-px bg-border">
              {(["ozempic", "wegovy", "mounjaro", "zepbound"] as const).map(
                (drug) => {
                  const s = status(selected[drug]);
                  const Icon = s.icon;
                  return (
                    <div key={drug} className="bg-background p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-display text-2xl capitalize">
                          {drug}
                        </span>
                        <Icon className={`h-5 w-5 ${s.color}`} />
                      </div>
                      <div
                        className={`font-mono text-[10px] uppercase tracking-widest ${s.color} mb-2`}
                      >
                        {s.label}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {selected[drug]}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          <div className="mt-6 border border-border bg-surface p-4 text-xs text-muted-foreground">
            <span className="text-mint font-mono uppercase tracking-widest text-[10px]">
              ⌗ Data source —{" "}
            </span>
            {medicareNote ||
              "Coverage data from public payer formularies and CMS datasets."}{" "}
            Always verify with your insurance provider.
          </div>

          <div className="mt-4 border border-border bg-surface p-6 text-sm text-muted-foreground space-y-2">
            <div className="font-mono text-[10px] uppercase tracking-widest text-mint mb-2">
              Glossary
            </div>
            <p>
              <span className="text-foreground">PA</span> — Prior authorization
              required. Your prescriber must justify the prescription.
            </p>
            <p>
              <span className="text-foreground">Step therapy</span> — You must
              try cheaper alternatives first.
            </p>
            <p>
              <span className="text-foreground">Tier 2/3</span> — Higher copay
              than generics; varies by employer plan design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
