---
title: "Devis, facture, relance : automatiser sans changer de logiciel"
description: "Les trois flux à automatiser autour d'un logiciel de facturation belge, ce qui doit rester manuel, et le premier flux en deux semaines."
date: 2026-10-20
rubrique: automatisation
lang: fr
tags: [Automatisation, Facturation, Peppol, PME, Belgique]
points:
  - "Le logiciel compta reste : on automatise autour de lui"
  - "Trois flux seulement : devis, suivi, relance"
  - "La remise, le litige et le ton restent humains"
---

Un indépendant m'explique sa soirée du jeudi : recopier un devis accepté dans son logiciel de facturation, vérifier dans un relevé bancaire qui a payé, puis écrire quatre mails de relance en se demandant à chaque fois s'il n'exagère pas. Trois heures, chaque semaine, pour des tâches qui n'apportent rien à ses clients.

La première réaction est presque toujours la même : « il faut changer de logiciel ». C'est rarement vrai. Le logiciel de facturation fait son métier — numéroter, calculer la TVA, sortir le journal pour le comptable. Ce qui manque, c'est ce qui se passe **avant** et **après** lui. On automatise autour, on ne remplace pas.

## Ce qui est vrai en 2026

Avant de brancher quoi que ce soit, il faut savoir où en est l'obligation belge, parce qu'elle décide du format de sortie de votre facturation.

Depuis le **1er janvier 2026**, les entreprises belges assujetties à la TVA doivent s'échanger des **factures électroniques structurées** : des factures qui passent directement d'un logiciel à l'autre, et non un PDF joint à un mail. Le portail officiel du SPF Finances et du BOSA, efacture.belgium.be, décrit ces factures comme devant respecter les normes européennes **EN 16931-1** (sémantique) et **CEN/TS 16931-2** (syntaxe), et en pratique passer par le réseau **Peppol**, au format Peppol BIS.

Le même portail liste des situations exclues : les entreprises non établies en Belgique et sans établissement stable, les assujettis au régime forfaitaire de l'article 56 du Code de la TVA, et les opérations exemptées en vertu de l'article 44. Les factures aux particuliers (B2C) ne sont pas visées par l'obligation d'échange structuré — mais une entreprise doit malgré tout pouvoir **recevoir** les factures structurées de ses fournisseurs.

Une précision de calendrier. efacture.belgium.be a publié une actualité intitulée « Fin de la période de tolérance pour l'e-facturation » : la tolérance générale qui couvrait les trois premiers mois de 2026 est terminée. Il y subsiste une exception ciblée pour le *self-billing* (la facturation établie par le client) : pas d'amende jusqu'au 30 juin 2026 inclus lorsque le logiciel du fournisseur n'est pas encore prêt, et des problèmes techniques exceptionnels peuvent être examinés au cas par cas. Les dates affichées par ce portail n'étaient pas toutes cohérentes au moment où je l'ai consulté : vérifiez l'état exact sur efacture.belgium.be avant de vous appuyer dessus.

Côté réseau, OpenPeppol décrit un modèle à quatre coins : le vendeur (C1) confie l'envoi à un point d'accès (C2), qui livre au point d'accès du destinataire (C3), qui remet la facture à l'acheteur (C4). Le point d'accès émetteur valide le message sortant contre les spécifications Peppol BIS avant de l'envoyer, et retrouve le destinataire via un annuaire central, le SML, opéré par la Commission européenne. La promesse tient en trois mots : *connect once, reach all*. Vous vous connectez une fois, vous atteignez tout le monde.

Conséquence pratique : votre logiciel de facturation doit émettre dans ce format et être raccordé au réseau. C'est **sa** responsabilité, pas celle de votre automatisation. Les trois flux ci-dessous se branchent autour de lui.

## Les trois flux, dans l'ordre

1. **Devis accepté → facture.** Le devis existe déjà quelque part : un document, un formulaire, une ligne de tableur. L'automatisation prend cette ligne au moment où le statut passe à « accepté » et crée le brouillon de facture dans le logiciel de facturation, avec le client, les lignes, les quantités et le taux de TVA. Elle ne valide pas, elle ne numérote pas, elle ne l'envoie pas. Elle supprime la recopie, qui est la seule chose pénible du flux.
2. **Facture émise → suivi.** Dès qu'une facture est émise, son numéro, son montant, sa date et son échéance atterrissent dans une seule liste de suivi. Un rapprochement avec les encaissements marque les lignes payées. Ce flux ne produit aucun mail : il produit une réponse à la question « qui doit quoi, aujourd'hui ».
3. **Échéance dépassée → relance.** À J+7 puis J+30 après l'échéance, un **brouillon** de relance est préparé pour chaque facture encore ouverte, avec le numéro, le montant, la date d'échéance et le lien de paiement. Vous relisez, vous envoyez. C'est trente secondes au lieu de dix minutes, et vous gardez la main sur le ton.

Si vous automatisez ces trois flux et rien d'autre, vous avez récupéré l'essentiel des trois heures.

## La relance a un cadre légal, et il n'est pas le même pour tous

C'est le point que les automatisations de relance ratent le plus souvent : la cadence J+7 / J+30 convient à un client professionnel, pas à un particulier.

Entre entreprises, le SPF Économie renvoie à la **loi du 2 août 2002** concernant la lutte contre le retard de paiement dans les transactions commerciales : les intérêts de retard ne peuvent pas dépasser le taux directeur majoré de huit points de pourcentage. Le SPF Économie précise aussi qu'il n'existe pas de délai minimum légal pour payer une facture impayée : si vos conditions générales ne fixent rien, le montant est en principe immédiatement exigible. D'où l'intérêt d'avoir une échéance écrite dans les conditions générales — c'est elle que votre automatisation lira.

Face à un consommateur, les règles sont plus serrées. Le SPF Économie expose, pour les contrats conclus à partir du 1er septembre 2023, que le **premier rappel est gratuit**, que le consommateur dispose ensuite d'au minimum **14 jours calendrier** pour payer, et qu'aucun frais ni intérêt ne peut lui être réclamé pendant ce délai. Pour les livraisons régulières de biens ou de services, la gratuité est limitée à trois échéances impayées par an ; à partir de la quatrième, un montant maximal de 7,50 euros plus les frais postaux peut être réclamé. Les indemnités de recouvrement sont elles-mêmes plafonnées selon le montant dû.

Traduit en automatisation : un seul interrupteur dans votre liste de suivi, « client professionnel » ou « consommateur », et deux cadences distinctes. Pour les cas d'interprétation — ce que vous pouvez réclamer, à partir de quand — confirmez avec votre comptable ou votre conseil.

## Ce qui bloque en pratique

**La donnée de référence est partout et nulle part.** Le nom du client existe en trois orthographes, l'adresse en deux versions. Décidez quel outil détient la vérité (le plus souvent le logiciel de facturation) et faites écrire les autres **vers** lui, jamais l'inverse.

**On automatise l'envoi au lieu de la préparation.** Une relance partie toute seule sur une facture déjà payée par virement non encore rapproché, c'est un client agacé pour deux minutes gagnées. Gardez l'envoi manuel sur le flux 3, au moins les deux premiers mois.

**On oublie les enregistrements.** La facturation reste un domaine sanctionné : le SPF Finances punit l'absence ou l'inexactitude des mentions à porter sur les factures, et son instruction sur la politique d'amendes TVA du 20 février 2025 cite aussi l'article 60, défaut de conservation des livres et documents. Une automatisation qui crée des brouillons dans votre logiciel reste dans le cadre ; une qui génère des factures en dehors de lui vous en sort. Pour les durées de conservation exactes, vérifiez sur finances.belgium.be.

## Par où commencer : deux semaines, un seul flux

Semaine 1 : écrivez les trois flux à la main sur une feuille, avec pour chacun le déclencheur, la source de la donnée et le résultat attendu. Choisissez-en **un** — le flux 2, le suivi, est le meilleur premier choix : il ne touche rien, il ne peut pas envoyer de bêtise, et il rend visible ce que vous ne voyez pas aujourd'hui.

Semaine 2 : branchez-le sur les données réelles du mois en cours, comparez son résultat à votre relevé bancaire, corrigez les écarts. Quand la liste de suivi est juste trois semaines de suite, passez au flux 1, puis au flux 3.

Ce qui ne s'automatise pas, enfin : accorder une remise, traiter un litige, décider de passer un montant en perte, et choisir les mots d'une relance à un client qu'on veut garder. Ce sont des décisions, pas des tâches.

---

*Benjamin de Bruijne est consultant digital et IA indépendant en Belgique. Il automatise les tâches répétitives des PME et met l'IA là où elle enlève une corvée précise. [Astérisme : l’IA dans vos process](https://asterisme.ai/).*
