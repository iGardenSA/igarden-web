import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "iGarden — الحديقة الذكية",
    short_name: "iGarden",
    description:
      "حلول الزراعة الذكية للمزارع التجارية والصناعية في المملكة العربية السعودية",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#FAFAF7",
    theme_color: "#0F3D2E",
    lang: "ar",
    dir: "rtl",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/favicons/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicons/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicons/maskable-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicons/maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
