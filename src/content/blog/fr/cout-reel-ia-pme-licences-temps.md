---
title: "Ce que l'IA coûte vraiment à une PME : licences, temps, erreurs"
description: "Licences, mise en place, relecture, conformité, erreurs : la grille de calcul du coût réel d'un outil d'IA dans une PME, et quand arrêter."
date: 2026-11-18
rubrique: ia
lang: fr
tags: [IA, Coûts, PME, Belgique, AI Act]
points:
  - "La licence est la plus petite ligne de la facture"
  - "Le vrai coût est le temps de contrôle, pas l'abonnement"
  - "Mesurer trois mois, puis étendre, restreindre ou arrêter"
---

« L'abonnement par personne, on peut se le permettre. » La phrase revient dans presque toutes les conversations sur l'IA en entreprise, et elle est vraie. Elle est seulement incomplète : la licence est la plus petite ligne de la facture.

Le coût d'un outil d'IA dans une PME se répartit sur six lignes, dont une seule apparaît sur un relevé bancaire. Les cinq autres sont du temps : mise en place, relecture, documentation, formation, reprise d'erreur. Voici la grille que j'utilise pour les chiffrer avant de décider, et la mesure qui permet de trancher au bout de trois mois. Pas de statistique de marché : des lignes à remplir avec vos chiffres.

## Ce qui est vrai en 2026

**Deux modèles de facturation, pas un.** Un outil vendu par siège se paie à l'utilisateur et par mois. Une intégration via une interface de programmation (API) se paie à l'usage, et le mécanisme mérite d'être connu avant de budgéter. La documentation publique d'un fournisseur d'API (docs Claude, Anthropic, page *Pricing*) décrit le principe : facturation par million de jetons (*tokens*), avec l'entrée et la sortie comptées séparément et à des tarifs différents ; un traitement par lots asynchrone à tarif réduit ; une mise en cache du contexte dont la lecture coûte une fraction d'une entrée normale ; un tarif majoré au-delà d'un certain volume d'entrée sur les fenêtres longues. La même documentation indique que chaque réponse renvoie un objet `usage` donnant le compte de jetons consommés. Conséquence pratique : une facture à l'usage est vérifiable ligne à ligne, à condition de journaliser ces compteurs dès le premier jour.

**La ligne « formation » a une base légale, dont la rédaction a changé en 2026.** Le règlement (UE) 2024/1689, l'AI Act, est d'application générale depuis le 2 août 2026 (EUR-Lex). Son article 4, sur la maîtrise de l'IA, a été réécrit par le règlement (UE) 2026/1744 du 8 juillet 2026 (JO L du 24 juillet 2026 ; la fiche EUR-Lex donne une prise d'effet au 27 juillet 2026). Dans cette version, fournisseurs et déployeurs prennent des mesures qui soutiennent le développement de la maîtrise de l'IA, et le texte précise que cette obligation n'impose pas de garantir un niveau de maîtrise spécifique pour une personne donnée. Les considérants du texte modificatif citent explicitement la charge de conformité pour les petites entreprises comme motif. Autrement dit : la formation reste une ligne de coût à prévoir, mais la barre n'est pas un examen par salarié.

**Le haut risque, c'est plus tard, et ce n'est probablement pas vous.** La synthèse d'EUR-Lex place les obligations des systèmes à haut risque au 2 décembre 2027 pour les cas de l'annexe III et au 2 août 2028 pour les produits de l'annexe I. Pour la transparence, le texte consolidé prévoit que les fournisseurs de systèmes d'IA générative déjà sur le marché avant le 2 août 2026 se conforment à l'obligation de marquage de l'article 50, paragraphe 2, au 2 décembre 2026 ; une proposition de la Commission (COM(2025) 836) reporterait cette échéance au 2 février 2027, calendrier encore en discussion à ma dernière vérification. Je ne tranche pas : vérifiez le statut en vigueur sur EUR-Lex avant d'en faire une échéance de budget.

**La conformité RGPD est une ligne de coût, pas une formalité.** La CNIL rappelle qu'un fournisseur peut agir comme sous-traitant quand il développe un système pour le compte d'un client, le client restant responsable du traitement dès lors qu'il fixe la finalité et les moyens. Dans son guide de 2026 co-écrit avec la Haute Autorité de santé, elle considère que le déployeur est, dans la majorité des cas, responsable du traitement des données liées à l'usage du système ; un déployeur qui affine un modèle avec ses propres données, ou qui le branche sur sa base documentaire (RAG) contenant des données personnelles, est responsable de ce traitement. Elle rappelle aussi qu'un usage non conforme expose le déployeur à une requalification en fournisseur. Côté belge, l'Autorité de protection des données indique qu'une analyse d'impact (AIPD) est obligatoire en cas de traitement à haut risque ou de déploiement de nouvelles technologies, et qu'un risque résiduel élevé impose de la consulter avant de lancer le traitement. Son rapport annuel 2025 note que l'AIPD reste souvent mal mise en œuvre. Ces points sont des questions d'interprétation : à confirmer avec votre conseil.

## La grille, six lignes

1. **Licences.** Nombre de personnes qui en ont réellement besoin, multiplié par le prix de votre offre, multiplié par douze. Comptez les sièges utilisés, pas les sièges achetés : l'écart est la première économie.
2. **Mise en place.** Heures passées à connecter l'outil, écrire les consignes, préparer les documents, tester. Facturez-les au coût horaire chargé de la personne qui les passe, même si c'est vous.
3. **Relecture.** Le poste principal. Pour chaque tâche confiée à l'IA : minutes de relecture par pièce, multipliées par le nombre de pièces par mois. Une relecture sérieuse d'un devis ou d'un courrier ne prend pas trente secondes.
4. **Documentation et conformité.** Registre des traitements à mettre à jour, contrat de sous-traitance à relire, AIPD quand elle est due, information des personnes concernées. Chiffrez en heures, une fois à l'installation, puis une revue annuelle.
5. **Formation.** Une session courte par équipe, et une note écrite sur ce qui ne doit jamais être collé dans un outil externe. C'est aussi la trace que l'article 4 vous demande de pouvoir montrer.
6. **Reprise d'erreur.** Temps passé à rattraper une sortie fausse partie chez un client : correction, appel, geste commercial. Estimez un nombre d'incidents par trimestre et un coût moyen, puis ajustez avec le réel.

## Le coût qu'on oublie : le contrôle

Un outil d'IA ne supprime pas une tâche, il en déplace la nature : produire devient vérifier. Et vérifier coûte d'autant plus cher que la sortie est plausible. Un texte visiblement raté se jette en deux secondes ; un texte bien tourné avec un chiffre faux se relit en entier.

C'est pourquoi la seule question de rentabilité qui vaut est celle-ci : le temps de production économisé est-il supérieur au temps de contrôle ajouté ? Sur une facture de routine, la réponse est souvent oui. Sur un document qui engage l'entreprise, elle est souvent non, et c'est une information utile, pas un échec.

Le corollaire : plus l'erreur coûte cher, plus le contrôle doit être serré, donc plus le gain net se réduit. Les cas qui marchent sont les tâches fréquentes, à faible enjeu unitaire et à sortie facilement vérifiable.

## Ce qui bloque en pratique

**Le pilote gratuit.** Un essai de trente jours ne mesure que l'enthousiasme. Pendant un pilote, la relecture est faite par la personne la plus motivée de l'entreprise, deux fois trop vite, et le temps n'est noté nulle part. Le pilote donne une impression, pas un coût.

**Les comptes personnels.** Quand l'outil officiel est jugé trop lent à arriver, les équipes utilisent leur propre compte. Vous ne payez rien et vous perdez tout : aucune visibilité sur les documents sortis de l'entreprise, aucun contrat de sous-traitance, rien à montrer en cas de contrôle.

**L'absence de point de départ.** Sans mesure du temps passé avant l'outil, aucun gain ne sera démontrable après. Trois jours de relevé manuel avant de démarrer valent mieux que six mois de débat.

## Mesurer sur trois mois, puis décider

Mois 0 : choisissez une tâche, chronométrez-la à la main pendant une semaine, notez le volume mensuel. Mois 1 à 3 : relevez chaque semaine les six lignes et deux compteurs — pièces produites avec l'outil, pièces renvoyées en correction. Fin du mois 3, trois issues possibles, toutes acceptables : étendre à une deuxième tâche ; restreindre à un sous-cas qui fonctionne ; arrêter et résilier.

Arrêter n'est pas un échec de projet, c'est le résultat d'une mesure. Le seul vrai échec est de payer trois ans un outil que personne n'ose ni utiliser ni enlever.

## Par où commencer, en deux semaines

Semaine 1 : listez les trois tâches candidates, éliminez celles dont une erreur sort directement chez un client, gardez-en une. Chronométrez l'existant. Semaine 2 : remplissez les six lignes avec vos chiffres, écrivez en trois phrases qui relit et quoi, et fixez la date de la décision à trois mois. Si une ligne reste vide parce que personne ne sait la remplir, c'est là qu'est le risque, pas dans le prix de la licence.

---

*Benjamin de Bruijne est consultant digital et IA indépendant en Belgique. Il automatise les tâches répétitives des PME et met l'IA là où elle enlève une corvée précise. [Astérisme : l’IA dans vos process](https://asterisme.ai/).*
