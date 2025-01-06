# README

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Development Features](#development-features)
- [Resources](#resources)

## Assessment

### Overview

As a front-end developer for a financial services company, you will be expected to demonstrate proficiency in AngularJS (version 1.x). The following assessment is designed to test your understanding of AngularJS controllers, services, and common AngularJS directives.

Your task is to create a simple banking app. The app should consist of 3 main pages - an account list view, an account detailed view, and a popup containing a form. We have provided a service that returns the bank account list & details that you can use. The app should include functionalities outlined in the acceptance criteria below, but we also strongly encourage you to follow the technical criteria below to showcase good coding practices, intuitive user experience and pleasant visual aesthetics.

### Acceptance Criteria

As an admin user, I should be able to:
  - See a list of bank accounts that display the account name, owner name, created date, checking amount, savings amount. The column values should be formatted appropriately for date and currency values. Ex: $1,200.52, 02-01-2025.
  - Filter the list via a string query that matches ONLY any of the above column names and return a matching sub-list. Sort the list by clicking on any of the 5 column names above.
  - Sort the list by clicking on any of the 5 column names above.
  - Remove entries from the list via a dedicated delete button.
  - Add new entries to the list via a dedicated button which opens a popup containing a simple form that takes in account name, owner name, checking amount, savings amount. The created date will be automatically generated at the time the entry itself is created.
    - I can click on any entry from the list view and be taken to a new page containing the detailed view of the account.The detailed view's URL should reference the accountId to retrieve the corresponding account details object included in the detailedAccountList and display the information on the page.
    - Data to be displayed: Owner name, owner age, owner's FICO score, account's checking and savings amounts, and a list of account activity.

### Technical Criteria

We would like to see:
  - Good development practices that provide clear and concise frontend code.
  - A responsive design that can adapt to multiple screen sizes (960px <-> 1920px).
  - SCSS styling from the provided TailwindCSS library.
  - Thoughts and consideration to the overall user experience & visual aesthetics of the app.

### Notes

  - The project is written in TypeScript to provide you with good intellisense. However, you are not required to utilize TypeScript (although you may do so if you prefer).


## Getting Started

### Prerequisites

- Git
  - [https://git-scm.com/downloads](https://git-scm.com/downloads)
- Node
  - [https://nodejs.org/it/download](https://nodejs.org/it/download)
- NPM
  - This is included as part of the Node download.
- Visual Studio Code (suggested)
  - [https://code.visualstudio.com/download](https://code.visualstudio.com/download)

### Setup

- Clone the repository.
  - [ - Repository]()
- Open the repository in Visual Studio Code.
- Checkout the `main` branch.
- Open a terminal and navigate inside of the `UI` folder.
- Execute the command `npm install` to install the required NPM packages.
- Execute the command `npm run serve` to build the project and start the dev server.
- Once the project is built and running, launch a browser and navigate to the location below:
  - [http://localhost:3000](http://localhost:3000)
- Webpack will continuously monitor for changes and reload the page as needed.
- You are now ready to develop!

### Development Features

This project provides several features that developers can use when building an application:

- Languages
  - The build system supports code written in JavaScript or TypeScript.
    - Note: the file extension (i.e., `.js` or `.ts`) may be omitted when importing JavaScript or TypeScript files.
  - HTML, CSS and SCSS files are supported.
- Styling
  - The build system supports usage of TailwindCSS classes, as well as stylesheets written in CSS or SCSS.
- Routing
  - The application supports routing via UI Router.
- Assets
  - The build system is configured so that images, fonts, scripts, stylesheets, markup, and JSON files can be incorporated via `import` statements. This is a key feature of Webpack. If you are not familiar with this concept, refer to the documentation below:
    - [Webpack - Asset management](https://webpack.js.org/guides/asset-management/)
- Build
  - The project uses Webpack for module bundling.

## Resources

- [AngularJS - Developer Guide](https://code.angularjs.org/1.6.10/docs/guide)
  - Fundamental AngularJS concepts and examples.
- [AngularJS - API Reference](https://code.angularjs.org/1.6.10/docs/api)
  - Reference point with detailed information about each AngularJS feature.
- [TailwindCSS - Documentation](https://tailwindcss.com/docs/installation)
  - Documentation that covers installing, configuring, and using TailwindCSS.
- [UI Router - Documentation](https://ui-router.github.io/ng1/)
  - Main page with links to additional resources.
- [UI Router - API Reference](https://ui-router.github.io/ng1/docs/latest/index.html)
  - Reference point with detailed information about each UI Router feature.
- [Angular State Inspector](https://chromewebstore.google.com/detail/angular-state-inspector/nelkodgfpddgpdbcjinaaalphkfffbem)
  - Highly-recommended browser extension that provides a simple view of an AngularJS application's internal state at runtime.
- [ - Repository]()
