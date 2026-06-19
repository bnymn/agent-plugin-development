---
name: code-review
description: Perform a strict code review for software changes. Use when the coding agent is asked to perform a code review.
---

# Code Review

## Required Context

Before reviewing the code, read these skills completely:

- `coding-standards`
- `laravel-standards` when the changed code is inside, touches, or affects a
  Laravel application

Use those standards as hard review criteria, not background suggestions.

## Review Process

1. Identify the exact review scope: pull request, issue implementation, branch
   diff, commit diff, staged changes, or working-tree changes.
2. Inspect every changed file line by line. For each changed class, method,
   function, variable, route, config value, migration, test, and dependency
   boundary, check whether the implementation is correct and whether the names
   reveal the real behavior.
3. Read surrounding code until the intent, call paths, data flow, side effects,
   and failure behavior are clear. Do not review a line in isolation when nearby
   code changes its meaning.
4. Check the implementation against:
   - coding standards and hexagonal architecture rules
   - Laravel delivery-layer boundaries and framework conventions
   - functional correctness against the requested behavior
   - security, authorization, validation, escaping, secrets, and data exposure
   - edge cases, null/empty states, invalid input, missing records, partial failures, and retries
   - race conditions, transactions, idempotency, locks, queues, events, and concurrent requests
   - persistence behavior, migrations, rollbacks, indexes, and data integrity
   - API contracts, backward compatibility, error responses, and observability
   - test coverage, test quality, and missing regression scenarios
   - maintainability, duplication, coupling, naming, and unnecessary abstractions
5. Treat issues as findings only when they are actionable and grounded in the
   reviewed code. Avoid speculative findings unless the risk is concrete and
   explain the assumption.
6. Prefer small, local fixes that preserve the existing architecture. Suggest
   broader redesign only when the local fix would hide a deeper correctness or
   maintainability problem.

## Output Format

Lead with numbered findings ordered by severity. Each finding must include:

```text
1. <Title>
   Severity: <Blocker|Normal|Low>
   Location: <file:line or file:method>
   What: <what is wrong>
   Why: <impact or risk>
   How: <specific fix direction>
```

After findings, include:

- `Open questions:` only when answers would change the review outcome.
- `Tests:` describe relevant tests run or missing verification.
- `Summary:` one short paragraph only after the findings.

If there are no findings, state that clearly and still mention residual risks or
missing tests.
