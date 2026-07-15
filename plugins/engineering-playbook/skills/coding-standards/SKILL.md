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

## Rule: Truthful Naming
All text and names must tell the truth about the implementation they represent.

1. Name classes, methods, variables, use cases, tests, comments, and labels
   after what they actually do or mean.
2. Include important side effects, boundaries, and failure behavior in the name
   when omitting them would mislead the reader.
3. Prefer renaming over hiding behavior behind vague, aspirational, or
   overly-polished language.

## Conditional References

After identifying the affected code, read only the references that apply:

- Read [privacy.md](references/privacy.md) when the request, issue, or affected
  data flow handles personal data or changes its collection, processing,
  storage, exposure, retention, or deletion.
- Read [architecture.md](references/architecture.md) when the affected code
  contains a conditional, validation, state transition, calculation, policy,
  or workflow decision that may be business behavior, or when the change
  affects a business module, use case, port, adapter, or layer boundary.
- Read [php-testing.md](references/php-testing.md) before adding, updating, or
  reviewing PHP tests.
