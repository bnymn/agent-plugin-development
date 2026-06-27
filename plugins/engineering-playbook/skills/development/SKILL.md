---
name: development
description: >-
  Implement code changes from a user request or GitHub issue. Use when the user
  asks an agent to build, fix, refactor, or develop a ticket, feature, or issue.
---

# Development

## Purpose

Deliver a focused code change from intake to pull request gate. Keep the user's
request, ticket context, repository conventions, and verification output as the
source of truth.

## Load First

- Read `coding-standards`.
- Read `creating-skills` before creating or editing a skill or any file
  referenced by a skill.
- Read `pull-request` before creating or preparing a pull request.
- Read `laravel-standards` before touching code that affects a
  Laravel application.

## Workflow

1. Identify the goal, context, constraints, and done condition. If a GitHub
   issue is provided, read it before editing and extract the problem, expected
   behavior, acceptance criteria, and non-goals.
2. Inspect the relevant code, tests, and documented commands before choosing an
   implementation.
3. Ask only blocking questions. If the request is clear enough to implement,
   start without waiting.
4. Before touching Laravel delivery code, name the `src` application use case
   that owns the behavior. If the use case does not exist, create or update it
   first; keep controllers, commands, jobs, listeners, and middleware limited to
   delivery wiring and response mapping.
5. Make the smallest maintainable change that satisfies the request. Follow
   existing patterns, coding standards, and Laravel delivery-layer boundaries.
6. Add or update focused tests when behavior changes or regression risk justifies
   it.

## Review Gate

After implementation, spawn a sub-agent for one independent code review round.
Do not repeat code review after fixing findings.

If the task has a GitHub issue link, pass only:

- the GitHub issue link
- the full diff

If the task has no GitHub link or issue link, pass only:

1. A ticket description extracted from the request and implementation by using
   `ticket-planning`.
2. The full diff.

Instruct the sub-agent to use `code-review` and return that skill's exact output
format.

- Fix `Blocker` and `Normal` findings before continuing.
- Do not fix `Low` findings automatically. Show them to the user and ask how to
  proceed.

## Verification Gate

- Run these Mago commands in order:
  1. `mago fmt --check`
  2. `mago lint`
  3. `mago analyze`
  4. `mago guard`
- Fix Mago warnings and errors, then rerun Mago.
- Stop and ask the user when a Mago fix would change the implementation
  direction. Include concrete options.
- Run relevant tests after Mago passes. Start focused; broaden when shared
  behavior or risk requires it. Fix failures and rerun.

## Pull Request Gate

Create a pull request only after the implementation is done, required review
findings are handled, Mago is clean, and relevant tests pass. Otherwise report
the blocker instead of opening the PR.

When this gate is clean, follow `pull-request` to write the title and
description.
