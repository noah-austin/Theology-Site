import { getCollection, type CollectionEntry } from 'astro:content';
import { CATEGORY_SLUGS, type CategorySlug, getCategory } from '@data/categories';

export type Entry = CollectionEntry<'entries'>;

/** Split `timelines/rapture-views` into its parts. */
export function parseId(id: string): { category: CategorySlug; slug: string } {
  const [category, ...rest] = id.split('/');
  if (!CATEGORY_SLUGS.includes(category as CategorySlug) || rest.length === 0) {
    throw new Error(
      `Entry "${id}" is not inside a category folder. Move it under src/content/entries/<category>/.`,
    );
  }
  return { category: category as CategorySlug, slug: rest.join('/') };
}

export function lastUpdated(entry: Entry): Date {
  return entry.data.updated ?? entry.data.date;
}

/** All published entries, validated against their folder, newest first. */
export async function getPublishedEntries(): Promise<Entry[]> {
  const all = await getCollection('entries');
  for (const entry of all) {
    const { category } = parseId(entry.id);
    if (entry.data.category !== category) {
      throw new Error(
        `Entry "${entry.id}" says category "${entry.data.category}" but lives in the "${category}" folder. Make them match.`,
      );
    }
  }
  return all
    .filter((e) => !e.data.draft || import.meta.env.DEV)
    .sort((a, b) => lastUpdated(b).getTime() - lastUpdated(a).getTime());
}

/** Entries in a category, manual `order` first, then newest first. */
export async function getEntriesInCategory(category: CategorySlug): Promise<Entry[]> {
  const entries = (await getPublishedEntries()).filter((e) => e.data.category === category);
  return entries.sort((a, b) => {
    const ao = a.data.order ?? Number.POSITIVE_INFINITY;
    const bo = b.data.order ?? Number.POSITIVE_INFINITY;
    if (ao !== bo) return ao - bo;
    return lastUpdated(b).getTime() - lastUpdated(a).getTime();
  });
}

export async function countByCategory(): Promise<Record<string, number>> {
  const counts: Record<string, number> = {};
  for (const e of await getPublishedEntries()) {
    counts[e.data.category] = (counts[e.data.category] ?? 0) + 1;
  }
  return counts;
}

export function categoryName(slug: string): string {
  return getCategory(slug)?.name ?? slug;
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function formatMonth(d: Date): string {
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
}
