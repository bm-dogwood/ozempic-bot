export const SITE_URL = "https://ozempic.bot";
export const SITE_NAME = "Ozempic.Bot";

export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  canonicalPath: string;
  ogImage?: string;
}

export const pageSEO: Record<string, PageSEO> = {
  home: {
    title: "Ozempic.Bot – Your AI Guide to Ozempic, Wegovy & GLP-1 Medications",
    description:
      "Get instant, AI-powered answers about Ozempic cost, side effects, dosage, availability, and alternatives like Wegovy and Mounjaro. Trusted GLP-1 information hub.",
    keywords: ["ozempic", "semaglutide", "glp-1", "wegovy", "mounjaro", "weight loss injection"],
    canonicalPath: "/",
  },
  "ozempic-cost": {
    title: "Ozempic Cost 2024 – Price Per Month, With & Without Insurance | Ozempic.Bot",
    description:
      "Find out how much Ozempic costs in 2024. Retail price is $935/month but insurance, manufacturer coupons & patient assistance programs can reduce costs dramatically.",
    keywords: [
      "ozempic cost",
      "how much does ozempic cost",
      "ozempic price",
      "ozempic cost per month",
      "ozempic price without insurance",
      "ozempic cost 2024",
    ],
    canonicalPath: "/ozempic-cost",
  },
  "ozempic-vs-wegovy": {
    title: "Ozempic vs Wegovy – Key Differences, Dosage & Which Is Right for You | Ozempic.Bot",
    description:
      "Ozempic vs Wegovy: both contain semaglutide but differ in FDA approval, dosage, and insurance coverage. Compare them side-by-side to make an informed decision.",
    keywords: [
      "ozempic vs wegovy",
      "ozempic versus wegovy",
      "wegovy vs ozempic difference",
      "semaglutide brands",
      "ozempic or wegovy for weight loss",
    ],
    canonicalPath: "/ozempic-vs-wegovy",
  },
  "ozempic-side-effects": {
    title: "Ozempic Side Effects – Common, Serious & How to Manage Them | Ozempic.Bot",
    description:
      "Learn about Ozempic side effects including nausea, vomiting, diarrhea, and rare risks like pancreatitis. Discover management tips and when to call your doctor.",
    keywords: [
      "ozempic side effects",
      "ozempic nausea",
      "ozempic stomach pain",
      "ozempic hair loss",
      "ozempic face",
      "serious ozempic side effects",
    ],
    canonicalPath: "/ozempic-side-effects",
  },
  "ozempic-shortage": {
    title: "Ozempic Shortage 2024 – Is It Still Hard to Find? Alternatives & Updates | Ozempic.Bot",
    description:
      "The Ozempic shortage has eased in many areas but some doses remain scarce. Get the latest availability updates, tips to find it, and shortage alternatives.",
    keywords: [
      "ozempic shortage",
      "ozempic shortage 2024",
      "is ozempic available",
      "ozempic shortage update",
      "ozempic hard to find",
      "ozempic supply",
    ],
    canonicalPath: "/ozempic-shortage",
  },
  "ozempic-without-insurance": {
    title: "Ozempic Without Insurance – How to Get It for Less in 2024 | Ozempic.Bot",
    description:
      "Ozempic without insurance costs ~$935/month but coupons, patient assistance, compounding pharmacies & GoodRx can lower your price. Here's everything you need to know.",
    keywords: [
      "ozempic without insurance",
      "ozempic no insurance",
      "ozempic out of pocket cost",
      "how to get ozempic without insurance",
      "ozempic manufacturer coupon",
      "cheapest ozempic",
    ],
    canonicalPath: "/ozempic-without-insurance",
  },
  "mounjaro-vs-ozempic": {
    title: "Mounjaro vs Ozempic – Which GLP-1 Drug Works Better? 2024 Comparison | Ozempic.Bot",
    description:
      "Mounjaro (tirzepatide) vs Ozempic (semaglutide): compare weight loss results, side effects, cost, and FDA approvals to decide which GLP-1 medication suits you best.",
    keywords: [
      "mounjaro vs ozempic",
      "mounjaro versus ozempic",
      "tirzepatide vs semaglutide",
      "mounjaro or ozempic",
      "which is better mounjaro or ozempic",
      "ozempic mounjaro comparison",
    ],
    canonicalPath: "/mounjaro-vs-ozempic",
  },
};
