// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://benjamindebruijne.com',
  trailingSlash: 'always',
  integrations: [sitemap({ i18n: { defaultLocale: 'fr', locales: { fr: 'fr-BE', en: 'en-GB' } } })],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
