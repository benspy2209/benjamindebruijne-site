---
title: "Quote, invoice, reminder: automate without changing software"
description: "The three flows to automate around a Belgian invoicing tool, what must stay manual, and how to ship the first flow in two weeks."
date: 2026-10-20
rubrique: automatisation
lang: en
tags: [Automatisation, Facturation, Peppol, PME, Belgique]
points:
  - "The accounting tool stays: you automate around it"
  - "Three flows only: quote, tracking, reminder"
  - "Discounts, disputes and tone stay human"
---

A freelancer walks me through his Thursday evening: retyping an accepted quote into his invoicing tool, checking a bank statement to see who has paid, then writing four reminder emails while wondering each time whether he is pushing too hard. Three hours, every week, on work that brings his clients nothing.

The first reaction is almost always the same: "I need to change software." That is rarely true. The invoicing tool does its job — numbering, VAT calculations, producing the ledger for the accountant. What is missing is what happens **before** and **after** it. You automate around it; you do not replace it.

## What is true in 2026

Before wiring anything up, you need to know where the Belgian obligation stands, because it decides the output format of your invoicing.

Since **1 January 2026**, Belgian VAT-registered businesses must exchange **structured electronic invoices** between them: invoices that move directly from one piece of software to another, not a PDF attached to an email. The official portal run by the FPS Finance and BOSA, efacture.belgium.be, describes these invoices as having to comply with the European standards **EN 16931-1** (semantics) and **CEN/TS 16931-2** (syntax), and in practice to travel over the **Peppol** network, in Peppol BIS format.

The same portal lists excluded situations: businesses not established in Belgium and without a fixed establishment, taxpayers under the flat-rate scheme of article 56 of the VAT Code, and transactions exempt under article 44. Invoices to private individuals (B2C) are not covered by the structured-exchange obligation — but a business must still be able to **receive** structured invoices from its own suppliers.

One point on the calendar. efacture.belgium.be published a news item titled "End of the tolerance period for e-invoicing": the general tolerance that covered the first three months of 2026 is over. A targeted exception remains for *self-billing* (invoices issued by the customer): no fine until 30 June 2026 inclusive where the supplier's software is not yet ready, and exceptional technical problems may be reviewed case by case. The dates displayed on that portal were not all consistent when I consulted it: check the exact status on efacture.belgium.be before relying on it.

On the network side, OpenPeppol describes a four-corner model: the seller (C1) appoints an access point to send (C2), which delivers to the recipient's access point (C3), which hands the invoice to the buyer (C4). The sending access point validates the outgoing message against the Peppol BIS specifications before sending it, and finds the recipient through a central registry, the SML, operated by the European Commission. The promise fits in three words: *connect once, reach all*. You connect once, you reach everyone.

The practical consequence: your invoicing tool has to issue in that format and be connected to the network. That is **its** responsibility, not your automation's. The three flows below plug in around it.

## The three flows, in order

1. **Quote accepted → invoice.** The quote already exists somewhere: a document, a form, a spreadsheet row. The automation picks up that row the moment the status turns to "accepted" and creates the draft invoice in the invoicing tool, with the client, the lines, the quantities and the VAT rate. It does not approve, it does not number, it does not send. It removes the retyping, which is the only painful part of the flow.
2. **Invoice issued → tracking.** As soon as an invoice is issued, its number, amount, date and due date land in a single tracking list. A reconciliation against incoming payments marks the paid lines. This flow produces no email at all: it produces an answer to the question "who owes what, today".
3. **Due date passed → reminder.** At D+7 and then D+30 after the due date, a **draft** reminder is prepared for each still-open invoice, with the number, the amount, the due date and the payment link. You read it, you send it. That is thirty seconds instead of ten minutes, and you keep control of the tone.

Automate these three flows and nothing else, and you have recovered most of the three hours.

## Reminders have a legal frame, and it is not the same for everyone

This is the point reminder automations miss most often: a D+7 / D+30 cadence suits a business customer, not a private individual.

Between businesses, the FPS Economy points to the **Act of 2 August 2002** on combating late payment in commercial transactions: late-payment interest may not exceed the policy rate increased by eight percentage points. The FPS Economy also states that there is no legal minimum period for paying an unpaid invoice: if your terms and conditions set none, the amount is in principle immediately due. Hence the value of a due date written into your terms and conditions — that is the date your automation will read.

Facing a consumer, the rules are tighter. For contracts concluded from 1 September 2023, the FPS Economy sets out that the **first reminder is free**, that the consumer then has at least **14 calendar days** to pay, and that no fee or interest may be charged during that period. For regular deliveries of goods or services, the free reminder is limited to three unpaid instalments per year; from the fourth, a maximum of 7.50 euros plus postage may be charged. Recovery charges are themselves capped according to the amount due.

Translated into automation: one switch in your tracking list, "business customer" or "consumer", and two separate cadences. For questions of interpretation — what you may charge, and from when — confirm with your accountant or your legal adviser.

## What gets in the way in practice

**Reference data is everywhere and nowhere.** The client name exists in three spellings, the address in two versions. Decide which tool holds the truth (usually the invoicing tool) and have the others write **towards** it, never the other way round.

**People automate the sending instead of the preparation.** A reminder that goes out on its own for an invoice already paid by a transfer not yet reconciled costs you an irritated client for two minutes saved. Keep sending manual on flow 3, for the first two months at least.

**Records get forgotten.** Invoicing remains a sanctioned area: the FPS Finance penalises missing or inaccurate mandatory details on invoices, and its VAT penalty policy instruction of 20 February 2025 also cites article 60, failure to keep books and documents. An automation that creates drafts inside your invoicing tool stays within the frame; one that generates invoices outside it takes you out. For the exact retention periods, check finances.belgium.be.

## Where to start: two weeks, one flow

Week 1: write the three flows out by hand on a sheet of paper, each with its trigger, its data source and its expected result. Pick **one** — flow 2, the tracking, is the best first choice: it touches nothing, it cannot send anything foolish, and it makes visible what you cannot see today.

Week 2: run it on the real data of the current month, compare its output to your bank statement, fix the gaps. Once the tracking list is right three weeks in a row, move to flow 1, then flow 3.

Finally, what does not get automated: granting a discount, handling a dispute, deciding to write an amount off, and choosing the words of a reminder to a client you want to keep. Those are decisions, not tasks.

---

*Benjamin de Bruijne is an independent digital and AI consultant in Belgium. He automates repetitive work for SMEs and puts AI where it removes a specific chore. [Astérisme: AI inside your processes](https://asterisme.ai/).*
