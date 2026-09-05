import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORY_SLUGS } from './data/categories';

/**
 * Every reference entry lives in `src/content/entries/<category>/<slug>.mdx`.
 * The folder name is the category; the file name becomes the URL slug.
 * Files starting with an underscore (e.g. `_TEMPLATE.mdx`) are ignored.
 */
const entries = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/entries' }),
  schema: z.object({
    title: z.string(),
    /** One or two sentences shown on cards, in search, and as the page lede. */
    description: z.string(),
    /** Must match the folder the file lives in. */
    category: z.enum(CATEGORY_SLUGS),
    tags: z.array(z.string()).default([]),
    /** When the entry was first written. */
    date: z.coerce.date(),
    /** Set when meaningfully revised; defaults to `date`. */
    updated: z.coerce.date().optional(),
    /** Featured entries get a larger card on the home page. */
    featured: z.boolean().default(false),
    /** Drafts are built locally but hidden from every listing and from search. */
    draft: z.boolean().default(false),
    /** Lower numbers sort first within a category; entries without one sort by date. */
    order: z.number().optional(),
    /** Works cited, rendered as a list at the bottom of the entry. */
    sources: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url().optional(),
          note: z.string().optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { entries };
