import { z, defineCollection } from "astro:content";

const pageCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroComponent: z.any(),
    aboutComponent: z.any(),
    careersComponent: z.any(),
    impactComponent: z.any(),
    blogComponent: z.any(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  page: pageCollection,
};
