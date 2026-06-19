#!/usr/bin/env node

const title = process.argv.slice(2).join(" ") || process.env.PR_TITLE || "";
const allowedTypes = [
  "build",
  "chore",
  "ci",
  "docs",
  "feat",
  "fix",
  "perf",
  "refactor",
  "revert",
  "style",
  "test",
];

const typePattern = allowedTypes.join("|");
const conventionalTitlePattern = new RegExp(
  `^(${typePattern})(\\([a-z0-9._-]+\\))?!?: [^\\s].+$`,
);

if (conventionalTitlePattern.test(title)) {
  console.log(`Valid Conventional Commit title: ${title}`);
  process.exit(0);
}

console.error("Pull request title must use Conventional Commit format.");
console.error("");
console.error("Examples:");
console.error("  feat: add release automation");
console.error("  fix(plugin): correct skill metadata");
console.error("  feat!: change plugin manifest contract");
console.error("");
console.error(`Allowed types: ${allowedTypes.join(", ")}`);
console.error(`Received: ${title || "<empty>"}`);
process.exit(1);
