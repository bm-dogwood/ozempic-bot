import type { Metadata } from "next";
import { pageSEO, SITE_URL } from "@/lib/seo-config";
import { generateFAQSchema, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import SEOPageLayout from "@/components/SEOPageLayout";

const seo = pageSEO["ozempic-cost"];

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
    question: "How much does Ozempic cost per month without insurance?",
    answer:
      "The retail (list) price of Ozempic is approximately $935–$1,000 per month for a four-pen carton in the United States. Actual out-of-pocket costs vary widely based on your pharmacy, dose, and any savings programs you use.",
  },
  {
    question: "Does insurance cover Ozempic?",
    answer:
      "Many commercial insurance plans cover Ozempic when prescribed for Type 2 diabetes. Coverage for weight-loss use is less common. Medicare Part D covers Ozempic for diabetes but generally does not cover GLP-1s for obesity alone. Always verify your specific plan's formulary.",
  },
  {
    question: "Is there a manufacturer coupon for Ozempic?",
    answer:
      "Yes. Novo Nordisk offers the Ozempic Savings Card, which can reduce copays to as low as $25 per month for eligible, commercially insured patients. Uninsured patients may qualify for the Patient Assistance Program (PAP) that provides Ozempic at no cost.",
  },
  {
    question: "Can GoodRx lower the cost of Ozempic?",
    answer:
      "GoodRx and similar discount cards can reduce the out-of-pocket price of Ozempic at many pharmacies, sometimes to $850–$900 per month. Savings depend on the pharmacy and current pricing. Always compare GoodRx prices with your insurance copay before purchasing.",
  },
  {
    question: "Are there cheaper alternatives to Ozempic?",
    answer:
      "Compounded semaglutide (available from licensed 503B compounding pharmacies during shortage designations), older GLP-1 drugs like Trulicity (dulaglutide), and oral semaglutide (Rybelsus) may be less expensive. Discuss all options with your prescribing physician.",
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
    { name: "Ozempic Cost", path: seo.canonicalPath },
  ]),
];

export default function OzempicCostPage() {
  return (
    <SEOPageLayout schemas={schemas}>
      <h1>Ozempic Cost: What You'll Pay in 2024</h1>

      <p>
        Ozempic (semaglutide) has become one of the most prescribed medications in America, but its
        price tag often surprises patients. The retail list price sits at roughly <strong>$935 per
        month</strong> for a four-pen carton—making it one of the more expensive injectable
        therapies on the market. However, what most people actually pay is dramatically lower once
        insurance, coupons, and assistance programs enter the picture.
      </p>

      <h2>Ozempic Retail Price by Dose</h2>
      <p>
        Ozempic is available in three dose strengths: 0.5 mg, 1 mg, and 2 mg per injection. Each
        pen contains four weekly doses. The approximate retail prices at major U.S. pharmacies are:
      </p>
      <ul>
        <li>
          <strong>0.25 mg / 0.5 mg pen (4 doses):</strong> ~$935–$970
        </li>
        <li>
          <strong>1 mg pen (4 doses):</strong> ~$935–$970
        </li>
        <li>
          <strong>2 mg pen (4 doses):</strong> ~$935–$970 (same carton price, higher dose)
        </li>
      </ul>
      <p>
        These prices reflect the Novo Nordisk Wholesale Acquisition Cost (WAC) and are updated
        periodically. Pharmacy-specific prices may vary; always check GoodRx or the pharmacy's own
        pricing tool.
      </p>

      <h2>How Insurance Affects Ozempic Cost</h2>
      <p>
        If you have commercial health insurance and Ozempic is prescribed for <strong>Type 2
        diabetes</strong>, your insurer is likely to cover a significant portion of the cost. Tier
        placement on the formulary determines your copay—typically $25 to $100 per month for
        patients on mid-tier plans.
      </p>
      <p>
        Coverage becomes less consistent when Ozempic is prescribed off-label for weight loss.
        Wegovy (higher-dose semaglutide FDA-approved for obesity) is more likely to be covered by
        plans that include anti-obesity medication benefits. Medicare Part D covers Ozempic for
        diabetes only; the Medicare Modernization Act of 2003 originally prohibited coverage of
        weight-loss drugs, though legislation to change this is ongoing.
      </p>

      <h2>Novo Nordisk Savings Card</h2>
      <p>
        For commercially insured patients, the <strong>Ozempic Savings Card</strong> from Novo
        Nordisk can reduce your monthly copay to as low as <strong>$25</strong>. Eligibility
        requirements include:
      </p>
      <ul>
        <li>Commercial (private) insurance that covers Ozempic</li>
        <li>U.S. residency</li>
        <li>Not enrolled in Medicare, Medicaid, or other federal programs</li>
      </ul>
      <p>
        The card can be activated at the Ozempic savings portal on Novo Nordisk's website. It renews
        annually and may cap total savings (e.g., $1,800 per calendar year), so read terms carefully.
      </p>

      <h2>Ozempic Patient Assistance Program (PAP)</h2>
      <p>
        Uninsured or underinsured patients may qualify for Novo Nordisk's{" "}
        <strong>Patient Assistance Program</strong>, which provides Ozempic at no cost to eligible
        individuals. Qualification is income-based; the program generally considers those at or
        below 400% of the Federal Poverty Level. Applications are submitted through the Novo Nordisk
        Patient Assistance Program portal with a physician signature.
      </p>

      <h2>GoodRx and Discount Cards</h2>
      <p>
        Discount card services like GoodRx, RxSaver, and NeedyMeds can lower the sticker price at
        participating pharmacies. GoodRx prices for Ozempic typically range from{" "}
        <strong>$850 to $920</strong> depending on location and pharmacy chain. These savings are
        not as dramatic as insurance copays or the Novo Nordisk card, but they're helpful for
        bridge periods when insurance approval is pending.
      </p>

      <h2>Compounded Semaglutide: A Cheaper Alternative?</h2>
      <p>
        During FDA shortage designations, licensed 503B compounding pharmacies have been permitted
        to produce semaglutide formulations. Compounded semaglutide (often sold as semaglutide
        vials for subcutaneous injection) has ranged from <strong>$100 to $500 per month</strong>,
        far below brand-name Ozempic. However:
      </p>
      <ul>
        <li>Compounded drugs are not FDA-approved and may differ in quality or potency</li>
        <li>The FDA has ended certain shortage designations; availability may change</li>
        <li>Always obtain compounded medications from a licensed, accredited pharmacy</li>
        <li>Discuss risks and benefits thoroughly with your healthcare provider</li>
      </ul>

      <h2>Ozempic Cost Summary Table</h2>
      <table style={{ borderCollapse: "collapse", width: "100%", marginBottom: "1.5rem" }}>
        <thead>
          <tr style={{ background: "#f0f4ff" }}>
            <th style={{ border: "1px solid #ddd", padding: "0.5rem 0.75rem", textAlign: "left" }}>Scenario</th>
            <th style={{ border: "1px solid #ddd", padding: "0.5rem 0.75rem", textAlign: "left" }}>Estimated Monthly Cost</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Retail (no discounts)", "~$935–$1,000"],
            ["Commercial insurance (good coverage)", "$25–$100 copay"],
            ["Novo Nordisk Savings Card", "As low as $25"],
            ["GoodRx / discount card", "$850–$920"],
            ["Medicare Part D (diabetes)", "Varies; typically $40–$200"],
            ["Patient Assistance Program", "$0 (if eligible)"],
            ["Compounded semaglutide", "$100–$500"],
          ].map(([scenario, cost]) => (
            <tr key={scenario}>
              <td style={{ border: "1px solid #ddd", padding: "0.5rem 0.75rem" }}>{scenario}</td>
              <td style={{ border: "1px solid #ddd", padding: "0.5rem 0.75rem" }}>{cost}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Tips to Reduce Your Ozempic Cost</h2>
      <ol>
        <li>
          <strong>Check your formulary first.</strong> Call your insurance or log into your plan
          portal to see what tier Ozempic is on before filling.
        </li>
        <li>
          <strong>Apply for the Novo Nordisk Savings Card</strong> before your first fill.
        </li>
        <li>
          <strong>Ask about a 90-day supply.</strong> Some insurers and mail-order pharmacies offer
          a lower per-dose cost for larger supplies.
        </li>
        <li>
          <strong>Compare pharmacy prices.</strong> Mark Cuban's Cost Plus Drugs does not currently
          carry Ozempic, but retail pharmacy prices can differ by $50–$100.
        </li>
        <li>
          <strong>Explore Wegovy if losing weight is your goal.</strong> More insurance plans,
          including some employer plans, are beginning to cover Wegovy (higher-dose semaglutide
          approved specifically for obesity).
        </li>
      </ol>

      <h2>Frequently Asked Questions About Ozempic Cost</h2>
      {faqs.map((faq) => (
        <div key={faq.question} style={{ marginBottom: "1.25rem" }}>
          <h3 style={{ fontSize: "1.05rem", marginBottom: "0.35rem" }}>{faq.question}</h3>
          <p style={{ margin: 0 }}>{faq.answer}</p>
        </div>
      ))}

      <p style={{ marginTop: "2rem", fontSize: "0.85rem", color: "#666" }}>
        <em>
          This page is for informational purposes only and does not constitute medical or financial
          advice. Prices are approximate and subject to change. Consult your healthcare provider and
          insurance plan for personalized guidance.
        </em>
      </p>
    </SEOPageLayout>
  );
}
