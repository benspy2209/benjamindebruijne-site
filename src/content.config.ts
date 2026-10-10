import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Articles du blog : src/content/blog/<lang>/<slug>.md, même slug en FR et en EN. */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().min(50).max(160),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    lang: z.enum(['fr', 'en']),
    tags: z.array(z.string()).default([]),
    points: z.array(z.string().max(70)).length(3).optional(),
  }),
});

export const collections = { blog };
