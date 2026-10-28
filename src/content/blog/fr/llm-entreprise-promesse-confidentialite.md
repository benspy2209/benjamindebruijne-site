---
title: "Choisir un LLM : ce que vaut la promesse de confidentialité"
description: "Les sept points à lire dans le contrat d'un fournisseur de LLM avant d'y envoyer des données d'entreprise, et ce qu'on n'envoie jamais."
date: 2026-10-21
rubrique: ia
lang: fr
tags: [IA, RGPD, Confidentialité, AI Act, PME]
points:
  - "La page marketing n'est pas le contrat : lisez l'article 28"
  - "Hébergement, conservation, entraînement : trois questions"
  - "Ce qu'on n'envoie jamais se décide avant l'abonnement"
---

Un cabinet comptable de quinze personnes me montre l'outil d'IA qu'il vient de choisir. La page d'accueil promet que « vos données restent confidentielles » ; je demande le contrat, et personne ne l'a ouvert.

C'est la situation normale. Un **LLM** (grand modèle de langage) arrive dans une PME comme n'importe quel service en ligne : par un abonnement, souvent pris par une personne motivée. Mais ce qui engage le fournisseur, ce n'est pas sa page de vente, c'est son contrat. Et les points à y lire sont peu nombreux, parce que le droit les a déjà listés.

## Ce qui est vrai en 2026

Dès que vous envoyez à un fournisseur de LLM des données personnelles — le nom d'un client, une adresse mail, un dossier salarié — et qu'il les traite pour votre compte, il est **sous-traitant** au sens du RGPD, le règlement (UE) 2016/679. Son article 28 exige un contrat ou un autre acte juridique qui précise l'objet et la durée du traitement, sa nature et sa finalité, le type de données et les catégories de personnes concernées. Le même article impose que le sous-traitant ne traite les données que sur instruction documentée, qu'il mette à disposition les informations nécessaires pour démontrer sa conformité et permette des audits, et qu'il n'engage un sous-traitant ultérieur qu'avec une autorisation écrite préalable, spécifique ou générale. La Commission européenne a publié des clauses contractuelles types pour ce contrat : la décision d'exécution (UE) 2021/915 du 4 juin 2021.

Un point de bascule, rappelé par la Cour de justice de l'Union européenne dans l'affaire C-683/21 : un sous-traitant qui détermine lui-même les finalités et les moyens du traitement est considéré comme responsable du traitement pour ce traitement. Traduit dans notre sujet : si le fournisseur réutilise vos données pour son propre compte, il ne joue plus le rôle qu'on lui prête. Ce n'est pas un détail de clause.

Si les données sortent de l'Union, le chapitre V du RGPD s'applique. Deux fondements courants : une décision d'adéquation, ou les clauses contractuelles types de la décision d'exécution (UE) 2021/914 du 4 juin 2021, garanties appropriées au sens de l'article 46, paragraphe 2, point c). Leurs considérants 19 et 20 demandent d'analyser les circonstances du transfert et le droit du pays de destination, et prévoient que le transfert n'ait pas lieu si ce droit empêche l'importateur de respecter les clauses. Pour les États-Unis, la décision d'exécution (UE) 2023/1795 du 10 juillet 2023 reconnaît un niveau de protection adéquat au cadre de protection des données UE–États-Unis — mais pour les organisations participantes seulement : une organisation radiée de la liste ne peut plus recevoir de données sur ce fondement, et la Commission indique suivre le cadre en continu et pouvoir le suspendre, le modifier ou l'abroger. Vérifiez le statut en vigueur sur ec.europa.eu.

Dernier élément de cadre : le règlement (UE) 2024/1689, l'AI Act. Son article 4, sur la maîtrise de l'IA, s'applique depuis le 2 février 2025 avec les chapitres I et II. Il a été réécrit par le règlement (UE) 2026/1744 du 8 juillet 2026 : l'obligation d'assurer un niveau suffisant de maîtrise de l'IA devient celle de prendre des mesures pour en favoriser le développement, et le texte précise qu'elle n'impose pas de garantir un niveau particulier chez une personne donnée. EUR-Lex publie un texte consolidé applicable au 27 juillet 2026 ; vérifiez la version en vigueur sur eur-lex.europa.eu. Dans les deux rédactions, la formation est attendue de vous, pas de votre fournisseur.

## Les sept points à lire avant d'envoyer la moindre donnée

1. **Le document qui engage.** Cherchez un accord de traitement des données, distinct des conditions générales d'utilisation. S'il n'existe pas pour votre formule, il n'y a pas d'article 28, et la promesse de la page d'accueil ne vaut rien.
2. **L'entraînement.** Une seule phrase compte : vos entrées et vos sorties servent-elles à entraîner ou améliorer le modèle, et ce comportement est-il désactivé par défaut sur votre formule ? La CNIL demande de s'interroger sur la mesure dans laquelle le prestataire est susceptible de réutiliser les données fournies au système, et d'adapter l'usage en conséquence.
3. **La conservation.** Combien de temps les requêtes sont gardées, qui peut les lire chez le fournisseur (modération, support), et comment obtenir leur suppression. Une durée « variable » n'est pas une durée.
4. **Le lieu.** Où le traitement a lieu, et aussi où se trouvent les sauvegardes et les journaux. Un hébergement européen dont le support accède aux données depuis un pays tiers reste un transfert, avec le chapitre V au-dessus.
5. **La chaîne de sous-traitants.** La liste des sous-traitants ultérieurs, l'engagement de vous prévenir avant d'en ajouter un, et ce qui se passe si vous vous y opposez. L'article 28 fait de cette autorisation une condition.
6. **La preuve.** Ce que le fournisseur accepte réellement de montrer : certifications, rapports d'audit, journaux d'accès. L'article 28 prévoit les informations nécessaires et la possibilité d'audits ; regardez ce que le contrat en fait.
7. **La sortie.** Comment récupérer vos contenus et faire effacer le reste à la fin du contrat, dans quel format et en combien de jours.

## Ce qu'on n'envoie jamais

Cette liste se décide avant l'abonnement, pas après le premier incident. La CNIL recommande d'encadrer l'utilisation d'un système d'IA générative par des politiques ou chartes internes, qui listent les usages autorisés et interdits, et selon le mode de déploiement d'interdire la saisie de certaines données confidentielles — par exemple couvertes par le secret industriel et commercial — ou personnelles. Le principe tient en une phrase : les utilisateurs finaux ne devraient soumettre que des informations qu'ils sont autorisés à partager. Elle conseille aussi des invites harmonisées et standardisées, qui réduisent mécaniquement les données saisies.

Dans une PME, la liste tient en six lignes : dossiers du personnel, données de santé, copies de pièces d'identité, documents sous accord de confidentialité, identifiants et mots de passe, extraits de comptes clients nominatifs. Pour les données de clients ou de collaborateurs, la CNIL juge généralement plus opportun et plus sécurisé de privilégier un déploiement sur site ; avec une interface de programmation (API), note-t-elle, la maîtrise du système est quasi exclusivement dans les mains du fournisseur. Côté belge, la brochure de l'Autorité de protection des données sur les systèmes d'IA et le RGPD, publiée en décembre 2024, insiste sur la minimisation — ne collecter que le strictement nécessaire — et sur la sécurité : chiffrement, contrôles d'accès stricts, journalisation détaillée, tests d'intrusion réguliers. Elle rappelle aussi que l'article 35 du RGPD impose une analyse d'impact relative à la protection des données (AIPD) pour l'évaluation systématique de personnes fondée sur un traitement automatisé produisant des effets juridiques ou affectant significativement la personne, et qu'une AIPD est un processus continu, pas un exercice unique.

## Ce qui bloque en pratique

**Le compte personnel qui reste ouvert.** Vous signez un contrat propre, et trois personnes continuent d'utiliser leur compte gratuit pour les textes « pas sensibles ». Le contrat ne couvre que les comptes qu'il couvre. Or la CNIL rappelle que c'est l'organisme utilisateur qui engage sa responsabilité légale en cas de mauvaise utilisation par son personnel.

**« Hébergé en Europe » pris pour une réponse complète.** C'est une réponse au point 4, et à lui seul : rien sur l'entraînement, la conservation, ni qui lit vos requêtes.

**La confusion entre confidentialité et exactitude.** Deux problèmes différents. La CNIL note que ces systèmes sont susceptibles de générer des résultats inexacts qui peuvent pourtant paraître plausibles. Un outil irréprochable sur les données peut vous sortir un chiffre faux ; l'APD recommande un contrôle humain pour les décisions à fort impact.

## Par où commencer en deux semaines

Semaine 1 : recensez les usages réels, comptes personnels compris, en demandant sans reproche qui utilise quoi. Écrivez la liste de ce qu'on n'envoie jamais. Demandez au fournisseur l'accord de traitement, la liste des sous-traitants ultérieurs et le lieu de traitement et de sauvegarde.

Semaine 2 : rédigez la charte en une page — usages autorisés, usages interdits, ce qui doit être relu avant envoi à un client. Standardisez trois ou quatre invites pour les tâches fréquentes. Prévoyez une heure de formation, en gardant la trace de qui l'a suivie. Associez votre délégué à la protection des données s'il y en a un, et décidez si une AIPD s'impose.

Si une clause reste ambiguë après lecture — et il en restera une — c'est un point d'interprétation à confirmer avec votre conseil. Mais vous saurez laquelle, et ce n'est plus la même conversation.

---

*Benjamin de Bruijne est consultant digital et IA indépendant en Belgique. Il automatise les tâches répétitives des PME et met l'IA là où elle enlève une corvée précise. [Astérisme : l’IA dans vos process](https://asterisme.ai/).*
