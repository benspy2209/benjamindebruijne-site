---
title: "Launching a product alone: five lessons from BiblioPulse and Service-Volée"
description: "Field notes on two products launched without a team: what actually counts, the legal traps and a two-week starting plan."
date: 2026-11-19
rubrique: construire
lang: en
tags: [Construire, Produit digital, RGPD, AI Act, PME]
points:
  - "A sign-up is not a user: measure the first useful action"
  - "The most visible feature is not the one that brings people back"
  - "Mandatory website details and consent: before launch"
---

Launching a product alone means deciding everything, including what you will not do. I put BiblioPulse online in 2025 and Service-Volée into production in September 2026, with no team and without a euro of advertising.

Both are still running. Here is what they taught me, sticking to the figures already published on this site, and what I would do differently.

## What is true in 2026

Four facts frame any launch in Belgium. Three of the four cost ten minutes when handled at the start.

**A business website must identify itself.** The FPS Economy (economie.fgov.be) states that a business with a website or a social media page must display its name, its address, its contact details — at least an email address — and its enterprise number, the ten-digit number assigned on registration with the Crossroads Bank for Enterprises, beginning with 0 or 1. If the activity is subject to VAT, the VAT number must appear as well. The same service published the result of an Economic Inspectorate check: out of 2,158 websites and pages analysed, 47.7% did not mention the mandatory information on the provider's identity and 45.7% did not state the enterprise number. This is not a compliance detail for large organisations: it is the most common case.

**People must be informed at the moment you collect.** Regulation (EU) 2016/679 (official text on eur-lex.europa.eu) requires, in its **Article 13**, that the information be provided "at the time when personal data are obtained" where the data come from the person themselves: the identity and contact details of the controller, the purposes and legal basis, the recipients or categories of recipients, the retention period, the person's rights. Its **Article 12(1)** adds the form: concise, transparent, intelligible, easily accessible, in clear and plain language. Written before sign-ups open, that page costs half a day; written afterwards, it costs a rework of the whole journey.

**An account created is not a customer.** The CNIL (cnil.fr) states that email marketing to individuals requires, in principle, prior consent that is freely given, specific, informed and unambiguous: a positive action, for instance a dedicated box that is not pre-ticked, acceptance of general terms not being enough. It spells out the point most often missed: the exception allowing messages to existing customers about similar products or services cannot be relied on where no sale or service has taken place, including where the person has created an online account. The CNIL also states that addresses collected from public areas of the web must not be used for marketing. This is a French authority: for your own case, confirm the point of interpretation with your counsel or with the Belgian authority.

**If the product contains a chat, it must introduce itself.** Regulation (EU) 2024/1689 on artificial intelligence has applied since 2 August 2026 and requires, in its **Article 50(1)**, that systems intended to interact directly with people be designed so that those people know they are interacting with an AI, unless this is obvious to a reasonably well-informed and observant person. The information must be clear, distinguishable, and given at the latest at the time of the first interaction. One nuance, written as it stands: the Commission is preparing guidelines on the practical application of Article 50, and the transitional deadline for marking generated content (paragraph 2) differs across published documents; check the status in force on eur-lex.europa.eu.

## The five lessons

1. **A sign-up is not a user.** The published figures for BiblioPulse: 378 registered users, 4,800 books catalogued by 172 readers. Fewer than one registered user in two has scanned a book. That is not a failure: it is the measurement that counts. Define your product's **first useful action** — a book scanned, a profile opened, a quote sent — and instrument that one. The sign-up counter says nothing, because it climbs even when the product serves no one.

2. **The most visible feature is not the one that brings people back.** BiblioPulse tells its story through barcode scanning linked to the ISBNdb catalogue and its 44 million references. What readers talk about is duplicate detection and the shareable reading pile. Service-Volée tells its story through volume: more than 76,000 player profiles and more than 300,000 matches indexed from the federation's public data. What people ask me about is the ranking projection and the mobile match counter. The feature that makes the promise and the one that brings people back are rarely the same. Do not cut the second to polish the first.

3. **Measuring costs less than asserting.** The Observatory queried four AI models with frozen prompts across entire populations: 488 accountants in the Namur area, 382 plumbers in the Namur area, 798 accountants in Walloon Brabant, that is 1,668 companies. Every name cited was matched against the official register and classified by hand. Published result: 96.9%, 98.4% and 96.6% invisibility. Total cost of the three campaigns: less than five euros of API usage. A reproducible protocol — same questions, same models, exhaustive sample, written limitations — beats a conviction, and fits the budget of a solo launch.

4. **Invisible debt is paid off with a dated audit.** On BiblioPulse, the full audit of August 2026 cut the weight of the initial page load by thirty. Nothing had "broken": the page had simply grown heavy, one addition after another, and no one had measured it. Put the audit in the calendar before you need it. In the same spirit, the most useful decision is sometimes a feature you refuse: the monetisation planned for BiblioPulse goes through affiliation, without selling readers' data.

5. **Plumbing first, promotion second.** What is hard to retrofit: API keys protected server-side, static pre-rendering for search engines, an installable app, your own domain name, a scheduled crawl that does not hammer the source, automated welcome emails and the legal pages. What is easy to retrofit: the design, the home page wording, the order of the features. I reversed the two once; I will not do it again.

## What gets in the way in practice

**The sign-up counter is too pleasant to look at.** It climbs, it gets shared, it proves nothing. Replace it in the first week with two numbers: how many people performed the first useful action, and how many did it again seven days later.

**The welcome email goes out before it is allowed.** This is the most common trap of a free product: an account created, an onboarding sequence that starts, and marketing with no basis. Separate two things technically at sign-up: the messages needed to run the service, and the commercial messages, the latter behind a box unticked by default.

**"The legal pages, we'll deal with them at launch."** They never get dealt with, because at launch there is always something else. The Economic Inspectorate's figures show how widespread this is. Write them while the product has no users yet: that is the only moment when the information page is easy to draft.

## Where to start: two weeks

**Week 1.** Write the sentence that defines the first useful action, and check that you know how to count it. Put the mandatory details in the site footer: name, address, email, enterprise number, VAT if you are liable for it. Draft the information page in the order of Article 13: who, why, on what basis, who receives the data, for how long, which rights.

**Week 2.** Separate sign-up from commercial consent, with an unticked box and an unsubscribe link in every send. Test a restore from backup, not just the backup. If the product contains an assistant or a chat, write the notice stating that it is an AI and place it before the first interaction. Set the date of the first performance audit now, six months out.

After two weeks, the product will not have more users. It will have a measurement that means something and two traps defused: exactly what most solo launches are missing.

---

*Benjamin de Bruijne is an independent digital and AI consultant in Belgium. He builds websites, business applications and products, and delivers them to production. [Astérisme: design and deploy](https://asterisme.ai/).*
