---
title: "SaaS or custom-built: the decision grid"
description: "Six criteria to choose between off-the-shelf software and a custom tool, what the Data Act changed in 2025, and three typical cases."
date: 2026-10-22
rubrique: construire
lang: en
tags: [Construire, SaaS, Sur-mesure, PME, DataAct]
points:
  - "Price is not the criterion, your process is"
  - "The Data Act frames the exit from SaaS, not from custom"
  - "The mix often wins: a SaaS plus a small custom piece"
---

An operations manager sums up his problem in one sentence: "we track our field jobs in a shared spreadsheet and it no longer holds." Then comes the real question, always framed as a binary choice: off-the-shelf software, or do we have our own built?

Put that way, it has no answer. It is almost always settled on the sticker price, which is the worst criterion available. The right criterion is the process: does what you do look like what everyone else in your trade does, or not?

## What is true in 2026

Three framework elements weigh on this choice, and none of them appears on a pricing page.

**The European data regulation** — Regulation (EU) 2023/2854, the *Data Act* — entered into force on 11 January 2024 and has applied since **12 September 2025**, according to the European Commission's official page on digital-strategy.ec.europa.eu. Its Chapter VI covers switching providers of data processing services, cloud and SaaS included. Article 23 requires the source provider to remove the obstacles that stop a customer from moving to a same-type service at another provider, or from moving back to infrastructure it operates itself. Article 25 requires those rights to be set out in a **written contract, made available before signature**: a switching clause with a transition period of **no more than 30 calendar days**, a clause on full erasure of the data after retrieval, and the charges allowed under Article 29. That article organises a phase-out: reduced charges are allowed until 12 January 2027, then **no switching charges at all**, data egress charges included.

One nuance, written as it stands: Article 29 excludes custom-built services, and in late 2025 the Commission tabled a proposal known as the *Digital Omnibus* that would lighten Chapter VI for services adapted to a customer's needs under contracts concluded on or before 12 September 2025. That is a **proposal**, not an adopted text: check its status on eur-lex.europa.eu.

What it means in practice: the Data Act gives you an exit lane out of a standard SaaS, not out of a custom build. There, your exit is worth exactly what your contract is worth.

**Personal data creates the same obligation on both sides.** If a provider operates the tool for you, it is a processor under the GDPR. Article 28 requires a written contract, including in electronic form, setting out the subject matter, duration, nature and purpose of the processing, the types of data and the categories of data subjects. The CNIL and the Belgian Data Protection Authority point out that the processor acts only on documented instructions, must delete or return the data at the end of the service, and cannot engage another processor without prior written authorisation. That holds for a SaaS vendor exactly as it holds for whoever hosts your in-house application.

**Obligations move, and someone has to pay for catching up.** Since **1 January 2026**, according to efacture.belgium.be, Belgian VAT-liable businesses must exchange structured electronic invoices between themselves in the **Peppol-BIS** format, which also complies with the European standard EN 16931, over the Peppol network unless both parties agree otherwise. An off-the-shelf vendor absorbs that change once, for all its customers. In a custom tool, it becomes your project, your budget and your deadline. That is where the real cost gap sits, not in the licence.

## The six criteria, in order

1. **Standard or specific process?** Invoicing, running payroll, keeping the books: standard, regulated, identical for everyone. The way you assign a field job based on the technician's certification, the zone and the available equipment: specific. The test: if you describe your process to three peers in your trade, do they recognise their own?
2. **The data: nature, hosting, exit.** Is there personal data, and therefore an Article 28 contract either way? Can you get it back out? For personal data, the GDPR provides a right to portability in a structured, commonly used, machine-readable format (Article 20). For everything else, it is the contract, or the Data Act if it is a SaaS.
3. **Integrations, counted before deciding.** How many other tools have to talk to it, and in which direction? Off-the-shelf software with a documented API beats a custom tool without one. Make the list: accounting, bank, website, mailbox.
4. **Dependency at three years.** Who can modify the tool in 2029? With SaaS, the roadmap is the vendor's and versions are imposed, but the exit is framed. With a custom build, you own the tool, and therefore its maintenance and the person who knows the code.
5. **Cost over five years, not at signature.** Four lines to fill in yourself: subscription or hosting, setup and data migration, regulatory and technical changes, exit. The third line is the one nobody budgets, and often the one that decides.
6. **The exit, written before the entry.** For a SaaS, Article 25 requires the provider to hand you the switching clause before signature: read it. For a custom build: ownership of the code, access to the repository, secrets and keys, restorable backups, documentation, and the right to have someone else take over.

## Three typical cases

**Invoicing, payroll, accounting.** Off-the-shelf, no debate. Building that custom means paying twice: once to write it, then every time the rule changes.

**A trade with rules of its own.** Field-job assignment, pricing with many variables, in-house quality control. Two honest options: a custom build, or an off-the-shelf tool you accept you will bend — and bending it often costs more, because you redo the work at every imposed update.

**Public data nobody exploits.** Service-Volée, which I develop, falls into this case: public data from the Belgian tennis federation, more than 76,000 indexed player records and more than 300,000 matches, a crawler scheduled every ten minutes, in production since September 2026. No vendor offered that. The flip side: the maintenance is mine.

## The mix, which wins more often than people think

The most frequent answer is neither one nor the other. Off-the-shelf software for the standard part, a small custom tool around it for the 10% that is yours alone: the invoicing tool keeps responsibility for the legal format, a small internal application builds the quote with your trade rules and pushes the result into it.

One condition only: the off-the-shelf software must have a documented API. Back to criterion 3, the most decisive of the six and the least examined.

## What gets in the way in practice

**People choose on the demo, not on their own data.** A demonstration is designed to go well. Ask for a trial with twenty of your real records, the ugliest ones, with empty fields: those are the ones that show whether the process fits.

**"Custom is more flexible," with nobody to maintain it.** An in-house tool with no named maintainer, no documentation and no restorable backup becomes a hostage within eighteen months. If you cannot write down the name of the person who will take it over, it is not an option.

**The exit clause signed without being read.** The Data Act requires the provider to hand it to you before signature. Reading it is still your job: transition period, export format, erasure.

## Where to start: two weeks

Week 1: write the process on one page, with its steps, the people who touch it and the edge cases. List the integrations, name the owner of each data set, then score the six criteria, one line each.

Week 2: if off-the-shelf wins, run a trial on your real data and read the switching clause. If specific wins on criteria 1 and 3, write the exit clause for the custom build before the first line of code.

The rule I apply: four criteria out of six pointing to standard, and we stop looking. A custom build is justified when the process is your advantage, not when it is merely your habit.

---

*Benjamin de Bruijne is an independent digital and AI consultant in Belgium. He builds websites, business applications and products, and delivers them to production. [Astérisme: design and deploy](https://asterisme.ai/).*
