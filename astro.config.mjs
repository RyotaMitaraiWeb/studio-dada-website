// @ts-check
import {defineConfig} from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()]
  },

  devToolbar: {
      enabled: false,
  },
  site: 'https://studiodada-2ee96.web.app', // TO-DO: change address to custom domain if such is bought
  integrations: [sitemap()]
});