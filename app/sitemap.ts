import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ba3hacash.com";
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/jeddah`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/makkah`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/taif`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/scrap-car-brands`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/isqat-lohat`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // {
    //   url: `${baseUrl}/broken-engine-cars`,
    //   lastModified,
    //   changeFrequency: "weekly",
    //   priority: 0.85,
    // },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/sell-scrap-old-cars`,
      lastModified: new Date("2026-11-21"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/sell-broken-car-from-home`,
      lastModified: new Date("2026-11-24"),
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];
}
