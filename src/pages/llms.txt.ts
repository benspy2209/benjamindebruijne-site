import type { APIRoute } from 'astro';
import { getSite, getProjects } from '../lib/content';
import { href, projectHref, type Lang } from '../lib/i18n';
import { getPosts, postHref, slugOf } from '../lib/blog';

/** llms.txt : résumé du site lisible par les assistants IA (https://llmstxt.org). */
export const GET: APIRoute = async ({ site }) => {
  const origin = site?.origin ?? 'https://benjamindebruijne.com';
  const abs = (path: string) => `${origin}${path}`;
  const block = async (lang: Lang) => {
    const s = getSite(lang);
    const posts = await getPosts(lang);
    const offers = Object.entries(s.offers.items) as [string, { name: string; metaTitle: string; description: string }][];
    const offerKey: Record<string, 'offer-build' | 'offer-automate' | 'offer-deliver'> = { construire: 'offer-build', build: 'offer-build', automatiser: 'offer-automate', automate: 'offer-automate', piloter: 'offer-deliver', deliver: 'offer-deliver' };
    const projects = getProjects(lang);
    const lines = [
      lang === 'fr' ? '## Services' : '## Services (EN)',
      ...offers.map(([slug, o]) => `- [${o.metaTitle}](${abs(href(offerKey[slug], lang))}): ${o.description}`),
      '',
      lang === 'fr' ? '## Produits et projets' : '## Products and projects',
      ...projects.map((p) => `- [${p.name}](${abs(projectHref(p.slug, lang))}): ${p.tagline.replace(/[.\s]+$/, '')} (${[p.year, p.url].filter(Boolean).join(', ')})`),
      '',
      lang === 'fr' ? '## Pages' : '## Pages (EN)',
      `- [${lang === 'fr' ? 'À propos' : 'About'}](${abs(href('about', lang))}): ${s.pages.about.description}`,
      `- [Services](${abs(href('services', lang))}): ${s.pages.services.description}`,
      `- [Contact](${abs(href('contact', lang))}): ${s.contact.description}`,
      `- [${lang === 'fr' ? 'Biopharma : DT SME, PMO' : 'Biopharma: DT SME, PMO'}](${abs(href('biopharma', lang))}): ${s.pages.biopharma.description}`,
      '',
      lang === 'fr' ? '## Articles' : '## Articles (EN)',
      ...posts.map((p) => `- [${p.data.title}](${abs(postHref(slugOf(p), lang))}): ${p.data.description} (${p.data.date.toISOString().slice(0, 10)})`),
    ];
    return lines.join('\n');
  };
  const fr = getSite('fr');
  const text = [
    `# ${fr.meta.name}`,
    '',
    `> ${fr.meta.description}`,
    '',
    `Rôle actuel : fondateur d'Astérisme SRL (https://asterisme.ai/), cabinet d'IA appliquée constitué en novembre 2026, BCE 1044.920.226, Avenue Louise 231, 1050 Bruxelles. Digital Technology Subject Matter Expert (DT SME) chez un acteur biopharma, via Computacenter, jusqu'au 31/12/2026. Disponible pour une mission à partir de janvier 2027.`,
    `Astérisme : « L'humain dirige. L'IA assiste. » Outils publiés par Astérisme : Radar (https://radar.asterisme.ai/), l'Observatoire de la souveraineté conversationnelle (https://observatoire.asterisme.ai/), Singulr, forge Git souveraine (https://singulr.be/). Autres produits : Pulse Noir, Service-Volée, BiblioPulse. Langues : français, anglais, néerlandais.`,
    `Expertises : ${fr.meta.knowsAbout.join(' · ')}.`,
    `Profils : ${fr.meta.sameAs.join(' · ')}.`,
    `Contact : ${fr.meta.email} · ${fr.meta.booking}`,
    '',
    await block('fr'),
    '',
    await block('en'),
    '',
  ].join('\n');
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
