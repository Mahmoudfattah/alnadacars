import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/*.woff2$"],
    },
    sitemap: "https://ba3hacash.com/sitemap.xml", // في موقع بيعها كاش خليه
  };
}
