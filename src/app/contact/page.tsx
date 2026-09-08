import type { Metadata } from "next";
import { ContactPageContent } from "./ContactForm";

/**
 * مكوّن خادم — وظيفته الوحيدة حمل metadata وcanonical.
 * كان محتوى الصفحة كلّه `"use client"` فتعذّر `export const metadata`، فورثت
 * الصفحة canonical الجذر (`layout.tsx`) وأعلنت لمحرّكات البحث أنّها الرئيسية.
 * ⛔ صفر تغيير في المحتوى أو الترميز — المحتوى كما هو في ./ContactForm.tsx
 */

const OG_TITLE = "%D8%AA%D9%88%D8%A7%D8%B5%D9%84+%D9%85%D8%B9%D9%86%D8%A7";
const OG_SUB =
  "%D8%A7%D8%B7%D9%84%D8%A8+%D8%AA%D9%82%D9%8A%D9%8A%D9%85%D8%A7%D9%8B+%D8%A3%D9%88%D9%91%D9%84%D9%8A%D8%A7%D9%8B+%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%83";

const DESCRIPTION =
  "اطلب تقييماً أوّلياً لمشروعك الزراعي — مشروع جديد أو منشأة قائمة. نراجع احتياجك ونعود إليك بالخطوة الأولى المناسبة. لا يتضمّن التقييم الأوّلي تسعيراً أو تصميماً هندسياً نهائياً.";

export const metadata: Metadata = {
  title: "تواصل معنا — اطلب تقييماً أوّلياً لمشروعك",
  description: DESCRIPTION,
  alternates: { canonical: "https://igarden.sa/contact" },
  openGraph: {
    title: "تواصل معنا — اطلب تقييماً أوّلياً لمشروعك | iGarden",
    description: DESCRIPTION,
    url: "https://igarden.sa/contact",
    images: [
      { url: `/api/og?title=${OG_TITLE}&sub=${OG_SUB}`, width: 1200, height: 630 },
    ],
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "تواصل معنا | iGarden",
    description:
      "اطلب تقييماً أوّلياً لمشروعك الزراعي — مشروع جديد أو منشأة قائمة.",
    images: [`/api/og?title=${OG_TITLE}&sub=${OG_SUB}`],
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
