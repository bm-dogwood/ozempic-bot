// app/shortage/page.tsx
import { fetchFDAShortages, generateShortageHistory } from "@/lib/api";
import ShortageClient from "./ShortageClient";

export const revalidate = 3600;

const DRUGS_META = [
  {
    slug: "ozempic",
    brand: "Ozempic",
    generic: "semaglutide",
    color: "var(--mint)",
  },
  { slug: "wegovy", brand: "Wegovy", generic: "semaglutide", color: "#a78bfa" },
  {
    slug: "mounjaro",
    brand: "Mounjaro",
    generic: "tirzepatide",
    color: "var(--amber)",
  },
  {
    slug: "zepbound",
    brand: "Zepbound",
    generic: "tirzepatide",
    color: "var(--crimson)",
  },
];

export default async function ShortagePage() {
  const [shortageStatuses, historyData] = await Promise.all([
    fetchFDAShortages(),
    Promise.resolve(generateShortageHistory()),
  ]);

  const drugsWithStatus = DRUGS_META.map((d) => ({
    ...d,
    shortage: (shortageStatuses[d.slug] ?? "limited") as
      | "available"
      | "limited"
      | "shortage",
  }));

  return <ShortageClient drugs={drugsWithStatus} history={historyData} />;
}
