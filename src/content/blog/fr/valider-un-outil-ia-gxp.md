---
title: "Valider un outil d'IA en environnement GxP : par où commencer"
description: "Un outil d'IA entre dans un labo ou une usine pharma : faut-il le valider, et comment ? Méthode en six étapes, proportionnée au risque, selon GAMP 5."
date: 2026-10-10
lang: fr
tags: [GxP, CSV, GAMP 5, IA, validation]
---

Un outil d'intelligence artificielle arrive dans un laboratoire ou sur un site de production pharmaceutique. Un assistant qui résume des rapports, un modèle qui pré-classe des déviations, une recherche documentaire qui répond en langage naturel. La question tombe vite, et elle tombe sur la Qualité et l'IT en même temps : **faut-il le valider, et comment ?**

Je la rencontre régulièrement dans mon rôle de Digital Technology SME. Voici la méthode que j'applique. Elle n'a rien de révolutionnaire : c'est GAMP 5, proportionné au risque, appliqué à un objet qui a quelques particularités.

## Le cadre existe déjà

Première bonne nouvelle : vous n'êtes pas seul. La deuxième édition de GAMP 5 (2022) consacre une annexe à l'intelligence artificielle et au machine learning. L'EMA a publié en 2024 un papier de réflexion sur l'IA dans le cycle de vie du médicament. La FDA a proposé début 2025 un cadre de crédibilité fondé sur le risque pour les modèles d'IA utilisés dans les décisions réglementaires. Et l'AI Act européen fixe des obligations par niveau de risque, avec une mise en application échelonnée jusqu'en 2027.

Aucun de ces textes ne dit « validez ChatGPT ». Tous disent la même chose : **définissez l'usage, évaluez le risque, démontrez que l'outil est fiable pour cet usage, gardez la maîtrise dans le temps.**

## Étape 1 : l'usage prévu, par écrit

Tout part de là, comme pour n'importe quel système informatisé. Une phrase suffit au début : « L'outil X propose un résumé des rapports d'investigation, que l'analyste relit et valide avant tout usage. » Cette phrase dit déjà trois choses : ce que fait l'outil, ce qu'il ne fait pas (il ne décide pas), et où se trouve l'humain.

Sans usage prévu écrit, on finit par valider l'outil « en général », ce qui est impossible pour un modèle de langage, et inutile.

## Étape 2 : l'impact GxP, honnêtement

L'outil touche-t-il à la qualité du produit, à la sécurité du patient ou à l'intégrité de données réglementées ? Si la réponse est non, par exemple un assistant qui aide à rédiger des comptes rendus de réunion, il n'y a pas de validation CSV à faire. Il reste de la gouvernance : quelles données on lui envoie, qui est responsable, comment on arrête.

Si la réponse est oui, l'effort de validation doit être proportionné : un outil qui **suggère** avec relecture humaine systématique n'est pas un outil qui **décide**. C'est exactement l'esprit de GAMP 5 et de l'approche CSA : de la pensée critique, pas des documents produits pour la forme.

## Étape 3 : de quel type d'IA parle-t-on ?

C'est la particularité de l'objet. Quatre familles, quatre approches :

- **Règles et logique déterministe** vendues comme « IA » : validation classique, rien de nouveau.
- **Modèle de machine learning figé**, entraîné une fois et déployé : on valide une version précise, avec un jeu de données de test représentatif et des métriques de performance acceptées à l'avance.
- **Modèle de langage via une API** (OpenAI, Anthropic, Mistral, modèle hébergé) : vous ne maîtrisez pas le modèle. Il faut donc le traiter comme un fournisseur : figer la version appelée, qualifier le fournisseur, tester l'usage sur un jeu de cas, et surtout garder un humain dans la boucle.
- **Modèle qui apprend en continu** en production : à éviter en GxP tant qu'on ne sait pas démontrer qu'un changement de comportement est détecté et maîtrisé. Dans le doute, on fige.

## Étape 4 : les exigences, y compris sur les données

Les exigences utilisateur d'un outil d'IA ressemblent à celles d'un autre système, avec trois ajouts :

1. **Les données** : ce qui entre dans l'outil (et ce qui ne doit jamais y entrer), où elles vont, qui y accède, pendant combien de temps. Pour un modèle externe, cette question règle à elle seule la moitié des risques.
2. **La performance acceptable** : quel taux d'erreur tolère-t-on sur quel type de cas ? Un résumé qui oublie une déviation critique n'est pas « 95 % correct », il est inacceptable. Il faut l'écrire.
3. **Les limites** : les cas où l'outil ne doit pas être utilisé, et ce que fait l'utilisateur à la place.

## Étape 5 : tester l'usage, pas le modèle

On ne teste pas « l'intelligence » du modèle. On teste **l'usage prévu** sur un jeu de cas représentatif, préparé à l'avance, avec des résultats attendus et des seuils. Pour un assistant documentaire : cinquante rapports réels anonymisés, des questions dont on connaît la réponse, et une grille de notation. On garde le jeu de cas : il servira à chaque changement de version.

Les tests couvrent aussi ce qui entoure le modèle et qui, lui, se valide très classiquement : l'intégration, les accès, la piste d'audit, l'horodatage, l'export. C'est là que vivent le 21 CFR Part 11 et l'annexe 11.

## Étape 6 : la mise en service et le temps qui passe

Un outil d'IA validé le jour J n'est pas validé pour toujours. Trois mécanismes à mettre en place avant d'ouvrir l'accès :

- **L'humain dans la boucle**, inscrit dans la procédure : qui relit, qui valide, qui est responsable de la décision finale.
- **La journalisation** : quelles requêtes, quelles réponses, quelle version du modèle. Sans ça, impossible d'investiguer.
- **La revue périodique et la gestion du changement**, y compris le changement que vous n'avez pas décidé : le fournisseur qui met à jour son modèle. La version figée et le jeu de cas de l'étape 5 sont votre filet.

## Ce qui bloque, en pratique

Trois pièges reviennent souvent.

**Sur-valider.** Vouloir valider le modèle en soi, produire deux cents pages d'IQ/OQ, et finir par interdire l'outil parce que le dossier est impossible à clore. La réponse est l'étape 2 : proportionner.

**Pas de propriétaire.** Un outil d'IA « de l'IT » ou « de la Qualité » n'appartient à personne. Il faut un propriétaire métier du cas d'usage, qui signe l'usage prévu et les limites.

**Les données qui partent.** Un utilisateur qui colle un rapport de lot dans une interface grand public a déjà créé l'incident, validation ou pas. La gouvernance des données doit précéder tout pilote.

## Par où commencer, concrètement

Choisissez **un** cas d'usage à faible impact et à forte valeur : assistance documentaire sur des procédures internes, résumé de rapports, pré-tri de demandes. Écrivez l'usage prévu et l'évaluation des risques en une page chacun. Constituez le jeu de cas. Déployez à un petit groupe avec relecture obligatoire. Mesurez pendant six semaines. Puis décidez, chiffres en main, d'étendre ou d'arrêter.

Le kit documentaire produit pour ce premier cas (usage prévu, risques, exigences, jeu de cas, procédure, revue) se réutilise ensuite pour les suivants. C'est là que l'effort initial est rentabilisé.

---

*Benjamin de Bruijne est Digital Technology SME dans un groupe biopharmaceutique belge. Il aide les équipes Labs, Production et Qualité à cadrer et valider leurs projets digitaux en environnement GxP. [Profil et disponibilité](/biopharma/).*
