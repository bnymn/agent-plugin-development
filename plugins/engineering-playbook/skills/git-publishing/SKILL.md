---
name: git-publishing
description: Commits and pushes completed changes and creates pull requests. Use when the user requests commit-and-push or a PR for local changes.
---

# Git Publishing

## Runtime

When running as `git-publisher`, read
`references/git-publisher-agent.md` completely and follow it.

## Workflow

1. Invoke `git-publisher` only after implementation, review, and verification
   when the user requests commit-and-push or a pull request.
2. Give it the repository path, change scope, exact paths, and any requested PR
   base or readiness.
3. If unavailable, follow `references/git-publisher-agent.md` in this thread.

Keep edits, verification, conflict resolution, and ambiguous scope decisions
outside this agent.

## Install the Custom Agent

Copy `assets/git-publisher.toml` to one destination:

- Repository: `<repository>/.codex/agents/git-publisher.toml`
- Personal: `~/.codex/agents/git-publisher.toml`

Do not overwrite without approval. Start a new Codex session after copying.
