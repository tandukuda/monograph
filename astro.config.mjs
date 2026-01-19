import { defineConfig } from "astro/config";

export default defineConfig({
  // Static site generation
  output: "static",
  build: {
    format: "directory",
  },
  // Minimal optimizations
  compressHTML: true,
});
