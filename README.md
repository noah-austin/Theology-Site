# Commonplace

A personal theology reference site: timelines, charts, word studies, and notes, filed under a
handful of categories for quick lookup. Built with [Astro](https://astro.build) and served from
GitHub Pages at **https://noah-austin.github.io/Theology-Site/**.

## Running locally

```bash
npm install
npm run dev        # http://localhost:4321/Theology-Site/
npm run build      # static output in dist/
npm run preview    # serve dist/ locally
npm run check      # type-check .astro and .ts files
```

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/`
to GitHub Pages. One-time setup in the repository settings:

1. **Settings → Pages → Build and deployment → Source:** choose **GitHub Actions**.
2. Push to `main` (or run the workflow manually from the Actions tab).

If the site ever moves to a custom domain, change `site` and `base` in `astro.config.mjs`.

## Adding an entry

Every entry is one `.mdx` file in a category folder:

```
src/content/entries/
  timelines/
  views-and-positions/
  charts-and-diagrams/
  word-studies/
  books-and-sermons/
  notes/
  _TEMPLATE.mdx      ← copy this
```

The folder is the category and the file name is the URL slug, so
`src/content/entries/notes/olivet-discourse-outline.mdx` becomes `/notes/olivet-discourse-outline/`.
Front matter is validated at build time (see `src/content.config.ts`); the required fields are
`title`, `description`, `category` (must match the folder), and `date`.

Inside an entry you can use plain Markdown plus these components:

| Component | Import | Use |
| --- | --- | --- |
| `Callout` | `@components/Callout.astro` | Boxed aside. `variant` = `note`, `take` (my take), `scripture`, `caution`. |
| `Scripture` | `@components/Scripture.astro` | Quoted passage with reference. |
| `Figure` | `@components/Figure.astro` | Caption wrapper; `wide` lets a chart use the full column. |
| `EventTimeline` | `@components/charts/EventTimeline.astro` | Views compared on one shared axis (see the rapture entry). |
| `SequenceChart` | `@components/charts/SequenceChart.astro` | Rows that each carve up time their own way (see the millennium chart). |
| `ChapterStrip` | `@components/charts/ChapterStrip.astro` | Numbered chapter boxes grouped into sections (see Structure of Revelation). |

Chart data for larger charts lives in `src/data/charts/` and is imported into the entry.

## Other places content lives

- **Glossary:** `src/data/glossary.ts`, one object per term. Rendered at `/glossary/`.
- **Categories:** `src/data/categories.ts`. Add a category there and create its folder.
- **Site name, author, repo:** `src/data/site.ts`.

## Layout of the code

```
src/
  components/     header, footer, cards, callouts, charts
  content/        the entries (Markdown/MDX)
  data/           categories, glossary, site metadata, chart data
  layouts/        BaseLayout (head, theme script, fonts)
  lib/            content helpers, URL helpers, rehype plugin
  pages/          routes: home, [category], [category]/[slug], glossary, search, tags, about, 404
  styles/         global.css with the design tokens (light and dark)
```
