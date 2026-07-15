---
name: development
description: Implements software changes from a request or GitHub issue. Use when asked to change code or repository files.
---

# Development

## Purpose

Deliver a focused code change from intake to pull request gate. Keep the user's
request, ticket context, repository conventions, and verification output as the
source of truth.

## Load First

- Read `coding-standards`.
- After identifying the affected code, apply its conditional-reference loading
  rules and read only the references that apply before choosing an
  implementation or editing files.
- Read `code-exploration` before broad cross-module exploration or contract
  tracing.
- Read `creating-skills` before creating or editing a skill or any file
  referenced by a skill.
- Read `pull-request` before creating or preparing a pull request.
- Read `laravel-standards` before touching code that affects a
  Laravel application.

## Workflow

1. Identify the goal, context, constraints, and done condition. If a GitHub
   issue is provided, read it before editing and extract the problem, expected
   behavior, acceptance criteria, and non-goals.
2. Inspect the relevant code, tests, data flows, and documented commands. Use
   that scope to complete the conditional-reference check before choosing an
   implementation.
3. Ask only blocking questions. If the request is clear enough to implement,
   start without waiting.
4. Choose an implementation that supports long-term maintainability and
   satisfies the request. If a broader refactor would materially improve the
   result, outline the option and ask the user whether to include it before
   expanding scope. Follow existing patterns and the standards loaded for the
   affected code.
5. Add or update focused tests when behavior changes or regression risk justifies
   it.

## Review Gate

Run one review after the initial implementation. Do not review again after
fixing findings or making follow-up changes unless the user explicitly asks.

Classify the change by its highest applicable risk:

- `Low`: a small, localized, or behavior-preserving change. Mechanical changes
  such as safe internal renames may remain low risk regardless of file count.
- `Medium`: a bounded behavior change or small feature affecting no more than 20
  materially changed files, with no high-risk condition.
- `High`: more than 20 materially changed files with non-mechanical changes; a
  large or cross-module feature; substantial domain or business-rule changes;
  or changes affecting security, authorization, personal data, payments,
  migrations, transactions, concurrency, data integrity, or public contracts.

Generated files, snapshots, and lockfiles do not raise risk by themselves. A
rename is low risk only when it does not change an external contract.

For `Low` and `Medium`, the main agent performs one self-review using
`code-review`.

For `High`, spawn one sub-agent without inherited conversation context. The
sub-agent shares the workspace and inspects the diff directly. Give it only the
original request or GitHub issue link, the review scope, and an instruction to
use `code-review`. Do not paste the diff or implementation reasoning.

- Fix `Blocker` and `Normal` findings before continuing.
- Do not fix `Low` findings automatically. Show them to the user and ask how to
  proceed.

## Verification Gate

After review findings are handled, run the repository's documented verification
commands. Identify them from project documentation, task or package scripts, CI
workflows, configuration, and declared dependencies.

- Run Mago only when repository configuration, declared dependencies, or project
  documentation confirms that it applies. When it applies, run each command
  once in order:
  1. `mago fmt --check`
  2. `mago lint`
  3. `mago analyze`
  4. `mago guard`
- Do not run Mago again for fixes or follow-up changes unless the user
  explicitly asks.
- Fix Mago warnings and errors without rerunning Mago.
- Stop and ask the user when a Mago fix would change the implementation
  direction. Include concrete options.
- Run relevant tests. Start focused; broaden when shared behavior or risk
  requires it. Fix failures and rerun.

## Pull Request Gate

Create a pull request only after the implementation is done, required review
findings are handled, applicable verification is clean, and relevant tests pass.
Otherwise report the blocker instead of opening the PR.

When this gate is clean, follow `pull-request` to write the title and
description.
