import type { Metadata } from "next";
import { pageSEO, SITE_URL } from "@/lib/seo-config";
import {
  generateFAQSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import SEOPageLayout from "@/components/SEOPageLayout";

const seo = pageSEO["ozempic-shortage"];

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `${SITE_URL}${seo.canonicalPath}` },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${SITE_URL}${seo.canonicalPath}`,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
};

const faqs = [
  {
    question: "Is there still an Ozempic shortage in 2024?",
    answer:
      "The most severe phase of the Ozempic shortage—which began in 2022—has eased substantially. The FDA removed certain semaglutide dose strengths from the shortage list in 2024, though some doses and regional availability can still be inconsistent. Check the FDA Drug Shortages Database for the latest status.",
  },
  {
    question: "Why did the Ozempic shortage happen?",
    answer:
      "The shortage stemmed from an unprecedented surge in demand driven by off-label weight-loss prescribing, a viral social media moment, and Novo Nordisk's manufacturing capacity not keeping pace. The company has since invested billions in expanding production facilities.",
  },
  {
    question: "What can I take instead of Ozempic if it's unavailable?",
    answer:
      "Alternatives depending on your condition include Rybelsus (oral semaglutide), Trulicity (dulaglutide), Victoza/Saxenda (liraglutide), Mounjaro/Zepbound (tirzepatide), and—during shortage designations—compounded semaglutide from licensed 503B pharmacies. Discuss substitutes with your doctor.",
  },
  {
    question: "Can pharmacies order Ozempic if it's out of stock?",
    answer:
      "Yes. Pharmacies can place special orders with distributors, and independent pharmacies sometimes have better access to specialty medications than large chains. Calling multiple pharmacies or using a pharmacy finder tool can help locate available stock.",
  },
  {
    question: "Is compounded semaglutide still legal?",
    answer:
      "The FDA previously allowed 503B compounding pharmacies to produce semaglutide during shortage designations. As the FDA has updated shortage status for some dose strengths, the legal landscape for compounding has shifted. Consult your provider and confirm the current regulatory status before pursuing compounded options.",
  },
];

const schemas = [
  generateFAQSchema(faqs),
  generateArticleSchema({
    title: seo.title,
    description: seo.description,
    path: seo.canonicalPath,
  }),
  generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Ozempic Shortage", path: seo.canonicalPath },
  ]),
];

export default function OzempicShortagePage() {
  return (
    <SEOPageLayout schemas={schemas}>
      <h1>Ozempic Shortage 2024: Current Status, Causes & Alternatives</h1>

      <p>
        For two years, the Ozempic shortage left millions of Type 2 diabetes
        patients struggling to fill their prescriptions—a public health crisis
        driven by unprecedented demand, viral social media attention, and
        manufacturing constraints. Here's where things stand in 2024 and what to
        do if you're still having trouble finding your medication.
      </p>

      <h2>Current Shortage Status (2024)</h2>
      <p>
        The FDA Drug Shortages Database—the official source for shortage
        designations—has removed several Ozempic dose strengths from active
        shortage status. As of mid-2024, the 0.5 mg and 1 mg doses have been
        more reliably available, while some regions and pharmacies may still
        experience intermittent supply gaps. The 2 mg dose has also improved in
        availability.
      </p>
      <p>
        <strong>Wegovy</strong> (higher-dose semaglutide for weight management)
        has had its own parallel shortage that is also improving, with 0.25 mg,
        0.5 mg, and 1 mg doses more readily available and higher doses still
        sometimes constrained.
      </p>
      <p>
        Always verify current status at the{" "}
        <strong>FDA Drug Shortages Database</strong> (accessdata.fda.gov) or by
        calling your pharmacy directly.
      </p>

      <h2>Why Did the Ozempic Shortage Happen?</h2>
      <p>
        The semaglutide shortage was caused by the perfect storm of several
        factors:
      </p>
      <ol>
        <li>
          <strong>Viral weight-loss coverage.</strong> Starting in late 2022,
          Ozempic became a household name after coverage in news media and
          social platforms highlighted dramatic weight-loss results.
          Prescriptions surged far beyond the diabetic patient population.
        </li>
        <li>
          <strong>Off-label prescribing volume.</strong> Physicians began
          prescribing Ozempic for obesity at scale, years before Wegovy supply
          could meet demand.
        </li>
        <li>
          <strong>Manufacturing constraints.</strong> Novo Nordisk's production
          capacity—designed around diabetic patient demand—could not scale fast
          enough. The proprietary peptide synthesis required to make semaglutide
          is technically complex and slow to expand.
        </li>
        <li>
          <strong>FDA fill-finish bottlenecks.</strong> Sterile injectable
          manufacturing requires specialized facilities; contracting additional
          manufacturers takes years.
        </li>
      </ol>

      <h2>Novo Nordisk's Response</h2>
      <p>
        Novo Nordisk has committed over $6 billion in manufacturing capacity
        expansion since 2023, including new fill-finish lines in Denmark and
        expanded API production. The company prioritized diabetes patients in
        allocation during the peak shortage and has been gradually releasing
        more supply to the market throughout 2024.
      </p>

      <h2>What To Do If You Can't Find Ozempic</h2>

      <h3>1. Call Multiple Pharmacies</h3>
      <p>
        Availability varies dramatically by pharmacy and location. Independent
        pharmacies and smaller chains sometimes have stock when major retailers
        don't. Call ahead before driving— pharmacies cannot hold stock without a
        prescription, but they can tell you whether they have current inventory.
      </p>

      <h3>2. Ask Your Doctor About Dose Flexibility</h3>
      <p>
        If your target dose is unavailable, your physician may be able to
        temporarily prescribe an available dose (e.g., stay on 0.5 mg if 1 mg is
        out of stock) while you wait for restocking.
      </p>

      <h3>3. Consider Alternative GLP-1 Medications</h3>
      <p>
        Several GLP-1 receptor agonists are approved for Type 2 diabetes and may
        be available when Ozempic is not:
      </p>
      <ul>
        <li>
          <strong>Rybelsus</strong> (oral semaglutide) — Same active ingredient
          as Ozempic in pill form; generally less affected by the injectable
          shortage.
        </li>
        <li>
          <strong>Trulicity</strong> (dulaglutide) — Weekly injection; different
          mechanism but similar GLP-1 class.
        </li>
        <li>
          <strong>Mounjaro / Zepbound</strong> (tirzepatide) — Dual GIP/GLP-1
          agonist from Eli Lilly; highly effective and supply has been
          improving.
        </li>
        <li>
          <strong>Victoza</strong> (liraglutide, daily injection) — Older GLP-1
          drug, may be more readily available.
        </li>
      </ul>

      <h3>4. Compounded Semaglutide</h3>
      <p>
        During FDA shortage designations, licensed 503B outsourcing facilities
        could legally produce compounded semaglutide. As shortage status
        changes, the legality of compounding specific dose strengths changes as
        well. Before pursuing compounded semaglutide, confirm:
      </p>
      <ul>
        <li>The current FDA shortage status for your specific dose</li>
        <li>
          That the compounding pharmacy is a licensed 503A or 503B facility
        </li>
        <li>That your physician supports this approach</li>
      </ul>
      <p>
        The FDA has issued warnings about unlicensed compounders selling
        substandard or inaccurately dosed semaglutide—source only from
        accredited facilities.
      </p>

      <h3>5. GoodRx and Out-of-Pocket Options</h3>
      <p>
        Some patients find Ozempic at smaller regional pharmacies that accept
        GoodRx pricing. Searching GoodRx by zip code can reveal which local
        pharmacies have the medication available and at what price.
      </p>

      <h2>Looking Ahead: Will the Shortage Return?</h2>
      <p>
        Analysts expect semaglutide supply to continue improving through 2025
        and beyond as Novo Nordisk's expanded capacity comes online. However, if
        demand continues to grow with new approvals (cardiovascular risk
        reduction, sleep apnea, etc.), supply tightness may recur. Keeping a 1–2
        month buffer supply (if your insurer allows early refills) is a prudent
        strategy when you have access.
      </p>

      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq) => (
        <div key={faq.question} style={{ marginBottom: "1.25rem" }}>
          <h3 style={{ fontSize: "1.05rem", marginBottom: "0.35rem" }}>
            {faq.question}
          </h3>
          <p style={{ margin: 0 }}>{faq.answer}</p>
        </div>
      ))}

      <p style={{ marginTop: "2rem", fontSize: "0.85rem", color: "#666" }}>
        <em>
          Shortage status information is subject to rapid change. Always verify
          current availability with the FDA Drug Shortages Database and your
          pharmacist. This page is for informational purposes only.
        </em>
      </p>
    </SEOPageLayout>
  );
}
