---
title: "ALCOA+ beyond the slogan: the nine letters on a real system"
description: "Applying ALCOA+ letter by letter to a real system: what MHRA, PIC/S, WHO and Annex 11 say, three pitfalls, and a six-week plan."
date: 2026-11-16
rubrique: gxp
lang: en
tags: [GxP, CSV, Intégrité des données, ALCOA+, Annexe 11]
points:
  - "ALCOA comes from guidance, not from regulatory texts"
  - "The four letters of the \"+\" decay after go-live"
  - "The draft revision says ALCOA++: traceable is added"
---

"We're ALCOA+." The phrase comes up at every project review, and almost nobody can demonstrate it on a specific system. Take a single piece of software and ask the question letter by letter: the slogan breaks down into nine concrete questions, four of which most validation files never address.

I run this exercise on systems already in service: half a day, no tooling. Here is how I do it.

## The framework already exists, but not where people think

First thing, and it changes how you talk in meetings: **ALCOA is not a regulatory requirement**. The acronym comes from guidance, not from the texts.

The UK **MHRA** gives the reference version in its *'GXP' Data Integrity Guidance and Definitions*, revision 1 of March 2018: **A**ttributable, **L**egible, **C**ontemporaneous, **O**riginal, **A**ccurate. The same document defines data integrity as the degree to which data are complete, consistent, accurate, trustworthy and reliable, and to which those characteristics are maintained **throughout the data life cycle**. It also states that, in all its definitions, "data" includes raw data. It is a guide: it recommends. The 2015 GMP version has been withdrawn.

**PIC/S** published PI 041-1, *Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments*, adopted on 1 June 2021 and in force since 1 July 2021. Its stated purpose is to describe the inspector's position and to harmonise inspection and reporting on data management and integrity; PIC/S classifies it among the documents intended for inspectors. It takes up ALCOA and explains the "+" as additional emphasis on four attributes — complete, consistent, enduring, available — regarded as already implicit in ALCOA.

The **WHO** adopted in 2021 a *Guideline on data integrity* (Technical Report Series No. 1033, Annex 4), which organises data governance around ALCOA+ and introduces the **DIRA** (data integrity risk assessment).

The **FDA**, in *Data Integrity and Compliance With Drug CGMP: Questions and Answers* (December 2018, explicitly non-binding), defines data integrity as completeness, consistency and accuracy, describes the ALCOA principles, and recommends restricting by technical means the ability to alter specifications, process parameters and data.

What actually **requires**, by contrast, sits elsewhere. **21 CFR Part 11** is a regulation: §11.10(e) mandates secure, computer-generated, time-stamped audit trails that independently record the date and time of operator entries and actions that create, modify or delete an electronic record; record changes **shall not obscure previously recorded information**; the trail is retained at least as long as the records concerned and remains available for agency review and copying. On the European side, **Annex 11** of EudraLex volume 4 (*Computerised Systems*, revision 1 of 2011, text in force) requires in its section 9 a record of all GMP-relevant changes and deletions, documentation of the reason for change or deletion of GxP data, and review of those audit trails.

Neither Annex 11 nor Part 11 contains the word ALCOA. The acronym is a memory aid covering obligations written elsewhere. Saying "we're ALCOA+" therefore answers no requirement; answering letter by letter does.

## A vocabulary detail that is about to move

The European Commission ran a public consultation, from 7 July 2025 to 7 October 2025, on a revision of Chapter 4 (Documentation) and of Annex 11, plus a new Annex 22 on artificial intelligence. In the draft Chapter 4, the acronym is no longer ALCOA+ but **ALCOA++**, the extra letter standing for **traceable**.

A draft whose consultation has closed, not an adopted text: I build nothing on it. But the signal is clear, and adding a "traceable" line to your grid now costs nothing. The status in force is checked on the Commission's EudraLex pages.

## The five base letters, on a real system

Pick a system: a **LIMS** (laboratory information management), a connected balance, an **MES** (manufacturing execution). For each letter, one question and one expected piece of evidence.

1. **Attributable.** Who produced this data, and how do we know? Evidence: named accounts, no shared "LAB1" account, list of active accounts reconciled with the training record. A generic account breaks the letter A on its own.
2. **Legible.** Is the data legible, and will it stay legible? Evidence: a documented export format, and an export actually read by someone. A file you can only open with the 2014 version of software no longer in the estate is no longer legible.
3. **Contemporaneous.** Is the data recorded at the time of the action? Evidence: a clock synchronised to a controlled time source, documented time zone, measured gap between the time of the operation and the time of recording. This is the test nobody runs and that fails in inspection.
4. **Original.** Where is the raw data, and what is a copy of it? Evidence: one written sentence designating the original record for this system — database, instrument file, printout — and, if it is a certified true copy, the procedure that produced it.
5. **Accurate.** What guarantees accuracy? Evidence: input controls, verification of transfers between systems, instrument calibration, audit trail reviewed. This is where §11.10(e) and section 9 of Annex 11 meet.

## The "+": the four letters that decay after go-live

The first five are handled during the project. The next four degrade afterwards, silently, for lack of a named owner.

6. **Complete.** Are all the runs there, including the ones nobody likes? Evidence: technical impossibility of deleting without a trace, review of deletions and re-injections. A system that erases a result without a documented reason does not hold up against section 9 of Annex 11.
7. **Consistent.** Does the same data say the same thing everywhere? Evidence: a reconciliation between the source system, the data warehouse and the final report, on a randomly picked batch. Discrepancies almost always come from a poorly scoped interface.
8. **Enduring.** Will the data survive its retention period? Evidence: a restore actually tested, not a backup actually scheduled. Only the first is evidence.
9. **Available.** Can it be produced on request, throughout retention? Evidence: a measured delay to pull up data from the previous year. Part 11 speaks of availability for agency review and copying: if the answer is "we have to call the vendor back", it is not available.

## What blocks in practice

**Nobody owns the last four letters.** The project ends, the team disperses, and complete-consistent-enduring-available belong to no one. Name a data owner per system, in the procedure.

**Audit trail review is theoretical.** Written in the procedure, not done — or done on everything, therefore on nothing. Make it proportionate: what you are looking for is deletions, changes to results, system clock changes and logins with generic accounts.

**The supplier becomes the blind spot.** In SaaS, letters 8 and 9 depend on a third party and its release calendar. That is assessed at supplier qualification and written into the quality agreement — not discovered, after a restore, that contractual retention was 90 days.

## Where to start: six weeks

**Weeks 1-2.** A single system, already in service. The nine letters in nine lines, and for each one: the existing evidence, or "nothing". Improve nothing, just observe.

**Weeks 3-4.** Deal first with the letters that have no evidence, on data with high GxP impact. A documented and assessed gap beats a ticked box.

**Week 5.** Test two things for real: a restore, and a delay to produce old data. Those are the two that change an opinion.

**Week 6.** Add the grid to the periodic review and name the data owner. Then run the exercise on a second system: the second time takes two hours.

---

*Benjamin de Bruijne is Digital Technology SME at a Belgian biopharmaceutical group. He helps Labs, Manufacturing and Quality teams frame and validate their digital projects in GxP environments. [Profile and availability](/en/biopharma/).*
