---
title: "Source Verification Across Tiers: How an AI Incident Beat Actually Vets a Claim"
description: "The five-tier source ladder used to verify AI security incidents, with worked examples of when a single tweet was enough and when ten reposts still weren't."
pubDate: 2026-05-08
author: "Theo Voss"
tags: ["methodology", "source-verification", "journalism", "incident-tracking"]
category: "news"
sources:
  - title: "AI Incident Database (Partnership on AI)"
    url: "https://incidentdatabase.ai/"
  - title: "OECD AI Incidents Monitor"
    url: "https://oecd.ai/en/incidents"
  - title: "Reuters Trust Principles"
    url: "https://www.thomsonreuters.com/en/about-us/trust-principles.html"
schema:
  type: "Article"
heroImage: https://aisec-imagegen.th3gptoperator.workers.dev/featured/aiincidents.org/source-verification-across-tiers.png
heroAlt: "Source verification tier ladder for AI security incidents"
---

The thing that separates a serious AI security publication from an aggregator is not what it covers — it's what it refuses to publish, and why. The decision rule is the source ladder. This post walks through ours.

## The ladder, in one paragraph

We rank sources in five tiers. Tier 1 is primary (vendor [advisory](https://ai-alert.org/), court filing, regulator action, peer-reviewed paper). Tier 2 is established secondary (Reuters, Bloomberg, KrebsOnSecurity, 404 Media, The Markup) where a reporter has independently verified. Tier 3 is specialty secondary (AI-focused publications, named researcher disclosures). Tier 4 is user reports (individual accounts, triangulated). Tier 5 is speculation and aggregator content. We publish only when we have at least one Tier 1–2 source, except in narrow Tier 3-only cases marked as `verification: partial`.

## Tier 1 — Primary

These are the events themselves, not reports about them.

- **Vendor advisories**: a security disclosure published by the model provider on its own domain, signed by its security team. Anthropic's `anthropic.com/news`, OpenAI's `openai.com/index/disclosures`, Google's VRP advisories.
- **Court filings**: PACER documents, EU court records, regulator complaint dockets. Filings are not findings — a complaint alleges, it does not prove — but the document itself is primary.
- **Regulator actions**: FTC consent orders, EU AI Office decisions, UK ICO enforcement notices, NIST guidance. These have legal weight.
- **Peer-reviewed disclosures**: a paper at USENIX Security, S&P, NDSS, AAAI Safe AI workshop, or AI Village proceedings, where the affected vendor has been notified.

If we have one Tier 1 source, we publish. That's it.

## Tier 2 — Established secondary

Reporting from publications with a track record of verification. We treat Reuters' AI security desk, Bloomberg, the Wired security beat, KrebsOnSecurity, 404 Media, and The Markup as Tier 2 when the reporter has named primary sources and includes a date of verification. The newsroom's editorial standards stand in for our own where we can't independently reach the source.

The trap here is reading an AI-summarized version of a Reuters story on an aggregator and treating it as Tier 2. The summary is Tier 5. We cite Reuters directly or we don't cite at all.

## Tier 3 — Specialty secondary

This is where most AI-specific incidents live, and where editorial judgment does the most work.

- **AI-specific publications** with named editors and a corrections page (rare, but they exist).
- **Named researcher disclosures** on platforms with stable identity (institutional pages, lab-affiliated blogs, signed PGP posts).
- **Vendor blog posts that are not technically advisories** — a write-up that doesn't go through the security team's process but is published under a real engineer's name.

A Tier 3 source on its own is enough only when combined with a Tier 4 corroboration or a partial Tier 1 (e.g., the vendor confirmed in passing on a podcast). When we publish from Tier 3 alone we flag the entry `verification: partial`.

## Tier 4 — User reports

Individual users describing things. A single Twitter thread is not enough. A pattern across multiple independent accounts — different geographies, different timestamps, different framings of the same outcome — can be enough to publish a watch-this-space entry while we work toward Tier 2.

Watch-this-space entries are clearly labeled. They don't get a permanent slot until they level up to Tier 2.

## Tier 5 — Don't

AI-summarized news posts. Anonymous Reddit claims. Unverified screenshots. SEO-farmed listicles. The Slack screenshot with no headers. We do not link to Tier 5 sources even to debunk them — citing them is a signal-boost.

## Two worked examples

**Single tweet, published.** In April 2026, a named security engineer at a top-three model provider posted a thread describing a deserialization bug in their fine-tuning ingest path. The thread included a hash of the affected commit and named the patch. We confirmed the patch existed in the vendor's public release notes (Tier 1 corroboration) and ran the entry the same day. One Tier 4 source plus one Tier 1 corroboration met the bar.

**Ten reposts, not published.** A month earlier, a viral claim circulated that an open-source model had been distributing weights with embedded credentials. Ten secondary outlets ran it. None of them had reached the original poster. The HF repo in question had been removed before any reporter examined it. We waited. The story turned out to be a misread of a config file. We never ran it.

## What "verification" actually means

It is not the same as "true." It is the documented process by which we satisfied ourselves the claim is supported by the strongest available evidence. Verification is reproducible: a reader looking at our cited sources should be able to recover the same conclusion without trusting us.

When we get verification wrong, we issue a correction with a visible diff and a process note describing what changed in our pipeline.

## Cross-references for readers

For the broader methodology this ladder slots into, see our [incident logging methodology](/posts/ai-incident-logging-methodology/). For the editorial standard applied in the weekly cycle, see [how AI Sec Weekly works](https://aisecweekly.com/posts/weekly-digest-format-template/). For detection-side coverage when an incident has mitigation implications, the defensive cluster's [MITRE ATLAS-mapped runbooks at sentryml.com](https://sentryml.com/) are the standing reference.

## Why this matters

The AI security beat is fast. Models change in days. Tools ship in weeks. Aggregators race to publish. A reader trying to understand whether a thing actually happened — or whether they should patch on Monday — needs a publication that does the verification work and shows it. The ladder is the work.
