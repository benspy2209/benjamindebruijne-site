import type { APIRoute } from 'astro';
import { getSite, getProjects } from '../lib/content';
import { href, projectHref, type Lang } from '../lib/i18n';

/** llms.txt : résumé du site lisible par les assistants IA (https://llmstxt.org). */
export const GET: APIRoute = ({ site }) => {
  const origin = site?.origin ?? 'https://benjamindebruijne.com';
  const abs = (path: string) => `${origin}${path}`;
  const block = (lang: Lang) => {
    const s = getSite(lang);
    const offers = Object.entries(s.offers.items) as [string, { name: string; metaTitle: string; description: string }][];
    const offerKey: Record<string, 'offer-build' | 'offer-automate' | 'offer-deliver'> = { construire: 'offer-build', build: 'offer-build', automatiser: 'offer-automate', automate: 'offer-automate', piloter: 'offer-deliver', deliver: 'offer-deliver' };
    const projects = getProjects(lang);
    const lines = [
      lang === 'fr' ? '## Services' : '## Services (EN)',
      ...offers.map(([slug, o]) => `- [${o.metaTitle}](${abs(href(offerKey[slug], lang))}): ${o.description}`),
      '',
      lang === 'fr' ? '## Produits et projets' : '## Products and projects',
      ...projects.map((p) => `- [${p.name}](${abs(projectHref(p.slug, lang))}): ${p.tagline.replace(/[.\s]+$/, '')} (${p.year}, ${p.url})`),
      '',
      lang === 'fr' ? '## Pages' : '## Pages (EN)',
      `- [${lang === 'fr' ? 'À propos' : 'About'}](${abs(href('about', lang))}): ${s.pages.about.description}`,
      `- [Services](${abs(href('services', lang))}): ${s.pages.services.description}`,
      `- [Contact](${abs(href('contact', lang))}): ${s.contact.description}`,
      `- [${lang === 'fr' ? 'Biopharma : DT SME, PMO' : 'Biopharma: DT SME, PMO'}](${abs(href('biopharma', lang))}): ${s.pages.biopharma.description}`,
    ];
    return lines.join('\n');
  };
  const fr = getSite('fr');
  const text = [
    `# ${fr.meta.name}`,
    '',
    `> ${fr.meta.description}`,
    '',
    `Rôle actuel : Digital Technology Subject Matter Expert (DT SME) dans un groupe biopharmaceutique belge. Fondateur de Beneloo, Observatory, Singulr, Pulse Noir. Société : Hakuna Matata SRL, Rhode-Saint-Genèse, Belgique. Langues : français, anglais, néerlandais.`,
    `Expertises : ${fr.meta.knowsAbout.join(' · ')}.`,
    `Profils : ${fr.meta.sameAs.join(' · ')}.`,
    `Contact : ${fr.meta.email} · ${fr.meta.booking}`,
    '',
    block('fr'),
    '',
    block('en'),
    '',
  ].join('\n');
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
