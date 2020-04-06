# ROSS-MVEcom-Quality

ROSS-MVEcom-Quality is a [Javascript](https://nodejs.org/en/) library for dealing with [Protractor](https://www.protractortest.org/#/)
## Installation

Use the package manager [npm](https://www.npmjs.com/) to install.

```bash
npm install
```
Make sure to be in the same .cd/folder where the package.json is when installing.

## Usage

To run locally using Chrome:
```cmd
protractor e2e_local.js
```

To run through browserstack:
```cmd
protractor e2e_desktop.js
```

## Code review/Contributing
To be updated/TBU.

## How to commit new code


Create a new branch on your local machine use prefix feature

```
TBU
```


Make changes to code. Make sure there are no lint errors or warnings. Commit and push to origin.

```
TBU
```

Back in github create the pull request. Write a description on:

* A descriptive title.
* What you have done.
* Why you have done it.
* If anything is left to do to complete the task.
* Add which jira issue you are working on at the bottom of the message as JIRA=IC-123

Add reviewers at least one code owner has to approve and the build pipeline must pass all tests. Press merge button and add the descriptions you made for the pull request to the (squash) commit message. The message will now appear when you do $ git log.



![Image success](https://i.imgur.com/DNXrssV.png)
