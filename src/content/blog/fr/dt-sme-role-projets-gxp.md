---
title: "DT SME : le rôle qui manque sur beaucoup de projets GxP"
description: "Le DT SME traduit entre Labs, Production, Qualité et IT. Ses quatre responsabilités, les signaux de son absence, et comment créer le rôle."
date: 2026-10-26
rubrique: gxp
lang: fr
tags: [GxP, CSV, GAMP 5, URS, gouvernance]
points:
  - "Le DT SME traduit l'intention métier en exigences testables"
  - "Ce n'est ni un chef de projet, ni un architecte, ni la Qualité"
  - "Sans fiche de rôle écrite, le rôle n'existe pas en inspection"
---

Un projet de système informatisé démarre sur un site pharma. Le laboratoire décrit ce qu'il veut, l'IT ce qu'il sait construire, et personne ne tient le milieu.

Six mois plus tard, le système est livré, validé, et il ne sert presque pas. Il fait exactement ce qui a été spécifié : ce n'est pas un défaut d'exécution, c'est le symptôme d'un rôle absent.

## Ce que fait un DT SME, et ce qu'il n'est pas

**DT SME** se lit *Digital Technology Subject Matter Expert* : expert des technologies digitales appliquées à un domaine métier. C'est la personne qui connaît assez bien le procédé du laboratoire, de la production ou de la Qualité pour comprendre ce qui est demandé, et assez bien les systèmes pour savoir ce que ça implique en exigences, en données et en validation.

Son travail : tenir la traduction entre l'intention métier et la spécification, en environnement **GxP** (bonnes pratiques réglementées, GMP, GLP, GCP).

Ce qu'il n'est pas — et c'est là qu'on se trompe :

- **Pas un chef de projet.** Celui-ci tient le planning, le budget, les portes de décision. Le DT SME tient le contenu.
- **Pas un architecte de solution.** L'architecte choisit les composants et les interfaces. Le DT SME dit à quoi le résultat doit répondre.
- **Pas la Qualité.** Elle approuve, challenge, inspecte ; elle n'écrit pas les exigences métier à la place du métier.
- **Pas « l'utilisateur clé ».** Celui-ci décrit sa pratique, parfois celle de son équipe. Le DT SME décrit le procédé, y compris les cas que personne n'aime évoquer.

## Le cadre existe déjà

Aucun texte réglementaire ne demande un « DT SME » : il faut le dire clairement. Ce que les textes demandent, en revanche, rend le rôle difficile à éviter.

L'**annexe 11 d'EudraLex volume 4** (Commission européenne, révision de janvier 2011) demande, dans son paragraphe 2 consacré au personnel, une coopération étroite entre toutes les personnes concernées, et cite explicitement le *Process Owner*, le *System Owner*, les Personnes Qualifiées et l'IT. Son glossaire définit les deux premiers : le propriétaire du procédé est responsable du procédé métier ; le propriétaire du système, de la disponibilité et de la maintenance du système et de la sécurité des données qu'il héberge. L'annexe nomme donc les responsabilités, pas la personne qui fait tenir la conversation entre elles.

Le même texte, au paragraphe 4.4, demande que l'**URS** — *User Requirements Specification*, spécification des besoins utilisateurs — décrive les fonctions requises du système, s'appuie sur une analyse de risque documentée et sur l'impact GMP, et reste traçable tout au long du cycle de vie. Quelqu'un doit l'écrire : c'est là que le trou se voit.

Le **chapitre 2 d'EudraLex volume 4** (Personnel, version applicable depuis le 16 février 2014) ajoute la contrainte qui tranche le débat organisationnel : les personnes en position de responsabilité doivent avoir des tâches spécifiques consignées dans des descriptions de fonction écrites, et l'autorité suffisante pour les exercer ; il ne doit pas y avoir de lacunes ni de chevauchements inexpliqués dans les responsabilités du personnel concerné par les GMP. Le chapitre précise aussi que les responsabilités confiées à une seule personne ne doivent pas être si étendues qu'elles créent un risque pour la qualité.

Côté guides, le **GAMP 5 deuxième édition** (ISPE, publié en juillet 2022) met au centre la pensée critique exercée par des SME compétents et expérimentés, et lui consacre une annexe dédiée (M12, *Critical Thinking*). Attention à la nature du document : GAMP est un guide, il recommande une approche ; il n'impose rien.

Deux points sont en mouvement, et je les écris tels quels. La Commission européenne a soumis à consultation des parties prenantes une révision de l'annexe 11, une révision du chapitre 4 et un nouveau projet d'annexe 22 consacré à l'intelligence artificielle ; la consultation est fermée depuis le 7 octobre 2025. Dans ce projet d'annexe 11, la liste des parties à faire coopérer s'élargit et mentionne explicitement les *subject matter experts*, à côté des propriétaires de procédé et de système, des utilisateurs, de la Qualité, de la Personne Qualifiée, de l'IT interne, des fournisseurs et des prestataires. Le projet d'annexe 22 va plus loin et rend le SME du procédé responsable du caractère adéquat de la description du système. Ce sont des projets : je n'ai pas de confirmation d'adoption d'un texte final, et la page EudraLex volume 4 reste la référence pour vérifier la version en vigueur. Ne construisez pas un dossier de validation sur un texte en consultation.

Côté FDA, le mouvement va dans le même sens : la guidance finale *Computer Software Assurance for Production and Quality Management System Software*, publiée en février 2026, assume une approche basée sur le risque, mais son périmètre est celui du 21 CFR Part 820 — la qualité des dispositifs médicaux. Utile comme direction, pas transposable tel quel à un site de médicaments.

## Les quatre responsabilités

1. **Traduire l'intention en exigences testables.** Pas « le système doit être convivial », mais « l'opérateur saisit le résultat sans ressaisie depuis l'instrument, et toute correction est horodatée avec un motif ». Chaque exigence doit pouvoir devenir un test.
2. **Instruire la décision d'impact GxP et le périmètre de validation.** Le DT SME apporte la connaissance du procédé qui permet de dire quelles fonctions touchent la qualité produit, les données réglementaires ou la sécurité patient. La Qualité tranche, sur une analyse plutôt qu'une intuition.
3. **Tenir la cohérence dans le temps.** Un système validé vit : changements, versions, interfaces. Le DT SME maintient le lien entre exigences, conception et tests à chaque change control. C'est ce qui rend la revue périodique faisable.
4. **Porter la voix des utilisateurs dans les tests.** Les tests doivent couvrir l'usage prévu, pas seulement les fonctions du logiciel. C'est la différence entre un **OQ** (*Operational Qualification*) qui passe et un système qui tient le lundi matin.

## À quoi on reconnaît qu'il manque

Les signaux ne changent pas :

- L'URS a été rédigée par le fournisseur, signée par le métier sans relecture ligne à ligne.
- La réponse à toute question fonctionnelle est « on verra en **UAT** » (*User Acceptance Testing*, tests d'acceptation utilisateur).
- Deux documents disent deux choses sur le même flux de données, et personne ne sait lequel fait foi.
- Personne ne peut nommer qui approuve une modification d'exigence.
- La matrice de traçabilité est construite à la fin, pour le dossier, jamais utilisée pendant le projet.

Trois de ces cinq signaux : le rôle n'est pas tenu. Il est peut-être attribué sur le papier — ce n'est pas la même chose.

## Ce qui bloque en pratique

**Le rôle est donné en plus à quelqu'un de déjà saturé.** Le chapitre 2 donne l'argument pour le refuser : des responsabilités trop étendues pour une seule personne créent un risque pour la qualité. Un DT SME à 5 % de son temps est une case cochée, pas un rôle.

**Le rôle est confondu avec celui du chef de projet.** Les deux casquettes sur une seule tête produisent un arbitrage systématique en faveur du planning, parce que c'est sur le planning que la personne est évaluée. Les exigences deviennent négociables. Elles ne devraient pas l'être.

**Le rôle n'est écrit nulle part.** Tant qu'il ne figure pas dans une description de fonction, avec l'autorité associée et un suppléant désigné, il n'existe pas pour un inspecteur — et il disparaît le jour où la personne change de poste.

## Par où commencer, en six semaines

- **Semaines 1 et 2** : lister les systèmes informatisés à impact GxP du périmètre et nommer, pour chacun, un propriétaire de procédé et un propriétaire de système. On découvre souvent ici que deux systèmes n'ont ni l'un ni l'autre.
- **Semaines 3 et 4** : écrire la fiche de rôle : les quatre responsabilités ci-dessus, l'autorité associée (qui approuve quoi), le suppléant, et ce qui n'est pas dans le rôle. Une page suffit, relue par la Qualité et par l'IT.
- **Semaines 5 et 6** : l'appliquer sur un seul projet en cours, pas sur dix. Reprendre les dix exigences les plus critiques de son URS, les rendre testables, tracer chacune vers un test.

Ce rôle n'est pas un titre, c'est une charge. La question de l'autorité — qui approuve une exigence, qui peut dire non à un fournisseur — se tranche avec votre Qualité, pas dans un article.

---

*Benjamin de Bruijne est Digital Technology SME dans un groupe biopharmaceutique belge. Il aide les équipes Labs, Production et Qualité à cadrer et valider leurs projets digitaux en environnement GxP. [Profil et disponibilité](/biopharma/).*
