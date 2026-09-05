# Commonplace — notes for Claude

A personal theology reference site (Astro, static, GitHub Pages). Read `README.md` first for the
layout and the content workflow. This file records the conventions that are not obvious from the code.

## Conventions

- **Entries are MDX** under `src/content/entries/<category>/<slug>.mdx`. The folder is the category
  and must match the `category` front-matter field (the build fails if they disagree). Copy
  `src/content/entries/_TEMPLATE.mdx` when starting a new one.
- **Perspective.** Summaries of competing views are even-handed and written so an adherent would
  recognise their position. The author's own position, when recorded, goes in a
  `<Callout variant="take">` box, never blended into the summary. The author's tradition is mixed and
  decided case by case; do not assume a position on a question the author has not stated.
- **Scripture** quotations default to the ESV. Greek and Hebrew go in `<span lang="grc">` /
  `<span lang="he">` with a transliteration on first use.
- **Sources** go in the `sources` front-matter array (label + optional url/note), not in prose.
- **Charts** are server-rendered SVG components in `src/components/charts/`. Put large chart data in
  `src/data/charts/<name>.ts` and import it. Charts use CSS variables so they follow the theme; do not
  hard-code colors. Wrap charts in `<Figure wide caption="…">`. Each chart's SVG sits inside
  `ChartScroller`, which handles sideways scrolling, the swipe hint, and the full-screen view on phones;
  new chart components should use it too.
- **Design.** Manuscript aesthetic: parchment/ink in light mode, candlelit dark mode. Tokens live in
  `src/styles/global.css`; category accents are `--vermilion`, `--lapis`, `--gold`, `--verdigris`,
  `--plum`, `--umber`, `--slate`. Use the tokens rather than new colors.
- **Links** must go through `url()` / `entryUrl()` / `categoryUrl()` from `src/lib/url.ts` so the
  `/Theology-Site` base path is applied.
- **Search** is a build-time JSON index (`src/pages/search-index.json.ts`) plus client-side scoring;
  no external service.
- **Markdown pipeline** is the `unified()` processor from `@astrojs/markdown-remark` (set in
  `astro.config.mjs`) so rehype plugins apply. Astro's default Sätteri processor does not run them.

## Checks before committing

```bash
npm run check   # astro check (types)
npm run build   # must succeed; content schema errors surface here
```
