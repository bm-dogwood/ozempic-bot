// app/telehealth/page.tsx
"use client";

import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";
import { TELEHEALTH } from "@/lib/drugs";
import { PageHead } from "@/components/PageHead";

export default function TelehealthPage() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 py-16">
      <PageHead
        num="07"
        title="Telehealth"
        sub="Eight providers operating across the U.S. that can evaluate, prescribe, and ship GLP-1 medications."
      />

      <div className="grid md:grid-cols-2 gap-px bg-border">
        {TELEHEALTH.map((t, i) => (
          <motion.a
            key={t.name}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group bg-background p-8 hover:bg-surface transition-colors block"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  № {String(i + 1).padStart(2, "0")} · Provider
                </div>
                <h3 className="font-display text-4xl mt-1">{t.name}</h3>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-mint group-hover:rotate-45 transition-all" />
            </div>

            <div className="grid grid-cols-3 gap-px bg-border mb-6">
              <div className="bg-background p-3">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Starting
                </div>
                <div className="font-display text-xl mt-1">{t.price}</div>
              </div>
              <div className="bg-background p-3">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Rating
                </div>
                <div className="font-display text-xl mt-1 flex items-center gap-1">
                  {t.rating}
                  <Star className="h-3 w-3 fill-mint text-mint" />
                </div>
              </div>
              <div className="bg-background p-3">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Coverage
                </div>
                <div className="font-display text-base mt-1.5">{t.ships}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {t.drugs.map((d) => (
                <span
                  key={d}
                  className="font-mono text-[10px] uppercase tracking-widest border border-mint/40 text-mint px-2 py-1"
                >
                  {d}
                </span>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">{t.note}</p>
          </motion.a>
        ))}
      </div>

      <div className="mt-12 border border-border bg-surface p-6 text-sm text-muted-foreground">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-mint mb-2">
          ⌗ How we rank
        </div>
        <p className="leading-relaxed max-w-3xl">
          Providers are evaluated on transparency of pricing, breadth of GLP-1
          formulary, state coverage, accreditation of prescribing clinicians,
          and verified user reviews. We do not accept payment from listed
          providers.
        </p>
      </div>
    </div>
  );
}
