---
title: "Periodic review of a validated system: doing it in half a day"
description: "What Annex 11 section 11 actually asks for, the nine items to cover, three pitfalls and a six-week plan for your first review."
date: 2026-11-23
rubrique: gxp
lang: en
tags: [GxP, CSV, Annex 11, GAMP 5, Periodic review]
points:
  - "Annex 11 lists nine items, and nothing more"
  - "A review is not a revalidation, nor the PQR"
  - "With no conclusion or actions, the report is useless"
---

Every year the same line lands in the quality plan: periodic review of the system. And every year the same scene: a forty-page binder, three weeks of chasing people by email, a report nobody rereads and from which no action ever comes.

I run these reviews differently: half a day of preparation, a one-hour meeting, a four-page report. Here is the method, and what the texts actually ask for — far less than what people put in.

## The framework already exists, and it fits in one paragraph

The European obligation comes from **Annex 11** of EudraLex volume 4 (*Computerised Systems*), revision 1 of January 2011, which came into operation on 30 June 2011: that is the text in force. Its **section 11, "Periodic evaluation"**, asks that computerised systems be periodically evaluated to confirm that they **remain in a valid state** and are compliant with GMP (Good Manufacturing Practice). It states what those evaluations should include, where appropriate: the current range of functionality, deviation records, incidents, problems, upgrade history, performance, reliability, security and validation status reports.

Nine items, that is all: no mandated template, no stated frequency, no page count.

On the American side there is no requirement called "periodic review", but **21 CFR 211.68(a)** is a regulation, not a guide: it requires that automatic, mechanical or electronic equipment — computers included — be **routinely calibrated, inspected or checked according to a written program** designed to assure proper performance, and that written records of those calibration checks and inspections be maintained. Section 211.68(b) adds programs assuring the accuracy and security of computer inputs, outputs and data.

Guides, for their part, recommend: they do not require. **GAMP 5** second edition (ISPE, 2022) devotes an appendix to periodic review (Appendix O8) and ties it explicitly to confirming the validated state; it also asks that **risks be reviewed** on that occasion, to verify that the controls are still effective. **PIC/S PI 041-1** (*Good Practices for Data Management and Integrity in Regulated GMP/GDP Environments*, adopted on 1 June 2021, in force since 1 July 2021) contains a periodic system evaluation section: the inspector checks there that systems have been reviewed periodically and maintained in their validated state.

One point on the calendar. The European Commission ran a public consultation, from 7 July 2025 to 7 October 2025, on a revision of Chapter 4 and Annex 11, plus a new Annex 22 on artificial intelligence. The consultation page announces enhanced requirements for lifecycle management, with quality risk management principles applied comprehensively during all steps, and on data integrity, audit trails and security. The consultation is closed and no adoption date is published on that page: I build no procedure on that draft, and the version in force is to be checked on the Commission's EudraLex pages.

## What a periodic review is not

Three confusions cost weeks.

**It is not a revalidation.** The review establishes a fact: it says whether the system has stayed in its validated state. If it finds a gap, it opens an action, which will go through change control — Annex 11 section 10 asks that any change to a computerised system, including system configuration, be made only in a controlled manner in accordance with a defined procedure. Re-testing is a possible consequence, never the starting point.

**It is not the product quality review.** Chapter 1 of EudraLex volume 4 (revision 3, in operation since 31 January 2013) asks in 1.10 for regular, periodic or rolling quality reviews of all authorised medicinal products. The object there is the product, not the system. The two reviews feed each other; they do not replace each other.

**It is not audit trail review.** The MHRA, in its *'GXP' Data Integrity Guidance and Definitions* revision 1 of March 2018, asks that routine data review include a documented audit trail review where this is determined by a risk assessment, and accepts that it be limited to entries with GxP relevance. That is a routine act, at the pace of the data, not an annual tick-box. The periodic review checks that it does take place; it does not replace it.

## The review in nine items

I take the section 11 list as it stands, one question per item. Each one fills in within minutes when the data already exists elsewhere.

1. **Current range of functionality.** Does what is in service match the validated scope? A module switched on with no documentation is the first gap to look for.
2. **Deviation records.** How many deviations involving this system since the last review, and how many are closed?
3. **Incidents.** Tickets from the service management tool, filtered on the system: volume, criticality, resolution time.
4. **Problems.** The recurring causes behind those incidents: the same symptom three times is a problem, not three incidents.
5. **Upgrade history.** The versions installed, each with its approved change and its level of re-testing.
6. **Performance.** Response times, volumes, remaining capacity. A database reaching its limit is a future gap.
7. **Reliability.** Outages, backups, restores: one tested restore is worth more than ten backups nobody ever checked.
8. **Security.** Review of accounts and rights, leavers actually removed, generic and shared accounts, patches applied.
9. **Validation status reports.** Is the file up to date: plan, traceability matrix, report, and the list of documents changed since.

I add a tenth line, which comes from GAMP 5: **risks**. Is the system risk assessment still true, and are its controls still effective? A change of use is enough to make it obsolete.

## Sizing the frequency by risk

No text gives a frequency: it is for the internal procedure to set it, on the criterion of GxP impact and criticality. In practice, annually for a high-impact system that changes often; every two or three years for a stable system with no change since the last review. What counts during an inspection is that the rule is written, justified by risk and followed: a frequency you keep is worth more than an ambitious one never honoured. The interval you choose is to be confirmed with your Quality unit.

## What gets in the way in practice

**The report with no conclusion.** Forty pages of annexes and not one sentence saying "the system remains in a valid state", with or without reservations. Write the conclusion first, in three lines, then the actions with an owner and a date. The rest is attachments.

**The data you do not have.** If the service management tool cannot filter tickets by system, or if the change register does not name it, the review turns into an investigation. The fix sits upstream: a system identifier in every record, half a day of configuration that makes the following reviews trivial.

**The single-voice review.** One IT person filling in nine boxes alone produces a document, not a review. You need the business owner of the system for the range of functionality and the real usage, and Quality for the deviations and the state of the file. One hour together, not three weeks of email.

## Where to start: six weeks

**Weeks 1 and 2.** Pick the system whose review is most overdue. Write the report template: cover page, conclusion, the nine items, the risks, the action table. Four pages maximum.

**Weeks 3 and 4.** Ask for three extracts: tickets filtered on the system, approved changes, deviations, and hand the account review to the system owner. Nothing is drafted at this stage.

**Week 5.** A one-hour meeting with the business owner, IT and Quality. You fill in the items live and you decide the conclusion in the room.

**Week 6.** Report signed, actions opened in the quality system, date of the next review set according to the frequency rule. Then you duplicate the template on the next system.

The first review costs six weeks: you have to create the template and connect the extracts. The second costs half a day. That is the whole point of the exercise: moving from an event dreaded once a year to a routine act that, on inspection day, presents itself.

---

*Benjamin de Bruijne is Digital Technology SME at a Belgian biopharmaceutical group. He helps Labs, Manufacturing and Quality teams frame and validate their digital projects in GxP environments. [Profile and availability](/en/biopharma/).*
