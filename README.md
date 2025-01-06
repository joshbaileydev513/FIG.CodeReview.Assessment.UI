# README

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Development Features](#development-features)
- [Resources](#resources)

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
