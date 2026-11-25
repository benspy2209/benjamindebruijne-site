---
title: "Erreurs typiques d'un LLM en entreprise : le test qui les attrape"
description: "Faits inventés, chiffres déplacés, consignes ignorées, dérive de version : les cinq pannes classiques d'un LLM et le test qui attrape chacune."
date: 2026-11-25
rubrique: ia
lang: fr
tags: [IA, LLM, Qualité, PME, AI Act]
points:
  - "Cinq pannes connues, pas une liste infinie de surprises"
  - "Chaque panne a son test, à écrire avant la mise en route"
  - "Le contrôle humain ne compte que s'il peut changer le résultat"
---

Un devis part chez un client avec une référence de produit qui n'existe pas. Personne n'a menti : un grand modèle de langage (LLM, le moteur derrière les assistants d'IA) a rempli un trou, la sortie était bien écrite, et la relecture a porté sur le ton plutôt que sur les faits.

Ce genre d'incident n'est pas une malchance. Les pannes d'un LLM sont peu nombreuses, connues, et chacune se détecte par un test simple. Voici les cinq que je rencontre le plus souvent dans des PME, avec le test correspondant, et ce que la réglementation demande déjà par-dessus.

## Ce qui est vrai en 2026

**Les fournisseurs documentent eux-mêmes les parades.** La documentation officielle de Claude (Anthropic, page *Reduce hallucinations*) décrit des techniques que n'importe quelle entreprise peut reprendre : autoriser explicitement le modèle à répondre qu'il ne sait pas, ce qui réduit fortement les affirmations fausses ; lui faire extraire des citations mot à mot d'un document avant de répondre, pour ancrer la réponse dans le texte réel ; exiger une citation à l'appui de chaque affirmation, puis lui demander de retirer l'affirmation si aucune citation ne la soutient ; restreindre la réponse aux documents fournis. Ce sont des mesures de conception, pas des réglages magiques, et elles sont écrites par le fournisseur lui-même.

**Les versions de modèles ont un cycle de vie publié.** La même documentation publie un cycle de dépréciation : modèles actifs (pleinement pris en charge), *legacy* (plus de mises à jour) et dépréciés (plus accessibles aux nouveaux clients, encore disponibles pour les clients existants jusqu'au retrait). Après le retrait, les appels au modèle échouent. Conséquence pratique : un assistant branché sur une interface de programmation (API) voit son moteur changer avec le temps, et ce changement est annoncé, donc planifiable.

**L'AI Act impose de dire quand c'est une IA.** Le règlement (UE) 2024/1689 prévoit à son article 50, paragraphe 1, que les systèmes d'IA destinés à interagir directement avec des personnes physiques soient conçus pour que ces personnes sachent qu'elles interagissent avec une IA, sauf si cela ressort clairement du contexte pour une personne normalement informée et raisonnablement attentive ; l'information doit être claire au plus tard lors de la première interaction (EUR-Lex, texte consolidé du 27 juillet 2026). Le paragraphe 4 ajoute une obligation pour les déployeurs : un texte généré ou manipulé par IA et publié dans le but d'informer le public sur des questions d'intérêt public doit être signalé comme tel. Un devis ou un courrier client ne tombe pas dans ce cas ; un article d'actualité, oui.

**La maîtrise de l'IA est une obligation, à barre basse.** L'article 4 du même règlement a été réécrit par le règlement (UE) 2026/1744 du 8 juillet 2026 (EUR-Lex). Fournisseurs et déployeurs prennent des mesures qui favorisent la maîtrise de l'IA, en tenant compte des connaissances et du contexte d'usage, et le texte précise que l'obligation n'impose pas de garantir un niveau de maîtrise spécifique pour une personne donnée. Autrement dit : savoir repérer ces pannes fait partie de ce qu'on attend de vos équipes, sans examen à passer.

**Le contrôle humain doit être réel.** L'Autorité de protection des données rappelle que le RGPD interdit en principe (article 22) une décision produisant des effets juridiques ou affectant significativement une personne si elle repose uniquement sur un traitement automatisé, et qu'une intervention humaine ne compte que si elle est significative : la personne doit avoir l'autorité suffisante pour modifier le résultat. Un entérinement systématique d'une présélection reste, selon elle, une décision automatisée. C'est un point d'interprétation : à confirmer avec votre conseil pour votre cas précis.

## Les cinq pannes, et le test qui les attrape

1. **L'invention de faits.** Le modèle complète ce qui manque : une référence, un nom de norme, un article de loi, une clause. *Le test :* prenez dix sorties réelles et exigez, pour chaque affirmation factuelle, la citation littérale du document source. Toute affirmation sans citation retrouvable est comptée comme une erreur. Si le taux dépasse ce que votre relecture peut absorber, l'usage n'est pas prêt.

2. **Le chiffre déplacé.** Le plus coûteux, parce que le plus crédible : un total juste au mauvais endroit, un pourcentage appliqué à la mauvaise base, une TVA calculée sur un montant déjà TTC. *Le test :* recalculez à la main les chiffres de dix pièces, et vérifiez que chaque montant figure tel quel dans la source. Règle de conception qui évite 90 % du problème : ne jamais laisser le modèle calculer, lui faire extraire des valeurs et faire le calcul ailleurs.

3. **La consigne ignorée.** Vous avez écrit une consigne de deux pages ; trois contraintes sur douze sont respectées. Cela arrive surtout quand les instructions se contredisent ou arrivent après un long document. *Le test :* n'écrivez que des contraintes vérifiables mécaniquement (format, longueur, champs obligatoires, mention à ne jamais employer) et faites tourner dix cas en comptant les violations. Une contrainte qu'on ne peut pas vérifier d'un coup d'œil n'est pas une contrainte, c'est un souhait.

4. **La langue et le registre.** En Belgique, c'est une panne quotidienne : un courrier néerlandophone qui repasse en français au troisième paragraphe, ou un tutoiement dans un courrier officiel. *Le test :* un jeu de cas par langue utilisée, avec une vérification sur la langue de chaque paragraphe, pas seulement du premier.

5. **La dérive dans le temps.** Le même prompt, le même document, une sortie différente trois mois plus tard : la version du modèle a changé, ou votre base documentaire a bougé. *Le test :* figez un jeu de référence de vingt cas avec la sortie attendue, rejouez-le une fois par mois et à chaque changement annoncé de version, et notez quelle version du modèle a produit quoi.

## Ce qui bloque en pratique

**La relecture par la personne qui a produit.** Celui qui a lancé la génération relit son propre travail et voit ce qu'il voulait lire. Faites relire par quelqu'un d'autre, ou au minimum sur une liste écrite de points à vérifier, dans l'ordre : chiffres, noms, dates, engagements.

**Le jeu de test qui n'existe pas.** Sans sorties attendues écrites avant, il n'y a pas de test, seulement des impressions. Vingt cas réels, avec la bonne réponse notée à côté, suffisent et se préparent en une demi-journée.

**Le droit de dire non qui n'est pas donné.** Si la consigne ne permet pas au modèle de répondre « cette information n'est pas dans le document », il inventera pour obéir. La parade est documentée par le fournisseur ; encore faut-il l'écrire dans la consigne.

## Par où commencer, en deux semaines

Semaine 1 : choisissez une tâche déjà confiée à un assistant, rassemblez vingt cas réels et notez à côté de chacun la sortie attendue. Comptez les erreurs, panne par panne, avec les cinq tests ci-dessus. Semaine 2 : corrigez d'abord par la conception — autoriser le « je ne sais pas », exiger les citations, sortir les calculs du modèle, réduire la consigne à des contraintes vérifiables. Puis écrivez en une page qui relit quoi, avec quelle autorité pour refuser une sortie, et quelle version du modèle est en service. Rejouez le jeu de référence tous les mois. C'est moins séduisant qu'un nouvel outil, et c'est ce qui évite le devis au produit inexistant.

---

*Benjamin de Bruijne est consultant digital et IA indépendant en Belgique. Il automatise les tâches répétitives des PME et met l'IA là où elle enlève une corvée précise. [Astérisme : l’IA dans vos process](https://asterisme.ai/).*
