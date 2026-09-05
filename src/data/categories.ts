/**
 * The directory. Each category is a shelf in the commonplace book.
 * Add a category here and create a matching folder under `src/content/entries/`.
 * The glossary is special: it is data-driven (see `src/data/glossary.ts`), not a folder of entries.
 */
export const CATEGORY_SLUGS = [
  'timelines',
  'views-and-positions',
  'charts-and-diagrams',
  'word-studies',
  'books-and-sermons',
  'notes',
] as const;

export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

export type Accent = 'vermilion' | 'lapis' | 'gold' | 'verdigris' | 'plum' | 'umber' | 'slate';

export interface Category {
  slug: CategorySlug | 'glossary';
  name: string;
  /** Short line shown on the directory card. */
  tagline: string;
  /** Longer description shown at the top of the category page. */
  description: string;
  /** Illuminated initial shown on cards. */
  initial: string;
  accent: Accent;
  /** Glossary is rendered from data rather than from a folder of entries. */
  kind: 'entries' | 'glossary';
}

export const CATEGORIES: Category[] = [
  {
    slug: 'timelines',
    name: 'Timelines',
    tagline: 'Sequences of events laid out visually.',
    description:
      'End-times schemes, the life of Christ, the kings of Israel and Judah, church history. Anything best understood as a sequence, drawn so the order is obvious at a glance.',
    initial: 'T',
    accent: 'vermilion',
    kind: 'entries',
  },
  {
    slug: 'views-and-positions',
    name: 'Views & Positions',
    tagline: 'Competing views set side by side.',
    description:
      'Where faithful Christians disagree, the options are laid out fairly: what each view claims, the texts it leans on, who holds it, and where it is strongest and weakest.',
    initial: 'V',
    accent: 'lapis',
    kind: 'entries',
  },
  {
    slug: 'charts-and-diagrams',
    name: 'Charts & Diagrams',
    tagline: 'Structures, outlines, and visual summaries.',
    description:
      'Book outlines, structural diagrams, comparison grids, and other single-picture summaries that compress a lot of reading into one look.',
    initial: 'C',
    accent: 'gold',
    kind: 'entries',
  },
  {
    slug: 'word-studies',
    name: 'Word Studies',
    tagline: 'Hebrew and Greek terms traced through Scripture.',
    description:
      'Key words in the original languages: their range of meaning, where they occur, how they are translated, and why the difference matters.',
    initial: 'W',
    accent: 'verdigris',
    kind: 'entries',
  },
  {
    slug: 'books-and-sermons',
    name: 'Books & Sermons',
    tagline: 'Summaries and takeaways from things read and heard.',
    description:
      'Notes on books, sermons, lectures, and articles. The argument in brief, the best lines, and what was worth keeping.',
    initial: 'B',
    accent: 'plum',
    kind: 'entries',
  },
  {
    slug: 'notes',
    name: 'Notes',
    tagline: 'Study notes, outlines, and working thoughts.',
    description:
      'Passage outlines, study notes, and half-formed ideas that are not yet a chart or a position paper but are worth keeping.',
    initial: 'N',
    accent: 'umber',
    kind: 'entries',
  },
  {
    slug: 'glossary',
    name: 'Glossary',
    tagline: 'Quick definitions of theological terms.',
    description:
      'Short, plain definitions of the vocabulary that shows up across the rest of the book, with links to the entries that go deeper.',
    initial: 'G',
    accent: 'slate',
    kind: 'glossary',
  },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
