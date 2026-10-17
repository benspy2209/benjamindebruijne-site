# Guide de rédaction du blog — benjamindebruijne.com

Ce guide est la référence des quatre routines hebdomadaires (une par rubrique : lundi soir GxP, mardi soir Automatisation, mercredi soir IA en entreprise, jeudi matin Construire) qui écrivent, publient et relaient un article. Il s'applique aussi à toute rédaction manuelle.

## 1. Cible, rubriques et objectif
Le blog montre tout ce que Ben fait, pas seulement la pharma. Quatre rubriques, chacune avec sa routine, sa file dans le backlog, son libellé de carte, son bouton et sa note d'auteur (définis dans `src/data/rubriques.json`) :

| `rubrique` | Lecteurs | Objectif | Page de destination |
|---|---|---|---|
| `gxp` | recruteurs, hiring managers et pairs en pharma/biotech (IT, Qualité, Digital) | pratique de terrain en validation CSV, GxP, gouvernance de projet, IA en environnement réglementé | `/biopharma/` (EN `/en/biopharma/`) |
| `automatisation` | dirigeants et responsables de PME belges, indépendants, cabinets | automatiser une corvée précise : devis, factures, relances, reporting, mailing, saisie, Peppol | `/services/automatiser/` (EN `/en/services/automate/`) |
| `ia` | mêmes PME + responsables IT/digital de structures moyennes | utiliser un LLM en entreprise avec les pieds sur terre : choix, données, confidentialité, AI Act, cas qui marchent et cas qui déçoivent | `/services/automatiser/` (EN `/en/services/automate/`) |
| `construire` | dirigeants, porteurs de produit, responsables digital | construire un site, une application métier ou un produit : cadrage, SaaS vs sur-mesure, reprise de no-code, pilotage, retours d'expérience sur les produits de Ben | `/services/construire/` (EN `/en/services/build/`) |

Le blog est hors menu : il vit par le sitemap, llms.txt, LinkedIn et les moteurs. La répartition est volontairement égale (1 article par rubrique et par semaine) pour mesurer ce qui marche (§10).

## 2. Fichiers et conventions
- Un article = deux fichiers, même nom : `src/content/blog/fr/<slug>.md` et `src/content/blog/en/<slug>.md`.
- `<slug>` : minuscules, chiffres, tirets, 3 à 6 mots, sans accent (ex. `csv-vs-csa-chef-de-projet`). Identique en FR et en EN.
- Frontmatter obligatoire, et rien d'autre :
  ```yaml
  ---
  title: "Titre : sous-titre"          # ≤ 80 caractères, pas de point final
  description: "…"                      # 50 à 160 caractères, une phrase, mots-clés du sujet
  date: AAAA-MM-JJ                      # jour de publication
  rubrique: gxp                         # gxp | automatisation | ia | construire (identique FR/EN, celle de la routine)
  lang: fr                              # ou en
  tags: [GxP, CSV, GAMP 5]              # 3 à 5 tags, mêmes tags FR/EN
  points:                               # exactement 3 lignes, ≤ 70 caractères, les 3 idées clés (carte visuelle)
    - "…"
    - "…"
    - "…"
  ---
  ```
- JAMAIS de champ `slug` en frontmatter (le loader l'utilise comme identifiant et écrase FR/EN).
- Longueur : 1 000 à 1 400 mots par langue. L'EN est une traduction fidèle, pas un résumé.
- Markdown simple : `##` pour les sections (5 à 8), listes `-` ou `1.`, gras pour les termes clés, un `---` avant la note d'auteur. Pas de H1 (le titre vient du frontmatter), pas d'images, pas de tableaux.
- Dernier paragraphe, en italique, toujours, selon la rubrique :
  - `gxp` FR : `*Benjamin de Bruijne est Digital Technology SME dans un groupe biopharmaceutique belge. Il aide les équipes Labs, Production et Qualité à cadrer et valider leurs projets digitaux en environnement GxP. [Profil et disponibilité](/biopharma/).*`
  - `gxp` EN : `*Benjamin de Bruijne is Digital Technology SME at a Belgian biopharmaceutical group. He helps Labs, Manufacturing and Quality teams frame and validate their digital projects in GxP environments. [Profile and availability](/en/biopharma/).*`
  - `automatisation` et `ia` FR : `*Benjamin de Bruijne est consultant digital et IA indépendant en Belgique. Il automatise les tâches répétitives des PME et met l'IA là où elle enlève une corvée précise. [Automatiser : IA, données, CRM](/services/automatiser/).*`
  - `automatisation` et `ia` EN : `*Benjamin de Bruijne is an independent digital and AI consultant in Belgium. He automates repetitive work for SMEs and puts AI where it removes a specific chore. [Automate: AI, data, CRM](/en/services/automate/).*`
  - `construire` FR : `*Benjamin de Bruijne est consultant digital et IA indépendant en Belgique. Il construit des sites, des applications métier et des produits, et les pilote jusqu'en production. [Construire : sites, applications, produits](/services/construire/).*`
  - `construire` EN : `*Benjamin de Bruijne is an independent digital and AI consultant in Belgium. He builds websites, business applications and products, and delivers them to production. [Build: sites, apps, products](/en/services/build/).*`

## 3. Voix
Première personne, Ben parle depuis le terrain. Phrases courtes. Concret avant théorie : un exemple par section. Pas de jargon non expliqué : chaque sigle est développé à sa première apparition (CSV, CSA, URS, IQ/OQ/PQ, ALCOA+, GP0→GP4). Pas de flatterie, pas de « révolution », pas de promesse. Ton : un collègue senior qui explique à quelqu'un qui démarre : un chef de projet en pharma (`gxp`), un dirigeant de PME qui perd ses soirées en admin (`automatisation`, `ia`), un porteur de produit (`construire`). Tutoiement interdit (vous ou impersonnel). Hors `gxp`, les exemples viennent de PME belges génériques (un installateur, un cabinet, une boutique, un cabinet comptable) jamais nommées, ou des produits publics de Ben (BibliPulse, Service-Volée, Observatory) avec uniquement les chiffres déjà publiés sur ce site.

Structure qui marche : accroche en 2 phrases (la situation concrète) → « le cadre existe déjà » (sources ; hors `gxp` cette section devient « ce qui est vrai en 2026 » : obligation légale, état de l'outil, ordre de grandeur sourcé) → la méthode en étapes numérotées → « ce qui bloque en pratique » (2-3 pièges) → « par où commencer » (un premier pas en 6 semaines, ou en 2 semaines pour une PME) → note d'auteur.

## 4. Exactitude : règles non négociables
- Toute affirmation réglementaire ou normative (texte, édition, année, organisme, obligation) est vérifiée pendant la rédaction sur une source primaire, et la source est nommée dans le texte (organisme + document + année). Sources acceptées :
  - `gxp` : ISPE (GAMP 5 2e éd. 2022, Good Practice Guides), EMA (ema.europa.eu), FDA (fda.gov, 21 CFR), Commission européenne / EUR-Lex (EudraLex vol. 4 annexe 11, AI Act), PIC/S, ISO/IEC et ISA (62443), WHO, MHRA (gov.uk).
  - `automatisation`, `ia`, `construire` : EUR-Lex et Commission européenne (AI Act, RGPD, directive facturation électronique, digital-strategy.ec.europa.eu), SPF Finances (finances.belgium.be : facturation électronique, Peppol, obligations belges), BOSA (bosa.belgium.be, efacture.belgium.be), OpenPeppol (peppol.org), Autorité de protection des données (autoriteprotectiondonnees.be) et CNIL (cnil.fr), SPF Économie (economie.fgov.be), Statbel, BNB, ISO. Pour décrire le fonctionnement d'un outil : sa documentation officielle (docs.* de l'éditeur), de façon descriptive, sans comparatif ni jugement. Les chiffres de produits de Ben : uniquement ceux publiés sur benjamindebruijne.com.
  - Blogs, vendeurs, études sponsorisées et LinkedIn ne sont pas des sources.
- **Moyen de vérification** : ouvrir la page (WebFetch) quand c'est possible. Dans l'environnement cloud de la routine, l'ouverture directe des sites est bloquée par la politique réseau : la vérification se fait alors par **WebSearch restreint aux domaines officiels** (`allowed_domains` : `gxp` = fda.gov, ema.europa.eu, ispe.org, eur-lex.europa.eu, health.ec.europa.eu, picscheme.org, gov.uk, who.int ; autres rubriques = eur-lex.europa.eu, ec.europa.eu, finances.belgium.be, bosa.belgium.be, efacture.belgium.be, peppol.org, autoriteprotectiondonnees.be, cnil.fr, economie.fgov.be, statbel.fgov.be, nbb.be, iso.org, et le domaine de documentation officielle de l'outil décrit). Une affirmation est considérée vérifiée si au moins un résultat provenant du domaine officiel la confirme explicitement (titre, date, statut). Ce mode est acceptable et ne justifie pas de sauter la semaine.
- Quand les résultats sont contradictoires ou flous (projet vs texte final, date incertaine), on n'arbitre pas : on écrit la nuance telle quelle (« guidance publiée en projet en 2022, version finale annoncée en 2025 ; vérifiez le statut en vigueur sur fda.gov ») ou on retire l'affirmation. Le reste de l'article ne dépend jamais d'un point incertain.
- Ce qui ne peut pas être vérifié n'est pas écrit. Aucun chiffre inventé, aucune statistique sans source, aucune citation.
- Ne jamais affirmer qu'un texte « exige » quelque chose s'il « recommande ». Distinguer guide (GAMP) et réglementation (CFR, annexe 11, AI Act).
- Pas de conseil juridique : « à confirmer avec votre Qualité / votre conseil » quand c'est un point d'interprétation.

## 5. Interdits absolus
- Ne jamais nommer un client, un site ou un projet client (ni UCB, ni Computacenter, ni aucune société pharma cliente). Dire « un groupe biopharmaceutique belge » ou « sur site ». Aucune donnée, aucun document, aucune procédure interne d'un client.
- Ne jamais écrire « Hakuna Matata », « agence », « Studio », un tarif, un TJM, une disponibilité ou une date de fin de mission.
- Ne jamais parler de Beneloo, Pulse Noir, Singulr ou Saul Racine, dans aucune rubrique (le blog parle en voix Ben, consultant indépendant, jamais au nom d'une marque). Les produits de Ben (BibliPulse, Service-Volée, Observatory) ne sont cités que hors `gxp`, comme retours d'expérience, sans promotion.
- Ne jamais nommer un client PME, un prospect ou une personne réelle hors Ben. Pas de comparatif d'outils, pas de « meilleur logiciel », pas de recommandation d'éditeur.
- Pas de contenu politique, pas de critique nommée d'un éditeur ou d'une autorité.

## 6. Contrôles avant publication (tous obligatoires)
1. Les deux fichiers existent, même nom, `lang` correct, `description` entre 50 et 160 caractères, pas de champ `slug`.
2. `grep -iE "UCB|Computacenter|Hakuna|agence|Studio|Beneloo|Pulse Noir|Singulr|TJM|€/j"` sur les deux fichiers ne renvoie rien.
3. Chaque source citée a été vérifiée pendant la rédaction (page ouverte, ou résultat de recherche restreint au domaine officiel, voir §4) et dit bien ce qui est écrit. L'absence d'accès direct aux sites n'est pas un motif de blocage ; l'absence de toute confirmation sur domaine officiel, oui : dans ce cas on retire l'affirmation, pas l'article.
4. `npm ci && npm test && npm run build` passent.
5. Si un seul contrôle échoue : ne rien committer, ne rien publier, écrire un rapport. La semaine saute, c'est voulu.

## 7. Carte visuelle, puis publication
- Avant de committer, générer la carte LinkedIn (1200×1200) et l'image de partage (1200×630) pour les deux langues : `node scripts/blog-card.mjs <slug>` puis `node scripts/blog-card.mjs <slug> --lang en`. Sortie dans `public/blog/` : `<slug>-card.png`, `<slug>-og.png`, `<slug>-en-card.png`, `<slug>-en-og.png`. Sans navigateur (satori + resvg), fonctionne dans le cloud. Les 4 fichiers sont committés avec l'article.
- Sur le site, l'image 1200×630 sert d'aperçu de partage (og:image) ; la carte carrée est affichée dans la colonne de l'article et dans la liste `/blog/`. Sur LinkedIn, la carte carrée est jointe au post.
- `git config user.email debruijneb@gmail.com` et `git config user.name benspy2209`.
- La carte prend son libellé et sa signature dans `src/data/rubriques.json` selon le champ `rubrique` du frontmatter : vérifier que le libellé affiché correspond (ex. « AUTOMATISATION · PME · BLOG »).
- `git add` uniquement les deux fichiers de l'article, les 4 images `public/blog/<slug>*.png` et `docs/blog/backlog.md`. Jamais `git add -A` ni `git add .`.
- Message : `blog: <titre FR>` + ligne vide + `Co-Authored-By: Claude <noreply@anthropic.com>`.
- `git push origin main` = déploiement Vercel. Vérifier ensuite que `https://benjamindebruijne.com/blog/<slug>/` et `/en/blog/<slug>/` répondent 200 (attendre jusqu'à 10 minutes).

## 8. Post LinkedIn (Metricool)
- Marque Metricool : blogId `6408500`, fuseau `Europe/Madrid` (même heure que Bruxelles). Réseau : `linkedin` uniquement, type `post`, `previewIncluded: false`, `autoPublish: true`, média = la carte carrée `https://benjamindebruijne.com/blog/<slug>-card.png` (URL publique, en ligne après le déploiement ; attendre qu'elle réponde 200, ou 3 minutes après le push si curl est bloqué). Le lien vers l'article reste dans le texte.
- Horaire : le lendemain matin de la publication de l'article, 08:30 Europe/Brussels. Quatre passages par semaine, un par rubrique : `gxp` lundi 18:00 → post mardi 08:30 ; `automatisation` mardi 18:00 → mercredi 08:30 ; `ia` mercredi 18:00 → jeudi 08:30 ; `construire` jeudi 07:00 → vendredi 08:30.
- Texte FR uniquement, 120 à 180 mots, structure : 1 phrase d'accroche (la situation), 1 phrase qui nomme le piège, 3 à 4 lignes sur ce que contient l'article, une flèche `→` suivie de l'URL FR complète, puis 4 à 5 hashtags : la base de la rubrique (`hashtags` dans `src/data/rubriques.json` : `gxp` #GxP #CSV #GAMP5 #Pharma ; `automatisation` #Automatisation #PME #Belgique #IA ; `ia` #IA #AIAct #PME #Belgique ; `construire` #Développement #ProduitDigital #PME #Belgique) + 1 du sujet. Pas d'emoji, pas de « je suis ravi », pas de question rhétorique en ouverture.
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
`docs/blog/backlog.md` : une section `## À écrire — <rubrique>` par rubrique (file d'attente, le premier est le prochain de cette rubrique) et une section `## Publiés` (date, rubrique, slug, URL, lien Metricool). Chaque routine ne lit que la file de SA rubrique. Après publication, déplacer la ligne du sujet vers « Publiés » (avec la rubrique) et pousser.

**Si la file de la rubrique est vide, la routine ne s'arrête pas : elle choisit elle-même le sujet suivant**, dans ce cadre :
- Thèmes autorisés par rubrique :
  - `gxp` : validation CSV / CSA ; intégrité des données ; gouvernance de projet en pharma (stage-gate, PMO, livrables) ; IT/OT et cybersécurité industrielle ; IA et automatisation en environnement GxP ; rôle du DT SME, du PMO, du chef de projet ; systèmes génériques (LIMS, MES, QMS, GED, ITSM) sans nommer d'éditeur ; inspection readiness ; qualification fournisseurs et cloud ; revue périodique, change control, formation.
  - `automatisation` : devis, factures, relances, Peppol et facturation électronique belge ; reporting et tableaux de bord ; mailing et séquences (RGPD, consentement, délivrabilité) ; saisie et extraction de documents ; CRM et suivi commercial ; boîte mail partagée ; intégrations entre outils ; ce qu'il ne faut pas automatiser.
  - `ia` : choisir un LLM pour l'entreprise ; données, confidentialité, hébergement UE ; AI Act (obligations, formation art. 4, calendrier) ; assistants internes sur documents ; visibilité d'une entreprise dans les réponses des IA ; coûts et mesure ; limites et erreurs typiques ; formation des équipes.
  - `construire` : cadrage et cahier des charges court ; SaaS vs sur-mesure ; reprendre un projet no-code ou généré par IA et le mettre en production ; signaux d'un projet qui dérape ; hébergement, nom de domaine, sauvegardes, RGPD d'un site ; mesure et SEO de base ; retours d'expérience sur les produits de Ben.
- Déclencheur préféré : une actualité réglementaire ou officielle récente (guidance FDA/EMA/PIC/S, révision d'annexe, AI Act, obligation belge de facturation électronique, communication SPF/BOSA/APD) vérifiée sur la source primaire, ou une question de terrain classique.
- Interdit : répéter un sujet de « Publiés » (vérifier les slugs et les angles, toutes rubriques), les sujets d'une autre rubrique, l'IA grand public (actualité des modèles, prompts miracles), et tout ce que §5 interdit.
- Format : ajouter la ligne du sujet dans la file de la rubrique (angle, points, sources) avant de l'écrire, puis la déplacer vers « Publiés » comme d'habitude. Le rapport final précise que le sujet a été choisi par la routine.

## 10. Mesure : ce qui marche
Objectif de la répartition égale : savoir, rubrique par rubrique, ce qui est lu et ce qui amène des contacts. Rien d'automatique ici ; Ben demande « bilan blog » et le bilan est produit depuis trois sources :
- LinkedIn via Metricool (impressions, réactions, commentaires, clics par post, posts identifiés par l'URL de l'article).
- Google Search Console (clics et impressions par URL `/blog/<slug>/`, FR et EN).
- Formulaire de contact et Calendly (mention de l'article ou page d'origine quand elle est connue).
Grille : par rubrique, nombre de posts, impressions moyennes par post, clics moyens, meilleur et pire article. Premier bilan à 4 articles par rubrique (≈ 4 semaines après le passage à 4 rubriques), puis mensuel. Décision possible à l'issue : rééquilibrer le nombre de passages par rubrique, jamais en supprimer une avant 8 articles.
