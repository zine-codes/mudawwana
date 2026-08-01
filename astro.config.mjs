import { copyFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://placeholder.pages.dev',
  integrations: [
    sitemap(),
    {
      name: 'sitemap-copy',
      hooks: {
        'astro:build:done': () => {
          copyFileSync('dist/sitemap-index.xml', 'dist/sitemap.xml');
        },
      },
    },
  ],
});
