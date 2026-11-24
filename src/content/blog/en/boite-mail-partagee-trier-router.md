---
title: "Shared inbox: let an LLM sort it, let a human reply"
description: "Letting an LLM sort and route a shared inbox without letting it reply: categories, GDPR, error rate and the real limits."
date: 2026-11-24
rubrique: automatisation
lang: en
tags: [Automatisation, PME, Belgique, RGPD, Email]
points:
  - "AI sorts and routes, a person replies: the baseline rule"
  - "Five categories at most, written before any wiring"
  - "Never auto-send: a draft first, then human validation"
---

An accounting practice of six people receives around a hundred messages a day on a single generic address. Every morning, someone spends forty minutes reading, sorting and forwarding them — and two or three important requests still slip under the radar until the next day.

The question that follows is always the same: can an AI manage that inbox? My answer fits in one sentence: it can sort and route it, not manage it. That is not a vocabulary nuance, it is the line between a real time saving and a customer incident.

## What is true in 2026

**Looking at a work inbox is regulated, even when the address is generic.** The Belgian Data Protection Authority (APD), on its page about electronic monitoring of internet and email, recalls that an employer may monitor the electronic communications made with the resources provided for work, but while respecting the right to privacy and the secrecy of correspondence. Three principles apply: purpose, proportionality, transparency. The worker must be informed of any monitoring and of how it is carried out. The APD also states that it does not accept the worker's consent as a legal basis, because of their position of subordination. Recommendation no. 08/2012 of the former Privacy Protection Commission adds that, since an inbox may always contain non-professional information, it is preferable to go through an intermediary person of trust rather than read the content of messages directly.

**The model provider is a processor, not a neutral tool.** Article 28 of Regulation (EU) 2016/679 (GDPR) requires that processing by a processor be governed by a contract or another legal act setting out the subject matter, duration, nature and purpose of the processing, the type of data and the categories of data subjects. The processor only processes data on documented instructions from the controller, does not engage another processor without prior written authorisation, and only transfers data to a third country on documented instructions.

**And the authority that has spoken most concretely about using a large language model (LLM) advises sending it as little as possible.** In its questions and answers on the use of a generative AI system, France's CNIL recommends being particularly careful about the data submitted to the system, avoiding the entry of personal data as far as possible. It recalls that it is the user organisation that bears responsibility in the event of misuse by its staff, hence the need to train users on the limits of the system and on authorised uses. It also notes that a drafting assistant for employees carries fewer risks than a decision-support system aimed at customers or candidates.

## Sorting is not replying

Two jobs hide behind "managing the inbox". Sorting means reading a message and attaching a label plus a destination. Replying means committing the company.

Article 22 of the GDPR draws the line: a person has the right not to be subject to a decision based solely on automated processing which produces legal effects concerning them or significantly affects them. Derogations exist — explicit consent, contractual necessity, legal authorisation — and then require safeguards, including the right to obtain human intervention and to contest the decision.

Forwarding a message to the right colleague is not a decision of that kind. Automatically sending a rejected application, a refusal of coverage or a dismissed complaint is. The method below is built to stay on the right side of that line.

## The method, step by step

1. **Write the categories by hand, before any tool.** Five at most, plus an "other" category you own. For the practice: new enquiry, question from an existing client, document received for filing, invoice or payment, cold outreach. If you cannot write a category's definition in one sentence, it does not exist yet.

2. **Measure the inbox before touching it.** Two hundred real messages, labelled by hand, one afternoon. That file becomes your reference: without it, there is no way to say whether the automatic sorting is good.

3. **Decide what leaves the inbox.** The purpose limitation and data minimisation principles, in Article 5 of the GDPR, require data to be limited to what is necessary in relation to the purpose. To sort, the subject line and the first few lines are usually enough. Not the whole thread, not the attachments, not twelve exchanges of history.

4. **Wire up the sorting, not the sending.** The model produces a label, a destination and a confidence level. Below the threshold, the category is "other" and the message goes to a human. Sorting that hesitates must be visible, not smoothed over.

5. **A draft, never a send.** For one or two categories where the answer is standard, the model prepares a draft in the inbox. A person reads it and sends it. The time saving is real and it creates no unreviewed commitment.

6. **Log it and announce it.** One log line per message: identifier, proposed category, destination, any human correction. And a written note to the team saying what the machine reads, why, and who can consult it. That is exactly what the transparency principle recalled by the APD requires.

## Measuring the error rate

Two numbers are enough, and they are not worth the same.

The first is the wrong-label rate: how many messages did not get the label you would have given. The second is the only one that costs money: how many important messages were filed as cold outreach or as documents to file. A quote request sent to the wrong place costs you; a badly filed piece of cold outreach does not.

Record both numbers every week for a month, then every month. And set the threshold at which you stop in advance: if, after two rewrites of the categories, more than one message in twenty goes to the wrong place, the problem is not the model, it is the categories.

## What gets in the way in practice

**Categories that are judgements.** "Important" and "urgent" are not categories, they are conclusions. Rewrite them as observable facts: "contains a due date", "comes from an unknown address", "mentions an amount".

**Automatic sending that creeps back in.** Three weeks after go-live, someone enables an automatic reply "just for confirmations". A confirmation that announces a lead time or a price is a commitment. The rule to write down once and for all: the machine never sends a message containing an amount, a committed date or a refusal.

**The inbox that contains more than work.** A generic address receives job applications, medical certificates, private messages sent to the wrong place. The CNIL recalls that processing sensitive data must fall under an exception in Article 9.2 of the GDPR — in other words, this is not a configuration detail. The practical answer is simple: take those flows out of the generic inbox, give them their own address, and do not run them through the model. For the interpretation of your own case, confirm with your counsel or your data protection officer.

## Where to start in two weeks

**Week 1 — the inbox on paper.** Export two hundred messages, label them by hand, write the five categories. Draft the note to the team. And ask your provider three questions, in writing: where the data is processed, which sub-processors are involved, how long the requests are kept. No written answer, no wiring.

**Week 2 — sorting in dry run.** The model sorts but routes nothing: it writes its label in a corner and you compare it with yours for five days. After those five days, enable routing for the two most reliable categories only. The others stay manual until the following month.

At the end, you should hold one page: the categories, what leaves the inbox, who validates what, where the log is, and the date of the next review. The day someone asks what the AI does to the info@ inbox, that page is the answer.

---

*Benjamin de Bruijne is an independent digital and AI consultant in Belgium. He automates repetitive work for SMEs and puts AI where it removes a specific chore. [Astérisme: AI inside your processes](https://asterisme.ai/).*
