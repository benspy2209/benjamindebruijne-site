---
title: "Is your company cited by AI assistants? Measure it in one hour"
description: "Finding out whether AI assistants cite your company: a reproducible one-hour measurement protocol, and how to read the results without fooling yourself."
date: 2026-11-11
rubrique: ia
lang: en
tags: [IA, Visibilité, PME, Belgique, AI Act]
points:
  - "Ten questions, four assistants, one grid: an hour is enough"
  - "Across 1,668 Belgian companies tested, 96 to 98% invisible"
  - "Check your robots.txt before concluding anything at all"
---

A company owner sends me a screenshot. He asked an AI assistant for an accountant in his town, his firm does not appear, and the question that follows is always the same: what do we do about it?

The right answer starts with another question: what exactly has been measured? A screenshot is not a measurement — it depends on the wording, on the account used, on the day. Before paying anything to "be visible in AI", a company can produce its own figure, reproducible, in one hour. Here is the protocol I apply, and what the results actually say.

## What is true in 2026

**The order of magnitude first.** Statbel, the Belgian statistical office, counts 1,187,819 VAT-registered entities in 2024, of which 997,481 have no employee at all (be.STAT). A VAT registration is not an active company — Statbel publishes a separate "business demography" series using another definition — but the order of magnitude is enough: the vast majority of Belgian companies has nobody in-house to deal with this question.

**Next, the most concrete point: the assistants only read your site if your files allow it.** The vendors publish documentation for their crawlers.

- OpenAI's crawler documentation distinguishes three agents: **OAI-SearchBot** for search, **GPTBot** for model training, **ChatGPT-User** for visits triggered by a person. It states that a site opted out of OAI-SearchBot will not appear in search answers, that the two settings are independent (you can allow search and refuse training), and that a `robots.txt` change can take about 24 hours to take effect.
- Anthropic's documentation describes three agents as well: **ClaudeBot** for training, **Claude-User** for requests started by a person, **Claude-SearchBot** for indexing in view of search. It states that disabling Claude-User could reduce the site's visibility in user-directed search, and that since 30 October 2026 a machine-readable "no AI training" preference signal is honoured, a rule explicitly naming ClaudeBot remaining more specific than that general signal.
- Google Search Central documentation states that the `robots.txt` token **Google-Extended** controls training and *grounding* for Gemini (apps and API), that it has no user agent of its own, and that it affects neither inclusion in Search nor ranking. For AI Overviews and AI Mode the levers are different: robots meta tags (`noindex`, `nosnippet`) and a dedicated control in Search Console. In October 2026 Google announced a shared AI training opt-out token (IETF AIPREF work), with support announced for early 2027.

**Third point: what you must not do to gain that visibility.** Google Web Search's spam policies treat "scaled content abuse" as a practice that can be penalised, whether the pages are produced by automation, by humans, or both; the policy was introduced in March 2024, as an expansion of the one on automatically generated content. Google's guide on generative AI features also puts creating separate content for each query variation, primarily to manipulate generative answers, under that same policy. Generating three hundred "best accountant in X" pages is exactly what it targets.

**Finally, two obligations to keep in mind.** Regulation (EU) 2024/1689, the AI Act, applies from 2 August 2026; its Article 50(4) requires disclosing that a text generated or manipulated by an AI and published to inform the public on matters of public interest is artificially generated, unless it has undergone human or editorial review with identified editorial responsibility. A commercial page is probably not a "matter of public interest": that is a point of interpretation, to be confirmed with your counsel, and EUR-Lex publishes a consolidated text (version dated 27 July 2026) whose wording in force must be checked. Second point: if your measurement records the names of the peers cited in your place, it processes personal data. The CNIL points out that the professional data of a natural person, even already publicly accessible, remains personal data. In practice: keep aggregates, not name lists.

## The protocol, in six steps

1. **Write ten customer questions, not ten keywords.** "I am looking for an accountant for a small company in Namur, who would you recommend?", "who installs heat pumps in Walloon Brabant?". Phrase them the way a private individual would, with the town. Freeze them in writing: this is your measuring instrument, and it must not move from one campaign to the next.
2. **Freeze the parameters.** Note the date, the assistant, and use a fresh session, logged out or without history where possible: an account that has known you for two years does not measure the same thing as a prospect discovering your trade.
3. **Query four assistants, once each, by hand.** Ten questions, four assistants, forty answers. Paste every raw answer into a spreadsheet, without summarising it. This is the longest step: count thirty minutes.
4. **Score each answer on a three-box grid.** For each answer: is your company cited? Is a local competitor cited? Is a name cited that matches no real company? Three columns, yes or no, no appreciation.
5. **Check every cited name in the official register.** The Crossroads Bank for Enterprises lets you confirm that a cited company exists, at the stated address and with the stated activity. That check is what turns an impression into data: without it, there is no way to tell a real competitor from a plausible but invented name.
6. **Check your own files before concluding.** Open `yoursite.be/robots.txt` and look for the agents listed above. Look at your robots meta tags too. If a search agent is blocked, you do not have a visibility problem: you have a setting to fix, and the measurement will have to be redone.

One hour later you have a figure: out of forty answers, how many cite you. Inelegant, and enough to decide on.

## What the same measurement gives at scale

I industrialised this protocol in the Observatoire de la souveraineté conversationnelle: frozen campaigns (same questions, same models) and human validation of every cited name. Three published campaigns, on entire populations rather than samples: 488 accountants in the Namur area, 382 plumbers in the Namur area, 798 accountants in Walloon Brabant — 1,668 companies.

The invisibility rates come out at 96.9%, 98.4% and 96.6%. Two of the four assistants tested cited no local firm at all. And depending on the assistant, up to 52% of the cited names matched no company in the register: credible, correctly spelled names that do not exist. Total cost of the three campaigns: under five euros of API calls.

Two lessons: being invisible is the normal situation, not an anomaly aimed at you; and the risk is not only absence, it is also being replaced by an invented name — which only the register check reveals.

## What gets in the way in practice

**The single screenshot.** It reassures or it alarms, and it measures nothing: two phrasings give two answers, and the same question asked twice can vary. Hence the ten frozen questions: it is repetition that makes the measurement, not the example.

**The file that closes the door.** I have seen sites whose `robots.txt` blocked every unknown agent as a precaution, and whose owner was then surprised not to be cited. The documentation cited above is explicit: the training and search settings are separate, and blocking the search agent takes you out of the answers.

**The temptation of volume.** When the figure lands, the reaction is to produce twenty pages per town. That is precisely the practice targeted by Google's spam policies since March 2024. Volume is not a strategy, it is a ranking risk.

## Where to start, in two weeks

Week 1: write the ten questions, check `robots.txt` and your meta tags, fix whatever blocks a search agent, and wait twenty-four hours as OpenAI's documentation indicates.

Week 2: run the forty questions, fill in the grid, check the names in the register, and write a one-page conclusion: citation rate, number of invented names, one decision. Redo the measurement in three months, with the same questions. Two points in time beat ten screenshots.

---

*Benjamin de Bruijne is an independent digital and AI consultant in Belgium. He automates repetitive work for SMEs and puts AI where it removes a specific chore. [Astérisme: AI inside your processes](https://asterisme.ai/).*
