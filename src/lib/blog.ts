import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './i18n';
import { href } from './i18n';

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
