---
title: "SaaS ou sur-mesure : la grille de décision"
description: "Six critères pour trancher entre un logiciel du marché et un outil sur-mesure, ce que le Data Act change depuis 2025, et trois cas types."
date: 2026-10-22
rubrique: construire
lang: fr
tags: [Construire, SaaS, Sur-mesure, PME, DataAct]
points:
  - "Le prix n'est pas le critère, le processus l'est"
  - "Le Data Act encadre la sortie d'un SaaS, pas du sur-mesure"
  - "Le mix gagne souvent : un SaaS et un petit sur-mesure"
---

Un responsable d'exploitation me résume son problème en une phrase : « on suit nos interventions dans un tableur partagé et ça ne tient plus ». Puis vient la vraie question, toujours posée comme un choix binaire : un logiciel du marché, ou on fait développer le nôtre ?

Posée ainsi, elle n'a pas de réponse. Elle se tranche presque toujours sur le prix affiché, qui est le plus mauvais critère disponible. Le bon critère, c'est le processus : ce que vous faites ressemble-t-il à ce que fait tout le monde dans votre métier, ou pas ?

## Ce qui est vrai en 2026

Trois éléments de cadre pèsent sur ce choix, aucun n'apparaît sur une page de tarifs.

**Le règlement européen sur les données** — règlement (UE) 2023/2854, le *Data Act* — est entré en vigueur le 11 janvier 2024 et s'applique depuis le **12 septembre 2025**, d'après la page officielle de la Commission européenne sur digital-strategy.ec.europa.eu. Son chapitre VI porte sur le changement de fournisseur de services de traitement de données, cloud et SaaS compris. L'article 23 oblige le fournisseur d'origine à lever les obstacles qui empêchent un client de passer chez un autre fournisseur du même type, ou de revenir sur une infrastructure qu'il exploite lui-même. L'article 25 exige que ces droits figurent dans un **contrat écrit, remis avant la signature** : clause de changement avec une période de transition de **30 jours calendrier au maximum**, clause d'effacement complet des données après récupération, et les frais autorisés par l'article 29. Ce dernier organise une extinction : frais réduits admis jusqu'au 12 janvier 2027, puis **plus aucun frais de changement**, frais de transfert de données compris.

Une nuance, écrite telle quelle : l'article 29 exclut les services construits sur mesure, et la Commission a présenté fin 2025 une proposition dite *Digital Omnibus* qui allégerait le chapitre VI pour les services adaptés aux besoins d'un client sous contrat conclu au plus tard le 12 septembre 2025. C'est une **proposition**, pas un texte adopté : vérifiez son statut sur eur-lex.europa.eu.

Lecture pratique : le Data Act vous donne une voie de sortie d'un SaaS standard, pas du sur-mesure. Là, votre sortie vaut ce que vaut votre contrat.

**Les données personnelles créent la même obligation des deux côtés.** Si un prestataire exploite l'outil pour vous, il est sous-traitant au sens du RGPD. L'article 28 impose un contrat écrit, y compris électronique, qui fixe l'objet, la durée, la nature et la finalité du traitement, les types de données et les catégories de personnes concernées. La CNIL et l'Autorité de protection des données rappellent que le sous-traitant agit uniquement sur instruction documentée, qu'il doit supprimer ou restituer les données en fin de prestation, et qu'il ne peut pas en recruter un autre sans autorisation écrite préalable. Cela vaut pour l'éditeur d'un SaaS comme pour celui qui héberge votre application maison.

**Les obligations bougent, et quelqu'un doit payer le rattrapage.** Depuis le **1er janvier 2026**, selon efacture.belgium.be, les entreprises belges assujetties à la TVA doivent s'échanger des factures électroniques structurées au format **Peppol-BIS**, conforme à la norme européenne EN 16931, via le réseau Peppol sauf accord contraire des deux parties. Un éditeur du marché absorbe ce changement une fois, pour tous ses clients. Dans un outil sur-mesure, il devient votre projet, votre budget et votre délai. C'est là que se joue l'écart de coût réel, pas sur la licence.

## Les six critères, dans l'ordre

1. **Processus standard ou spécifique ?** Facturer, payer des salaires, tenir une comptabilité : standard, réglementé, identique pour tout le monde. Votre façon d'affecter une intervention selon la certification du technicien, la zone et le matériel : spécifique. Le test : si vous décrivez votre processus à trois confrères, reconnaissent-ils le leur ?
2. **Les données : nature, hébergement, sortie.** Y a-t-il des données personnelles, donc un contrat article 28 dans les deux cas ? Pouvez-vous les ressortir ? Le RGPD prévoit, pour les données personnelles, un droit à la portabilité dans un format structuré, couramment utilisé et lisible par machine (article 20). Pour le reste, c'est le contrat, ou le Data Act s'il s'agit d'un SaaS.
3. **Les intégrations, comptées avant de décider.** Combien d'autres outils doivent lui parler, et dans quel sens ? Un logiciel du marché avec une API documentée bat un outil sur-mesure qui n'en a pas. Faites la liste : compta, banque, site, boîte mail.
4. **La dépendance à trois ans.** Qui peut modifier l'outil en 2029 ? En SaaS, la feuille de route est celle de l'éditeur et les versions sont imposées, mais la sortie est encadrée. En sur-mesure, vous possédez l'outil, donc aussi sa maintenance et la personne qui connaît le code.
5. **Le coût sur cinq ans, pas à la signature.** Quatre lignes à remplir vous-même : abonnement ou hébergement, mise en place et reprise de données, changements réglementaires et techniques, sortie. Le troisième poste est celui que personne ne chiffre, et souvent celui qui décide.
6. **La sortie, écrite avant l'entrée.** Pour un SaaS, l'article 25 oblige le fournisseur à vous remettre la clause de changement avant signature : lisez-la. Pour du sur-mesure : propriété du code, accès au dépôt, secrets et clés, sauvegardes restaurables, documentation, et le droit de faire reprendre le travail.

## Trois cas types

**Facturation, paie, comptabilité.** Logiciel du marché, sans débat. Développer ça sur mesure, c'est payer deux fois : pour l'écrire, puis chaque fois que la règle change.

**Un métier avec ses règles à lui.** Affectation d'interventions, calcul de prix à variables multiples, contrôle qualité maison. Deux options honnêtes : du sur-mesure, ou un outil du marché que vous acceptez de plier — et le plier coûte souvent plus cher, parce que vous le refaites à chaque mise à jour imposée.

**Une donnée publique que personne n'exploite.** Service-Volée, que je développe, relève de ce cas : les données publiques de la fédération de tennis belge, plus de 76 000 fiches joueurs indexées et plus de 300 000 matchs, un crawler planifié toutes les dix minutes, en production depuis septembre 2026. Aucun éditeur ne proposait ça. Le revers : la maintenance est à moi.

## Le mix, qui gagne plus souvent qu'on ne croit

La réponse la plus fréquente n'est ni l'une ni l'autre. Un logiciel du marché pour la partie standard, un petit outil sur-mesure autour pour les 10 % qui vous sont propres : le logiciel de facturation garde la responsabilité du format légal, une petite application interne fabrique le devis avec vos règles de métier et pousse le résultat dedans.

Condition unique : le logiciel du marché doit avoir une API documentée. On revient au critère 3, le plus déterminant des six et le moins regardé.

## Ce qui bloque en pratique

**On choisit sur la démo, pas sur ses propres données.** Une démonstration est conçue pour bien se passer. Demandez un essai avec vingt de vos vrais dossiers, les plus moches, avec des champs vides : ce sont eux qui révèlent si le processus rentre.

**« Le sur-mesure, c'est plus souple », sans personne pour le maintenir.** Un outil maison sans mainteneur nommé, sans documentation et sans sauvegarde restaurable devient un otage en dix-huit mois. Si vous ne pouvez pas écrire le nom de celui qui le reprendra, ce n'est pas une option.

**La clause de sortie signée sans être lue.** Le Data Act oblige le fournisseur à vous la remettre avant signature. La lire reste votre travail : période de transition, format d'export, effacement.

## Par où commencer : deux semaines

Semaine 1 : écrivez le processus sur une page, avec ses étapes, les gens qui y touchent et les cas particuliers. Listez les intégrations, nommez le propriétaire de chaque jeu de données, puis notez les six critères, une ligne chacun.

Semaine 2 : si le marché l'emporte, lancez un essai sur vos données réelles et lisez la clause de changement. Si le spécifique l'emporte sur les critères 1 et 3, écrivez la clause de sortie du sur-mesure avant la première ligne de code.

La règle que j'applique : quatre critères sur six qui pointent vers le standard, on arrête de chercher. Le sur-mesure se justifie quand le processus est votre avantage, pas quand il est votre habitude.

---

*Benjamin de Bruijne est consultant digital et IA indépendant en Belgique. Il construit des sites, des applications métier et des produits, et les pilote jusqu'en production. [Astérisme : concevoir et mettre en place](https://asterisme.ai/).*
