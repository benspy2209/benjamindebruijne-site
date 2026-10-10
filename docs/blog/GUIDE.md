# Guide de rédaction du blog — benjamindebruijne.com

Ce guide est la référence des deux routines hebdomadaires (lundi soir et jeudi matin) qui écrivent, publient et relaient un article. Il s'applique aussi à toute rédaction manuelle.

## 1. Cible et objectif
Lecteurs : recruteurs, hiring managers et pairs en pharma/biotech belge (IT, Qualité, Digital). Objectif : montrer une pratique de terrain en validation CSV, GxP, gouvernance de projet et IA en environnement réglementé, et ramener vers `/biopharma/` (EN : `/en/biopharma/`). Le blog est hors menu : il vit par le sitemap, llms.txt, LinkedIn et les moteurs.

## 2. Fichiers et conventions
- Un article = deux fichiers, même nom : `src/content/blog/fr/<slug>.md` et `src/content/blog/en/<slug>.md`.
- `<slug>` : minuscules, chiffres, tirets, 3 à 6 mots, sans accent (ex. `csv-vs-csa-chef-de-projet`). Identique en FR et en EN.
- Frontmatter obligatoire, et rien d'autre :
  ```yaml
  ---
  title: "Titre : sous-titre"          # ≤ 80 caractères, pas de point final
  description: "…"                      # 50 à 160 caractères, une phrase, mots-clés du sujet
  date: AAAA-MM-JJ                      # jour de publication
  lang: fr                              # ou en
  tags: [GxP, CSV, GAMP 5]              # 3 à 5 tags, mêmes tags FR/EN
  ---
  ```
- JAMAIS de champ `slug` en frontmatter (le loader l'utilise comme identifiant et écrase FR/EN).
- Longueur : 1 000 à 1 400 mots par langue. L'EN est une traduction fidèle, pas un résumé.
- Markdown simple : `##` pour les sections (5 à 8), listes `-` ou `1.`, gras pour les termes clés, un `---` avant la note d'auteur. Pas de H1 (le titre vient du frontmatter), pas d'images, pas de tableaux.
- Dernier paragraphe, en italique, toujours :
  - FR : `*Benjamin de Bruijne est Digital Technology SME dans un groupe biopharmaceutique belge. Il aide les équipes Labs, Production et Qualité à cadrer et valider leurs projets digitaux en environnement GxP. [Profil et disponibilité](/biopharma/).*`
  - EN : `*Benjamin de Bruijne is Digital Technology SME at a Belgian biopharmaceutical group. He helps Labs, Manufacturing and Quality teams frame and validate their digital projects in GxP environments. [Profile and availability](/en/biopharma/).*`

## 3. Voix
Première personne, Ben parle depuis le terrain. Phrases courtes. Concret avant théorie : un exemple par section. Pas de jargon non expliqué : chaque sigle est développé à sa première apparition (CSV, CSA, URS, IQ/OQ/PQ, ALCOA+, GP0→GP4). Pas de flatterie, pas de « révolution », pas de promesse. Ton : un collègue senior qui explique à un chef de projet qui démarre en pharma. Tutoiement interdit (vous ou impersonnel).

Structure qui marche : accroche en 2 phrases (la situation concrète) → « le cadre existe déjà » (sources) → la méthode en étapes numérotées → « ce qui bloque en pratique » (2-3 pièges) → « par où commencer » (un premier pas en 6 semaines) → note d'auteur.

## 4. Exactitude : règles non négociables
- Toute affirmation réglementaire ou normative (texte, édition, année, organisme, obligation) est vérifiée pendant la rédaction sur une source primaire, et la source est nommée dans le texte (organisme + document + année). Sources acceptées : ISPE (GAMP 5 2e éd. 2022, Good Practice Guides), EMA (ema.europa.eu), FDA (fda.gov, 21 CFR), Commission européenne / EUR-Lex (EudraLex vol. 4 annexe 11, AI Act), PIC/S, ISO/IEC et ISA (62443), WHO, MHRA (gov.uk). Blogs, vendeurs et LinkedIn ne sont pas des sources.
- **Moyen de vérification** : ouvrir la page (WebFetch) quand c'est possible. Dans l'environnement cloud de la routine, l'ouverture directe des sites est bloquée par la politique réseau : la vérification se fait alors par **WebSearch restreint aux domaines officiels** (`allowed_domains` = fda.gov, ema.europa.eu, ispe.org, eur-lex.europa.eu, health.ec.europa.eu, picscheme.org, gov.uk, who.int). Une affirmation est considérée vérifiée si au moins un résultat provenant du domaine officiel la confirme explicitement (titre, date, statut). Ce mode est acceptable et ne justifie pas de sauter la semaine.
- Quand les résultats sont contradictoires ou flous (projet vs texte final, date incertaine), on n'arbitre pas : on écrit la nuance telle quelle (« guidance publiée en projet en 2022, version finale annoncée en 2025 ; vérifiez le statut en vigueur sur fda.gov ») ou on retire l'affirmation. Le reste de l'article ne dépend jamais d'un point incertain.
- Ce qui ne peut pas être vérifié n'est pas écrit. Aucun chiffre inventé, aucune statistique sans source, aucune citation.
- Ne jamais affirmer qu'un texte « exige » quelque chose s'il « recommande ». Distinguer guide (GAMP) et réglementation (CFR, annexe 11, AI Act).
- Pas de conseil juridique : « à confirmer avec votre Qualité / votre conseil » quand c'est un point d'interprétation.

## 5. Interdits absolus
- Ne jamais nommer un client, un site ou un projet client (ni UCB, ni Computacenter, ni aucune société pharma cliente). Dire « un groupe biopharmaceutique belge » ou « sur site ». Aucune donnée, aucun document, aucune procédure interne d'un client.
- Ne jamais écrire « Hakuna Matata », « agence », « Studio », un tarif, un TJM, une disponibilité ou une date de fin de mission.
- Ne jamais parler de Beneloo, Pulse Noir, Singulr, Saul Racine ou des produits de Ben dans un article pharma.
- Pas de contenu politique, pas de critique nommée d'un éditeur ou d'une autorité.

## 6. Contrôles avant publication (tous obligatoires)
1. Les deux fichiers existent, même nom, `lang` correct, `description` entre 50 et 160 caractères, pas de champ `slug`.
2. `grep -iE "UCB|Computacenter|Hakuna|agence|Studio|Beneloo|Pulse Noir|Singulr|TJM|€/j"` sur les deux fichiers ne renvoie rien.
3. Chaque source citée a été vérifiée pendant la rédaction (page ouverte, ou résultat de recherche restreint au domaine officiel, voir §4) et dit bien ce qui est écrit. L'absence d'accès direct aux sites n'est pas un motif de blocage ; l'absence de toute confirmation sur domaine officiel, oui : dans ce cas on retire l'affirmation, pas l'article.
4. `npm ci && npm test && npm run build` passent.
5. Si un seul contrôle échoue : ne rien committer, ne rien publier, écrire un rapport. La semaine saute, c'est voulu.

## 7. Publication
- `git config user.email debruijneb@gmail.com` et `git config user.name benspy2209`.
- `git add` uniquement les deux fichiers de l'article et `docs/blog/backlog.md`. Jamais `git add -A` ni `git add .`.
- Message : `blog: <titre FR>` + ligne vide + `Co-Authored-By: Claude <noreply@anthropic.com>`.
- `git push origin main` = déploiement Vercel. Vérifier ensuite que `https://benjamindebruijne.com/blog/<slug>/` et `/en/blog/<slug>/` répondent 200 (attendre jusqu'à 10 minutes).

## 8. Post LinkedIn (Metricool)
- Marque Metricool : blogId `6408500`, fuseau `Europe/Madrid` (même heure que Bruxelles). Réseau : `linkedin` uniquement, type `post`, `previewIncluded: true`, `autoPublish: true`, pas de média (l'aperçu du lien suffit).
- Horaire : le lendemain matin de la publication de l'article, 08:30 Europe/Brussels. Deux passages par semaine : article le lundi soir (18:00) → post le mardi 08:30 ; article le jeudi matin (07:00) → post le vendredi 08:30.
- Texte FR uniquement, 120 à 180 mots, structure : 1 phrase d'accroche (la situation), 1 phrase qui nomme le piège, 3 à 4 lignes sur ce que contient l'article, une flèche `→` suivie de l'URL FR complète, puis 4 à 5 hashtags (#GxP #CSV #GAMP5 #Pharma + 1 du sujet). Pas d'emoji, pas de « je suis ravi », pas de question rhétorique en ouverture.
- Exemple validé :
  ```
  Un outil d'IA arrive dans un labo ou une usine pharma. Faut-il le valider ? Et comment ?

  La question tombe sur la Qualité et l'IT en même temps, et la réponse n'est ni « non » ni « deux cents pages d'IQ/OQ ».

  J'ai écrit la méthode que j'applique : six étapes, proportionnées au risque, dans l'esprit de GAMP 5. Usage prévu, impact GxP, type d'IA, exigences sur les données, tests de l'usage (pas du modèle), humain dans la boucle et revue dans le temps.

  Avec les trois pièges qui bloquent le plus souvent.

  → https://benjamindebruijne.com/blog/valider-un-outil-ia-gxp/

  #GxP #CSV #GAMP5 #AI #Pharma
  ```

## 9. Backlog et auto-alimentation
`docs/blog/backlog.md` : section `## À écrire` (file d'attente, le premier est le prochain) et `## Publiés` (date, slug, URL, lien Metricool). Après publication, déplacer la ligne du sujet vers « Publiés » et pousser.

**Si la file est vide, la routine ne s'arrête pas : elle choisit elle-même le sujet suivant**, dans ce cadre :
- Thèmes autorisés : validation CSV / CSA ; intégrité des données ; gouvernance de projet en pharma (stage-gate, PMO, livrables) ; IT/OT et cybersécurité industrielle ; IA et automatisation en environnement GxP ; rôle du DT SME, du PMO, du chef de projet ; systèmes génériques (LIMS, MES, QMS, GED, ITSM) sans nommer d'éditeur ; inspection readiness ; qualification fournisseurs et cloud ; revue périodique, change control, formation.
- Déclencheur préféré : une actualité réglementaire récente (nouvelle guidance FDA, EMA, PIC/S, révision d'annexe, AI Act) vérifiée sur la source primaire, ou une question de terrain classique.
- Interdit : répéter un sujet de « Publiés » (vérifier les slugs et les angles), les sujets marketing, PME, IA grand public, et tout ce que §5 interdit.
- Format : ajouter la ligne du sujet dans « À écrire » (angle, points, sources) avant de l'écrire, puis la déplacer vers « Publiés » comme d'habitude. Le rapport final précise que le sujet a été choisi par la routine.
