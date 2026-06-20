---
name: laravel-standards
description: >-
  Coding standards for a Laravel application in a repository that may contain
  multiple applications. Use when the agent is modifying or reviewing
  code changes inside the Laravel application codebase.
---

# Laravel Standards

- Treat Laravel as infrastructure only.
- Use Laravel only for HTTP/UI, console commands, scheduled tasks, queue
  workers, events, service providers, and runtime integrations.
- Do not create `Domain` or `Application` layers inside Laravel.
- Do not put business rules, domain decisions, use-case orchestration, workflow
  branching, pricing, eligibility, state transitions, persistence decisions, or
  policy decisions in Laravel.
- Keep Laravel controllers, requests, commands, jobs, listeners, middleware,
  providers, models, and other framework code limited to input collection,
  delivery validation, `src` entrypoint calls, and framework output mapping.
- Put business and application behavior in `src`.
