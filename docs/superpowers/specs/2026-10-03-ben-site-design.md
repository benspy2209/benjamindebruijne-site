# Ben site — spec de design (2026-10-03)

## But
Site personnel de Benjamin de Bruijne, consultant digital & IA généraliste, calqué sur la structure et le langage visuel de cedrichalenria.com (Astro, noir/blanc, accent orange, trame 4 colonnes, wordmark géant). FR + EN. Local d'abord, déploiement tranché plus tard.

## Périmètre
- Astro 7 statique, CSS vanilla à tokens, fonts auto-hébergées (Zalando Sans, Geist Mono).
- i18n : FR à la racine, EN sous `/en/`. Contenu dans `src/data/{fr,en}/`. Les pages sont des enveloppes minces qui rendent le même composant avec `lang`.
- Routes (×2 langues) : accueil, projets, projets/[slug] (6), à-propos, services, contact, blog (état vide), mentions légales, confidentialité, 404.
- Accueil : header (menu, wordmark, heure locale, CTA), hero (visuel sombre + wordmark « BENJAMIN » + 3 services + preuve), bandeau projets défilant, mission + 4 compteurs, études de cas (6 cartes), accordéon services (6), processus 5 étapes + bloc CTA orange, formulaire contact (validation client, repli `mailto:`), footer wordmark géant.
- Hors périmètre : Saul Racine, données clients UCB, backend formulaire, blog réel, analytics.

## Design
Tokens : `--c-dark #121212`, `--c-accent #ff6044`, gris 100/200/300, off-white, trame `#ffffff1f` / `#0000000f`. Titres Zalando Sans 400–800, labels Geist Mono majuscules. Trame verticale 4 colonnes en fond de chaque section. Reveal au scroll + compteurs animés, désactivés sous `prefers-reduced-motion`. Mobile ≤ 809 px : marge 16 px, menu overlay.

## Vérification
- `npm test` : parité des clés FR/EN et validité des slugs.
- `npm run build` vert.
- `npm run e2e` : chaque route en 200 dans les 2 langues, pas de débordement horizontal à 375 px, formulaire refuse un envoi vide.
