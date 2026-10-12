import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const paths = ["", "/products/akuzzle", "/products/medicine-finder"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return paths.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
