---
title: "Typical LLM errors at work: the test that catches each one"
description: "Invented facts, misplaced numbers, ignored instructions, version drift: the five classic LLM failures and the test that catches each one."
date: 2026-11-25
rubrique: ia
lang: en
tags: [IA, LLM, Qualité, PME, AI Act]
points:
  - "Five known failures, not an endless list of surprises"
  - "Each failure has its test, written before going live"
  - "Human review only counts if it can change the outcome"
---

A quote goes out to a customer with a product reference that does not exist. Nobody lied: a large language model (LLM, the engine behind AI assistants) filled a gap, the output read well, and the review focused on tone rather than facts.

That kind of incident is not bad luck. An LLM's failure modes are few, well known, and each one can be detected with a simple test. Here are the five I meet most often in SMEs, with the matching test, and what regulation already requires on top.

## What is true in 2026

**Vendors document the countermeasures themselves.** The official Claude documentation (Anthropic, *Reduce hallucinations* page) describes techniques any company can reuse: explicitly allow the model to answer that it does not know, which strongly reduces false statements; have it extract word-for-word quotes from a document before answering, to ground the answer in the actual text; require a supporting quote for every claim, then ask it to retract the claim if no quote supports it; restrict the answer to the documents provided. These are design measures, not magic settings, and they are written by the vendor itself.

**Model versions have a published life cycle.** The same documentation publishes a deprecation cycle: active models (fully supported), legacy models (no longer updated) and deprecated models (no longer available to new customers, still available to existing ones until retirement). After retirement, calls to the model fail. In practice: an assistant wired to an application programming interface (API) sees its engine change over time, and that change is announced, so it can be planned.

**The AI Act requires saying when it is an AI.** Regulation (EU) 2024/1689 provides, in Article 50(1), that AI systems intended to interact directly with natural persons be designed so that those persons know they are interacting with an AI, unless this is obvious from the context to a reasonably well-informed, observant and circumspect person; the information must be clear no later than the first interaction (EUR-Lex, consolidated text of 27 July 2026). Paragraph 4 adds an obligation for deployers: text generated or manipulated by AI and published in order to inform the public on matters of public interest must be disclosed as such. A quote or a customer letter does not fall into that case; a news article does.

**AI literacy is an obligation, with a low bar.** Article 4 of the same regulation was rewritten by Regulation (EU) 2026/1744 of 8 July 2026 (EUR-Lex). Providers and deployers take measures that support AI literacy, taking into account knowledge and the context of use, and the text specifies that the obligation does not require guaranteeing any specific level of AI literacy for any given individual. In other words: spotting these failures is part of what is expected from your teams, with no exam to pass.

**Human control has to be real.** The Belgian Data Protection Authority recalls that the GDPR in principle prohibits (Article 22) a decision producing legal effects or significantly affecting a person if it is based solely on automated processing, and that human intervention only counts if it is meaningful: the person must have sufficient authority to change the outcome. Systematically rubber-stamping a pre-selection remains, in its view, an automated decision. This is a point of interpretation: to be confirmed with your own counsel for your specific case.

## The five failures, and the test that catches each

1. **Invented facts.** The model completes what is missing: a reference, the name of a standard, an article of law, a clause. *The test:* take ten real outputs and require, for every factual claim, the literal quote from the source document. Any claim without a traceable quote counts as an error. If the rate exceeds what your review can absorb, the use case is not ready.

2. **The misplaced number.** The most expensive one, because the most credible: a correct total in the wrong place, a percentage applied to the wrong base, VAT calculated on an amount that already includes it. *The test:* recalculate by hand the numbers of ten documents, and check that each amount appears as such in the source. A design rule that avoids 90% of the problem: never let the model calculate, have it extract values and do the arithmetic elsewhere.

3. **The ignored instruction.** You wrote a two-page instruction; three constraints out of twelve are respected. This happens mainly when instructions contradict each other or come after a long document. *The test:* write only constraints that can be checked mechanically (format, length, mandatory fields, wording never to be used) and run ten cases, counting violations. A constraint you cannot check at a glance is not a constraint, it is a wish.

4. **Language and register.** In Belgium this is a daily failure: a Dutch-language letter that switches back to French in the third paragraph, or informal address in an official letter. *The test:* one set of cases per language in use, checking the language of every paragraph, not only the first.

5. **Drift over time.** The same prompt, the same document, a different output three months later: the model version changed, or your document base moved. *The test:* freeze a reference set of twenty cases with the expected output, replay it once a month and at every announced version change, and record which model version produced what.

## What gets in the way in practice

**Review by the person who produced the output.** Whoever launched the generation reviews their own work and sees what they wanted to read. Have someone else review it, or at minimum work from a written checklist, in order: numbers, names, dates, commitments.

**The test set that does not exist.** Without expected outputs written beforehand, there is no test, only impressions. Twenty real cases, with the right answer noted next to each, are enough and can be prepared in half a day.

**The right to say no that is never granted.** If the instruction does not let the model answer "this information is not in the document", it will invent something in order to comply. The countermeasure is documented by the vendor; it still has to be written into the instruction.

## Where to start, in two weeks

Week 1: pick a task already handed to an assistant, gather twenty real cases and note the expected output next to each. Count the errors, failure by failure, with the five tests above. Week 2: fix by design first — allow "I don't know", require quotes, move calculations out of the model, cut the instruction down to checkable constraints. Then write on one page who reviews what, with what authority to refuse an output, and which model version is in service. Replay the reference set every month. It is less appealing than a new tool, and it is what prevents the quote for a product that does not exist.

---

*Benjamin de Bruijne is an independent digital and AI consultant in Belgium. He automates repetitive work for SMEs and puts AI where it removes a specific chore. [Astérisme: AI inside your processes](https://asterisme.ai/).*
