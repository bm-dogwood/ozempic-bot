// app/side-effects/page.tsx
"use client";

import { motion } from "framer-motion";
import { SIDE_EFFECTS, DRUGS } from "@/lib/drugs";

export default function SideEffectsPage() {
  const max = Math.max(
    ...SIDE_EFFECTS.flatMap((s) => [
      s.ozempic,
      s.wegovy,
      s.mounjaro,
      s.zepbound,
    ])
  );

  return (
    <div className="mx-auto max-w-[1600px] px-6 py-16">
      <div className="grid md:grid-cols-4 gap-px bg-border mb-12">
        {DRUGS.map((d) => (
          <div
            key={d.slug}
            className="bg-background p-4 flex items-center gap-3"
          >
            <div
              className="h-3 w-3 rounded-full"
              style={{ background: d.color }}
            />
            <div>
              <div className="font-display text-xl">{d.brand}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {d.generic}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        {SIDE_EFFECTS.map((s, idx) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="border-b border-border pb-6"
          >
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="font-display text-3xl">{s.name}</h3>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                % of patients
              </span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {DRUGS.map((d) => {
                const val = s[d.slug as keyof typeof s] as number;
                return (
                  <div key={d.slug}>
                    <div className="flex justify-between items-baseline mb-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {d.brand}
                      </span>
                      <span className="font-display text-2xl">{val}%</span>
                    </div>
                    <div className="h-1.5 bg-surface relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${(val / max) * 100}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: 0.2 + idx * 0.05,
                        }}
                        className="h-full"
                        style={{ background: d.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 border border-crimson/40 bg-crimson/5 p-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-crimson mb-2">
          ⚠ Boxed warning
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          All GLP-1 receptor agonists carry a black-box warning for risk of
          thyroid C-cell tumors based on rodent studies. Contraindicated in
          patients with personal or family history of medullary thyroid
          carcinoma or MEN 2. Rare but serious adverse events include
          pancreatitis, gallbladder disease, and gastroparesis.
        </p>
      </div>
    </div>
  );
}
