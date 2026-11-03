---
title: "The Monday report: from three hours of spreadsheets to one automatic email"
description: "Pick five useful numbers, assemble them without retyping, send them at a fixed time, and avoid the trap of a wrong number in circulation."
date: 2026-11-03
rubrique: automatisation
lang: en
tags: [Automatisation, Reporting, Tableau de bord, PME, Belgique]
points:
  - "A useful dashboard fits in five numbers"
  - "Automate the assembly, never the judgement"
  - "A wrong number in circulation costs three hours"
---

A manager described his Monday morning to me: four tabs open, the week's numbers retyped by hand into a spreadsheet, some formatting, an email to two partners. Three hours, every week, for a document nobody reads again by Wednesday.

Reporting has a particular flaw: it looks like work. Retyping numbers fills a morning, gives the feeling of keeping the house in order, and produces no decision at all. The decision itself takes ten minutes — when the numbers are already there, correct, and always calculated the same way. Everything else is handling, and handling can be automated.

## What is true in 2026

Two things have changed, and both work in your favour.

**Your sales data has become structured.** The official portal of the FPS Finance and BOSA, efacture.belgium.be, states that since **1 January 2026**, Belgian VAT-liable businesses must exchange **structured electronic invoices** between themselves, in the reference format **Peppol BIS**, sent and received over the Peppol network. The same portal mentions a tolerance period covering the first three months of 2026, and exceptions — for instance taxable persons under the flat-rate scheme of article 56 of the VAT Code. For reporting, the consequence is simple: what used to come out as a PDF can now be read field by field. An invoiced amount no longer needs retyping.

**External benchmarks already exist, and they are official.** Statbel, the Belgian statistical office under that name since 15 January 2018, publishes in its be.STAT database the structure of businesses by sector of activity (NACE classification), including turnover, value added and personnel costs. The Central Balance Sheet Office of the National Bank of Belgium collects filed annual accounts and derives ratios from them, published by sector as quartiles through the NBB.Stat application: you can place your margin against the median of your sector. The available user guides come from several different years; check the version in force on nbb.be before relying on a precise list of ratios.

In other words: no need to invent a reference percentage. If it does not exist at Statbel or at the Central Balance Sheet Office, it does not belong in your dashboard.

## Choosing the five numbers

A number earns its place if someone can act on it this week. That is the only criterion. Here is the split that works in most SMEs:

- **What comes in**: enquiries received, quotes sent. It announces the next six weeks.
- **What goes out**: orders delivered, jobs finished, billable hours produced. It tells you whether the promise is being kept.
- **Money expected**: outstanding receivables, and the overdue share. It tops the Monday list of urgent matters.
- **Money available**: cash balance, and the thirty-day projection. One number, not a plan.
- **Quality**: average time to first reply, delays, open complaints. The most often forgotten, the most predictive.

Five, and you stop. A sixth number does not cost one more calculation: it costs one more discussion, every Monday.

On frequency, one remark from the CNIL is worth repeating: productivity is more meaningfully measured over longer periods, because it varies for reasons outside the people involved. Cash flow is looked at every week. A yield is looked at every month, or every quarter.

## The build, in four steps

1. **Fix a single source for each number.** One number, one tool that holds the truth. Receivables come from invoicing, not from a partner's spreadsheet. If two tools can answer, you will get two answers.
2. **Extract without retyping.** A scheduled export, a direct read of the database, or the tool's own interface. The rule: nobody retypes anything, and nobody renames a file by hand so the automation can find it.
3. **Assemble and calculate in one place.** A single set of formulas, versioned, readable by someone other than its author. This is where the definitions live.
4. **Send at a fixed time.** Monday 7 a.m., five numbers, each with its value, the change against the previous week, the extraction date and a link to the detail. The email must fit on a phone screen.

What is not on the list: interpretation. The automation delivers the numbers and the gaps. The comment stays written by a human, when there is something to say.

## When the report is about people

As soon as an indicator reaches individual level — calls handled per person, lead times per technician — you are processing personal data, and the framework is no longer a matter of taste.

European Regulation 2016/679 (GDPR), in its article 5, requires specified, explicit and legitimate purposes; data that is adequate, relevant and limited to what is necessary (minimisation); data that is accurate and kept up to date; and, in paragraph 2, the controller's ability to demonstrate compliance with those principles.

The Belgian Data Protection Authority applies these principles to employers on its workplace-privacy pages: a legitimate purpose, processing that is adequate, relevant and not excessive in relation to that purpose, monitoring limited to what is strictly necessary, and a duty to inform workers about the processing and its purposes. For certain monitoring arrangements it refers to collective labour agreements no. 68 (cameras) and no. 81 (electronic communications).

The CNIL adds the mechanics: a monitoring arrangement must be proportionate to its objective, and you have to determine the strictly necessary data, its retention period and the people who may access it. It also notes that genuinely anonymous results, aggregated into statistics, no longer contain personal data.

In practice that gives three settings: aggregate by team rather than by person when the objective is to steer activity, write the retention period next to the dashboard, and tell the teams what is measured before the first measurement. For points of interpretation, confirm with your legal adviser or your payroll office.

## What blocks it in practice

**The wrong number in circulation.** A manual error is visible. The same error, sent automatically every Monday in a neat email, becomes a truth. Before sending it to anyone, run the report for three weeks alongside your current method and explain every gap. And always show the extraction date: a number without a timestamp cannot be challenged.

**Definitions that shift.** "Turnover" means at least three things: ordered, invoiced, collected. If two people around the table do not use the same one, the dashboard produces debates, not decisions. Write the definition in one line, next to the number, in the email.

**The indicator nobody reads.** Simple test: if a number has triggered no decision in two months, it goes. A dashboard is pruned, not stacked.

## Where to start: two weeks

**Week 1, by hand.** Write the five numbers on a sheet of paper. For each one: the definition in one line, the tool that holds the truth, the frequency. Then send the manual version once. If the email is useless manually, automating it will change nothing.

**Week 2, automate the assembly** of the two or three numbers whose source is already structured — outstanding receivables is often the simplest and the most useful. Compare it every Monday with your usual calculation. When the two match three times in a row, schedule the send and remove that tab from your Monday morning.

The other numbers will follow, or they will not. A dashboard with three correct numbers beats a dashboard with twelve, two of which are wrong and ten useless.

---

*Benjamin de Bruijne is an independent digital and AI consultant in Belgium. He automates repetitive work for SMEs and puts AI where it removes a specific chore. [Astérisme: AI inside your processes](https://asterisme.ai/).*
