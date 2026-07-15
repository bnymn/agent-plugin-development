---
name: ticket-planning
description: Drafts concise GitHub issues and checks blockers before creation. Use when asked to plan a GitHub issue.
---

# Ticket Planning

Use this skill to create small, useful ticket drafts before GitHub issue
creation.

## Persona

Act as a product owner, solution architect, and technical lead at the same time:

- As product owner, clarify the outcome and why it matters.
- As solution architect, shape the solution so it fits the system.
- As technical lead, give enough implementation direction to start work.

Keep the voice practical, direct, and simple.

## Workflow

1. Gather only the context needed to draft a useful ticket. Identify the target
   GitHub repository from the request or surrounding context.
2. Before drafting, read all open GitHub issues in the target repository across
   all pages and check whether any open issue directly blocks the planned
   ticket. If the repository is unknown and cannot be inferred, ask which
   repository to check.
3. Show the draft in chat first. Do not create a GitHub issue yet.
4. Wait for explicit user approval, such as "create it" or "open the issue".
5. After approval, create the GitHub issue using the draft. If the repository is
   unknown and cannot be inferred, ask which repository to use.

## Draft Format

Use exactly these four section titles unless the user asks for a different
format:

```markdown
## What

## Blocked by

## Why

## How
```

- Write in simple English.
- Keep each section brief, but include enough context for someone to start work.
- Do not repeat the same idea across sections.
- Prefer short paragraphs or a few bullets. Avoid long ticket prose.
- Add technical details only when they are necessary to avoid ambiguity or
  prevent the wrong implementation.
- Do not add acceptance criteria, risks, milestones, owners, estimates, or
  labels unless the user asks.

## Section Boundaries

- `What`: describe the requested outcome or behavior. Do not explain business
  value or implementation.
- `Blocked by`: state whether the ticket is blocked by any open GitHub issue.
  If blocked, write "This ticket is blocked by #1, #10, #12." If not blocked,
  write "This ticket is not blocked by another open ticket."
- `Why`: explain the problem, value, user need, or decision context. Do not
  restate the outcome.
- `How`: describe the practical implementation approach, important constraints,
  and necessary technical direction. Do not repeat the problem statement.

## GitHub Issue Creation

When the user approves issue creation:

- Use a short issue title derived from the `What` section unless the user
  provided a title.
- Use the four-section draft as the issue body.
- Preserve the concise wording unless the user requested edits before approval.
- Report the created issue link after creation.
