---
title: "Why We Don't Do Attribution Speculation on AI Incidents"
description: "Attribution is the slowest, hardest, most consequential call in incident reporting. Here's the policy that keeps us from getting it wrong."
pubDate: 2026-05-08
author: "Theo Voss"
tags: ["methodology", "attribution", "journalism", "incident-tracking"]
category: "news"
sources:
  - title: "CISA — Attribution analysis primer"
    url: "https://www.cisa.gov/news-events/cybersecurity-advisories"
  - title: "Mandiant 2024 attribution standards"
    url: "https://cloud.google.com/security/resources/insights/threat-intelligence"
  - title: "DOJ unsealed indictments index"
    url: "https://www.justice.gov/news"
schema:
  type: "Article"
heroImage: https://aisec-imagegen.th3gptoperator.workers.dev/featured/aiincidents.org/why-we-dont-do-attribution-speculation.png
heroAlt: "Attribution speculation policy diagram"
---

Attribution is the most consequential claim a security publication can make and the one most often wrong. Naming the actor behind an AI-enabled campaign feels like the story. It is almost never our story. This post is the policy.

## The default: actor unknown

When we publish an incident, our default attribution is "actor unknown." We do not name a state, a group, an individual, or a country unless one of the following is true:

1. A government has named the actor in an indictment, sanctions designation, or public attribution statement.
2. A reputable threat-intel firm with disclosed methodology has named the actor in a research report, *and* a second independent firm has corroborated.
3. The actor has publicly claimed the campaign in a way that is technically verifiable (e.g., signed claim with cryptographic linkage to the intrusion artifacts).

Anything below that bar, we don't name. Not even with hedging language.

## Why "appears to be linked to" is worse than silence

Hedged attribution — "the campaign appears to be linked to actors associated with X" — tests well in headlines and fails everywhere else. Three reasons:

- **Diffusion**. Once the hedge is published, downstream outlets drop the hedge and republish as fact. We've watched our own qualified language come back to us as confident attribution in someone else's piece.
- **Legal exposure**. Naming a sovereign or a private entity carries defamation and political risk we cannot insure against. The hedge does not protect against this.
- **Asymmetric incentive**. The actor benefits from a wrong attribution to a rival. We become a tool of someone else's narrative.

The cost of being wrong on attribution is high. The cost of being slow is low. We default to slow.

## What we will say

The things we publish freely without attribution:

- **Technique**. "The campaign used indirect prompt injection delivered via a poisoned PDF retrieved by a browsing agent."
- **Targets**. "Three named financial services firms disclosed exposure between March 12 and March 30."
- **Impact**. "Approximately 14,000 user accounts had session tokens exposed."
- **Timeline**. "First indicators appeared in November 2025 telemetry per Vendor X's IR report."
- **Indicators of compromise**. When the vendor publishes them.
- **Mitigations**. "Patch X.Y.Z released on April 4 addresses the root cause."

These are the operational facts a defender needs. Attribution is rarely on that list.

## Where the bar drops

We will report attribution at the lower bar of "one government indictment" in specific cases:

- The indictment names the actor with sufficient detail (alias, IP infrastructure, prior campaigns).
- The unsealing is a public document with citable PACER or equivalent.
- The named actor has been previously documented by a Tier 2 source for AI-relevant techniques.

Government attribution is not always right. But it is auditable. A reader can read the indictment.

## Threat-intel firms

The careful firms publish attribution with methodology. They name the cluster (UNC-, APT-, TA-) before they name a sponsor. They distinguish between technical attribution (this campaign uses tooling from a known cluster) and operator attribution (this campaign is run by Country Y). The careful framing is "tooling-attributable" vs "actor-attributable."

We will cite tooling-attributable claims directly with the firm's cluster name. We will not extrapolate to operator attribution without the second corroborator. When two reputable firms (Mandiant, CrowdStrike, Microsoft Threat Intel, Group-IB, Recorded Future) independently name the same actor with disclosed methodology, that meets our bar.

## Self-claims

If a group claims a campaign in a public channel, we treat the claim as a Tier 4 source. A claim is not verification. We will note the claim, link to it, and continue to treat the actor as unknown until corroborated by Tier 1.

There is a long history of groups claiming attacks they did not commit, and quieter groups taking credit for those they did. Self-attribution is signal, not proof.

## Edge cases

- **The vendor names the actor**. Tier 1 source — we publish, citing the vendor.
- **A researcher posts a writeup with technical specifics that point to a group**. We publish the technical specifics. We do not publish the inferred actor until a second source agrees.
- **The press conference**. Government press conferences naming actors are Tier 1 when accompanied by a published document. A press conference with only verbal claims and no document is Tier 2 at best.

## How readers should use this

When we say "actor unknown" we mean: we have evidence the event happened, evidence of the technique, and possibly evidence of impact, but no source at our bar names who did it. We are not saying nobody knows — we are saying the public sourcing does not yet meet our standard.

For readers who need actor names for their own threat-model decisions, threat-intel vendors are the right primary source. Our [source verification ladder](/posts/source-verification-across-tiers/) explains the broader tier system. For incident-response coverage on the defensive side, the [detection engineering posts at sentryml.com](https://sentryml.com/) and the runbook libraries at [guardml.io](https://guardml.io/) are the standing references defenders should consult.

## The trade-off, stated plainly

This policy means we are sometimes the last publication to name an actor that turned out to be correctly attributed by a faster outlet. We accept that trade. The cost of being late on an attribution that turns out right is one news cycle. The cost of being early on an attribution that turns out wrong is a correction that follows the publication for years.

The publication is a long game. Speculation is short money.

## See also

- [AI security alerts](https://ai-alert.org/)
- [AI security digest](https://aisecdigest.com/)
