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
