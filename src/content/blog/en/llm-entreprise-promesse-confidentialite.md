---
title: "Choosing an LLM: what the confidentiality promise is worth"
description: "The seven points to read in an LLM provider's contract before sending it company data, and the things you never send at all."
date: 2026-10-21
rubrique: ia
lang: en
tags: [IA, RGPD, Confidentialité, AI Act, PME]
points:
  - "The marketing page is not the contract: read Article 28"
  - "Hosting, retention, training: three questions"
  - "What you never send is decided before you subscribe"
---

An accounting firm of fifteen people shows me the AI tool it has just picked. The home page promises that "your data stays confidential"; I ask for the contract, and nobody has opened it.

This is the normal situation. An **LLM** (large language model) arrives in a small company like any other online service: through a subscription, usually taken out by one motivated person. But what binds the provider is not its sales page, it is its contract. And there are few points to read there, because the law has already listed them.

## What is true in 2026

As soon as you send an LLM provider personal data — a client's name, an email address, an employee file — and it processes that data on your behalf, it is a **processor** under the GDPR, Regulation (EU) 2016/679. Its Article 28 requires a contract or other legal act setting out the subject matter and duration of the processing, its nature and purpose, the type of personal data and the categories of data subjects. The same article requires the processor to process data only on documented instructions, to make available the information necessary to demonstrate compliance and allow audits, and to engage a further processor only with prior specific or general written authorisation. The European Commission has published standard contractual clauses for this contract: Implementing Decision (EU) 2021/915 of 4 June 2021.

One tipping point, recalled by the Court of Justice of the European Union in case C-683/21: a processor that itself determines the purposes and means of the processing is considered a controller for that processing. Translated into our subject: if the provider reuses your data for its own account, it no longer plays the role you assume it plays. That is not a contractual detail.

If the data leaves the Union, Chapter V of the GDPR applies. Two common bases: an adequacy decision, or the standard contractual clauses of Implementing Decision (EU) 2021/914 of 4 June 2021, which are appropriate safeguards within the meaning of Article 46(2)(c). Their recitals 19 and 20 require an analysis of the circumstances of the transfer and of the law of the destination country, and provide that the transfer should not take place if that law prevents the importer from complying with the clauses. For the United States, Implementing Decision (EU) 2023/1795 of 10 July 2023 recognises an adequate level of protection for the EU–US Data Privacy Framework — but only for participating organisations: an organisation removed from the list can no longer receive data on that basis, and the Commission states that it monitors the framework continuously and may suspend, amend or repeal it. Check the status in force on ec.europa.eu.

One last piece of the frame: Regulation (EU) 2024/1689, the AI Act. Its Article 4, on AI literacy, has applied since 2 February 2025 together with Chapters I and II. It was rewritten by Regulation (EU) 2026/1744 of 8 July 2026: the obligation to ensure a sufficient level of AI literacy becomes an obligation to take measures to support its development, and the text states expressly that it does not require guaranteeing any specific level for any given individual. EUR-Lex publishes a consolidated text applicable from 27 July 2026; check the version in force on eur-lex.europa.eu. Under either wording, the training effort is expected of you, not of your provider.

## The seven points to read before sending any data

1. **The document that binds.** Look for a data processing agreement, separate from the general terms of use. If none exists for your plan, there is no Article 28, and the promise on the home page is worth nothing.
2. **Training.** One sentence matters: are your inputs and outputs used to train or improve the model, and is that behaviour off by default on your plan? The French CNIL asks organisations to consider the extent to which the provider operating the system is liable to reuse the data fed to it, and to adapt usage accordingly.
3. **Retention.** How long prompts are kept, who can read them at the provider (moderation, support), and how to have them deleted. A "variable" period is not a period.
4. **Location.** Where the processing happens, and also where the backups and logs sit. European hosting whose support team accesses data from a third country is still a transfer, with Chapter V above it.
5. **The processor chain.** The list of further processors, the commitment to notify you before adding one, and what happens if you object. Article 28 makes that authorisation a condition.
6. **The evidence.** What the provider actually agrees to show: certifications, audit reports, access logs. Article 28 provides for the necessary information and the possibility of audits; look at what the contract does with that.
7. **The exit.** How to get your content back and have the rest erased at the end of the contract, in which format and within how many days.

## What you never send

This list is decided before you subscribe, not after the first incident. The CNIL recommends framing the use of a generative AI system through internal policies or charters, listing permitted and prohibited uses, and — depending on the deployment model — prohibiting the entry of certain confidential data, for example covered by industrial and commercial secrecy, or personal data. The principle fits in one sentence: end users should only submit information they are allowed to share. It also advises harmonised, standardised prompts, which mechanically reduce the data entered.

In a small company the list fits in six lines: HR files, health data, copies of identity documents, documents under a confidentiality agreement, credentials and passwords, named client account statements. For client or employee data, the CNIL generally considers it more appropriate and more secure to favour on-premise deployment; with a programming interface (API), it notes, control of the system lies almost exclusively in the provider's hands. On the Belgian side, the Data Protection Authority's brochure on AI systems and the GDPR, published in December 2024, insists on minimisation — collecting only what is strictly necessary — and on security: encryption, strict access controls, detailed logging, regular penetration testing. It also recalls that Article 35 of the GDPR requires a data protection impact assessment (DPIA) for systematic evaluation of people based on automated processing producing legal effects or significantly affecting them, and that a DPIA is a continuous process, not a one-off exercise.

## What gets in the way in practice

**The personal account that stays open.** You sign a clean contract, and three people keep using their free account for the "not sensitive" texts. A contract only covers the accounts it covers. And the CNIL recalls that it is the user organisation that bears legal responsibility if its staff misuse AI.

**"Hosted in Europe" taken as a complete answer.** It answers point 4, and only point 4: nothing on training, retention, or who reads your prompts.

**Confusing confidentiality with accuracy.** Two different problems. The CNIL notes that these systems are liable to generate inaccurate results that can nevertheless look plausible. A tool that is flawless on data can still hand you a wrong figure; the Belgian authority recommends human oversight for high-impact decisions.

## Where to start in two weeks

Week 1: list the actual uses, personal accounts included, by asking without blame who uses what. Write the list of what you never send. Ask the provider for the processing agreement, the list of further processors, and the place of processing and backup.

Week 2: write the one-page charter — permitted uses, prohibited uses, what must be reviewed before it goes to a client. Standardise three or four prompts for frequent tasks. Plan one hour of training, and keep a record of who attended. Involve your data protection officer if you have one, and decide whether a DPIA is required.

If a clause stays ambiguous after reading — and one will — that is a point of interpretation to confirm with your legal adviser. But you will know which one, and that is no longer the same conversation.

---

*Benjamin de Bruijne is an independent digital and AI consultant in Belgium. He automates repetitive work for SMEs and puts AI where it removes a specific chore. [Automate: AI, data, CRM](/en/services/automate/).*
