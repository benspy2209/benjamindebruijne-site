---
title: "Company website: seven settings nobody makes, and that matter"
description: "Domain name, HTTPS, backups, legal notices, cookies, measurement, speed: seven company-website settings and their official sources."
date: 2026-11-26
rubrique: construire
lang: en
tags: [Construire, Site web, RGPD, PME, Belgique]
points:
  - "The domain name must be registered to the company"
  - "A backup you have never restored is not a backup"
  - "In Belgium, audience measurement needs consent"
---

A company website always ends up running on its own. It is live, it looks like what was signed off, nobody touches it any more — and that is exactly where the problems settle in, quietly, for two years.

Seven settings come up on every site I take over. None of them takes more than an hour. It is always the same ones that are missing.

## What is true in 2026

**A website is no longer a project, it is a piece of equipment.** Statbel (statbel.fgov.be, ICT survey of enterprises) reports that nine out of ten Belgian enterprises have a website to present their activities and services. So the question is no longer "do we need a website", but "who looks after its settings".

**The site has to identify the company.** The FPS Economy (economie.fgov.be) states that a company website must show its name, its address, its contact details — at least an email address — and its enterprise number, the ten-digit number assigned on registration with the Crossroads Bank for Enterprises. The VAT number is added if the activity is subject to VAT, and a phone number if the site allows distance contracts to be concluded with consumers. The part that gets forgotten: this information must be easy to find and permanently accessible. An orphan page with no link to it does not meet the condition.

**Non-essential cookies require prior consent.** The Belgian Data Protection Authority (autoriteprotectiondonnees.be) states that consent must in principle be obtained **before** any cookie that is not strictly necessary is placed, after informing the user of the controller's identity, the purposes, the data collected and the lifespan of the cookies. That consent must be free, given purpose by purpose, and active: continuing to browse, closing a banner, pre-ticked boxes and accepting terms and conditions do not amount to consent, and "cookie walls" are considered non-compliant. The point most often missed: the DPA takes the view that there is no exemption for audience-measurement cookies, even when the site places them itself.

**Backing up is not the obligation; being able to restore is.** Regulation (EU) 2016/679 (official text on eur-lex.europa.eu), in **Article 32(1)**, requires appropriate measures and lists at point (c) "the ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident", then at point (d) a process for regularly testing, assessing and evaluating the effectiveness of those measures.

**If you sell online, accessibility is now in scope.** Directive (EU) 2019/882 (eur-lex.europa.eu) applies to services provided to consumers after 28 June 2025, subject to the exceptions in its Article 32. For e-commerce, Annex I provides among other things that identification, security and payment functions be perceivable, operable, understandable and robust. A nuance to write down as such: microenterprises providing services are exempt, and the practical application goes through national transposition; check what concerns you on eur-lex.europa.eu and with your legal adviser.

## The seven settings

1. **The domain name is registered to the company.** The declared holder must be the company, not a supplier, not a former intern. The domain's contact address must be a generic company address, not the inbox of someone who may leave. Auto-renewal switched on, expiry date in the shared calendar. The FPS Economy also warns about fraudulent canvassers who charge companies abusive prices for domain names, waving the threat that a third party will buy the name.

2. **HTTPS across the whole site, not only on the form.** In its practical GDPR guide on personal data security, the French data protection authority (CNIL, cnil.fr) recommends TLS 1.3, failing that TLS 1.2, dropping SSL as obsolete, making TLS mandatory on every authentication page, every form and every page that displays personal data, and forcing HTTPS through HSTS. That is a guide making recommendations; the obligation itself remains the general wording of Article 32. The concrete trap: one image called over `http://` inside a page served over `https://`, and the browser flags mixed content.

3. **A backup you have already restored.** Until the restore has been done, you have a file, not a backup. Restore it for real, on a separate environment, and write down two numbers: how long it took, and what was lost between the last copy and the simulated incident. Keep one copy outside the account that hosts the site: otherwise a compromised access takes the site and its backups together.

4. **The mandatory notices in the footer of every page.** Name, address, email, enterprise number, VAT if applicable, phone number if you conclude distance contracts with consumers. In the footer, because the condition is to be easy to find and permanently accessible. Ten minutes of work, and it is the most ordinary failing there is.

5. **The privacy information, written before the form.** A contact form collects personal data. The page that goes with it says who is responsible, why, on what basis, who the data goes to, how long it is kept, and which rights apply. The "who to" is the one people rush: the host, the email tool and the measurement tool are recipients, and each has to be covered by a processing agreement.

6. **One useful number, and the consent that goes with it.** Pick an indicator that decides something — contact requests per week, quotes sent — rather than a visit count, which goes up even when nothing happens. Then decide with your eyes open: either measurement sits behind compliant consent, or you do without a tracker. In Belgium, the DPA's position leaves no comfortable third way. And if many visitors refuse, your figures are partial: write that next to the figure.

7. **Speed, measured on a phone and a slow network.** A site does not become slow all at once: it gets heavier one addition at a time, and nobody measures it. On BiblioPulse, the full audit of August 2026 cut the initial load weight thirty-fold — nothing had "broken", the page had simply grown. Set a weight ceiling for the home page and count the third-party scripts: each one is both weight and one more recipient of data.

## What gets in the way

**"The site is with the supplier."** That sentence hides five separate accounts: the domain registrar, the hosting, the DNS zone, the certificate, the measurement and email tools. Make the list now, not when you change supplier: by then, the discussion is no longer a technical one.

**The cookie banner bolted on top.** A banner tool installed in twenty minutes, while the measurement script stays loaded in the page header and fires before the click. The banner is reassuring, the cookie has already been placed. Open the browser inspector and look at what goes out before you have clicked anything.

## Where to start: two weeks

**Week 1.** Inventory the accounts — registrar, hosting, DNS, certificate, measurement, email — with the holder and expiry date of each. Put everything that should be in the company's name back in the company's name, on a generic address, with auto-renewal. Check HTTPS across all pages. Put the mandatory notices in the footer.

**Week 2.** Restore a backup for real and note the date, the duration and what was lost. Check that no non-essential tracker is placed before the click, and that refusing is as easy as accepting. Write the privacy information in order: who, why, on what basis, to whom, for how long, which rights. Pick your useful number and measure the home page on a phone.

"We'll redo the site next year" turns a ten-minute setting into eighteen months of exposure: these seven points survive a redesign, they depend neither on the design nor on the technology. After two weeks, the site will not look any different. It will have a clear owner, a proven backup, compliant notices and a number that means something. That is the difference between a site you own and a site you put up with.

---

*Benjamin de Bruijne is an independent digital and AI consultant in Belgium. He builds websites, business applications and products, and delivers them to production. [Astérisme: design and deploy](https://asterisme.ai/).*
