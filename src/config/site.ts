export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  author: {
    name: string;
    email?: string;
    twitter?: string;
    github?: string;
  };
  nav: {
    label: string;
    href: string;
  }[];
  features: {
    search: boolean;
    darkMode: boolean;
    analytics?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Monograph",
  title: "Monograph",
  description:
    "A minimalist, editorial index-style portfolio built with Astro. Readable, durable, and resistant to trend decay.",
  url: import.meta.env.SITE || "https://monograph.vercel.app",
  ogImage: "/og-image.png",
  author: {
    name: "tandukuda",
    email: "", // Add your email
    twitter: "@yourusername", // Add your Twitter handle
    github: "tandukuda", // Add your GitHub username
  },
  nav: [
    { label: "index", href: "/" },
    { label: "about", href: "/about" },
    { label: "others", href: "/links" },
  ],
  features: {
    search: true,
    darkMode: true,
    analytics: "", // Add Google Analytics ID if needed
  },
};

// Helper functions
export const getPageTitle = (title?: string): string => {
  return title ? `${title} — ${siteConfig.title}` : siteConfig.title;
};

export const getCanonicalURL = (path: string = ""): string => {
  return new URL(path, siteConfig.url).href;
};

export const getOGImageURL = (path: string = siteConfig.ogImage): string => {
  return new URL(path, siteConfig.url).href;
};
