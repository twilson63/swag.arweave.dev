# Contributing

Thank you for checking out the contribution guide for the SWAG Project, we want
to make it as easy as possible to contribute to this project.

## What you need to know?

You should definately know how to code in HTML, CSS, and JavaScript. This
project uses Deno + Vite for the build platform and Svelte, Twind and DaisyUI
for the presentation layer. The core language is Typescript, but you may find
JavaScript with JSDocs in the business logic folders.

## How contributing works

Check out the issues on github, look for one that meets the definition of ready
standards, assign your self to the issue, if you are not a github contributor to
the project, thats ok, you can assign yourself by just dropping your github
handle in the comments of the issue.

```
assigned to @twilson63
```

- [Definition of Ready](DOR.md)
- [Definition of Done](DOD.md)

## What is the DOR or definition of ready?

The DOR (Definiton of Ready) is the required detail that should be supplied on
an issue for a developer to take accountability to complete that task. For
example, if the issue is of type `chore` then the definition of ready may be to
describe the input and the output of the request, if the issue is of type
`feat(ux)` then the definition of ready may be required to have UX designs to
represent the requirements. The short answer is the defintion of ready defines
the requirements for the issue to the developer.

## What is the DOD or definition of done?

The DOD (Defintion of Done) is the document that defines what a developer needs
to deliver unorder for the code to be accepted and shipped. As a reviewer on the
project, you should use the DOD as a checklist to determine if the pull request
contains all of the requirements for shipping.

## Grab and issue and do the work

Ok, you reviewed the issue and confirmed it has met the DOR and DOD
requirements, you assign it to your github handle and you proceed to work on the
issue. Once you have completed the issue, you are ready to deliver it, review
the DOD and make sure you check all the boxes, then publish it to github as a
pull request, and request a collegue to review.

## Review Pull Requests

Reviewing pull requests are just as important as submitting pull requests, you
want to review the code and make sure it meets the requirements of the DOD, make
any comments and either return the issue for more refinement or approve the
issue for delivery.

## Ready Player Repeat

Ok, next up is to continue to repeat the process, as you have time to work on
issues.

## No Estimates, No SCRUM, No Meetings

The purpose of a frictionless process is to do everything in an Asynchronous
way, it should be exception to have to meet, we should never have to estimate
issues, and no daily scrum, you look at the project board to determine the
current status or state the project is in. Each issue should be focused and
should not take more than two business days to complete. The sweet spot for
duration of an issue is 4 hours.

## All commit messages should follow conventional commits

https://www.conventionalcommits.org/en/v1.0.0/

## Dependencies

As frictionless developers we want to keep dependencies to a minimum, you should
be able to accomplish everything you need with Svelte, TWind, and DaisyUI from
presentation perspective. As far as business logic there are four modules that
can cover 90 percent of the scenarios.

- Robot - State machines - by putting UX workflow in state machines, you are
  able to create reliable unit test without having to run the ux, this is great
  for mobile testing scenarios
- Ramda - Ramda is a functional utility library that leverages stratified design
  to provide a higher layer of building blocks for business logic, this makes
  business logic reusable and resilent over time.
- Crocs - Crocks is a ADT library that provides types that protect business
  logic from leakage and creates a more resilent container for processing your
  business rules.
- Svelte Store - Svelte Stores provide mechaisms to server business logic to
  many components and pages leveraging state management

From time to time there may be a need for a specific dependency to solve a
specific problem, but all in all we want to try to keep dependencies down to a
minimum. For example, we may be able to use a vanilla Async ADT instead of the
entire crocs library for starters. Or if the application is simple enough we may
be able to use vanilla ramda utilities. The decisions can keep the surface area
of the application to a small performant level.

## Have fun

This is a community driven product so most importantly lets have fun, lets work
in a way where we ship high quality code, but have a lot of fun doing it!

## Proposals

Contributing should always be a discussion, we should be open to change and
embrace better options, but we also should debate recommendations and be
skeptical of change for changes sake.
