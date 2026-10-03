// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://benjamindebruijne.be',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
