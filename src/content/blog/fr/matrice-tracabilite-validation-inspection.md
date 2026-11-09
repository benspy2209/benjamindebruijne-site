---
title: "La matrice de traçabilité : l'outil qui tient en inspection"
description: "Construire une matrice de traçabilité qui relie besoins, conception et tests : ce que dit l'annexe 11, quatre erreurs classiques, un gabarit minimal."
date: 2026-11-09
rubrique: gxp
lang: fr
tags: [GxP, CSV, GAMP 5, Annexe 11, Traçabilité]
points:
  - "L'annexe 11 veut des exigences traçables sur tout le cycle"
  - "Une exigence non testable n'est pas une exigence"
  - "La matrice meurt au premier change control oublié"
---

Un inspecteur ouvre votre dossier de validation, prend une exigence au hasard dans la spécification des besoins et demande : « Montrez-moi le test qui prouve ça. » Si la réponse prend plus de deux minutes, le problème n'est pas le test : c'est la matrice de traçabilité.

C'est le livrable le plus sous-estimé d'un dossier de **CSV** (*Computerised System Validation* : validation des systèmes informatisés). On la produit souvent à la fin, sous Excel, pour cocher une case du plan de validation. Elle devrait être l'épine dorsale du projet, parce qu'elle est le seul document qui répond à la vraie question de l'inspection : *ce que vous avez demandé a-t-il été conçu, puis vérifié ?*

## Le cadre existe déjà, et il tient en trois lignes

L'annexe 11 d'EudraLex volume 4, *Computerised Systems* (Commission européenne, révision 1 de 2011, texte en vigueur), ne contient pas le mot « matrice ». Elle contient l'obligation qui la rend nécessaire : dans sa section sur la validation, elle demande que la documentation et les rapports de validation couvrent les étapes pertinentes du cycle de vie, et que les **exigences utilisateurs soient traçables sur tout le cycle de vie**. Une exigence écrite dans un **URS** (*User Requirements Specification* : spécification des besoins utilisateurs) et qu'on ne retrouve nulle part ensuite est un écart, pas un détail.

L'annexe 15, *Qualification et validation* (Commission européenne, version 2015), dit la même chose autrement : l'URS est un point de référence pendant tout le cycle de vie de la validation.

Côté américain, le 21 CFR Part 11 est une **réglementation**, pas un guide. Elle n'impose pas de matrice non plus, mais elle impose ce qui la nourrit : 11.10(a) la validation des systèmes pour garantir l'exactitude, la fiabilité et la performance conforme à l'usage prévu ; 11.10(k) des contrôles sur la documentation du système, avec des procédures de révision et de contrôle des modifications qui maintiennent une piste d'audit du développement et des modifications de cette documentation.

Le **GAMP 5 2e édition** (ISPE, 2022) est un **guide** : il recommande, il n'exige pas. Il reprend le cadre de la première édition et son approche de gestion du risque alignée sur ICH Q9, et son chapitre sur le cycle de vie traite explicitement la spécification et la vérification comme un couple — ce que la matrice matérialise. ISPE précise aussi que cette approche n'est pas strictement linéaire : elle reste valable en mode itératif ou agile.

Dans le domaine clinique, l'EMA est allée plus loin. Sa *Guideline on computerised systems and electronic data in clinical trials* (EMA/INS/GCP/112288/2023, applicable depuis le 9 septembre 2023) demande que la traçabilité soit établie et maintenue entre chaque exigence utilisateur et ses cas de test, et que la version du logiciel testé soit documentée. Le périmètre est le clinique, pas le GMP, mais l'attente est la même.

## Ce que la révision en cours ajoute, et ce qui n'est pas encore acquis

La Commission européenne a soumis à consultation publique une révision du chapitre 4 (Documentation), de l'annexe 11 et une nouvelle **annexe 22** consacrée à l'intelligence artificielle. La consultation a été ouverte le 7 juillet 2025 et fermée le 7 octobre 2025.

Dans le projet d'annexe 11 soumis à consultation, la traçabilité n'est plus implicite : une section dédiée demande une traçabilité documentée entre les exigences individuelles, les spécifications de conception correspondantes et les cas de test de qualification et de validation, et nomme la matrice de traçabilité comme moyen de le faire.

Attention à ce que cela veut dire aujourd'hui : il s'agit d'un **projet dont la consultation est close**, pas d'un texte adopté. Je ne construis donc rien sur cette base, mais j'en tire une conclusion de pilotage : une matrice sérieuse, aujourd'hui facultative dans sa forme, sera probablement nommée demain. Le statut en vigueur se vérifie sur la page EudraLex volume 4 de la Commission avant toute décision ; l'interprétation reste à confirmer avec votre Qualité.

## La matrice en six colonnes

Pas de modèle à quarante colonnes. Six suffisent, et elles se remplissent dans cet ordre.

1. **Identifiant de l'exigence.** Un code stable (URS-012), jamais un numéro de ligne Excel. Il survivra à trois rééditions du document.
2. **Énoncé de l'exigence.** Une seule exigence par ligne. Si la phrase contient « et », coupez.
3. **Criticité GxP.** Impact sur la qualité produit, la sécurité du patient ou l'intégrité des données : oui/non, et pourquoi en une ligne. C'est cette colonne qui décide de l'effort de test, dans l'esprit de la gestion du risque du GAMP 5.
4. **Élément de conception.** La référence dans la spécification fonctionnelle (**FS**) ou de configuration : l'écran, le paramètre, le rapport, l'interface qui réalise l'exigence. Pour un progiciel configuré, c'est souvent un paramètre, pas du code.
5. **Vérification.** Le cas de test et son identifiant : **IQ** (qualification de l'installation), **OQ** (qualification opérationnelle), **PQ** (qualification des performances), ou une autre preuve assumée comme telle — revue de conception, évaluation fournisseur, test du fabricant repris après évaluation.
6. **Statut et version.** Résultat, date, version du logiciel testée, référence de la déviation s'il y en a une.

La matrice se lit alors dans les deux sens : de l'exigence vers la preuve, et de la preuve vers l'exigence. Les deux lectures servent.

## Les quatre erreurs qui la font tomber

**Les exigences non testables.** « Le système doit être convivial », « les performances doivent être acceptables ». Il n'existe aucun test qui prouve ça. Reformulez en observable et mesurable, ou sortez l'énoncé de l'URS pour le mettre dans une note d'intention.

**Les tests orphelins.** Des cas de test qui ne remontent à aucune exigence. Chacun pose la même question à l'inspecteur : pourquoi testez-vous ceci, et qu'avez-vous décidé de ne pas tester ? Soit l'exigence manquait, soit le test est hors périmètre.

**Les versions divergentes.** La matrice cite l'URS v2.0, le protocole d'OQ exécuté renvoie à la v1.3, et le rapport ne dit pas laquelle fait foi. C'est l'écart le plus fréquent et le plus facile à éviter : une colonne de version, une seule source de vérité documentaire.

**La mise à jour oubliée au change control.** Le système évolue, la matrice reste à l'état du jour de la mise en service. Six mois plus tard, elle décrit un système qui n'existe plus. Le 21 CFR 11.10(k) demande précisément des procédures de révision et de contrôle des modifications sur la documentation du système.

## Ce qui bloque en pratique

Le premier blocage est humain : la matrice est vue comme une tâche administrative de fin de projet. Tant qu'elle est produite après les tests, elle ne sert qu'à constater. Produite avec l'URS, elle révèle immédiatement les exigences floues — c'est son vrai bénéfice, et il est gratuit.

Le deuxième est l'outillage. Beaucoup d'équipes attendent un outil de gestion des exigences pour commencer. Une feuille de calcul maîtrisée, avec un identifiant stable et une colonne de version, tient parfaitement une inspection. Un outil mal configuré, non. Et l'outil lui-même devient un système à évaluer.

Le troisième est le périmètre fournisseur. Sur un progiciel, une partie de la vérification vient de l'éditeur. Vous pouvez vous appuyer dessus, c'est l'esprit de l'évaluation fournisseur du GAMP 5 — à condition que la matrice le dise explicitement, avec la référence du document repris et la trace de l'évaluation qui a justifié de s'y fier. Une ligne vide n'est pas une réutilisation.

## Par où commencer : six semaines

**Semaines 1-2.** Prenez un système déjà validé, pas un projet en cours. Exportez ses exigences dans les six colonnes, sans rien corriger. Comptez les lignes sans élément de conception et sans test.

**Semaines 3-4.** Traitez les exigences critiques GxP uniquement. Pour chacune, retrouvez la preuve ou écrivez noir sur blanc qu'elle manque. Une lacune documentée et évaluée vaut mieux qu'une case remplie au hasard.

**Semaine 5.** Ajoutez la matrice à votre procédure de change control : aucun changement ne se clôture sans la ligne mise à jour. C'est ce point unique qui empêche la matrice de vieillir.

**Semaine 6.** Faites l'exercice de l'inspecteur. Quelqu'un tire trois exigences au hasard et demande la preuve. Chronométrez. Si vous êtes sous deux minutes par exigence, votre dossier se défend tout seul.

---

*Benjamin de Bruijne est Digital Technology SME dans un groupe biopharmaceutique belge. Il aide les équipes Labs, Production et Qualité à cadrer et valider leurs projets digitaux en environnement GxP. [Profil et disponibilité](/biopharma/).*
