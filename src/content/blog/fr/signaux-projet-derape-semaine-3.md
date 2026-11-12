---
title: "Un projet qui va déraper se voit à la semaine 3 : les sept signaux"
description: "Les sept signaux faibles qui annoncent la dérive d'un projet digital dès la troisième semaine, et la question précise à poser pour chacun."
date: 2026-11-12
rubrique: construire
lang: fr
tags: [Construire, Pilotage de projet, ISO 21502, PME, RGPD]
points:
  - "La dérive se voit en semaine 3, pas au premier retard annoncé"
  - "Pas de démo cliquable en trois semaines : c'est le signal zéro"
  - "Chaque signal se traite par une question, pas par une réunion"
---

Un projet digital ne déraille presque jamais au moment où on l'apprend. On l'apprend au mois quatre, quand la date de mise en production bouge pour la deuxième fois, et tout le monde découvre alors des faits qui étaient déjà vrais à la semaine trois.

En vingt ans de projets, je n'ai pas vu de dérive surgir d'un coup. J'ai vu des signaux ignorés parce qu'ils ne ressemblaient pas encore à un problème : une démo repoussée, une décision renvoyée au comité suivant, un export de données que personne n'a ouvert. Voici les sept que je regarde, et la question qui va avec chacun.

## Ce qui est vrai en 2026

Trois choses existent déjà et cadrent le sujet, à condition de ne pas confondre ce qui recommande et ce qui oblige.

**Le pilotage de projet est décrit par une norme, qui recommande.** **ISO 21502:2020**, *Project, programme and portfolio management — Guidance on project management*, est l'édition publiée au catalogue de l'ISO (iso.org), enregistrée comme norme internationale publiée le 22 décembre 2020. Elle donne des descriptions de haut niveau de pratiques considérées comme fonctionnant bien, pour tout type d'organisation et tout type de projet, et couvre les pratiques nécessaires à chaque phase du cycle de vie, dont la planification et le contrôle — traitement des risques et des problèmes, maîtrise des changements. Une nuance, écrite telle quelle : une révision limitée a été approuvée par le comité technique ISO/TC 258 et une deuxième édition est au stade du projet de comité ; vérifiez le statut en vigueur sur iso.org. C'est un guide, pas une réglementation : personne ne vous sanctionnera pour ne pas l'appliquer. Son intérêt ici est ailleurs : la norme traite les **problèmes** comme une pratique distincte des risques. Un risque, c'est ce qui pourrait arriver. Un problème, c'est ce qui est déjà là. La plupart des projets en dérive tiennent un registre des risques impeccable et aucune liste des problèmes ouverts.

**Les données de test ne sont pas un détail technique.** La CNIL (cnil.fr), dans sa fiche sur les tests d'applications, déconseille d'utiliser des données personnelles réelles pour le développement et les tests, et recommande des jeux de données fictives autant que possible, dans un environnement informatique distinct de la production ; quand des éléments viennent de la production, elle recommande d'anonymiser les données personnelles qu'ils contiennent. Elle admet une exception encadrée : si les tests sur données fictives ne suffisent pas, un environnement de pré-production avec des données réelles est possible, sécurisé au même niveau que la production. Ce sont des recommandations d'une autorité, pas un article de règlement — mais elles vous donnent la bonne question à poser en semaine trois.

**Deux articles du RGPD se décident au début, pas à la recette.** Le règlement (UE) 2016/679 (texte officiel sur eur-lex.europa.eu) demande à son **article 25** de tenir compte de l'état des connaissances, des coûts et des risques *au moment de la détermination des moyens du traitement*, et pas seulement pendant le traitement. Et son **article 28, paragraphe 3**, impose, quand un prestataire traite les données pour vous, un contrat écrit qui fixe l'objet et la durée du traitement, sa nature et sa finalité, le type de données et les catégories de personnes concernées, et qui prévoit la mise à disposition des informations nécessaires et la possibilité d'audits. Si au bout de trois semaines personne ne sait qui héberge quoi, ce n'est pas un retard : c'est un trou contractuel.

## Les sept signaux, et la question à poser

1. **Aucune démo cliquable à la fin de la semaine trois.** Le signal zéro. Pas une maquette, pas une capture d'écran dans une présentation : quelque chose qui s'ouvre dans un navigateur, même laid, même avec trois champs. Question : *« Montrez-moi l'écran qui existe aujourd'hui. »* Si la réponse est « on finit l'architecture d'abord », notez la date et reposez la question la semaine suivante.

2. **Le périmètre grossit et rien ne sort.** Chaque réunion ajoute une idée, et la liste des fonctions livrées reste vide. Question : *« Qu'est-ce qui sort de la liste pour que ça entre ? »* Un projet sain échange ; un projet en dérive accumule.

3. **Les décisions sont reportées au prochain comité.** Trois sujets ouverts, trois fois « on en reparle ». Question : *« Qui décide, et avant quelle date ? »* Une décision sans nom et sans date n'est pas reportée, elle est abandonnée.

4. **Les données réelles n'ont jamais été regardées.** « On reprendra le tableur » se dit facilement avant de l'avoir ouvert. Question : *« Qui a ouvert un export anonymisé, et combien de lignes sont inexploitables ? »* Comptez les dates en texte, les doublons, les trois orthographes du même fournisseur. La reprise de données est le poste qui déborde le plus souvent, et il se mesure avant de signer la suite.

5. **Un seul interlocuteur de chaque côté.** Une personne sait tout, chez le prestataire comme chez vous. Question : *« Qui répond si cette personne est absente deux semaines ? »* L'absence de doublure n'est pas un risque théorique : c'est la cause la plus banale d'un mois perdu.

6. **Les comptes rendus disent « en cours » trois fois de suite.** « En cours » n'est pas un état d'avancement, c'est une absence de mesure. Question : *« Avancé de combien, mesuré sur quoi ? »* Deux cas d'usage sur cinq fonctionnent de bout en bout : voilà une mesure. Quatre-vingts pour cent de la base de données : voilà une opinion.

7. **Personne ne sait où ça tournera en production.** Pas d'hébergement nommé, pas de sauvegarde testée, pas de contrat de sous-traitance. Question : *« Sur quel hébergement, avec quelle restauration déjà essayée, et sous quel contrat au sens de l'article 28 ? »* C'est le signal le plus coûteux, parce qu'il se répare rarement en fin de projet.

La règle qui tient la grille : **un signal se traite par une question, pas par une réunion**. Sept questions, sept réponses écrites, une date par réponse.

## Ce qui bloque en pratique

**Personne ne veut être celui qui nomme le signal.** Le prestataire craint de paraître en retard, vous craignez de paraître méfiant, et les deux parties attendent que l'autre parle. C'est pour ça que les questions ci-dessus sont formulées comme des demandes d'information et non comme des reproches. Posez-les par écrit, toutes les sept, dans le même message : elles deviennent une routine, plus une mise en cause.

**La dérive n'est presque jamais de la mauvaise volonté.** Dans la grande majorité des cas que j'ai vus, le prestataire est de bonne foi et l'équipe interne aussi. Ce qui manque n'est pas l'envie, c'est une boucle de retour courte : quelque chose de visible toutes les deux semaines, et une liste de problèmes ouverts qu'on relit à chaque point.

**Un retard d'une semaine n'est pas une dérive.** Ne déclenchez pas l'alerte sur un seul signal. Deux signaux simultanés, ou le même signal deux points de suite, méritent une conversation ; trois signaux, une révision du plan. Un seul, c'est la vie d'un projet.

## Par où commencer : deux semaines

**Semaine 1.** Écrivez les sept signaux dans un tableau de sept lignes : signal, observé oui/non, question posée, réponse reçue, date. Demandez la démo cliquable, même minimale, et fixez le rendez-vous où elle sera montrée. Demandez un export anonymisé des données à reprendre, et ouvrez-le vous-même.

**Semaine 2.** Transformez chaque « on en reparle » en ligne de décision avec un nom et une date. Ouvrez une liste des problèmes, séparée du registre des risques — c'est la distinction que fait ISO 21502:2020, et c'est celle qui manque le plus souvent. Vérifiez les trois lignes de production : hébergement, sauvegarde avec restauration déjà essayée, contrat écrit avec le prestataire s'il traite des données personnelles pour vous.

Au bout de ces deux semaines, vous ne saurez pas si le projet réussira. Vous saurez s'il est pilotable, ce qui est une information bien plus utile, et bien plus tôt.

---

*Benjamin de Bruijne est consultant digital et IA indépendant en Belgique. Il construit des sites, des applications métier et des produits, et les pilote jusqu'en production. [Astérisme : concevoir et mettre en place](https://asterisme.ai/).*
