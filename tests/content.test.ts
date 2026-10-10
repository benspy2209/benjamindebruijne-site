import { describe, it, expect } from 'vitest';
import { getSite, getProjects } from '../src/lib/content';
import { routes, href, projectHref, alternate } from '../src/lib/i18n';
import { readdirSync, readFileSync } from 'node:fs';

function shape(v: unknown): unknown {
  if (Array.isArray(v)) return v.map(shape);
  if (v && typeof v === 'object') {
    return Object.fromEntries(Object.keys(v as object).sort().map((k) => [k, shape((v as any)[k])]));
  }
  return typeof v;
}

describe('content parity FR/EN', () => {
  it('site.json has the same structure in both languages', () => {
    const norm = (s: any) => ({ ...s, offers: { ...s.offers, items: Object.values(s.offers.items) } });
    expect(shape(norm(getSite('en')))).toEqual(shape(norm(getSite('fr'))));
  });
  it('projects share slugs, colors and order', () => {
    const fr = getProjects('fr');
    const en = getProjects('en');
    expect(en.map((p) => p.slug)).toEqual(fr.map((p) => p.slug));
    expect(en.map((p) => p.color)).toEqual(fr.map((p) => p.color));
    expect(fr.length).toBeGreaterThanOrEqual(6);
  });
  it('slugs are unique and URL-safe', () => {
    const slugs = getProjects('fr').map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const s of slugs) expect(s).toMatch(/^[a-z0-9-]+$/);
  });
  it('nav keys map to known routes', () => {
    for (const n of getSite('fr').nav) expect(routes).toHaveProperty(n.key);
  });
});

describe('i18n helpers', () => {
  it('builds hrefs with trailing slashes', () => {
    expect(href('home', 'fr')).toBe('/');
    expect(href('projects', 'en')).toBe('/en/projects/');
    expect(projectHref('bibliopulse', 'fr')).toBe('/projets/bibliopulse/');
  });
  it('alternate switches language', () => {
    expect(alternate('about', 'fr')).toBe('/en/about/');
    expect(alternate('projects', 'en', 'beneloo')).toBe('/projets/beneloo/');
  });
});

describe('blog posts FR/EN parity (files)', () => {
  const fm = (f: string) => Object.fromEntries([...readFileSync(f, 'utf8').split('---')[1].matchAll(/^(\w+):\s*"?(.*?)"?\s*$/gm)].map((m) => [m[1], m[2]]));
  const list = (l: string) => readdirSync(`src/content/blog/${l}`).filter((f) => f.endsWith('.md')).sort();
  it('every FR post has an EN twin with the same filename and a 50–160 char description', () => {
    expect(list('en')).toEqual(list('fr'));
    for (const l of ['fr', 'en']) for (const f of list(l)) {
      const d = fm(`src/content/blog/${l}/${f}`);
      expect(d.lang, f).toBe(l);
      expect(d.description.length, f).toBeGreaterThanOrEqual(50);
      expect(d.description.length, f).toBeLessThanOrEqual(160);
    }
  });
});
