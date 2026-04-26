import { SITE_URL, SITE_NAME } from "./seo-config";

export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleSchema({
  title,
  description,
  path,
  datePublished = "2024-01-15",
  dateModified = "2024-11-01",
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description,
    url: `${SITE_URL}${path}`,
    datePublished,
    dateModified,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "main",
    },
    about: {
      "@type": "Drug",
      name: "Semaglutide",
      alternateName: ["Ozempic", "Wegovy"],
      activeIngredient: "Semaglutide",
      administrationRoute: "Subcutaneous injection",
      prescriptionStatus: "PrescriptionOnly",
    },
    audience: {
      "@type": "MedicalAudience",
      audienceType: "Patient",
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "AI-powered information hub for Ozempic, Wegovy, Mounjaro, and GLP-1 medications.",
    sameAs: [],
  };
}
