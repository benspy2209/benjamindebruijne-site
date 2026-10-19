---
title: "Un LLM via API en GxP : figer, qualifier, journaliser"
description: "Utiliser un LLM via API dans un système GxP : épingler la version, qualifier le fournisseur, journaliser les appels, revoir dans le temps."
date: 2026-10-19
rubrique: gxp
lang: fr
tags: [GxP, CSV, GAMP 5, AI, LLM]
points:
  - "Le fournisseur du modèle est un fournisseur : qualifiez-le"
  - "Un modèle non épinglé, c'est un système qui bouge tout seul"
  - "On teste l'usage prévu, jamais le modèle en général"
---

Un chef de projet me montre une application qui prépare des résumés de rapports. Elle marche, la Qualité la veut, et elle appelle un **LLM** — *large language model*, grand modèle de langage — hébergé chez un fournisseur, par une **API** (le point d'entrée par lequel un logiciel en appelle un autre).

Puis la question tombe : comment valider un système dont on ne maîtrise ni le modèle, ni le moment où il change ? Elle paraît nouvelle ; elle ne l'est pas. On traite depuis longtemps des composants qu'on n'a pas écrits. Ce qui change, c'est la vitesse à laquelle celui-ci bouge.

## Le vrai problème n'est pas le modèle, c'est le mouvement

Un système validé repose sur une hypothèse simple : il ne change pas tout seul. Vous le spécifiez, vous le testez, vous le figez, et toute évolution passe par une gestion du changement. C'est cette hypothèse qu'un appel d'API vers un modèle distant met en cause.

L'appel se fait sur un identifiant de modèle. Si cet identifiant pointe vers « la dernière version », le comportement peut évoluer sans action de votre part, sans demande de changement, sans test. Pour la validation, vous n'avez plus un système : vous avez un abonnement.

## Le cadre existe déjà

Aucun texte ne dit « voici comment valider un LLM ». Plusieurs disent déjà l'essentiel.

L'**annexe 11 d'EudraLex volume 4** (Commission européenne, révision de janvier 2011) est le texte en vigueur pour les systèmes informatisés en GMP européennes. Trois de ses exigences portent notre sujet. Les pistes d'audit doivent être disponibles, convertibles dans une forme intelligible et revues régulièrement. Tout changement apporté au système, configuration comprise, ne doit être fait que de manière contrôlée, selon une procédure définie. Et les systèmes doivent être évalués périodiquement pour confirmer qu'ils restent dans un état validé et conformes aux GMP.

Le **21 CFR Part 11** de la FDA impose en 11.10(a) la validation des systèmes qui créent, modifient ou maintiennent des enregistrements électroniques, et en 11.10(e) des pistes d'audit sécurisées, générées par le système et horodatées, qui enregistrent indépendamment les créations, modifications et suppressions. La guidance FDA *Part 11 — Scope and Application* (2003) annonce une discrétion d'application sur certaines de ces exigences, tout en rappelant que les réglementations sous-jacentes restent entières : ne construisez pas un dossier sur cette discrétion.

Les guides, eux, recommandent — ils n'exigent pas, et la distinction compte en inspection. **GAMP 5, 2e édition** (ISPE, 29 juillet 2022) contient une annexe M2, *Supplier Assessment* : raisons d'évaluer un fournisseur, procédures d'audit, ré-évaluation, certification. ISPE a publié en juillet 2025 un guide dédié, l'**ISPE GAMP Guide: Artificial Intelligence**, à utiliser avec GAMP 5 2e édition.

Côté autorités, l'**EMA** a publié le 30 septembre 2024 son *Reflection paper on the use of artificial intelligence in the lifecycle of medicines* (EMA/CHMP/CVMP/83833/2023, projet de juillet 2023) : des principes, qu'elle présente comme le reflet de son expérience actuelle, pas des règles contraignantes. La **FDA** a mis en consultation en janvier 2025 un projet de guidance (dossier FDA-2024-D-4689) qui évalue la crédibilité d'un modèle selon le risque et un **contexte d'usage** précis ; à ma vérification, il était toujours en projet. Et l'article 4 du **règlement (UE) 2024/1689** (AI Act), sur la maîtrise de l'IA par le personnel, s'applique depuis le 2 février 2025, modifié depuis par le règlement (UE) 2026/1744 : lisez la version consolidée du 27 juillet 2026 sur eur-lex.europa.eu. Le classement de votre usage au regard de l'AI Act est un point d'interprétation, à confirmer avec votre Qualité et votre conseil.

Une précision de prudence : la Commission a mené une consultation sur une révision de l'annexe 11, du chapitre 4 et sur une nouvelle annexe 22. Le projet ajoute une section de gestion des fournisseurs rappelant que l'utilisateur réglementé reste responsable même lorsqu'il s'appuie sur la qualification faite par un fournisseur, un prestataire ou son IT interne. Ce n'est pas adopté : la page EudraLex liste toujours l'annexe 11 de 2011 comme texte en vigueur.

## La méthode en six étapes

1. **Décrire l'usage prévu, pas l'outil.** « Un LLM » n'est pas un périmètre. « Proposer un projet de résumé, relu et approuvé par un opérateur qualifié avant enregistrement » en est un. C'est cette phrase qui détermine l'impact GxP et l'effort de test — le contexte d'usage du projet de la FDA.

2. **Épingler la version, et la configuration avec.** Un identifiant de modèle figé, écrit en configuration et non en dur dans le code. Mais aussi tout ce qui fait le comportement : le *prompt* (la consigne envoyée au modèle) et sa version, les paramètres d'appel, la récupération des documents s'il y en a une. Si vous ne pouvez pas rejouer un appel d'il y a six mois, rien n'est figé.

3. **Qualifier le fournisseur comme un fournisseur.** Terrain connu : évaluation documentaire proportionnée au risque, dans l'esprit de l'annexe M2 de GAMP 5. Les questions utiles : quelles versions sont figées et pour combien de temps, quel préavis en cas de retrait, où les données sont traitées, sont-elles utilisées pour entraîner le modèle, quelle documentation de qualité est fournie. L'annexe 11 demande déjà des accords formels avec les tiers.

4. **Constituer un jeu de cas, et tester l'usage.** Pas la performance du modèle en général : votre usage. Trente à cinquante cas réels, avec la réponse attendue définie par un métier, et des cas limites choisis exprès : document illisible, langue inattendue, information absente. Ce jeu de cas est un livrable de validation et la référence des comparaisons futures.

5. **Journaliser ce qui est contrôlable.** Vous ne journalisez pas l'intérieur du modèle, mais votre système : qui a demandé quoi, quand, sur quel document, avec quelle version de modèle et de consigne, quelle sortie a été proposée, et surtout qui a revu, modifié ou accepté. C'est cette dernière partie qui porte la piste d'audit au sens de l'annexe 11 et du 11.10(e), et elle se conserve aussi longtemps que les données concernées.

6. **Traiter le changement de modèle comme un changement.** Le fournisseur annonce le retrait d'une version : c'est une demande de changement, avec analyse d'impact et rejeu du jeu de cas avant mise en production. La revue périodique de l'annexe 11 sert de filet : les versions en production sont-elles celles du dossier, les pistes d'audit ont-elles été revues, le taux d'erreur a-t-il dérivé.

## Ce qui bloque en pratique

**Le périmètre qui s'étend après la validation.** Vous validez un usage de résumé, et six semaines plus tard quelqu'un pose au même outil des questions de décision. Techniquement, rien n'a changé ; pour la validation, c'est un autre système. La seule défense est une description d'usage assez précise pour qu'on voie qu'on en sort.

**La confusion entre fiabilité du service et exactitude des réponses.** Un fournisseur peut documenter une excellente disponibilité et dire très peu de chose sur la justesse des sorties dans votre contexte. L'exactitude, personne ne la certifiera : elle se mesure chez vous, sur votre jeu de cas.

**La revue humaine qui devient un clic.** Un humain dans la boucle n'est un contrôle que s'il a les moyens de dire non : le temps de lire, l'accès à la source, et une trace distincte entre « accepté sans modification » et « corrigé ». Sans cette distinction, vous ne pourrez ni démontrer que la revue a eu lieu, ni mesurer la dérive.

## Par où commencer

Six semaines suffisent pour un premier dossier propre, à condition de choisir un usage étroit. Semaines 1 et 2 : l'usage prévu en un paragraphe, avec l'impact GxP et la décision que la sortie influence, relu par la Qualité avant toute ligne de code. Semaine 3 : la qualification fournisseur, sur documents — et acceptez que certaines réponses soient décevantes, c'est une donnée d'entrée de l'analyse de risque. Semaine 4 : le jeu de cas, construit par les métiers. Semaine 5 : épinglez, journalisez, rejouez, documentez les écarts. Semaine 6 : gestion du changement et revue périodique, écrites avant la mise en production.

Ce qui reste ensuite est un travail de routine, et c'est le signe que ça a marché : un système qui ne bouge que quand vous l'avez décidé.

---

*Benjamin de Bruijne est Digital Technology SME dans un groupe biopharmaceutique belge. Il aide les équipes Labs, Production et Qualité à cadrer et valider leurs projets digitaux en environnement GxP. [Profil et disponibilité](/biopharma/).*
