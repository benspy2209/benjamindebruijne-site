---
title: "Votre entreprise est-elle citée par les IA ? La mesure en une heure"
description: "Savoir si les assistants IA citent votre entreprise : un protocole de mesure reproductible en une heure, et comment lire les résultats sans se tromper."
date: 2026-11-11
rubrique: ia
lang: fr
tags: [IA, Visibilité, PME, Belgique, AI Act]
points:
  - "Dix questions, quatre assistants, une grille : une heure suffit"
  - "Sur 1 668 sociétés belges testées, 96 à 98 % d'invisibilité"
  - "Vérifier son robots.txt avant de conclure quoi que ce soit"
---

Un dirigeant m'envoie une capture d'écran. Il a demandé à un assistant IA un comptable dans sa ville, son cabinet n'apparaît pas, et la question qui suit est toujours la même : qu'est-ce qu'on fait ?

La bonne réponse commence par une autre question : qu'est-ce qu'on a mesuré ? Une capture d'écran n'est pas une mesure : elle dépend de la formulation, du compte utilisé, du jour. Avant de payer quoi que ce soit pour « être visible dans l'IA », une entreprise peut produire elle-même un constat chiffré et reproductible, en une heure. Voici le protocole que j'applique, et ce que les résultats disent réellement.

## Ce qui est vrai en 2026

**L'ordre de grandeur, d'abord.** Statbel, l'office belge de statistique, dénombre 1 187 819 assujettis à la TVA en 2024, dont 997 481 sans aucun salarié (be.STAT). Un assujetti à la TVA n'est pas une entreprise active — Statbel publie une série « démographie des entreprises » qui retient une autre définition — mais l'ordre de grandeur suffit : la grande majorité des entreprises belges n'a personne en interne pour s'occuper de cette question.

**Ensuite, le point le plus concret : les assistants ne lisent votre site que si vos fichiers le permettent.** Les éditeurs documentent publiquement leurs robots.

- La documentation d'OpenAI sur ses robots distingue trois agents : **OAI-SearchBot** pour la recherche, **GPTBot** pour l'entraînement des modèles, **ChatGPT-User** pour les visites déclenchées par une personne. Elle précise qu'un site exclu pour OAI-SearchBot n'apparaîtra pas dans les réponses de recherche, que les deux réglages sont indépendants (on peut autoriser la recherche et refuser l'entraînement), et qu'une modification de `robots.txt` peut mettre environ 24 heures à prendre effet.
- La documentation d'Anthropic décrit elle aussi trois agents : **ClaudeBot** pour l'entraînement, **Claude-User** pour les requêtes lancées par une personne, **Claude-SearchBot** pour l'indexation en vue de la recherche. Elle indique que désactiver Claude-User peut réduire la visibilité du site dans la recherche dirigée par l'utilisateur, et que depuis le 30 octobre 2026 un signal « pas d'entraînement » lisible par machine est honoré, une règle nommant explicitement ClaudeBot restant prioritaire.
- La documentation Google Search Central précise que le jeton `robots.txt` **Google-Extended** contrôle l'entraînement et le *grounding* de Gemini (applications et API), qu'il n'a pas d'user-agent propre, et qu'il n'affecte ni l'inclusion dans Search ni le classement. Pour AI Overviews et AI Mode, les leviers sont autres : les balises meta robots (`noindex`, `nosnippet`) et un contrôle dédié dans la Search Console. Google a annoncé en octobre 2026 un jeton partagé de refus d'entraînement (travaux IETF AIPREF), dont le support est annoncé pour début 2027.

**Troisième point : ce qu'il ne faut pas faire pour gagner cette visibilité.** Les règles anti-spam de Google Web Search qualifient l'« abus de contenu à grande échelle » (*scaled content abuse*) de pratique sanctionnable, que les pages soient produites par automatisation, par des humains, ou les deux ; cette politique a été introduite en mars 2024, en extension de celle sur le contenu généré automatiquement. Le guide de Google sur les fonctionnalités d'IA génératives y range aussi le fait de créer un contenu distinct pour chaque variante de requête, principalement pour manipuler les réponses génératives. Générer trois cents pages « meilleur comptable à X » est exactement ce qui est visé.

**Enfin, deux obligations à garder en tête.** Le règlement (UE) 2024/1689, l'AI Act, s'applique à partir du 2 août 2026 ; son article 50, paragraphe 4, impose de signaler un texte généré ou manipulé par une IA publié pour informer le public sur des questions d'intérêt public, sauf s'il a fait l'objet d'un contrôle humain ou éditorial avec une responsabilité éditoriale identifiée. Une page commerciale n'est probablement pas un « sujet d'intérêt public » : c'est un point d'interprétation, à confirmer avec votre conseil, et EUR-Lex publie un texte consolidé (version au 27 juillet 2026) dont il faut vérifier la rédaction en vigueur. Second point : si votre mesure consigne les noms des confrères cités à votre place, elle traite des données personnelles. La CNIL rappelle que les données professionnelles d'une personne physique, même déjà publiquement accessibles, restent des données personnelles. En pratique : on conserve des agrégats, pas des listes nominatives.

## Le protocole, en six étapes

1. **Écrire dix questions de client, pas dix mots-clés.** « Je cherche un comptable pour une petite société à Namur, qui me recommandez-vous ? », « qui installe des pompes à chaleur dans le Brabant wallon ? ». Formulez-les comme un particulier les poserait, avec la ville. Figez-les par écrit : c'est votre instrument de mesure, il ne doit plus bouger d'une campagne à l'autre.
2. **Figer les paramètres.** Notez la date, l'assistant, et utilisez une session neuve, déconnectée ou sans historique quand c'est possible : un compte qui vous connaît depuis deux ans ne mesure pas la même chose qu'un prospect qui découvre votre métier.
3. **Interroger quatre assistants, une fois chacun, à la main.** Dix questions, quatre assistants, quarante réponses. Collez chaque réponse brute dans un tableur, sans la résumer. C'est l'étape la plus longue : comptez trente minutes.
4. **Noter chaque réponse sur une grille à trois cases.** Pour chaque réponse : votre entreprise est-elle citée ? Un concurrent local est-il cité ? Un nom est-il cité qui ne correspond à aucune société réelle ? Trois colonnes, oui ou non, pas d'appréciation.
5. **Vérifier chaque nom cité dans le registre officiel.** La Banque-Carrefour des Entreprises permet de confirmer qu'une société citée existe, à l'adresse et avec l'activité annoncées. C'est ce contrôle qui transforme une impression en donnée : sans lui, impossible de distinguer un concurrent réel d'un nom plausible mais inventé.
6. **Vérifier vos propres fichiers avant de conclure.** Ouvrez `votresite.be/robots.txt` et cherchez les agents listés plus haut. Regardez aussi vos balises meta robots. Si un agent de recherche est bloqué, vous n'avez pas un problème de visibilité : vous avez un réglage à corriger, et la mesure devra être refaite.

Une heure plus tard, vous avez un chiffre : sur quarante réponses, combien vous citent. Peu élégant, et suffisant pour décider.

## Ce que donne la même mesure à grande échelle

J'ai industrialisé ce protocole dans l'Observatoire de la souveraineté conversationnelle : campagnes figées (mêmes questions, mêmes modèles) et validation humaine de chaque nom cité. Trois campagnes publiées, sur des populations entières plutôt que sur des échantillons : 488 comptables namurois, 382 plombiers namurois, 798 comptables du Brabant wallon, soit 1 668 sociétés.

Les taux d'invisibilité sortent à 96,9 %, 98,4 % et 96,6 %. Deux des quatre assistants testés ne citaient aucun cabinet local. Et selon l'assistant, jusqu'à 52 % des noms cités ne correspondaient à aucune société du registre : des noms crédibles, bien orthographiés, qui n'existent pas. Coût total des trois campagnes : moins de cinq euros d'appels d'API.

Deux leçons : être invisible est la situation normale, pas une anomalie qui vous viserait ; et le risque n'est pas seulement l'absence, c'est aussi d'être remplacé par un nom inventé — ce que seule la vérification au registre permet de voir.

## Ce qui bloque en pratique

**La capture d'écran unique.** Elle rassure ou elle affole, elle ne mesure rien : deux formulations donnent deux réponses, et la même question posée deux fois peut varier. D'où les dix questions figées : c'est la répétition qui fait la mesure, pas l'exemple.

**Le fichier qui ferme la porte.** J'ai vu des sites dont le `robots.txt` bloquait tout agent inconnu par précaution, et dont le dirigeant s'étonnait de ne pas être cité. Les documentations citées plus haut sont explicites : les réglages d'entraînement et de recherche sont distincts, et bloquer l'agent de recherche vous retire des réponses.

**La tentation du volume.** Quand le constat tombe, la réaction est de produire vingt pages par ville. C'est précisément la pratique visée par les règles anti-spam de Google depuis mars 2024. Le volume n'est pas une stratégie, c'est un risque de classement.

## Par où commencer, en deux semaines

Semaine 1 : écrivez les dix questions, vérifiez `robots.txt` et vos balises, corrigez ce qui bloque un agent de recherche, et attendez vingt-quatre heures comme l'indique la documentation d'OpenAI.

Semaine 2 : passez les quarante questions, remplissez la grille, vérifiez les noms au registre, et écrivez une page de conclusion : taux de citation, nombre de noms inventés, une décision. Refaites la mesure dans trois mois, avec les mêmes questions. Deux points dans le temps valent mieux que dix captures d'écran.

---

*Benjamin de Bruijne est consultant digital et IA indépendant en Belgique. Il automatise les tâches répétitives des PME et met l'IA là où elle enlève une corvée précise. [Astérisme : l’IA dans vos process](https://asterisme.ai/).*
