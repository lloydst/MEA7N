# Ng7

## description
This boiler plate is meant as a quick start for setting up new Mean-stack applications

 > prereqisites:
 node js, v8+ (angular 7 has node v.10 support)
 either a mlab account for a cloud setup of your data base, or a local installation of MongoDB.

## setting up
pull this repository: `git pull https://github.com/lloydst/MEA7N.git .` the '.' is only required if you are in the folder you want as your project root.
After that is done make shure you are in the projects root and run `npm install` that will install all your packages. then you have to run `ng build` to build a very basic angular 7 app. at that point you can start the nodejs/express server with `npm start`

## development
run the server in development with hot-reload `npm run start-dev`,
and build the angular app on changes `ng build --watch`. it is best to run both of these commands at the same same time in diferent console's. styling updates made to src/scss will affect the ng build --watch command as well thus by passing the need for grunt and the like.


## standard ng cli stuff below
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Optional
### State
install ngrx and add ngrx schematics to your angular cli (in this project)
 - `npm install @ngrx/schematics --save-dev`
 - `ng config cli.defaultCollection @ngrx/schematics`
 - install ngrx packages:

    `npm install @ngrx/store @ngrx/effects @ngrx/store-devtools @ngrx/router-store –save npm install @ngrx/schematics --save-dev`
 - generate store folder in app folder with 'root' reducer

    `ng generate store State --root --statePath store/reducers --module app.module.ts`
 - fix the environment import in the app.module.ts file.

commands for creating a store:
 - action:

 `ng generate action store/actions/${name} --actions index.ts`
 - reducer:

 `ng generate reducer store/reducers/${name} --reducers index.ts`
 - effects:

 `ng generate effect store/effects/${name} --module app.module --root true`

 commonly used imports in a effect file are:
 - `import { Injectable } from '@angular/core';`
 - `import { Actions, Effect, ofType } from '@ngrx/effects';`
 - `import { Observable } from 'rxjs';`
 - `import { HttpClient } from '@angular/common/http';`
 - `import * as authActions from '../actions/auth.actions';` (this one has to be changed ofc)
 - `import { Action } from '@ngrx/store';`
 - `import { switchMap, map } from 'rxjs/operators';`

