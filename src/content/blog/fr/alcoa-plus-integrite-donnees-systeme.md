---
title: "ALCOA+ au-delà du slogan : les neuf lettres sur un vrai système"
description: "Appliquer ALCOA+ lettre par lettre à un système réel : ce que disent MHRA, PIC/S, OMS et l'annexe 11, trois pièges, un plan en six semaines."
date: 2026-11-16
rubrique: gxp
lang: fr
tags: [GxP, CSV, Intégrité des données, ALCOA+, Annexe 11]
points:
  - "ALCOA vient des guides, pas des textes réglementaires"
  - "Les quatre lettres du « + » tombent après la mise en service"
  - "Le projet de révision parle d'ALCOA++ : traçable en plus"
---

« On est ALCOA+. » La phrase revient à chaque revue de projet, et presque personne ne sait la démontrer sur un système précis. Prenez un seul logiciel et posez la question lettre par lettre : le slogan se décompose en neuf questions concrètes, dont quatre que la plupart des dossiers de validation ne traitent jamais.

Je fais cet exercice sur des systèmes déjà en service : une demi-journée, aucun outil. Voici comment je le mène.

## Le cadre existe déjà, mais pas là où on croit

Première chose, et elle change la façon de parler en réunion : **ALCOA n'est pas une exigence réglementaire**. L'acronyme vient des guides, pas des textes.

La **MHRA** britannique en donne la version de référence dans son *'GXP' Data Integrity Guidance and Definitions*, révision 1 de mars 2018 : **A**ttributable, **L**egible, **C**ontemporaneous, **O**riginal, **A**ccurate — attribuable, lisible, contemporain, original, exact. Le même document définit l'intégrité des données comme le degré auquel les données sont complètes, cohérentes, exactes, dignes de confiance et fiables, et auquel ces caractéristiques sont maintenues **sur tout le cycle de vie de la donnée**. Il précise que, dans toutes ses définitions, « donnée » inclut les données brutes. C'est un guide : il recommande. La version GMP de 2015 est retirée.

Le **PIC/S** a publié PI 041-1, *Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments*, adopté le 1er juin 2021 et entré en vigueur le 1er juillet 2021. Son objet déclaré est de décrire la position de l'inspecteur et d'harmoniser l'inspection et le reporting sur la gestion et l'intégrité des données ; il est classé côté PIC/S parmi les documents destinés aux inspecteurs. Il reprend ALCOA et explique le « + » comme une insistance supplémentaire sur quatre attributs — complet, cohérent, durable, disponible — considérés comme déjà implicites dans ALCOA.

L'**OMS** a adopté en 2021 une *Guideline on data integrity* (Technical Report Series n° 1033, annexe 4), qui organise la gouvernance des données autour d'ALCOA+ et introduit l'évaluation de risque d'intégrité des données (**DIRA**, *data integrity risk assessment*).

La **FDA**, dans *Data Integrity and Compliance With Drug CGMP: Questions and Answers* (décembre 2018, explicitement non contraignant), définit l'intégrité des données comme la complétude, la cohérence et l'exactitude, décrit les principes ALCOA, et recommande de restreindre par des moyens techniques la capacité de modifier spécifications, paramètres de procédé et données.

Ce qui **exige**, en revanche, se trouve ailleurs. Le **21 CFR Part 11** est une réglementation : son §11.10(e) impose des pistes d'audit sécurisées, générées par ordinateur et horodatées, enregistrant indépendamment la date et l'heure des saisies et des actions qui créent, modifient ou suppriment un enregistrement électronique ; les modifications **ne doivent pas masquer l'information précédemment enregistrée** ; la piste est conservée au moins aussi longtemps que les enregistrements concernés et reste disponible pour revue et copie par la FDA. Côté européen, l'**annexe 11** d'EudraLex volume 4 (*Computerised Systems*, révision 1 de 2011, texte en vigueur) demande à sa section 9 un enregistrement de tous les changements et suppressions pertinents pour les GMP, la documentation du motif en cas de modification ou de suppression de données GxP, et la revue de ces pistes d'audit.

Ni l'annexe 11 ni le Part 11 ne contiennent le mot ALCOA. L'acronyme est un aide-mémoire pour couvrir des obligations écrites ailleurs. Dire « on est ALCOA+ » ne répond donc à aucune exigence ; répondre lettre par lettre, oui.

## Un détail de vocabulaire qui va bouger

La Commission européenne a soumis à consultation publique, du 7 juillet 2025 au 7 octobre 2025, une révision du chapitre 4 (Documentation) et de l'annexe 11, plus une nouvelle annexe 22 sur l'intelligence artificielle. Dans le projet de chapitre 4, l'acronyme n'est plus ALCOA+ mais **ALCOA++**, la lettre supplémentaire correspondant à **traçable**.

Projet dont la consultation est close, pas texte adopté : je ne construis rien dessus. Mais le signal est clair, et il ne coûte rien d'ajouter dès maintenant une ligne « traçable » à votre grille. Le statut en vigueur se vérifie sur les pages EudraLex de la Commission.

## Les cinq lettres de base, sur un système réel

Choisissez un système : un **LIMS** (gestion de l'information de laboratoire), une balance connectée, un **MES** (pilotage de production). Pour chaque lettre, une question et une preuve attendue.

1. **Attribuable.** Qui a produit cette donnée, et comment le sait-on ? Preuve : comptes nominatifs, pas de compte partagé « LABO1 », liste des comptes actifs rapprochée du registre des formations. Un compte générique casse la lettre A à lui seul.
2. **Lisible.** La donnée est-elle lisible, et le restera-t-elle ? Preuve : format d'export documenté, et un export réellement relu. Un fichier qu'on n'ouvre qu'avec la version 2014 d'un logiciel absent du parc n'est plus lisible.
3. **Contemporain.** La donnée est-elle enregistrée au moment de l'action ? Preuve : horloge synchronisée sur une source de temps maîtrisée, fuseau documenté, écart mesuré entre l'heure de l'opération et l'heure d'enregistrement. C'est le test que personne ne fait et qui tombe en inspection.
4. **Original.** Où est la donnée brute, et qu'est-ce qui en est une copie ? Preuve : une phrase écrite désignant l'enregistrement original de ce système — base de données, fichier instrument, impression — et, s'il s'agit d'une copie certifiée conforme, la procédure qui l'a produite.
5. **Exact.** Qu'est-ce qui garantit l'exactitude ? Preuve : contrôles de saisie, vérification des transferts entre systèmes, étalonnage des instruments, piste d'audit revue. C'est ici que le §11.10(e) et la section 9 de l'annexe 11 se rejoignent.

## Le « + » : les quatre lettres qui tombent après la mise en service

Les cinq premières se traitent pendant le projet. Les quatre suivantes se dégradent ensuite, en silence, faute de propriétaire nommé.

6. **Complet.** Tous les essais sont-ils là, y compris ceux qu'on n'aime pas ? Preuve : impossibilité technique de supprimer sans trace, revue des suppressions et des réinjections. Un système qui efface un résultat sans motif documenté ne tient pas la section 9 de l'annexe 11.
7. **Cohérent.** La même donnée dit-elle la même chose partout ? Preuve : un rapprochement entre le système source, l'entrepôt de données et le rapport final, sur un lot pris au hasard. Les écarts viennent presque toujours d'une interface mal cadrée.
8. **Durable.** La donnée survivra-t-elle à sa durée de conservation ? Preuve : une restauration réellement testée, pas une sauvegarde réellement planifiée. Seule la première est une preuve.
9. **Disponible.** Peut-on la produire sur demande, pendant toute la conservation ? Preuve : un délai mesuré pour sortir une donnée de l'année précédente. Le Part 11 parle de disponibilité pour revue et copie par la FDA : si la réponse est « il faut rappeler l'éditeur », ce n'est pas disponible.

## Ce qui bloque en pratique

**Personne n'est propriétaire des quatre dernières lettres.** Le projet se termine, l'équipe se disperse, et complet-cohérent-durable-disponible n'appartiennent plus à personne. Nommez un propriétaire de données par système, dans la procédure.

**La revue des pistes d'audit est théorique.** Écrite dans la procédure, pas faite — ou faite sur tout, donc sur rien. Proportionnez : ce qu'on cherche, c'est les suppressions, les modifications de résultats, les changements d'heure système et les connexions avec des comptes génériques.

**Le fournisseur devient l'angle mort.** En SaaS, les lettres 8 et 9 dépendent d'un tiers et de son calendrier de versions. Cela s'évalue à la qualification du fournisseur et s'écrit dans l'accord qualité — pas en découvrant, après une restauration, que la rétention contractuelle était de 90 jours.

## Par où commencer : six semaines

**Semaines 1-2.** Un seul système, déjà en service. Les neuf lettres en neuf lignes, et pour chacune : la preuve existante, ou « rien ». N'améliorez rien, constatez.

**Semaines 3-4.** Traitez d'abord les lettres sans preuve sur les données à fort impact GxP. Une lacune documentée et évaluée vaut mieux qu'une case cochée.

**Semaine 5.** Testez deux choses pour de vrai : une restauration, et un délai de production de donnée ancienne. Ce sont les deux qui changent un avis.

**Semaine 6.** Ajoutez la grille à la revue périodique et nommez le propriétaire des données. Puis refaites l'exercice sur un deuxième système : la deuxième fois prend deux heures.

---

*Benjamin de Bruijne est Digital Technology SME dans un groupe biopharmaceutique belge. Il aide les équipes Labs, Production et Qualité à cadrer et valider leurs projets digitaux en environnement GxP. [Profil et disponibilité](/biopharma/).*
