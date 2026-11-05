---
title: "Un cahier des charges en deux pages pour un outil interne"
description: "Le gabarit en deux pages que je demande avant de chiffrer un outil interne : problème, usages, données, hors périmètre, critères de réussite."
date: 2026-11-05
rubrique: construire
lang: fr
tags: [Construire, Cahier des charges, Outil interne, PME, RGPD]
points:
  - "Deux pages suffisent si chaque ligne est vérifiable"
  - "Le hors périmètre compte autant que le périmètre"
  - "Les données se décident avant le devis, pas à la recette"
---

Un dirigeant m'envoie vingt-deux pages pour faire chiffrer un outil de suivi d'interventions. Je les lis deux fois et je ne sais toujours pas qui ouvrira l'outil le lundi matin, ni ce qui se passe quand une intervention est annulée la veille.

L'inverse arrive aussi, et plus souvent : trois lignes dans un mail, « un petit outil pour suivre nos chantiers, comme un tableur mais en mieux ». Dans les deux cas, le devis qui revient ne veut rien dire. Ce qu'un prestataire a besoin de lire tient en deux pages, et ces deux pages sont les vôtres à écrire.

## Ce qui est vrai en 2026

Écrire une demande n'est pas un art libre : il existe une norme, et des obligations qui se décident à ce moment-là.

**La norme.** L'ingénierie des exigences est normalisée : **ISO/IEC/IEEE 29148:2018**, *Systems and software engineering — Life cycle processes — Requirements engineering*, est l'édition publiée au catalogue de l'ISO (iso.org), la première édition de 2011 étant retirée. Elle définit ce qui constitue une exigence bien formée et décrit l'ingénierie des exigences comme une fonction qui fait le pont entre le domaine de l'acquéreur et celui du fournisseur. Une nuance, écrite telle quelle : une troisième édition est en cours, au stade du projet international (DIS) soumis au vote des membres de l'ISO depuis septembre 2026 ; l'édition 2018 reste celle à citer, vérifiez le statut sur iso.org. Vous n'avez pas besoin d'acheter la norme pour un outil interne, seulement de son idée centrale : une exigence qu'on ne peut pas vérifier n'est pas une exigence.

**Les données personnelles.** Si l'outil manipule des données de salariés, de clients ou de patients, trois articles du RGPD (règlement (UE) 2016/679, texte officiel sur eur-lex.europa.eu) tombent dès la conception. L'**article 25** demande des mesures techniques et organisationnelles appropriées *au moment de la détermination des moyens du traitement*, et pas seulement pendant l'exploitation ; son volet « par défaut » vise à ne traiter que les données nécessaires à chaque finalité, ce qui couvre explicitement la quantité collectée, l'étendue du traitement, la durée de conservation et l'accessibilité. L'**article 32** impose un niveau de sécurité adapté au risque, cite la pseudonymisation et le chiffrement, exige de pouvoir rétablir l'accès aux données après un incident et de tester régulièrement l'efficacité des mesures. L'**article 30** attend, dans le registre des activités de traitement, les catégories de destinataires et, dans la mesure du possible, les délais d'effacement par catégorie de données.

Ces trois articles se remplissent presque entièrement avec le bloc « données » de votre cahier des charges. Si ce bloc est vide, quelqu'un devinera à votre place, plus tard.

**Le prestataire devient sous-traitant.** S'il exploite ou héberge l'outil pour vous, l'**article 28** du RGPD impose un contrat écrit qui fixe l'objet et la durée du traitement, sa nature et sa finalité, le type de données et les catégories de personnes concernées, ainsi que les obligations et droits du responsable du traitement. Autrement dit : les quatre premières lignes de ce contrat sont déjà dans votre page 1, ou elles n'existent pas.

**Les cas où une analyse d'impact est préalable.** L'**article 35** du RGPD exige une analyse d'impact relative à la protection des données (AIPD) avant le traitement lorsque celui-ci est susceptible d'engendrer un risque élevé. L'Autorité de protection des données rappelle trois cas visés par l'article 35.3 : l'évaluation systématique d'aspects personnels fondée sur un traitement automatisé suivie d'une décision concernant la personne, le traitement à grande échelle de données sensibles ou judiciaires, et la surveillance systématique à grande échelle d'une zone accessible au public. L'APD a par ailleurs fixé une liste belge de traitements soumis à AIPD (décision du Secrétariat général n° 01/2019 du 16 janvier 2019), qu'elle présente comme non exhaustive. Vérifiez sur autoriteprotectiondonnees.be si cette liste a été actualisée, et parlez-en à votre conseil : c'est un point d'interprétation, pas une case à cocher.

**Si l'outil touche à la facturation.** Depuis le **1er janvier 2026**, selon efacture.belgium.be, les entreprises belges assujetties à la TVA échangent entre elles des factures électroniques structurées, au format **Peppol-BIS** conforme à la norme européenne EN 16931, de logiciel à logiciel et non en PDF par mail. Le même portail indique que la période générale de tolérance des trois premiers mois de 2026 est désormais terminée. Des exclusions existent : factures aux particuliers, opérations exemptées par l'article 44 du Code de la TVA, assujettis étrangers sans établissement stable en Belgique. Conséquence pour votre document : si l'outil émet une facture, ce n'est pas une préférence, c'est une contrainte, et elle s'écrit dans le bloc 6.

## Le gabarit : sept blocs, deux pages

**Page 1 — le problème et l'usage.**

1. **Le problème en trois phrases.** Comment ça se passe aujourd'hui, ce que ça coûte en temps par semaine, ce qui se casse quand ça rate. Pas de solution dans ce bloc. « Les interventions sont notées sur un carnet puis recopiées le vendredi dans un tableur partagé ; environ trois heures par semaine ; deux factures oubliées le mois dernier. »
2. **Qui s'en sert.** Trois rôles au maximum, avec le nombre de personnes, la fréquence d'usage et le contexte physique : au bureau, debout dans un atelier, dans une camionnette avec un réseau faible. Ce dernier détail change l'architecture plus que n'importe quelle fonctionnalité.
3. **Les cinq cas d'usage, en phrases d'action.** Un sujet, un verbe, un résultat observable. « Un technicien clôture une intervention depuis son téléphone et joint deux photos. » « Le responsable d'exploitation voit, le lundi, les interventions non facturées de la semaine passée. » Cinq, pas quinze.
4. **Les données entrantes et sortantes.** D'où elles viennent, où elles vont, lesquelles sont personnelles, qui y accède, combien de temps on les garde. Une ligne par jeu de données. C'est le bloc que personne n'écrit et celui qui détermine le contrat, la sécurité et le coût.

**Page 2 — les limites et la réussite.**

5. **Ce qui est hors périmètre.** Explicitement. « Pas de gestion de stock. Pas de paie. Pas de portail client. Pas d'application mobile installable à la version 1 : le navigateur du téléphone suffit. » Sans ce bloc, tout est implicitement dedans, et chaque réunion en rajoute.
6. **Les contraintes non négociables.** Hébergement dans l'Union européenne ou non, intégrations obligatoires et dans quel sens, mode d'authentification, Peppol si l'outil facture, sauvegarde avec restauration testée, durées de conservation. Cinq à huit lignes. Distinguez contrainte et préférence : une contrainte justifie un surcoût, une préférence non.
7. **Comment on saura que c'est réussi.** Deux ou trois mesures observables, avec une date. « Au 31 mars, plus aucune intervention recopiée à la main. » « Clôture d'une intervention en moins de soixante secondes, mesurée sur dix essais. »

La règle qui tient le document : **chaque ligne doit être vérifiable**. « L'outil doit être intuitif » n'est pas une exigence, c'est un souhait. « Un nouveau technicien clôture sa première intervention sans formation, en moins de deux minutes » en est une.

## Ce qui bloque en pratique

**Le document écrit par une seule personne.** Dans neuf cas sur dix, l'auteur n'est pas celui qui utilisera l'outil. Faites relire les cinq cas d'usage par la personne qui fait le travail, et notez ses objections telles quelles, sans les lisser. Le cas d'usage qu'elle ajoute spontanément est souvent le vrai cœur du besoin.

**Le hors périmètre resté vide.** C'est le bloc qu'on saute parce qu'il semble négatif. Il est le seul qui protège le budget. Un prestataire sérieux chiffre ce qui est écrit ; sans limite écrite, il chiffre large ou il chiffre faux, et dans les deux cas vous payez.

**Les données réelles jamais regardées.** « On reprendra le tableur » se dit facilement avant de l'avoir ouvert. Sortez un export anonymisé dès la première semaine et comptez les lignes vides, les doublons, les dates en texte, les trois orthographes du même fournisseur. La reprise de données est le poste qui déborde le plus souvent, et il se mesure avant de signer.

## Par où commencer : deux semaines

**Semaine 1.** Une séance de quatre-vingt-dix minutes pour les blocs 1 à 4, avec la personne qui fait le travail dans la pièce. En parallèle, demandez l'export des données existantes et ouvrez-le.

**Semaine 2.** Les blocs 5 à 7, puis une relecture par l'utilisateur final et par celui qui paie. Si le document dépasse deux pages, c'est que le périmètre est trop large : coupez le périmètre, pas le document.

Ensuite, envoyez-le. Un prestataire qui répond à ces deux pages par des questions précises sur le bloc 4 a compris le projet. Celui qui répond par un prix et un délai sans une seule question sur les données ne l'a pas lu.

---

*Benjamin de Bruijne est consultant digital et IA indépendant en Belgique. Il construit des sites, des applications métier et des produits, et les pilote jusqu'en production. [Astérisme : concevoir et mettre en place](https://asterisme.ai/).*
