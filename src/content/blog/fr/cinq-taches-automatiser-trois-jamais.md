---
title: "Cinq tâches à automatiser d'abord, trois à ne jamais automatiser"
description: "La grille de tri en trois questions, cinq corvées qui paient dès le premier mois, et trois décisions qu'une PME ne confie jamais à une machine."
date: 2026-11-17
rubrique: automatisation
lang: fr
tags: [Automatisation, PME, Belgique, RGPD, Peppol]
points:
  - "Répétitive, à règles claires, sans jugement : les 3 filtres"
  - "Facturer, relancer, recopier, saisir, rapporter : les cinq"
  - "Jamais : un litige, une décision sur une personne, un prix"
---

Un installateur m'a décrit sa semaine : trois heures le samedi matin pour sortir ses factures, une heure le mardi pour retrouver qui n'a pas payé, et des minutes partout ailleurs à recopier la même adresse d'un devis vers un bon de commande. Il voulait « mettre de l'IA » partout.

On a commencé par l'inverse : pas par l'outil, par la liste. Qu'est-ce qui ne mérite pas une minute de cerveau humain, et qu'est-ce qui en mérite toujours une, quel que soit le progrès technique ? Les deux listes sont courtes et bougent peu d'une PME à l'autre.

## Ce qui est vrai en 2026

**La facturation électronique n'est plus un projet, c'est une obligation.** Le portail e-facture du SPF BOSA l'indique : depuis le 1er janvier 2026, les entreprises belges assujetties à la TVA doivent s'échanger des factures électroniques structurées, via le réseau Peppol et au format Peppol BIS, conforme à la norme européenne EN 16931. Le même portail précise que les factures sortantes vers des particuliers ne sont pas visées, mais qu'il faut pouvoir recevoir des factures structurées de ses fournisseurs, et que la période générale de tolérance des trois premiers mois de 2026 est terminée — une tolérance ciblée restant en vigueur pour le self-billing jusqu'au 30 juin 2026 inclus. Des régimes particuliers existent, dont les opérations exemptées par l'article 44 du Code de la TVA : vérifiez votre cas sur efacture.belgium.be.

**Le réseau sur lequel ces factures circulent fonctionne simplement.** OpenPeppol décrit un modèle à quatre coins : votre prestataire d'accès certifié parle à celui de votre client, l'adressage passe par un annuaire de services (SMP et SML), le transport par le protocole AS4. La conséquence est celle qui compte : un seul prestataire suffit pour joindre tout le réseau, vous ne vous connectez pas à chaque client.

**Et il existe une ligne que l'automatisation ne franchit pas.** L'article 22 du règlement (UE) 2016/679 (RGPD) donne à une personne le droit de ne pas faire l'objet d'une décision fondée exclusivement sur un traitement automatisé, profilage compris, qui produit des effets juridiques la concernant ou l'affecte de manière significative. Le règlement prévoit des dérogations — consentement explicite, nécessité contractuelle, autorisation légale — et impose alors au minimum le droit d'obtenir une intervention humaine, d'exprimer son point de vue et de contester la décision.

## La grille de tri : trois questions, une page

**Est-ce répétitif ?** Au moins une fois par semaine, sous la même forme. Une tâche mensuelle de dix minutes n'est pas un chantier d'automatisation, c'est une ligne dans votre agenda.

**Les règles tiennent-elles sur une page ?** Écrivez-les à la main, en phrases « si… alors… ». Si « ça dépend » apparaît trois fois, la tâche n'est pas prête : le travail du moment est de décider ce dont ça dépend.

**Que coûte une erreur ?** Réversible et invisible pour le client — un rapport mal trié, un libellé bancal : automatisez de bout en bout. Visible par le client ou coûteuse à rattraper : automatisez la préparation, laissez la personne valider d'un clic. La vraie question n'est pas « est-ce que la machine se trompe », mais « qui le voit, et quand ».

## Les cinq premières

1. **L'émission et la réception des factures.** Le point de départ par défaut en 2026, puisque c'est obligatoire. Votre logiciel de facturation ou votre comptable passe par un prestataire d'accès Peppol ; il vous reste une décision, l'endroit unique où vivent vos données clients.

2. **Les relances de paiement.** Une échéance dépassée déclenche un message, trois jours plus tard un rappel plus ferme, à quinze jours un appel inscrit dans la liste de quelqu'un. Les textes s'écrivent une fois. La règle qui sauve cette automatisation : un paiement, un plan d'étalement ou une réclamation ouverte arrête la séquence.

3. **La recopie entre devis, commande et facture.** La corvée la plus silencieuse, et la plus rentable à supprimer. Une donnée saisie une seule fois, qui circule ensuite : client, adresse, lignes, quantités, TVA. On ne gagne pas que des minutes, on supprime une famille d'erreurs — celles qu'on découvre au moment du rappel de paiement.

4. **La saisie des documents entrants.** Factures fournisseurs, bons de livraison, notes de frais : l'extraction des champs (fournisseur, date, numéro, montants, TVA) fonctionne bien sur des documents stables. Deux garde-fous : un seuil de confiance sous lequel le document part en relecture humaine, et un échantillon contrôlé chaque semaine pour mesurer le taux d'erreur réel.

5. **Le reporting récurrent.** Les chiffres que vous allez chercher à la main le lundi — encours, devis en attente, heures non facturées — arrivent par mail, à heure fixe, avec leur évolution. Une contrainte absolue : si les données sont fausses, l'automatisation diffuse l'erreur plus vite.

## Les trois à ne jamais automatiser

**Un litige ou une réclamation.** Un client mécontent n'attend pas une réponse rapide, il attend une réponse responsable. Un outil peut préparer le dossier — historique, factures, échanges — mais la réponse part d'une personne qui a lu. Le jour où une séquence de relance tourne encore pendant une réclamation, vous perdez le client et la facture.

**Une décision sur une personne.** Recruter, promouvoir, sanctionner, licencier. Au-delà de l'article 22 du RGPD, le règlement (UE) 2024/1689 (AI Act) classe en haut risque, dans son annexe III, les systèmes d'IA destinés au recrutement ou à la sélection des candidats, et ceux qui influencent les conditions de travail, les promotions, les licenciements ou le suivi des performances ; son considérant 57 motive ce classement par l'effet sur les perspectives de carrière et le risque de reproduire des discriminations. Le règlement prévoit aussi, avant la mise en service d'un tel système au travail, l'information des représentants du personnel et des travailleurs concernés. Et son article 5 interdit les systèmes d'IA visant à inférer les émotions d'une personne sur le lieu de travail, sauf raisons médicales ou de sécurité. Pour une PME, la lecture est courte : trier des candidatures par une machine est un terrain réglementé, pas un gain de temps.

**Un prix sur mesure.** Un barème s'automatise ; une remise exceptionnelle, un chantier atypique, une marge qu'on réduit pour entrer chez un client, non. Ces décisions se prennent avec un contexte que le système n'a pas.

## Ce qui bloque en pratique

**Deux listes de clients.** Le référentiel est le vrai sujet. Tant que les adresses vivent dans le logiciel de facturation *et* dans un tableur, chaque automatisation hérite de l'incohérence et la propage. Choisissez la source qui fait foi d'abord.

**Automatiser un processus qui n'existe pas.** Si trois personnes font la même tâche de trois façons, l'outil ne tranche pas : il figera la version de celui qui parle le plus fort. Écrivez la règle avant, même imparfaite.

**Personne ne regarde les erreurs.** Une automatisation sans compteur devient invisible, puis fausse. Il faut un endroit où l'on voit ce qui a échoué, et quelqu'un qui le regarde le lundi. Si de l'IA entre dans la chaîne, l'article 4 de l'AI Act demande aux fournisseurs et déployeurs des mesures de maîtrise de l'IA pour leur personnel — obligation réécrite par le règlement (UE) 2026/1744 du 8 juillet 2026 en mesures favorisant le développement de cette maîtrise, sans niveau garanti individu par individu. Vérifiez la version applicable sur eur-lex.europa.eu.

## Par où commencer : deux semaines

**Semaine 1 — mesurer et choisir.** Notez pendant cinq jours les tâches répétitives et les minutes qu'elles prennent. Gardez-en une seule : le plus de minutes, la règle la plus claire. Écrivez cette règle sur une page, avec les cas d'arrêt. Et demandez à votre comptable ou à votre éditeur de facturation par quel prestataire d'accès passent vos factures Peppol.

**Semaine 2 — faire tourner en double.** L'automatisation tourne, et la personne continue à faire la tâche comme avant. On compare, on compte les écarts, on corrige les règles. Cinq jours sans écart, on arrête la version manuelle. Et on garde un interrupteur : une automatisation qu'on ne peut pas couper en trente secondes n'est pas prête.

Deux semaines, une tâche, un compteur. Moins séduisant qu'un grand projet, et c'est la seule approche que j'aie vue tenir plus de trois mois.

---

*Benjamin de Bruijne est consultant digital et IA indépendant en Belgique. Il automatise les tâches répétitives des PME et met l'IA là où elle enlève une corvée précise. [Astérisme : l’IA dans vos process](https://asterisme.ai/).*
