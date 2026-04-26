import type { Metadata } from "next";
import { pageSEO, SITE_URL } from "@/lib/seo-config";
import {
  generateFAQSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import SEOPageLayout from "@/components/SEOPageLayout";

const seo = pageSEO["ozempic-vs-wegovy"];

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
    question: "What is the difference between Ozempic and Wegovy?",
    answer:
      "Both Ozempic and Wegovy contain semaglutide, the same active ingredient. The key differences are FDA-approved indication (Ozempic for Type 2 diabetes; Wegovy for chronic weight management), maximum dose (Ozempic tops out at 2 mg weekly; Wegovy reaches 2.4 mg weekly), and insurance coverage patterns.",
  },
  {
    question: "Can I use Ozempic instead of Wegovy for weight loss?",
    answer:
      "Some physicians prescribe Ozempic off-label for weight loss, particularly when Wegovy is unavailable or unaffordable. Clinical data for semaglutide weight loss comes largely from the STEP trials, which used Wegovy doses. Discuss the risks and benefits with your doctor before substituting.",
  },
  {
    question: "Which causes more weight loss: Ozempic or Wegovy?",
    answer:
      "Wegovy is generally associated with greater weight loss because it is titrated to a higher maintenance dose (2.4 mg vs. 2 mg). In the STEP-1 trial, participants on 2.4 mg semaglutide lost an average of ~15% of body weight over 68 weeks.",
  },
  {
    question: "Is Ozempic or Wegovy covered by insurance?",
    answer:
      "Ozempic is more widely covered for Type 2 diabetes. Wegovy coverage has expanded on commercial plans that include anti-obesity benefits, but Medicare traditionally excluded weight-loss drugs (though this is changing legislatively). Always check your specific plan's formulary.",
  },
  {
    question: "Are the side effects of Ozempic and Wegovy the same?",
    answer:
      "Yes, side effect profiles are very similar because both drugs contain semaglutide. The most common are nausea, vomiting, diarrhea, and constipation. Higher Wegovy doses may produce more pronounced gastrointestinal side effects, particularly during titration.",
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
    { name: "Ozempic vs Wegovy", path: seo.canonicalPath },
  ]),
];

export default function OzempicVsWegovyPage() {
  return (
    <SEOPageLayout schemas={schemas}>
      <h1>Ozempic vs Wegovy: What's the Difference?</h1>

      <p>
        If you've researched GLP-1 medications, you've almost certainly
        encountered both <strong>Ozempic</strong> and <strong>Wegovy</strong>
        —and understandably wondered why two drugs with the exact same active
        ingredient carry different brand names and very different price tags.
        The short answer: FDA approval, dosage, and intended use differ
        meaningfully. Here's a complete side-by-side comparison.
      </p>

      <h2>The Core Similarity: Both Are Semaglutide</h2>
      <p>
        Ozempic and Wegovy are both manufactured by Novo Nordisk and both
        deliver <strong>semaglutide</strong>, a glucagon-like peptide-1 (GLP-1)
        receptor agonist. Semaglutide mimics the hormone GLP-1, which is
        released after eating. It stimulates insulin secretion, suppresses
        glucagon, slows gastric emptying, and—critically—signals satiety to the
        brain. These mechanisms lower blood sugar in diabetics and reduce
        appetite in everyone who takes it.
      </p>

      <h2>FDA Approval: The Key Distinction</h2>
      <ul>
        <li>
          <strong>Ozempic</strong> — Approved in December 2017 for{" "}
          <em>Type 2 diabetes management</em>. Also has cardiovascular risk
          reduction approval (SUSTAIN-6 data).
        </li>
        <li>
          <strong>Wegovy</strong> — Approved in June 2021 for{" "}
          <em>chronic weight management</em> in adults with BMI ≥30, or ≥27 with
          at least one weight-related comorbidity. Also approved (2024) for
          reducing cardiovascular events in obese/overweight adults.
        </li>
      </ul>
      <p>
        This approval distinction matters enormously for insurance coverage.
        Insurers often require an on-label indication, meaning Ozempic is
        covered for diabetes and Wegovy is covered (where anti-obesity benefits
        exist) for weight management.
      </p>

      <h2>Dosage Comparison</h2>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          marginBottom: "1.5rem",
        }}
      >
        <thead>
          <tr style={{ background: "#f0f4ff" }}>
            <th style={{ border: "1px solid #ddd", padding: "0.5rem 0.75rem" }}>
              Feature
            </th>
            <th style={{ border: "1px solid #ddd", padding: "0.5rem 0.75rem" }}>
              Ozempic
            </th>
            <th style={{ border: "1px solid #ddd", padding: "0.5rem 0.75rem" }}>
              Wegovy
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Active ingredient", "Semaglutide", "Semaglutide"],
            [
              "Approved indication",
              "Type 2 diabetes",
              "Chronic weight management",
            ],
            ["Starting dose", "0.25 mg/week", "0.25 mg/week"],
            ["Maximum dose", "2 mg/week", "2.4 mg/week"],
            ["Titration period", "~16 weeks to 1 mg", "~16 weeks to 2.4 mg"],
            [
              "Administration",
              "Once-weekly injection",
              "Once-weekly injection",
            ],
            ["Pen device", "Single-dose pen", "Single-dose pen"],
            ["Retail price/month", "~$935", "~$1,350"],
          ].map(([feature, ozempic, wegovy]) => (
            <tr key={feature}>
              <td
                style={{ border: "1px solid #ddd", padding: "0.5rem 0.75rem" }}
              >
                <strong>{feature}</strong>
              </td>
              <td
                style={{ border: "1px solid #ddd", padding: "0.5rem 0.75rem" }}
              >
                {ozempic}
              </td>
              <td
                style={{ border: "1px solid #ddd", padding: "0.5rem 0.75rem" }}
              >
                {wegovy}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Weight Loss Results</h2>
      <p>
        The landmark STEP-1 trial demonstrated that 68 weeks of 2.4 mg
        semaglutide (Wegovy dose) produced an average body weight reduction of{" "}
        <strong>14.9%</strong> versus 2.4% for placebo. Real-world Ozempic
        off-label weight loss data shows modest results at lower doses, with
        most patients losing 5–10% of body weight at the 1–2 mg maintenance
        doses.
      </p>
      <p>
        The higher 2.4 mg Wegovy dose appears to drive meaningfully greater
        weight loss than the maximum 2 mg Ozempic dose, though the difference
        between 2 mg and 2.4 mg is smaller than the difference between lower
        doses and higher ones.
      </p>

      <h2>Side Effects: Are They Different?</h2>
      <p>
        Because both drugs are semaglutide, the side effect profiles are nearly
        identical. Expect:
      </p>
      <ul>
        <li>Nausea (most common, especially during dose escalation)</li>
        <li>Vomiting and diarrhea</li>
        <li>Constipation</li>
        <li>Abdominal pain</li>
        <li>Headache</li>
        <li>Fatigue</li>
      </ul>
      <p>
        Rare but serious risks—pancreatitis, gallbladder disease, thyroid C-cell
        tumors (in rodents; human risk unclear), and diabetic retinopathy
        worsening—apply to both. Wegovy's higher target dose may intensify GI
        side effects for some patients during titration.
      </p>

      <h2>Which Should You Choose?</h2>
      <p>
        <strong>Choose Ozempic if:</strong> You have Type 2 diabetes, your
        insurance covers it for diabetes, and weight loss is a secondary benefit
        you'd welcome.
      </p>
      <p>
        <strong>Choose Wegovy if:</strong> Weight loss is your primary goal, you
        have a BMI ≥30 (or ≥27 with comorbidities), and your insurance covers
        anti-obesity medications.
      </p>
      <p>
        Always make this decision in partnership with your physician, who can
        review your full medical history and insurance situation.
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
          This page is for informational purposes only. Consult a licensed
          healthcare provider before starting or changing any medication. Drug
          prices and FDA approvals are subject to change.
        </em>
      </p>
    </SEOPageLayout>
  );
}
