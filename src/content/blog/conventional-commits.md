---
title: 'Conventional Commits'
description: 'Organize project git commits in a human readable way'
pubDate: 'May 8 2023'
heroImage: '/conventional-commits.png'
---


This document/workshop/tutorial was created to standardize and structure the commits made by our team. Doing so helps us maintain a cleaner and more organized repository, which gives us the advantage of “traveling in time” to quickly identify potential errors in older implementations, maintaining a better history of changes, and keeping better track of what’s being done on the development side of the project to justify it to the client.

![Why meme](/why-meme.png)


#### Basic Concepts

## Paragraph
[Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) is a specification that provides a lightweight framework for maintaining, organizing, and standardizing project git commits. It provides a set of easy rules to maintain a clean and explicit history of commits and changes. By following the Conventional Commits specification, developers can create a more organized and transparent repository, which can improve collaboration, code quality, and project management.

The provided structure by Conventional commits has the next shape:

#### Syntax

```
<type>[optional scope]: <description>
[optional body]
[optional footer(s)]
```

When writing a commit description, the convention is generally to follow the colon “:” with a space, use lowercase, and then use an infinitive verb such as ‘add’, ‘remove’, ‘change’, or ‘call’. It is also best to be concise and clear about the objective of the commit, avoiding the use of more than one line in the commit message or PR.

Additional details can be added in the body of the commit, but overloading the information is unnecessary. Here, we can include any information that will help other developers review and contribute to our PR, as well as provide greater context. For example, in our specific case, it is helpful to include the ticket URL to better track the project. We can also include links to other comments in Github, screenshots, videos of behaviors, notices, or explanations of certain implementations. Here we can see an example of how we can use the body:
```
feat: add new login feature

This commit adds a new login feature to the application, which allows users to log in using their email address or username.

The new login feature is accessible from the login page, and users can choose to log in using either their email address or their username.

Fixes #123
```
And the footer:
```
chore: update broken link in README

The link to the documentation in the README was broken. This commit updates the link to the correct URL.

Fixes #456

Co-authored-by: Jane Doe <jane.doe@example.com>
```

#### Types of commits, the most tricky important

![Ralph Wiggum meme](/ralph-commits.png)

We have a wide set of types to describe our changes:

- **fix:** a fix is used to detail the correction of an error in the application, rather than the code itself. For example, a fix might be used to correct a broken hook, a missing API call, or a nonloading screen for example. It is not typically used to correct minor issues, such as typos in the code (although it may be used if the typo is causing an issue in the UI, for instance) or to address comments made in a PR review. As a general rule, a defect ticket will almost always have an associated fix commit.
✅ git commit -m “fix: change display message of the modal”
✅ git commit -m “fix: solve the super mega buggy table”
❌ git commit -m “fix: resolved comments on the PR review”
❌ git commit -m “fix: typo on the test implementation on the PR review”
❌ git commit -m “fix: use objects as params in the new mandioca method”

- **feat:** is used when adding new functions or capabilities to a project. Features represent additions to the existing codebase and are typically used to extend the functionality of the application.
✅ git commit -m “feat: add new button to call the API”
❌ git commit -m “feat: upgrade Dimsum library to version 123.123.0”

- **build:** this type of commit, which is less common, is used for tasks that affect the packaging of the project, such as transpilation, compilation, and bundle generation. It is typically used when changes to the project require updates to the build system or other packaging-related configurations.
✅ git commit -m “build: modify the build script to include new dependencies”
✅ git commit -m “build: add new Webpack config to improve build speed”

- **chore:** this is one of the most generic commit types, as it is used for maintenance tasks in the project, such as updating versions, libraries, or licenses. This type of commit is typically used to keep the project up-to-date and maintain compatibility with other libraries or dependencies.
✅ git commit -m “chore: upgrade Dimsum to version 12.2.2”
✅ git commit -m “chore: add the team users to the codebase owners”

- **ci:** is used for anything related to continuous integration and deployment of the project. Note that there is some controversy around whether this type should be used instead of or in addition to the ‘build’ label, as the two can be somewhat ambiguous. In general, either label can be used for commits related to the building, testing, and deployment of the project in different environments.
✅ git commit -m “ci: add a new integration test step on the deploy”
✅ git commit -m “ci: change pre-commit hooks to the int environment”

- **docs:** is one of the clearest and specific, as it is used for changes or improvements to the documentation of the project. Examples might include updating Swagger documentation, README files, or other project documentation. This type of commit is used to help ensure that the documentation stays up-to-date and accurate, and to make it easier for other developers or contributors to understand and use the project.
✅ git commit -m “docs: create the swagger doc file”
✅ git commit -m “docs: add params and return the object to the comments on the resize function”

- **style:** this commit type is used for changes to the styling of the project that do not add any new functionality. Examples might include changes to CSS or HTML styles, or modifications to the project’s visual design.
✅ git commit -m “style: remove paddings on the left navbar”

- **refactor:** it is used for changes that improve the code, such as increasing readability, creating abstractions, or improving maintainability. Refactor commits may also involve modifying the structure or organization of the codebase. This type of commit helps to ensure that the codebase stays clean and maintainable, and can make it easier for other developers to work with and understand the project.
✅ git commit -m “refactor: use objects as params in the new mandioca method”
✅ git commit -m “refactor: solve PR comments on the new crazy method”
✅ git commit -m “refactor: add constants to the magic numbers on the grid”

- **test:** used for writing and maintaining tests of all kinds. Examples might include unit tests, integration tests, end-to-end tests, or any other type of automated or manual testing.
✅ git commit -m “test: update toolbars snapshots“
✅ git commit -m “test: add new unit tests to the super huge data table“

Remember, as with all good coding practices:

![Not mandatory practices](/commit-practices.png)

Now you can just get along with your day coding, testing, and drinking a lot of energy drinks, coffees, or mates.
