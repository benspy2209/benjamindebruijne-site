import { describe, it, expect } from 'vitest';
import { getSite, getProjects } from '../src/lib/content';
import type { Lang } from '../src/lib/i18n';

const langs: Lang[] = ['fr', 'en'];

describe('SEO data', () => {
  it('meta description is within 50–160 chars', () => {
    for (const l of langs) expect(getSite(l).meta.description.length, l).toBeLessThanOrEqual(160);
    for (const l of langs) expect(getSite(l).meta.description.length, l).toBeGreaterThanOrEqual(50);
  });
  it('every page section carries its own description', () => {
    for (const l of langs) {
      const s = getSite(l);
      const descs = [s.contact.description, s.pages.projects.description, s.pages.blog.description, s.pages.legal.description, s.pages.privacy.description, s.pages.about.description, s.pages.services.description, ...Object.values(s.offers.items).map((o) => o.description)];
      for (const d of descs) { expect(d.length, `${l}: ${d}`).toBeGreaterThanOrEqual(50); expect(d.length, `${l}: ${d}`).toBeLessThanOrEqual(160); }
      expect(new Set([...descs, s.meta.description]).size).toBe(descs.length + 1);
    }
  });
  it('offer meta titles stay short enough for the SERP (≤ 45 chars before suffix)', () => {
    for (const l of langs) for (const o of Object.values(getSite(l).offers.items)) expect(o.metaTitle.length, o.metaTitle).toBeLessThanOrEqual(45);
  });
  it('meta exposes social profiles and expertise for JSON-LD', () => {
    for (const l of langs) {
      const m = getSite(l).meta;
      expect(m.sameAs).toContain('https://www.linkedin.com/in/benjamindebruijne/');
      expect(m.sameAs).toContain('https://github.com/benspy2209');
      expect(m.knowsAbout.length).toBeGreaterThanOrEqual(5);
    }
  });
  it('every project has a tagline usable as a title', () => {
    for (const l of langs) for (const p of getProjects(l)) expect(p.tagline.length, p.slug).toBeGreaterThan(5);
  });
});

describe('GEO data (étape 3)', () => {
  const words = (s: string) => s.trim().split(/\s+/).length;
  it('about page carries a reusable short bio and a last-updated date', () => {
    for (const l of langs) {
      const a = getSite(l).pages.about;
      expect(words(a.bio), `${l} bio`).toBeGreaterThanOrEqual(40);
      expect(words(a.bio), `${l} bio`).toBeLessThanOrEqual(90);
      expect(a.bio).toContain('benjamindebruijne.com');
      expect(a.lastUpdated).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(a.faq[0].q).toContain('Benjamin de Bruijne');
    }
  });
  it('every offer has at least 3 citable FAQ entries with 30–110 word answers', () => {
    for (const l of langs) for (const o of Object.values(getSite(l).offers.items)) {
      expect(o.faq.length, `${l} ${o.name}`).toBeGreaterThanOrEqual(3);
      for (const f of o.faq) { expect(words(f.a), `${l} ${f.q}`).toBeGreaterThanOrEqual(30); expect(words(f.a), `${l} ${f.q}`).toBeLessThanOrEqual(110); expect(f.q.endsWith('?'), f.q).toBe(true); }
    }
  });
  it('never uses the forbidden Beneloo words in bios and FAQs', () => {
    for (const l of langs) {
      const s = getSite(l);
      const text = [s.pages.about.bio, ...s.pages.about.faq.map((f) => f.a), ...Object.values(s.offers.items).flatMap((o) => o.faq.map((f) => f.a))].join(' ');
      expect(text).not.toMatch(/\bagence\b|\bagency\b|\bStudio\b/i);
    }
  });
});
