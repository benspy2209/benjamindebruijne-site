---
title: "Revue périodique d'un système validé : la faire en une demi-journée"
description: "Ce que l'annexe 11 section 11 demande vraiment, les neuf entrées à couvrir, trois pièges et un plan en six semaines pour la première revue."
date: 2026-11-23
rubrique: gxp
lang: fr
tags: [GxP, CSV, Annexe 11, GAMP 5, Revue périodique]
points:
  - "L'annexe 11 liste neuf entrées, et rien de plus"
  - "Une revue n'est ni une revalidation, ni le PQR"
  - "Sans conclusion ni actions, le rapport ne sert à rien"
---

Chaque année, la même ligne tombe dans le plan qualité : revue périodique du système. Et chaque année, la même scène : un classeur de quarante pages, trois semaines de relances par mail, un rapport que personne ne relit et d'où ne sort aucune action.

Je fais ces revues autrement : une demi-journée de préparation, une réunion d'une heure, un rapport de quatre pages. Voici la méthode, et ce que les textes demandent vraiment — beaucoup moins que ce qu'on y met.

## Le cadre existe déjà, et il tient en un paragraphe

L'obligation européenne vient de l'**annexe 11** d'EudraLex volume 4 (*Computerised Systems*), révision 1 de janvier 2011, entrée en application le 30 juin 2011 : c'est le texte en vigueur. Sa **section 11, « Periodic evaluation »**, demande que les systèmes informatisés soient évalués périodiquement pour confirmer qu'ils **restent dans un état validé** et conformes aux GMP (*Good Manufacturing Practice*, bonnes pratiques de fabrication). Elle précise ce que ces évaluations doivent inclure, le cas échéant : l'étendue actuelle des fonctionnalités, les enregistrements de déviations, les incidents, les problèmes, l'historique des mises à jour, la performance, la fiabilité, la sécurité et les rapports de statut de validation.

Neuf entrées, c'est tout : pas de modèle imposé, pas de fréquence chiffrée, pas de volume de pages.

Côté américain, il n'existe pas d'exigence nommée « revue périodique », mais le **21 CFR 211.68(a)** est une réglementation, pas un guide : il demande que les équipements automatiques, mécaniques ou électroniques — ordinateurs inclus — soient **calibrés, inspectés ou vérifiés de façon routinière selon un programme écrit** conçu pour assurer leur bon fonctionnement, et que les enregistrements écrits de ces vérifications soient conservés. Le 211.68(b) ajoute des programmes assurant l'exactitude et la sécurité des entrées, des sorties et des données.

Les guides, eux, recommandent : ils n'exigent pas. **GAMP 5** 2e édition (ISPE, 2022) consacre une annexe à la revue périodique (annexe O8) et la rattache explicitement à la confirmation de l'état validé ; il demande aussi de **réexaminer les risques** à cette occasion, pour vérifier que les contrôles restent efficaces. Le **PIC/S PI 041-1** (*Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments*, adopté le 1er juin 2021, en vigueur depuis le 1er juillet 2021) comporte une section d'évaluation périodique des systèmes : l'inspecteur y vérifie que les systèmes ont été revus périodiquement et maintenus dans leur état validé.

Un point de calendrier. La Commission européenne a soumis à consultation publique, du 7 juillet 2025 au 7 octobre 2025, une révision du chapitre 4 et de l'annexe 11, plus une nouvelle annexe 22 sur l'intelligence artificielle. La page de consultation annonce des exigences renforcées sur la gestion du cycle de vie, avec application de la gestion du risque qualité à toutes les étapes, et sur l'intégrité des données, les pistes d'audit et la sécurité. La consultation est close et aucune date d'adoption n'y est publiée : je ne construis aucune procédure sur ce projet, et le statut en vigueur se vérifie sur les pages EudraLex de la Commission.

## Ce que la revue périodique n'est pas

Trois confusions coûtent des semaines.

**Ce n'est pas une revalidation.** La revue constate : elle dit si le système est resté dans son état validé. Si elle trouve un écart, elle ouvre une action, qui passera par le contrôle des changements — l'annexe 11 section 10 demande que toute modification d'un système informatisé, configuration comprise, soit faite de façon contrôlée selon une procédure définie. Re-tester, c'est la conséquence possible, jamais le point de départ.

**Ce n'est pas la revue qualité produit.** Le chapitre 1 d'EudraLex volume 4 (révision 3, en application depuis le 31 janvier 2013) demande en 1.10 des revues qualité régulières, périodiques ou glissantes, de tous les médicaments autorisés. L'objet est le produit, pas le système. Les deux revues se nourrissent, elles ne se remplacent pas.

**Ce n'est pas la revue des pistes d'audit.** La MHRA, dans son *'GXP' Data Integrity Guidance and Definitions* révision 1 de mars 2018, demande que la revue de routine des données comporte une revue documentée des pistes d'audit lorsqu'une analyse de risque le détermine, et admet qu'elle se limite aux entrées pertinentes pour les GxP. C'est un geste de routine, au rythme des données, pas une case annuelle. La revue périodique vérifie qu'il a bien lieu ; elle ne le remplace pas.

## La revue en neuf entrées

Je reprends la liste de la section 11 telle quelle, une question par entrée. Chacune se remplit en quelques minutes quand les données existent déjà ailleurs.

1. **Étendue actuelle des fonctionnalités.** Ce qui est en service correspond-il au périmètre validé ? Un module activé sans dossier, c'est le premier écart à chercher.
2. **Déviations.** Combien de déviations impliquant ce système depuis la dernière revue, et combien sont clôturées ?
3. **Incidents.** Les tickets de l'outil de gestion des services, filtrés sur le système : volume, criticité, temps de résolution.
4. **Problèmes.** Les causes récurrentes derrière ces incidents : un même symptôme trois fois est un problème, pas trois incidents.
5. **Historique des mises à jour.** Les versions installées, chacune avec son changement approuvé et son niveau de re-test.
6. **Performance.** Temps de réponse, volumes, capacité restante. Une base qui atteint sa limite est un écart futur.
7. **Fiabilité.** Indisponibilités, sauvegardes, restaurations : une restauration testée vaut mieux que dix sauvegardes jamais relues.
8. **Sécurité.** Revue des comptes et des droits, départs effectivement retirés, comptes génériques et partagés, correctifs appliqués.
9. **Rapports de statut de validation.** Le dossier est-il à jour : plan, matrice de traçabilité, rapport, et la liste des documents modifiés depuis.

J'ajoute une dixième ligne, qui vient de GAMP 5 : **les risques**. L'évaluation de risque du système est-elle encore vraie, et ses contrôles sont-ils toujours efficaces ? Un changement d'usage suffit à la périmer.

## Dimensionner la fréquence par le risque

Aucun texte ne donne de fréquence : c'est à la procédure interne de la fixer, sur le critère de l'impact GxP et de la criticité. En pratique, annuelle pour un système à fort impact qui change souvent ; tous les deux ou trois ans pour un système stable, sans changement depuis la dernière revue. Ce qui compte en inspection, c'est que la règle soit écrite, justifiée par le risque et respectée : une fréquence tenue vaut mieux qu'une fréquence ambitieuse jamais honorée. L'intervalle retenu est à confirmer avec votre Qualité.

## Ce qui bloque en pratique

**Le rapport sans conclusion.** Quarante pages d'annexes et aucune phrase qui dit « le système reste dans un état validé », avec ou sans réserves. Écrivez la conclusion d'abord, en trois lignes, puis les actions avec un responsable et une date. Le reste est de la pièce jointe.

**Les données qu'on n'a pas.** Si l'outil de gestion des services ne sait pas filtrer les tickets par système, ou si le registre des changements ne le nomme pas, la revue devient une enquête. Le correctif est en amont : un identifiant de système dans chaque enregistrement, un demi-jour de paramétrage qui rend les revues suivantes triviales.

**La revue à une seule voix.** Un informaticien qui remplit seul neuf cases produit un document, pas une revue. Il faut le propriétaire métier pour l'étendue des fonctionnalités et les usages réels, et la Qualité pour les déviations et l'état du dossier. Une heure ensemble, pas trois semaines de mails.

## Par où commencer : six semaines

**Semaines 1 et 2.** Choisissez le système dont la revue est le plus en retard. Écrivez le modèle de rapport : page de garde, conclusion, les neuf entrées, les risques, le tableau d'actions. Quatre pages maximum.

**Semaines 3 et 4.** Demandez trois extractions : tickets filtrés sur le système, changements approuvés, déviations, et confiez la revue des comptes au propriétaire du système. Rien n'est rédigé à ce stade.

**Semaine 5.** Une heure de réunion avec le propriétaire métier, l'IT et la Qualité. Vous remplissez les entrées en direct et vous décidez la conclusion dans la salle.

**Semaine 6.** Rapport signé, actions ouvertes dans le système qualité, date de la prochaine revue fixée selon la règle de fréquence. Puis vous dupliquez le modèle sur le système suivant.

La première revue coûte six semaines : il faut créer le modèle et brancher les extractions. La deuxième coûte une demi-journée. C'est tout l'intérêt de l'exercice : passer d'un événement redouté chaque année à un geste de routine qui, le jour de l'inspection, se présente tout seul.

---

*Benjamin de Bruijne est Digital Technology SME dans un groupe biopharmaceutique belge. Il aide les équipes Labs, Production et Qualité à cadrer et valider leurs projets digitaux en environnement GxP. [Profil et disponibilité](/biopharma/).*
