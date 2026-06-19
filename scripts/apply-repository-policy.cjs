#!/usr/bin/env node

const { spawnSync } = require("node:child_process");

const repository = process.env.GITHUB_REPOSITORY || "bnymn/agent-plugin-development";
const branch = process.env.PROTECTED_BRANCH || "main";
const requiredPrTitleCheck = "Conventional PR title";
const dryRun = process.argv.includes("--dry-run");

const [owner, repo] = repository.split("/");

if (!owner || !repo) {
  console.error(
    "GITHUB_REPOSITORY must use the owner/name format, for example bnymn/agent-plugin-development.",
  );
  process.exit(1);
}

const repositoryPolicy = {
  allow_merge_commit: false,
  allow_rebase_merge: false,
  allow_squash_merge: true,
  squash_merge_commit_title: "PR_TITLE",
  squash_merge_commit_message: "BLANK",
};

const branchProtectionPolicy = {
  required_status_checks: {
    strict: true,
    contexts: [requiredPrTitleCheck],
  },
  enforce_admins: true,
  required_pull_request_reviews: {
    dismiss_stale_reviews: false,
    require_code_owner_reviews: false,
    required_approving_review_count: 0,
    require_last_push_approval: false,
  },
  restrictions: null,
  required_linear_history: true,
  allow_force_pushes: false,
  allow_deletions: false,
  block_creations: false,
  required_conversation_resolution: true,
  lock_branch: false,
  allow_fork_syncing: false,
};

function runGhApi(method, path, payload) {
  const args = [
    "api",
    `repos/${owner}/${repo}${path}`,
    "--method",
    method,
    "--input",
    "-",
  ];

  if (dryRun) {
    console.log(`[dry-run] gh ${args.join(" ")}`);
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  const result = spawnSync("gh", args, {
    input: JSON.stringify(payload),
    encoding: "utf8",
  });

  if (result.status === 0) {
    return;
  }

  if (result.stdout) {
    process.stdout.write(result.stdout);
  }

  if (result.stderr) {
    process.stderr.write(result.stderr);
  }

  console.error(
    [
      "",
      "Failed to apply repository policy.",
      "Make sure the active GitHub token has Administration repository permission.",
      `Repository: ${repository}`,
      `Branch: ${branch}`,
    ].join("\n"),
  );
  process.exit(result.status || 1);
}

console.log(`Applying repository policy to ${repository}`);
runGhApi("PATCH", "", repositoryPolicy);

console.log(`Applying branch protection policy to ${repository}:${branch}`);
runGhApi("PUT", `/branches/${encodeURIComponent(branch)}/protection`, branchProtectionPolicy);

console.log("Repository policy applied.");
