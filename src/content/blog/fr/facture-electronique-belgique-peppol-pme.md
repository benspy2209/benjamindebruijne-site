---
title: "Facture électronique en Belgique : ce qui change vraiment pour une PME"
description: "L'obligation belge de facture électronique structurée : périmètre réel, réseau Peppol, côté réception, et les questions à poser à son logiciel."
date: 2026-10-27
rubrique: automatisation
lang: fr
tags: [Automatisation, Facturation, Peppol, PME, Belgique]
points:
  - "Peppol BIS et EN 16931, pas un PDF joint à un mail"
  - "Recevoir est obligatoire, même en franchise de TVA"
  - "Quatre questions à votre logiciel avant toute automatisation"
---

Un cabinet comptable me décrit sa semaine : trois clients PME ont reçu un rappel de leur fournisseur de logiciel au sujet de l'e-facturation, et aucun des trois ne savait s'il était concerné. Deux l'étaient des deux côtés. Le troisième ne facture que des particuliers et se croyait hors sujet : il l'était pour l'envoi, pas pour la réception.

C'est tout le problème de cette obligation. Le format n'est pas difficile, le réseau encore moins. Ce qui coûte cher, c'est de se croire en dehors du périmètre, ou de n'avoir préparé que la moitié du chemin.

## Ce qui est vrai en 2026

Depuis le **1er janvier 2026**, les entreprises belges assujetties à la TVA doivent s'échanger des **factures électroniques structurées**. Le portail officiel du SPF Finances et du BOSA, efacture.belgium.be, est explicite : ce sont des factures qui passent directement d'un logiciel à l'autre, et l'envoi d'une facture en format PDF par e-mail ou par plate-forme ne suffit plus.

Le format par défaut est **Peppol BIS**, échangé via le **réseau Peppol**, conforme à la norme européenne **EN 16931**. Le même portail laisse la porte ouverte à un autre format en cas d'accord mutuel entre les parties, pour autant que la norme EN 16931 soit respectée. Pour une PME qui n'a pas de service informatique, c'est Peppol, et la question est réglée.

Deux repères de calendrier, toujours selon efacture.belgium.be. Vers les pouvoirs publics — le B2G, *business-to-government* —, l'e-facturation est obligatoire pour les contrats publiés après le 1er mars 2024. Et la période générale de tolérance qui couvrait les trois premiers mois de 2026 est terminée ; il subsiste une tolérance ciblée jusqu'au 30 juin 2026 inclus pour le *self-billing* (la facture établie par le client lui-même), lorsque le logiciel du fournisseur est en cours de mise en place mais pas encore opérationnel. Ces dates bougent au fil des publications : vérifiez l'état en vigueur sur efacture.belgium.be avant de vous appuyer dessus.

## Êtes-vous concerné ? Le test en trois questions

**Êtes-vous établi en Belgique ?** L'obligation ne vise que les entreprises établies en Belgique. Un assujetti non établi, sans établissement stable, en est exclu — même s'il dispose d'un numéro de TVA belge. Le portail précise d'ailleurs que, vu la complexité de la règle, c'est à cette entreprise d'informer elle-même ses partenaires commerciaux.

**Votre chiffre d'affaires est-il petit ?** Cela ne change rien. efacture.belgium.be indique que les assujettis dont le chiffre d'affaires ne dépasse pas 25 000 euros, et qui bénéficient donc de la franchise de TVA, sont en principe également soumis à l'obligation.

**Facturez-vous uniquement des particuliers ?** Vos factures sortantes vers des clients privés ne sont pas visées par l'obligation d'échange structuré. Mais vous devez malgré tout être **en mesure de recevoir** les factures électroniques structurées de vos fournisseurs belges. C'est l'oubli le plus fréquent.

Restent deux exclusions ciblées, décrites par le même portail : lorsqu'une opération est exemptée en vertu de l'article 44 du Code de la TVA, ni l'envoi ni la réception ne sont requis ; et les assujettis au régime forfaitaire de l'article 56 bénéficient d'une exception à l'obligation d'émettre, qui prendra fin au plus tard le 1er janvier 2028. Les assujettis en faillite sont également hors obligation d'émission. Si votre situation se joue sur un de ces articles, faites-le confirmer par votre comptable : c'est un point d'interprétation, pas une case à cocher.

## Ce que le réseau Peppol fait, et ce qu'il ne fait pas

OpenPeppol décrit un modèle à quatre coins : vous confiez l'envoi à un **point d'accès**, qui livre au point d'accès de votre client, qui remet la facture dans son logiciel. Pour retrouver le destinataire, le point d'accès émetteur interroge d'abord un annuaire central, le **SML**, opéré par la Commission européenne, puis le registre du prestataire destinataire, le **SMP**, pour savoir quels documents ce destinataire accepte réellement. C'est le prestataire qui enregistre ses clients dans ce SMP, en listant les spécifications qu'ils acceptent.

Conséquence : vous vous connectez une fois, et vous atteignez tout le monde. Le guide pas-à-pas d'efacture.belgium.be ajoute que le logiciel choisi se charge généralement de votre enregistrement sur Peppol — à vous de vérifier que tout est correct. Et cet enregistrement vaut accord pour recevoir des factures structurées.

Ce que le réseau ne fait pas : vérifier que le montant est juste, que le bon de commande existe, ou que la facture entre dans la bonne catégorie comptable. Le réseau transporte et valide un format. Le reste est votre processus.

## Les quatre questions à poser à votre logiciel

Avant d'acheter quoi que ce soit, posez ces quatre questions à votre éditeur ou à votre point d'accès. Les réponses décident de tout le reste.

1. **Émettez-vous en Peppol BIS conforme à EN 16931, et par quel point d'accès ?** Un export « XML » générique n'est pas une réponse.
2. **Recevez-vous aussi, et où arrivent les factures entrantes ?** Dans le logiciel, dans une boîte mail, chez le comptable ? Une facture reçue que personne ne regarde est une facture perdue.
3. **Sous quel identifiant suis-je publié sur le réseau, et depuis quand ?** Vous devez pouvoir le vérifier, pas le supposer.
4. **Le surcoût lié à l'e-facturation apparaît-il séparément sur votre facture ?** Cette question a une conséquence fiscale directe, décrite ci-dessous.

Sur ce dernier point, efacture.belgium.be décrit des incitants : pour les exercices 2024 à 2027, les PME et indépendants qui passent par un abonnement peuvent appliquer une majoration de 120 % sur les frais de facturation et de conseil liés aux nouvelles obligations, le surcoût d'un abonnement existant entrant dans le régime à condition d'apparaître séparément sur la facture. Le portail précise que la majoration ne couvre que les coûts directs de préparation, et jamais les amortissements, et que la déduction pour investissement numérique est portée à 20 % depuis le 1er janvier 2025. Le détail du calcul est un sujet pour votre comptable, pas pour un article de blog.

## Ce qui bloque en pratique

**Prendre la mesure de repli pour une dispense.** efacture.belgium.be prévoit que si le destinataire ne peut pas, pour des raisons techniques, recevoir de factures électroniques, le fournisseur n'est pas tenu d'en émettre une et peut établir une facture papier ou un PDF. Le même texte ajoute que cela ne dispense pas le destinataire de son obligation de pouvoir recevoir, et qu'il doit prendre sans délai les dispositions nécessaires. Ce n'est pas une porte de sortie, c'est un sursis.

**Croire que l'annuaire public dit toute la vérité.** OpenPeppol permet de chercher un participant par nom, identifiant ou pays dans le Peppol Directory, et efacture.belgium.be renvoie vers cet annuaire pour voir quels clients sont prêts. Mais OpenPeppol précise que son alimentation dépend des opérateurs de SMP et n'est pas obligatoire aujourd'hui : tous les destinataires enregistrés n'y figurent pas. Absent de l'annuaire ne veut donc pas dire injoignable. En cas de doute, la question se pose à votre point d'accès.

**Laisser circuler le PDF en parallèle.** Pendant la transition, beaucoup envoient la facture structurée *et* un PDF « pour que le client ait une copie ». Trois mois plus tard, personne ne sait plus laquelle des deux a été payée. Une facture, un canal, une source de vérité.

## Par où commencer, en deux semaines

**Semaine 1.** Listez vos trois flux : factures sortantes vers des entreprises belges, factures sortantes vers des particuliers ou l'étranger, factures entrantes. Posez les quatre questions ci-dessus. Puis demandez à un fournisseur déjà équipé de vous envoyer une vraie facture, et regardez où elle arrive.

**Semaine 2.** Vérifiez votre publication sur le réseau et l'identifiant utilisé. Envoyez une facture réelle à un client joignable. Décidez qui ouvre les factures entrantes et à quelle fréquence, et écrivez-le quelque part.

Ensuite, et seulement ensuite, on parle d'automatiser le reste : le rapprochement des paiements, les relances, le reporting. Automatiser un flux dont le format n'est pas encore stable, c'est construire sur du sable.

---

*Benjamin de Bruijne est consultant digital et IA indépendant en Belgique. Il automatise les tâches répétitives des PME et met l'IA là où elle enlève une corvée précise. [Automatiser : IA, données, CRM](/services/automatiser/).*
