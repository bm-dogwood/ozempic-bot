import type { Metadata } from "next";
import { pageSEO, SITE_URL } from "@/lib/seo-config";
import { generateFAQSchema, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import SEOPageLayout from "@/components/SEOPageLayout";

const seo = pageSEO["ozempic-without-insurance"];

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
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description },
};

const faqs = [
  {
    question: "How much does Ozempic cost without insurance?",
    answer:
      "The retail price of Ozempic without insurance is approximately $935–$1,000 per month for a four-pen carton. This represents the Wholesale Acquisition Cost (WAC) and may vary slightly by pharmacy.",
  },
  {
    question: "Is there a way to get Ozempic for free without insurance?",
    answer:
      "Novo Nordisk's Patient Assistance Program (PAP) provides Ozempic at no cost to eligible uninsured patients who meet income requirements (typically at or below 400% of the Federal Poverty Level). Apply through Novo Nordisk's NovoCare program with a physician's signature.",
  },
  {
    question: "Can I use GoodRx for Ozempic without insurance?",
    answer:
      "Yes. GoodRx coupons can reduce the out-of-pocket price of Ozempic, typically to $850–$920 at participating pharmacies. While not a dramatic savings versus retail, it does lower the price without requiring insurance. Compare prices across local pharmacies using GoodRx before purchasing.",
  },
  {
    question: "Is compounded semaglutide cheaper than Ozempic?",
    answer:
      "Yes, compounded semaglutide from licensed 503B pharmacies has been available for $100–$500/month when FDA shortage designations allow it. Always verify the compounding pharmacy's licensure and confirm the current regulatory status with your physician before proceeding.",
  },
  {
    question: "Does Walmart or Costco carry cheaper Ozempic?",
    answer:
      "Ozempic is not available at Walmart's $4 generic program. Costco pharmacy pricing may be slightly lower than major chain pharmacies—call your local Costco pharmacy to compare. Costco pharmacies are open to non-members for prescription purchases.",
  },
];

const schemas = [
  generateFAQSchema(faqs),
  generateArticleSchema({ title: seo.title, description: seo.description, path: seo.canonicalPath }),
  generateBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Ozempic Without Insurance", path: seo.canonicalPath },
  ]),
];

export default function OzempicWithoutInsurancePage() {
  return (
    <SEOPageLayout schemas={schemas}>
      <h1>How to Get Ozempic Without Insurance in 2024</h1>

      <p>
        At roughly <strong>$935 per month</strong>, Ozempic is one of the most expensive common
        prescriptions in America. Without insurance, that price is daunting—but there are legitimate
        strategies to dramatically reduce or even eliminate your out-of-pocket cost. This guide
        covers every option available in 2024.
      </p>

      <h2>What Ozempic Costs Without Insurance</h2>
      <p>
        The Wholesale Acquisition Cost (WAC) for Ozempic is approximately $935 per four-pen carton,
        which is a one-month supply (one weekly injection). This price applies regardless of dose
        strength (0.5 mg, 1 mg, or 2 mg pens all carry the same retail price). Actual pharmacy
        prices may vary by $30–$70.
      </p>

      <h2>Option 1: Novo Nordisk Patient Assistance Program (PAP)</h2>
      <p>
        The <strong>NovoCare Patient Assistance Program</strong> is Novo Nordisk's charity care
        program for uninsured patients. Eligible individuals receive Ozempic at <strong>no cost</strong>.
      </p>
      <p>Eligibility generally requires:</p>
      <ul>
        <li>U.S. residency</li>
        <li>Household income at or below 400% of the Federal Poverty Level</li>
        <li>No current insurance coverage for Ozempic</li>
        <li>A valid prescription from a licensed U.S. physician</li>
      </ul>
      <p>
        To apply, visit the NovoCare website or have your doctor's office complete the application.
        Medication is shipped directly to the patient or provider. The program is renewed annually.
      </p>

      <h2>Option 2: Novo Nordisk Savings Card (Insured Patients Only)</h2>
      <p>
        The <strong>Ozempic Savings Card</strong> reduces copays to as low as $25/month for
        commercially insured patients. Note: this card <strong>cannot</strong> be used without
        insurance, and it cannot be combined with Medicare or Medicaid.
      </p>

      <h2>Option 3: GoodRx and Prescription Discount Cards</h2>
      <p>
        Discount card programs negotiate pre-negotiated rates with pharmacies, providing savings
        without insurance:
      </p>
      <ul>
        <li>
          <strong>GoodRx:</strong> Typically $850–$920 for Ozempic, depending on pharmacy and
          location. Free to use; just show the coupon at the pharmacy counter.
        </li>
        <li>
          <strong>RxSaver:</strong> Similar pricing to GoodRx; worth comparing.
        </li>
        <li>
          <strong>NeedyMeds:</strong> Lists discount card options and also helps identify patient
          assistance programs.
        </li>
        <li>
          <strong>Blink Health / SingleCare:</strong> Alternative discount programs that may have
          lower prices at specific pharmacies.
        </li>
      </ul>
      <p>
        <strong>Tip:</strong> Never assume one card has the best price. Check GoodRx, RxSaver, and
        SingleCare simultaneously for your zip code before filling.
      </p>

      <h2>Option 4: Compounded Semaglutide</h2>
      <p>
        During FDA shortage designations, licensed 503B compounding pharmacies have offered
        compounded semaglutide at significantly lower prices, often <strong>$150–$400/month</strong>.
        Compounded drugs are not FDA-approved products; they may differ from brand-name Ozempic in
        inactive ingredients, concentration, or quality.
      </p>
      <p>
        As the FDA updates shortage designations, the legality of compounding specific doses can
        change rapidly. Before pursuing this option:
      </p>
      <ol>
        <li>Confirm the current FDA shortage status</li>
        <li>Verify the pharmacy holds a valid 503A or 503B license</li>
        <li>Discuss with your physician</li>
        <li>Avoid products marketed as "semaglutide salt" (sodium or acetate)—the FDA has issued warnings about these</li>
      </ol>

      <h2>Option 5: Telehealth + Membership Programs</h2>
      <p>
        Telehealth companies like Ro Body, Hims & Hers, Found, and others have created bundled
        programs that include a physician consultation, prescription, and sometimes compounded
        semaglutide in a monthly membership fee. Prices vary widely ($150–$399/month) and coverage
        depends on what's included. Read contracts carefully—some programs lock you into auto-ship
        arrangements.
      </p>

      <h2>Option 6: Mexican and Canadian Pharmacies</h2>
      <p>
        Ozempic is significantly cheaper in Canada and Mexico (often $200–$400/month for the
        equivalent supply). Importing prescription drugs for personal use exists in a legal gray
        area in the U.S.—the FDA generally does not prioritize enforcement against individuals
        importing small quantities for personal use, but it is technically not FDA-approved for
        importation. Consult a legal or medical professional before pursuing this route.
      </p>

      <h2>Option 7: Check Costco and Sam's Club Pharmacies</h2>
      <p>
        Warehouse club pharmacies occasionally have lower prices than major chain pharmacies.
        Costco pharmacy is accessible to non-members for prescription purchases in most states.
        Call your local Costco or Sam's Club pharmacy to compare pricing before filling elsewhere.
      </p>

      <h2>Option 8: Ask About Rybelsus (Oral Semaglutide)</h2>
      <p>
        Rybelsus is an oral tablet containing semaglutide, approved for Type 2 diabetes. Its retail
        price is similar to Ozempic (~$935/month), but it may have different discount card
        availability. Some patients find oral semaglutide prices through discount programs more
        favorable than injectable Ozempic at specific pharmacies.
      </p>

      <h2>Cost-Reduction Summary</h2>
      <table style={{ borderCollapse: "collapse", width: "100%", marginBottom: "1.5rem" }}>
        <thead>
          <tr style={{ background: "#f0f4ff" }}>
            <th style={{ border: "1px solid #ddd", padding: "0.5rem 0.75rem" }}>Option</th>
            <th style={{ border: "1px solid #ddd", padding: "0.5rem 0.75rem" }}>Estimated Cost/Month</th>
            <th style={{ border: "1px solid #ddd", padding: "0.5rem 0.75rem" }}>Best For</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Retail (no discounts)", "~$935–$1,000", "Baseline comparison only"],
            ["GoodRx / discount card", "~$850–$920", "Quick savings, no paperwork"],
            ["NovoCare PAP", "$0", "Low-income uninsured patients"],
            ["Compounded semaglutide (503B)", "~$150–$400", "When FDA shortage active"],
            ["Telehealth membership", "~$150–$399", "All-in-one convenience"],
            ["Canadian/Mexican pharmacy", "~$200–$400", "Adventurous, gray-area option"],
          ].map(([option, cost, bestFor]) => (
            <tr key={option}>
              <td style={{ border: "1px solid #ddd", padding: "0.5rem 0.75rem" }}>{option}</td>
              <td style={{ border: "1px solid #ddd", padding: "0.5rem 0.75rem" }}>{cost}</td>
              <td style={{ border: "1px solid #ddd", padding: "0.5rem 0.75rem" }}>{bestFor}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq) => (
        <div key={faq.question} style={{ marginBottom: "1.25rem" }}>
          <h3 style={{ fontSize: "1.05rem", marginBottom: "0.35rem" }}>{faq.question}</h3>
          <p style={{ margin: 0 }}>{faq.answer}</p>
        </div>
      ))}

      <p style={{ marginTop: "2rem", fontSize: "0.85rem", color: "#666" }}>
        <em>
          This page is for informational purposes only. Drug prices, program eligibility, and
          regulatory status change frequently. Consult your healthcare provider and verify current
          program terms before making decisions.
        </em>
      </p>
    </SEOPageLayout>
  );
}
