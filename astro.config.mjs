import { defineConfig } from "astro/config";

export default defineConfig({
  // Static site generation
  output: "static",
  build: {
    format: "directory",
  },
  // Image optimization
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  // Minimal optimizations
  compressHTML: true,
  site: "https://monograph.vercel.app", // Update this with your domain
});
