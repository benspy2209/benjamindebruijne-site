---
title: "An internal assistant on your documents: what works, what disappoints"
description: "Plugging an AI assistant into company documents: the method, the three classic disappointments, and the checks to set before opening access."
date: 2026-11-04
rubrique: ia
lang: en
tags: [IA, LLM, RGPD, PME, Documents]
points:
  - "Answer quality comes from the documents, not the model"
  - "Folder access rights must carry over into the assistant"
  - "Thirty test questions before opening the tool to teams"
---

A thirty-person SME has ten years of procedures, terms and conditions and meeting notes sitting in a shared drive. An AI assistant gets plugged into it, and three weeks later management hears the same sentence from three different people: "it answers beside the point."

In most of the cases I see, the model is not the problem. The problem is in the documents it was given, in the access rights nobody reproduced, and in the absence of any test before opening the door. Here is the method I apply, and the three disappointments that come back most often.

## What is true in 2026

Two texts frame the exercise, and they do not say the same thing.

**Regulation (EU) 2016/679**, the General Data Protection Regulation (GDPR), sets out in **Article 5(1)** the principles that concern you directly here: process only the data necessary for the purpose pursued (**minimisation**, point c), keep data accurate and up to date where necessary (**accuracy**, point d), and do not keep it longer than necessary (**storage limitation**, point e). **Recital 39** of the same regulation calls for time limits for erasure or a periodic review. An assistant that retains conversation histories and copies of indexed documents falls under all three principles at once.

**Regulation (EU) 2024/1689**, the AI Act, adds a transparency layer. Its **Article 50** applies from **2 August 2026**: a system intended to interact directly with natural persons must be designed so that those persons are informed they are dealing with an AI, unless this is obvious to a reasonably well-informed person. EUR-Lex publishes a consolidated text applicable as of **27 July 2026**; check the version in force before quoting the article in an internal procedure.

Two useful readings from the authorities. The French **CNIL** states that its recommendations on the development of AI systems cover the development phase, not the deployment phase; for usage, it publishes a questions-and-answers set on using a generative AI system. There it notes that in use through an application programming interface (API), control over the system lies almost exclusively with the provider, and it recommends avoiding the submission of personal data as far as possible. It also recommends prohibiting, depending on the deployment mode chosen, the entry of confidential data such as data covered by industrial or commercial secrecy, instructing end users to submit only information they are authorised to share, and, where possible, objecting to the reuse of usage data by the provider, or even to the recording of history. Finally, it advises involving the data protection officer (DPO) and, where relevant, carrying out a data protection impact assessment (DPIA).

Belgium's **Data Protection Authority** (APD) has published an information brochure, "Artificial Intelligence Systems and the GDPR, A Data Protection Perspective", announced in September 2024 and circulated in a version marked December 2024. It is organised around the GDPR principles and, on security, lists encryption, strict access controls, penetration testing and detailed logging, while keeping human review for high-impact decisions.

What none of these texts will tell you: which documents to put in. And that is where everything is decided.

## What the tool actually does

An assistant plugged into your documents does not "know" your company. For each question, it searches your base for the passages that resemble the request, places them in front of the model, and the model writes an answer from those passages. Nothing more.

Two consequences, and they explain nearly every disappointment. First, if the right paragraph is not retrieved, the answer will be vague or wrong — and the model has no way of knowing that, so it will answer with the same confidence. Second, the answer is exactly as up to date as the document retrieved. If the 2021 procedure and the 2026 one coexist in the folder, the assistant will sometimes quote one, sometimes the other.

In other words: this is a document project before it is a technical project.

## The method, in six steps

1. **Twenty documents, not two thousand.** Start from the questions the team actually asks: terms and conditions, the warranty procedure, standard contracts, the internal price grid, the support FAQ. If a document answers no recurring question, it does not go in.
2. **One single version per document.** A date in the file name, drafts and "v2 final corrected" out of scope. Two contradictory versions produce two contradictory answers, and you will never know which one will come out.
3. **Reproduce the access rights.** Simple rule: the assistant must never make readable a document a person has no right to open. If the tool cannot carry over the rights of your shared drive, then the base contains only documents open to everyone. Personnel files, disputes and pay-related items stay out.
4. **Write the usage instructions.** One page: what must never be typed into a question (customers' personal data, HR files, items covered by commercial secrecy), who owns the base, and the notice shown to users that they are dealing with an AI. That is the CNIL's recommendation, and it is also the spirit of Article 50.
5. **Test with thirty questions before opening.** Ten questions whose answer sits in a single document, ten that force a cross-reference between two documents, ten whose answer is nowhere in the base — for those, the right answer is "I cannot find it." Score every output: correct, incomplete, wrong, invented. The number that matters is the count of invented answers, and it must be zero before you open.
6. **Human in the loop, and review over time.** Require every answer to cite the document it came from, name one person responsible for the corpus, replay the thirty questions after each significant addition, and set a quarterly review that removes outdated documents. That is precisely the periodic review of Recital 39.

## What disappoints, and why

**The dumping-ground corpus.** The temptation is to pour everything in: fifteen years of network drive, all at once. Noise always wins. Old versions, exported emails and sales presentations drown the three procedures that matter, and answer quality drops at the exact moment you believe you are enriching the tool.

**Counting questions.** "How many contracts expire in March?" is not a document question, it is a query over data. An assistant of this kind will add up what it has in front of it, which is a few passages out of dozens, and will return a wrong figure with confidence. Those questions belong to your management software, not to the assistant.

**Invisible accumulation.** Conversation histories, memory, indexed copies: data piles up without anyone deciding anything. In a note published in July 2026 on agentic AI, the CNIL recommends partitioning memory per processing operation in order to limit excessive data storage, and partitioning the deployment environment as well, for instance through sandboxing. The SME version of that advice: one space per use case, and a written retention period for histories.

## What it really costs

Four items, to be costed in your own company before signing anything. Licences, per person per month. Document preparation, which is the main item and which almost nobody anticipates: sorting, de-duplicating, dating. Proof-reading during the first weeks, because answers have to be checked as long as you do not know the error rate. And the cost of a wrong answer that goes unnoticed — one warranty clause misquoted to a customer is enough to cancel the year's savings.

## Where to start, in two weeks

Week 1: the list of the twenty questions most often put to support and to management, the documents that answer them, a single version of each, and the written list of what does not go into the base.

Week 2: the thirty test questions, the scoring, then opening to three volunteers — not to the whole company. After a month you will know whether the tool deserves the next fifteen documents, and you will know it from numbers, not from an impression.

---

*Benjamin de Bruijne is an independent digital and AI consultant in Belgium. He automates repetitive work for SMEs and puts AI where it removes a specific chore. [Astérisme: AI inside your processes](https://asterisme.ai/).*
