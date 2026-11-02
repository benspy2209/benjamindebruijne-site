---
title: "IT/OT : cinq questions que la Qualité doit poser à l'IT"
description: "Convergence IT/OT en pharma : inventaire, segmentation, accès privilégiés, données des automates, continuité. Cinq questions et leurs sources."
date: 2026-11-02
rubrique: gxp
lang: fr
tags: [GxP, CSV, IT/OT, cybersécurité, annexe 11]
points:
  - "Les automates sortent souvent de l'inventaire GMP"
  - "L'annexe 11 proportionne les contrôles à la criticité"
  - "Un plan de continuité jamais testé n'est pas un plan"
---

Un automate de production tombe un samedi matin. L'astreinte IT le redémarre, restaure une configuration de la veille, et la Qualité ne l'apprendra qu'à la revue périodique, six mois plus tard.

Rien de malveillant là-dedans : juste une frontière mal tenue entre l'**IT** (serveurs, postes, applications) et l'**OT** (*Operational Technology* : automates programmables, supervision, contrôle de procédé). Ces deux mondes se branchent l'un sur l'autre — un MES qui lit les automates, un historien sur le réseau bureautique, une maintenance à distance — et la Qualité se retrouve responsable de données qu'elle ne sait plus localiser.

## Le cadre existe déjà, et il est plus court qu'on croit

L'annexe 11 d'EudraLex volume 4, *Computerised Systems* (Commission européenne, version en vigueur depuis 2011), s'applique à **toutes les formes de systèmes informatisés** utilisés dans une activité couverte par les GMP. Un automate qui pilote une étape de procédé en fait partie. Quatre de ses points suffisent à cadrer la conversation avec l'IT :

- **§4.3** : tenir à jour une liste de tous les systèmes concernés et de leur fonctionnalité GMP — l'inventaire.
- **§12** : des contrôles physiques et/ou logiques restreignent l'accès, et **leur étendue dépend de la criticité du système**.
- **§9** : l'enregistrement des modifications et suppressions de données GMP — une piste d'audit — doit être envisagé **sur la base d'une analyse de risque**, et la raison d'une modification documentée.
- **§16** : pour les systèmes supportant des procédés critiques, des dispositions doivent assurer la continuité du support de ces procédés en cas de défaillance.

Côté FDA, le 21 CFR Part 11 est une **réglementation**, pas un guide : 11.10(d) limite l'accès aux personnes autorisées, 11.10(g) impose des contrôles d'autorisation, 11.10(e) des pistes d'audit générées par ordinateur et horodatées, conservées au moins aussi longtemps que les enregistrements.

Trois autres documents complètent le tableau, à lire pour ce qu'ils sont. Le **GAMP 5 2e édition** (ISPE, 2022) est un **guide** : il recommande une approche basée sur le risque, mise à jour notamment sur le rôle des prestataires de service. Le **PIC/S PI 041-1**, sur les bonnes pratiques de gestion et d'intégrité des données en environnement GMP/GDP, est entré en vigueur le 1er juillet 2021. Le guide **MHRA de mars 2018 sur l'intégrité des données** la définit comme le degré auquel les données sont complètes, cohérentes, exactes et dignes de confiance — « données » incluant les données brutes.

## Question 1 — « Montrez-moi l'inventaire, et dites-moi où sont les automates »

L'inventaire de l'annexe 11 §4.3 existe presque partout. Ce qu'il contient rarement : les automates intégrés aux équipements.

Une raison historique : le guide de la Commission européenne sur le *Site Master File* demande une description des systèmes informatisés critiques pour les GMP **en excluant les automates spécifiques à un équipement**. Cette exclusion vise un document de présentation du site ; elle n'efface pas l'annexe 11 §4.3. Beaucoup de sites l'ont pourtant lue comme une dispense générale.

La question n'est donc pas « avez-vous un inventaire ? » mais : chaque équipement qui a un écran et une mémoire est-il dans la liste, avec sa fonctionnalité GMP ? Si la réponse est « il est dans la GMAO, pas dans l'inventaire des systèmes », vous avez votre premier écart.

## Question 2 — « Où passe la frontière entre le bureautique et l'atelier ? »

Aucun texte GMP ne vous impose une architecture réseau. L'annexe 11 §12 dit autre chose, et c'est plus utile : l'étendue des contrôles d'accès, physiques et/ou logiques, dépend de la criticité du système. C'est donc à vous de dire quels systèmes sont critiques, et à l'IT de montrer que les contrôles suivent. Côté IT, le cadre technique est la série **IEC/ISA 62443** sur la cybersécurité des systèmes d'automatisation et de contrôle industriels — la FDA en reconnaît une partie comme norme consensuelle pour les dispositifs médicaux. Ce n'est pas un texte GMP, mais un vocabulaire commun.

Trois demandes concrètes : un schéma de ce qui sépare le réseau de production du réseau bureautique ; la liste des flux autorisés à travers cette frontière, avec le besoin métier de chacun ; le traitement des accès de maintenance à distance des fournisseurs — qui ouvre, combien de temps, avec quelle trace.

Cette troisième ligne surprend le plus. L'annexe 11 §3.2 rappelle que la compétence et la fiabilité d'un fournisseur sont des facteurs clés de son choix, et que **le besoin d'un audit se décide sur la base d'une analyse de risque**. Un fournisseur qui garde un accès permanent à un automate GMP est donc un sujet d'analyse de risque, pas une évidence technique.

## Question 3 — « Qui a les accès privilégiés, et comment le prouve-t-on ? »

Sur un îlot de production, les comptes partagés survivent longtemps : un compte « opérateur » sur la supervision, un compte administrateur connu de toute la maintenance, un compte constructeur dont personne ne connaît le mot de passe actuel.

Le Part 11 11.10(d) et 11.10(g) sont clairs : accès limité aux personnes autorisées, contrôles d'autorisation. La FDA précise dans ses guides sur les systèmes électroniques que la réglementation ne prescrit **aucune méthode particulière** de mise en œuvre ; elle recommande de tenir un enregistrement des personnes autorisées et de leurs privilèges, et que chacun travaille sous ses propres identifiants.

La bonne question n'est donc pas « avez-vous supprimé les comptes partagés ? » — parfois l'équipement ne le permet pas. C'est : où est la liste nominative des accès privilégiés, quand a-t-elle été revue, et quelle mesure compensatoire couvre les comptes qu'on ne peut pas supprimer ?

## Question 4 — « Les données des automates : qui les enregistre, qui les relit ? »

Un automate produit des valeurs de procédé. Elles vont souvent dans un historien, parfois dans un MES, parfois nulle part sauf sur un enregistreur papier.

Trois sous-questions, dans cet ordre. Quelle est la donnée brute, au sens du guide MHRA de mars 2018 ? Qui garantit qu'une modification laisse une trace avec sa raison, comme le demande l'annexe 11 §9 au terme d'une analyse de risque ? Et qui relit cette trace, à quelle fréquence, selon quel critère de risque ?

Les deux dernières n'ont parfois pas de réponse native : beaucoup de systèmes de contrôle de procédé n'ont pas de piste d'audit exploitable. Ce n'est pas un motif de panique, c'est un motif d'écrire la mesure compensatoire — revue du rapport de lot, vérification à la seconde personne, verrouillage des paramètres — et sa justification de proportionnalité, à confirmer avec votre Qualité.

## Question 5 — « Si l'îlot tombe un samedi, on fait quoi ? »

L'annexe 11 §16 demande des dispositions assurant la continuité du support des procédés critiques en cas de défaillance. Le §7.2 demande des sauvegardes régulières, et que **l'intégrité, l'exactitude et la capacité de restauration** des sauvegardes soient vérifiées pendant la validation puis surveillées dans le temps.

Deux questions suffisent : quand a-t-on restauré pour de vrai, et sur quel matériel ? Une sauvegarde jamais restaurée est une intention, pas une sauvegarde. Et pour un automate, la restauration inclut la configuration et le programme.

## Ce qui bloque en pratique

**L'OT ne répond pas à l'IT.** Sur beaucoup de sites, les automates appartiennent à la Maintenance ou à l'Ingénierie. Poser les cinq questions à l'IT seul donne cinq réponses partielles : il faut les trois dans la salle, et la Qualité qui tient le crayon.

**L'arrêt coûte cher.** Corriger un défaut d'accès sur un automate suppose souvent une fenêtre d'arrêt. Sans arbitrage de la direction de site, le constat revient à chaque revue périodique sans se refermer. Dire le coût tout de suite évite trois ans de CAPA cosmétiques.

## Par où commencer, en six semaines

Semaines 1 et 2 : récupérer l'inventaire de l'annexe 11 §4.3 et le confronter à la liste des équipements. Produire une liste d'écarts, sans la commenter.

Semaines 3 et 4 : prendre les trois équipements les plus critiques et répondre aux cinq questions pour eux seulement, avec l'IT, l'OT et la Maintenance autour de la table. Une page par équipement.

Semaines 5 et 6 : pour chaque trou, écrire soit la correction, soit la mesure compensatoire et sa justification de proportionnalité. Faire approuver par la Qualité et porter le reste au change control.

Vous n'aurez pas tout couvert. Vous aurez trois équipements documentés, un inventaire qui dit la vérité, et une méthode que l'équipe sait refaire seule. En inspection, ça vaut mieux qu'un plan de quarante pages que personne n'a appliqué.

---

*Benjamin de Bruijne est Digital Technology SME dans un groupe biopharmaceutique belge. Il aide les équipes Labs, Production et Qualité à cadrer et valider leurs projets digitaux en environnement GxP. [Profil et disponibilité](/biopharma/).*
