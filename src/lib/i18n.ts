export type Lang = 'fr' | 'en';
export const langs: Lang[] = ['fr', 'en'];
export const defaultLang: Lang = 'fr';

export type RouteKey =
  | 'home' | 'projects' | 'about' | 'services' | 'contact' | 'blog' | 'legal' | 'privacy';

export const routes: Record<RouteKey, Record<Lang, string>> = {
  home: { fr: '/', en: '/en/' },
  projects: { fr: '/projets/', en: '/en/projects/' },
  about: { fr: '/a-propos/', en: '/en/about/' },
  services: { fr: '/services/', en: '/en/services/' },
  contact: { fr: '/contact/', en: '/en/contact/' },
  blog: { fr: '/blog/', en: '/en/blog/' },
  legal: { fr: '/mentions-legales/', en: '/en/legal/' },
  privacy: { fr: '/confidentialite/', en: '/en/privacy/' },
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

export const locale: Record<Lang, string> = { fr: 'fr-BE', en: 'en-GB' };
