---
title: "Conventional Commits"
date: 2023-05-08
excerpt: "How to organize your git commits in a way the team can read. A lightweight framework for keeping a clean, transparent history."
category: "Engineering"
url: "/en/blog/conventional-commits"
---

If you've ever opened a project's commit history and found something like this:

![Commits with no convention](/ralph-commits.png)

...you know exactly what I'm talking about.

## The problem

A git history should be a logbook. It should be able to answer questions like: what changed? why? when did this break?

But in most projects it ends up being a graveyard of messages like `fix`, `patch`, `wip`, `changes`, `now it works`. Useful for nothing.

The problem isn't bad intentions — it's the lack of a shared convention. When there are no rules, each person writes whatever feels right in the moment. And that destroys the value of the history.

## The solution: Conventional Commits

[Conventional Commits](https://www.conventionalcommits.org/) is a lightweight specification that defines a simple format for commit messages:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Main types

| Type | When to use it |
|------|---------------|
| `feat` | New functionality |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Formatting, whitespace, semicolons (no logic change) |
| `refactor` | Refactor without a bug fix or feature |
| `test` | Add or modify tests |
| `chore` | Maintenance, build, CI tasks |

### Real examples

```
feat(auth): add Google OAuth login
fix(api): handle null response from payment gateway
docs: update README with setup instructions
chore: bump dependencies to latest versions
refactor(cart): extract price calculation into service
```

![Structure of a commit](/conventional-commits.png)

## Why it's worth it

### 1. The history becomes readable

When everyone uses the same format, you can scan the log and understand what happened without opening each commit. `git log --oneline` stops being noise and starts being information.

### 2. Automatic changelog generation

Tools like [standard-version](https://github.com/conventional-changelog/standard-version) or [semantic-release](https://github.com/semantic-release/semantic-release) can read your commits and generate a `CHANGELOG.md` automatically. `feat`s go to the features section, `fix`es to bug fixes, and `BREAKING CHANGE`s are highlighted.

### 3. Automatable semantic versioning

If commits follow the convention, you can automate the decision of whether the next version is a patch, minor or major:

- `fix` → patch (1.0.**1**)
- `feat` → minor (1.**1**.0)
- `BREAKING CHANGE` → major (**2**.0.0)

### 4. Cleaner code review

A well-named commit tells the reviewer exactly what they're looking at before opening the diff. That saves time and reduces the mental context needed to review.

![Good commit practices](/commit-practices.png)

## How to adopt it on your team

The biggest obstacle isn't technical — it's the habit. A few steps so it doesn't fade away:

**Commitizen** is a CLI tool that guides you interactively to build the commit according to the convention. Instead of writing the message by hand, you answer questions.

```bash
npx cz
```

**commitlint** + **husky** let you reject commits that don't follow the format, right in the pre-commit hook. If the message doesn't comply, the commit doesn't go through.

```bash
npm install --save-dev @commitlint/config-conventional @commitlint/cli husky
```

```js
// commitlint.config.js
module.exports = { extends: ['@commitlint/config-conventional'] };
```

## What it isn't

Conventional Commits isn't a rule about the size of the commit, nor about when to push. It's only about the message. You can have an enormous commit with a perfect message — though if the commit is enormous, that's another problem.

---

The convention doesn't need to be 100% perfect from day one. What matters is that the team agrees on something and sticks to it. A history that's 80% readable is infinitely better than one that isn't readable at all.
