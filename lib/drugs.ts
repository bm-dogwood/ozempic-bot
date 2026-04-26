export type Drug = {
  slug: string;
  brand: string;
  generic: string;
  maker: string;
  approval: string;
  use: string;
  dose: string;
  cashPrice: number;
  goodrx: number;
  withInsurance: string;
  shortage: "available" | "limited" | "shortage";
  efficacy: number; // % avg weight loss
  schedule: string;
  color: string;
};

export const DRUGS: Drug[] = [
  {
    slug: "ozempic",
    brand: "Ozempic",
    generic: "Semaglutide",
    maker: "Novo Nordisk",
    approval: "2017",
    use: "Type 2 Diabetes",
    dose: "0.25 – 2.0 mg",
    cashPrice: 968.52,
    goodrx: 892.4,
    withInsurance: "$25 – $250",
    shortage: "available",
    efficacy: 14.9,
    schedule: "Weekly injection",
    color: "var(--mint)",
  },
  {
    slug: "wegovy",
    brand: "Wegovy",
    generic: "Semaglutide",
    maker: "Novo Nordisk",
    approval: "2021",
    use: "Chronic weight management",
    dose: "0.25 – 2.4 mg",
    cashPrice: 1349.02,
    goodrx: 1279.5,
    withInsurance: "$0 – $300",
    shortage: "limited",
    efficacy: 16.9,
    schedule: "Weekly injection",
    color: "var(--acid)",
  },
  {
    slug: "mounjaro",
    brand: "Mounjaro",
    generic: "Tirzepatide",
    maker: "Eli Lilly",
    approval: "2022",
    use: "Type 2 Diabetes",
    dose: "2.5 – 15 mg",
    cashPrice: 1069.08,
    goodrx: 998.2,
    withInsurance: "$25 – $573",
    shortage: "available",
    efficacy: 20.9,
    schedule: "Weekly injection",
    color: "var(--amber)",
  },
  {
    slug: "zepbound",
    brand: "Zepbound",
    generic: "Tirzepatide",
    maker: "Eli Lilly",
    approval: "2023",
    use: "Chronic weight management",
    dose: "2.5 – 15 mg",
    cashPrice: 1086.37,
    goodrx: 1019.9,
    withInsurance: "$0 – $550",
    shortage: "available",
    efficacy: 22.5,
    schedule: "Weekly injection",
    color: "var(--crimson)",
  },
];

export const SIDE_EFFECTS = [
  { name: "Nausea", ozempic: 44, wegovy: 44, mounjaro: 22, zepbound: 29 },
  { name: "Diarrhea", ozempic: 30, wegovy: 30, mounjaro: 17, zepbound: 23 },
  { name: "Vomiting", ozempic: 24, wegovy: 24, mounjaro: 10, zepbound: 13 },
  { name: "Constipation", ozempic: 24, wegovy: 24, mounjaro: 7, zepbound: 11 },
  {
    name: "Abdominal pain",
    ozempic: 20,
    wegovy: 20,
    mounjaro: 6,
    zepbound: 10,
  },
  { name: "Fatigue", ozempic: 11, wegovy: 11, mounjaro: 5, zepbound: 7 },
  { name: "Headache", ozempic: 14, wegovy: 14, mounjaro: 5, zepbound: 8 },
  { name: "Hypoglycemia", ozempic: 4, wegovy: 4, mounjaro: 14, zepbound: 3 },
];

export const PHARMACIES = [
  {
    name: "CVS Pharmacy",
    ozempic: 998,
    wegovy: 1389,
    mounjaro: 1099,
    zepbound: 1115,
  },
  {
    name: "Walgreens",
    ozempic: 985,
    wegovy: 1359,
    mounjaro: 1085,
    zepbound: 1099,
  },
  {
    name: "Walmart",
    ozempic: 942,
    wegovy: 1295,
    mounjaro: 1012,
    zepbound: 1042,
  },
  { name: "Costco", ozempic: 912, wegovy: 1248, mounjaro: 989, zepbound: 1018 },
  {
    name: "Rite Aid",
    ozempic: 1019,
    wegovy: 1410,
    mounjaro: 1125,
    zepbound: 1148,
  },
  {
    name: "Kroger Pharmacy",
    ozempic: 968,
    wegovy: 1339,
    mounjaro: 1059,
    zepbound: 1089,
  },
  {
    name: "Sam's Club",
    ozempic: 935,
    wegovy: 1278,
    mounjaro: 998,
    zepbound: 1029,
  },
  { name: "HEB", ozempic: 952, wegovy: 1310, mounjaro: 1029, zepbound: 1059 },
];

export const TELEHEALTH = [
  {
    name: "Ro",
    price: "$145/mo",
    drugs: ["Wegovy", "Zepbound"],
    rating: 4.6,
    ships: "All 50 states",
    note: "Compounded options available",
  },
  {
    name: "Hims & Hers",
    price: "$199/mo",
    drugs: ["Compounded Semaglutide"],
    rating: 4.4,
    ships: "47 states",
    note: "Subscription-based",
  },
  {
    name: "Sequence (Weight Watchers)",
    price: "$99/mo + Rx",
    drugs: ["Ozempic", "Wegovy", "Mounjaro"],
    rating: 4.5,
    ships: "All 50 states",
    note: "Insurance navigation",
  },
  {
    name: "Found",
    price: "$99/mo + Rx",
    drugs: ["Wegovy", "Zepbound", "Saxenda"],
    rating: 4.3,
    ships: "All 50 states",
    note: "Personalized program",
  },
  {
    name: "Calibrate",
    price: "$1,649/yr",
    drugs: ["GLP-1s prescribed"],
    rating: 4.2,
    ships: "All 50 states",
    note: "1-year metabolic reset",
  },
  {
    name: "PlushCare",
    price: "$129/mo",
    drugs: ["Ozempic", "Wegovy"],
    rating: 4.7,
    ships: "All 50 states",
    note: "Same-day appointments",
  },
  {
    name: "Noom Med",
    price: "$149/mo",
    drugs: ["Wegovy", "Zepbound"],
    rating: 4.1,
    ships: "All 50 states",
    note: "Behavioral + medical",
  },
  {
    name: "LifeMD",
    price: "$129/mo",
    drugs: ["Ozempic", "Wegovy", "Zepbound"],
    rating: 4.4,
    ships: "All 50 states",
    note: "On-demand visits",
  },
];

export const SHORTAGE_HISTORY = [
  { month: "Jan", ozempic: 60, wegovy: 30, mounjaro: 50, zepbound: 80 },
  { month: "Feb", ozempic: 65, wegovy: 35, mounjaro: 55, zepbound: 82 },
  { month: "Mar", ozempic: 70, wegovy: 40, mounjaro: 60, zepbound: 85 },
  { month: "Apr", ozempic: 75, wegovy: 45, mounjaro: 70, zepbound: 88 },
  { month: "May", ozempic: 80, wegovy: 50, mounjaro: 78, zepbound: 90 },
  { month: "Jun", ozempic: 85, wegovy: 55, mounjaro: 82, zepbound: 92 },
  { month: "Jul", ozempic: 88, wegovy: 60, mounjaro: 85, zepbound: 94 },
  { month: "Aug", ozempic: 90, wegovy: 65, mounjaro: 88, zepbound: 95 },
  { month: "Sep", ozempic: 92, wegovy: 70, mounjaro: 90, zepbound: 95 },
  { month: "Oct", ozempic: 94, wegovy: 75, mounjaro: 92, zepbound: 96 },
  { month: "Nov", ozempic: 95, wegovy: 78, mounjaro: 94, zepbound: 97 },
  { month: "Dec", ozempic: 96, wegovy: 80, mounjaro: 95, zepbound: 98 },
];

export const INSURANCE_PLANS = [
  {
    name: "Medicare Part D",
    ozempic: "Covered (T2D only)",
    wegovy: "Not covered",
    mounjaro: "Covered (T2D only)",
    zepbound: "Limited",
  },
  {
    name: "Medicaid",
    ozempic: "Varies by state",
    wegovy: "Varies by state",
    mounjaro: "Varies by state",
    zepbound: "Limited",
  },
  {
    name: "Blue Cross Blue Shield",
    ozempic: "Tier 3 — PA required",
    wegovy: "Tier 3 — PA + BMI 30+",
    mounjaro: "Tier 3 — PA required",
    zepbound: "Tier 3 — PA + BMI 30+",
  },
  {
    name: "Aetna",
    ozempic: "Covered (T2D)",
    wegovy: "Covered with PA",
    mounjaro: "Covered (T2D)",
    zepbound: "Covered with PA",
  },
  {
    name: "UnitedHealthcare",
    ozempic: "Tier 2",
    wegovy: "Tier 3 — restrictions",
    mounjaro: "Tier 2",
    zepbound: "Tier 3 — restrictions",
  },
  {
    name: "Cigna",
    ozempic: "Covered",
    wegovy: "PA + step therapy",
    mounjaro: "Covered",
    zepbound: "PA + step therapy",
  },
  {
    name: "Kaiser Permanente",
    ozempic: "Covered (T2D)",
    wegovy: "Limited formulary",
    mounjaro: "Covered (T2D)",
    zepbound: "Limited formulary",
  },
  {
    name: "Humana",
    ozempic: "Tier 3",
    wegovy: "Not on formulary",
    mounjaro: "Tier 3",
    zepbound: "Limited",
  },
];
