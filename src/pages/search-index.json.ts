import type { APIRoute } from 'astro';
import { GLOSSARY } from '@data/glossary';
import { categoryName, getPublishedEntries, lastUpdated } from '@lib/entries';
import { entryUrl, slugifyTag, url } from '@lib/url';

/** Reduce MDX source to searchable plain text. */
function plain(body: string | undefined): string {
  if (!body) return '';
  return body
    .replace(/^import\s.+$/gm, '')
    .replace(/^export\s+const\s+\w+\s*=\s*[\[{][\s\S]*?^[\]}];?\s*$/gm, '')
    .replace(/^export\s.+$/gm, '')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/[#>*_`|\[\]()]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 4000);
}

export const GET: APIRoute = async () => {
  const entries = await getPublishedEntries();
  const items = [
    ...entries.map((e) => ({
      type: 'entry',
      title: e.data.title,
      description: e.data.description,
      category: categoryName(e.data.category),
      tags: e.data.tags,
      url: entryUrl(e.id),
      updated: lastUpdated(e).toISOString().slice(0, 10),
      body: plain(e.body),
    })),
    ...GLOSSARY.map((t) => ({
      type: 'term',
      title: t.term,
      description: t.definition,
      category: 'Glossary',
      tags: [] as string[],
      url: url(`/glossary/#term-${slugifyTag(t.term)}`),
      updated: '',
      body: '',
    })),
  ];
  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
