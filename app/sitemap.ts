import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const seoPages = [
    "/ozempic-cost",
    "/ozempic-vs-wegovy",
    "/ozempic-side-effects",
    "/ozempic-shortage",
    "/ozempic-without-insurance",
    "/mounjaro-vs-ozempic",
  ];

  const staticPages = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
  ];

  const seoPageEntries = seoPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...seoPageEntries];
}
