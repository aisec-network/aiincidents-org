---
title: "How We Log AI Security Incidents: Source Verification, Dating, and What Doesn't Make the Cut"
description: "The methodology behind AI Incidents — how we verify sources, date-stamp claims, and decide what's news vs noise in the AI security incident beat."
pubDate: 2026-05-07
author: "Theo Voss"
tags: ["methodology", "journalism", "incident-tracking", "ai-incidents", "source-verification"]
category: "news"
sources:
  - title: "AI Incident Database (Partnership on AI)"
    url: "https://incidentdatabase.ai/"
  - title: "OECD AI Incidents Monitor"
    url: "https://oecd.ai/en/incidents"
  - title: "MITRE ATLAS Case Studies"
    url: "https://atlas.mitre.org/studies/"
schema:
  type: "Article"
heroImage: https://aisec-imagegen.th3gptoperator.workers.dev/featured/aiincidents.org/ai-incident-logging-methodology.png
heroAlt: "AI incident reporting methodology"
---

When a reader trusts an incident publication, what they're actually trusting is the methodology behind the headlines — the editorial decisions about what to publish, what to verify, and what to leave out. That methodology should be visible. This post is ours.

## What counts as an AI security incident

We classify an event as an AI security incident if it meets at least two of these criteria:

1. **AI-system-mediated harm**: the harm flows through the behavior of an ML model or LLM, not just from a system that happens to use AI internally.
2. **Adversarial or unintended cause**: the incident was caused by deliberate attack (prompt injection, data poisoning, model extraction) or unintentional misalignment (hallucinated outputs, reward hacking, safety failures).
3. **Material impact**: actual users, customers, or third parties were affected — not just a published vulnerability that was patched before exploitation.
4. **First-party or credible third-party reporting**: there's a primary source we can cite — vendor advisory, court filing, regulator action, peer-reviewed disclosure, or reporting from a publication that demonstrates verification.

If an event meets fewer than two, we may track it internally but won't publish until the criteria converge. This filters out a lot of "AI did a bad thing on Twitter" incidents that don't have enough signal to verify.

## Source tiers

We rank sources in five tiers; an incident publishes only when we have at least one Tier 1-2 source.

**Tier 1 — Primary**: Vendor advisories, regulatory actions, court filings, organizational incident reports, peer-reviewed papers documenting the event.

**Tier 2 — Established secondary**: Reporting from publications with demonstrated verification practice (Reuters, Bloomberg, Wired security desk, KrebsOnSecurity, 404 Media, The Markup) where the reporter has independently confirmed the claim.

**Tier 3 — Specialty secondary**: Reporting from AI-specific publications, research org statements, social media posts from named researchers with reputation at stake.

**Tier 4 — User reports**: Individual users describing experiences. Triangulated only — a single Twitter thread is not enough; a pattern across multiple independent accounts may be.

**Tier 5 — Speculation and aggregator content**: AI-summarized news posts, anonymous Reddit claims, unverified screenshots. Not citable.

When we publish from Tier 3 or 4 sources alone, we mark the incident as `verification: partial` and update if a stronger source emerges.

## Dating

Every incident gets four dates when available:

- `incident_date`: when the harmful behavior occurred
- `disclosure_date`: when the affected party or vendor first acknowledged it
- `report_date`: when public reporting first appeared
- `verification_date`: when we ourselves cleared the verification bar

The four dates often differ by weeks or months; conflating them leads to misleading timelines. A vendor disclosure on April 30 about an incident from January 12 is two events, not one.

For undated claims (especially in academic disclosures), we mark the date as approximate and explain the reasoning in the entry.

## What we do not publish

- **Speculative attribution**: claims about who is responsible without evidence at the source-tier level required.
- **Personally identifiable victim information** beyond what the original source published.
- **Working exploit code** for active vulnerabilities. We link to the academic paper or vendor advisory, not the proof-of-concept repo, until a patch is broadly available.
- **Unverified jailbreak prompts** as a service. If a jailbreak technique is publicly disclosed, we describe the technique class; we don't republish the working string.
- **Capabilities-not-yet-public**: research findings that haven't been disclosed to affected vendors yet, even if a researcher offers them.

This is not a comprehensive list. Editorial judgment applies on novel cases.

## Corrections

When we get something wrong, we issue a correction with a visible diff at the bottom of the affected post. Silent edits are not allowed. The correction includes:

- What we said
- What was actually true
- How we learned of the error
- What we changed in our process to reduce the chance of repeat

The correction-log page lists every correction across the publication, oldest first.

## What we link to

External links go to:

- The primary source when available
- The most authoritative secondary source otherwise
- An archive (web.archive.org or archive.today) when a primary source is on a domain known to alter or remove content

We don't link to aggregators, AI summaries, or auto-generated news sites, even when they have higher search ranking.

## Cross-references

Where applicable, every incident is cross-referenced to:

- [MITRE ATLAS](https://atlas.mitre.org/studies/) case studies, when one matches
- The [AI Incident Database](https://incidentdatabase.ai/) entry, when one exists
- The [OECD AI Incidents Monitor](https://oecd.ai/en/incidents), when one exists
- Related entries in our own archive

The goal is that a reader investigating an incident can rebuild the full evidence trail without leaving documented sources.

## Update policy

Incidents are not static. We update entries when:

- New disclosures from the affected party change the facts
- A patch, mitigation, or remediation is released
- A regulatory finding or court decision is published
- A subsequent incident provides additional context

Each update carries a date and a one-line summary at the top of the entry. We do not retroactively edit out earlier framings — the history of how an incident was understood is itself part of the record.

## Why this matters

The AI security beat is full of high-velocity, low-rigor reporting. Twitter threads claim breaches that didn't happen. AI-summarized news sites republish each other's errors. A serious reader who wants to understand what's actually happening needs a publication that does the verification work and shows its sources.

That's our job. The methodology is the product.
