---
title: "E-invoicing in Belgium: what really changes for an SME"
description: "Belgium's structured e-invoicing obligation: the real scope, the Peppol network, the receiving side, and the questions to ask your software."
date: 2026-10-27
rubrique: automatisation
lang: en
tags: [Automatisation, Facturation, Peppol, PME, Belgique]
points:
  - "Peppol BIS and EN 16931, not a PDF attached to an email"
  - "Receiving is mandatory, even under the VAT exemption"
  - "Four questions for your software before any automation"
---

An accounting firm describes its week to me: three SME clients received a reminder from their software vendor about e-invoicing, and none of the three knew whether they were in scope. Two were, on both sides. The third only invoices private individuals and assumed the whole thing did not concern them: true for sending, false for receiving.

That is the real problem with this obligation. The format is not hard, the network even less so. What costs money is believing you are outside the scope, or preparing only half of the road.

## What is true in 2026

Since **1 January 2026**, Belgian VAT-registered businesses must exchange **structured electronic invoices** with each other. The official portal of the FPS Finance and BOSA, efacture.belgium.be, is explicit: these are invoices that pass directly from one piece of software to another, and sending an invoice as a PDF by email or through a platform is no longer enough.

The default format is **Peppol BIS**, exchanged over the **Peppol network**, compliant with the European standard **EN 16931**. The same portal leaves the door open to another format by mutual agreement between the parties, provided EN 16931 is respected. For an SME with no IT department, it is Peppol, and the question is settled.

Two calendar markers, again from efacture.belgium.be. Towards public authorities — B2G, *business-to-government* — e-invoicing has been mandatory for contracts published after 1 March 2024. And the general tolerance period that covered the first three months of 2026 is over; a targeted tolerance remains until 30 June 2026 inclusive for *self-billing* (an invoice issued by the customer), when the supplier's software is being set up but not yet operational. These dates move as new notices are published: check the state in force on efacture.belgium.be before relying on it.

## Are you in scope? The three-question test

**Are you established in Belgium?** The obligation only targets businesses established in Belgium. A taxable person not established there, with no fixed establishment, is excluded — even with a Belgian VAT number. The portal adds that, given how complex the rule is, it is up to that company to inform its own trading partners.

**Is your turnover small?** It makes no difference. efacture.belgium.be states that taxable persons whose turnover does not exceed 25,000 euros, and who therefore benefit from the VAT exemption scheme, are in principle also subject to the obligation.

**Do you only invoice private individuals?** Your outgoing invoices to private customers are not covered by the structured exchange obligation. But you must still be **able to receive** structured electronic invoices from your Belgian suppliers. That is the most common oversight.

Two targeted exclusions remain, described by the same portal: where an operation is exempt under Article 44 of the VAT Code, neither sending nor receiving is required; and taxable persons under the flat-rate scheme of Article 56 benefit from an exception to the obligation to issue, which will end no later than 1 January 2028. Bankrupt taxable persons are also outside the obligation to issue. If your situation hinges on one of those articles, have your accountant confirm it: it is a point of interpretation, not a checkbox.

## What the Peppol network does, and what it does not

OpenPeppol describes a four-corner model: you hand the sending over to an **access point**, which delivers to your customer's access point, which hands the invoice to their software. To find the recipient, the sending access point first queries a central directory, the **SML**, operated by the European Commission, then the receiving provider's registry, the **SMP**, to learn which documents that recipient actually accepts. It is the provider that registers its customers in that SMP, listing the specifications they accept.

The consequence: you connect once, and you reach everyone. The step-by-step guide on efacture.belgium.be adds that the software you choose generally handles your Peppol registration — your job is to check that everything is correct. And that registration counts as agreement to receive structured invoices.

What the network does not do: check that the amount is right, that the purchase order exists, or that the invoice lands in the correct accounting category. The network transports and validates a format. The rest is your process.

## The four questions to ask your software

Before buying anything, put these four questions to your vendor or your access point. The answers decide everything else.

1. **Do you issue in Peppol BIS compliant with EN 16931, and through which access point?** A generic "XML" export is not an answer.
2. **Do you also receive, and where do incoming invoices land?** In the software, in a mailbox, at the accountant's? An invoice received that nobody looks at is a lost invoice.
3. **Under which identifier am I published on the network, and since when?** You must be able to verify it, not assume it.
4. **Does the extra cost linked to e-invoicing appear separately on your invoice?** That question has a direct tax consequence, described below.

On that last point, efacture.belgium.be describes incentives: for tax years 2024 to 2027, SMEs and self-employed workers using a subscription may apply a 120% increase on invoicing and advisory costs linked to the new obligations, with the extra cost of an existing subscription falling within the scheme provided it appears separately on the invoice. The portal specifies that the increase only covers direct preparation costs, never depreciation, and that the deduction for digital investment has been raised to 20% since 1 January 2025. The detail of the calculation is a subject for your accountant, not for a blog post.

## What blocks in practice

**Reading the fallback measure as an exemption.** efacture.belgium.be provides that if the recipient cannot, for technical reasons, receive electronic invoices, the supplier is not required to issue one and may produce a paper invoice or a PDF. The same text adds that this does not release the recipient from the obligation to be able to receive, and that they must take the necessary steps without delay. It is not an exit door, it is a reprieve.

**Believing the public directory tells the whole truth.** OpenPeppol lets you search for a participant by name, identifier or country in the Peppol Directory, and efacture.belgium.be points to that directory to see which customers are ready. But OpenPeppol specifies that its content depends on SMP operators and is not mandatory today: not every registered recipient appears there. Absent from the directory therefore does not mean unreachable. When in doubt, the question goes to your access point.

**Letting the PDF keep circulating alongside.** During the transition, many send the structured invoice *and* a PDF "so the customer has a copy". Three months later, nobody knows which of the two was paid. One invoice, one channel, one source of truth.

## Where to start, in two weeks

**Week 1.** List your three flows: outgoing invoices to Belgian businesses, outgoing invoices to private individuals or abroad, incoming invoices. Ask the four questions above. Then ask a supplier who is already equipped to send you a real invoice, and watch where it lands.

**Week 2.** Check your publication on the network and the identifier used. Send a real invoice to a reachable customer. Decide who opens incoming invoices and how often, and write it down somewhere.

After that, and only after that, we can talk about automating the rest: payment reconciliation, reminders, reporting. Automating a flow whose format is not yet stable is building on sand.

---

*Benjamin de Bruijne is an independent digital and AI consultant in Belgium. He automates repetitive work for SMEs and puts AI where it removes a specific chore. [Automate: AI, data, CRM](/en/services/automate/).*
