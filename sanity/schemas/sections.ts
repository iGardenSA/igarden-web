import { defineField, defineType } from "sanity";

export const heroSectionSchema = defineType({
  name: "heroSection",
  title: "قسم Hero",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", type: "string", title: "نص فوق العنوان" }),
    defineField({ name: "headline", type: "string", title: "العنوان الرئيسي", validation: (r) => r.required() }),
    defineField({ name: "subheadline", type: "text", title: "النص الفرعي", rows: 3 }),
    defineField({
      name: "primaryCta",
      type: "object",
      title: "زر CTA الأساسي",
      fields: [
        { name: "label", type: "string", title: "النص" },
        { name: "href", type: "string", title: "الرابط" },
      ],
    }),
    defineField({
      name: "secondaryCta",
      type: "object",
      title: "زر CTA الثانوي",
      fields: [
        { name: "label", type: "string", title: "النص" },
        { name: "href", type: "string", title: "الرابط" },
      ],
    }),
    defineField({ name: "backgroundImage", type: "image", title: "صورة الخلفية" }),
  ],
});

export const statsSectionSchema = defineType({
  name: "statsSection",
  title: "قسم الإحصائيات",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", title: "العنوان" }),
    defineField({
      name: "stats",
      title: "الإحصائيات",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", type: "string", title: "القيمة (مثل 95)" },
            { name: "unit", type: "string", title: "الوحدة (مثل %)" },
            { name: "label", type: "string", title: "الوصف" },
          ],
        },
      ],
      validation: (r) => r.min(2).max(6),
    }),
  ],
});

export const featureGridSchema = defineType({
  name: "featureGrid",
  title: "شبكة المزايا",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", type: "string", title: "نص فوق العنوان" }),
    defineField({ name: "title", type: "string", title: "العنوان" }),
    defineField({ name: "description", type: "text", title: "الوصف", rows: 3 }),
    defineField({
      name: "features",
      title: "المزايا",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "category",
              type: "string",
              title: "الفئة",
              options: {
                list: [
                  { title: "Hardware", value: "hardware" },
                  { title: "Software", value: "software" },
                  { title: "Knowledge", value: "knowledge" },
                ],
              },
            },
            { name: "icon", type: "string", title: "اسم الأيقونة (Lucide)" },
            { name: "title", type: "string", title: "العنوان" },
            { name: "description", type: "text", title: "الوصف", rows: 3 },
          ],
        },
      ],
    }),
  ],
});

export const ctaSectionSchema = defineType({
  name: "ctaSection",
  title: "قسم CTA",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", title: "العنوان" }),
    defineField({ name: "description", type: "text", title: "الوصف", rows: 2 }),
    defineField({
      name: "primaryCta",
      type: "object",
      fields: [
        { name: "label", type: "string", title: "النص" },
        { name: "href", type: "string", title: "الرابط" },
      ],
    }),
  ],
});

export const richTextSectionSchema = defineType({
  name: "richTextSection",
  title: "قسم نصي مرن",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", title: "العنوان" }),
    defineField({
      name: "content",
      type: "array",
      title: "المحتوى",
      of: [{ type: "block" }, { type: "image" }],
    }),
  ],
});
