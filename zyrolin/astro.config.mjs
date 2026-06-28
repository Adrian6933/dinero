// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://zyrolin.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'de', 'fr'],
    routing: {
      prefixDefaultLocale: false, // English at root, others under /es, /de, /fr
    },
  },
  integrations: [react(), sitemap()],

  // Honor the PORT env var (lets the preview tool pick a free port; falls back
  // to Astro's default 4321 when unset).
  server: { port: Number(process.env.PORT) || 4321 },

  vite: {
    plugins: [tailwindcss()]
  }
});
