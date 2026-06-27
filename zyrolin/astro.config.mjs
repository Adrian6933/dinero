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

  vite: {
    plugins: [tailwindcss()]
  }
});
