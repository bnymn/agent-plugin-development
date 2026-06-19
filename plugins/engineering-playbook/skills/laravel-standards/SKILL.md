---
name: laravel-standards
description: >-
  Coding standards for a Laravel application in a repository that may contain
  multiple applications. Use when the coding agent is modifying or reviewing
  code changes inside the Laravel application codebase.
---

# Laravel Standards

Laravel is only the delivery and composition layer: collect input, run
delivery/form/frontend validation for shape and UX only, invoke a
`src/.../Application/UseCase`, and map the result back to the framework
response. Do not put business rules, use-case orchestration, domain decisions,
persistence logic, or infrastructure adapter behavior in Laravel delivery code;
those belong in `src` according to the hexagonal architecture rule.
