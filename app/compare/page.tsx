// pages/compare.tsx (or app/compare/page.tsx for App Router)
"use client";
import { motion } from "framer-motion";
import { DRUGS } from "@/lib/drugs";
import Head from "next/head";
import type { NextPage } from "next";

const Compare: NextPage = () => {
  const max = Math.max(...DRUGS.map((d) => d.efficacy));

  return (
    <>
      <Head>
        <title>Compare GLP-1 Drugs · Ozempic.bot</title>
        <meta
          name="description"
          content="Side-by-side comparison of Ozempic, Wegovy, Mounjaro and Zepbound."
        />
      </Head>

      <div className="mx-auto max-w-[1600px] px-6 py-16">
        <PageHead
          num="02"
          title="Compare"
          sub="Brand vs brand · efficacy, dose, mechanism, price."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-16">
          {DRUGS.map((d, i) => (
            <motion.div
              key={d.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-background p-8"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="h-2 w-12" style={{ background: d.color }} />
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                  № 0{i + 1}
                </span>
              </div>
              <h3 className="font-display text-4xl">{d.brand}</h3>
              <p className="font-mono text-xs text-muted-foreground mt-1">
                {d.generic} · {d.maker}
              </p>

              <div className="mt-6 mb-2 flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>Avg weight loss</span>
                <span>{d.efficacy}%</span>
              </div>
              <div className="h-2 bg-surface relative overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(d.efficacy / max) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                  className="h-full"
                  style={{ background: d.color }}
                />
              </div>

              <dl className="mt-6 space-y-3 font-mono text-xs">
                <Field k="Dosage range" v={d.dose} />
                <Field k="Schedule" v={d.schedule} />
                <Field k="Indication" v={d.use} />
                <Field k="FDA approval" v={d.approval} />
                <Field
                  k="Cash / month"
                  v={`$${d.cashPrice.toLocaleString()}`}
                />
                <Field k="With insurance" v={d.withInsurance} />
                <Field k="GoodRx coupon" v={`$${d.goodrx.toLocaleString()}`} />
              </dl>
            </motion.div>
          ))}
        </div>

        <div className="border border-border p-8 md:p-12 bg-surface">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-mint mb-3">
            § Mechanism note
          </div>
          <h3 className="font-display text-3xl md:text-4xl mb-4">
            Semaglutide vs Tirzepatide
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">
            <span className="text-foreground">Semaglutide</span> (Ozempic,
            Wegovy) is a single GLP-1 receptor agonist.
            <span className="text-foreground"> Tirzepatide</span> (Mounjaro,
            Zepbound) is a dual GIP/GLP-1 agonist — it activates a second
            incretin pathway, which trial data correlates with greater weight
            reduction at the highest dose tier.
          </p>
        </div>
      </div>
    </>
  );
};

export default Compare;

function Field({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border pb-2">
      <dt className="text-muted-foreground uppercase tracking-wider text-[10px]">
        {k}
      </dt>
      <dd className="text-right">{v}</dd>
    </div>
  );
}

export function PageHead({
  num,
  title,
  sub,
}: {
  num: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="mb-12 border-b border-border pb-12">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-mint mb-4">
        § {num}
      </div>
      <h1 className="font-display text-6xl md:text-8xl tracking-tight">
        {title}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{sub}</p>
    </div>
  );
}
