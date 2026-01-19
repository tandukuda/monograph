import { defineConfig } from "astro/config";

export default defineConfig({
  // Static site generation
  output: "static",
  build: {
    format: "file",
  },
  // Minimal optimizations
  compressHTML: true,
});
