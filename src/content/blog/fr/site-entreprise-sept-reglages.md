---
title: "Site d'entreprise : sept réglages que personne ne fait, et qui comptent"
description: "Nom de domaine, HTTPS, sauvegardes, mentions, cookies, mesure, vitesse : sept réglages d'un site d'entreprise et leurs sources officielles."
date: 2026-11-26
rubrique: construire
lang: fr
tags: [Construire, Site web, RGPD, PME, Belgique]
points:
  - "Le nom de domaine doit être au nom de l'entreprise"
  - "Une sauvegarde jamais restaurée n'est pas une sauvegarde"
  - "En Belgique, la mesure d'audience demande un consentement"
---

Un site d'entreprise finit toujours par tourner tout seul. Il est en ligne, il ressemble à ce qui a été validé, plus personne n'y touche — et c'est exactement là que les problèmes s'installent, sans bruit, pendant deux ans.

Sept réglages reviennent dans tous les sites que je reprends. Aucun ne demande plus d'une heure. Ce sont toujours les mêmes qui manquent.

## Ce qui est vrai en 2026

**Le site n'est plus un projet, c'est un équipement.** Statbel (statbel.fgov.be, enquête TIC des entreprises) indique que neuf entreprises belges sur dix disposent d'un site web pour présenter leurs activités et leurs services. La question n'est donc plus « faut-il un site », mais « qui le règle ».

**Le site doit identifier l'entreprise.** Le SPF Économie (economie.fgov.be) rappelle qu'un site d'entreprise doit afficher son nom, son adresse, ses coordonnées — au moins une adresse e-mail — et son numéro d'entreprise, ce numéro à dix chiffres attribué à l'inscription à la Banque-Carrefour des Entreprises. Le numéro de TVA s'ajoute si l'activité y est assujettie, et un numéro de téléphone si le site permet de conclure des contrats à distance avec des consommateurs. Le point qu'on oublie : ces informations doivent être faciles à trouver et accessibles en permanence. Une page orpheline, sans lien, ne remplit pas la condition.

**Les cookies non nécessaires demandent un consentement préalable.** L'Autorité de protection des données (autoriteprotectiondonnees.be) indique que le consentement doit en principe être recueilli **avant** le dépôt de tout cookie qui n'est pas strictement nécessaire, après une information sur l'identité du responsable du traitement, les finalités, les données collectées et la durée de vie des cookies. Il doit être libre, donné finalité par finalité, et actif : la poursuite de la navigation, la fermeture d'une bannière, les cases précochées et l'acceptation de conditions générales ne valent pas consentement, et les « cookie walls » sont jugés non conformes. Le point le plus souvent raté : l'APD considère qu'il n'existe pas d'exemption pour les cookies de mesure d'audience, même déposés par le site lui-même.

**Sauvegarder n'est pas l'obligation ; pouvoir rétablir l'est.** Le règlement (UE) 2016/679 (texte officiel sur eur-lex.europa.eu), à son **article 32, paragraphe 1**, demande des mesures appropriées et cite au point c) « les moyens permettant de rétablir la disponibilité des données à caractère personnel et l'accès à celles-ci dans des délais appropriés en cas d'incident physique ou technique », puis au point d) une procédure visant à tester, analyser et évaluer régulièrement l'efficacité des mesures.

**Si vous vendez en ligne, l'accessibilité est entrée dans le champ.** La directive (UE) 2019/882 (eur-lex.europa.eu) s'applique aux services fournis aux consommateurs après le 28 juin 2025, sous réserve des exceptions de son article 32. Pour le commerce électronique, son annexe I prévoit notamment que les fonctions d'identification, de sécurité et de paiement soient perceptibles, utilisables, compréhensibles et robustes. Nuance à écrire telle quelle : les microentreprises qui fournissent des services sont exemptées, et l'application concrète passe par la transposition nationale ; vérifiez ce qui vous concerne sur eur-lex.europa.eu et avec votre conseil.

## Les sept réglages

1. **Le nom de domaine est au nom de l'entreprise.** Le titulaire déclaré doit être la société, pas un prestataire, pas un ancien stagiaire. L'adresse de contact du domaine doit être générique, pas la boîte d'une personne qui peut partir. Renouvellement automatique activé, date d'expiration au calendrier partagé. Le SPF Économie met par ailleurs en garde contre des démarcheurs frauduleux qui font payer aux entreprises des noms de domaine à des prix abusifs, en agitant la menace qu'un tiers achète le nom.

2. **HTTPS sur tout le site, pas seulement sur le formulaire.** Dans son guide pratique RGPD sur la sécurité des données personnelles, la CNIL (cnil.fr) recommande TLS 1.3, à défaut TLS 1.2, de proscrire SSL devenu obsolète, de rendre TLS obligatoire sur toutes les pages d'authentification, de formulaire ou qui affichent des données personnelles, et de forcer HTTPS via HSTS. C'est un guide qui recommande ; l'obligation, elle, reste la formule générale de l'article 32. Le piège concret : une image appelée en `http://` dans une page servie en `https://`, et le navigateur signale un contenu mixte.

3. **Une sauvegarde que vous avez déjà restaurée.** Tant que la restauration n'a pas été faite, vous avez un fichier, pas une sauvegarde. Restaurez pour de vrai, sur un environnement séparé, et notez deux nombres : le temps qu'il a fallu, et ce qui a été perdu entre la dernière copie et l'incident simulé. Gardez une copie en dehors du compte qui héberge le site : un accès compromis emporte sinon le site et ses sauvegardes ensemble.

4. **Les mentions obligatoires au pied de chaque page.** Nom, adresse, e-mail, numéro d'entreprise, TVA si assujetti, téléphone si vous concluez des contrats à distance avec des consommateurs. Au pied de page, parce que la condition est d'être facile à trouver et accessible en permanence. Dix minutes de travail, et c'est le manquement le plus banal.

5. **L'information des personnes, écrite avant le formulaire.** Un formulaire de contact collecte des données personnelles. La page qui l'accompagne dit qui est responsable, pourquoi, sur quelle base, à qui les données vont, combien de temps elles sont conservées, quels droits s'appliquent. Le « à qui » est celui qu'on bâcle : l'hébergeur, l'outil d'envoi d'e-mails et l'outil de mesure sont des destinataires, et chacun doit être couvert par un contrat de sous-traitance.

6. **Un chiffre utile, et le consentement qui va avec.** Choisissez un indicateur qui décide de quelque chose — demandes de contact par semaine, devis envoyés — et pas le nombre de visites, qui monte même quand rien n'arrive. Décidez ensuite en connaissance de cause : soit la mesure passe derrière un consentement conforme, soit vous vous passez de traceur. En Belgique, la position de l'APD ne laisse pas de troisième voie confortable. Et si beaucoup de visiteurs refusent, vos chiffres sont partiels : écrivez-le à côté du chiffre.

7. **La vitesse, mesurée sur un téléphone et un réseau lent.** Un site ne devient pas lent d'un coup : il s'alourdit d'un ajout à la fois, et personne ne le mesure. Sur BiblioPulse, l'audit complet d'août 2026 a divisé par trente le poids du chargement initial — rien ne s'était « cassé », la page avait simplement grossi. Fixez un plafond de poids pour la page d'accueil et comptez les scripts tiers : chacun est à la fois du poids et un destinataire de données en plus.

## Ce qui bloque en pratique

**« Le site est chez le prestataire. »** Cette phrase cache cinq comptes distincts : le registrar du domaine, l'hébergement, la zone DNS, le certificat, les outils de mesure et d'e-mail. Faites la liste maintenant, pas au moment où vous changez de prestataire : à ce moment-là, la discussion n'est plus technique.

**Le bandeau cookies posé par-dessus l'existant.** Un outil de bandeau installé en vingt minutes, alors que le script de mesure reste chargé dans l'en-tête et se déclenche avant le clic. Le bandeau rassure, le dépôt a déjà eu lieu. Ouvrez l'inspecteur du navigateur et regardez ce qui part avant que vous n'ayez cliqué.

## Par où commencer : deux semaines

**Semaine 1.** Inventaire des comptes — registrar, hébergement, DNS, certificat, mesure, e-mail — avec le titulaire et la date d'expiration de chacun. Remettez au nom de l'entreprise tout ce qui doit l'être, sur une adresse générique, en renouvellement automatique. Vérifiez HTTPS sur l'ensemble des pages. Mettez les mentions obligatoires au pied de page.

**Semaine 2.** Restaurez une sauvegarde pour de vrai et notez la date, la durée et ce qui a été perdu. Vérifiez qu'aucun traceur non nécessaire n'est déposé avant le clic, et que refuser est aussi simple qu'accepter. Écrivez la page d'information des personnes dans l'ordre : qui, pourquoi, sur quelle base, à qui, combien de temps, quels droits. Choisissez votre chiffre utile et mesurez la page d'accueil sur un téléphone.

« On refera le site l'an prochain » transforme un réglage de dix minutes en dix-huit mois d'exposition : ces sept points survivent à une refonte, ils ne dépendent ni du design ni de la technologie. Au bout de deux semaines, le site n'aura pas changé d'apparence. Il aura un propriétaire clair, une sauvegarde prouvée, des mentions en règle et un chiffre qui veut dire quelque chose. C'est la différence entre un site qu'on possède et un site qu'on subit.

---

*Benjamin de Bruijne est consultant digital et IA indépendant en Belgique. Il construit des sites, des applications métier et des produits, et les pilote jusqu'en production. [Astérisme : concevoir et mettre en place](https://asterisme.ai/).*
