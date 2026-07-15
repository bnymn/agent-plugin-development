---
name: git-publishing
description: Commits and pushes completed changes safely. Use only when the user explicitly requests both operations.
---

# Git Publishing

## Runtime

When running as `git-publisher`, read
`references/git-publisher-agent.md` completely and follow it.

## Workflow

1. Invoke `git-publisher` only after implementation, review, and verification.
2. Give it the repository path, change scope, and exact paths to commit.
3. If unavailable, follow `references/git-publisher-agent.md` in this thread.

Keep edits, verification, conflict resolution, and ambiguous scope decisions
outside this agent.

## Install the Custom Agent

Copy `assets/git-publisher.toml` to one destination:

- Repository: `<repository>/.codex/agents/git-publisher.toml`
- Personal: `~/.codex/agents/git-publisher.toml`

Do not overwrite without approval. Start a new Codex session after copying.
