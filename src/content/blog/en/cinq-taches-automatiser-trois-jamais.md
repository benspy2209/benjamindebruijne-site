---
title: "Five tasks to automate first, three never to automate"
description: "A three-question sorting grid, five chores that pay off in the first month, and three decisions an SME never hands over to a machine."
date: 2026-11-17
rubrique: automatisation
lang: en
tags: [Automatisation, PME, Belgique, RGPD, Peppol]
points:
  - "Repetitive, clear rules, no judgement: the 3 filters"
  - "Invoice, chase, re-type, capture, report: the five"
  - "Never: a dispute, a decision about a person, a price"
---

An installer described his week to me: three hours on Saturday morning to get his invoices out, an hour on Tuesday to work out who had not paid, and minutes scattered everywhere re-typing the same address from a quote onto an order form. He wanted to "put AI" everywhere.

We started from the other end: not from the tool, from the list. What does not deserve a minute of human brain, and what always deserves one, whatever the technical progress? Both lists are short, and they barely change from one SME to the next.

## What is true in 2026

**Electronic invoicing is no longer a project, it is an obligation.** The FPS BOSA e-invoicing portal states it: since 1 January 2026, Belgian VAT-registered businesses must exchange structured electronic invoices between themselves, over the Peppol network and in the Peppol BIS format, compliant with the European standard EN 16931. The same portal adds that outgoing invoices to private individuals are out of scope, but that you must be able to receive structured invoices from your suppliers, and that the general tolerance period covering the first three months of 2026 has ended — a targeted tolerance remaining in force for self-billing until 30 June 2026 included. Special regimes exist, including transactions exempt under article 44 of the VAT Code: check your own case on efacture.belgium.be.

**The network these invoices travel over works simply.** OpenPeppol describes a four-corner model: your certified access provider talks to your customer's, addressing goes through a service directory (SMP and SML), transport through the AS4 protocol. The consequence is the one that matters: a single provider is enough to reach the whole network, you do not connect to each customer.

**And there is a line automation does not cross.** Article 22 of Regulation (EU) 2016/679 (GDPR) gives a person the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning them or significantly affects them. The regulation provides for derogations — explicit consent, contractual necessity, legal authorisation — and then requires at a minimum the right to obtain human intervention, to express one's point of view and to contest the decision.

## The sorting grid: three questions, one page

**Is it repetitive?** At least once a week, in the same shape. A monthly ten-minute task is not an automation project, it is a line in your calendar.

**Do the rules fit on one page?** Write them by hand, in "if… then…" sentences. If "it depends" shows up three times, the task is not ready: the work right now is to decide what it depends on.

**What does a mistake cost?** Reversible and invisible to the customer — a badly sorted report, a clumsy label: automate end to end. Visible to the customer or expensive to fix: automate the preparation, let the person approve with one click. The real question is not "does the machine make mistakes", but "who sees it, and when".

## The first five

1. **Sending and receiving invoices.** The default starting point in 2026, since it has become mandatory. Your invoicing software or your accountant goes through a Peppol access provider; one decision is left to you, the single place where your customer data lives.

2. **Payment reminders.** A missed due date triggers a message, three days later a firmer reminder, at fifteen days a call on someone's list. The texts are written once. The rule that saves this automation: a payment, an instalment plan or an open complaint stops the sequence.

3. **Re-typing between quote, order and invoice.** The quietest chore, and the most profitable one to remove. Data entered once, then travelling onwards: customer, address, lines, quantities, VAT. You do not only save minutes, you remove a family of errors — the ones you discover at reminder time.

4. **Capturing incoming documents.** Supplier invoices, delivery notes, expense claims: extracting fields (supplier, date, number, amounts, VAT) works well on stable documents. Two guardrails: a confidence threshold below which the document goes to a human, and a sample checked every week to measure the real error rate.

5. **Recurring reporting.** The figures you go and fetch by hand on Monday — outstanding amounts, pending quotes, unbilled hours — arrive by email, at a fixed time, with their trend. One absolute constraint: if the data is wrong, automation spreads the error faster.

## The three never to automate

**A dispute or a complaint.** An unhappy customer is not waiting for a fast answer, they are waiting for an accountable one. A tool can prepare the file — history, invoices, exchanges — but the answer comes from a person who has read it. The day a reminder sequence keeps running during a complaint, you lose the customer and the invoice.

**A decision about a person.** Hiring, promoting, disciplining, dismissing. Beyond article 22 of the GDPR, Regulation (EU) 2024/1689 (the AI Act) classifies as high-risk, in its Annex III, AI systems intended for recruitment or candidate selection, and those influencing working conditions, promotions, dismissals or performance monitoring; its recital 57 grounds that classification in the effect on career prospects and the risk of perpetuating discrimination. The regulation also provides that, before putting such a system into service at work, workers' representatives and the affected workers are informed. And its article 5 prohibits AI systems meant to infer a person's emotions in the workplace, except for medical or safety reasons. For an SME the reading is short: screening applications with a machine is regulated ground, not a time saving.

**A bespoke price.** A rate card can be automated; an exceptional discount, an unusual job, a margin you accept to cut to get a foot in the door, no. Those decisions are made with context the system does not have.

## What gets in the way in practice

**Two customer lists.** The master data is the real subject. As long as addresses live in the invoicing software *and* in a spreadsheet, every automation inherits the inconsistency and spreads it. Pick the source of truth first.

**Automating a process that does not exist.** If three people do the same task in three ways, the tool does not settle it: it freezes the version of whoever speaks loudest. Write the rule first, even imperfectly.

**Nobody looks at the errors.** An automation without a counter becomes invisible, then wrong. You need a place where failures are visible, and someone who looks at it on Monday. If AI enters the chain, article 4 of the AI Act asks providers and deployers for AI literacy measures for their staff — an obligation rewritten by Regulation (EU) 2026/1744 of 8 July 2026 into measures fostering the development of that literacy, with no level guaranteed individual by individual. Check the applicable version on eur-lex.europa.eu.

## Where to start: two weeks

**Week 1 — measure and choose.** For five days, note the repetitive tasks and the minutes they take. Keep a single one: most minutes, clearest rule. Write that rule on one page, with the stopping cases. And ask your accountant or your invoicing software vendor which access provider your Peppol invoices go through.

**Week 2 — run it in parallel.** The automation runs, and the person keeps doing the task as before. You compare, count the gaps, correct the rules. Five days without a gap, you stop the manual version. And you keep a switch: an automation you cannot turn off in thirty seconds is not ready.

Two weeks, one task, one counter. Less appealing than a big project, and it is the only approach I have seen last more than three months.

---

*Benjamin de Bruijne is an independent digital and AI consultant in Belgium. He automates repetitive work for SMEs and puts AI where it removes a specific chore. [Astérisme: AI inside your processes](https://asterisme.ai/).*
