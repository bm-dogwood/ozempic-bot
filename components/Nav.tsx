// components/Nav.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Index" },
  { to: "/compare", label: "Compare" },
  { to: "/pharmacies", label: "Pharmacies" },
  { to: "/insurance", label: "Insurance" },
  { to: "/side-effects", label: "Side Effects" },
  { to: "/shortage", label: "Shortage" },
  { to: "/telehealth", label: "Telehealth" },
] as const;

export function Nav() {
  const pathname = usePathname();
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(
      new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
      })
    );
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-sm bg-mint">
            <div className="h-3 w-3 rounded-full bg-background" />
          </div>
          <div className="font-mono text-xs leading-tight">
            <div className="font-semibold tracking-widest">OZEMPIC.BOT</div>
            <div className="text-muted-foreground">v2.1 · GLP-1 INDEX</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs uppercase tracking-wider">
          {links.map((l) => {
            const isActive =
              l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);

            return (
              <Link
                key={l.to}
                href={l.to}
                className={`px-3 py-2 transition-colors hover:text-foreground ${
                  isActive
                    ? "text-mint border-b border-mint"
                    : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:flex items-center gap-2 font-mono text-xs">
          <span className="relative inline-block h-2 w-2 rounded-full bg-mint pulse-dot" />
          <span className="text-muted-foreground">LIVE · {currentDate}</span>
        </div>
      </div>
      <Ticker />
    </header>
  );
}

function Ticker() {
  const items = [
    "OZEMPIC $968.52 ↓ 2.1%",
    "WEGOVY $1,349.02 ↑ 0.4%",
    "MOUNJARO $1,069.08 ↓ 1.8%",
    "ZEPBOUND $1,086.37 → 0.0%",
    "FDA · SHORTAGE RESOLVED · OCT 2024",
    "NOVO NORDISK Q3 REVENUE +29%",
    "ELI LILLY MARKET CAP $720B",
    "COMPOUNDED SEMAGLUTIDE BAN UPDATE",
  ];

  return (
    <div className="overflow-hidden border-t border-border bg-surface">
      <div className="ticker flex whitespace-nowrap py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="px-6 flex items-center gap-6">
            {t}
            <span className="text-mint">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
