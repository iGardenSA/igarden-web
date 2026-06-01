import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://igarden.sa";
  const lastModified = new Date();

  return [
    { url: `${base}/`,                               lastModified, changeFrequency: "weekly",  priority: 1.0  },
    { url: `${base}/products/smart-controllers`,     lastModified, changeFrequency: "weekly",  priority: 0.95 },
    { url: `${base}/products/smart-greenhouses`,     lastModified, changeFrequency: "weekly",  priority: 0.9  },
    { url: `${base}/products/hydroponics`,           lastModified, changeFrequency: "weekly",  priority: 0.9  },
    { url: `${base}/products`,                       lastModified, changeFrequency: "weekly",  priority: 0.85 },
    { url: `${base}/osfan-station`,                  lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/about`,                          lastModified, changeFrequency: "monthly", priority: 0.7  },
    { url: `${base}/contact`,                        lastModified, changeFrequency: "monthly", priority: 0.7  },
    { url: `${base}/learn`,                          lastModified, changeFrequency: "weekly",  priority: 0.7  },
    { url: `${base}/learn/when-do-you-need-smart-controller`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/learn/why-hydroponic-fail-summer`,        lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/learn/hydroponic-vs-traditional`,         lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/learn/operational-logs-farm-decisions`,   lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/learn/daily-measurements-smart-farm`,     lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/how-we-work`,                    lastModified, changeFrequency: "monthly", priority: 0.6  },
    { url: `${base}/privacy`,                        lastModified, changeFrequency: "yearly",  priority: 0.3  },
    { url: `${base}/terms`,                          lastModified, changeFrequency: "yearly",  priority: 0.3  },
  ];
}
