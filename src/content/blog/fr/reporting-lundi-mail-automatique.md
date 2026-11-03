---
title: "Le reporting du lundi : de trois heures de tableur à un mail automatique"
description: "Choisir cinq chiffres utiles, les assembler sans ressaisie, les envoyer à heure fixe, et éviter le piège du chiffre faux qui circule."
date: 2026-11-03
rubrique: automatisation
lang: fr
tags: [Automatisation, Reporting, Tableau de bord, PME, Belgique]
points:
  - "Un tableau de bord utile tient en cinq chiffres"
  - "On automatise l'assemblage, jamais le jugement"
  - "Un chiffre faux qui circule coûte trois heures"
---

Un gérant m'a décrit son lundi matin : quatre onglets ouverts, les chiffres de la semaine recopiés à la main dans un tableur, une mise en forme, un envoi à deux associés. Trois heures, chaque semaine, pour un document que plus personne ne relit le mercredi.

Le reporting a un défaut particulier : il ressemble à du travail. Recopier des chiffres occupe la matinée, donne le sentiment de tenir la maison, et ne produit aucune décision. La décision, elle, prend dix minutes — quand les chiffres sont déjà là, justes, et toujours calculés de la même façon. Tout le reste est de la manutention, et la manutention s'automatise.

## Ce qui est vrai en 2026

Deux choses ont changé, et elles jouent en votre faveur.

**Vos données de vente sont devenues structurées.** Le portail officiel du SPF Finances et du BOSA, efacture.belgium.be, indique que depuis le **1er janvier 2026**, les entreprises belges assujetties à la TVA doivent s'échanger des **factures électroniques structurées**, au format de référence **Peppol BIS**, envoyées et reçues via le réseau Peppol. Le même portail mentionne une période de tolérance sur les trois premiers mois de 2026 et des exceptions, par exemple les assujettis au régime forfaitaire de l'article 56 du Code de la TVA. Pour le reporting, la conséquence est simple : ce qui sortait en PDF se lit désormais champ par champ. Un montant facturé n'a plus besoin d'être retapé.

**Les points de comparaison externes existent déjà, et ils sont officiels.** Statbel, l'office belge de statistique sous ce nom depuis le 15 janvier 2018, publie dans sa base be.STAT la structure des entreprises par secteur d'activité (nomenclature NACE), avec notamment le chiffre d'affaires, la valeur ajoutée et les frais de personnel. De son côté, la Centrale des bilans de la Banque nationale de Belgique collecte les comptes annuels déposés et en tire des ratios, diffusés par secteur sous forme de quartiles via l'application NBB.Stat : vous pouvez situer votre marge par rapport à la médiane de votre secteur. Les guides utilisateurs consultables sont de plusieurs millésimes ; vérifiez la version en vigueur sur nbb.be avant de vous appuyer sur une liste de ratios précise.

Autrement dit : aucun besoin d'inventer un pourcentage de référence. S'il n'existe pas chez Statbel ou à la Centrale des bilans, il n'entre pas dans votre tableau de bord.

## Choisir les cinq chiffres

Un chiffre mérite sa place si quelqu'un peut agir dessus cette semaine. C'est le seul critère. Voici la répartition qui tient dans la plupart des PME :

- **Ce qui entre** : demandes reçues, devis envoyés. Il annonce les six semaines suivantes.
- **Ce qui sort** : commandes livrées, chantiers terminés, heures facturables produites. Il dit si la promesse est tenue.
- **L'argent attendu** : encours client, et la part échue. Il arrive en tête des urgences du lundi.
- **L'argent disponible** : solde de trésorerie, et la projection à trente jours. Un seul chiffre, pas un plan.
- **La qualité** : délai moyen de première réponse, retards, réclamations ouvertes. Le plus oublié, le plus prédictif.

Cinq, et on s'arrête. Un sixième chiffre ne coûte pas un calcul de plus : il coûte une discussion de plus, chaque lundi.

Sur la fréquence, une remarque de la CNIL vaut d'être reprise : la productivité est plus cohérente à mesurer sur des périodes longues, parce qu'elle varie pour des raisons extérieures aux personnes. Le flux de trésorerie se regarde chaque semaine. Un rendement se regarde chaque mois, ou chaque trimestre.

## Le montage, en quatre étapes

1. **Fixer la source unique de chaque chiffre.** Un chiffre, un outil qui détient la vérité. L'encours vient de la facturation, pas du tableur d'un associé. Si deux outils peuvent répondre, vous aurez deux réponses.
2. **Extraire sans ressaisie.** Export programmé, lecture directe de la base, ou interface de l'outil. La règle : personne ne retape rien, et personne ne renomme un fichier à la main pour que l'automatisation le trouve.
3. **Assembler et calculer au même endroit.** Un seul jeu de formules, versionné, lisible par quelqu'un d'autre que son auteur. C'est ici que vivent les définitions.
4. **Envoyer à heure fixe.** Lundi 7 h, cinq chiffres, pour chacun la valeur, la variation par rapport à la semaine précédente, la date d'extraction et un lien vers le détail. Le mail doit tenir sur un écran de téléphone.

Ce qui n'est pas dans la liste : l'interprétation. L'automatisation livre les chiffres et les écarts. Le commentaire reste écrit par un humain, quand il y a quelque chose à dire.

## Quand le reporting parle de personnes

Dès qu'un indicateur descend au niveau d'un individu — appels traités par personne, délais par technicien — vous traitez des données à caractère personnel, et le cadre n'est plus seulement une affaire de goût.

Le règlement européen 2016/679 (RGPD), à son article 5, impose des finalités déterminées, explicites et légitimes, des données adéquates, pertinentes et limitées à ce qui est nécessaire (minimisation), des données exactes et tenues à jour, et, au paragraphe 2, la capacité du responsable à démontrer qu'il respecte ces principes.

L'Autorité de protection des données décline ces principes pour l'employeur sur ses pages consacrées à la vie privée au travail : une finalité légitime, un traitement adéquat, pertinent et non excessif au regard de cette finalité, un contrôle limité à ce qui est strictement nécessaire, et une obligation d'information des travailleurs sur le traitement et ses finalités. Pour certains dispositifs, elle renvoie aux conventions collectives de travail n° 68 (caméras) et n° 81 (communications électroniques).

La CNIL ajoute la mécanique : un dispositif de contrôle doit être proportionné à l'objectif, et il faut déterminer les données strictement nécessaires, leur durée de conservation et les personnes qui peuvent y accéder. Elle note aussi que des résultats réellement anonymes, agrégés en statistiques, ne contiennent plus de données personnelles.

En pratique, cela donne trois réglages : agréger par équipe plutôt que par personne quand l'objectif est de piloter l'activité, écrire la durée de conservation à côté du tableau de bord, et dire aux équipes ce qui est mesuré avant la première mesure. Pour les cas d'interprétation, confirmez avec votre conseil ou votre secrétariat social.

## Ce qui bloque en pratique

**Le chiffre faux qui circule.** Une erreur manuelle se voit. La même erreur, envoyée automatiquement tous les lundis dans un beau mail, devient une vérité. Avant d'envoyer à qui que ce soit, faites tourner le rapport trois semaines en parallèle de votre méthode actuelle et expliquez chaque écart. Et affichez toujours la date d'extraction : un chiffre sans horodatage ne peut pas être contesté.

**Les définitions qui bougent.** « Chiffre d'affaires » désigne au moins trois choses : commandé, facturé, encaissé. Si deux personnes autour de la table n'ont pas la même, le tableau de bord produit des débats, pas des décisions. Écrivez la définition en une ligne, à côté du chiffre, dans le mail.

**L'indicateur que personne ne lit.** Test simple : si un chiffre n'a déclenché aucune décision en deux mois, il sort. Un tableau de bord se taille, il ne s'empile pas.

## Par où commencer : deux semaines

**Semaine 1, à la main.** Écrivez les cinq chiffres sur une feuille. Pour chacun : la définition en une ligne, l'outil qui détient la vérité, la fréquence. Puis envoyez la version manuelle une fois. Si le mail ne sert à rien manuellement, l'automatiser n'y changera rien.

**Semaine 2, automatisez l'assemblage** des deux ou trois chiffres dont la source est déjà structurée — l'encours client est souvent le plus simple et le plus utile. Comparez chaque lundi avec votre calcul habituel. Quand les deux coïncident trois fois de suite, programmez l'envoi et retirez l'onglet correspondant de votre lundi matin.

Les autres chiffres suivront, ou pas. Un tableau de bord à trois chiffres justes vaut mieux qu'un tableau de bord à douze chiffres dont deux sont faux et dix inutiles.

---

*Benjamin de Bruijne est consultant digital et IA indépendant en Belgique. Il automatise les tâches répétitives des PME et met l'IA là où elle enlève une corvée précise. [Astérisme : l’IA dans vos process](https://asterisme.ai/).*
