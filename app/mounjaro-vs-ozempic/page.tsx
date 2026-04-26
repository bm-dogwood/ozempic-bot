import type { Metadata } from "next";
import { pageSEO, SITE_URL } from "@/lib/seo-config";
import {
  generateFAQSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import SEOPageLayout from "@/components/SEOPageLayout";

const seo = pageSEO["mounjaro-vs-ozempic"];

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
    question: "Which is more effective for weight loss: Mounjaro or Ozempic?",
    answer:
      "Clinical trial data suggests Mounjaro (tirzepatide) produces greater average weight loss than Ozempic (semaglutide). In the SURMOUNT-1 trial, tirzepatide 15 mg produced an average body weight reduction of approximately 20.9% over 72 weeks. Ozempic's semaglutide at comparable doses produces 10–15% weight loss. However, individual responses vary significantly.",
  },
  {
    question: "What is the difference between Mounjaro and Ozempic?",
    answer:
      "The key difference is the mechanism of action. Ozempic contains semaglutide, a GLP-1 receptor agonist. Mounjaro contains tirzepatide, a dual GIP (glucose-dependent insulinotropic polypeptide) and GLP-1 receptor agonist. The dual mechanism of tirzepatide may explain its superior weight loss outcomes in clinical trials.",
  },
  {
    question: "Are the side effects of Mounjaro and Ozempic the same?",
    answer:
      "Side effect profiles are similar since both activate GLP-1 pathways. Nausea, vomiting, diarrhea, and constipation are common to both. Mounjaro may cause slightly more nausea at higher doses in some patients. Both carry warnings for pancreatitis, gallbladder disease, and thyroid tumors (based on rodent studies).",
  },
  {
    question: "How much does Mounjaro cost compared to Ozempic?",
    answer:
      "Mounjaro's retail price is approximately $1,023–$1,070 per month, slightly higher than Ozempic's ~$935. Eli Lilly offers the Mounjaro Savings Card for eligible commercially insured patients. Zepbound (the obesity-approved tirzepatide brand) has its own savings program. Neither is inexpensive without assistance.",
  },
  {
    question: "Is Mounjaro or Ozempic better for Type 2 diabetes?",
    answer:
      "Both are effective for Type 2 diabetes. The SURPASS-2 trial compared tirzepatide (Mounjaro) directly to semaglutide (Ozempic) and found that tirzepatide produced greater A1C reductions at all doses. Mounjaro achieved A1C reductions of 2.01–2.30% versus 1.86% for semaglutide 1 mg. However, individual patient factors, insurance coverage, and tolerability all matter.",
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
    { name: "Mounjaro vs Ozempic", path: seo.canonicalPath },
  ]),
];

export default function MounjaroVsOzempicPage() {
  return (
    <SEOPageLayout schemas={schemas}>
      <h1>Mounjaro vs Ozempic: Which GLP-1 Drug Is Right for You?</h1>

      <p>
        Two medications dominate the GLP-1 conversation in 2024:{" "}
        <strong>Ozempic</strong> (semaglutide, by Novo Nordisk) and{" "}
        <strong>Mounjaro</strong> (tirzepatide, by Eli Lilly). Both are
        injectable weekly drugs that control blood sugar and cause significant
        weight loss, but they work differently and produce different outcomes.
        Here's a thorough comparison to help you and your doctor make an
        informed choice.
      </p>

      <h2>Mechanism of Action: The Core Difference</h2>
      <p>
        <strong>Ozempic</strong> is a <em>GLP-1 receptor agonist</em>. It mimics
        the glucagon-like peptide-1 hormone, stimulating insulin secretion,
        suppressing glucagon, slowing gastric emptying, and signaling satiety to
        the brain.
      </p>
      <p>
        <strong>Mounjaro</strong> is a{" "}
        <em>dual GIP and GLP-1 receptor agonist</em>—the first of its class. In
        addition to GLP-1 activity, it activates GIP (glucose-dependent
        insulinotropic polypeptide) receptors. GIP normally stimulates insulin
        release in response to food and may also affect fat tissue directly.
        This dual action is believed to explain Mounjaro's superior weight loss
        results in trials.
      </p>

      <h2>Clinical Trial Comparison</h2>

      <h3>Weight Loss</h3>
      <p>
        The SURMOUNT-1 trial (Mounjaro for obesity) and the STEP-1 trial
        (semaglutide/Wegovy for obesity) used different populations and
        timeframes but offer a useful comparison:
      </p>
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
              Drug
            </th>
            <th style={{ border: "1px solid #ddd", padding: "0.5rem 0.75rem" }}>
              Trial
            </th>
            <th style={{ border: "1px solid #ddd", padding: "0.5rem 0.75rem" }}>
              Max Dose
            </th>
            <th style={{ border: "1px solid #ddd", padding: "0.5rem 0.75rem" }}>
              Avg Weight Loss
            </th>
            <th style={{ border: "1px solid #ddd", padding: "0.5rem 0.75rem" }}>
              Duration
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            [
              "Tirzepatide (Mounjaro)",
              "SURMOUNT-1",
              "15 mg/week",
              "~20.9% body weight",
              "72 weeks",
            ],
            [
              "Semaglutide (Wegovy/Ozempic)",
              "STEP-1",
              "2.4 mg/week",
              "~14.9% body weight",
              "68 weeks",
            ],
          ].map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                <td
                  key={i}
                  style={{
                    border: "1px solid #ddd",
                    padding: "0.5rem 0.75rem",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        In the head-to-head SURPASS-2 trial (both drugs at FDA-approved diabetes
        doses), tirzepatide produced greater A1C reductions and more weight loss
        than semaglutide 1 mg at all doses tested.
      </p>

      <h3>Blood Sugar Control</h3>
      <p>
        Both drugs are highly effective for Type 2 diabetes. SURPASS-2 data
        showed tirzepatide 5 mg, 10 mg, and 15 mg each outperformed semaglutide
        1 mg on A1C reduction:
      </p>
      <ul>
        <li>Tirzepatide 5 mg: −2.01% A1C</li>
        <li>Tirzepatide 10 mg: −2.24% A1C</li>
        <li>Tirzepatide 15 mg: −2.30% A1C</li>
        <li>Semaglutide 1 mg: −1.86% A1C</li>
      </ul>
      <p>
        All differences were statistically significant. Mounjaro achieved A1C
        targets (&lt;7%) in more patients than semaglutide in this trial.
      </p>

      <h2>FDA Approvals</h2>
      <ul>
        <li>
          <strong>Mounjaro</strong> — Approved May 2022 for Type 2 diabetes. Its
          obesity version,
          <strong> Zepbound</strong> (same tirzepatide, higher dose ceiling),
          was approved November 2023 for chronic weight management.
        </li>
        <li>
          <strong>Ozempic</strong> — Approved December 2017 for Type 2 diabetes
          + cardiovascular risk reduction. Wegovy (higher-dose semaglutide)
          approved June 2021 for obesity + CV risk.
        </li>
      </ul>

      <h2>Side Effects Comparison</h2>
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
              Side Effect
            </th>
            <th style={{ border: "1px solid #ddd", padding: "0.5rem 0.75rem" }}>
              Mounjaro
            </th>
            <th style={{ border: "1px solid #ddd", padding: "0.5rem 0.75rem" }}>
              Ozempic
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            ["Nausea", "Common (17–22%)", "Common (up to 44%)"],
            ["Vomiting", "Common (6–9%)", "Common (~24%)"],
            ["Diarrhea", "Common (12–17%)", "Common (~30%)"],
            ["Constipation", "Common (6–11%)", "Common (~11%)"],
            ["Pancreatitis", "Rare (class warning)", "Rare (class warning)"],
            ["Thyroid tumors", "Animal data warning", "Animal data warning"],
            ["Hypoglycemia (solo)", "Rare", "Rare"],
            ["Injection site reactions", "Mild, common", "Mild, common"],
          ].map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                <td
                  key={i}
                  style={{
                    border: "1px solid #ddd",
                    padding: "0.5rem 0.75rem",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Cost Comparison</h2>
      <p>Both drugs are expensive without insurance:</p>
      <ul>
        <li>
          <strong>Ozempic:</strong> ~$935/month retail
        </li>
        <li>
          <strong>Mounjaro:</strong> ~$1,023–$1,070/month retail
        </li>
        <li>
          <strong>Wegovy:</strong> ~$1,350/month retail
        </li>
        <li>
          <strong>Zepbound:</strong> ~$1,059/month retail
        </li>
      </ul>
      <p>
        Both Novo Nordisk and Eli Lilly offer savings cards for commercially
        insured patients. Eli Lilly's Mounjaro Savings Card can reduce copays to
        as low as $25/month for eligible patients.
      </p>

      <h2>Which Should You Choose?</h2>
      <p>
        There is no universal winner—the right choice depends on your clinical
        situation, insurance, and tolerance:
      </p>
      <ul>
        <li>
          <strong>Choose Mounjaro/Zepbound if:</strong> Maximum weight loss is
          the priority, your insurance covers it, and you're interested in the
          latest mechanism (dual GIP/GLP-1).
        </li>
        <li>
          <strong>Choose Ozempic/Wegovy if:</strong> You have diabetes with
          existing Ozempic coverage, a longer track record matters to you, or
          Mounjaro is unavailable or unaffordable.
        </li>
      </ul>
      <p>
        Both drugs are highly effective. The best medication is the one you can
        access, afford, and tolerate—your physician is best positioned to guide
        that decision.
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
          This page is for informational purposes only and is not a substitute
          for professional medical advice. Drug efficacy, pricing, and approval
          status are subject to change. Always consult your healthcare provider.
        </em>
      </p>
    </SEOPageLayout>
  );
}
