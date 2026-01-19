import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    type: z.string(),
    year: z.string().or(z.number()),
    tags: z.array(z.string()).optional(),
    link: z.string().url().optional(),
    // 'description' is used for search indexing
    description: z.string().optional(),
  }),
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  projects,
  pages,
};
