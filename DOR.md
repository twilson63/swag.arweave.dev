# Definition of Ready

The purpose of this document is to describe the requirements for an issue in
this project. By defining the definition of ready communicate effectively what a
developer needs in order to start building the task. This may vary for different
types of issues.

## Types of Issues

- chore
- feature(UX)
- feature(Business/Services)
- change/fix

## Chore

A chore is a background task that often can not be visually verified so to sign
off on these tasks usually requires a developer. The best criteria for a chore
at the moment is to define the use case using a user story

```
As a ___
I want to ____
So that I ____
```

And then include any acceptance criteria if necessary. For example, if a chore
is to update the readme then the acceptance criteria may be just to verify the
readme is updated.

## Feature UX

This is a tough one, because you usually need to run the application to visually
verify that the UX is completed as specified. So we should have an embedded
artifact or link to an artifact view of what is being expected to properly
define this defintion of ready. If the UX request is a transition or workflow
dealing with mutliple views, then it may be nice to record a video of the click
through prototype design to give the developer clarity on the ask.

Acceptance criteria can be provided in a `gerkin` scenario format.

```
GIVEN
WHEN
THEN
```

> NOTE: A great practice is to keep your UX components a free as possible from
> any kind of logic, with component frameworks like react it is easy to embed
> this logic inside the component, but one side effect is having to test the
> full UX just to test the logic, using libraries like `robot` which is a state
> machine you can separate complex workflow logic from your presentation layer
> making it easier to create unit tests and quicker to verify in code reviews,
> because you are reading and seeing tests pass or fail, versus having to spin
> up a build of the project to visually test the entry of a form, for example.

## Feature Business Rules

Business rules should define the input, the process and the output, and very
outcome driven. In an ideal world the business logic is pure logic and we
leverage the pattern of dependency injection to provide both the presenation
layer and the services layer so there is no static dependencies. This is known
as clean architecture. Leveraging stratified design and functional ADT patterns
we can separate the specific from the general purpose, which enables efficient
unit and integration testing of pure business logic. This architecture can keep
technical debt low and make maintenance of applications clean and cheap.

TODO: Provide an example.

## Change/Fix

Changes and Bugs are very similar in the defition of ready needs, they need the
steps to reproduce or a story describing the change which can be done using a
"User Story" format.

```
As a ___
I want to ____
So that I ____
```

Then some acceptance criteria which can be provided in a `gerkin` scenario
format.

```
GIVEN
WHEN
THEN
```
