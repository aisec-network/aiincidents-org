---
title: "Anatomy of a Vendor Advisory: What the Document Says, What It Doesn't, and What to Do With It"
description: "Vendor advisories from AI model providers follow a recognizable shape. Knowing what to look for — and what's intentionally omitted — turns a marketing document into actionable intelligence."
pubDate: 2026-05-10
author: "Theo Voss"
tags: ["explainer", "vendor-advisory", "disclosure", "incident-response"]
category: "news"
sources:
  - title: "Anthropic Security & Trust"
    url: "https://www.anthropic.com/news"
  - title: "OpenAI Security at OpenAI"
    url: "https://openai.com/security/"
  - title: "Google DeepMind Responsible Disclosure"
    url: "https://deepmind.google/discover/blog/"
schema:
  type: "Article"
heroImage: https://aisec-imagegen.th3gptoperator.workers.dev/featured/aiincidents.org/anatomy-of-a-vendor-advisory.png
heroAlt: "Vendor advisory anatomy annotated"
---

A vendor [advisory](https://ai-alert.org/) is the most authoritative document a model provider produces about a security event. It is also a piece of communication crafted by a team that has legal, communications, and engineering constraints. Reading it well requires understanding both layers — what the advisory says, and what shape of event the document is built to address.

## The standard sections

Most mature AI-vendor advisories follow a shape similar to the OpenAI / Anthropic / Microsoft conventions, with minor variations:

### Summary

One-paragraph plain-language description. Optimized for a reporter, not an engineer. Read it for the *category* of event (data exposure, jailbreak class, supply-chain compromise) and the *blast radius* in coarse terms (number of users, regions affected, services involved).

### Timeline

Dated bullet list. Look for:

- **Detection date** (when the vendor first noticed)
- **Containment date** (when the vendor stopped the bleed)
- **Notification date** (when affected parties were informed)
- **Publication date** (when this advisory shipped)

The gap between detection and notification is the most operationally relevant number in the document. A short gap suggests mature IR. A long gap is usually noted as part of an apology, not as a deficiency.

### What happened (technical)

The technical section. Length varies by vendor culture — Anthropic and OpenAI tend toward longer technical narratives; some others stay terse. Read for:

- Named systems and services (so you can map to your own dependencies)
- Specific failure mode (not just "data was exposed" but "session tokens were returned in error responses for X minutes")
- Whether root cause is identified or still under investigation

### Who was affected

The scope of impact. Vendors usually disclose:

- Number of users / accounts
- Categories of data
- Specific regions or product lines
- Whether free-tier and paid-tier users are differentiated

What they don't usually disclose: named customers, exact data records, the precise method of attacker identification.

### What we did

The containment and remediation actions. Read for:

- Rotation of credentials, keys, tokens
- Revocation of API access
- Service-level changes (rate limits, new validation steps)
- Customer-facing changes (forced re-auth, etc.)

### What you should do

The action item for users. Often short. Usually rotate-things-and-watch-logs. Always do it.

### What we're doing next

The forward-looking commitments. Read these with calibrated skepticism. "We are investing in" is not the same as "we have shipped." Track these over the months following the advisory — mature vendors publish follow-up notes; less mature ones do not.

## What's not in the advisory

Things you won't find in the document, and where to look instead:

- **Names of affected customers** — usually private. Sometimes leak via customer disclosure.
- **Attacker attribution** — usually omitted unless required by regulator or court filing. See our [attribution policy](/posts/why-we-dont-do-attribution-speculation/) for why this is often correct.
- **Internal IR runbook details** — usually omitted for operational reasons.
- **Compensating control suggestions for similar incidents** — vendor advisories address their incident, not your defense. Cross-cluster sources are the source for general guidance.
- **Legal exposure or settlement information** — never disclosed in the advisory; surfaces in court filings or regulator records.

## Language to flag

Specific phrases worth dwelling on:

- **"limited number of users"** — could mean dozens or millions. The vendor is signaling that the count is below their disclosure-threshold-of-concern, not necessarily small.
- **"potentially exposed"** — the vendor is hedging because confirmation of exposure is hard. Treat as confirmed for your own triage; the vendor will not over-claim.
- **"isolated incident"** — almost never literally true. A signal that the vendor's investigation found no pattern, not that no related events exist.
- **"working to determine"** — the investigation is open. The advisory may be updated. Watch for revision notices.
- **"out of an abundance of caution"** — usually appears before a credential rotation. Suggests the vendor isn't sure but is acting as if exposure occurred.

## Cross-checking the advisory

A well-resourced security reader cross-checks every advisory against:

1. **Other vendors' advisories**. If a CVE in a shared dependency is referenced, check all consumers of that dependency.
2. **Regulator filings**. EU AI Office disclosures, FTC consent orders, ICO actions sometimes contain detail the advisory omits.
3. **Court filings**. If the incident triggers litigation, complaints will surface in PACER over the following weeks.
4. **Customer disclosures**. Affected customers may publish their own communications. These often have detail the vendor advisory lacks.
5. **Independent research**. Researchers who reproduced or analyzed the incident often publish their own write-ups.

The advisory is a starting line. The full picture is in the cross-checks.

## Reading cadence

For incident reporting, we treat vendor advisories as Tier 1 sources and read them within hours of publication. The reading is structured:

1. Read summary once. Note category and blast radius.
2. Skip to timeline. Note detection-to-notification gap.
3. Read technical section. Identify failure class.
4. Read action items. Note for any of our covered audiences.
5. Skim what-we're-doing-next. Add to a tracking list for follow-up.

The whole reading takes 15-20 minutes for a substantive advisory. The write-up that follows is shaped by what's in the document, what's missing, and what we can corroborate.

## Cross-references

For monitoring-side coverage when a vendor advisory implies new detection requirements, the [engineering cluster at mlobserve.com](https://mlobserve.com/posts/end-to-end-tracing-llm-applications/) covers the tracing patterns that surface these signals in your own deployment. For policy-side analysis when an advisory has regulatory implications, the [aiprivacy.report coverage of EU AI Act disclosure obligations](https://aiprivacy.report/posts/eu-ai-act-article-52-disclosure-checklist/) is the standing reference.

## Why this matters

The vendor advisory is one of the few documents in the AI security world that is both authoritative and timely. Reading it correctly turns it from a marketing artifact into operational intelligence. Reading it poorly means missing the things the document is structured to communicate — and the things it's structured not to.

For more context, [AI security digest](https://aisecdigest.com/) covers related topics in depth.
