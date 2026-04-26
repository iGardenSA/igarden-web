/* Schema.org JSON-LD components — Brief §8.4
   All components are Server-safe (no "use client" needed).
   Usage: import and render as <OrganizationSchema /> etc. inside page JSX.
*/

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "iGarden",
    alternateName: ["الحديقة الذكية", "شركة انتيليجنت غاردن"],
    legalName: "شركة انتيليجنت غاردن (ذات مسؤولية محدودة)",
    url: "https://igarden.sa",
    logo: "https://igarden.sa/logo/icon-master-original.png",
    image: "https://igarden.sa/images/og/home.jpg",
    description:
      "شركة سعودية لتطوير المزارع وأنظمة التحكم الزراعي الذكي. نَبني · نُوطّن · نُطوّر.",
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
      // [CONTENT_NEEDED: روابط السوشيال ميديا — LinkedIn, X, Instagram, YouTube]
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
    name: "iGarden — محطّة عسفان للتجارب والتطوير",
    description: "المختبر الميداني لـ iGarden في عسفان شمال جدة.",
    url: "https://igarden.sa/osfan-station",
    image: "https://igarden.sa/images/og/osfan-station.jpg",
    telephone: "+966-57-034-0500",
    email: "info@igarden.sa",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
      addressRegion: "مكة المكرمة",
      addressLocality: "عسفان",
    },
    // [CONTENT_NEEDED: إحداثيات GPS الدقيقة لمحطّة عسفان]
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
