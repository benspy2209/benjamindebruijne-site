---
title: "DT SME: the role missing from many GxP projects"
description: "The DT SME translates between Labs, Manufacturing, Quality and IT. Four responsibilities, the signals it is missing, how to create the role."
date: 2026-10-26
rubrique: gxp
lang: en
tags: [GxP, CSV, GAMP 5, URS, gouvernance]
points:
  - "The DT SME turns business intent into testable requirements"
  - "Not a project manager, not an architect, not Quality"
  - "With no written role description, the role does not exist"
---

A computerised system project starts on a pharma site. The laboratory describes what it wants, IT describes what it knows how to build, and nobody holds the middle.

Six months later the system is delivered, validated, and barely used. It does exactly what was specified: this is not a delivery failure, it is the symptom of a missing role.

## What a DT SME does, and what it is not

**DT SME** stands for *Digital Technology Subject Matter Expert*: an expert in digital technology applied to a business domain. This is the person who knows the laboratory, manufacturing or Quality process well enough to understand what is being asked, and knows the systems well enough to know what that implies in requirements, data and validation.

The job: holding the translation between business intent and specification, in a **GxP** environment (regulated good practices — GMP, GLP, GCP).

What it is not — and this is where organisations get it wrong:

- **Not a project manager.** The project manager holds the schedule, the budget, the decision gates. The DT SME holds the content.
- **Not a solution architect.** The architect picks the components and the interfaces. The DT SME states what the result has to answer to.
- **Not Quality.** Quality approves, challenges, inspects; it does not write business requirements on behalf of the business.
- **Not the "key user".** A key user describes their own practice, sometimes their team's. The DT SME describes the process, including the cases nobody likes to raise.

## The framework already exists

No regulation asks for a "DT SME", and that needs saying plainly. What the texts do ask for, however, makes the role hard to avoid.

**Annex 11 of EudraLex Volume 4** (European Commission, January 2011 revision), in its paragraph 2 on personnel, calls for close cooperation between all relevant personnel, and explicitly names the Process Owner, the System Owner, Qualified Persons and IT. Its glossary defines the first two: the process owner is responsible for the business process; the system owner is responsible for the availability and maintenance of the computerised system and for the security of the data residing on it. So the annex names the responsibilities, not the person who keeps the conversation between them going.

The same text, at paragraph 4.4, requires the **URS** — *User Requirements Specification* — to describe the required functions of the system, to be based on a documented risk assessment and on GMP impact, and to remain traceable throughout the life cycle. Someone has to write it: that is where the gap shows.

**Chapter 2 of EudraLex Volume 4** (Personnel, version in operation since 16 February 2014) adds the constraint that settles the organisational debate: people in responsible positions should have their specific duties recorded in written job descriptions, and adequate authority to carry them out; there should be no gaps or unexplained overlaps in the responsibilities of personnel concerned with GMP. The chapter also states that the responsibilities placed on any one individual should not be so extensive as to present a risk to quality.

On the guidance side, the **GAMP 5 Guide, Second Edition** (ISPE, published July 2022) puts at its centre critical thinking exercised by knowledgeable and experienced SMEs, and devotes a dedicated appendix to it (M12, *Critical Thinking*). Mind the nature of the document: GAMP is a guide, it recommends an approach; it does not impose anything.

Two things are in motion, and I write them as they stand. The European Commission submitted to stakeholders' consultation a revision of Annex 11, a revision of Chapter 4 and a new draft Annex 22 on artificial intelligence; the consultation closed on 7 October 2025. In that draft Annex 11, the list of parties expected to cooperate widens and explicitly mentions *subject matter experts*, alongside process owners and system owners, users, QA, the Qualified Person, internal IT, vendors and service providers. The draft Annex 22 goes further and makes the process SME responsible for the adequacy of the system description. These are drafts: I have no confirmation that a final text has been adopted, and the EudraLex Volume 4 page remains the reference for checking the version in force. Do not build a validation file on a text that is out for consultation.

On the FDA side, the movement runs the same way: the final guidance *Computer Software Assurance for Production and Quality Management System Software*, issued in February 2026, takes a risk-based approach, but its scope is 21 CFR Part 820 — medical device quality. Useful as a direction, not transposable as such to a medicinal product site.

## The four responsibilities

1. **Turn intent into testable requirements.** Not "the system must be user-friendly", but "the operator records the result without re-keying it from the instrument, and any correction is timestamped with a reason". Every requirement has to be able to become a test.
2. **Inform the GxP impact decision and the validation scope.** The DT SME brings the process knowledge that makes it possible to say which functions touch product quality, regulated data or patient safety. Quality decides, on an analysis rather than an intuition.
3. **Hold consistency over time.** A validated system lives on: changes, versions, interfaces. The DT SME maintains the link between requirements, design and tests at every change control. That is what makes the periodic review feasible.
4. **Carry the users' voice into testing.** Tests have to cover the intended use, not only the software functions. That is the difference between an **OQ** (*Operational Qualification*) that passes and a system that holds up on Monday morning.

## How you can tell it is missing

The signals do not change:

- The URS was written by the supplier, signed off by the business without a line-by-line read.
- The answer to any functional question is "we will see in **UAT**" (*User Acceptance Testing*).
- Two documents say two things about the same data flow, and nobody knows which one governs.
- Nobody can name who approves a requirement change.
- The traceability matrix is built at the end, for the file, never used during the project.

Three of those five signals: the role is not being held. It may well be assigned on paper — that is not the same thing.

## What gets in the way in practice

**The role is handed as an extra to someone already saturated.** Chapter 2 gives you the argument to refuse: responsibilities too extensive for one person present a risk to quality. A DT SME at 5% of their time is a ticked box, not a role.

**The role is confused with the project manager's.** Both hats on one head produce a systematic trade-off in favour of the schedule, because the schedule is what that person is assessed on. Requirements become negotiable. They should not be.

**The role is written down nowhere.** As long as it does not appear in a job description, with the matching authority and a designated deputy, it does not exist for an inspector — and it disappears the day that person changes jobs.

## Where to start, in six weeks

- **Weeks 1 and 2**: list the GxP-impacting computerised systems in scope and name, for each one, a process owner and a system owner. This is often where a site discovers two systems have neither.
- **Weeks 3 and 4**: write the role description: the four responsibilities above, the matching authority (who approves what), the deputy, and what is not in the role. One page is enough, reviewed by Quality and by IT.
- **Weeks 5 and 6**: apply it on a single live project, not on ten. Take the ten most critical requirements of its URS, make them testable, trace each one to a test.

This role is not a title, it is a load. The question of authority — who approves a requirement, who can say no to a supplier — is settled with your Quality unit, not in an article.

---

*Benjamin de Bruijne is Digital Technology SME at a Belgian biopharmaceutical group. He helps Labs, Manufacturing and Quality teams frame and validate their digital projects in GxP environments. [Profile and availability](/en/biopharma/).*
