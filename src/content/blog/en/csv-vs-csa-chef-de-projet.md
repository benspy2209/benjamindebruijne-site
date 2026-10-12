---
title: "CSV or CSA: what really changes for a project manager"
description: "The FDA's CSA guidance is now final. What changes in a validation plan, what does not change, and who it actually applies to."
date: 2026-10-12
lang: en
tags: [GxP, CSV, CSA, GAMP 5, validation]
points:
  - "FDA's CSA is final, and scoped to devices"
  - "Critical thinking replaces reflex documentation effort"
  - "Part 11 and Annex 11 are not moving"
---

"We do CSA now, so we can lighten the CSV." I hear that sentence in kick-off meetings, and it is half true. CSV is computerised system validation. The false half is expensive, because it drops documents nobody authorised anyone to drop.

The topic deserves a clean reset, all the more so because the reference text has moved. Here is what a project manager should take from it.

## Where CSA comes from, and where it applies

CSA stands for **Computer Software Assurance**. The term comes from a guidance of the FDA, the US agency for medicines and medical devices. For years, people spoke of "the 2022 draft guidance". That is no longer the case: the FDA issued a final version, *Computer Software Assurance for Production and Quality System Software*, on 24 September 2025, then a revised final version under the title *Computer Software Assurance for Production and Quality Management System Software*, dated 3 February 2026, which supersedes the previous one.

Two points change the way to talk about it.

First: this guidance sits under **21 CFR Part 820**, the US regulation on the quality management system for medical devices, renamed Quality Management System Regulation (QMSR) and effective since 2 February 2026. The February 2026 revision was made precisely to align with that amended Part 820. In other words: if you manufacture a medicinal product and not a device, CSA is not the regulation that applies to you. It is a public method you can draw on — not a text that covers you in front of a European inspector.

Second: an FDA guidance is explicitly **nonbinding** ("contains nonbinding recommendations"). It describes an approach the agency considers acceptable; it creates no obligation and removes none.

On substance, the guidance describes a risk-based approach to establish confidence in the automation used in production or in the quality system, and to identify where additional rigour is justified. It distinguishes software used **directly** in a production or quality process (automation, inspection, testing, collection and processing of production data) from software that merely **supports** those activities. It cites as assurance means risk-based testing, unscripted testing, and continuous monitoring of performance and data.

## What GAMP 5 took from it

GAMP 5, published by ISPE, is a good-practice **guide**, not a regulation. The second edition came out in 2022. ISPE describes that edition as keeping the principles of the first, insisting on **critical thinking** applied by knowledgeable and experienced subject matter experts to define the approach suited to each situation, and placing patient safety and product quality ahead of documentary compliance. The edition also covers service providers, cloud, open-source software and machine learning.

The important point for a European project manager: you do not need to invoke the FDA to work in proportion to risk. GAMP 5 second edition is enough, and ISPE presents CSA and critical thinking as a reinforcement of the risk-based approach, not as a break from it.

## The five decisions that change in a validation plan

Here is where the difference shows in your deliverables.

1. **The scope of the effort, decided before writing.** You no longer start from a complete template and lighten it afterwards. You start from the intended use and the GxP impact, and you decide what level of evidence is necessary, function by function. A reporting module that decides nothing and a module that releases a batch do not get the same treatment.
2. **The share of unscripted testing becomes explicit.** Exploratory tests, ad hoc tests, tests run by users who know the process have evidential value, provided they are documented: who, when, which version, what was observed. What does not work is unscripted testing left untraced.
3. **Standard configuration is not re-tested like development.** A standard function of a widely deployed software package, unconfigured and non-critical, can be covered by the supplier assessment and a use test, rather than by a battery of OQ (operational qualification) copied from the specification.
4. **The supplier assessment is part of the evidence.** Documentary audit, certificates, test results, version management procedure: what the supplier has already demonstrated is not redone, it is qualified and cited.
5. **Monitoring in operation becomes evidence.** Indicators, deviation review, data monitoring: what is observed continuously can reduce the initial test effort, provided the arrangement is described and genuinely maintained.

These five decisions are taken in the same place: in the validation plan, with Quality, before testing. Not in a closure committee, when evidence is missing.

## What does not change

And now the part the presentations forget.

**21 CFR Part 11** remains in force: electronic records, electronic signatures, audit trails. In 2003 the FDA published a scope and application guidance: a narrow reading of the scope, enforcement discretion on certain audit trail requirements, but a reminder that the underlying regulations continue to apply and a recommendation to base audit trails on a documented risk assessment.

In Europe, **Annex 11 of EudraLex volume 4** applies in its January 2011 revision: that is still the version published in the European Commission's catalogue. A revision is under way. The Commission ran a stakeholders' consultation on Chapter 4 (documentation), Annex 11 and a new **Annex 22** dedicated to artificial intelligence, texts prepared by the EMA GMDP Inspectors Working Group in cooperation with PIC/S. That consultation is closed, and I found no confirmation that a final text has been adopted: check the status in force on the Commission's site before citing the future Annex 11 in a plan. A notable point in the draft Annex 22: it states that it does not apply to generative AI or large language models, which should not be used in critical GMP applications.

Finally, for medicinal products, in December 2018 the FDA published a final guidance, *Data Integrity and Compliance With Drug CGMP: Questions and Answers*. That one, and not CSA, is what is cited in drug inspection programmes.

In short: CSA changes **how** you produce the evidence. It does not change **which** regulatory requirements apply to your system.

## What gets stuck, in practice

Three traps, in order of frequency.

**CSA as a licence to lighten without a written decision.** If the trade-off is not in the validation plan, signed by Quality, it is not CSA: it is a hole in the file. Critical thinking is documented, otherwise it does not exist at inspection.

**Confusing guide and regulation.** GAMP 5 and CSA recommend. Part 11, Part 820 and Annex 11 require. Saying "GAMP requires a traceability matrix" weakens your position the day someone checks.

**The wrong text invoked.** Citing an FDA guidance under Part 820 to lighten a medicinal product manufacturing system in a European plant: the intention is good, the reference does not hold. Rely on GAMP 5 and on your risk analysis, and have the interpretation approved by your Quality unit.

## Where to start, in six weeks

Take the next medium-sized project, not the most critical one. Weeks 1 and 2: write the intended use and the GxP impact function by function, and classify each function as critical or non-critical. Week 3: decide with Quality, per class, the expected level of evidence and the admissible share of unscripted testing, and write it into the validation plan. Week 4: qualify the supplier and list what you take over from their evidence. Weeks 5 and 6: run the tests along that split, recording exploratory tests with the same care as scripted ones.

At the end, compare the volume of documents produced and the number of deviations found with those of the previous project. It is that comparison, not the name of the method, which will convince your Quality unit next time.

---

*Benjamin de Bruijne is Digital Technology SME at a Belgian biopharmaceutical group. He helps Labs, Manufacturing and Quality teams frame and validate their digital projects in GxP environments. [Profile and availability](/en/biopharma/).*
