---
title: "The README Test: Do Directory Guides Improve AI Work?"
excerpt: "I tested two coding agents against the same monorepo task—with and without directory-level guidance—to see whether better documentation produces better work."
publishedAt: 2026-08-27
author: justin-kauszler
category: build
image: moire-seed-43-file-tree-v2.png
imageAlt: "An oversized diagonal monorepo file tree showing README files at each directory root over a green moire pattern"
tags:
  - AI Agents
  - Documentation
  - Developer Experience
  - Experiments
draft: false
---

I’ve been moving more of my operational work like strategy, marketing, product, and legal closer to my code within a monorepo. Doing so helps colocate information relevant for cross-cutting tasks. But it also creates a context problem: how does an agent know where to find the relevant implementation without explicitly being directly pointed to material and artifacts? I created one small experiment to test a possible solution to answer the question: Can a well-organized documentation tree help an agent orient itself before it begins searching?

## Prefix

If you've worked with me in the past you would know that I'm a big fan of monorepos. My admiration started well before AI had taken a foothold over the industry and our workflows. For my little brain it solved a big problem that we now see agents also working against: context. Monorepos are great at exposing context, especially for non-trivial systems. It's a clear, full-access picture to an entire system. This solution however comes with another issue we see: agents fighting against too much context. Overexposure to context can lead to poorer output quality and for humans it can leave them lost in an ocean of directories and files.

To solve this problem, people use maps in the form of documentation, like READMEs, to guide developers to their relevant destination. This raised a practical question for me: **Can small, contextual README files help an agent understand a large repository well enough to work more efficiently and accurately?** If it works for people, would it work for an agent?

I tested that idea using two coding agents and one mid-sized production monorepo (seven microservices with seven shared packages) that also included a heavy documentation directory where company operations were centrally located. Think: marketing, branding, operations, legal, product development workflows, SOPs, and other related artifacts. I tested each agent against the same analysis task under two conditions.

## More about our READMEs

When I say "a contextual README," I practically mean a short entry point placed at each directory across the repository.

For example, a README at the root of a documentation directory might state that it contains engineering or design directories, link to the repository's documentation rules, and identify which subdirectories contain architecture decisions, operational procedures, or domain context. It does not reiterate the content held within the documents. Its primary job is to help the reader and agent choose the next directory path to open.

For example:

```md
# ACME Knowledge Base

This directory holds ACME's product, engineering, design, and business documentation. The content is Markdown-first so it works well in Git and in Obsidian for people who prefer a local knowledge-base workspace.

## Top-Level Areas

- `agents/` holds legacy project-specific agent docs. Do not add skill definitions or skill-specific support files there; colocate those under `.agents/skills/<skill>/`.
- `development/` holds cross-system engineering docs, ADRs, PRDs, and system overviews.
- `design/` holds design-system and visual-exploration work.
- `deskos/` holds future-facing product exploration for DeskOS.
- `legal/` holds contracts, terms, and related operating documents.
- `marketing/` holds brand and The Buzz marketing documentation.
- [[__internal/README|__internal/README.md]] defines the repo-wide documentation placement rules.

## Organizational Structure

These documents are intended for both Humans and AI Agents. For humans, we've setup this directory to be integrated with Obsidian.

### AI Procedure Reference

When creating links within this directory use Wiki style links so humans on the team can take advantage of more Obsidian features.

```

In this case a useful README answers questions like:

- What the major sections contain
- Which files are sources of truth
- Where new information belongs
- Which neighboring documents provide deeper context

When I built this system, I leaned on ordinary file-directory basics and treated the documentation as a tree. Branch-level documents explain where things are and how the branches relate. Leaf-level documents contain the substance: a decision, a procedure, a specification, or a piece of domain knowledge.

I tried to follow a simple principle: put information in the lowest directory where it remains true, then link to deeper material instead of repeating it.

That keeps knowledge close to the work it describes, avoids duplication, separates concerns, and gives each document a narrow reason to change. A directory README exposes a small, relevant interface pointing to deeper, more specialized material at the leaves.

That tree made it natural to bring organization-level goals and operational projects into the same monorepo as application-level implementation. A marketing, legal, or product task often needs to reach into code. Conversely, a code change may need to respect a product decision, a brand rule, or an operational commitment. The directory hierarchy gives those layers a shared address without turning every document into one giant instruction file.

My repository also separates different kinds of guidance. README files explain structure and navigation. Agent instruction files define operational rules. Context files define vocabulary and domain meaning. Decision records preserve why an architectural choice was made.

For everyone thinking, "That sounds like a lot to keep up with and write," I agree. Which is why I don't do it all manually. I use two maintenance layers: an in-task skill that updates nearby guidance when a change makes it stale, and a scheduled skill that audits the documentation and opens a pull request for any drift it finds. You can find those skills below.

## The hypothesis

My hypothesis was:

**If an AI coding agent encounters concise guidance near the documents relevant to its task, it will spend less time searching, use less context, and produce a more grounded analysis.**

I expected contextual READMEs to improve three things:

1. **Navigation:** The agent would reach relevant documents and code paths sooner.
2. **Efficiency:** It would need fewer searches, turns, and tokens.
3. **Quality:** It would miss fewer important relationships and make fewer unsupported claims.

## The procedure

I used a mature software monorepo containing application code and documentation across product, engineering, marketing, design, and operations.

The task asked each agent to compare newly introduced operating documents with the current product implementation and report the required changes. The task was deliberately vague, requiring both deep file discovery and cross-repository analysis. It was read-only: analyze the repository and report findings without modifying files.

The query:

> I'm thinking about how to migrate my code as I start to implement my new terms of service and privacy policy. See my new legal docs and perform an analysis on what changes I need to make. Don't produce any kind of artifact just report your findings here.

I tested two high-reasoning coding agents:

- Claude Opus 5
- OpenAI GPT-5.6 Sol via Codex

Each agent ran once under each condition:

- **With READMEs:** The contextual documentation hierarchy was available.
- **Without READMEs:** The directory-level README files were removed while the underlying source documents and code remained available.

I kept the prompt, repository, model settings, and task constant. Each session started clean with either a verbose flag (claude) or in raw mode (codex) so I could track the detailed commands and procedures each model used. I recorded elapsed time, token measurements, search behavior, compaction, and the resulting analysis.

This was a small operational experiment, not a benchmark. With only one run per model and condition, the results show possible effects rather than statistical proof.

## The first interesting result: the agents began differently

The two agents did not approach the repository in the same order. The commands below are abbreviated to the meaningful discovery steps.

Claude started with Git. Its first move was to inspect the latest commit and changed files, using repository history to infer which documents were new. Only then did it move on to searching the directory structure.

```bash
git show --stat HEAD
git status --short
git log --oneline -3
ls -la docs/legal/terms/
```

Codex alternatively started with the filesystem. It searched for repository instructions, context files, READMEs, and filenames related to the task. It then inspected the target directory and its Git history.

```bash
rg --files -g 'AGENTS.md' -g 'README.md' -g 'CONTEXT.md' \
  -g '*privacy*' -g '*terms*' -g '*legal*'
find docs/legal -maxdepth 4 -type f -print | sort
git status --short
git log -8 -- docs/legal
```

So the distinction was not that one agent used Git and the other did not. Both did. The difference was the order:

```text
Claude: recent change → affected files → repository structure
Codex: repository map → relevant files → recent change
```

That matters because a contextual README is more likely to influence an agent that begins with structural discovery. An agent that starts from the latest commit may reach the correct files before the README hierarchy has much opportunity to guide it.

It also suggests that documentation experiments should measure process, not only final output. Two agents can reach similar conclusions through materially different search strategies.

## Findings

### Claude showed the clearest efficiency improvement

With contextual READMEs available, Claude completed the task about 13% faster and used about 14% fewer reported tokens.

| Claude measurement | With READMEs | Without READMEs | Difference |
| --- | ---: | ---: | ---: |
| Elapsed time | 6m 40s | 7m 38s | 13% faster |
| Reported tokens | 118,126 | 136,929 | 14% fewer |

The no-README run also incorrectly cited (hallucinated) one sentence as though it came directly from a source document when it did not. That is a meaningful quality concern, but one incident is not enough to establish that READMEs prevent unsupported claims.

### Codex used fewer turns, but the efficiency story was mixed

My first reading of the Codex results appeared dramatic. The README run ended with about 33,000 tokens of active context while the no-README run ended near 216,000.

That comparison was wrong.

The README run had automatically compacted its conversation. [OpenAI's documentation describes compaction](https://developers.openai.com/api/reference/java/resources/responses/methods/compact) as replacing prior conversation state with a compacted representation. The final status therefore reflected the active context *after* compaction, not the peak context or total work performed during the run.

Once I analyzed the session logs directly, the result became more modest:

| Codex measurement | With READMEs | Without READMEs | Difference |
| --- | ---: | ---: | ---: |
| Elapsed time | 9m 29s | 9m 07s | 4% slower |
| Cumulative tokens | 5.50M | 5.74M | 4% fewer |
| Uncached input | 267.7K | 233.2K | 15% more |
| Usage updates | 43 | 54 | 20% fewer |
| Peak active context | 235.5K | 216.2K | 9% higher |
| Compactions | 1 | 0 | — |

The cumulative totals are large because each model request resends much of the conversation, and most of that repeated input was cached.

The Codex run with READMEs took fewer turns and produced a shorter response, but it was not faster. It also processed more uncached input and reached a higher peak context before compacting.

In other words, the READMEs may have reduced meandering without reducing the amount of new information the agent considered.

### Output quality was broadly similar

Both agents, under both conditions, identified most of the same major categories of work. The reports differed in organization, emphasis, and supporting detail, but neither condition produced an obvious across-the-board quality win.

The README runs appeared somewhat more oriented around repository structure and relationships between documents. The no-README runs sometimes performed more direct, exhaustive searches. Both approaches can be useful.

My evidence for improved accuracy is therefore weaker than my evidence for changed behavior.

## What the experiment actually supports

The study does **not** show that adding README files automatically makes a model more capable. It shows that local documentation can change how an agent explores a repository.

The strongest supported conclusions are:

1. **Contextual READMEs can reduce the number of investigative turns.** This was clearest in the Codex logs.
2. **The benefit depends on the agent's search strategy.** A filesystem-first agent (Chat-GPT) encounters navigational documentation earlier than a Git-first agent (Claude).
3. **Final context size is not a reliable efficiency metric when automatic compaction is involved.** Peak context, cumulative usage, uncached input, and compaction events must be considered separately.
4. **Token savings are not guaranteed.** One model showed a clear reduction; the other showed only a small cumulative reduction and an increase in uncached input.
5. **Accuracy remains the metric that matters most.** A faster answer is not better if it is incomplete or unsupported.

## Practical guidance for repository documentation

I would not add a README to every directory, at least not for an agent. More documentation can become another form of noise.

A contextual README earns its place when it answers questions an unfamiliar contributor—or agent—would otherwise have to investigate:

- What is this directory responsible for?
- What is outside its scope?
- Which files are authoritative?
- Where should deeper investigation begin?
- Where should new information be placed?

Keep those answers brief and stable. Put detailed procedures, domain vocabulary, and historical decisions in documents designed for those jobs.

The useful pattern is a chain of progressively specific context:

```text
Repository guidance
  → domain map
    → directory README
      → source document, decision record, or code
```

This gives an agent multiple chances to orient itself without forcing the entire knowledge base into its initial context.

## How I would improve the next test

This experiment exposed several measurement problems that a stronger follow-up should correct.

I would:

- Run several trials per model and condition.
- Randomize which condition runs first.
- Start every trial from the same clean repository state.
- Record prompt-cache state and compaction events.
- Measure time to first relevant evidence, not only total runtime.
- Grade findings against a predefined checklist.
- Count missed findings and unsupported claims.
- Have reviewers score outputs without knowing which condition produced them.
- Separate cached input, uncached input, output, and reasoning tokens.

Those changes would make it possible to distinguish a real documentation effect from ordinary variation between agent runs.

## Conclusion

Do contextual directory READMEs improve AI model performance?

**Sometimes—but not automatically, and not in every metric.**

In my study, they produced a clear efficiency improvement for one model and a smaller, mixed result for another. They changed search behavior more consistently than they changed final answer quality.

That is still valuable. Repository work is not only a reasoning problem; it is an orientation problem. A concise, accurate README can help an agent build the right map before it starts making decisions.

The case for contextual READMEs is therefore not that they always save tokens. It is that they can make a repository easier to navigate for both people and agents—provided the documents are scoped carefully, kept current, and measured by the quality of the work they enable.

## Appendix

### The skills and workflow

These are generalized versions of the ones I use. Wherever I reproduced material from the application, I removed its name and replaced it with `ACME`. The templates also avoid project-specific paths, so you can copy them into another repository and adjust the branch or pull-request rules to match your setup.

Create each skill at the path shown. Codex discovers repository skills under `.agents/skills/`; other agents may use a different skills directory, but the Markdown instructions remain the same.

#### 1. Keep local guides current while working

Save this as `.agents/skills/update-local-guides/SKILL.md`:

```md
---
name: update-local-guides
description: Updates nearby README.md, AGENTS.md, and CONTEXT.md files when completed work makes their guidance inaccurate. Use after changing repository structure, commands, responsibilities, workflows, or domain language.
---

# Update Local Guides

Keep documentation changes narrow and colocated with the work they describe.

## Workflow

1. Read the nearest `AGENTS.md`, `README.md`, and `CONTEXT.md` before changing a subsystem.
2. Complete and verify the requested work before editing its guides.
3. Review the changed files and determine whether they altered:
   - setup or development commands
   - directory structure or navigation
   - subsystem responsibilities or architecture
   - operational constraints or agent instructions
   - domain vocabulary or invariants
4. Update only the affected guide:
   - `README.md` for human setup, structure, and navigation
   - `AGENTS.md` for agent workflows, commands, and guardrails
   - `CONTEXT.md` for vocabulary, meaning, and invariants
5. Put information in the lowest directory where it remains true.
6. Link to deeper material instead of duplicating it in parent guides.
7. Re-read touched guides and verify that their local links resolve.

## Output rules

- Do not change documentation when the implementation did not make it stale.
- Do not copy implementation details into overview documents.
- Make the smallest edit that restores accuracy.
- Report which guides changed and why.
```

This is the layer that prevents most drift. I run it as the last part of implementation, after tests pass, because the final shape of the change is then known. It does not force a documentation edit on every task; it forces the agent to check whether one is warranted.

#### 2. Audit the guides on a schedule

Save this as `.agents/skills/weekly-doc-hygiene/SKILL.md`:

```md
---
name: weekly-doc-hygiene
description: Reviews repository overview documentation for scope, link integrity, and factual accuracy, then prepares minimal fixes. Use for recurring documentation hygiene or manual audits of AGENTS.md, README.md, CONTEXT.md, and related overview docs.
---

# Weekly Documentation Hygiene

## Workflow

1. Read the repository's root agent instructions and documentation-placement rules.
2. Enumerate directory-level overview docs such as `AGENTS.md`, `README.md`, and `CONTEXT.md`.
3. For each candidate, verify that:
   - the file still matches the scope of its directory
   - relative links resolve
   - commands, paths, workflows, and responsibilities match the repository
   - information lives in the lowest directory where it remains true
   - parent documents link to detail instead of duplicating it
4. Make only the minimal documentation changes required to restore accuracy, scope, and link validity.
5. Re-check every touched document after editing.

## Output rules

- If no changes are needed, report `no changes` and stop.
- Do not use the audit for broad copy rewrites or unrelated code changes.
- If changes are needed, follow the repository's branch and pull-request rules.
- In the pull request, summarize the docs reviewed, what changed, and any item that still needs a human decision.
```

The scheduled task invokes that skill in an isolated worktree once a week. My automation prompt is intentionally short because the durable procedure belongs in the skill:

```text
Run $weekly-doc-hygiene in the provided isolated worktree. Review the scoped
overview docs and make only minimal factual or link-integrity fixes. Report
"no changes" if none are needed. If files change, verify them, push a dedicated
branch, and open one pull request targeting the protected default branch. Never
push to or merge the protected branch directly, force-push, rewrite history, or
resolve ambiguous conflicts automatically.
```

I schedule it for Saturday at 3:00 AM local time. The exact time is unimportant; the separation is useful. The in-task skill catches drift while the work is fresh, and the weekly audit catches moved files, broken links, and omissions that survive ordinary development.
