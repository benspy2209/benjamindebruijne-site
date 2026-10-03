# Plan d'implémentation — ben-site

1. Scaffold Astro + fonts + portrait ✔ (vérif : `npx astro --version`).
2. Contenu `src/data/{fr,en}/site.json` + `projects.json`, loader `src/lib/content.ts`, routes `src/lib/i18n.ts`. Test vitest parité FR/EN.
3. `src/styles/global.css` (tokens, trame, typo, boutons, reveal).
4. Layout `Base.astro` (head, fonts, Header, Footer, scripts reveal/clock/menu).
5. Composants accueil : Hero, LogoMarquee, Mission+Counters, Portfolio, Services, Process+Cta, ContactForm.
6. Pages FR + EN (enveloppes minces) + 404 + légales.
7. Playwright : routes 200 ×2 langues, 375 px sans overflow, formulaire vide bloqué.
8. Build, dev server en fond, URL de dev. Commit par checkpoint.
