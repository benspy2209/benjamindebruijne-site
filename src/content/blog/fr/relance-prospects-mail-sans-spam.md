---
title: "Relancer ses prospects par mail sans finir en spam"
description: "Base légale B2B, cadence sur trente jours, SPF, DKIM et DMARC : relancer par mail comme un processus, pas comme un coup de pression."
date: 2026-11-10
rubrique: automatisation
lang: fr
tags: [Automatisation, Prospection, RGPD, Délivrabilité, Belgique]
points:
  - "La relance est un processus, pas un coup de pression"
  - "En B2B : dire d'où viennent les données, faciliter le refus"
  - "On mesure les réponses, jamais les ouvertures"
---

Un indépendant m'a montré sa boîte d'envoi : quarante devis en trois mois, deux relances en tout, et cette phrase pour conclure — « relancer, ça fait mendiant ». Son taux de réponse était bas. Sa conclusion était fausse.

La relance échoue presque toujours pour deux raisons qui n'ont rien à voir avec le courage commercial. Une raison juridique : des adresses dont personne ne sait plus l'origine, et aucun moyen simple de dire stop. Une raison technique : des mails polis qui n'arrivent jamais, parce que le domaine d'envoi n'est pas authentifié. Les deux se règlent une fois pour toutes.

## Ce qui est vrai en 2026

**Le principe européen est le consentement, avec des exceptions.** La directive 2002/58/CE du Parlement européen et du Conseil du 12 juillet 2002 consacre son article 13 aux communications non sollicitées : l'envoi de courriers électroniques à des fins de prospection directe est soumis à l'accord préalable du destinataire. Son paragraphe 2 ouvre une exception, sous conditions, pour les coordonnées obtenues auprès de ses propres clients dans le cadre d'une vente. Le même article charge les États membres de protéger les intérêts légitimes des personnes morales.

**Écrire à un professionnel ne dispense pas du RGPD.** Dans son arrêt du 13 novembre 2025 (affaire C-654/23, *Inteligo Media*), la Cour de justice de l'Union européenne retient que lorsqu'un responsable du traitement utilise l'adresse électronique d'un utilisateur pour lui envoyer une communication non sollicitée, les conditions de licéité de l'article 6, paragraphe 1, du règlement 2016/679 (RGPD) s'appliquent. « C'est du B2B » n'est donc pas une base légale.

**L'Autorité de protection des données (APD) a réécrit sa doctrine.** Sa recommandation 01/2025 remplace la recommandation 01/2020 du 17 janvier 2020, après une consultation publique ouverte du 10 mars au 10 mai 2025. L'APD y rappelle que le RGPD n'impose pas une base juridique unique pour le marketing direct — les deux plus courantes étant le consentement et l'intérêt légitime — et qu'aucune présomption ne joue en sa faveur dans la mise en balance : c'est au responsable du traitement de démontrer que ses intérêts l'emportent, et que cela reste vrai dans le temps.

**Côté technique, la norme a changé de statut cette année.** DMARC, le mécanisme qui dit aux serveurs destinataires quoi faire d'un message échouant à l'authentification, était depuis 2015 un document « informational » (RFC 7489). Il est désormais spécifié par la RFC 9989, publiée en mai 2026 sur le chemin des normes (Standards Track), qui rend la précédente obsolète, avec la RFC 9990 pour les rapports agrégés et la RFC 9991 pour les rapports d'échec.

Une précision : la directive est européenne, sa transposition belge vit dans le Code de droit économique, et je ne cite pas d'article belge précis faute de référence officielle datée. Faites confirmer le texte applicable par votre conseil.

## La base légale, dite simplement

Trois situations, trois réponses.

- **Un consommateur** qui ne vous a rien demandé : accord préalable, point. C'est l'opt-in, que la CNIL formule de la même façon pour la publicité du professionnel au consommateur.
- **Un client existant** : vous pouvez réutiliser l'adresse obtenue lors de la vente, pour des produits ou services analogues, dans les conditions de l'article 13, paragraphe 2 — dont la possibilité de refuser, offerte dès la collecte et à chaque message.
- **Un prospect professionnel** : la prospection peut reposer sur l'intérêt légitime. La CNIL en pose les conditions : l'objet de la sollicitation doit être en rapport avec la profession de la personne démarchée (son exemple : un logiciel présenté à un directeur informatique), la personne doit être informée de l'origine de ses données et de la finalité du message, et pouvoir s'opposer simplement. Une adresse générique de type `contact@` ou `info@` ne nécessite pas d'accord, sous réserve des mêmes conditions.

Dans les trois cas, le droit d'opposition est le même, et il est absolu. L'article 21, paragraphe 2, du RGPD permet de s'opposer à tout moment à la prospection, profilage lié compris, sans se justifier ; le paragraphe 4 exige que ce droit soit porté explicitement à l'attention de la personne au plus tard lors de la première communication, clairement et séparément de toute autre information ; le considérant 70 précise : à tout moment et sans frais. La checklist marketing direct de l'APD traduit cela en pratique : opposition présentée clairement dans chaque communication, exerçable canal par canal, un simple clic pour les canaux numériques. Sa Chambre contentieuse a sanctionné le contraire : la décision 71/2022 relève des manquements aux articles 12.2, 21.2, 21.3 et 21.4 lorsque l'opposition n'est pas facilitée.

## La cadence : quatre messages, trente jours

1. **J+0, le message utile.** Le devis, la proposition, la réponse à une demande. Il porte votre identité, l'origine des données si le contact est froid, et le lien de désinscription.
2. **J+3, la relance courte.** Trois lignes, une seule question, fermée : « ce périmètre correspond à ce que vous attendiez ? ». Pas de pièce jointe.
3. **J+10, l'apport.** On ajoute quelque chose : une précision sur un délai, une variante du périmètre, un point que la personne n'avait pas soulevé. Jamais un rappel du rappel.
4. **J+30, la clôture.** « Sans retour d'ici vendredi, je classe le dossier. » C'est le message qui obtient le plus de réponses, et le seul qui respecte le silence d'en face.

Puis on arrête. Et on trace : date d'envoi, canal, contenu, oppositions reçues, dans un endroit unique que tous les outils consultent. Une opposition honorée dans un outil et oubliée dans un autre n'est pas honorée.

L'automatisation prend en charge l'horloge, l'envoi, la trace et la désinscription. Pas l'écriture du J+10, qui dépend du dossier.

## La partie technique, une fois pour toutes

Trois enregistrements dans le DNS de votre domaine, deux en-têtes dans vos messages.

- **SPF** (Sender Policy Framework, RFC 7208, avril 2014) publie quelles machines sont autorisées à envoyer du courrier pour votre domaine.
- **DKIM** (DomainKeys Identified Mail, RFC 6376, septembre 2011, devenu la norme STD 76) appose une signature cryptographique sur le message, la clé de validation étant publiée dans le DNS.
- **DMARC** (RFC 9989) n'authentifie rien lui-même : il s'appuie sur SPF et DKIM, exige un alignement avec le domaine de l'en-tête `From`, puis exprime la politique du propriétaire du domaine. Sa balise `p` prend trois valeurs — `none`, `quarantine`, `reject` — et un enregistrement valide sans balise `p` est traité comme `p=none`. La RFC conseille de commencer à `p=none`, de lire les rapports agrégés, puis de passer à `quarantine` avant d'envisager `reject`.
- **La désinscription en un clic** est spécifiée par la RFC 8058 (janvier 2017) : un en-tête `List-Unsubscribe` contenant une URI HTTPS, un en-tête `List-Unsubscribe-Post` contenant exactement `List-Unsubscribe=One-Click`, les deux couverts par une signature DKIM valide.

## Ce qui bloque en pratique

**La liste achetée.** Vous ne savez pas d'où viennent les adresses, donc vous ne pouvez pas informer la personne de leur origine : l'obligation n'est pas satisfiable. Deux cents adresses collectées à la main, source en face, valent mieux que dix mille sans histoire.

**Le passage brutal à `p=reject`.** Une politique stricte publiée avant d'avoir lu les rapports agrégés coupe vos propres envois : factures du logiciel comptable, mails du formulaire du site, newsletter partie d'un autre outil. La RFC recommande l'escalade progressive, et rappelle aux serveurs destinataires de ne pas rejeter un message sur la seule foi d'un `p=reject`.

**Le taux d'ouverture.** Une ouverture n'est qu'une image chargée depuis votre serveur : elle dépend du client de messagerie et de ses réglages, pas de l'intérêt de la personne. Trois chiffres décident : réponses, rendez-vous, désinscriptions et plaintes. Si le troisième monte, arrêtez : ce n'est pas un réglage à corriger, c'est un message à réécrire.

## Par où commencer, en deux semaines

**Semaine 1.** Inventaire : pour chaque contact, deux colonnes — d'où vient l'adresse, sur quelle base vous écrivez. Ce qui ne remplit pas les deux sort de la liste. Écrivez les quatre messages une fois pour toutes. Publiez SPF, DKIM et DMARC en `p=none`, et lisez les rapports agrégés pendant que la liste se nettoie.

**Semaine 2.** Lancez sur vingt contacts, pas deux mille. Notez les réponses, honorez chaque opposition dans les vingt-quatre heures, puis passez DMARC en `quarantine`. À la fin du mois, vous saurez si le problème venait de la relance ou de l'offre — et vous ne vous demanderez plus si vos mails arrivent.

---

*Benjamin de Bruijne est consultant digital et IA indépendant en Belgique. Il automatise les tâches répétitives des PME et met l'IA là où elle enlève une corvée précise. [Astérisme : l’IA dans vos process](https://asterisme.ai/).*
