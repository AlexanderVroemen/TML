import type { MetadataRoute } from "next";
import { news, services } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.tm-limburg.nl";
  const pages = ["", "/over-tml", "/onze-diensten", "/verenigingen", "/actueel", "/werken-bij-tml", "/contact", "/nieuwsbrief", "/tenniskamp-2026", "/privacyverklaring", "/disclaimer"];
  return [
    ...pages.map(url => ({ url: `${base}${url}`, changeFrequency: url === "" ? "weekly" as const : "monthly" as const, priority: url === "" ? 1 : .7 })),
    ...services.map(service => ({ url: `${base}/diensten/${service.slug}`, changeFrequency: "monthly" as const, priority: .8 })),
    ...news.map(item => ({ url: `${base}/actueel/${item.slug}`, changeFrequency: "yearly" as const, priority: .6 })),
  ];
}
