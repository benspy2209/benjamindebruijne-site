import type { Lang } from './i18n';
import frSite from '../data/fr/site.json';
import enSite from '../data/en/site.json';
import frProjects from '../data/fr/projects.json';
import enProjects from '../data/en/projects.json';

export type Site = typeof frSite;
export type Project = (typeof frProjects)[number];

const sites: Record<Lang, Site> = { fr: frSite, en: enSite as Site };
const projects: Record<Lang, Project[]> = { fr: frProjects, en: enProjects as Project[] };

export function getSite(lang: Lang): Site {
  return sites[lang];
}

export function getProjects(lang: Lang): Project[] {
  return projects[lang];
}

export function getProject(lang: Lang, slug: string): Project | undefined {
  return projects[lang].find((p) => p.slug === slug);
}
