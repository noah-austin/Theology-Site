export const SITE = {
  name: 'Commonplace',
  tagline: 'A commonplace book of theology',
  description:
    'A personal theology reference: timelines, charts, word studies, and notes, kept in one place for quick lookup.',
  author: 'Noah Austin',
  repo: 'https://github.com/noah-austin/Theology-Site',
  /** Path inside the repo where entries live; used for "edit this page" links. */
  contentPath: 'src/content/entries',
  /** Default branch the "edit" links point at. */
  branch: 'main',
} as const;
