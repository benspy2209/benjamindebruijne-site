---
title: "Following up with prospects by email without landing in spam"
description: "B2B legal basis, a thirty-day cadence, SPF, DKIM and DMARC: run email follow-up as a process, not as a show of pressure."
date: 2026-11-10
rubrique: automatisation
lang: en
tags: [Automatisation, Prospection, RGPD, Délivrabilité, Belgique]
points:
  - "Follow-up is a process, not a show of pressure"
  - "In B2B: say where the data came from, make refusal easy"
  - "Measure replies, never opens"
---

A freelancer showed me his sent folder: forty quotes in three months, two follow-ups in total, and this sentence to wrap it up — "chasing people makes you look like a beggar". His reply rate was indeed low. His conclusion was wrong.

Email follow-up almost always fails for two reasons that have nothing to do with sales nerve. A legal reason: addresses whose origin nobody can trace any more, and no simple way to say stop. A technical reason: polite emails that never arrive, because the sending domain is not authenticated. Both are settled once and for all.

## What is true in 2026

**The European principle is consent, with exceptions.** Directive 2002/58/EC of the European Parliament and of the Council of 12 July 2002 devotes its Article 13 to unsolicited communications: sending electronic mail for the purposes of direct marketing is subject to the recipient's prior agreement. Its paragraph 2 opens an exception, under conditions, for contact details obtained from one's own customers in the context of a sale. The same article requires Member States to protect the legitimate interests of legal persons.

**Writing to a professional does not exempt you from the GDPR.** In its judgment of 13 November 2025 (case C-654/23, *Inteligo Media*), the Court of Justice of the European Union held that where a controller uses a user's email address to send them an unsolicited communication, the lawfulness conditions of Article 6(1) of Regulation 2016/679 (GDPR) apply. "It's B2B" is therefore not a legal basis.

**The Belgian Data Protection Authority (APD) has rewritten its doctrine.** Its recommendation 01/2025 replaces recommendation 01/2020 of 17 January 2020, following a public consultation open from 10 March to 10 May 2025. The APD recalls that the GDPR does not impose a single legal basis for direct marketing — the two most common being consent and legitimate interest — and that no presumption works in its favour in the balancing test: it is up to the controller to demonstrate that its interests prevail, and that this remains true over time.

**On the technical side, the standard changed status this year.** DMARC, the mechanism that tells receiving servers what to do with a message that fails authentication, had been an "informational" document since 2015 (RFC 7489). It is now specified by RFC 9989, published in May 2026 on the Standards Track, which obsoletes the previous one, together with RFC 9990 for aggregate reports and RFC 9991 for failure reports.

One caveat: the directive is European, its Belgian transposition lives in the Code of Economic Law, and I do not cite a specific Belgian article here for want of a dated official reference. Have the applicable text confirmed by your own counsel.

## The legal basis, plainly

Three situations, three answers.

- **A consumer** who asked you for nothing: prior agreement, full stop. That is opt-in, which the French data protection authority (CNIL) frames the same way for business-to-consumer advertising.
- **An existing customer**: you may reuse the address obtained during the sale, for similar products or services, under the conditions of Article 13(2) — including the possibility of refusing, offered at collection and in every message.
- **A professional prospect**: prospecting may rest on legitimate interest. The CNIL sets the conditions: the subject of the solicitation must relate to the profession of the person contacted (its example: software presented to an IT director), the person must be informed of the origin of their data and of the purpose of the message, and must be able to object simply. A generic address such as `contact@` or `info@` does not require agreement, subject to the same conditions.

In all three cases the right to object is the same, and it is absolute. Article 21(2) of the GDPR allows objection at any time to processing for direct marketing, including related profiling, with no justification needed; paragraph 4 requires that this right be explicitly brought to the person's attention at the latest at the time of the first communication, clearly and separately from any other information; recital 70 adds: at any time and free of charge. The APD's direct marketing checklist turns this into practice: objection presented clearly in every communication, exercisable channel by channel, a single click for digital channels. Its Litigation Chamber has sanctioned the opposite: decision 71/2022 finds breaches of Articles 12.2, 21.2, 21.3 and 21.4 where objection is not facilitated.

## The cadence: four messages, thirty days

1. **Day 0, the useful message.** The quote, the proposal, the answer to a request. It carries your identity, the origin of the data if the contact is cold, and the unsubscribe link.
2. **Day 3, the short follow-up.** Three lines, a single closed question: "does this scope match what you expected?". No attachment.
3. **Day 10, the addition.** You add something: a clarification on a deadline, a variant of the scope, a point the person had not raised. Never a reminder of the reminder.
4. **Day 30, the close.** "Without a reply by Friday, I'll file the case." That is the message that gets the most replies, and the only one that respects the silence on the other side.

Then you stop. And you keep the trace: send date, channel, content, objections received, in a single place that every tool reads. An objection honoured in one tool and forgotten in another is not honoured.

Automation takes on the clock, the sending, the trace and the unsubscribe. Not the writing of the Day 10 message, which depends on the case.

## The technical part, once and for all

Three records in your domain's DNS, two headers in your messages.

- **SPF** (Sender Policy Framework, RFC 7208, April 2014) publishes which hosts are authorised to send mail for your domain.
- **DKIM** (DomainKeys Identified Mail, RFC 6376, September 2011, now standard STD 76) places a cryptographic signature on the message, with the validation key published in the DNS.
- **DMARC** (RFC 9989) authenticates nothing by itself: it builds on SPF and DKIM, requires alignment with the domain of the `From` header, then expresses the domain owner's policy. Its `p` tag takes three values — `none`, `quarantine`, `reject` — and a valid record without a `p` tag is treated as `p=none`. The RFC advises starting at `p=none`, reading the aggregate reports, then moving to `quarantine` before considering `reject`.
- **One-click unsubscribe** is specified by RFC 8058 (January 2017): a `List-Unsubscribe` header containing an HTTPS URI, a `List-Unsubscribe-Post` header containing exactly `List-Unsubscribe=One-Click`, both covered by a valid DKIM signature.

## What blocks in practice

**The bought list.** You do not know where the addresses come from, so you cannot inform the person of their origin: the obligation cannot be met. Two hundred addresses collected by hand, with their source alongside, are worth more than ten thousand with no history.

**Jumping straight to `p=reject`.** A strict policy published before reading the aggregate reports cuts off your own mail: invoices from the accounting software, messages from the website form, the newsletter sent from another tool. The RFC recommends gradual escalation, and even reminds receiving servers not to reject a message on the strength of a `p=reject` alone.

**The open rate.** An open is nothing more than an image loaded from your server: it depends on the mail client and its settings, not on the person's interest. Three numbers decide something: replies, meetings, unsubscribes and complaints. If the third one rises, stop: that is not a setting to fix, it is a message to rewrite.

## Where to start, in two weeks

**Week 1.** Inventory: for each contact, two columns — where the address came from, on what basis you are writing. Anything that does not fill both leaves the list. Write the four messages once and for all. Publish SPF, DKIM and DMARC at `p=none`, and read the aggregate reports while the list is being cleaned.

**Week 2.** Run it on twenty contacts, not two thousand. Record the replies, honour every objection within twenty-four hours, then move DMARC to `quarantine`. By the end of the month you will know whether the problem was the follow-up or the offer — and you will no longer wonder whether your emails arrive.

---

*Benjamin de Bruijne is an independent digital and AI consultant in Belgium. He automates repetitive work for SMEs and puts AI where it removes a specific chore. [Astérisme: AI inside your processes](https://asterisme.ai/).*
