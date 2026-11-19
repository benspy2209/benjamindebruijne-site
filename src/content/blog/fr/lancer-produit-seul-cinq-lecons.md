---
title: "Lancer un produit seul : cinq leçons de BiblioPulse et Service-Volée"
description: "Retour d'expérience sur deux produits lancés sans équipe : ce qui compte vraiment, les pièges juridiques et un démarrage en deux semaines."
date: 2026-11-19
rubrique: construire
lang: fr
tags: [Construire, Produit digital, RGPD, AI Act, PME]
points:
  - "Un inscrit n'est pas un utilisateur : mesurez le premier usage"
  - "La fonction la plus visible n'est pas celle qui fait revenir"
  - "Mentions obligatoires et consentement : avant le lancement"
---

Lancer un produit seul, c'est décider de tout, y compris de ce qu'on ne fera pas. J'ai mis BiblioPulse en ligne en 2025 et Service-Volée en production en septembre 2026, sans équipe et sans un euro de publicité.

Les deux tournent encore. Voici ce qu'ils m'ont appris, en m'en tenant aux chiffres déjà publiés sur ce site, et ce que je referais autrement.

## Ce qui est vrai en 2026

Quatre faits encadrent n'importe quel lancement en Belgique. Trois sur quatre coûtent dix minutes quand on les traite au début.

**Un site d'entreprise doit s'identifier.** Le SPF Économie (economie.fgov.be) rappelle qu'une entreprise qui a un site web ou une page sur un réseau social doit y afficher son nom, son adresse, ses coordonnées — au moins une adresse e-mail — et son numéro d'entreprise, ce numéro à dix chiffres attribué à l'inscription à la Banque-Carrefour des Entreprises et commençant par 0 ou 1. Si l'activité est assujettie à la TVA, le numéro de TVA doit figurer aussi. Le même service a publié le résultat d'un contrôle de l'Inspection économique : sur 2 158 sites et pages analysés, 47,7 % ne mentionnaient pas les informations obligatoires sur l'identité du prestataire et 45,7 % n'indiquaient pas le numéro d'entreprise. Ce n'est pas un détail de conformité pour grandes structures : c'est le cas le plus fréquent.

**Les personnes doivent être informées au moment où vous collectez.** Le règlement (UE) 2016/679 (texte officiel sur eur-lex.europa.eu) demande, à son **article 13**, que les informations soient fournies « au moment où les données sont obtenues » quand elles viennent de la personne elle-même : identité et coordonnées du responsable du traitement, finalités et base juridique, destinataires ou catégories de destinataires, durée de conservation, droits de la personne. Son **article 12, paragraphe 1**, ajoute la forme : concise, transparente, compréhensible, aisément accessible, en termes clairs et simples. Écrite avant l'ouverture des inscriptions, cette page coûte une demi-journée ; écrite après, elle coûte une reprise du parcours.

**Un compte créé n'est pas un client.** La CNIL (cnil.fr) rappelle que la prospection par courrier électronique vers des particuliers suppose en principe un consentement préalable, libre, spécifique, éclairé et univoque : une action positive, par exemple une case dédiée et non pré-cochée, l'acceptation de conditions générales ne suffisant pas. Elle précise le point le plus souvent raté : l'exception qui permet d'écrire à ses clients existants pour des produits ou services similaires ne peut pas être mobilisée quand aucune vente ou prestation n'a été effectuée, y compris lorsque la personne a créé un compte en ligne. La CNIL indique par ailleurs que les adresses collectées sur les espaces publics du web ne doivent pas servir à la prospection. C'est une autorité française : pour votre cas, le point d'interprétation se confirme avec votre conseil ou l'autorité belge.

**Si le produit contient un chat, il doit se présenter.** Le règlement (UE) 2024/1689 sur l'intelligence artificielle s'applique depuis le 2 août 2026 et impose, à son **article 50, paragraphe 1**, que les systèmes destinés à interagir directement avec des personnes soient conçus pour que celles-ci sachent qu'elles interagissent avec une IA, sauf si c'est évident pour une personne normalement informée et attentive. L'information doit être claire, distinguable, et donnée au plus tard lors de la première interaction. Nuance à écrire telle quelle : la Commission prépare des lignes directrices sur l'application pratique de l'article 50, et le délai transitoire du marquage des contenus générés (paragraphe 2) diffère selon les documents publiés ; vérifiez le statut en vigueur sur eur-lex.europa.eu.

## Les cinq leçons

1. **Un inscrit n'est pas un utilisateur.** Les chiffres publiés de BiblioPulse : 378 inscrits, 4 800 livres catalogués par 172 lecteurs. Moins d'un inscrit sur deux a scanné un livre. Ce n'est pas un échec : c'est la mesure qui compte. Définissez le **premier geste utile** de votre produit — un livre scanné, une fiche consultée, un devis envoyé — et instrumentez celui-là. Le compteur d'inscrits ne dit rien, parce qu'il monte même quand le produit ne sert à personne.

2. **La fonction la plus visible n'est pas celle qui fait revenir.** BiblioPulse se raconte par son scan de code-barres relié au catalogue ISBNdb et ses 44 millions de références. Ce dont les lecteurs parlent, c'est l'anti-doublons et la pile à lire partageable. Service-Volée se raconte par son volume : plus de 76 000 fiches joueurs et plus de 300 000 matchs indexés depuis les données publiques de la fédération. Ce qu'on me demande, c'est la projection de classement et le compteur de match sur mobile. La fonction qui fait la promesse et celle qui fait revenir sont rarement la même. Ne coupez pas la seconde pour polir la première.

3. **Mesurer coûte moins cher qu'affirmer.** L'Observatoire a interrogé quatre modèles d'IA avec des prompts figés sur des populations entières : 488 comptables namurois, 382 plombiers namurois, 798 comptables du Brabant wallon, soit 1 668 sociétés. Chaque nom cité a été rapproché du registre officiel et classé à la main. Résultat publié : 96,9 %, 98,4 % et 96,6 % d'invisibilité. Coût total des trois campagnes : moins de cinq euros d'API. Un protocole reproductible — mêmes questions, mêmes modèles, échantillon exhaustif, limites écrites — vaut mieux qu'une conviction, et tient dans le budget d'un lancement en solo.

4. **La dette invisible se paie en un audit daté.** Sur BiblioPulse, l'audit complet d'août 2026 a divisé par trente le poids du chargement initial. Rien ne s'était « cassé » : la page était devenue lourde, un ajout après l'autre, et personne ne l'avait mesurée. Inscrivez l'audit au calendrier avant d'en avoir besoin. Dans la même logique, la décision la plus utile est parfois une fonction qu'on refuse : la monétisation prévue pour BiblioPulse passe par l'affiliation, sans vendre les données des lecteurs.

5. **La plomberie d'abord, la promotion ensuite.** Ce qui se rattrape mal après coup : les clés d'API protégées côté serveur, le prérendu statique pour le référencement, une application installable, un nom de domaine propre, un crawl planifié qui n'écrase pas la source, des e-mails d'accueil automatisés et les pages légales. Ce qui se rattrape bien : le design, le texte de la page d'accueil, l'ordre des fonctions. J'ai inversé les deux une fois ; je ne le referai pas.

## Ce qui bloque en pratique

**Le compteur d'inscrits est trop agréable à regarder.** Il monte, il se partage, il ne prouve rien. Remplacez-le dès la première semaine par deux nombres : combien de personnes ont fait le premier geste utile, et combien l'ont refait sept jours plus tard.

**L'e-mail d'accueil part avant d'être permis.** C'est le piège le plus courant d'un produit gratuit : un compte créé, une séquence d'onboarding qui démarre, et une prospection sans base. Séparez techniquement deux choses à l'inscription : les messages nécessaires au service, et les messages commerciaux, ces derniers derrière une case décochée par défaut.

**« Les pages légales, on verra au lancement. »** Elles ne se voient jamais, parce qu'au lancement il y a autre chose. Les chiffres du contrôle de l'Inspection économique montrent à quel point c'est répandu. Écrivez-les quand le produit n'a pas encore d'utilisateurs : c'est le seul moment où la page d'information est facile à rédiger.

## Par où commencer : deux semaines

**Semaine 1.** Écrivez la phrase qui définit le premier geste utile, et vérifiez que vous savez le compter. Mettez les mentions obligatoires au pied du site : nom, adresse, e-mail, numéro d'entreprise, TVA si vous êtes assujetti. Rédigez la page d'information des personnes dans l'ordre de l'article 13 : qui, pourquoi, sur quelle base, à qui les données vont, combien de temps, quels droits.

**Semaine 2.** Séparez inscription et consentement commercial, avec une case décochée et un lien de désinscription dans chaque envoi. Testez une restauration de sauvegarde, pas seulement la sauvegarde. Si le produit contient un assistant ou un chat, écrivez la mention qui dit qu'il s'agit d'une IA et placez-la avant la première interaction. Fixez maintenant la date du premier audit de performance, dans six mois.

Au bout de deux semaines, le produit n'aura pas plus d'utilisateurs. Il aura une mesure qui veut dire quelque chose et deux pièges désamorcés : exactement ce qui manque à la plupart des lancements en solo.

---

*Benjamin de Bruijne est consultant digital et IA indépendant en Belgique. Il construit des sites, des applications métier et des produits, et les pilote jusqu'en production. [Astérisme : concevoir et mettre en place](https://asterisme.ai/).*
