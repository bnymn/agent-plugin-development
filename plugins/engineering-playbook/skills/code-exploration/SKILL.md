---
name: code-exploration
description: Explores broad repositories and traces code contracts without edits. Use for cross-module mapping, call-path tracing, or dependency and interface discovery before a decision.
---

# Code Exploration

## Agent Runtime

When running as `code-explorer`, read
`references/code-explorer-agent.md` completely and follow it instead of the
delegation workflow below.

## Workflow

1. Use `code-explorer` only for bounded, read-only questions about existing
   code.
2. Keep ambiguous architecture, design selection, and undocumented product or
   business tradeoffs with a stronger general-purpose agent. Escalate if these
   emerge during exploration.
3. Provide one question, the repository scope, and known entry points. Require
   a report of at most 300 words with conclusions, file references, contracts,
   risks, and unresolved questions.
4. If `code-explorer` is unavailable, use the built-in `explorer`. If
   subagents are unavailable, explore in the current thread under the same
   read-only scope and report limit.

## Install the Custom Agent

Copy `assets/code-explorer.toml` to one destination:

- Repository: `<repository>/.codex/agents/code-explorer.toml`
- Personal: `~/.codex/agents/code-explorer.toml`

Do not overwrite without approval. Start a new Codex session after copying.
Plugin updates refresh the runtime instructions automatically; copy the TOML
again only when its model, reasoning, sandbox, or bootstrap changes.
