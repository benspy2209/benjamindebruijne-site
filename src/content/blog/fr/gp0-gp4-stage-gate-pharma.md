---
title: "GP0 à GP4 : les portes de décision d'un projet pharma"
description: "Un projet de système informatisé en pharma avance par portes. Ce qu'on attend à GP0, GP1, GP2, GP3 et GP4, les livrables et les erreurs de début."
date: 2026-10-15
rubrique: gxp
lang: fr
tags: [GxP, CSV, GAMP 5, stage-gate, URS]
points:
  - "Une porte n'est pas une réunion : c'est une décision tracée"
  - "Les livrables de validation se préparent dès GP1, pas à GP3"
  - "Une URS faible coûte plus cher que tous les tests"
---

Un chef de projet arrive sur un site pharma, récupère un projet de système informatisé, et découvre un suivi où tout se joue sur cinq cases : GP0, GP1, GP2, GP3, GP4. Personne ne lui explique ce qu'il y a derrière.

Trois mois plus tard, il comprend qu'une porte ratée ne se rattrape pas en accélérant. C'est le sujet le plus simple à expliquer et le plus mal transmis. Voici ce que j'aurais voulu lire au début.

## Ce qu'est une porte, et ce qu'elle n'est pas

GP se lit « gate passage », passage de porte. GP0 à GP4 découpent le projet en phases séparées par des décisions formelles. Les appellations changent d'un groupe à l'autre : GP ici, stage-gate ailleurs, DG0 à DG4 chez le voisin. La logique ne change pas : à chaque porte, une instance de décision autorise — ou refuse — le passage à la phase suivante, sur la base de livrables approuvés.

Une porte n'est donc pas une réunion d'avancement. C'est une décision tracée : un périmètre figé, un budget engagé, des approbations nommées. Concrètement, si vous sortez d'un comité avec « on continue, on verra pour les specs », vous n'avez pas passé de porte. Vous avez perdu une réunion.

## Le cadre existe déjà

Point important quand on démarre : ce découpage n'est pas une invention maison. Il traduit en gouvernance ce que les textes demandent déjà.

L'**annexe 11 d'EudraLex volume 4** (Commission européenne, révision de janvier 2011) demande que la documentation de validation couvre les étapes pertinentes du cycle de vie, et que le fabricant soit capable de justifier ses standards, protocoles, critères d'acceptation et enregistrements sur la base d'une analyse de risque (§4.1). Le même paragraphe 4 demande un inventaire à jour des systèmes (§4.3) et une **URS** — *User Requirements Specification*, spécification des besoins utilisateurs — qui décrit les fonctions requises du système, s'appuie sur une analyse de risque documentée et sur l'impact GMP, et reste traçable tout au long du cycle de vie (§4.4). Son paragraphe 3 traite les fournisseurs : accords formels avec tout tiers qui fournit, configure, valide, maintient ou héberge le système (§3.1), audit décidé sur la base d'une analyse de risque (§3.2), et revue par l'utilisateur réglementé de la documentation fournie par le fournisseur au regard de ses propres exigences (§3.3).

L'**annexe 15** (Qualification et validation, même volume 4, version révisée de 2015) couvre le cycle depuis la rédaction de l'URS jusqu'au retrait de l'installation, et fait de l'URS un point de référence pendant toute la qualification. Elle définit la **DQ** (*Design Qualification*, qualification de la conception) comme la vérification documentée que la conception proposée convient à l'usage prévu, et précise que les exigences de l'URS doivent être vérifiées à ce stade. L'**IQ** (*Installation Qualification*) vérifie que l'installé est conforme à la conception approuvée ; l'**OQ** (*Operational Qualification*) qu'il fonctionne comme prévu sur les plages d'exploitation attendues.

Du côté américain, le **21 CFR Part 11** de la FDA impose en 11.10(a) la validation des systèmes qui créent, modifient ou maintiennent des enregistrements électroniques, pour garantir exactitude, fiabilité, performance conforme à l'usage prévu et capacité à détecter les enregistrements invalides ou altérés — formulation reprise dans la guidance FDA *General Principles of Software Validation*.

Enfin **GAMP 5, 2e édition** (ISPE, 2022) est un **guide** : il recommande, il n'exige pas. Il propose un cycle de vie où spécification et vérification se répondent, et précise que cette approche n'est pas linéaire par nature — elle accepte les méthodes itératives et incrémentales. Les activités du cycle de vie sont à dimensionner selon l'impact GxP, la complexité et la nouveauté du système.

Une précision d'actualité, à manier avec prudence : la Commission européenne a mené une consultation des parties prenantes sur une révision de l'annexe 11 et sur une nouvelle annexe 22. Je n'ai pas de confirmation d'adoption. Travaillez avec le texte de 2011 et vérifiez le statut en vigueur sur health.ec.europa.eu avant d'écrire un plan de validation.

## Les cinq portes, ce qu'on y attend

1. **GP0 — l'idée est recevable.** On ne parle pas encore de solution. On décrit le problème métier, le périmètre pressenti, l'impact GxP probable, un ordre de grandeur de coût et le sponsor. Ce qui se décide : on investit du temps d'analyse, ou non.
2. **GP1 — le besoin est écrit, la solution est choisie.** C'est la porte la plus structurante. Livrables typiques : charte de projet, URS approuvée par le métier, analyse d'impact GxP et évaluation des risques, évaluation du fournisseur, stratégie de validation. Un conseil : c'est ici que l'URS se gagne, parce que tout le reste en découle, y compris les tests que vous exécuterez dix-huit mois plus tard.
3. **GP2 — la conception est figée, la validation est planifiée.** Spécifications fonctionnelles et de configuration, plan de validation, matrice de traçabilité initiale (URS vers spécifications vers tests), DQ, plan de migration des données si reprise, plan de formation. Ce qui se décide : on construit sur cette conception.
4. **GP3 — le système est construit et vérifié.** IQ, OQ, et **PQ** (*Performance Qualification*) quand le procédé le justifie, rapports de tests, écarts formellement traités, procédures d'exploitation, traçabilité complète. Ce qui se décide : la mise en service.
5. **GP4 — le projet se ferme, le système vit.** Rapport de validation, transfert à l'exploitation, inscription à l'inventaire des systèmes, bascule en contrôle des changements et en revue périodique, bilan du projet. Une porte souvent sautée, et c'est celle qui coûte en inspection.

## Ce qui bloque en pratique

**La validation découverte à GP3.** Le piège classique : l'équipe construit, puis cherche qui va rédiger les protocoles. À ce stade, la traçabilité se reconstitue à l'envers, et ça se voit. La validation est un fil qui part de GP1.

**L'URS écrite par l'IT, ou recopiée du fournisseur.** L'annexe 11 §4.4 attend des exigences utilisateurs risquées et traçables, et son §3.3 demande une revue des documents fournisseur au regard de vos exigences. Une URS que le métier n'a pas relue ligne à ligne produit des exigences non testables, donc des tests orphelins.

**La porte transformée en formalité.** Quand les livrables arrivent la veille, personne ne lit, tout le monde signe. Vous gagnez une semaine et vous perdez le filet. Mieux vaut décaler la porte de dix jours que l'ouvrir à vide.

## Par où commencer, en six semaines

Semaines 1 et 2 : écrivez sur une page, pour votre projet, ce qui est attendu à chaque porte dans votre organisation, et faites valider cette page par la Qualité. Demandez les gabarits réels, pas la théorie.

Semaines 3 et 4 : prenez l'URS existante et testez-la. Chaque exigence est-elle vérifiable par un test ? Est-elle rattachée à un risque et à un impact GxP ? Si la réponse est non pour plus d'un tiers des lignes, votre vrai sujet n'est pas le planning.

Semaines 5 et 6 : ouvrez la matrice de traçabilité, même vide, même dans un tableur. Deux colonnes suffisent pour commencer : exigence, et comment on la vérifiera. C'est le document qui vous dira, à chaque porte, si vous êtes vraiment prêt.

Le reste est de la discipline. Une porte bien préparée est une réunion courte.

---

*Benjamin de Bruijne est Digital Technology SME dans un groupe biopharmaceutique belge. Il aide les équipes Labs, Production et Qualité à cadrer et valider leurs projets digitaux en environnement GxP. [Profil et disponibilité](/biopharma/).*
