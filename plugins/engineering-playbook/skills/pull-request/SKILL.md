---
name: pull-request
description: >-
  Writes and creates small GitHub pull requests with Conventional Commit titles,
  concise descriptions, and issue-closing references. Use when opening,
  drafting, publishing, or preparing a pull request.
---

# Pull Request

## Workflow

1. Use a short Conventional Commit title. Do not add an issue number to the title
   unless the repository requires it.
   In this repository, classify skill-file changes as `feat` or `fix`, never
   `docs`.
2. Write one high-level plain-English paragraph for the body. Leave out
   implementation details, test logs, file lists, checklists, and review notes
   unless a repository template requires them.
3. When the PR resolves a GitHub issue, include `Closes #<issue-number>` in the
   body. Use `Fixes #<issue-number>` only when that wording better matches the
   work. Do not mention issues the PR does not resolve.
4. After creating the PR, verify the title and body. If a required issue-closing
   reference is missing, update the PR body immediately.
