---
title: "IT/OT: five questions Quality should ask IT"
description: "IT/OT convergence in pharma: inventory, segmentation, privileged access, PLC data, continuity. Five questions and the sources behind them."
date: 2026-11-02
rubrique: gxp
lang: en
tags: [GxP, CSV, IT/OT, cybersécurité, annexe 11]
points:
  - "PLCs are often missing from the GMP system inventory"
  - "Annex 11 scales controls to system criticality"
  - "A continuity plan never tested is not a plan"
---

A production PLC goes down on a Saturday morning. The IT on-call engineer restarts it, restores yesterday's configuration, and Quality will not hear about it until the periodic review, six months later.

Nothing malicious here: just a poorly held border between **IT** (servers, workstations, applications) and **OT** (*Operational Technology*: programmable logic controllers, supervision, process control). These two worlds now plug into each other — an MES reading the PLCs, a data historian on the office network, remote maintenance — and Quality ends up accountable for data it can no longer locate.

## The framework already exists, and it is shorter than you think

Annex 11 of EudraLex Volume 4, *Computerised Systems* (European Commission, version in force since 2011), applies to **all forms of computerised systems** used as part of a GMP-regulated activity. A PLC driving a process step is one of them. Four of its clauses are enough to frame the conversation with IT:

- **§4.3**: keep an up-to-date listing of all relevant systems and their GMP functionality — the inventory.
- **§12**: physical and/or logical controls restrict access, and **their extent depends on the criticality of the system**.
- **§9**: recording changes to and deletions of GMP-relevant data — an audit trail — should be considered **based on a risk assessment**, and the reason for a change should be documented.
- **§16**: for systems supporting critical processes, provisions should ensure continuity of support for those processes in the event of a system failure.

On the FDA side, 21 CFR Part 11 is a **regulation**, not a guide: 11.10(d) limits system access to authorised individuals, 11.10(g) requires authority checks, and 11.10(e) requires computer-generated, time-stamped audit trails retained at least as long as the records themselves.

Three further documents complete the picture, and each should be read for what it is. **GAMP 5 Second Edition** (ISPE, 2022) is a **guide**: it recommends a risk-based approach, and its update covers in particular the role of service providers. **PIC/S PI 041-1**, on good practices for data management and integrity in regulated GMP/GDP environments, entered into force on 1 July 2021. The **MHRA guidance of March 2018 on data integrity** defines it as the degree to which data are complete, consistent, accurate and trustworthy — with "data" including raw data.

## Question 1 — "Show me the inventory, and tell me where the PLCs are"

The Annex 11 §4.3 inventory exists almost everywhere. What it rarely contains: the PLCs embedded in equipment.

There is a historical reason: the European Commission guidance on the *Site Master File* asks for a description of GMP-critical computerised systems **excluding equipment-specific PLCs**. That exclusion concerns a site presentation document; it does not cancel Annex 11 §4.3. Many sites have nonetheless read it as a blanket exemption.

So the question is not "do you have an inventory?" but: is every piece of equipment with a screen and a memory on the list, with its GMP functionality? If the answer is "it is in the maintenance management system, not in the system inventory", you have found your first gap.

## Question 2 — "Where is the border between the office network and the shop floor?"

No GMP text imposes a network architecture on you. Annex 11 §12 says something else, and something more useful: the extent of access controls, physical and/or logical, depends on the criticality of the system. So it is up to you to say which systems are critical, and up to IT to show that the controls follow. On the IT side, the technical framework is the **IEC/ISA 62443** series on cybersecurity for industrial automation and control systems — the FDA recognises part of it as a consensus standard for medical devices. It is not a GMP text, but it is a shared vocabulary.

Three concrete requests: a diagram of what separates the production network from the office network; the list of flows allowed across that border, with the business need for each; and how remote maintenance access by equipment suppliers is handled — who opens it, for how long, with what record.

That third line is the one that surprises most. Annex 11 §3.2 notes that the competence and reliability of a supplier are key factors in its selection, and that **the need for an audit is decided based on a risk assessment**. A supplier keeping permanent access to a GMP PLC is therefore a matter for risk assessment, not a technical given.

## Question 3 — "Who holds privileged access, and how do we prove it?"

On a production line, shared accounts survive for a long time: an "operator" account on the supervision system, an administrator account known to the whole maintenance team, a vendor account whose current password nobody knows.

Part 11 11.10(d) and 11.10(g) are clear: access limited to authorised individuals, authority checks. The FDA notes in its guidance on electronic systems that the regulation prescribes **no particular method** of implementation; it does recommend keeping a record of authorised personnel and their access privileges, and that individuals work under their own credentials.

So the right question is not "have you removed the shared accounts?" — sometimes the equipment does not allow it. It is: where is the named list of privileged accounts, when was it last reviewed, and what compensating measure covers the accounts that cannot be removed?

## Question 4 — "PLC data: who records it, who reviews it?"

A PLC produces process values. They often go to a historian, sometimes to an MES, sometimes nowhere except a paper chart recorder.

Three sub-questions, in this order. What is the raw data, in the sense of the MHRA guidance of March 2018? Who guarantees that a change leaves a record with its reason, as Annex 11 §9 asks following a risk assessment? And who reviews that record, how often, against which risk criterion?

The last two sometimes have no native answer: many process control systems have no usable audit trail. That is not a reason to panic, it is a reason to write down the compensating measure — batch report review, second-person verification, parameter locking — and its proportionality rationale, to be confirmed with your Quality unit.

## Question 5 — "If the line goes down on a Saturday, what do we do?"

Annex 11 §16 asks for provisions ensuring continuity of support for critical processes in the event of a failure. §7.2 asks for regular backups, and that the **integrity, accuracy and ability to restore** backup data be checked during validation and monitored over time.

Two questions are enough: when did we last restore for real, and on what hardware? A backup never restored is an intention, not a backup. And for a PLC, restoring includes the configuration and the program.

## What gets in the way in practice

**OT does not report to IT.** On many sites, the PLCs belong to Maintenance or Engineering. Asking the five questions of IT alone gives five partial answers: you need all three in the room, with Quality holding the pen.

**Downtime is expensive.** Fixing an access defect on a PLC usually requires a shutdown window. Without a site management decision, the finding comes back at every periodic review without ever closing. Stating the cost up front saves three years of cosmetic CAPAs.

## Where to start, in six weeks

Weeks 1 and 2: get the Annex 11 §4.3 inventory and compare it with the equipment list. Produce a list of gaps, without commenting on it.

Weeks 3 and 4: take the three most critical pieces of equipment and answer the five questions for those only, with IT, OT and Maintenance around the table. One page per piece of equipment.

Weeks 5 and 6: for each hole, write either the correction or the compensating measure with its proportionality rationale. Have Quality approve it, and take the rest to change control.

You will not have covered everything. You will have three documented pieces of equipment, an inventory that tells the truth, and a method the team can repeat on its own. In an inspection, that is worth more than a forty-page plan nobody applied.

---

*Benjamin de Bruijne is Digital Technology SME at a Belgian biopharmaceutical group. He helps Labs, Manufacturing and Quality teams frame and validate their digital projects in GxP environments. [Profile and availability](/en/biopharma/).*
