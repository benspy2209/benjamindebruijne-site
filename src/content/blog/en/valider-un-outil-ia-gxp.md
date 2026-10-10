---
title: "Validating an AI tool in a GxP environment: where to start"
description: "An AI tool is entering a pharma lab or plant: does it need validation, and how? A six-step, risk-proportionate method based on GAMP 5."
date: 2026-10-10
lang: en
tags: [GxP, CSV, GAMP 5, AI, validation]
points:
  - "The intended use, in writing, first"
  - "Test the use, not the model"
  - "Human in the loop and review over time"
---

An artificial intelligence tool arrives in a laboratory or on a pharmaceutical manufacturing site. An assistant that summarises reports, a model that pre-classifies deviations, a document search that answers in natural language. The question comes quickly, and it lands on Quality and IT at the same time: **does it need to be validated, and how?**

I meet it regularly in my role as Digital Technology SME. Here is the method I apply. Nothing revolutionary: it is GAMP 5, proportionate to risk, applied to an object with a few particularities.

## The framework already exists

First piece of good news: you are not alone. The second edition of GAMP 5 (2022) dedicates an appendix to artificial intelligence and machine learning. In 2024 the EMA published a reflection paper on AI across the medicinal product lifecycle. In early 2025 the FDA proposed a risk-based credibility framework for AI models used in regulatory decision-making. And the EU AI Act sets obligations by risk level, phased in until 2027.

None of these texts says "validate ChatGPT". All of them say the same thing: **define the use, assess the risk, demonstrate the tool is reliable for that use, stay in control over time.**

## Step 1: the intended use, in writing

Everything starts there, as for any computerised system. One sentence is enough at first: "Tool X proposes a summary of investigation reports, which the analyst reviews and approves before any use." That sentence already says three things: what the tool does, what it does not do (it does not decide), and where the human is.

Without a written intended use, you end up validating the tool "in general", which is impossible for a language model, and useless.

## Step 2: the GxP impact, honestly

Does the tool affect product quality, patient safety or the integrity of regulated data? If the answer is no, for example an assistant that helps draft meeting minutes, there is no CSV validation to do. Governance remains: what data is sent to it, who is accountable, how it is switched off.

If the answer is yes, the validation effort must be proportionate: a tool that **suggests** with systematic human review is not a tool that **decides**. That is exactly the spirit of GAMP 5 and of the CSA approach: critical thinking, not documents produced for form's sake.

## Step 3: what kind of AI are we talking about?

This is the particularity of the object. Four families, four approaches:

- **Rules and deterministic logic** sold as "AI": classic validation, nothing new.
- **A frozen machine learning model**, trained once and deployed: you validate a precise version, with a representative test dataset and performance metrics agreed in advance.
- **A language model through an API** (OpenAI, Anthropic, Mistral, a hosted model): you do not control the model. Treat it as a supplier: pin the version you call, qualify the supplier, test the use on a set of cases, and above all keep a human in the loop.
- **A model that keeps learning** in production: avoid it under GxP until you can demonstrate that a change in behaviour is detected and controlled. When in doubt, freeze.

## Step 4: the requirements, including data

User requirements for an AI tool look like those of any other system, with three additions:

1. **Data**: what goes into the tool (and what must never go in), where it goes, who can access it, for how long. For an external model this question alone settles half the risks.
2. **Acceptable performance**: what error rate is tolerated on which type of case? A summary that omits a critical deviation is not "95% correct", it is unacceptable. Write it down.
3. **Limits**: the cases where the tool must not be used, and what the user does instead.

## Step 5: test the use, not the model

You do not test the model's "intelligence". You test the **intended use** on a representative set of cases, prepared in advance, with expected results and thresholds. For a document assistant: fifty real, anonymised reports, questions whose answers are known, and a scoring grid. Keep the case set: it will serve at every version change.

The tests also cover what surrounds the model and which, for its part, is validated very classically: integration, access, audit trail, timestamps, export. That is where 21 CFR Part 11 and Annex 11 live.

## Step 6: go-live and the passing of time

An AI tool validated on day one is not validated forever. Three mechanisms to put in place before opening access:

- **The human in the loop**, written into the procedure: who reviews, who approves, who owns the final decision.
- **Logging**: which requests, which answers, which model version. Without it, no investigation is possible.
- **Periodic review and change control**, including the change you did not decide: the supplier updating its model. The pinned version and the case set from step 5 are your safety net.

## What gets in the way, in practice

Three traps come up often.

**Over-validating.** Trying to validate the model as such, producing two hundred pages of IQ/OQ, and ending up banning the tool because the file can never be closed. The answer is step 2: proportion.

**No owner.** An AI tool "from IT" or "from Quality" belongs to nobody. The use case needs a business owner who signs the intended use and the limits.

**Data leaving.** A user who pastes a batch record into a consumer interface has already created the incident, validation or not. Data governance must precede any pilot.

## Where to start, concretely

Pick **one** use case with low impact and high value: document assistance on internal procedures, report summaries, pre-sorting of requests. Write the intended use and the risk assessment, one page each. Build the case set. Roll out to a small group with mandatory review. Measure for six weeks. Then decide, with numbers in hand, to extend or to stop.

The document kit produced for this first case (intended use, risks, requirements, case set, procedure, review) is reused for the next ones. That is where the initial effort pays off.

---

*Benjamin de Bruijne is Digital Technology SME at a Belgian biopharmaceutical group. He helps Labs, Manufacturing and Quality teams frame and validate their digital projects in GxP environments. [Profile and availability](/en/biopharma/).*
