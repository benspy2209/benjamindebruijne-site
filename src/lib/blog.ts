import { existsSync } from 'node:fs';
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './i18n';
import { href, type RouteKey } from './i18n';
import rubriques from '../data/rubriques.json';

export type Post = CollectionEntry<'blog'>;

/** Slug = nom de fichier (src/content/blog/<lang>/<slug>.md), identique en FR et en EN. */
export const slugOf = (p: Post): string => p.id.split('/').pop()!;

export async function getPosts(lang: Lang): Promise<Post[]> {
  const all = await getCollection('blog', (e) => e.data.lang === lang);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getPost(lang: Lang, slug: string): Promise<Post | undefined> {
  return (await getPosts(lang)).find((p) => slugOf(p) === slug);
}

export function postHref(slug: string, lang: Lang): string {
  return `${href('blog', lang)}${slug}/`;
}

/** Carte visuelle 1200×1200 générée par scripts/blog-card.mjs, ou null si absente. */
export function cardOf(post: Post, lang: Lang): string | null {
  const file = `/blog/${slugOf(post)}${lang === 'fr' ? '' : `-${lang}`}-card.png`;
  return existsSync(`public${file}`) ? file : null;
}

export type Rubrique = keyof typeof rubriques;
export interface RubriqueExit { title: string; text: string; cta: string; url: string }
export interface RubriqueInfo { key: Rubrique; label: string; cta: string; authorNote: string; href: string; exit?: RubriqueExit }
/** Rubrique d'un article (gxp par défaut) : libellé, bouton et note d'auteur dans la langue demandée. */
export function rubriqueOf(post: Post, lang: Lang): RubriqueInfo {
  const key = (post.data.rubrique ?? 'gxp') as Rubrique;
  const r = rubriques[key];
  const e = (r as { exit?: { title: Record<string, string>; text: Record<string, string>; cta: Record<string, string>; url: string } }).exit;
  const exit = e ? { title: e.title[lang], text: e.text[lang], cta: e.cta[lang], url: e.url } : undefined;
  return { key, label: r.label[lang], cta: r.cta[lang], authorNote: r.authorNote[lang], href: href(r.route as RouteKey, lang), exit };
}
