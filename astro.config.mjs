// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import rehypeTableWrap from './src/lib/rehype-table-wrap.mjs';

// Served from GitHub Pages at https://noah-austin.github.io/Theology-Site/
// `base` makes every internal link and asset resolve under that sub-path.
export default defineConfig({
  site: 'https://noah-austin.github.io',
  base: '/Theology-Site',
  trailingSlash: 'always',
  integrations: [mdx()],
  markdown: {
    // The unified (remark/rehype) pipeline, so custom plugins apply to .md and .mdx alike.
    processor: unified({
      rehypePlugins: [rehypeTableWrap],
    }),
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
