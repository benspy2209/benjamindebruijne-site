import { test, expect } from '@playwright/test';

const routes = [
  '/', '/projets/', '/a-propos/', '/services/', '/contact/', '/blog/', '/mentions-legales/', '/confidentialite/',
  '/projets/service-volee/', '/projets/bibliopulse/', '/projets/observatory/', '/projets/iris-noir/', '/projets/royal-wellington/', '/projets/beneloo/',
  '/services/construire/', '/services/automatiser/', '/services/piloter/', '/en/services/build/', '/en/services/automate/', '/en/services/deliver/',
  '/en/', '/en/projects/', '/en/about/', '/en/services/', '/en/contact/', '/en/blog/', '/en/legal/', '/en/privacy/',
  '/en/projects/service-volee/', '/en/projects/bibliopulse/', '/en/projects/observatory/', '/en/projects/iris-noir/', '/en/projects/royal-wellington/', '/en/projects/beneloo/',
];

for (const r of routes) {
  test(`200 + h1 + hreflang : ${r}`, async ({ page }) => {
    const res = await page.goto(r);
    expect(res?.status()).toBe(200);
    await expect(page.locator('h1').first()).toBeVisible();
    const alts = await page.locator('link[rel=alternate][hreflang]').count();
    expect(alts).toBeGreaterThanOrEqual(3);
    await expect(page.locator('html')).toHaveAttribute('lang', r.startsWith('/en/') ? 'en-GB' : 'fr-BE');
  });
}

test('404 réel', async ({ page }) => {
  const res = await page.goto('/nimporte-quoi/');
  expect(res?.status()).toBe(404);
});

test('language switcher aboutit sur la page équivalente', async ({ page }) => {
  await page.goto('/a-propos/');
  await page.getByRole('link', { name: 'EN', exact: true }).click();
  await expect(page).toHaveURL(/\/en\/about\/$/);
  await page.getByRole('link', { name: 'FR', exact: true }).click();
  await expect(page).toHaveURL(/\/a-propos\/$/);
});

test('mobile 375 : pas de débordement horizontal sur l’accueil et une fiche', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  for (const r of ['/', '/projets/service-volee/', '/en/services/']) {
    await page.goto(r);
    const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(over, r).toBeLessThanOrEqual(0);
  }
});

test('menu mobile s’ouvre et liste les 5 entrées', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Menu' }).click();
  await expect(page.locator('#menu')).toBeVisible();
  await expect(page.locator('#menu .menu__link')).toHaveCount(5);
  await page.keyboard.press('Escape');
  await expect(page.locator('#menu')).toBeHidden();
});

test('formulaire : bouton désactivé tant qu’il est incomplet, activé une fois rempli', async ({ page }) => {
  await page.goto('/contact/');
  const btn = page.locator('#f-submit');
  await expect(btn).toBeDisabled();
  await expect(btn).toContainText('Formulaire incomplet');
  await page.fill('#f-name', 'Test');
  await page.fill('#f-email', 'pas-un-email');
  await page.fill('#f-msg', 'Bonjour');
  await expect(btn).toBeDisabled();
  await page.fill('#f-email', 'test@exemple.be');
  await expect(btn).toBeEnabled();
  await expect(btn).toContainText('Envoyer le message');
});

test('compteurs animés atteignent leur valeur', async ({ page }) => {
  await page.goto('/');
  const first = page.locator('[data-count]').first();
  await first.scrollIntoViewIfNeeded();
  await expect(first).toHaveText('20+', { timeout: 5000 });
});

test('SEO : JSON-LD Person avec sameAs, OG locale, description propre au contact', async ({ page }) => {
  await page.goto('/');
  const ld = await page.locator('script[type="application/ld+json"]').first().textContent();
  const graph = JSON.parse(ld ?? '{}')['@graph'] as { '@type': string | string[]; sameAs?: string[] }[];
  const person = graph.find((n) => n['@type'] === 'Person');
  expect(person?.sameAs).toContain('https://www.linkedin.com/in/benjamindebruijne/');
  expect(graph.some((n) => n['@type'] === 'WebSite')).toBe(true);
  await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute('content', 'fr_BE');
  await page.goto('/contact/');
  const desc = await page.locator('meta[name="description"]').getAttribute('content');
  expect(desc).toContain('30 minutes');
  await expect(page).toHaveTitle(/^Parlons de votre projet — Benjamin de Bruijne$/);
});

test('SEO : fil d’Ariane + Service sur une offre, CreativeWork sur un projet', async ({ page }) => {
  await page.goto('/services/piloter/');
  const types = async () => JSON.parse((await page.locator('script[type="application/ld+json"]').first().textContent()) ?? '{}')['@graph'].map((n: { '@type': string }) => n['@type']).flat();
  expect(await types()).toEqual(expect.arrayContaining(['BreadcrumbList', 'Service']));
  await page.goto('/projets/beneloo/');
  expect(await types()).toEqual(expect.arrayContaining(['BreadcrumbList', 'CreativeWork']));
  await expect(page).toHaveTitle(/^Beneloo — Un score qui dit si les IA vous citent, et quoi corriger — Benjamin de Bruijne$/);
});

test('GEO : llms.txt servi en texte, blog en noindex', async ({ page, request }) => {
  const res = await request.get('/llms.txt');
  expect(res.status()).toBe(200);
  expect(res.headers()['content-type']).toContain('text/plain');
  const body = await res.text();
  expect(body).toContain('# Benjamin de Bruijne');
  expect(body).toContain('/services/piloter/');
  expect(body).toContain('/en/projects/beneloo/');
  await page.goto('/blog/');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
});

test('a11y : le CTA du header a un nom accessible sur mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto('/');
  await expect(page.getByRole('link', { name: 'Démarrer un projet /Benjamin' })).toBeVisible();
});
