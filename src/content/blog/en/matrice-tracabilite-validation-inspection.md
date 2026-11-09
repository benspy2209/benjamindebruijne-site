---
title: "The traceability matrix: the tool that holds in an inspection"
description: "Building a traceability matrix that links requirements, design and tests: what Annex 11 says, four classic mistakes, a minimal template."
date: 2026-11-09
rubrique: gxp
lang: en
tags: [GxP, CSV, GAMP 5, Annexe 11, Traçabilité]
points:
  - "Annex 11 wants requirements traceable across the life cycle"
  - "A requirement you cannot test is not a requirement"
  - "The matrix dies at the first forgotten change control"
---

An inspector opens your validation file, picks a requirement at random from the requirements specification and asks: "Show me the test that proves this." If the answer takes more than two minutes, the problem is not the test: it is the traceability matrix.

It is the most underestimated deliverable of a **CSV** (*Computerised System Validation*) file. It is often produced at the end, in a spreadsheet, to tick a box in the validation plan. It should be the backbone of the project, because it is the only document that answers the real question of an inspection: *was what you asked for designed, and then verified?*

## The framework already exists, and it fits in three lines

Annex 11 of EudraLex volume 4, *Computerised Systems* (European Commission, revision 1 of 2011, text in force), does not contain the word "matrix". It contains the obligation that makes one necessary: in its section on validation, it asks that validation documentation and reports cover the relevant life cycle steps, and that **user requirements be traceable throughout the life cycle**. A requirement written in a **URS** (*User Requirements Specification*) and then found nowhere else is a deviation, not a detail.

Annex 15, *Qualification and Validation* (European Commission, 2015 version), says the same thing differently: the URS is a point of reference throughout the validation life cycle.

On the US side, 21 CFR Part 11 is a **regulation**, not a guide. It does not mandate a matrix either, but it mandates what feeds one: 11.10(a), validation of systems to ensure accuracy, reliability and consistent intended performance; 11.10(k), controls over systems documentation, with revision and change control procedures that maintain an audit trail of the development and modification of that documentation.

**GAMP 5 Second Edition** (ISPE, 2022) is a **guide**: it recommends, it does not require. It carries over the framework of the first edition and its quality risk management approach aligned with ICH Q9, and its life cycle chapter treats specification and verification explicitly as a pair — which is exactly what the matrix makes visible. ISPE also notes that this approach is not strictly linear: it still holds in iterative or Agile modes.

In the clinical domain, EMA went further. Its *Guideline on computerised systems and electronic data in clinical trials* (EMA/INS/GCP/112288/2023, applicable since 9 September 2023) asks that traceability be established and maintained between each user requirement and its test cases, and that the version of the software being tested be documented. The scope is clinical, not GMP, but the expectation is the same.

## What the ongoing revision adds, and what is not settled yet

The European Commission put out for public consultation a revision of Chapter 4 (Documentation), of Annex 11, and a new **Annex 22** dedicated to artificial intelligence. The consultation opened on 7 July 2025 and closed on 7 October 2025.

In the draft Annex 11 submitted for consultation, traceability is no longer implicit: a dedicated section asks for documented traceability between individual requirements, the corresponding design specifications and the qualification and validation test cases, and it names the requirements traceability matrix as the means of doing so.

Be careful about what that means today: this is a **draft whose consultation is closed**, not an adopted text. So I build nothing on that basis, but I draw a project-management conclusion from it: a serious matrix, optional in its form today, will probably be named tomorrow. The status in force is to be checked on the Commission's EudraLex volume 4 page before any decision; the interpretation remains to be confirmed with your Quality unit.

## The matrix in six columns

No forty-column template. Six are enough, and they are filled in this order.

1. **Requirement identifier.** A stable code (URS-012), never a spreadsheet row number. It will survive three re-issues of the document.
2. **Requirement statement.** One requirement per line. If the sentence contains "and", split it.
3. **GxP criticality.** Impact on product quality, patient safety or data integrity: yes/no, and why in one line. This is the column that decides the testing effort, in the spirit of GAMP 5 risk management.
4. **Design element.** The reference in the functional specification (**FS**) or configuration specification: the screen, the parameter, the report, the interface that delivers the requirement. For a configured off-the-shelf product, it is often a parameter, not code.
5. **Verification.** The test case and its identifier: **IQ** (installation qualification), **OQ** (operational qualification), **PQ** (performance qualification), or another piece of evidence owned as such — design review, supplier assessment, vendor testing leveraged after assessment.
6. **Status and version.** Result, date, software version tested, deviation reference if there is one.

The matrix can then be read both ways: from the requirement to the evidence, and from the evidence back to the requirement. Both readings earn their keep.

## The four mistakes that bring it down

**Requirements you cannot test.** "The system must be user-friendly", "performance must be acceptable". No test proves that. Rewrite them as observable and measurable, or take the statement out of the URS and put it in a statement of intent.

**Orphan tests.** Test cases that trace back to no requirement. Each one raises the same question for the inspector: why are you testing this, and what did you decide not to test? Either the requirement was missing, or the test is out of scope.

**Diverging versions.** The matrix cites URS v2.0, the executed OQ protocol refers to v1.3, and the report does not say which one governs. It is the most frequent deviation and the easiest to avoid: one version column, one documentary source of truth.

**The update forgotten at change control.** The system evolves, the matrix stays as it was on the day of go-live. Six months later, it describes a system that no longer exists. 21 CFR 11.10(k) asks precisely for revision and change control procedures over systems documentation.

## What blocks in practice

The first blocker is human: the matrix is seen as an administrative task at the end of the project. As long as it is produced after the tests, it only records. Produced together with the URS, it immediately exposes vague requirements — that is its real benefit, and it is free.

The second is tooling. Many teams wait for a requirements management tool before starting. A well-controlled spreadsheet, with a stable identifier and a version column, holds up perfectly in an inspection. A badly configured tool does not. And the tool itself becomes a system to assess.

The third is the supplier scope. On an off-the-shelf product, part of the verification comes from the vendor. You can rely on it, that is the spirit of GAMP 5 supplier assessment — provided the matrix says so explicitly, with the reference of the document leveraged and the trace of the assessment that justified relying on it. An empty line is not a reuse.

## Where to start: six weeks

**Weeks 1-2.** Take a system that is already validated, not a project in flight. Export its requirements into the six columns, correcting nothing. Count the lines with no design element and no test.

**Weeks 3-4.** Handle the GxP-critical requirements only. For each one, find the evidence or write down in black and white that it is missing. A documented and assessed gap is worth more than a box filled at random.

**Week 5.** Add the matrix to your change control procedure: no change closes without the line updated. That single point is what stops the matrix from ageing.

**Week 6.** Run the inspector exercise. Someone picks three requirements at random and asks for the evidence. Time it. If you are under two minutes per requirement, your file defends itself.

---

*Benjamin de Bruijne is Digital Technology SME at a Belgian biopharmaceutical group. He helps Labs, Manufacturing and Quality teams frame and validate their digital projects in GxP environments. [Profile and availability](/en/biopharma/).*
