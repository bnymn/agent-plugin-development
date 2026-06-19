# Codex Plugin Marketplace

This repository is a custom Codex plugin marketplace for the
`engineering-playbook` plugin. The marketplace lets Codex discover the plugin
so it can be installed from the plugin browser.

## Install

Add the marketplace to Codex:

```bash
codex plugin marketplace add bnymn/agent-plugin-development
```

Open the plugin browser:

```text
/plugins
```

Select the marketplace, install `engineering-playbook`, and start a new Codex thread.

## Repository policy

Changes to `main` should go through pull requests. The repository policy is:

- only squash merges are enabled;
- squash merge commit titles default to the pull request title;
- merge commits and rebase merges are disabled;
- `main` requires a pull request before merging;
- `main` requires the `Conventional PR title` check to pass;
- `main` requires one approving review from `@bnymn` as code owner;
- administrators are included in the branch protection rule;
- force pushes and branch deletion are blocked.

This is a public repository, so external contributors can open pull requests from
forks. They cannot push to protected branches or merge pull requests unless they
are added as collaborators with sufficient repository permission.

The pull request workflow validates the PR title against the same commit title
convention used for releases:

```bash
npm run validate-pr-title -- "feat: add release automation"
```

Apply or re-apply the GitHub repository settings with:

```bash
npm run apply-repository-policy
```

The GitHub token used by `gh` must have repository Administration write access to
update branch protection. To preview the API payloads without changing GitHub:

```bash
npm run apply-repository-policy -- --dry-run
```
