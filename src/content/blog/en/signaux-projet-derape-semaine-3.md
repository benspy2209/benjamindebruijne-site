---
title: "A project heading off the rails shows it in week 3: seven signals"
description: "The seven weak signals that announce a digital project drifting as early as week three, and the precise question to ask for each one."
date: 2026-11-12
rubrique: construire
lang: en
tags: [Construire, Pilotage de projet, ISO 21502, PME, RGPD]
points:
  - "Drift shows in week 3, not when the first delay is announced"
  - "No clickable demo in three weeks is signal number zero"
  - "Each signal is handled with a question, not a meeting"
---

A digital project almost never goes off the rails at the moment you hear about it. You hear about it in month four, when the go-live date moves for the second time, and everyone then discovers facts that were already true in week three.

In twenty years of projects, I have never seen drift appear all at once. I have seen signals ignored because they did not look like a problem yet: a demo pushed back, a decision sent to the next steering meeting, a data export nobody opened. Here are the seven I watch, and the question that goes with each.

## What is true in 2026

Three things already exist and frame the subject, as long as you do not confuse what recommends with what requires.

**Project management is described by a standard, and that standard recommends.** **ISO 21502:2020**, *Project, programme and portfolio management — Guidance on project management*, is the edition published in the ISO catalogue (iso.org), recorded as an International Standard published on 22 December 2020. It gives high-level descriptions of practices considered to work well, for any type of organization and any type of project, and it covers the practices needed in each phase of the life cycle, including planning and control — addressing risks and issues, change control. One nuance, written as it stands: a limited revision was approved by technical committee ISO/TC 258 and a second edition is at committee draft stage; check the current status on iso.org. It is a guide, not a regulation: nobody will penalise you for not applying it. Its value here lies elsewhere: the standard treats **issues** as a practice distinct from risks. A risk is what could happen. An issue is what is already here. Most drifting projects keep an immaculate risk register and no list of open issues at all.

**Test data is not a technical detail.** The CNIL (cnil.fr), in its sheet on testing applications, advises against using real personal data for development and testing, and recommends fictitious data sets as far as possible, in a computing environment separate from production; when elements come from production, it recommends anonymising the personal data they contain. It allows one framed exception: if tests on fictitious data are not enough, a pre-production environment with real data is possible, secured to the same level as production. These are an authority's recommendations, not an article of a regulation — but they give you the right question to ask in week three.

**Two GDPR articles are decided at the start, not at handover.** Regulation (EU) 2016/679 (official text on eur-lex.europa.eu) requires, in **Article 25**, that the state of the art, the costs and the risks be taken into account *at the time of the determination of the means for processing*, and not only during the processing itself. And **Article 28(3)** requires, when a supplier processes data for you, a written contract setting out the subject matter and duration of the processing, its nature and purpose, the type of data and the categories of data subjects, and providing for the information needed to be made available and for audits to be possible. If after three weeks nobody knows who hosts what, that is not a delay: it is a contractual gap.

## The seven signals, and the question to ask

1. **No clickable demo at the end of week three.** Signal zero. Not a mockup, not a screenshot in a slide deck: something that opens in a browser, however ugly, even with three fields. Question: *"Show me the screen that exists today."* If the answer is "we are finishing the architecture first", note the date and ask again the following week.

2. **Scope grows and nothing ships.** Every meeting adds an idea, and the list of delivered features stays empty. Question: *"What leaves the list so this can come in?"* A healthy project trades; a drifting project accumulates.

3. **Decisions are postponed to the next steering meeting.** Three open subjects, three times "we will come back to it". Question: *"Who decides, and by what date?"* A decision with no name and no date is not postponed, it is abandoned.

4. **The real data has never been looked at.** "We will carry over the spreadsheet" is easy to say before opening it. Question: *"Who opened an anonymised export, and how many rows are unusable?"* Count the dates stored as text, the duplicates, the three spellings of the same supplier. Data migration is the item that overruns most often, and it is measurable before you sign the next stage.

5. **A single contact person on each side.** One person knows everything, at the supplier and at your end. Question: *"Who answers if that person is away for two weeks?"* Having no backup is not a theoretical risk: it is the most ordinary cause of a lost month.

6. **The status reports say "in progress" three times in a row.** "In progress" is not a state of completion, it is the absence of a measure. Question: *"How far along, measured against what?"* Two use cases out of five working end to end: that is a measure. Eighty per cent of the database: that is an opinion.

7. **Nobody knows where it will run in production.** No named hosting, no tested backup, no processing contract. Question: *"On what hosting, with which restore already attempted, and under what contract within the meaning of Article 28?"* This is the costliest signal, because it is rarely repaired at the end of a project.

The rule that holds the grid together: **a signal is handled with a question, not a meeting**. Seven questions, seven written answers, one date per answer.

## What gets in the way in practice

**Nobody wants to be the one who names the signal.** The supplier fears looking late, you fear looking suspicious, and both sides wait for the other to speak. That is why the questions above are phrased as requests for information and not as reproaches. Ask them in writing, all seven, in the same message: they become a routine rather than an accusation.

**Drift is almost never bad faith.** In the vast majority of cases I have seen, the supplier is acting in good faith and so is the internal team. What is missing is not willingness, it is a short feedback loop: something visible every two weeks, and a list of open issues reread at every checkpoint.

**A one-week delay is not drift.** Do not raise the alarm on a single signal. Two signals at once, or the same signal two checkpoints in a row, deserve a conversation; three signals, a revision of the plan. One alone is simply the life of a project.

## Where to start: two weeks

**Week 1.** Write the seven signals into a seven-row table: signal, observed yes/no, question asked, answer received, date. Ask for the clickable demo, however minimal, and set the meeting where it will be shown. Ask for an anonymised export of the data to be migrated, and open it yourself.

**Week 2.** Turn every "we will come back to it" into a decision line with a name and a date. Open a list of issues, separate from the risk register — that is the distinction ISO 21502:2020 makes, and the one most often missing. Check the three production lines: hosting, backup with a restore already attempted, and a written contract with the supplier if it processes personal data for you.

At the end of those two weeks you will not know whether the project will succeed. You will know whether it can be steered, which is far more useful information, and far earlier.

---

*Benjamin de Bruijne is an independent digital and AI consultant in Belgium. He builds websites, business applications and products, and delivers them to production. [Astérisme: design and deploy](https://asterisme.ai/).*
