---
title: "A two-page spec for an internal tool"
description: "The two-page template I ask for before pricing an internal tool: problem, uses, data, out of scope, and what success will look like."
date: 2026-11-05
rubrique: construire
lang: en
tags: [Construire, Cahier des charges, Outil interne, PME, RGPD]
points:
  - "Two pages are enough if every line is verifiable"
  - "Out of scope matters as much as scope"
  - "Data is decided before the quote, not at handover"
---

A company director sends me twenty-two pages so I can price a job-tracking tool. I read them twice and I still do not know who will open the tool on Monday morning, or what happens when a job is cancelled the day before.

The opposite happens too, and more often: three lines in an email, "a small tool to track our jobs, like a spreadsheet but better". In both cases the quote that comes back means nothing. What a supplier needs to read fits on two pages, and those two pages are yours to write.

## What is true in 2026

Writing a request is not a free art: there is a standard, and there are obligations that get decided at this moment.

**The standard.** Requirements engineering is standardised: **ISO/IEC/IEEE 29148:2018**, *Systems and software engineering — Life cycle processes — Requirements engineering*, is the edition published in the ISO catalogue (iso.org), the first 2011 edition having been withdrawn. It defines what makes a well-formed requirement and describes requirements engineering as a function that bridges the domain of the acquirer and that of the supplier. One nuance, written as it stands: a third edition is under way, at Draft International Standard (DIS) stage and out for ballot among ISO members since September 2026; the 2018 edition remains the one to cite, so check the status on iso.org. You do not need to buy the standard for an internal tool, only its central idea: a requirement you cannot verify is not a requirement.

**Personal data.** If the tool handles data about employees, customers or patients, three GDPR articles (Regulation (EU) 2016/679, official text on eur-lex.europa.eu) apply from the design stage. **Article 25** calls for appropriate technical and organisational measures *at the time of the determination of the means for processing*, not only during operation; its "by default" limb aims at processing only the data necessary for each purpose, which explicitly covers the amount of data collected, the extent of the processing, the storage period and accessibility. **Article 32** requires a level of security appropriate to the risk, cites pseudonymisation and encryption, and demands the ability to restore access to data after an incident along with a process for regularly testing the effectiveness of the measures. **Article 30** expects the record of processing activities to list the categories of recipients and, where possible, the erasure deadlines for each category of data.

Those three articles are almost entirely filled in by the "data" block of your spec. If that block is empty, someone will guess in your place, later.

**The supplier becomes a processor.** If it operates or hosts the tool for you, GDPR **article 28** requires a written contract setting out the subject matter and duration of the processing, its nature and purpose, the type of personal data and the categories of data subjects, as well as the obligations and rights of the controller. Put differently: the first four lines of that contract are already on your page 1, or they do not exist.

**When an impact assessment comes first.** GDPR **article 35** requires a data protection impact assessment (DPIA) prior to the processing where it is likely to result in a high risk. The Belgian data protection authority (APD) lists three cases covered by article 35(3): a systematic evaluation of personal aspects based on automated processing followed by a decision concerning the person, large-scale processing of sensitive or criminal-offence data, and systematic large-scale monitoring of a publicly accessible area. The APD has also set a Belgian list of processing operations subject to a DPIA (Secretary General decision no. 01/2019 of 16 January 2019), which it presents as non-exhaustive. Check on autoriteprotectiondonnees.be whether that list has been updated, and raise it with your own counsel: this is a point of interpretation, not a box to tick.

**If the tool touches invoicing.** Since **1 January 2026**, according to efacture.belgium.be, Belgian VAT-registered businesses exchange structured electronic invoices with each other, in the **Peppol-BIS** format compliant with the European standard EN 16931, software to software rather than as a PDF by email. The same portal states that the general tolerance period covering the first three months of 2026 has now ended. Exclusions exist: invoices to private individuals, transactions exempt under article 44 of the VAT Code, and foreign taxable persons without a stable establishment in Belgium. The consequence for your document: if the tool issues an invoice, this is not a preference, it is a constraint, and it belongs in block 6.

## The template: seven blocks, two pages

**Page 1 — the problem and the use.**

1. **The problem in three sentences.** How it works today, what it costs in time per week, what breaks when it fails. No solution in this block. "Jobs are written in a notebook, then copied on Friday into a shared spreadsheet; about three hours a week; two invoices forgotten last month."
2. **Who uses it.** Three roles at most, with the number of people, how often they use it and the physical context: at a desk, standing in a workshop, in a van with weak coverage. That last detail changes the architecture more than any feature does.
3. **The five use cases, as action sentences.** A subject, a verb, an observable result. "A technician closes a job from their phone and attaches two photos." "On Monday, the operations manager sees last week's unbilled jobs." Five, not fifteen.
4. **Data in and data out.** Where it comes from, where it goes, which items are personal, who has access, how long you keep it. One line per data set. This is the block nobody writes, and the one that determines the contract, the security and the cost.

**Page 2 — the limits and success.**

5. **What is out of scope.** Explicitly. "No stock management. No payroll. No customer portal. No installable mobile app in version 1: the phone browser is enough." Without this block, everything is implicitly in, and every meeting adds more.
6. **The non-negotiable constraints.** Hosting inside the European Union or not, mandatory integrations and in which direction, authentication method, Peppol if the tool invoices, backups with a tested restore, retention periods. Five to eight lines. Separate a constraint from a preference: a constraint justifies extra cost, a preference does not.
7. **How we will know it worked.** Two or three observable measures, with a date. "By 31 March, no job is copied by hand any more." "Closing a job takes under sixty seconds, measured over ten attempts."

The rule that holds the document together: **every line must be verifiable**. "The tool must be intuitive" is not a requirement, it is a wish. "A new technician closes their first job with no training, in under two minutes" is one.

## What gets in the way

**The document written by one person.** Nine times out of ten, the author is not the person who will use the tool. Have the five use cases read by the person who does the work, and write down their objections as they are, without smoothing them. The use case they add unprompted is often the real heart of the need.

**The out-of-scope block left empty.** It is the block people skip because it feels negative. It is the only one that protects the budget. A serious supplier prices what is written; with no written limit, it prices high or it prices wrong, and either way you pay.

**The real data never looked at.** "We will migrate the spreadsheet" is easy to say before opening it. Pull an anonymised export in the first week and count the empty rows, the duplicates, the dates stored as text, the three spellings of the same supplier. Data migration is the item that overruns most often, and it can be measured before you sign.

## Where to start: two weeks

**Week 1.** One ninety-minute session for blocks 1 to 4, with the person who does the work in the room. In parallel, ask for the export of the existing data and open it.

**Week 2.** Blocks 5 to 7, then a review by the end user and by whoever pays. If the document runs past two pages, the scope is too wide: cut the scope, not the document.

Then send it. A supplier who answers these two pages with precise questions about block 4 has understood the project. One who answers with a price and a deadline without a single question about the data has not read it.

---

*Benjamin de Bruijne is an independent digital and AI consultant in Belgium. He builds websites, business applications and products, and delivers them to production. [Astérisme: design and deploy](https://asterisme.ai/).*
