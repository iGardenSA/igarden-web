import { defineField, defineType } from "sanity";

/**
 * Page — مخطط الصفحات العامة (الرئيسية، من نحن، الحلول... إلخ)
 * يستخدم نظام أقسام مرنة (Sections) للسماح بإعادة ترتيب المحتوى.
 */
export const pageSchema = defineType({
  name: "page",
  title: "صفحة",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "العنوان",
      type: "string",
      validation: (r) => r.required().max(80),
    }),
    defineField({
      name: "slug",
      title: "المسار",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "language",
      title: "اللغة",
      type: "string",
      options: {
        list: [
          { title: "العربية", value: "ar" },
          { title: "English", value: "en" },
        ],
        layout: "radio",
      },
      initialValue: "ar",
    }),
    defineField({
      name: "seo",
      title: "إعدادات SEO",
      type: "object",
      fields: [
        { name: "metaTitle", type: "string", title: "Meta Title" },
        { name: "metaDescription", type: "text", title: "Meta Description", rows: 3 },
        { name: "ogImage", type: "image", title: "صورة المشاركة" },
      ],
    }),
    defineField({
      name: "sections",
      title: "أقسام الصفحة",
      type: "array",
      of: [
        { type: "heroSection" },
        { type: "statsSection" },
        { type: "featureGrid" },
        { type: "ctaSection" },
        { type: "richTextSection" },
      ],
    }),
  ],
  preview: {
    select: { title: "title", slug: "slug.current", lang: "language" },
    prepare({ title, slug, lang }) {
      return { title, subtitle: `[${lang}] /${slug}` };
    },
  },
});
