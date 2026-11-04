---
title: "Un assistant interne sur vos documents : ce qui marche, ce qui déçoit"
description: "Brancher un assistant IA sur les documents de l'entreprise : la méthode, les trois déceptions classiques et les contrôles à poser avant d'ouvrir l'accès."
date: 2026-11-04
rubrique: ia
lang: fr
tags: [IA, LLM, RGPD, PME, Documents]
points:
  - "La qualité des réponses vient des documents, pas du modèle"
  - "Les droits d'accès du dossier doivent suivre dans l'assistant"
  - "Trente questions de test avant d'ouvrir l'outil aux équipes"
---

Une PME de trente personnes a dix ans de procédures, de conditions générales et de comptes rendus dans un répertoire partagé. On branche un assistant IA dessus, et trois semaines plus tard la direction entend la même phrase dans trois bouches différentes : « il répond à côté. »

Dans la plupart des cas que je vois, le problème n'est pas le modèle. Il est dans les documents qu'on lui a donnés, dans les droits d'accès qu'on n'a pas reproduits, et dans l'absence de test avant l'ouverture. Voici la méthode que j'applique, et les trois déceptions qui reviennent le plus souvent.

## Ce qui est vrai en 2026

Deux textes encadrent l'exercice, et ils ne disent pas la même chose.

Le **règlement (UE) 2016/679**, le règlement général sur la protection des données (RGPD), fixe à son **article 5, paragraphe 1** les principes qui vous concernent directement ici : ne traiter que les données nécessaires à la finalité poursuivie (**minimisation**, point c), tenir les données exactes et à jour quand c'est nécessaire (**exactitude**, point d), et ne pas les conserver plus longtemps que nécessaire (**limitation de la conservation**, point e). Le **considérant 39** du même règlement demande de fixer des délais d'effacement ou un examen périodique. Un assistant qui garde l'historique des conversations et les copies des documents indexés tombe dans ces trois principes à la fois.

Le **règlement (UE) 2024/1689**, l'AI Act, ajoute un volet transparence. Son **article 50** s'applique à partir du **2 août 2026** : un système destiné à interagir directement avec des personnes physiques doit être conçu pour que celles-ci soient informées qu'elles s'adressent à une IA, sauf si cela est évident pour une personne raisonnablement informée. EUR-Lex publie un texte consolidé applicable au **27 juillet 2026** ; vérifiez la version en vigueur avant de citer l'article dans une procédure interne.

Côté autorités, deux lectures utiles. La **CNIL** précise que ses recommandations sur le développement des systèmes d'IA couvrent la phase de développement, pas celle de déploiement ; pour l'usage, elle publie des questions-réponses sur l'utilisation d'un système d'IA générative. Elle y relève que dans un usage par interface de programmation (API), la maîtrise du système est quasi exclusivement entre les mains du fournisseur, et recommande d'éviter autant que possible de lui soumettre des données personnelles. Elle recommande aussi d'interdire, selon le mode de déploiement retenu, la saisie de données confidentielles comme celles couvertes par le secret industriel ou commercial, de donner comme consigne aux utilisateurs finaux de ne soumettre que des informations qu'ils sont autorisés à partager, et, quand c'est possible, de s'opposer à la réutilisation des données d'usage par le fournisseur, voire à l'enregistrement de l'historique. Elle conseille enfin d'associer le délégué à la protection des données (DPO) et, le cas échéant, de réaliser une analyse d'impact relative à la protection des données (AIPD).

L'**Autorité de protection des données** belge (APD) a publié une brochure d'information, « Les systèmes d'intelligence artificielle et le RGPD, sous l'angle de la protection des données », annoncée en septembre 2024 et dont la version diffusée porte la mention décembre 2024. Elle est organisée autour des principes du RGPD et, côté sécurité, cite le chiffrement, des contrôles d'accès stricts, des tests d'intrusion et une journalisation détaillée, en gardant une revue humaine pour les décisions à fort impact.

Ce qu'aucun de ces textes ne vous dira : quels documents mettre dedans. C'est pourtant là que tout se joue.

## Ce que l'outil fait réellement

Un assistant branché sur vos documents ne « connaît » pas votre entreprise. À chaque question, il cherche dans votre base les passages qui ressemblent à la demande, les place devant le modèle, et le modèle rédige une réponse à partir de ces passages. Rien de plus.

Deux conséquences, et elles expliquent presque toutes les déceptions. D'abord, si le bon paragraphe n'est pas retrouvé, la réponse sera vague ou fausse — et le modèle n'a aucun moyen de le savoir, donc il répondra avec le même aplomb. Ensuite, la réponse est exactement aussi à jour que le document retrouvé. Si la procédure de 2021 et celle de 2026 cohabitent dans le dossier, l'assistant citera parfois l'une, parfois l'autre.

Autrement dit : c'est un chantier documentaire avant d'être un chantier technique.

## La méthode, en six étapes

1. **Vingt documents, pas deux mille.** Partez des questions que l'équipe pose vraiment : conditions générales, procédure de garantie, contrats types, barème interne, FAQ du support. Si un document ne répond à aucune question récurrente, il n'entre pas.
2. **Une seule version par document.** Une date dans le nom de fichier, les brouillons et les « v2 finale corrigée » hors du périmètre. Deux versions contradictoires produisent deux réponses contradictoires, et vous ne saurez jamais laquelle sortira.
3. **Reproduire les droits d'accès.** Règle simple : l'assistant ne doit jamais rendre lisible un document qu'une personne n'a pas le droit d'ouvrir. Si l'outil ne sait pas reprendre les droits de votre répertoire partagé, alors la base ne contient que des documents ouverts à tous. Les dossiers du personnel, les litiges et les éléments de rémunération restent dehors.
4. **Écrire les consignes d'usage.** Une page : ce qui ne s'écrit jamais dans une question (données personnelles de clients, pièces RH, éléments couverts par le secret commercial), qui est responsable de la base, et l'information affichée aux utilisateurs sur le fait qu'ils s'adressent à une IA. C'est la recommandation de la CNIL et c'est aussi l'esprit de l'article 50.
5. **Tester avec trente questions avant d'ouvrir.** Dix questions dont la réponse est dans un seul document, dix qui obligent à croiser deux documents, dix dont la réponse n'est nulle part dans la base — pour celles-là, la bonne réponse est « je ne trouve pas ». Notez chaque sortie : juste, incomplète, fausse, inventée. Le chiffre qui compte est le nombre de réponses inventées, et il doit être nul avant l'ouverture.
6. **Humain dans la boucle, et revue dans le temps.** Exigez que chaque réponse cite le document d'où elle vient, nommez une personne responsable du corpus, rejouez les trente questions après chaque ajout important, et fixez une revue trimestrielle qui retire les documents périmés. C'est très exactement l'examen périodique du considérant 39.

## Ce qui déçoit, et pourquoi

**Le corpus-déversoir.** La tentation est de tout verser : quinze ans de partage réseau, d'un coup. Le bruit gagne toujours. Les anciennes versions, les mails exportés et les présentations commerciales noient les trois procédures qui comptent, et la qualité des réponses chute au moment précis où l'on croit enrichir l'outil.

**Les questions de comptage.** « Combien de contrats arrivent à échéance en mars ? » n'est pas une question documentaire, c'est une requête sur des données. Un assistant de ce type additionnera ce qu'il a sous les yeux, c'est-à-dire quelques passages sur des dizaines, et répondra un chiffre faux avec assurance. Ces questions-là appartiennent à votre logiciel de gestion, pas à l'assistant.

**L'accumulation invisible.** Historiques de conversation, mémoire, copies indexées : les données s'entassent sans que personne ne décide rien. Dans une note publiée en juillet 2026 sur l'IA agentique, la CNIL recommande de cloisonner la mémoire par traitement afin de limiter le stockage excessif de données, et de cloisonner également l'espace de déploiement, par exemple par sandboxing. La version PME de ce conseil : un espace par usage, et une durée de conservation écrite pour les historiques.

## Ce que ça coûte, en vrai

Quatre postes, à chiffrer chez vous avant de signer quoi que ce soit. Les licences, par personne et par mois. La préparation documentaire, qui est le poste principal et que presque personne n'anticipe : trier, dédoublonner, dater. La relecture pendant les premières semaines, parce que les réponses se vérifient tant qu'on ne connaît pas le taux d'erreur. Et le coût d'une réponse fausse qui passe inaperçue — une clause de garantie mal citée à un client suffit à annuler l'économie de l'année.

## Par où commencer, en deux semaines

Semaine 1 : la liste des vingt questions les plus posées au support et à la direction, les documents qui y répondent, une seule version de chacun, et la liste écrite de ce qui n'entre pas dans la base.

Semaine 2 : les trente questions de test, la notation, puis l'ouverture à trois personnes volontaires — pas à toute l'entreprise. Vous saurez au bout d'un mois si l'outil mérite les quinze documents suivants, et vous le saurez sur des chiffres, pas sur une impression.

---

*Benjamin de Bruijne est consultant digital et IA indépendant en Belgique. Il automatise les tâches répétitives des PME et met l'IA là où elle enlève une corvée précise. [Astérisme : l’IA dans vos process](https://asterisme.ai/).*
