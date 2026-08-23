/* Schema.org JSON-LD components — Brief §8.4
   All components are Server-safe (no "use client" needed).
   Usage: import and render as <OrganizationSchema /> etc. inside page JSX.
*/

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "iGarden",
    alternateName: ["انتيليجنت غاردن", "شركة انتيليجنت غاردن"],
    legalName: "شركة انتيليجنت غاردن (ذات مسؤولية محدودة)",
    url: "https://igarden.sa",
    logo: "https://igarden.sa/logo/icon-master-original.png",
    image: "https://igarden.sa/images/og/home.png",
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
      "https://linkedin.com/company/igarden-sa",
      "https://instagram.com/igarden.sa",
      "https://x.com/igarden_sa",
      "https://youtube.com/@igarden",
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
    name: "iGarden",
    url: "https://igarden.sa",
    inLanguage: "ar-SA",
    publisher: { "@type": "Organization", name: "iGarden" },
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
    manufacturer: {
      "@type": "Organization",
      name: "شركة انتيليجنت غاردن",
      url: "https://igarden.sa",
    },
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
    provider: {
      "@type": "Organization",
      name: "iGarden",
      url: "https://igarden.sa",
    },
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
