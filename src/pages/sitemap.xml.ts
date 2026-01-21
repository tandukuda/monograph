import { getCollection } from "astro:content";
import { siteConfig } from "../config/site";

export async function GET() {
  const projects = await getCollection("projects");

  // Static pages
  const staticPages = [
    { url: "", changefreq: "weekly", priority: "1.0" },
    { url: "about", changefreq: "monthly", priority: "0.8" },
    { url: "links", changefreq: "monthly", priority: "0.5" },
  ];

  // Dynamic project pages
  const projectPages = projects.map((project) => ({
    url: `project/${project.slug}`,
    changefreq: "monthly",
    priority: "0.7",
  }));

  const allPages = [...staticPages, ...projectPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${siteConfig.url}/${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
