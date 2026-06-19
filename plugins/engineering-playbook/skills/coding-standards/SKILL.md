---
name: coding-standards
description: Apply reusable coding standards while implementing, refactoring, reviewing, or explaining software changes. Use when the user asks to follow project-wide engineering conventions, enforce coding style, improve maintainability, add tests, or keep behavior consistent across repositories.
---

# Coding Standards

- Prioritize long-term maintainability. If existing code violates this, explain the concern and suggest the maintainable change for approval instead of copying the current pattern.
- Follow SOLID, DRY, and YAGNI.
- When the code is not obvious at first glance, extract it behind a private/protected method or dedicated class with a name that explains the intent. A reader should understand what the logic means from the name before reading the implementation.
- Name methods, classes, variables, and use cases after what they actually do, including important side effects. Do not use names that hide behavior.
- Avoid negative boolean names for methods, variables, value objects, and persisted fields. Prefer positive names such as `isEnabled` or `isPubliclyAvailable` instead of `isDisabled`, `isPaused`, or other names where `true` means a negative state.
- Use `validate...` for value object validation methods that throw, and make them return `void`. Use predicate names such as `is...`, `has...`, or `does...` only for methods that return `bool` and do not throw.

## Rule: Hexagonal Architecture
Follow hexagonal architecture as the baseline. Apply these project conventions on top of it:

- Organize each module as `Domain`, `Application`, and `Infrastructure`; dependencies point inward only.
- Use cases live under `<Module>/Application/UseCase`, start with a verb, end with `UseCase`, do one user-intent only, and expose exactly one public method: `__invoke`. For example, use `CreateUserUseCase`, not `UserCreationUseCase`.
- Use explicit parameters on `__invoke`; add input DTOs only when they provide real behavior, reuse, validation, normalization, or boundary mapping.
- Ports are interfaces named `*Interface`; domain-needed ports live in `Domain`, application-needed ports live in `Application`, and concrete adapters live in `Infrastructure`.
