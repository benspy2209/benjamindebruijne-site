---
title: "GP0 to GP4: the decision gates of a pharma project"
description: "A computerised system project in pharma moves through gates. What is expected at GP0 to GP4, the deliverables, and the beginner mistakes."
date: 2026-10-15
lang: en
tags: [GxP, CSV, GAMP 5, stage-gate, URS]
points:
  - "A gate is not a meeting: it is a documented decision"
  - "Validation deliverables start at GP1, not at GP3"
  - "A weak URS costs more than all the testing"
---

A project manager joins a pharma site, takes over a computerised system project, and finds a tracker where everything hangs on five boxes: GP0, GP1, GP2, GP3, GP4. Nobody explains what sits behind them.

Three months later, they understand that a missed gate cannot be made up by going faster. This is the simplest topic to explain and the worst handed over. Here is what I would have liked to read at the start.

## What a gate is, and what it is not

GP reads "gate passage". GP0 to GP4 split the project into phases separated by formal decisions. Names vary from one group to the next: GP here, stage-gate elsewhere, DG0 to DG4 next door. The logic does not vary: at each gate, a decision body authorises — or refuses — the move to the next phase, on the basis of approved deliverables.

A gate is therefore not a progress meeting. It is a documented decision: a frozen scope, a committed budget, named approvals. In practice, if you leave a committee with "let us carry on, we will sort the specs later", you have not passed a gate. You have lost a meeting.

## The framework already exists

An important point when starting out: this split is not an in-house invention. It translates into governance what the texts already ask for.

**Annex 11 of EudraLex Volume 4** (European Commission, January 2011 revision) requires validation documentation to cover the relevant steps of the life cycle, and the manufacturer to be able to justify its standards, protocols, acceptance criteria and records based on a risk assessment (§4.1). The same section 4 requires an up-to-date inventory of systems (§4.3) and a **URS** — *User Requirements Specification* — which describes the required functions of the system, is based on a documented risk assessment and on GMP impact, and stays traceable throughout the life cycle (§4.4). Its section 3 covers suppliers: formal agreements with any third party that provides, configures, validates, maintains or hosts the system (§3.1), audits decided on the basis of a risk assessment (§3.2), and a review by the regulated user of supplier-provided documentation against its own requirements (§3.3).

**Annex 15** (Qualification and Validation, same Volume 4, 2015 revised version) covers the cycle from the drafting of the URS through to retirement of the installation, and makes the URS a point of reference throughout qualification. It defines **DQ** (*Design Qualification*) as the documented verification that the proposed design is suitable for the intended purpose, and states that the URS requirements should be verified at that stage. **IQ** (*Installation Qualification*) verifies that what is installed complies with the approved design; **OQ** (*Operational Qualification*) that it performs as intended throughout the anticipated operating ranges.

On the US side, the FDA's **21 CFR Part 11** requires in 11.10(a) the validation of systems that create, modify or maintain electronic records, to ensure accuracy, reliability, consistent intended performance and the ability to discern invalid or altered records — wording echoed in the FDA guidance *General Principles of Software Validation*.

Finally, **GAMP 5, 2nd edition** (ISPE, 2022) is a **guide**: it recommends, it does not require. It offers a life cycle in which specification and verification answer each other, and states that this approach is not inherently linear — it supports iterative and incremental methods. Life cycle activities are to be scaled according to the GxP impact, complexity and novelty of the system.

One current point, to handle with care: the European Commission ran a stakeholders' consultation on a revision of Annex 11 and on a new Annex 22. I have no confirmation of adoption. Work with the 2011 text and check the status in force on health.ec.europa.eu before writing a validation plan.

## The five gates, and what is expected

1. **GP0 — the idea is admissible.** No solution talk yet. You describe the business problem, the expected scope, the likely GxP impact, an order of magnitude of cost, and the sponsor. What gets decided: whether analysis time is invested, or not.
2. **GP1 — the need is written, the solution is chosen.** This is the most structuring gate. Typical deliverables: project charter, URS approved by the business, GxP impact analysis and risk assessment, supplier assessment, validation strategy. One piece of advice: this is where the URS is won, because everything else flows from it, including the tests you will run eighteen months later.
3. **GP2 — the design is frozen, validation is planned.** Functional and configuration specifications, validation plan, initial traceability matrix (URS to specifications to tests), DQ, data migration plan if there is legacy data, training plan. What gets decided: that you build on this design.
4. **GP3 — the system is built and verified.** IQ, OQ, and **PQ** (*Performance Qualification*) where the process justifies it, test reports, deviations formally handled, operating procedures, complete traceability. What gets decided: go live.
5. **GP4 — the project closes, the system lives on.** Validation report, handover to operations, entry in the system inventory, switch to change control and periodic review, project debrief. A gate that often gets skipped, and the one that costs in inspection.

## What blocks in practice

**Validation discovered at GP3.** The classic trap: the team builds, then looks for whoever will write the protocols. At that stage, traceability is reconstructed backwards, and it shows. Validation is a thread that starts at GP1.

**The URS written by IT, or copied from the supplier.** Annex 11 §4.4 expects user requirements that are risk-based and traceable, and its §3.3 asks for a review of supplier documents against your requirements. A URS that the business has not read line by line produces requirements that cannot be tested, and therefore orphan tests.

**The gate turned into a formality.** When deliverables land the day before, nobody reads and everybody signs. You gain a week and you lose the safety net. Better to push the gate by ten days than to open it empty.

## Where to start, in six weeks

Weeks 1 and 2: write on one page, for your own project, what is expected at each gate in your organisation, and have that page reviewed by Quality. Ask for the real templates, not the theory.

Weeks 3 and 4: take the existing URS and test it. Can each requirement be verified by a test? Is it tied to a risk and to a GxP impact? If the answer is no for more than a third of the lines, your real subject is not the schedule.

Weeks 5 and 6: open the traceability matrix, even empty, even in a spreadsheet. Two columns are enough to begin: the requirement, and how it will be verified. That is the document that will tell you, at each gate, whether you are actually ready.

The rest is discipline. A well-prepared gate makes for a short meeting.

---

*Benjamin de Bruijne is Digital Technology SME at a Belgian biopharmaceutical group. He helps Labs, Manufacturing and Quality teams frame and validate their digital projects in GxP environments. [Profile and availability](/en/biopharma/).*
