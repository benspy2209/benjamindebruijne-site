---
title: "Reprendre un projet no-code ou généré par IA : six points avant la prod"
description: "Propriété, secrets, accès, sauvegardes, dépendances, conformité : les six vérifications avant de mettre un prototype no-code ou IA en production."
date: 2026-10-29
rubrique: construire
lang: fr
tags: [Construire, No-code, IA, Production, RGPD]
points:
  - "Le prototype démontre, la production engage"
  - "Une sauvegarde jamais restaurée n'est pas une sauvegarde"
  - "Six vérifications avant d'ouvrir l'outil aux équipes"
---

Un dirigeant me montre son outil sur son téléphone : un suivi de chantiers construit en trois week-ends avec un générateur d'IA, et ça marche. Puis vient la question qui change tout : « on peut l'ouvrir à mes vingt techniciens lundi ? »

Le prototype a fait son travail : il a prouvé que l'idée tient, en quelques jours, pour le prix de rien. La mise en production est un autre exercice. Dès que des gens réels y mettent des données réelles, l'outil cesse d'être une démonstration et devient un engagement. Voici ce que je vérifie, dans cet ordre, avant de dire oui.

## Ce qui est vrai en 2026

Rien de ce qui suit ne dépend de la façon dont le code a été écrit : no-code, générateur d'IA ou développement maison, les obligations tombent sur l'entreprise qui s'en sert.

**Les données personnelles.** Dès qu'il y a des clients, des salariés ou des contacts dedans, le règlement (UE) 2016/679 — le RGPD — s'applique, et il s'applique à vous comme responsable du traitement. Le texte sur eur-lex.europa.eu est précis sur les points qui concernent une mise en production. L'**article 32** liste les mesures de sécurité attendues : confidentialité, intégrité et résilience des systèmes, mais aussi « des moyens permettant de rétablir la disponibilité des données à caractère personnel et l'accès à celles-ci dans des délais appropriés en cas d'incident physique ou technique », et des tests réguliers de leur efficacité. L'**article 28** impose un contrat écrit, y compris électronique, avec quiconque traite ces données pour vous : objet, durée, nature et finalité du traitement, types de données et catégories de personnes concernées, suppression ou restitution en fin de prestation, pas de sous-traitant ultérieur sans autorisation écrite préalable. L'**article 33** fixe la notification d'une violation à l'autorité de contrôle « dans les meilleurs délais et, si possible, 72 heures au plus tard », sauf s'il est peu probable qu'elle engendre un risque — et c'est à vous de le démontrer. L'**article 30** ajoute un registre des activités de traitement ; d'après la synthèse officielle d'EUR-Lex, les PME n'y sont pas tenues sauf si le traitement est régulier ou risqué pour les droits des personnes. Sur un cas précis, faites confirmer par votre conseil.

**Les traceurs.** L'Autorité de protection des données rappelle, dans sa page « Cookies et autres traceurs » et sa checklist publiée en 2023, qu'aucun cookie non strictement nécessaire ne peut être déposé ou lu avant le consentement, que ce consentement doit être préalable, libre, spécifique, éclairé, actif et retirable, et qu'il n'existe **pas d'exemption pour les cookies de mesure d'audience**, même en première partie. La poursuite de la navigation ne vaut pas consentement. Or beaucoup de prototypes embarquent un script de statistiques par défaut.

**Ce que le site doit afficher.** Le SPF Économie liste les informations obligatoires sur le site d'une entreprise : dénomination, adresse du siège, adresse e-mail, un numéro de téléphone si le site permet de conclure un contrat à distance, le **numéro d'entreprise** inscrit à la Banque-Carrefour des Entreprises, et le numéro de TVA si l'activité y est assujettie. Son contrôle de 2 158 sites et pages de réseaux sociaux en 2024 a trouvé un numéro d'entreprise manquant dans 45,7 % des cas. Ça se corrige en dix minutes.

**La propriété.** Sur les créations faites dans le cadre d'une relation de travail ou sur commande, le SPF Économie conseille de fixer par contrat la titularité des droits, par souci de sécurité juridique, y compris lorsque la loi régit déjà la situation. C'est une recommandation, pas une obligation, et elle vise exactement notre cas.

## Les six points, dans l'ordre

1. **Propriété et accès.** Qui possède le code, les données, le nom de domaine, et sous quel compte ? Je demande à voir le dépôt de code et ceux qui peuvent y écrire, le compte d'hébergement, le registrar du domaine, le compte de la base de données. Le cas classique : tout vit sous le compte personnel de celui qui a fabriqué le prototype. Rien n'est volé, mais rien n'est à vous. Les comptes passent au nom de l'entreprise, avec deux personnes administratrices.
2. **Les secrets et les clés.** Un prototype met ses clés d'API là où c'est pratique : dans le code envoyé au navigateur, dans un fichier de configuration public, dans l'historique du dépôt. Le test : ouvrez le code source de la page et cherchez « key », « token », « secret ». Ce qui apparaît est compromis, donc à régénérer, pas à cacher. Ensuite, les clés vivent dans les variables d'environnement, chacune avec un périmètre réduit à ce qu'elle doit faire.
3. **Les droits d'accès et la séparation des données.** La question n'est pas « faut-il un mot de passe » mais « qui voit quoi ». Dans un prototype, l'utilisateur connecté voit tout, parce que c'était le plus simple. En production, chaque enregistrement appartient à quelqu'un, et le filtre doit être appliqué côté serveur, jamais seulement dans l'affichage. Le test : connectez-vous avec un compte d'essai, modifiez l'identifiant dans l'adresse, voyez si vous accédez au dossier du voisin.
4. **Les sauvegardes, restaurées au moins une fois.** Une sauvegarde que personne n'a jamais restaurée n'est pas une sauvegarde, c'est une intention. L'article 32 parle de rétablir l'accès et de tests réguliers ; la traduction opérationnelle tient en quatre réponses écrites. À quelle fréquence sauvegarde-t-on ? Combien de temps garde-t-on les copies ? Combien de temps prend une restauration complète ? Quand l'a-t-on faite pour la dernière fois ? Faites-la une fois devant témoin, notez la durée, recommencez tous les six mois.
5. **Les dépendances et le coût réel.** Un projet généré arrive avec des dizaines de bibliothèques tierces, figées à un instant donné. Trois choses à savoir : quelles versions sont installées, lesquelles ont une faille connue, qui appliquera les mises à jour dans six mois. Même logique pour la facture : un prototype coûte zéro parce que personne ne l'utilise. Avec vingt utilisateurs quotidiens, l'hébergement, la base, le stockage et les appels à un modèle d'IA deviennent une ligne de budget. Estimez-la sur votre volume attendu avant l'ouverture, pas après la première facture.
6. **Qui répond quand ça tombe.** Pas un contrat de maintenance : un nom, un numéro, un délai annoncé, et ce que ce nom peut faire — accéder aux journaux, redéployer une version précédente, restaurer une sauvegarde. Si vous ne pouvez pas écrire ce nom, l'outil n'est pas prêt pour vingt personnes, quelle que soit la qualité du code.

## Ce qui bloque en pratique

**« Ça marche » a été mesuré sur dix lignes propres.** Le prototype a été nourri par celui qui l'a construit, avec des données bien formées. Avant d'ouvrir, chargez cinquante dossiers réels, les plus moches : champs vides, doublons, pièces jointes de huit mégaoctets. C'est ce test qui révèle les trous, pas la démonstration.

**Le projet n'a pas de propriétaire côté entreprise.** Un outil interne sans quelqu'un chargé de dire ce qui rentre et ce qui attend dérive en trois mois : chacun demande sa fonction, personne ne tranche. Nommez une personne, même à 10 % de son temps.

**La tentation de tout réécrire.** Le réflexe est fréquent devant un code généré : repartir de zéro, proprement. C'est souvent le plus mauvais calcul : on perd ce que le prototype a appris et on repaie six mois. L'ordre qui marche : sécuriser les six points ci-dessus, ouvrir à un petit groupe, et ne réécrire que les parties que l'usage désigne.

## Par où commencer, en deux semaines

**Semaine 1 : reprendre la main.** Inventaire des comptes et transfert à l'entreprise. Régénération des secrets trouvés en clair. Test des droits d'accès avec deux comptes d'essai. Première restauration de sauvegarde, chronométrée.

**Semaine 2 : rendre l'outil tenable.** Mentions obligatoires et bandeau de consentement conformes. Contrat article 28 avec l'hébergeur et tout prestataire qui touche aux données, registre si nécessaire. Procédure écrite de violation, avec le réflexe des 72 heures. Coût mensuel estimé au volume attendu. Nom et délai de la personne qui répond.

Ensuite, et seulement ensuite, l'ouverture progressive : trois utilisateurs, puis dix, puis tous. J'ai suivi cette séquence sur mes propres produits, dont Service-Volée, en production depuis septembre 2026. C'est toujours le point 4 qui réserve la surprise : la première restauration prend plus longtemps que prévu. Mieux vaut l'apprendre un mardi matin que le jour où elle sert.

---

*Benjamin de Bruijne est consultant digital et IA indépendant en Belgique. Il construit des sites, des applications métier et des produits, et les pilote jusqu'en production. [Astérisme : concevoir et mettre en place](https://asterisme.ai/).*
