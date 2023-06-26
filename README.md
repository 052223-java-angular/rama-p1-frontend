# MyAngularApp

# P1 - Java Angular Full Stack Project

## Introduction

This is a Full Stack web application. The application 'cookbook' will be primarily built using Java, HTML, CSS and angular. The project will utilize a PostgreSQL database to store user's profiles and their recipes and will allow user to share recipes and rate them.
## User Stories

- **As a user**, I want to register an account with the app.
- **As a user**, I want to log in to my account so that I can access the recipes.
- **As a user**, I want to browse through all the available recipes, no logging required
- **As a user**, I want to search for recipes by name, nutrition, cusine or calories range.
- **As a user**, I want to have my list of recipes where I can add and remove recipes from the list , logged users only
- **As a user**, I want to view the recipes and rate them.( logged users only).
- **As a user**, I want to edit my user profile.

## MVP (Minimum Viable Product)

- User registration and login.
- Browsing and searching for recipes.
- Adding recipes to my list.
- Viewing and deleting recipes from my list.
- Modifying and deleting reviews only by the owner that created the review.
- Edit User Profile.
- Review the recipes.

## Stretch Goals

- Adding an admin role that can add, remove users or moderate their comments
- Implement an internal messaging system to communicate with other users.
- Implement 3 party authorization.

## Tech Stacks

- **Java**: The main programming language used for building the application.
- **PostgreSQL**: Used as the database to store user info, recipe details
- **Maven or Gradle**: Used for managing project dependencies.
- **JUnit**: A testing framework for Java applications, used to ensure our code works as expected.
- **Log4j**: A logging utility for debugging purposes.
- **JDBC (Java Database Connectivity)**: An API for connecting and executing queries on the database.
- **BCrypt**: A Java library for hashing and checking passwords for security.
- **JUnit, Mockito, and PowerMock**: Used for unit and integration testing.
- **Git and GitHub**: Used for version control.
- **Angular FrontEnd
- ** Edamine and Jokes API

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
