---
name: coding-standards
description: Defines shared implementation and review standards loaded by the development and code-review workflows.
---

# Coding Standards

- Prioritize long-term maintainability. If existing code violates this, explain
  the concern and suggest the maintainable change for approval instead of
  copying the current pattern.
- Follow SOLID, DRY, and YAGNI.
- When the code is not obvious at first glance, extract it behind a
  private/protected method or dedicated class with a name that explains the
  intent. A reader should understand what the logic means from the name before
  reading the implementation.
- Avoid negative boolean names for methods, variables, value objects, and
  persisted fields. Prefer positive names such as `isEnabled` or
  `isPubliclyAvailable` instead of `isDisabled`, `isPaused`, or other names
  where `true` means a negative state.
- Use `validate...` for value object validation methods that throw, and make
  them return `void`. Use predicate names such as `is...`, `has...`, or
  `does...` only for methods that return `bool` and do not throw.
- In PHP tests, mark test methods with the `#[Test]` attribute instead of the `test...` prefix or `@test` docblock annotation.

## Rule: Truthful Naming
All text and names must tell the truth about the implementation they represent.

1. Name classes, methods, variables, use cases, tests, comments, and labels
   after what they actually do or mean.
2. Include important side effects, boundaries, and failure behavior in the name
   when omitting them would mislead the reader.
3. Prefer renaming over hiding behavior behind vague, aspirational, or
   overly-polished language.

## Rule: GDPR
During every feature implementation and code review, check whether personal data
is involved. If so, do not complete or approve the change until these are clear:

- Why the data is collected and the lawful basis.
- How the minimum necessary data is processed and protected.
- How long the data is retained.
- When and how the data is deleted.

Treat unknown GDPR requirements as blockers and request privacy or legal guidance.

## Rule: Hexagonal Architecture
Follow hexagonal architecture as the baseline.

- Organize each business module in `src` as `Domain`, `Application`, and `Infrastructure`;
  dependencies point inward only.
- Before writing or reviewing any conditional, validation, state transition,
  calculation, policy, or workflow decision, ask: "Is this a business rule?"
- If the answer is yes, put it in `Domain`. This is a hard requirement: business
  rules must never live in `Application`, `Infrastructure`, framework code,
  adapters, controllers, jobs, requests, commands, listeners, or UI glue.
- Use `Application` only for use-case orchestration, transaction boundaries,
  authorization handoff, domain calls, ports, and input/output mapping.
- Use `Infrastructure` only for adapters such as persistence, queues, HTTP
  clients, framework integration, and serialization.
- Treat framework applications as infrastructure adapters only; do not create
  or hide `Domain`, `Application`, business rules, or use-case orchestration
  there.
- Use cases live under `<Module>/Application/UseCase`, start with a verb, end
  with `UseCase`, do one user-intent only, and expose exactly one public method:
  `__invoke`. For example, use `CreateUserUseCase`, not
  `UserCreationUseCase`.
- Use explicit parameters on `__invoke`; add input DTOs only when they provide
  real behavior, reuse, validation, normalization, or boundary mapping.
- Ports are interfaces named `*Interface`; domain-needed ports live in
  `Domain`, application-needed ports live in `Application`, and concrete
  adapters live in `Infrastructure`.
