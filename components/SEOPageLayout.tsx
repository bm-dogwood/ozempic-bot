import React from "react";

interface SEOPageLayoutProps {
  children: React.ReactNode;
  schemas: object[];
}

/**
 * Wraps SEO content pages with hidden visual styling
 * (these pages are content-rich but not in main nav).
 * Schema scripts are injected here automatically.
 */
export default function SEOPageLayout({ children, schemas }: SEOPageLayoutProps) {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <main
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "2rem 1.25rem",
          fontFamily: "Georgia, 'Times New Roman', serif",
          lineHeight: "1.75",
          color: "#1a1a2e",
          fontSize: "1.05rem",
        }}
      >
        {children}
      </main>
    </>
  );
}
