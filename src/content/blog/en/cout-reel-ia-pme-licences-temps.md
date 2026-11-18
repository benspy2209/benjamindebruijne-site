---
title: "What AI really costs an SME: licences, time, mistakes"
description: "Licences, setup, review, compliance, mistakes: the grid for working out what an AI tool really costs an SME, and when to stop."
date: 2026-11-18
rubrique: ia
lang: en
tags: [IA, Coûts, PME, Belgique, AI Act]
points:
  - "The licence is the smallest line on the bill"
  - "The real cost is review time, not the subscription"
  - "Measure three months, then extend, narrow or stop"
---

"The per-person subscription, we can afford that." The sentence comes up in almost every conversation about AI at work, and it is true. It is simply incomplete: the licence is the smallest line on the bill.

The cost of an AI tool in an SME spreads over six lines, only one of which shows up on a bank statement. The other five are time: setup, review, documentation, training, cleaning up mistakes. Here is the grid I use to put figures on them before deciding, and the measurement that lets you settle the question after three months. No market statistics: lines to fill in with your figures.

## What is true in 2026

**Two billing models, not one.** A tool sold per seat is paid per user, per month. An integration through an application programming interface (API) is paid per use, and its mechanism is worth knowing before you budget. One API provider's public documentation (Claude docs, Anthropic, *Pricing* page) describes the principle: billing per million tokens, with input and output counted separately and at different rates; an asynchronous batch mode at a reduced rate; context caching where a read costs a fraction of a normal input; a premium rate beyond a certain input volume on long context windows. The same documentation states that every response returns a `usage` object giving the token counts consumed. The practical consequence: a usage-based invoice can be checked line by line, provided you log those counters from day one.

**The "training" line has a legal basis, and its wording changed in 2026.** Regulation (EU) 2024/1689, the AI Act, has applied generally since 2 August 2026 (EUR-Lex). Its Article 4, on AI literacy, was rewritten by Regulation (EU) 2026/1744 of 8 July 2026 (OJ L of 24 July 2026; the EUR-Lex record gives a date of effect of 27 July 2026). In that version, providers and deployers take measures that support the development of AI literacy, and the text specifies that this obligation does not require guaranteeing any specific level of literacy for any individual. The recitals of the amending text explicitly cite the compliance burden on smaller enterprises as the reason. In other words: training remains a cost line to plan for, but the bar is not an exam per employee.

**High risk comes later, and it probably is not you.** The EUR-Lex summary places the high-risk obligations at 2 December 2027 for Annex III cases and 2 August 2028 for Annex I products. On transparency, the consolidated text provides that providers of generative AI systems already on the market before 2 August 2026 comply with the marking obligation of Article 50(2) by 2 December 2026; a Commission proposal (COM(2025) 836) would move that deadline to 2 February 2027, a timetable still under discussion as of my last check. I will not settle it: check the status in force on EUR-Lex before turning it into a budget deadline.

**GDPR compliance is a cost line, not a formality.** The CNIL points out that a provider can act as a processor when it develops a system on behalf of a client, the client remaining controller as soon as it sets the purpose and the means. In its 2026 guide co-written with the French health authority, it considers the deployer to be, in most cases, the controller for the data processed through use of the system; a deployer that fine-tunes a model with its own data, or connects it to its own document base (RAG) containing personal data, is the controller for that processing. It also recalls that non-compliant use exposes the deployer to being reclassified as a provider. On the Belgian side, the Data Protection Authority states that an impact assessment (DPIA) is mandatory for high-risk processing or when deploying new technologies, and that a high residual risk means consulting it before starting the processing. Its 2025 annual report notes that DPIAs are still often poorly implemented. These points are matters of interpretation: to be confirmed with your own counsel.

## The grid, six lines

1. **Licences.** The number of people who genuinely need one, times the price of your plan, times twelve. Count the seats used, not the seats bought: the gap is your first saving.
2. **Setup.** Hours spent connecting the tool, writing the instructions, preparing the documents, testing. Charge them at the loaded hourly cost of whoever spends them, even if that is you.
3. **Review.** The main line. For each task handed to the AI: minutes of review per item, times the number of items per month. A serious review of a quote or a letter does not take thirty seconds.
4. **Documentation and compliance.** Processing register to update, processor contract to read, DPIA when one is due, information to the people concerned. Count it in hours, once at installation, then one annual review.
5. **Training.** One short session per team, and a written note on what must never be pasted into an external tool. It is also the trace Article 4 asks you to be able to show.
6. **Cleaning up mistakes.** Time spent catching a wrong output that reached a client: correction, phone call, commercial gesture. Estimate a number of incidents per quarter and an average cost, then adjust with reality.

## The cost people forget: control

An AI tool does not remove a task, it changes its nature: producing becomes checking. And checking costs more the more plausible the output is. An obviously bad text is thrown away in two seconds; a well-turned text with a wrong figure in it gets read in full.

Which is why the only profitability question worth asking is this one: is the production time saved greater than the control time added? On a routine invoice, the answer is often yes. On a document that commits the company, it is often no, and that is useful information, not a failure.

The corollary: the more a mistake costs, the tighter the control has to be, so the smaller the net gain. The cases that work are frequent tasks, with low stakes per item and an output that is easy to verify.

## What gets in the way

**The free pilot.** A thirty-day trial measures enthusiasm, nothing else. During a pilot, the review is done by the most motivated person in the company, twice too fast, and the time is recorded nowhere. A pilot gives an impression, not a cost.

**Personal accounts.** When the official tool is judged too slow to arrive, teams use their own account. You pay nothing and you lose everything: no visibility on the documents that left the company, no processor contract, nothing to show if you are checked.

**No starting point.** Without a measurement of the time spent before the tool, no gain will be demonstrable after it. Three days of manual recording before you start beat six months of debate.

## Measure over three months, then decide

Month 0: pick one task, time it by hand for a week, note the monthly volume. Months 1 to 3: record the six lines every week, plus two counters — items produced with the tool, items sent back for correction. At the end of month 3, three outcomes are possible, all of them acceptable: extend to a second task; narrow to the sub-case that works; stop and cancel.

Stopping is not a project failure, it is the result of a measurement. The only real failure is paying for three years for a tool nobody dares either use or remove.

## Where to start, in two weeks

Week 1: list the three candidate tasks, drop the ones where a mistake goes straight to a client, keep one. Time the current way of doing it. Week 2: fill in the six lines with your figures, write in three sentences who reviews what, and set the decision date three months out. If one line stays empty because nobody knows how to fill it, that is where the risk is, not in the price of the licence.

---

*Benjamin de Bruijne is an independent digital and AI consultant in Belgium. He automates repetitive work for SMEs and puts AI where it removes a specific chore. [Astérisme: AI inside your processes](https://asterisme.ai/).*
