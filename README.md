# Codex Plugin Marketplace

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

## Update

Upgrade the marketplace plugin, then install the updated `engineering-playbook`
plugin from that marketplace:

```bash
codex plugin marketplace upgrade agent-plugin-development
codex plugin add engineering-playbook@agent-plugin-development
```
