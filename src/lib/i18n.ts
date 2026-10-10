export type Lang = 'fr' | 'en';
export const langs: Lang[] = ['fr', 'en'];
export const defaultLang: Lang = 'fr';

export type RouteKey =
  | 'home' | 'projects' | 'about' | 'services' | 'contact' | 'blog' | 'legal' | 'privacy'
  | 'offer-build' | 'offer-automate' | 'offer-deliver' | 'biopharma';

export const routes: Record<RouteKey, Record<Lang, string>> = {
  home: { fr: '/', en: '/en/' },
  projects: { fr: '/projets/', en: '/en/projects/' },
  about: { fr: '/a-propos/', en: '/en/about/' },
  services: { fr: '/services/', en: '/en/services/' },
  contact: { fr: '/contact/', en: '/en/contact/' },
  blog: { fr: '/blog/', en: '/en/blog/' },
  legal: { fr: '/mentions-legales/', en: '/en/legal/' },
  privacy: { fr: '/confidentialite/', en: '/en/privacy/' },
  'offer-build': { fr: '/services/construire/', en: '/en/services/build/' },
  'offer-automate': { fr: '/services/automatiser/', en: '/en/services/automate/' },
  'offer-deliver': { fr: '/services/piloter/', en: '/en/services/deliver/' },
  biopharma: { fr: '/biopharma/', en: '/en/biopharma/' },
};

export function href(key: RouteKey, lang: Lang): string {
  return routes[key][lang];
}

export function projectHref(slug: string, lang: Lang): string {
  return `${routes.projects[lang]}${slug}/`;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'fr' ? 'en' : 'fr';
}

/** Equivalent URL in the other language, for the language switcher. */
export function alternate(key: RouteKey, lang: Lang, slug?: string): string {
  const other = otherLang(lang);
  return slug ? projectHref(slug, other) : href(key, other);
}

/** Clé de route d'une offre à partir de son slug (fr ou en). */
export const offerRoute: Record<string, RouteKey> = { construire: 'offer-build', build: 'offer-build', automatiser: 'offer-automate', automate: 'offer-automate', piloter: 'offer-deliver', deliver: 'offer-deliver' };

export const locale: Record<Lang, string> = { fr: 'fr-BE', en: 'en-GB' };
