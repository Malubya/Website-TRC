import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: ["/", "/blog", "/work/", "/legal/"], disallow: ["/login", "/_next/"] },
      { userAgent: "Googlebot", allow: "/", disallow: "/login" },
      { userAgent: "Bingbot", allow: "/", disallow: "/login" },
    ],
    sitemap: "https://trccontractors.org/sitemap.xml",
  };
}
