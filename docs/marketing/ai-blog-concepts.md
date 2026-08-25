# Agent Workflow Patterns

A snapshot of the non-trivial ways this repo runs on AI agents, with the evidence for each one attached. Written as source material for external writing about agent workflows, and useful on its own as an inventory of what is actually running.

Compiled `2026-08-25` from git history, `.agents/skills/`, `docs/agents/`, and local Claude Code session transcripts. Ordered by how unusual each pattern is, not how important. Everything here is load-bearing: it shipped, it runs on a schedule, or it is merged.

## At A Glance

| Count | What |
| --- | --- |
| `7` | Scheduled agents |
| `50` | Skills tracked in `skills-lock.json` |
| `31` | Skills in `.agents/skills/` |
| `8` | ADRs |
| `2` | AI tools wired into the repo |

---

## 01. Prompts Are Versioned Dependencies

`skills-lock.json` is a lockfile for skills. Fifty entries, each with an upstream source and a content hash.

```json
"ask-matt": {
  "source": "mattpocock/skills",
  "sourceType": "github",
  "skillPath": "skills/engineering/ask-matt/SKILL.md",
  "computedHash": "0f843160e34a24f5…"
}
```

Skills vendored from `mattpocock/skills` and `pbakaus/impeccable` sit alongside repo-owned ones, and frontmatter records provenance per file through the `owner` property. `.agents/skills/` is the single source of truth; `pnpm sync:claude-skills` builds the `.claude/skills` symlinks from it. The sync script has its own unit test.

**Evidence**

- Lockfile: `skills-lock.json` (`50` sources)
- Source of truth: `.agents/skills/` (`31` skills)
- Build step: `scripts/sync-claude-skills.mjs` (`320` lines)
- Tests: `scripts/sync-claude-skills.test.mjs` via `pnpm test:claude-skills-sync`
- Provenance: `SKILL.md` frontmatter `owner`

**Why it matters.** Almost nobody treats prompts as a supply chain with upstream sources, hashes, a build step, and tests. The `owner` field answering "is this mine or borrowed?" is the detail most worth copying.

---

## 02. Seven Agents On A Clock, Opening PRs Against Protected `main`

Verified live as of `2026-07-31` in [[scheduled-tasks/README|scheduled-tasks]].

| Automation | Cadence | Primary surface |
| --- | --- | --- |
| Buzz Content Briefing | Twice daily, `1:00 AM` / `1:00 PM` ET | Project issue bodies and stage moves |
| Buzz Content Drafting | Twice daily, `2:00 AM` / `2:00 PM` ET | Authoring packets and linked issues |
| Weekly Doc Hygiene | Saturday `3:00 AM` ET | Repo docs and `main` PRs |
| Weekly Competitor Scan | Sunday `2:00 AM` ET | Competitor logs and `main` PRs |
| Weekly Evidence Source Scan | Sunday `3:00 AM` ET | Evidence logs |
| Monthly Editorial Planning | `15th`, `12:00 AM` ET | GitHub Project `The Buzz Editorial` |
| Buzz Editorial Review | Every `3` hours | Project and issue comments |

The git log proves they run, and have for weeks: branches `codex/weekly-competitor-scan-20260823`, `codex/weekly-evidence-source-scan-20260823`, `codex/docs-hygiene-20260822`, merged as PRs `#74`, `#75`, `#76`, with the same pattern dated `0802`, `0809`, `0816`.

**Evidence**

- Schedule table: [[scheduled-tasks/README|scheduled-tasks]]
- Runbooks: [[scheduled-tasks/BUZZ_CONTENT_BRIEFING|BUZZ_CONTENT_BRIEFING]], [[scheduled-tasks/BUZZ_CONTENT_DRAFTING|BUZZ_CONTENT_DRAFTING]], [[scheduled-tasks/DOC_HYGIENE|DOC_HYGIENE]], [[scheduled-tasks/COMPETITOR_CONTENT_SCAN|COMPETITOR_CONTENT_SCAN]], [[scheduled-tasks/EVIDENCE_SOURCE_SCAN|EVIDENCE_SOURCE_SCAN]], [[scheduled-tasks/MONTHLY_BUZZ_EDITORIAL_PLANNING|MONTHLY_BUZZ_EDITORIAL_PLANNING]], [[scheduled-tasks/THE_BUZZ_EDITORIAL_REVIEW|THE_BUZZ_EDITORIAL_REVIEW]]
- Merges: `f8244636`, `8072de43`, `ec37e810`

**Why it matters.** Unattended agents that produce reviewable artifacts, not commits. `main` is protected, so branch protection is the safety rail rather than trust.

---

## 03. One Shared Delivery Contract, Not Ten Copies Of Git Instructions

[[git-automation-delivery]] defines four delivery modes. Each workflow declares which one it uses instead of restating the mechanics.

| Mode | Use when | Result |
| --- | --- | --- |
| `github-state` | Only issues, comments, or fields change | No branch, no PR |
| `scheduled-pr` | A scheduled task changes files | Isolated worktree, one PR to `main` |
| `existing-pr-or-new` | A comment asks for file changes | Update the open PR, otherwise open one |
| `user-directed` | A human asks directly | Leave edits in the current worktree |

Then explicit safety boundaries: never force-push or rewrite history, never auto-resolve a merge conflict, never open a PR when no files changed, never auto-merge.

One detail worth stealing is that the contract pre-empts a known false alarm so runs do not abort on it:

> A supplied Codex worktree may be detached and may start from an older commit; that is expected and is not a stop condition.

There is a commit called `refactor: drying our workflows`. The prompts got refactored.

**Evidence**

- Contract: [[git-automation-delivery]]
- Auth companion: [[github-automation-auth]]
- The refactor: `67366f8b`
- Predecessor: `d754f038` (`refactor: updating git procedures for automated tasks`)

---

## 04. The `[Agent]` Prefix Solves Agent Identity With One String

The automations run under a human GitHub token, so agent comments are otherwise indistinguishable from human ones. The fix is a literal prefix:

> Every GitHub comment or question authored by the automation must start with the literal prefix `[Agent]` so future runs can distinguish agent output from human input.

The editorial-review automation closes the loop. It treats a comment as actionable only when the most recent unresolved comment is by `jkauszler` **and** does not start with `[Agent]`. Without that rule, an agent that wakes every three hours replies to itself forever.

**Evidence**

- Rule: [[scheduled-tasks/THE_BUZZ_EDITORIAL_REVIEW|THE_BUZZ_EDITORIAL_REVIEW]], Review Detection Rules
- Also in: [[scheduled-tasks/BUZZ_CONTENT_DRAFTING|BUZZ_CONTENT_DRAFTING]], [[scheduled-tasks/BUZZ_CONTENT_BRIEFING|BUZZ_CONTENT_BRIEFING]]
- Ambiguity path: leave an `[Agent]` comment naming the exact ambiguity, ask the minimum question, do not guess

**Why it matters.** This is the cheapest idea in the repo. One string prefix prevents an infinite loop, and it is the first thing anyone running a recurring agent should add.

---

## 05. The AI Was Deliberately Taken Out Of The Writing

The best story in the history. The automation is still called `coffitivity-buzz-content-drafting`, but its own runbook says otherwise:

> The live automation retains the `coffitivity-buzz-content-drafting` identifier for continuity, but it no longer drafts complete articles… It is a research and authoring-support automation, not an article-writing automation.

What it produces instead is an authoring packet: proposed frontmatter, a writer brief with the recommended throughline and a list of prohibited claims, a per-section writing kit split into essential, optional, and prohibited material, and a research appendix carrying prioritized findings, fact checks, reporting problems, open editorial decisions, and research gaps.

Two constraints make it stick. It must not join its examples into a complete article, because example prose is guidance and not approved copy. And it is told not to read any previous AI-generated draft. The real packet for issue `#39` runs `234` lines.

**Evidence**

- The switch: `2579fda9` (`refactor: updating how we produce science simplified articles`)
- Runbook: [[scheduled-tasks/BUZZ_CONTENT_DRAFTING|BUZZ_CONTENT_DRAFTING]]
- Real output: `docs/marketing/the-buzz/content/research/issue-39-pomodoro-flowtime-self-regulated-breaks.md`
- Playbook: `docs/marketing/the-buzz/playbooks/Science Simplified Playbook.md`

**Why it matters.** "I gave the AI the research job and took back the writing job." Everyone else is racing the other direction.

---

## 06. The Editorial Pipeline Is A State Machine With Human Approval Gates

One single-select stage field on GitHub Project `The Buzz Editorial` is the canonical runway. Bold stages are human approval gates.

```text
Parked → Backlog → **Concept Approved** → Brief Review → **Brief Approved**
      → Drafting → Draft Review → Published
```

Agents may only make specific transitions, and the boundaries read like spec assertions. From the drafting runbook: keep the issue in `Drafting`, because a packet-document PR does not move it to `Draft Review` and only a reviewable article PR does. It processes at most one issue per run, prefers the oldest after dependency filtering, respects GitHub issue dependencies, and reports `no changes` when nothing is eligible.

When it hits a judgment call it cannot infer from the repo, it does not guess. It leaves an `[Agent]` comment stating the exact ambiguity and asks the minimum clarifying question.

**Evidence**

- Stages: [[marketing/the-buzz/workflows/editorial-planning/README|Editorial Planning]]
- Transitions: [[scheduled-tasks/BUZZ_CONTENT_DRAFTING|BUZZ_CONTENT_DRAFTING]], Expected Behavior
- Runway target: `2`-month runway at `2-3` articles per week
- Tracker contract: [[issue-tracker]]

---

## 07. A Full Idea-To-Ship Pipeline, With Receipts

`/ask-matt` is a router over the other skills. It maps a main flow, two on-ramps, and an escape hatch for work too big for one context window.

```text
main flow   grill-with-docs → to-spec → to-tickets → implement → code-review
on-ramps    triage · diagnosing-bugs
too big     wayfinder → rejoins at to-spec
```

The UTM attribution feature is a complete worked example, visible end to end in one transcript:

1. `/grill-with-docs` ran a relentless one-question-at-a-time interview. Real decisions came out of it: D1 as the ledger with PostHog deferred, a `30`-day attribution window, a new `coff_fp` cookie, writes-only, and deletion tied to account deletion.
2. Those became ADR `0008`, `first-party-attribution-ledger-in-d1.md`.
3. `/to-spec`, then `/implement` with TDD at pre-agreed seams, then `/code-review`.
4. Shipped as `cc4684b3` (UTM tracking), `e32280b8` (Google tags), `6e73bc76` (GA event tracking).

Two details deserve their own paragraph. `/code-review` runs its two axes, Standards and Spec, as parallel sub-agents specifically so they do not pollute each other's context. And the flow carries explicit context hygiene: keep grilling through tickets in one unbroken window, clear context between each `/implement`, and use `/handoff` to write a compaction doc and open a fresh session against it rather than pushing on past the point where the model still reasons sharply.

**Evidence**

- Router: `.agents/skills/ask-matt/SKILL.md`
- Transcript: `~/.claude/projects/-Users-justinkauszler-Code-coffitivity-monorepo/8542104f-89be-4aea-9aa7-efa70dfae293.jsonl`
- Decision record: `docs/development/adr/0008-first-party-attribution-ledger-in-d1.md`
- Shipped as: `cc4684b3`, `e32280b8`, `6e73bc76`, `05fa66e7`
- Sub-agent transcripts under `8542104f…/subagents/`

---

## 08. Two AI Tools, One Instruction Layer

`AGENTS.md` is the canonical root guide. `CLAUDE.md` is deliberately thin, opening with the line that it exists to keep Claude-specific guidance intentionally thin, and points back at `AGENTS.md`. Codex gets `.codex/config.toml` with `sandbox_mode = "workspace-write"` and `.git` explicitly writable, plus a command allowlist where every rule carries a justification:

```python
prefix_rule(
    pattern = ["gh", "pr", ["create", "edit", "list", "view", "diff", "checks"]],
    decision = "allow",
    justification = "Allow write access to GitHub PRs.",
)
```

Underneath sits the nearest-doc convention, with `AGENTS.md` for operational rules, `README.md` for setup, and `CONTEXT.md` for subsystem vocabulary, indexed by `CONTEXT-MAP.md`, alongside eight ADRs and [[__internal/README|__internal/README]], a document whose only job is telling agents where new documents go.

**Evidence**

- Shared guide: `AGENTS.md` at the repo root
- Thin adapter: `CLAUDE.md`
- Codex config: `.codex/config.toml`, `.codex/rules/default.rules`
- Doc map: `CONTEXT-MAP.md`, `CONTEXT.md`, [[__internal/README|__internal/README]]
- Decisions: `docs/development/adr/0001` through `0008`

---

## 09. An Agent That Audits The Docs That Instruct Agents

Weekly Doc Hygiene reviews `AGENTS.md`, `README.md`, `CONTEXT.md`, and related overview docs for placement, link integrity, and factual accuracy, then prepares minimal fixes as a PR to protected `main`.

Agent instructions drift exactly like code drifts. This is drift detection for them, and it has been merging for months.

**Evidence**

- Skill: `.agents/skills/weekly-doc-hygiene/SKILL.md`
- Runbook: [[scheduled-tasks/DOC_HYGIENE|DOC_HYGIENE]]
- Runs: `88346237`, `0a06208a`, `a34ddba9`
- Related: transcript `de6374c7` covers a repo-wide doc rename to kebab-case directories with wikilink repair, done through `git mv` so history follows

---

## 10. Claude Code Sitting In A Team Chat

Outside this repo. Five sessions under `~/.claude/projects/-Users-justinkauszler--buzz/` show Claude Code invoked by `@mention` in a Nostr-based team chat, with real channels (`design`, `advertising`, `Welcome`), threads, multiple participating npubs, and a `buzz` CLI for pulling conversation context on demand.

The turn structure is the interesting part. Sessions carry a scope header of `dm`, `channel`, or `thread`, and messages arrive mid-turn marked `[New message — arrived while you were working]`. That is Claude as a member of the room rather than a tool someone opens.

**Evidence**

- Transcripts: `~/.claude/projects/-Users-justinkauszler--buzz/`, `5` sessions, `2026-08-17`
- CLI: `~/.local/bin/buzz`, via `buzz messages get --channel <UUID>` and `buzz messages thread`
- Scopes seen: `dm`, `channel`, `thread`

**Note.** This is probably its own post rather than a section in the others. The interruption model and per-scope context are a different subject from repo automation.

---

## Three Post Angles

Each draws on a different subset. The second is the strongest, because the mechanics are copyable in an afternoon.

### Prompts Are Code

A lockfile for skills, a shared delivery contract that keeps instructions DRY, and a weekly agent that detects drift in the instructions themselves. The argument: if you cannot diff it, hash it, and test it, it is not infrastructure yet.

Draws on `01`, `03`, `09`.

### Seven Agents, Zero Merges

How to run unattended agents against a production repo without letting them touch `main`. The `[Agent]` prefix, one-issue-per-run throttling, declared delivery modes, and branch protection as the actual safety mechanism.

Draws on `02`, `04`, `06`.

### I Gave The AI The Research And Took Back The Writing

Deliberately shrinking an agent's scope after it already worked. Paired with the engineering side, where the interview stops and the implementation starts, the post becomes one question: where does the judgment gate belong?

Draws on `05`, `07`.

---

## Scope Of This Scan

Sourced from three places only: this repo's git history and agent configuration, the local Claude Code transcripts under `~/.claude/projects/`, and the `buzz` chat sessions. Anything done in claude.ai, Projects, or directly against the API is not visible from here and is not represented above.

Dates, commit SHAs, and counts are as of `2026-08-25`. The scheduled-task table repeats what [[scheduled-tasks/README|scheduled-tasks]] documents as verified live on `2026-07-31`; confirm it against the running schedules before publishing any of it.

---

## Codex Output

The strongest Codex example is your human-gated editorial operating system for The Buzz.
source scans → research ledgers → monthly planning → concept approval → automated briefing → human approval → research packet → human writing → review automation → PR
This is clearly beyond chat:
Seven live scheduled automations handle distinct roles.
47 of your 50 most recent Codex tasks were scheduled runs.
GitHub Projects acts as the state machine: Concept Approved, Brief Review, Brief Approved, Drafting, Draft Review, and Published.
Persistent context lives in issue bodies, research ledgers, workflow docs, automation memory, commits, and PRs—not chat history.
Repository changes happen in isolated worktrees with verification, protected main, duplicate-PR prevention, and explicit stop conditions.
The best narrative is the workflow correction. Initially, Codex drafted complete articles. You decided that crossed the wrong boundary: the output wasn’t giving you enough ownership or visibility into the evidence. You changed the agent’s job to:
Read the focal study fully.
Build a claim-to-source map.
Identify caveats and unsafe claims.
Prepare section-level writing kits.
Suggest selected example passages.
Produce a versioned authoring packet.
Leave the actual article to you.
You then had Codex remove the old drafts from PRs #68 and #69 and replace them with 254- and 288-line research packets. A later run produced a 303-line packet for issue #52.
That makes a better post than “AI writes my blog.” It shows workflow design based on observed limitations.
A good title:
I Didn’t Ask AI to Write My Blog—I Built It an Editorial Job System

The thesis:
The useful unit of AI work isn’t the prompt. It’s a persistent workflow made of specialized roles, durable artifacts, approval gates, and controlled state transitions.

Suggested outline:
Why ordinary AI-assisted writing wasn’t enough.
Turning GitHub Projects into the editorial control plane.
Splitting one large “content agent” into specialized jobs.
Giving agents durable memory through ledgers and repository docs.
Using project stages as human approval gates.
Why automated drafting failed your actual goal.
Replacing drafts with writer-ready research packets.
Operational safeguards: worktrees, PRs, verification, and stop conditions.
What still requires human judgment.
The main evidence is documented in [Scheduled Tasks (line 15)](/Users/justinkauszler/Code/coffitivity-monorepo/docs/agents/scheduled-tasks/README.md:15), [Content Production (line 1)](/Users/justinkauszler/Code/coffitivity-monorepo/docs/marketing/the-buzz/workflows/content-production/README.md:1), and [Git Automation Delivery (line 5)](/Users/justinkauszler/Code/coffitivity-monorepo/docs/agents/git-automation-delivery.md:5).
The draft-to-research-packet reversal should be the opening scene. It gives the post tension and keeps it from reading like an automation inventory.

### Other Examples

Several strong examples, ranked by how well the history supports them:

1. Human-gated editorial operating system
Codex runs scheduled source scans, monthly planning, briefing, research, review handling, and PR delivery. GitHub Projects provides the workflow state; humans approve the important transitions.
Post angle: “How I Turned GitHub Projects and Codex into an Editorial Operations System.”

2. First-party attribution system
You used Claude through a complete engineering sequence:
requirements grilling → privacy decisions → ADR → specification → baseline tests → implementation → diff review → bug correction
The implementation crossed the frontend, API, D1, Stripe webhooks, signup attribution, and account deletion. Human review caught the gclid handling problem.
Post angle: “Using AI Across an Entire Software Project, Not Just Code Generation.”

3. Replacing AI writers with AI research agents
You originally automated complete article drafts. After reviewing the result, you redesigned the workflow so Codex produces claim maps, section kits, caveats, example passages, and detailed authoring packets while you write the article.
Post angle: “Why I Stopped Letting AI Write My Articles—and Gave It a Better Job.”

4. A research automation that learned to recover from broken sources

The weekly evidence scan stopped when PsyArXiv’s normal interface returned 403. You then:

- Changed the workflow so one broken source would not block unrelated sources.
- Researched an official OSF API fallback.
- Documented the reproducible query.
- Packaged the change in PR #44.
- Reran the scan and successfully produced PR #45 with seven new research items.
Post angle: “Designing AI Automations That Can Fail, Be Repaired, and Resume Safely.”

1. GitHub-based asynchronous review agent
Every three hours, Codex looks for unresolved human requests on editorial issues. It distinguishes human comments from its own [Agent] comments, answers state-only questions directly, and updates an existing PR instead of creating duplicates when files must change.
One run found your request on issue #63, added 17 research leads, corrected a bad DOI record, updated PR #77, and posted the handoff.
Post angle: “Using GitHub Comments as an Asynchronous Interface to an AI Agent.”

2. Scheduled documentation maintenance
The weekly documentation hygiene agent inspects overview documentation, checks factual accuracy and link placement, makes minimal corrections, verifies the diff, and opens a protected-main PR only when something changed.
Post angle: “Giving AI the Boring Maintenance Work Without Giving It Unlimited Authority.”

3. Iterative audio-engine prototyping
The git history shows a longer project sequence:
PRD and tasks → initial prototype → simplified looping → mixing → unified engines → revised implementation → promotion to default → Capacitor integration

This is a useful example of AI supporting exploratory engineering where the target architecture emerges through tested revisions.

Post angle: “Using AI Prototypes to Discover an Architecture Instead of Pretending You Know It Up Front.”

The strongest three are the editorial operating system, the attribution project, and the shift from AI drafting to AI research. Together they cover autonomous operations, project-based engineering, and thoughtful human/AI division of labor.
