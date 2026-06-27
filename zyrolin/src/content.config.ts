import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES } from './data/categories';

const categorySlugs = CATEGORIES.map((c) => c.slug) as [string, ...string[]];

// All tutorials/guides live as Markdown files under src/content/articles/<category>/.
// The folder name is informational; the `category` frontmatter field is the
// source of truth so an article can be validated against the known categories.
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.enum(categorySlugs),
      // Article format — drives the template (steps, list, comparison...).
      type: z
        .enum(['tutorial', 'guide', 'list', 'comparison', 'fix'])
        .default('tutorial'),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Zyrolin Team'),
      // Optional cover image (relative to the markdown file).
      cover: image().optional(),
      coverAlt: z.string().optional(),
      // Editorial flags.
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      // Rough read-time helper (minutes). If omitted we estimate from content.
      readingTime: z.number().optional(),
      // For affiliate/SEO: tags help internal linking.
      tags: z.array(z.string()).default([]),

      // ── Optional visual blocks (attention-grabbing, render automatically) ──
      // A short "key takeaways" / TL;DR list shown near the top.
      keyTakeaways: z.array(z.string()).optional(),
      // A row of big highlighted numbers (e.g. "12% saving", "3 steps").
      stats: z
        .array(z.object({ value: z.string(), label: z.string() }))
        .optional(),
      // A simple bar chart rendered from data.
      chart: z
        .object({
          title: z.string().optional(),
          unit: z.string().default(''),
          data: z.array(z.object({ label: z.string(), value: z.number() })),
        })
        .optional(),
    }),
});

export const collections = { articles };
