---
name: laravel-standards
description: >-
  Coding standards for a Laravel application in a repository that may contain
  multiple applications. Use when the agent is modifying or reviewing
  code changes inside the Laravel application codebase.
---

# Laravel Standards

## Non-Negotiable Boundary

Treat Laravel as infrastructure only. Use Laravel only for HTTP/UI, console
commands, scheduled tasks, queue workers, events, service providers, and runtime
integrations. Do not create `Domain` or `Application` layers inside Laravel.

Laravel is only the delivery and composition layer. Controllers, form requests,
commands, jobs, listeners, middleware, providers, models, policies, resources,
and other framework classes may collect input, run delivery/form/frontend
validation for shape and UX only, invoke a `src/.../Application/UseCase`, and map
the result back to the framework response.

Do not put business rules, use-case orchestration, domain decisions, workflow
branching, pricing, eligibility, state transitions, authorization policy
decisions, persistence decisions, transaction boundaries, or infrastructure
adapter behavior in Laravel delivery code. These belong in `src`, under the
application or domain layer according to the hexagonal architecture rule.

Laravel delivery code must not call the database or persistence abstractions
directly. Do not use Eloquent models, query builders, `DB`, repositories,
transactions, or persistence facades from controllers, commands, jobs,
listeners, middleware, requests, policies, or resources. If the feature needs
data, call one explicit `src/.../Application/UseCase`; that use case must reach
persistence through application/domain ports implemented by infrastructure
adapters under `src`.

Do not orchestrate multiple business actions in Laravel delivery code. If a
controller, command, job, listener, or middleware needs to coordinate multiple
steps, create or update a single application use case in `src` and call it from
Laravel. The Laravel class remains thin delivery wiring.

Before changing any Laravel delivery class, identify the `src` use case that
will own the business behavior. If no such use case exists, create it or move
the behavior into `src` before changing the Laravel class. Existing violations
are not precedent: do not extend them. Treat any new or expanded business logic,
application orchestration, or direct persistence call in Laravel delivery code as
a blocking architecture violation.

Do not fetch dependencies or runtime configuration at the use site with Laravel
helpers or facades such as `app()`, `resolve()`, `App::make()`, `config()`, or
`Config::get()`. If a class needs a service or config value, expose that
dependency explicitly through constructor or method injection. Wire services,
adapters, and primitive config values in Laravel composition code, and pass
configuration through typed settings/value objects when doing so keeps
application and domain code independent from the framework.
