---
title: "Boîte mail partagée : faire trier par un LLM, répondre en humain"
description: "Faire trier et router une boîte mail partagée par un LLM sans lui laisser répondre : catégories, RGPD, taux d'erreur et limites."
date: 2026-11-24
rubrique: automatisation
lang: fr
tags: [Automatisation, PME, Belgique, RGPD, Email]
points:
  - "L'IA classe et route, la personne répond : la règle de base"
  - "Cinq catégories maximum, écrites avant tout branchement"
  - "Jamais d'envoi automatique : un brouillon, puis validation"
---

Un cabinet comptable de six personnes reçoit une centaine de messages par jour sur une seule adresse générique. Chaque matin, quelqu'un y passe quarante minutes à lire, trier et transférer — et deux ou trois demandes importantes passent quand même sous le radar jusqu'au lendemain.

La question qui arrive ensuite est toujours la même : est-ce qu'une IA peut gérer cette boîte ? Ma réponse tient en une phrase : elle peut la trier et la router, pas la gérer. Ce n'est pas une nuance de vocabulaire, c'est la ligne qui sépare un gain de temps réel d'un incident client.

## Ce qui est vrai en 2026

**Regarder une boîte professionnelle est encadré, même quand l'adresse est générique.** L'Autorité de protection des données (APD) belge, sur sa page consacrée à la surveillance électronique sur Internet et e-mail, rappelle qu'un employeur peut surveiller les communications électroniques faites avec les ressources mises à disposition pour le travail, mais dans le respect du droit à la vie privée et du secret de la correspondance. Trois principes s'appliquent : finalité, proportionnalité, transparence. Le travailleur doit être informé du contrôle éventuel et de la manière dont il est mené. L'APD précise aussi qu'elle ne retient pas le consentement du travailleur comme base légale, en raison de sa position de subordination. La recommandation n° 08/2012 de l'ancienne Commission de la protection de la vie privée ajoute qu'une boîte de réception pouvant toujours contenir des informations non professionnelles, il est préférable de passer par une personne de confiance intermédiaire plutôt que de lire directement le contenu des messages.

**Le fournisseur du modèle est un sous-traitant, pas un outil neutre.** L'article 28 du règlement (UE) 2016/679 (RGPD) impose que le traitement par un sous-traitant soit régi par un contrat ou un autre acte juridique, précisant l'objet, la durée, la nature et la finalité du traitement, le type de données et les catégories de personnes concernées. Le sous-traitant ne traite les données que sur instruction documentée du responsable, ne recrute pas un autre sous-traitant sans autorisation écrite préalable, et ne transfère des données vers un pays tiers que sur instructions documentées.

**Et l'autorité qui s'est exprimée le plus concrètement sur l'usage d'un grand modèle de langage (LLM) conseille d'en envoyer le moins possible.** Dans ses questions-réponses sur l'utilisation d'un système d'IA générative, la CNIL recommande d'être particulièrement vigilant sur les données soumises au système, en évitant autant que possible la saisie de données personnelles. Elle rappelle que c'est l'organisme utilisateur qui engage sa responsabilité en cas de mauvaise utilisation par son personnel, d'où la nécessité de former les utilisateurs aux limites du système et aux usages autorisés. Elle note aussi qu'un assistant d'aide à la rédaction pour les salariés présente moins de risques qu'un système d'aide à la décision visant des clients ou des candidats.

## Classer n'est pas répondre

Deux métiers se cachent derrière « gérer la boîte ». Classer, c'est lire un message et lui coller une étiquette plus une destination. Répondre, c'est engager l'entreprise.

L'article 22 du RGPD trace la limite : une personne a le droit de ne pas faire l'objet d'une décision fondée exclusivement sur un traitement automatisé qui produit des effets juridiques la concernant ou l'affecte de manière significative. Des dérogations existent — consentement explicite, nécessité contractuelle, autorisation légale — et imposent alors des garanties, dont le droit d'obtenir une intervention humaine et de contester la décision.

Transférer un message au bon collègue n'est pas une décision de ce type. Envoyer automatiquement un refus de candidature, un refus de prise en charge ou un rejet de réclamation, oui. La méthode qui suit est construite pour rester du bon côté de cette ligne.

## La méthode, étape par étape

1. **Écrire les catégories à la main, avant tout outil.** Cinq maximum, plus une catégorie « autre » assumée. Pour le cabinet : nouvelle demande, question d'un client existant, document reçu à classer, facture ou paiement, démarchage. Si vous n'arrivez pas à écrire la définition d'une catégorie en une phrase, elle n'existe pas encore.

2. **Mesurer la boîte avant de la toucher.** Deux cents messages réels, étiquetés à la main, une après-midi. Ce fichier devient votre référence : sans lui, impossible de dire si le classement automatique est bon.

3. **Décider ce qui sort de la boîte.** Le principe de limitation des finalités et celui de minimisation, à l'article 5 du RGPD, demandent que les données soient limitées à ce qui est nécessaire au regard de la finalité. Pour classer, l'objet et les premières lignes suffisent le plus souvent. Pas le fil entier, pas les pièces jointes, pas l'historique de douze échanges.

4. **Brancher le classement, pas l'envoi.** Le modèle produit une étiquette, une destination et un niveau de certitude. En dessous du seuil, la catégorie est « autre » et le message part vers l'humain. Un classement qui hésite doit être visible, pas lissé.

5. **Le brouillon, jamais l'envoi.** Pour une ou deux catégories où la réponse est standard, le modèle prépare un brouillon dans la boîte. Une personne le lit et l'envoie. Le gain de temps est réel et il ne crée aucun engagement non relu.

6. **Journaliser et annoncer.** Un journal par message : identifiant, catégorie proposée, destination, correction humaine éventuelle. Et une note d'information à l'équipe, écrite, qui dit ce qui est lu par la machine, pourquoi et par qui c'est consultable. C'est exactement ce que demande le principe de transparence rappelé par l'APD.

## Mesurer le taux d'erreur

Deux chiffres suffisent, et ils ne se valent pas.

Le premier est le taux de classement faux : combien de messages n'ont pas reçu l'étiquette que vous auriez mise. Le second est le seul qui coûte de l'argent : combien de messages importants ont été classés en démarchage ou en document à classer. Une demande de devis partie au mauvais endroit se paie ; un démarchage mal rangé, non.

Relevez ces deux chiffres chaque semaine pendant un mois, puis chaque mois. Et fixez d'avance le seuil auquel vous arrêtez : si, après deux réécritures des catégories, plus d'un message sur vingt part au mauvais endroit, le problème n'est pas le modèle, ce sont les catégories.

## Ce qui bloque en pratique

**Les catégories qui sont des jugements.** « Important » et « urgent » ne sont pas des catégories, ce sont des conclusions. Réécrivez-les en faits observables : « contient une date d'échéance », « vient d'une adresse inconnue », « mentionne un montant ».

**L'envoi automatique qui revient par la petite porte.** Trois semaines après la mise en route, quelqu'un active une réponse automatique « juste pour les confirmations ». Une confirmation qui annonce un délai ou un prix est un engagement. La règle à écrire une fois pour toutes : la machine n'envoie jamais un message contenant un montant, une date d'engagement ou un refus.

**La boîte qui contient autre chose que du travail.** Une adresse générique reçoit des candidatures, des certificats médicaux, des messages privés envoyés à la mauvaise adresse. La CNIL rappelle qu'un traitement de données sensibles doit relever d'une exception de l'article 9.2 du RGPD — autrement dit, ce n'est pas un détail de paramétrage. La réponse pratique est simple : sortez ces flux de la boîte générique, donnez-leur leur propre adresse, et ne les faites pas passer par le modèle. Pour l'interprétation de votre cas, confirmez avec votre conseil ou votre délégué à la protection des données.

## Par où commencer en deux semaines

**Semaine 1 — la boîte sur papier.** Exportez deux cents messages, étiquetez-les à la main, écrivez les cinq catégories. Rédigez la note d'information à l'équipe. Et posez trois questions à votre fournisseur, par écrit : où les données sont traitées, quels sous-traitants interviennent, combien de temps les requêtes sont conservées. Pas de réponse écrite, pas de branchement.

**Semaine 2 — le classement à blanc.** Le modèle classe, mais ne route rien : il écrit son étiquette dans un coin et vous comparez avec la vôtre pendant cinq jours. Au bout des cinq jours, activez le routage pour les deux catégories les plus fiables seulement. Les autres restent manuelles jusqu'au mois suivant.

À la fin, vous devez tenir une page : les catégories, ce qui sort de la boîte, qui valide quoi, où est le journal, et la date de la prochaine revue. Le jour où quelqu'un demande ce que fait l'IA sur la boîte info@, cette page est la réponse.

---

*Benjamin de Bruijne est consultant digital et IA indépendant en Belgique. Il automatise les tâches répétitives des PME et met l'IA là où elle enlève une corvée précise. [Astérisme : l’IA dans vos process](https://asterisme.ai/).*
