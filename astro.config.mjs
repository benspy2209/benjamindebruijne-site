// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://benjamindebruijne.be',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !/\/blog\/$/.test(page), i18n: { defaultLocale: 'fr', locales: { fr: 'fr-BE', en: 'en-GB' } } })],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
