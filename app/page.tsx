"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Pill,
  MapPin,
  Shield,
  AlertTriangle,
  Stethoscope,
} from "lucide-react";
import heroPen from "@/public/hero.jpeg";
import molecule from "@/public/molecule.jpeg";
import { DRUGS } from "@/lib/drugs";

export default function Home() {
  return (
    <div>
      <Hero />
      <PriceBoard />
      <SectionsGrid />
      <MoleculeBlock />
      <FactStrip />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border noise">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute right-0 top-0 h-full w-full md:w-[55%]">
        <Image
          src={heroPen}
          alt="GLP-1 injection pen on dark surface"
          className="h-full w-full object-cover opacity-90"
          width={1920}
          height={1080}
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent md:via-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-mint mb-8">
          <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-mint pulse-dot" />
          <span>Issue №024 · The GLP-1 Quarterly</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[14vw] md:text-[10vw] leading-[0.85] tracking-[-0.04em] max-w-5xl"
        >
          The price of{" "}
          <span className="italic text-gradient-mint">thinness</span>,<br />
          measured weekly.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 grid md:grid-cols-12 gap-8 max-w-6xl"
        >
          <div className="md:col-span-7">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              An independent index of every GLP-1 receptor agonist on the U.S.
              market — what they cost, what they do, where to find them, and
              which ones your insurance will actually pay for. Updated weekly
              from FDA, Medicare, and pharmacy data.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/compare"
                className="group inline-flex items-center gap-3 bg-mint px-6 py-4 text-primary-foreground font-mono text-xs uppercase tracking-widest hover:bg-acid transition-colors"
              >
                Open the Index
                <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <Link
                href="/pharmacies"
                className="inline-flex items-center gap-3 border border-border px-6 py-4 font-mono text-xs uppercase tracking-widest hover:border-mint hover:text-mint transition-colors"
              >
                Find a Pharmacy
              </Link>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9 space-y-3 font-mono text-xs">
            <Stat
              label="Drugs Tracked"
              value="04"
              sub="FDA approved · Q4 2024"
            />
            <Stat
              label="Pharmacies Indexed"
              value="62,000+"
              sub="U.S. retail network"
            />
            <Stat
              label="Insurance Plans"
              value="148"
              sub="Commercial + Medicare"
            />
            <Stat
              label="Avg. monthly cost"
              value="$1,118"
              sub="Cash · pre-coupons"
              trend="down"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  sub,
  trend,
}: {
  label: string;
  value: string;
  sub: string;
  trend?: "up" | "down";
}) {
  return (
    <div className="border-l-2 border-mint pl-4 py-2 backdrop-blur-sm">
      <div className="text-muted-foreground uppercase tracking-widest text-[10px]">
        {label}
      </div>
      <div className="font-display text-3xl text-foreground mt-1 flex items-center gap-2">
        {value}
        {trend === "down" && <ArrowDownRight className="h-4 w-4 text-mint" />}
        {trend === "up" && <ArrowUpRight className="h-4 w-4 text-crimson" />}
      </div>
      <div className="text-muted-foreground text-[10px] mt-0.5">{sub}</div>
    </div>
  );
}

function PriceBoard() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-mint mb-3">
              § 01 · Live Board
            </div>
            <h2 className="font-display text-5xl md:text-6xl tracking-tight">
              The Big Four
            </h2>
          </div>
          <div className="hidden md:block font-mono text-xs text-muted-foreground">
            Cash price / 28-day supply · USD
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {DRUGS.map((d, i) => (
            <motion.div
              key={d.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-background p-8 hover:bg-surface transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {d.maker}
                  </div>
                  <div className="font-display text-4xl mt-1">{d.brand}</div>
                  <div className="font-mono text-xs text-muted-foreground mt-1">
                    {d.generic}
                  </div>
                </div>
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ background: d.color }}
                />
              </div>
              <div className="font-display text-5xl tracking-tight">
                ${d.cashPrice.toLocaleString()}
              </div>
              <div className="mt-4 space-y-1.5 font-mono text-[11px] text-muted-foreground border-t border-border pt-4">
                <Row k="Approved" v={d.approval} />
                <Row k="Indication" v={d.use} />
                <Row k="Avg. weight loss" v={`${d.efficacy}%`} />
                <Row
                  k="Status"
                  v={d.shortage}
                  highlight={d.shortage !== "available" ? "amber" : "mint"}
                />
              </div>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-mint group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({
  k,
  v,
  highlight,
}: {
  k: string;
  v: string;
  highlight?: "mint" | "amber";
}) {
  return (
    <div className="flex justify-between">
      <span className="uppercase tracking-wider">{k}</span>
      <span
        className={
          highlight === "mint"
            ? "text-mint"
            : highlight === "amber"
            ? "text-amber"
            : "text-foreground"
        }
      >
        {v}
      </span>
    </div>
  );
}

const sections = [
  {
    to: "/compare",
    title: "Compare",
    num: "02",
    desc: "Side-by-side: efficacy, dosage, mechanism.",
    icon: Pill,
  },
  {
    to: "/pharmacies",
    title: "Pharmacies",
    num: "03",
    desc: "Cash price by major chain — sortable.",
    icon: MapPin,
  },
  {
    to: "/insurance",
    title: "Insurance",
    num: "04",
    desc: "Coverage matrix across major insurers.",
    icon: Shield,
  },
  {
    to: "/side-effects",
    title: "Side Effects",
    num: "05",
    desc: "Trial-data percentages, drug by drug.",
    icon: Activity,
  },
  {
    to: "/shortage",
    title: "Shortage",
    num: "06",
    desc: "FDA supply status & 12-month history.",
    icon: AlertTriangle,
  },
  {
    to: "/telehealth",
    title: "Telehealth",
    num: "07",
    desc: "Eight providers, vetted and ranked.",
    icon: Stethoscope,
  },
] as const;

function SectionsGrid() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-[1600px] px-6 py-20">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-mint mb-3">
          § Index of Sections
        </div>
        <h2 className="font-display text-5xl md:text-7xl tracking-tight max-w-4xl mb-12">
          Six tools, no logins, no upsells.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.to}
                href={s.to}
                className="group bg-surface hover:bg-background transition-colors p-8 flex flex-col gap-4 min-h-[220px]"
              >
                <div className="flex items-start justify-between">
                  <div className="font-mono text-xs text-muted-foreground">
                    § {s.num}
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-mint group-hover:rotate-45 transition-all" />
                </div>
                <div className="mt-auto">
                  <Icon className="h-8 w-8 text-mint mb-4" strokeWidth={1.25} />
                  <h3 className="font-display text-3xl mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MoleculeBlock() {
  return (
    <section className="border-b border-border noise overflow-hidden">
      <div className="mx-auto max-w-[1600px] grid md:grid-cols-2">
        <div className="relative min-h-[420px] md:min-h-[600px]">
          <Image
            src={molecule}
            alt="Peptide molecular diagram"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            width={1024}
            height={1024}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/40" />
        </div>
        <div className="px-6 md:px-12 py-20 flex flex-col justify-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-mint mb-3">
            § Primer
          </div>
          <h2 className="font-display text-5xl md:text-6xl tracking-tight mb-6">
            What, exactly, is a <span className="italic text-mint">GLP-1</span>?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
            Glucagon-like peptide-1 receptor agonists mimic an intestinal
            hormone that signals satiety, slows gastric emptying, and stimulates
            insulin. Originally built for type-2 diabetes, they became the
            most-prescribed weight-loss class in modern medicine within four
            years.
          </p>
          <dl className="grid grid-cols-3 gap-px bg-border font-mono text-xs">
            {[
              { k: "Class", v: "Incretin mimetic" },
              { k: "Route", v: "Subcutaneous" },
              { k: "Frequency", v: "Once weekly" },
              { k: "Half-life", v: "~7 days" },
              { k: "Discovered", v: "1980s" },
              { k: "First Rx", v: "2005 (Byetta)" },
            ].map((x) => (
              <div key={x.k} className="bg-background p-4">
                <dt className="text-muted-foreground uppercase tracking-widest text-[10px]">
                  {x.k}
                </dt>
                <dd className="font-display text-xl mt-1">{x.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function FactStrip() {
  const facts = [
    { n: "1 in 8", t: "U.S. adults have used a GLP-1" },
    { n: "$71B", t: "Projected GLP-1 market by 2032" },
    { n: "−15%", t: "Avg. weight loss · 68 weeks · semaglutide" },
    { n: "≥12 mo", t: "Recommended duration of therapy" },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1600px] grid md:grid-cols-4 gap-px bg-border">
        {facts.map((f) => (
          <div
            key={f.n}
            className="bg-background p-10 hover:bg-surface transition-colors"
          >
            <div className="font-display text-6xl tracking-tight text-gradient-mint">
              {f.n}
            </div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mt-3">
              {f.t}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
