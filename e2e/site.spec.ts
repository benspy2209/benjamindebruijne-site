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
