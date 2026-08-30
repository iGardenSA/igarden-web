/* Schema.org JSON-LD components — Brief §8.4
   All components are Server-safe (no "use client" needed).
   Usage: import and render as <OrganizationSchema /> etc. inside page JSX.
*/

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://igarden.sa/#organization",
    name: "iGarden",
    alternateName: ["انتيليجنت غاردن", "شركة انتيليجنت غاردن"],
    legalName: "شركة انتيليجنت غاردن (ذات مسؤولية محدودة)",
    url: "https://igarden.sa",
    logo: "https://igarden.sa/logo/icon-master-original.png",
    image: "https://igarden.sa/api/og?title=iGarden+%E2%80%94+%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D9%82%D8%A9+%D8%A7%D9%84%D8%B0%D9%83%D9%8A%D8%A9&sub=%D8%A7%D8%B2%D8%B1%D8%B9+%D8%A8%D8%B0%D9%83%D8%A7%D8%A1",
    description:
      "شركة سعودية لتطوير المزارع وأنظمة التحكم الزراعي الذكي. ازرع بذكاء.",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
      addressRegion: "مكة المكرمة",
      addressLocality: "جدة",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+966-57-034-0500",
      contactType: "customer service",
      email: "info@igarden.sa",
      availableLanguage: ["Arabic", "English"],
    },
    sameAs: [
      "https://linkedin.com/company/igardensa",
      "https://instagram.com/igardensa",
      "https://x.com/igardensa",
      "https://youtube.com/@igardensa",
    ],
    identifier: [
      { "@type": "PropertyValue", propertyID: "MISA", value: "24926249716" },
      { "@type": "PropertyValue", propertyID: "SAIP", value: "423450193" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://igarden.sa/#website",
    name: "iGarden",
    url: "https://igarden.sa",
    inLanguage: "ar-SA",
    publisher: { "@id": "https://igarden.sa/#organization" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://igarden.sa/#localbusiness",
    name: "iGarden — مرفق R&D في عسفان للتجارب والتطوير",
    description: "المختبر الميداني لـ iGarden في عسفان شمال جدة.",
    url: "https://igarden.sa/osfan-station",
    image: "https://igarden.sa/images/osfan-full/04_greenhouse_wide.webp",
    telephone: "+966-57-034-0500",
    email: "info@igarden.sa",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
      addressRegion: "مكة المكرمة",
      addressLocality: "عسفان",
    },
    // [CONTENT_NEEDED: إحداثيات GPS الدقيقة لمرفق R&D في عسفان]
    // geo: { "@type": "GeoCoordinates", latitude: ..., longitude: ... },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  url: string;
  category: string;
}

export function ProductSchema({
  name,
  description,
  image,
  url,
  category,
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: `https://igarden.sa${image}`,
    url: `https://igarden.sa${url}`,
    category,
    brand: { "@type": "Brand", name: "iGarden" },
    // إشارة إلى المنظّمة المركزية في RootLayout — لا بطاقة Organization ثانية.
    manufacturer: { "@id": "https://igarden.sa/#organization" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  faqs: { question: string; answer: string }[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}

export function ServiceSchema({ name, description, url, serviceType = "Agricultural Technology Service" }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `https://igarden.sa${url}`,
    serviceType,
    // إشارة إلى المنظّمة المركزية في RootLayout — لا بطاقة Organization ثانية.
    provider: { "@id": "https://igarden.sa/#organization" },
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    inLanguage: "ar-SA",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://igarden.sa${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Article ──────────────────────────────────────────────
   لمقالات /learn. التواريخ حقائق لا تُخمَّن:
   · datePublished من src/app/learn/_data/articles.ts حرفياً
   · dateModified من آخر commit فعليّ لملف المقال
   author وpublisher كلاهما المنظّمة — يشير إلى @id المركزي في RootLayout
   فلا تتكرّر بطاقة Organization. */
export function ArticleSchema({
  headline,
  description,
  slug,
  datePublished,
  dateModified,
  image,
}: {
  headline: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}) {
  const url = `https://igarden.sa/learn/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    inLanguage: "ar-SA",
    datePublished,
    dateModified,
    author: { "@id": "https://igarden.sa/#organization" },
    publisher: { "@id": "https://igarden.sa/#organization" },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    ...(image ? { image: `https://igarden.sa${image}` } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
