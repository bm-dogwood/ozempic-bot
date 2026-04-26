import type { Metadata } from "next";
import { pageSEO, SITE_URL } from "@/lib/seo-config";
import {
  generateFAQSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import SEOPageLayout from "@/components/SEOPageLayout";

const seo = pageSEO["ozempic-side-effects"];

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
    question: "What are the most common Ozempic side effects?",
    answer:
      "The most common Ozempic side effects are gastrointestinal: nausea (reported in up to 44% of trial participants), vomiting, diarrhea, and constipation. These are most pronounced during the first weeks of treatment and during dose escalation, then typically improve as the body adapts.",
  },
  {
    question: "Does Ozempic cause hair loss?",
    answer:
      "Hair loss (alopecia or telogen effluvium) has been reported by some Ozempic users, particularly those who experience significant rapid weight loss. It is not listed as a common clinical trial side effect, but rapid caloric restriction can trigger temporary hair thinning. Most cases resolve over time.",
  },
  {
    question: "What is 'Ozempic face'?",
    answer:
      "'Ozempic face' is a colloquial term for facial volume loss (fat loss in the cheeks and around the eyes) that can occur with rapid, significant weight loss on GLP-1 medications. It is not a drug-specific effect—it results from losing fat throughout the body, including the face. Dermatological interventions like fillers may be considered if desired.",
  },
  {
    question: "Can Ozempic cause pancreatitis?",
    answer:
      "Acute pancreatitis is a rare but serious risk associated with GLP-1 receptor agonists including Ozempic. Symptoms include severe, persistent abdominal pain radiating to the back. Seek emergency care immediately if these occur. Ozempic is generally discontinued if pancreatitis is confirmed.",
  },
  {
    question: "How long do Ozempic side effects last?",
    answer:
      "Most gastrointestinal side effects peak during the first 4–8 weeks and during each dose increase, then diminish as the body adjusts. For most patients, nausea is manageable or resolves by the 12-week mark. Serious side effects require medical evaluation regardless of duration.",
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
    { name: "Ozempic Side Effects", path: seo.canonicalPath },
  ]),
];

export default function OzempicSideEffectsPage() {
  return (
    <SEOPageLayout schemas={schemas}>
      <h1>Ozempic Side Effects: Complete Guide</h1>

      <p>
        Ozempic (semaglutide) is highly effective for managing Type 2 diabetes
        and—off-label—for weight loss. Like all medications, it comes with a
        side effect profile that every patient should understand before starting
        treatment. This guide covers common and serious Ozempic side effects,
        how to manage them, and when to contact your doctor.
      </p>

      <h2>Common Side Effects</h2>
      <p>
        The vast majority of Ozempic side effects are gastrointestinal and are
        most intense during the early weeks of treatment and after each dose
        escalation.
      </p>

      <h3>Nausea</h3>
      <p>
        Nausea is the most frequently reported side effect, affecting up to 44%
        of participants in clinical trials. It tends to be dose-dependent—higher
        doses produce more nausea. Strategies to manage it include eating
        smaller, more frequent meals; avoiding high-fat or spicy foods;
        injecting at bedtime (so peak nausea occurs during sleep); and staying
        well hydrated.
      </p>

      <h3>Vomiting and Diarrhea</h3>
      <p>
        Vomiting occurs in roughly 24% and diarrhea in approximately 30% of
        clinical trial participants. Both typically improve over time. Staying
        hydrated is critical; if vomiting or diarrhea is severe or persistent
        (more than 24–48 hours), contact your healthcare provider, as
        dehydration is a concern.
      </p>

      <h3>Constipation</h3>
      <p>
        Ozempic slows gastric emptying (a feature that contributes to both blood
        sugar control and satiety), which can cause constipation in some
        patients. Increasing fiber intake, staying hydrated, and light exercise
        can help. Over-the-counter options like MiraLax may be appropriate—ask
        your physician.
      </p>

      <h3>Abdominal Pain and Bloating</h3>
      <p>
        Mild to moderate abdominal discomfort and bloating are common,
        particularly early in treatment. Eating slowly and in smaller quantities
        helps many patients manage this symptom.
      </p>

      <h3>Headache and Fatigue</h3>
      <p>
        Some patients report headache and fatigue, especially at the start of
        treatment or following a dose increase. These are generally mild and
        transient.
      </p>

      <h2>Serious Side Effects</h2>
      <p>
        While uncommon, the following serious adverse events require prompt
        medical attention:
      </p>

      <h3>Pancreatitis</h3>
      <p>
        GLP-1 receptor agonists carry a class-wide warning for acute
        pancreatitis. Symptoms include severe, persistent abdominal pain that
        may radiate to the back, with or without vomiting. Stop Ozempic and seek
        emergency care if you experience these symptoms.
      </p>

      <h3>Diabetic Retinopathy Complications</h3>
      <p>
        In patients with Type 2 diabetes and pre-existing retinopathy, rapid
        improvement in blood sugar control (as achieved with semaglutide) can
        paradoxically worsen retinopathy in the short term. Report any changes
        in vision to your ophthalmologist promptly.
      </p>

      <h3>Gallbladder Disease</h3>
      <p>
        GLP-1 drugs, particularly at higher doses and with rapid weight loss,
        are associated with increased rates of cholelithiasis (gallstones) and
        cholecystitis. Symptoms include upper right abdominal pain, especially
        after fatty meals, fever, and jaundice. Seek medical evaluation if these
        occur.
      </p>

      <h3>Thyroid C-Cell Tumors (Animal Warning)</h3>
      <p>
        Semaglutide caused thyroid C-cell tumors in rodent studies. The
        relevance to humans is unknown, but Ozempic carries a black-box warning
        and is contraindicated in patients with a personal or family history of
        medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia
        syndrome type 2 (MEN 2).
      </p>

      <h3>Hypoglycemia</h3>
      <p>
        Ozempic alone rarely causes hypoglycemia because it only stimulates
        insulin secretion in response to glucose. However, when combined with
        insulin or sulfonylureas, the risk of low blood sugar increases
        significantly. Monitor blood glucose as directed by your provider.
      </p>

      <h3>Acute Kidney Injury</h3>
      <p>
        Severe vomiting and diarrhea can lead to dehydration, which may
        precipitate acute kidney injury, particularly in patients with
        pre-existing kidney disease. Stay hydrated and contact your doctor if GI
        symptoms are severe.
      </p>

      <h2>Widely Discussed Effects: Ozempic Face and Hair Loss</h2>

      <h3>"Ozempic Face"</h3>
      <p>
        Rapid, significant weight loss—whether from Ozempic or any cause—can
        reduce fat volume in the face, particularly in the cheeks, temples, and
        around the eyes. This creates a gaunt or aged appearance described
        colloquially as "Ozempic face." It is not a drug-specific effect; it
        reflects the body's pattern of fat loss. For patients concerned about
        this, plastic surgeons and dermatologists can discuss options such as
        dermal fillers.
      </p>

      <h3>Hair Loss (Telogen Effluvium)</h3>
      <p>
        Significant caloric restriction and rapid weight loss can trigger
        telogen effluvium—a temporary increase in hair shedding—typically 2–4
        months after the stressor begins. This condition is self-limiting and
        resolves as weight stabilizes. Ensuring adequate protein intake
        (≥1.2g/kg body weight) may reduce severity.
      </p>

      <h2>Managing Side Effects: Tips at a Glance</h2>
      <ul>
        <li>Start with the lowest dose (0.25 mg/week) and titrate slowly</li>
        <li>
          Eat small, bland meals; avoid greasy, spicy, or very sweet foods
        </li>
        <li>Inject Ozempic at bedtime to sleep through peak nausea</li>
        <li>Drink plenty of water throughout the day</li>
        <li>Avoid lying down immediately after eating</li>
        <li>
          Take over-the-counter antiemetics (e.g., Dramamine) after consulting
          your doctor
        </li>
        <li>
          Report persistent or worsening symptoms to your healthcare provider
          promptly
        </li>
      </ul>

      <h2>When to Call Your Doctor</h2>
      <p>Contact your healthcare provider immediately if you experience:</p>
      <ul>
        <li>Severe or persistent abdominal pain</li>
        <li>Signs of pancreatitis (pain radiating to the back, fever)</li>
        <li>
          Symptoms of gallbladder disease (right upper quadrant pain, jaundice)
        </li>
        <li>Vision changes</li>
        <li>
          Symptoms of a thyroid tumor (neck lump, difficulty swallowing,
          persistent hoarseness)
        </li>
        <li>Severe hypoglycemia (if on insulin or sulfonylureas)</li>
        <li>
          Signs of allergic reaction (rash, swelling, difficulty breathing)
        </li>
      </ul>

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
          This content is for educational purposes and does not replace
          professional medical advice. Always consult your prescribing physician
          regarding side effects or medication concerns.
        </em>
      </p>
    </SEOPageLayout>
  );
}
