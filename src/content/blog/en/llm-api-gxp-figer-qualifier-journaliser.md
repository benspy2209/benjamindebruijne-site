---
title: "An LLM via API in GxP: pin, qualify, log"
description: "Using an LLM via API in a GxP system: pin the model version, qualify the supplier, log the calls and review over time."
date: 2026-10-19
rubrique: gxp
lang: en
tags: [GxP, CSV, GAMP 5, AI, LLM]
points:
  - "The model vendor is a supplier: qualify it like one"
  - "An unpinned model means a system that moves on its own"
  - "You test the intended use, never the model in general"
---

A project manager shows me an application that drafts report summaries. It works, Quality wants it, and it calls an **LLM** — a large language model — hosted at a vendor, through an **API** (the technical entry point by which one piece of software calls another).

Then the question lands: how do you validate a system where you control neither the model nor the moment it changes? It looks new; it is not. We have long dealt with components we did not write. What changes is how fast this one moves.

## The real problem is not the model, it is the movement

A validated system rests on a simple assumption: it does not change by itself. You specify it, you test it, you freeze it, and every evolution goes through change management. That assumption is what an API call to a remote model puts in question.

The call is made against a model identifier. If that identifier points to "the latest version", behaviour can evolve with no action on your side, no change request, no test. From a validation standpoint, you no longer have a system: you have a subscription.

## The framework already exists

No text says "here is how to validate an LLM". Several already say what matters.

**Annex 11 of EudraLex volume 4** (European Commission, January 2011 revision) is the text in force for computerised systems under European GMP. Three of its requirements bear directly on our subject. Audit trails must be available, convertible to a generally intelligible form, and regularly reviewed. Any change made to the system, configuration included, must only be made in a controlled manner in accordance with a defined procedure. And systems must be periodically evaluated to confirm that they remain in a valid state and compliant with GMP.

The FDA's **21 CFR Part 11** requires, in 11.10(a), validation of systems that create, modify or maintain electronic records, and in 11.10(e) secure, computer-generated, time-stamped audit trails that independently record creations, modifications and deletions. The FDA guidance *Part 11 — Scope and Application* (2003) announces enforcement discretion on some of these requirements, while recalling that the underlying predicate rule obligations remain in full: do not build a validation file on that discretion.

Guides, for their part, recommend — they do not require, and the distinction counts in an inspection. **GAMP 5, Second Edition** (ISPE, 29 July 2022) contains an Appendix M2, *Supplier Assessment*: reasons for assessing a supplier, audit procedures, re-evaluation, certification. In July 2025 ISPE published a dedicated guide, the **ISPE GAMP Guide: Artificial Intelligence**, intended to be used alongside GAMP 5 Second Edition.

On the authorities' side, the **EMA** published on 30 September 2024 its *Reflection paper on the use of artificial intelligence in the lifecycle of medicines* (EMA/CHMP/CVMP/83833/2023, draft from July 2023): principles, which it presents as reflecting its current experience, not binding rules. In January 2025 the **FDA** opened for consultation a draft guidance (docket FDA-2024-D-4689) that assesses the credibility of a model according to risk and a precise **context of use**; when I checked, it was still a draft. And Article 4 of **Regulation (EU) 2024/1689** (the AI Act), on AI literacy among staff, has applied since 2 February 2025 and has since been amended by Regulation (EU) 2026/1744: read the consolidated version dated 27 July 2026 on eur-lex.europa.eu. How your use is classified under the AI Act is a point of interpretation, to be confirmed with your Quality unit and your legal counsel.

One note of caution: the Commission ran a consultation on a revision of Annex 11, of Chapter 4, and on a new Annex 22. The draft adds a supplier and service management section recalling that the regulated user remains responsible even when relying on qualification carried out by a supplier, a service provider or its own internal IT. It is not adopted: the EudraLex page still lists the 2011 Annex 11 as the text in force.

## The method in six steps

1. **Describe the intended use, not the tool.** "An LLM" is not a scope. "Propose a draft summary, reviewed and approved by a qualified operator before recording" is one. That sentence is what determines GxP impact and testing effort — the context of use in the FDA draft.

2. **Pin the version, and the configuration with it.** A frozen model identifier, written in configuration and not hard-coded. But also everything else that shapes behaviour: the *prompt* (the instruction sent to the model) and its version, the call parameters, document retrieval if there is any. If you cannot replay a call from six months ago, nothing is pinned.

3. **Qualify the vendor as a supplier.** Familiar ground: a documentary assessment proportionate to risk, in the spirit of GAMP 5 Appendix M2. The useful questions: which versions are frozen and for how long, what notice is given before retirement, where data is processed, is it used to train the model, what quality documentation is supplied. Annex 11 already calls for formal agreements with third parties.

4. **Build a test set, and test the use.** Not the model's performance in general: your use. Thirty to fifty real cases, with the expected answer defined by a business owner, and edge cases chosen on purpose: unreadable document, unexpected language, missing information. That test set is a validation deliverable and the reference for future comparisons.

5. **Log what is controllable.** You do not log the inside of the model, but your system: who asked what, when, on which document, with which model and prompt version, which output was proposed, and above all who reviewed, modified or accepted it. That last part is what carries the audit trail in the sense of Annex 11 and 11.10(e), and it is retained as long as the data it relates to.

6. **Treat a model change as a change.** The vendor announces the retirement of a version: that is a change request, with impact assessment and a replay of the test set before going live. Annex 11's periodic evaluation is the safety net: are the versions in production the ones in the file, have the audit trails been reviewed, has the observed error rate drifted.

## What gets in the way in practice

**Scope that expands after validation.** You validate a summarising use, and six weeks later someone asks the same tool decision questions. Technically, nothing has changed; for validation, it is a different system. The only defence is a use description precise enough that leaving it is visible.

**Confusing service reliability with answer accuracy.** A vendor can document excellent availability and say very little about the correctness of outputs in your context. Accuracy, nobody will certify: it is measured at your site, on your test set.

**Human review that becomes a click.** A human in the loop is only a control if they have the means to say no: time to read, access to the source, and a distinct record separating "accepted unchanged" from "corrected". Without that distinction, you can neither demonstrate the review took place nor measure drift.

## Where to start

Six weeks are enough for a first clean file, provided you pick a narrow use. Weeks 1 and 2: the intended use in one paragraph, with the GxP impact and the decision the output influences, reviewed by Quality before a single line of code. Week 3: supplier qualification, on documents — and accept that some answers will be disappointing, that is an input to your risk assessment. Week 4: the test set, built by the business, not by IT. Week 5: pin, log, replay, document the gaps. Week 6: change management and periodic review, written before go-live.

What remains afterwards is routine work, and that is the sign it worked: a system that only moves when you decided it would.

---

*Benjamin de Bruijne is Digital Technology SME at a Belgian biopharmaceutical group. He helps Labs, Manufacturing and Quality teams frame and validate their digital projects in GxP environments. [Profile and availability](/en/biopharma/).*
