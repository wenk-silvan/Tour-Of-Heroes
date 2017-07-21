# Tour of Heroes

The *Tour of Heroes* is the official guide to learn Angular (currently version 4.3) step by step. 
Lots of features like routing, search-terms and services are covered in this example project. There are also
end-2-end tests and unit tests ready to run.

[Angular Tutorial](https://angular.io/tutorial)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.1.

## First steps

Clone the project and run `npm install` insiden the project folder.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Production server

Run `node server.js` to start the [ExpressJS](http://expressjs.com/) server on port 3030. Before running the production server make sure there is a `dist` 
folder in the root directory with content (including a `index.html` file). If not, build the project with `ng build --prod`.
If you afterwords start the development server, the `dist` folder will automatically be removed.
There is one sample api (`http://localhost:3030/api`), use this example if you want to fetch data from a database.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).
If you have WebStorm available you can create a karma config file as written in the 
[instruction](https://www.jetbrains.com/help/webstorm/run-debug-configuration-protractor.html)
and run it within the IDE.

## Running end-to-end tests

Run `node .\node_modules\protractor\bin\protractor --disableChecks` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `npm start`. If you have WebStorm available you can create 
a protractor config file as written in the [instruction](https://www.jetbrains.com/help/webstorm/run-debug-configuration-protractor.html)
and run it within the IDE.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
For further questions ask the creator of this project -> https://github.com/wenksi
