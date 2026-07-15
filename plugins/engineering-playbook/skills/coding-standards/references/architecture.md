# Hexagonal Architecture

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
