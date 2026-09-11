import type { MetadataRoute } from "next";
import { getJournalPosts } from "@/lib/journal";

const BASE_URL = "https://trccontractors.org";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getJournalPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/legal/terms`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/legal/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/legal/cookies`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/legal/accessibility`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/legal/security`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.publishedAt || undefined,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...postRoutes];
}
