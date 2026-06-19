#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const semver = require("semver");

const version = process.argv[2];

if (!version || version !== version.trim() || version.startsWith("v") || !semver.valid(version)) {
  console.error(`Expected a strict semantic version, received: ${version || "<empty>"}`);
  process.exit(1);
}

const manifestPath = path.join(
  process.cwd(),
  "plugins",
  "engineering-playbook",
  ".codex-plugin",
  "plugin.json",
);

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
manifest.version = version;

fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Updated ${path.relative(process.cwd(), manifestPath)} to ${version}`);
