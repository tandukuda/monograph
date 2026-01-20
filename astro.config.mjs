import { defineConfig } from "astro/config";

export default defineConfig({
  // Static site generation
  output: "static",
  build: {
    format: "directory",
  },
  // Image optimization
  image: {
    // Enable responsive images
    experimentalLayout: true,
  },
  // Minimal optimizations
  compressHTML: true,
  site: "https://monograph.vercel.app", // Update this with your domain
});
