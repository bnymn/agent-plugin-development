# Codex Plugin Marketplace

This repository is a custom Codex plugin marketplace. It publishes the `engineering-playbook` plugin, which currently includes reusable coding standards and development workflow skills.

## Structure

```text
.agents/
  plugins/
    marketplace.json
plugins/
  engineering-playbook/
    .codex-plugin/
      plugin.json
    skills/
      coding-standards/
        SKILL.md
      develop-software/
        SKILL.md
```

## Install

After this repository is pushed to GitHub, users can add the marketplace with:

```bash
codex plugin marketplace add OWNER/REPO
```

Then open the plugin browser:

```text
/plugins
```

Select the marketplace, install `engineering-playbook`, and start a new Codex thread.

## Update

After you push plugin changes, users can refresh the marketplace with:

```bash
codex plugin marketplace upgrade
```

Then reinstall or update `engineering-playbook` from the plugin browser and start a new thread so Codex picks up the updated skills.

## Release

Releases are generated automatically from conventional commits when changes land on `main`.
The release workflow uses semantic-release to calculate the next version, update
`plugins/engineering-playbook/.codex-plugin/plugin.json`, write `CHANGELOG.md`, create a Git tag,
and publish a GitHub release.

Use these commit types for versioning:

```text
fix: patch release
feat: minor release
feat!: major release
```

Breaking changes can also be marked with a `BREAKING CHANGE:` footer. Commits such as `docs:`,
`chore:`, and `refactor:` do not create a release unless they include a breaking-change marker.

Before enabling the workflow for the first time, tag the current `main` commit if `0.1.0` is the
release baseline:

```bash
git tag v0.1.0
git push origin v0.1.0
```

semantic-release calculates the next version from Git tags, not from the version already written in
`plugin.json`.

## Pull Requests

Pull request titles must use Conventional Commit format because squash merges should use the pull
request title as the final commit message.

Examples:

```text
feat: add release automation
fix(plugin): correct skill metadata
feat!: change plugin manifest contract
```

The `Pull Request / Conventional PR title` workflow validates this on every pull request targeting
the repository.

In the GitHub repository settings, enable only squash merging and set the default squash commit
message to use the pull request title. Then require the `Conventional PR title` status check in the
branch protection or ruleset for `main`.
