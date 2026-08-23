import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://igarden.sa";

  // lastModified لكل مسار = آخر تعديل فعليّ للملفّ في git، لا new Date() عام.
  return [
    { url: `${base}/`,                                            lastModified: "2026-08-23", changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/products/smart-controllers`,                  lastModified: "2026-08-23", changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/products/smart-greenhouses`,                  lastModified: "2026-08-23", changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/products/hydroponics`,                        lastModified: "2026-08-23", changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/products`,                                    lastModified: "2026-08-23", changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/osfan-station`,                               lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/about`,                                       lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`,                                     lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/learn`,                                       lastModified: "2026-06-02", changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/learn/when-do-you-need-smart-controller`,     lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/learn/why-hydroponic-fail-summer`,            lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/learn/hydroponic-vs-traditional`,             lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/learn/operational-logs-farm-decisions`,       lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/learn/daily-measurements-smart-farm`,         lastModified: "2026-05-10", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/how-we-work`,                                 lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/products/smart-os`,                           lastModified: "2026-08-23", changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/products/iot`,                                lastModified: "2026-08-23", changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/compliance`,                                  lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/fact-sheet`,                                  lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/data-charter`,                                lastModified: "2026-05-12", changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/compliance-disclaimer`,                       lastModified: "2026-05-12", changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/privacy`,                                     lastModified: "2026-06-02", changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`,                                       lastModified: "2026-05-12", changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/home-solutions`,                              lastModified: "2026-06-02", changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/app`,                                         lastModified: "2026-05-10", changeFrequency: "monthly", priority: 0.5 },
  ];
}
