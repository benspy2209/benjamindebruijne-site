---
title: "CSV ou CSA : ce qui change vraiment pour un chef de projet"
description: "La guidance CSA de la FDA est passée en version finale. Ce qui change dans un plan de validation, ce qui ne change pas, et pour qui elle s'applique."
date: 2026-10-12
lang: fr
tags: [GxP, CSV, CSA, GAMP 5, validation]
points:
  - "Le CSA de la FDA est final, et cadré aux dispositifs"
  - "La pensée critique remplace l'effort documentaire réflexe"
  - "Part 11 et annexe 11 ne bougent pas"
---

« On fait du CSA maintenant, donc on allège la CSV. » J'entends cette phrase en réunion de lancement, et elle est à moitié vraie. La CSV, c'est la validation des systèmes informatisés. La moitié fausse coûte cher, parce qu'elle fait sauter des documents que personne n'a autorisé à sauter.

Le sujet mérite une mise à plat, d'autant que le texte de référence a bougé. Voici ce qu'un chef de projet doit en retenir.

## D'où vient le CSA, et où il s'applique

CSA signifie **Computer Software Assurance**, assurance logicielle. Le terme vient d'une guidance de la FDA, l'autorité américaine du médicament et des dispositifs médicaux. Pendant des années, on a parlé du « projet de guidance de 2022 ». Ce n'est plus le cas : la FDA a publié une version finale, *Computer Software Assurance for Production and Quality System Software*, le 24 septembre 2025, puis une version finale révisée sous le titre *Computer Software Assurance for Production and Quality Management System Software*, datée du 3 février 2026, qui remplace la précédente.

Deux précisions changent la façon d'en parler.

La première : cette guidance s'inscrit sous le **21 CFR Part 820**, la réglementation américaine du système de management de la qualité des dispositifs médicaux, renommée Quality Management System Regulation (QMSR) et applicable depuis le 2 février 2026. La révision de février 2026 a précisément été faite pour s'aligner sur ce Part 820 amendé. Autrement dit : si vous fabriquez un médicament et pas un dispositif, le CSA n'est pas la réglementation qui vous est opposable. C'est une méthode publique dont vous pouvez vous inspirer — pas un texte qui vous couvre devant un inspecteur européen.

La seconde : une guidance FDA est explicitement **non contraignante** (« contains nonbinding recommendations »). Elle décrit une approche que la FDA considère acceptable ; elle ne crée aucune obligation et n'en supprime aucune.

Sur le fond, la guidance décrit une approche fondée sur le risque pour établir la confiance dans l'automatisation utilisée en production ou dans le système qualité, et pour identifier là où une rigueur supplémentaire est justifiée. Elle distingue les logiciels utilisés **directement** dans un procédé de production ou de qualité (automatisation, inspection, test, collecte et traitement de données de production) et ceux qui ne font que **soutenir** ces activités. Elle cite comme moyens d'assurance les tests fondés sur le risque, les tests non scriptés et la surveillance continue des performances et des données.

## Ce que GAMP 5 en a repris

GAMP 5, publié par l'ISPE, est un **guide** de bonnes pratiques, pas une réglementation. La deuxième édition est sortie en 2022. L'ISPE décrit cette édition comme conservant les principes de la première, en insistant sur la **pensée critique** appliquée par des experts métier compétents et expérimentés pour définir l'approche adaptée à chaque situation, et en plaçant la sécurité du patient et la qualité du produit avant la conformité documentaire. L'édition couvre aussi les prestataires de services, le cloud, les logiciels libres et l'apprentissage automatique.

Le point important pour un chef de projet européen : vous n'avez pas besoin d'invoquer la FDA pour travailler proportionnellement au risque. GAMP 5 deuxième édition suffit, et l'ISPE présente le CSA et la pensée critique comme un renfort de l'approche par les risques, pas comme une rupture.

## Les cinq décisions qui changent dans un plan de validation

Voici où la différence se voit dans vos livrables.

1. **Le périmètre de l'effort, décidé avant d'écrire.** On ne part plus d'un gabarit complet qu'on allège ensuite. On part de l'usage prévu et de l'impact GxP, et on décide quel niveau de preuve est nécessaire, fonction par fonction. Un module de reporting qui ne décide rien et un module qui libère un lot ne reçoivent pas le même traitement.
2. **La part de test non scripté devient explicite.** Les tests exploratoires, les tests ad hoc, les tests menés par des utilisateurs qui connaissent le procédé ont une valeur de preuve, à condition d'être documentés : qui, quand, quelle version, quel constat. Ce qui ne marche pas, c'est le test non scripté non tracé.
3. **La configuration standard n'est pas re-testée comme du développement.** Une fonction standard d'un progiciel largement déployé, non configurée et non critique, peut être couverte par l'évaluation du fournisseur et un test d'usage, plutôt que par une batterie d'OQ (qualification opérationnelle) recopiée de la spécification.
4. **L'évaluation du fournisseur fait partie des preuves.** Audit documentaire, certificats, résultats de tests, procédure de gestion des versions : ce que le fournisseur a déjà démontré ne se refait pas, il se qualifie et se cite.
5. **La surveillance en exploitation devient une preuve.** Indicateurs, revue des anomalies, surveillance des données : ce qui est observé en continu peut réduire l'effort de test initial, à condition que le dispositif soit décrit et réellement tenu.

Ces cinq décisions se prennent au même endroit : dans le plan de validation, avec la Qualité, avant les tests. Pas en comité de clôture, quand il manque des preuves.

## Ce qui ne change pas

Et maintenant la partie que les présentations oublient.

Le **21 CFR Part 11** reste en vigueur : enregistrements électroniques, signatures électroniques, pistes d'audit. La FDA a publié en 2003 une guidance de portée et d'application : lecture étroite du champ, discrétion d'application sur certaines exigences de piste d'audit, mais rappel que les réglementations sous-jacentes continuent de s'appliquer et recommandation de fonder les pistes d'audit sur une évaluation des risques documentée.

En Europe, l'**annexe 11 d'EudraLex volume 4** s'applique dans sa révision de janvier 2011 : c'est encore la version publiée au catalogue de la Commission européenne. Une révision est en cours. La Commission a mené une consultation des parties prenantes sur le chapitre 4 (documentation), l'annexe 11 et une nouvelle **annexe 22** consacrée à l'intelligence artificielle, textes préparés par le groupe des inspecteurs GMDP de l'EMA en coopération avec le PIC/S. Cette consultation est close, et je n'ai pas trouvé de confirmation d'adoption d'un texte final : vérifiez le statut en vigueur sur le site de la Commission avant de citer la future annexe 11 dans un plan. Point notable du projet d'annexe 22 : il indique ne pas s'appliquer à l'IA générative ni aux grands modèles de langage, qui ne devraient pas être utilisés dans des applications GMP critiques.

Enfin, pour le médicament, la FDA a publié en décembre 2018 une guidance finale *Data Integrity and Compliance With Drug CGMP: Questions and Answers*. C'est elle, et pas le CSA, qui est citée dans les programmes d'inspection des médicaments.

Résumé : le CSA change **comment** vous produisez la preuve. Il ne change pas **quelles** exigences réglementaires s'appliquent à votre système.

## Ce qui bloque, en pratique

Trois pièges, dans l'ordre de fréquence.

**Le CSA comme permis d'alléger sans décision écrite.** Si l'arbitrage n'est pas dans le plan de validation, signé par la Qualité, ce n'est pas du CSA : c'est un trou dans le dossier. La pensée critique se documente, sinon elle n'existe pas en inspection.

**La confusion guide / réglementation.** GAMP 5 et le CSA recommandent. Part 11, Part 820 et l'annexe 11 exigent. Dire « GAMP exige une matrice de traçabilité » affaiblit votre position le jour où quelqu'un vérifie.

**Le mauvais texte invoqué.** Citer une guidance FDA sous Part 820 pour alléger un système de production de médicament dans une usine européenne : l'intention est bonne, la référence ne tient pas. Appuyez-vous sur GAMP 5 et sur votre analyse de risque, et faites valider l'interprétation par votre Qualité.

## Par où commencer, en six semaines

Prenez le prochain projet de taille moyenne, pas le plus critique. Semaines 1 et 2 : écrivez l'usage prévu et l'impact GxP fonction par fonction, et classez chaque fonction en critique ou non critique. Semaine 3 : décidez avec la Qualité, par classe, le niveau de preuve attendu et la part admise de test non scripté, et écrivez-le dans le plan de validation. Semaine 4 : qualifiez le fournisseur et listez ce que vous reprenez de ses preuves. Semaines 5 et 6 : exécutez les tests selon ce découpage, en consignant les tests exploratoires avec le même soin que les scriptés.

À la fin, comparez le volume de documents produits et le nombre d'anomalies trouvées à ceux du projet précédent. C'est cette comparaison, pas le nom de la méthode, qui convaincra votre Qualité la fois suivante.

---

*Benjamin de Bruijne est Digital Technology SME dans un groupe biopharmaceutique belge. Il aide les équipes Labs, Production et Qualité à cadrer et valider leurs projets digitaux en environnement GxP. [Profil et disponibilité](/biopharma/).*
