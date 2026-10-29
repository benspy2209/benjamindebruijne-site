---
title: "Taking over a no-code or AI-generated project: six checks before production"
description: "Ownership, secrets, access, backups, dependencies, compliance: the six checks before you put a no-code or AI prototype into production."
date: 2026-10-29
rubrique: construire
lang: en
tags: [Construire, No-code, IA, Production, RGPD]
points:
  - "A prototype demonstrates, production commits you"
  - "A backup never restored is not a backup"
  - "Six checks before you open the tool to your teams"
---

A company owner shows me his tool on his phone: a site-works tracker built over three weekends with an AI generator, and it works. Then comes the question that changes everything: "can I open it to my twenty technicians on Monday?"

The prototype did its job: it proved the idea holds, in a few days, for almost nothing. Putting it into production is a different exercise. The moment real people put real data into it, the tool stops being a demonstration and becomes a commitment. Here is what I check, in this order, before saying yes.

## What is true in 2026

None of what follows depends on how the code was written: no-code, AI generator or in-house development, the obligations land on the company that uses it.

**Personal data.** As soon as there are customers, employees or contacts in there, Regulation (EU) 2016/679 — the GDPR — applies, and it applies to you as controller. The text on eur-lex.europa.eu is precise on the points that concern a production launch. **Article 32** lists the expected security measures: confidentiality, integrity and resilience of systems, but also "the ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident", and regular testing of their effectiveness. **Article 28** requires a written contract, including in electronic form, with anyone processing that data for you: subject matter, duration, nature and purpose of the processing, types of data and categories of data subjects, deletion or return of the data at the end of the service, and no further processor without prior written authorisation. **Article 33** sets notification of a breach to the supervisory authority "without undue delay and, where feasible, not later than 72 hours" after becoming aware of it, unless the breach is unlikely to result in a risk — and it is up to you to demonstrate that. **Article 30** adds a record of processing activities; according to the official EUR-Lex summary, SMEs are not required to keep one unless the processing is regular or risky for people's rights. On a specific case, have it confirmed by your counsel.

**Trackers.** The Belgian Data Protection Authority states, on its "Cookies and other trackers" page and in its checklist published in 2023, that no cookie that is not strictly necessary may be placed or read before consent, that this consent must be prior, free, specific, informed, active and withdrawable, and that there is **no exemption for audience-measurement cookies**, even first-party ones. Continued browsing does not count as consent. Yet many prototypes ship with an analytics script by default.

**What the site must display.** The Belgian FPS Economy lists the information a company website must show: company name, registered address, email address, a phone number if the site allows a distance contract to be concluded, the **enterprise number** registered with the Crossroads Bank for Enterprises, and the VAT number if the activity is subject to VAT. Its 2024 inspection of 2,158 websites and social media pages found the enterprise number missing in 45.7% of cases. That takes ten minutes to fix.

**Ownership.** On creations made in the context of a working relationship or on commission, the FPS Economy advises settling ownership of the rights by contract, for legal certainty, including where the law already governs the situation. That is a recommendation, not an obligation, and it targets exactly our case.

## The six checks, in order

1. **Ownership and access.** Who owns the code, the data, the domain name, and under which account? I ask to see the code repository and who can write to it, the hosting account, the domain registrar, the database account. The classic case: everything lives under the personal account of whoever built the prototype. Nothing has been stolen, but nothing is yours. The accounts move to the company's name, with two administrators.
2. **Secrets and keys.** A prototype puts its API keys wherever is convenient: in the code sent to the browser, in a public configuration file, in the repository history. The test: open the page source and search for "key", "token", "secret". Whatever shows up is compromised, so it is to be regenerated, not hidden. After that, keys live in environment variables, each scoped down to what it has to do.
3. **Access rights and data separation.** The question is not "do we need a password" but "who sees what". In a prototype, the logged-in user sees everything, because that was the simplest option. In production, each record belongs to someone, and the filter must be applied server-side, never only in the display. The test: log in with a test account, change the identifier in the address, and see whether you reach your neighbour's file.
4. **Backups, restored at least once.** A backup no one has ever restored is not a backup, it is an intention. Article 32 speaks of restoring access and of regular testing; the operational translation fits in four written answers. How often do we back up? How long do we keep the copies? How long does a full restore take? When did we last do one? Do it once with a witness, note the duration, repeat every six months.
5. **Dependencies and the real cost.** A generated project arrives with dozens of third-party libraries, frozen at a given moment. Three things to know: which versions are installed, which ones have a known vulnerability, who will apply the updates in six months. Same logic for the bill: a prototype costs zero because nobody uses it. With twenty daily users, hosting, the database, storage and calls to an AI model become a budget line. Estimate it on your expected volume before opening, not after the first invoice.
6. **Who answers when it goes down.** Not a maintenance contract: a name, a number, a stated response time, and what that name can do — reach the logs, redeploy a previous version, restore a backup. If you cannot write that name down, the tool is not ready for twenty people, whatever the quality of the code.

## What blocks in practice

**"It works" was measured on ten clean rows.** The prototype was fed by the person who built it, with well-formed data. Before opening, load fifty real files, the ugliest ones: empty fields, duplicates, eight-megabyte attachments. That test is what reveals the holes, not the demonstration.

**The project has no owner on the company side.** An internal tool with no one in charge of saying what goes in and what waits drifts within three months: everyone asks for their feature, no one decides. Appoint a person, even at 10% of their time.

**The temptation to rewrite everything.** The reflex is common when facing generated code: start again from scratch, cleanly. It is often the worst calculation: you lose what the prototype taught you and you pay for six more months. The order that works: secure the six checks above, open to a small group, and rewrite only the parts that usage points to.

## Where to start, in two weeks

**Week 1: take back control.** Inventory of the accounts and transfer to the company. Regeneration of any secrets found in clear text. Access-rights test with two test accounts. First backup restore, timed.

**Week 2: make the tool sustainable.** Mandatory website information and a compliant consent banner. Article 28 contract with the host and any provider touching the data, record of processing where required. A written breach procedure, with the 72-hour reflex. Monthly cost estimated at the expected volume. Name and response time of the person who answers.

Then, and only then, the gradual opening: three users, then ten, then everyone. I have followed this sequence on my own products, including Service-Volée, in production since September 2026. It is always check 4 that holds the surprise: the first restore takes longer than expected. Better to learn that on a Tuesday morning than on the day it is needed.

---

*Benjamin de Bruijne is an independent digital and AI consultant in Belgium. He builds websites, business applications and products, and delivers them to production. [Astérisme: design and deploy](https://asterisme.ai/).*
