// components/Footer.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Footer() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(
      new Date().toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      })
    );
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="mx-auto max-w-[1600px] px-6 py-12 grid gap-12 md:grid-cols-4 font-mono text-xs">
        <div>
          <div className="font-display text-3xl text-foreground mb-3">
            Ozempic.bot
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Independent GLP-1 price tracker. Not affiliated with Novo Nordisk or
            Eli Lilly. Educational purposes only — not medical advice.
          </p>
        </div>
        <div>
          <div className="text-foreground uppercase tracking-widest mb-4">
            Data Sources
          </div>
          <ul className="space-y-2 text-muted-foreground">
            <li>FDA Drug Database (api.fda.gov)</li>
            <li>FDA Drug Shortage Index</li>
            <li>Medicare Part D Pricing</li>
            <li>GoodRx Public Pricing</li>
            <li>Manufacturer Disclosures</li>
          </ul>
        </div>
        <div>
          <div className="text-foreground uppercase tracking-widest mb-4">
            Sections
          </div>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link
                href="/compare"
                className="hover:text-mint transition-colors"
              >
                Price Compare
              </Link>
            </li>
            <li>
              <Link
                href="/pharmacies"
                className="hover:text-mint transition-colors"
              >
                Pharmacy Lookup
              </Link>
            </li>
            <li>
              <Link
                href="/insurance"
                className="hover:text-mint transition-colors"
              >
                Insurance Coverage
              </Link>
            </li>
            <li>
              <Link
                href="/side-effects"
                className="hover:text-mint transition-colors"
              >
                Side Effect Atlas
              </Link>
            </li>
            <li>
              <Link
                href="/shortage"
                className="hover:text-mint transition-colors"
              >
                Shortage Tracker
              </Link>
            </li>
            <li>
              <Link
                href="/telehealth"
                className="hover:text-mint transition-colors"
              >
                Telehealth Directory
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-foreground uppercase tracking-widest mb-4">
            Disclaimer
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Always consult a licensed healthcare provider before starting,
            changing, or stopping any prescription medication. Prices fluctuate
            and may vary by location and pharmacy.
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 py-4 flex flex-wrap items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground gap-4">
          <span>© {currentYear} Ozempic.bot · Built for transparency</span>
          <span>Data refreshed: {currentDate}</span>
        </div>
      </div>
    </footer>
  );
}
