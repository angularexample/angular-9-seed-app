# angular-9-seed-app

Angular 9 Seed App. Download this app to begin a new app using Angular 9.

Created by AngularExample. [https://github.com/angularexample](https://github.com/angularexample)

Full source code available at [https://github.com/angularexample/angular-9-seed-app](https://github.com/angularexample/angular-9-seed-app)

### Screen Shot

![Angular 9 Seed App](https://github.com/angularexample/angular-9-seed-app/blob/master/src/assets/images/angular-9-seed-app.png)

## Table of Contents
* [About The Author](#about-the-author)
* [Purpose Of This Project](#purpose-of-this-project)
* [Project Setup](#project-setup)
  * [Prerequisites](#prerequisites)
  * [How To Install](#how-to-install)
  * [How To Run](#how-to-run)
  * [How To Run Unit Tests](#how-to-run-unit-tests)
  * [How To Run End To End Tests](#how-to-run-end-to-end-tests)
* [Software Libraries Used](#software-libraries-used)
* [Angular Best Practices Included](#angular-best-practices-included)
  * [Set Change Detection As Default](#set-change-detection-as-default)
  * [All Services Use ProvidedIn](#all-services-use-providedin)
  * [Each Service Has A Service Module](#each-service-has-a-service-module)
    * [Import Services As A Module At The Dependant Module Level](#import-services-as-a-module-at-the-dependant-module-level)
    * [Why Not To Import Services At App Level](#why-not-to-import-services-at-app-level)
  * [Set A Prefix For Components](#set-a-prefix-for-components)
    * [Use The Unique Prefix In Class Names](#use-the-unique-prefix-in-class-names)
      * [Quickly Recognize All Your Custom Objects](#quickly-recognize-all-your-custom-objects)
      * [IDE Type-Ahead Shows Only Your Classes](#ide-type-ahead-shows-only-your-classes)
      * [Unique Prefix Also For Services And Modules](#unique-prefix-also-for-services-and-modules)
      * [Unique Prefix In File Names And Directories](#unique-prefix-in-file-names-and-directories)
  * [Set Styles To Use SCSS](#set-styles-to-use-scss)
  * [Set Style Paths To Avoid Relative Paths in CSS](#set-style-paths-to-avoid-relative-paths-in-css)
  * [Set Path Variables To Avoid Relative Paths In Import](#set-path-variables-to-avoid-relative-paths-in-import)
  * [Exclude Files For Testing And Coverage](#exclude-files-for-testing-and-coverage)
* [Configured For Large Scale Projects](#configured-for-large-scale-projects)
  * [Common Package For Shared Services And Components](#common-package-for-shared-services-and-components)
    * [Alert Service](#alert-service)
    * [Data Service](#data-service)
    * [Data Error Interceptor ](#data-error-interceptor)
    * [Run Time Error Handler](#run-time-error-handler)
    * [Log Service](#log-service)
    * [Message Service](#message-service)
      * [How To Use The Message Service](#how-to-use-the-message-service)
  * [Styles Has Global Colors](#styles-has-global-colors)
  * [Styles Have Media Breakpoints For Responsive Design](#styles-have-media-breakpoints-for-responsive-design)
  * [Complete Tests Are Done For All Existing Services And Components](#complete-tests-are-done-for-all-existing-services-and-components)
  * [Angular Material and CDK Are Installed And Configured](#angular-material-and-cdk-are-installed-and-configured)
  * [Angular Material Icons Are Installed And Configured](#angular-material-icons-are-installed-and-configured)
  * [App Component Has Routing](#app-component-has-routing)
    * [If You Do Not Need Any Routing](#if-you-do-not-need-any-routing)
  * [Home Page And Page Not Found Are Done](#home-page-and-page-not-found-are-done)
  * [Header Component Is Done](#header-component-is-done)

## About The Author

**JC Lango** is a UI Architect and UI Developer for large scale web applications at several Fortune 500 companies.

He is an expert in **Angular**, **Polymer**, and **React** and maintains these sites at Github:

* **AngularExample** [https://github.com/angularexample](https://github.com/angularexample)
* **PolymerExample** [https://github.com/polymerexample](https://github.com/polymerexample)
* **ReactJSExample** [https://github.com/reactjsexample](https://github.com/reactjsexample)

JC may be available to work remote, and can be contacted at these links:
 
* LinkedIn: [https://www.linkedin.com/in/jclango](https://www.linkedin.com/in/jclango)
* Email: [jobs@jclango.com](mailto:jobs@jclango.com)

## Purpose Of This Project

The purpose of this project is to provide an Angular 9 seed app.

You can download this app to begin a new project in Angular 9.

It includes many [Angular Best Practices](#angular-best-practices-included), and
[Advanced Configurations](#configured-for-large-scale-projects),
with architecture designed for large scale applications.

Check out the rest of this README for more information.

## Project Setup

### Prerequisites

You need to have Node and NPM installed on your PC.

[Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### How To Install

Download the source code using git or else download and unzip the zip file.

Open a terminal window and go to the project root folder.

You need to have npm installed globally.

Run `npm i` to install the required libraries.

### How To Run

Run `ng serve` for a dev server.

Navigate to `http://localhost:4200/`.

The browser will automatically reload if you change any of the source files.

### How To Run Unit Tests

To run the unit tests, you need to stop the server.
 
If the server is running, stop the server from the terminal window by pressing *Control-C*.

To run the unit tests, Run the following command in the terminal window.

`ng test -- --no-watch --no-progress --browsers=ChromeHeadlessCI`

And if you're running on Windows,
include the `--disable-gpu` flag. See [crbug.com/737678](https://bugs.chromium.org/p/chromium/issues/detail?id=737678).

### How To Run End To End Tests

To run the unit tests using Angular *cli*, you need to stop the server.
 
If the server is running, stop the server from the terminal window by pressing *Control-C*.

To run the e2e tests using Angular cli, Run the following command in the terminal window.

`ng e2e -- --protractor-config=e2e/protractor-ci.conf.js`

And if you're running on Windows,
include the `--disable-gpu` flag. See [crbug.com/737678](https://bugs.chromium.org/p/chromium/issues/detail?id=737678).

## Software Libraries Used

The following major software libraries are used:
```text
Angular 9
Angular Material 8
Angular CDK
Angular Material Icons
RxJS 6
```

**Note**: Normally you need to match the version of Angular Material to Angular. But we must use Angular Material 8 because 9 is not yet released.
In this case it will still work.

## Angular Best Practices Included

**Note:** All these steps have already been done in this project.

Angular Best Practices:

  * [Set Change Detection As Default](#set-change-detection-as-default)
  * [All Services Use ProvidedIn](#all-services-use-providedin)
  * [Each Service Has A Service Module](#each-service-has-a-service-module)
  * [Set A Prefix For Components](#set-a-prefix-for-components)
  * [Set Styles To Use SCSS](#set-styles-to-use-scss)
  * [Set Style Paths To Avoid Relative Paths in CSS](#set-style-paths-to-avoid-relative-paths-in-css)
  * [Set Path Variables To Avoid Relative Paths In Import](#set-path-variables-to-avoid-relative-paths-in-import)
  * [Exclude Files For Testing And Coverage](#exclude-files-for-testing-and-coverage)

### Set Change Detection As Default

For best overall performance, set the change detection as the default for a new component.

This is done by adding a line to the **schematics** section of **angular.json**.

```
      "schematics": {
        "@schematics/angular:component": {
          "changeDetection": "OnPush",
          "styleext": "scss"
        }
      },
```

### All Services Use ProvidedIn

There are three different ways to inject a service.

1. Module level ``providers``.
2. Component level ``providers``.
3. Service level ``providedIn``.

The last way, Service level ``providedIn``, was introduced in Angular 6.
The difference is that you don't import the service in the dependent component.
Instead you name the module of the dependent component in the service.
In most cases you see it done by naming "root", which is the AppComponent.

The intended advantage of ``providedIn`` is that Angular has tree shaking, which will only bundle a service if it gets used.

### Each Service Has A Service Module

Each service has its own module.

The reason is to include all of the dependencies required by that service.

Also, some services require some tricky binding to other services. These must be done in a module file.

The advantage of having all of the dependencies in the service module,
means that you don't need to ever import anything else.

For example, you don't need to add anything to the app module.

Just import the service module into the module of the component or service,
in which you will use the service.

For example, if you have a component that needs the data service,
import the data service module ``XxxDataModule``, into the module for your component.

#### Import Services As A Module At The Dependant Module Level

I recommend creating a service module for each service, that contains all of the
dependencies for the service. Then import the service module,
at the module level of the **dependent** class.

There are two reasons:

1. You will always insure that all dependencies are included.
2. The service you use, and where, will be documented in the consuming module.

Why is this better than injecting the service at the app level?

The reason becomes clear when you deal with large scale applications,
and especially when you need to delete components in one app, or copy components to another app.

If you are deleting components or copying components,
you will need to also keep track of their required services.

Every time you remove or add a component that has a required service,
you will need to also edit the app module.

On the other hand, if you use this recommended design,
you don't ever touch the app module.

Your app module will be leaner and cleaner,
and free from changes by multiple developers.

This makes refactoring a large scale app much easier, and much safer.

#### Why Not To Import Services At App Level

Whether you use ``providedIn`` or ``providers``,
I recommend you do **not** import all your services at the **app** level,
which is contrary to the way most documentation tells you.

If you have instead imported the dependencies of the service at the app module,
you later not be sure of what items in the app module are actually required,
and which dependencies go with which services.

If you have used ``providedIn: root`` or ``providers`` in the app module,
and the dependent class is later deleted,
you may still have stuff in your app module that are no longer required.

Or if are adding a reusable service to another app,
or moving a service from one app to another,
you may risk a failure caused by a missing dependency.

As an app grows and becomes larger and more complicated,
and when you have multiple developers working on the same project,
the risk of these mistakes becomes much greater.

It can be sometimes extremely difficult to find out why things are breaking,
especially since some of these services require some special bindings.

And, in many cases, things will work fine for a while (by mistake),
because the actual dependencies are imported somewhere else (by coincidence),
and when that other module gets changed or deleted, all of a sudden you get
a failure in a another part of the app. 
  
Another problem is that you may also end up with a lot of things imported,
that actually are not required. And in that case, you will never get an error.
So your code becomes bloated with extra code and objects that are completely unnecessary.

Although the tree shaking aspect of ``providedIn`` is intended to help with the bundling,
it still does not keep your source code free of unused services.

In that case, the compiled bundle will be free of the unused services...

But the services, and their dependencies, can still be in your source code.

All the unused services can be littering up a large project,
taking up space in your source code control,
and requiring the resources of unit tests and coverage.
 
### Set A Prefix For Components

An Angular best practice is to use a unique prefix for the selector name of a component or directive.

Set the unique prefix in the **angular.json**.

```
  "projects": {
    "angular-9-seed-app": {
      "root": "",
      "sourceRoot": "src",
      "projectType": "application",
      "prefix": "xxx",
```

The prefix is used in the **selector* section of the component metadata,
which is usually the first part of your compenent code.

```
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'xxx-header',
  styleUrls: ['./xxx-header.component.scss'],
  templateUrl: './xxx-header.component.html'
})
```

Choose a 3 or 4 character prefix that will most likely be unique.
This is done to prevent any possible element name collision.

One way to get a prefix is to use the first 3 or 4 consonants of the company name,
or else for the project name.

Example: "My Company" gives you "mcm" or "mcmp".

#### Use The Unique Prefix In Class Names

After many large scale projects, I have learned that it also a best practice to
use the same unique prefix for class names.

So your "header" component selector is "xxx-header".

And the class name for "xxx-header" is "XxxHeaderComponent".

There are a few good reasons.

##### Quickly Recognize All Your Custom Objects

It makes it easy to recognize all your custom code objects.

If you scanning through lots of source code, whether its TypeScript or HTML or CSS,
everyone can quickly identify all your custom objects.

It distinguishes your own custom objects from other vendor related objects.

##### IDE Type-Ahead Shows Only Your Classes

When I am coding in my IDE, which is **WebStorm**,
and I begin to add an import like this:

```import {Xx}```

I immediately get a drop down list that shows all of the importable class names
that start with "Xx". And since that is a good unique class name prefix,
I get only my own custom class names.

This make writing coding much faster, and more fool proof.

#### Unique Prefix Also For Services And Modules

The same unique prefix should also be used for all you other angular objects,
such as services.

If you have a "search" service, the class name would be "XxxSearchService".

The same unique prefix should also be used for the module names.

#### Unique Prefix In File Names And Directories

When you use the prefix in your file names,
it provides consistency. And also prevents name collisions when refactoring or mixing similiar classes.

Here is how the prefix is used in all the source filesIn fact, I use the prefix for all the source files for a given set.

###### Example:

```
xxx-header/
  mock-xxx-header.component.ts
  mock-xxx-header.module.ts
  xxx-header.component.html
  xxx-header.component.scss
  xxx-header.component.spec.ts
  xxx-header.component.ts
  xxx-header.module.ts
```

To complete the unique prefix naming convention,
use the same unique prefix for the directories that contain your custom objects.

Example:
```
src/
  app/
    modules/
       xxx-header/
       xxx-search/
       xxx-search-box/
```

1. This provides consistency for class names and their containing directory.
2. If your prefix denotes a group or project, it allows you to separate the grouped source files.

Example:
If you have 3 sets of source with different prefixes:

* Common: "cmmn"
* Group A: "grpa"
* Group B: "grpb"

Your directories might look like this:

```
src/
  app/
    modules/
       cmmn-header/
       grpa-search
       grpa-search-box/
       grpb-search/
```

### Set Styles To Use SCSS

SCSS is far superior to plain CSS. First of all, you can still use plain CSS.

But in addition, you can use variables to do things like setting global colors.

Set the styles to use SCSS in the **angular.json**.

```
  "schematics": {
    "@schematics/angular:component": {
      "changeDetection": "OnPush",
      "styleext": "scss"
    }
```

### Set Style Paths To Avoid Relative Paths in CSS

If you set the path for styles, you can avoid having relative paths.

###### Wrong Way

```
import "../../../assets/styles/partials/colors"
```

Relative paths are messy, and must be edited if you move your files or directories.

###### Right Way

```
import "partials/colors"
```

If you are using style paths, it is much cleaner, and won't need to be edited when you later move things around.
It also allows you to use the same code in other projects, and provides consistency.

Set the path for styles in the **angular.json**, in the ``stylePreprocessorOptions`` section.

This must be done in two places, under ``architect`` and under ``test`` as follows:

```
  "styles": [
    "src/assets/styles/styles.scss"
  ],
  "stylePreprocessorOptions": {
    "includePaths": [
      "src/assets/styles"
    ]
  },
```

The main styles file is ``src/assets/styles.scss`` 

### Set Path Variables To Avoid Relative Paths In Import

Another Angular best practice is to set variables to avoid relative paths for imports.

###### Wrong Way

```
import {XxxHeaderModule} from '../../../modules/xxx-header/xxx-header.module'
import {environment} from '../../../environments/environment'
```

###### Right Way

```
import {XxxHeaderModule} from '@app/modules/xxx-header/xxx-header.module'
import {environment} from '@env/environment'
```

The paths for imports are set in the **tsconfig.json**.

First, set the ``baseUrl`` under ``compilerOptions`` as follows:

```
  "compilerOptions": {
    "baseUrl": "./src",
```

Next, set the ``paths`` under ``compilerOptions`` as follows:

```
    "paths": {
      "@app/*": [
        "app/*"
      ],
      "@env/*": [
        "environments/*"
      ]
```

### Exclude Files For Testing And Coverage

There are certain files you need to exclude from testing and coverage.

These will also depend on the file and directory naming conventions used in the project.
So it is best to always use the same naming standards in all your projects.

The test exclusions are set in the **angular.json** under the ``test`` section as follows:

```
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "codeCoverage": true,
            "codeCoverageExclude": [
              "src/*",
              "src/environments/*",
              "**/index.ts",
              "**/test.ts",
              "**/*.module.ts",
              "src/mocks/**/*",
              "**/mock*"
            ],
```

This assumes that there is a directory for mocks under ``src/mocks/``. This should hold the mocks for Angular built-in classes, not any of your custom classes.

You should put your own class mocks under the same folder that contains the orginal class. The mocked source file name should begin with "mock".
 
This also follows the best practice of creating a directory for each component or service,
and creating a module for each component or service, and containing all of the associated sources files in that directory.

###### Example:

```
xxx-header/
  mock-xxx-header.component.ts
  mock-xxx-header.module.ts
  xxx-header.component.html
  xxx-header.component.scss
  xxx-header.component.spec.ts
  xxx-header.component.ts
  xxx-header.module.ts
```

## Configured For Large Scale Projects

This seed app has a number of added features that make it ready to use in a large scale Angular project.

* [Common Package For Shared Services And Components](#common-package-for-shared-services-and-components)
* [Styles Has Global Colors](#styles-has-global-colors)
* [Styles Have Media Breakpoints For Responsive Design](#styles-have-media-breakpoints-for-responsive-design)
* [Mocks Directory Has Mocks For Route Testing](#mocks-directory-has-mocks-for-route-testing)
* [Complete Tests Are Done For All Existing Services And Components](#complete-tests-are-done-for-all-existing-services-and-components)
* [Angular Material and CDK Are Installed And Configured](#angular-material-and-cdk-are-installed-and-configured)
* [Angular Material Icons Are Installed And Configured](#angular-material-icons-are-installed-and-configured)
* [App Component Has Routing](#app-component-has-routing)
* [Home Page And Page Not Found Are Done](#home-page-and-page-not-found-are-done)
* [Header Component Is Done](#header-component-is-done)

### Common Package For Shared Services And Components

This project has a common package set up that uses an ``index.ts`` file to assist in locating the imports.

This is where all of your shared services and components should be.

The directory ``xxx-common/`` contains these members:
* ``test/`` An index for all of the mocks within the common package.
* ``xxx-alert/`` [Alert Service](#alert-service)
* ``xxx-data/`` [Data Service](#data-service)
* ``xxx-data-response-interceptor/`` [Data Error Interceptor ](#data-error-interceptor)
* ``xxx-error-handler/`` [Run Time Error Handler](#run-time-error-handler)
* ``xxx-log/`` [Log Service](#log-service)
* ``xxx-message`` [Message Service](#message-service)
* ``index.ts`` The file that provides the import paths for all the members of this package.

By using the ``index.ts``, it shortens your import path. To import any member of this package just point to the package root as follows:

```
import {XxxAlertModule, XxxErrorHandlerModule, XxxLogModule, XxxMessageModule} from '@app/xxx-common';
```

More detail on each of these services follows.

#### Alert Service

The ``XxxAlertService`` is the recommended way to display any pop up message to the user.

You don't need to add anything to any template.

To use the alert service, first import the service module into the dependent module as follows:

```
import {XxxAlertModule} from '@app/xxx-common';
```

Then declare it in the module's ``imports`` array.

```
  imports: [XxxAlertModule]
```

The service module uses ``providedIn``, so you don't need to add it to any ``providers``.

Then import the service into your component or service as follows:

```
import {XxxAlertService, XxxAlertType} from '@app/xxx-common';
```

Then instantiate the service in your constructor as follows:

```
  constructor(
      private xxxAlertService: XxxAlertService
  )
```

To show the alert pop up, define the alert type, and the message.

There are 3 alert types: INFO, ERROR, WARN.

The colors and formatting for these alerts is done using the styles defined in ``assets/styles/partials/_alert.scss``, so you need to also keep that file.

Then call it as follows:

```
this.xxxAlertService.openAlert(XxxAlertType.WARN, 'No matching data found');
```

The alert component is based on the Angular Material *MatSnackBar*. The imports are already done in the **XxxAlertModule** source file.

You will need to keep *Angular Material* installed in the *package.json*.

#### Data Service

The ``xxx-common`` package includes the ``XxxDataService``.

This service uses Angular **HttpClient** to return an observable in the ``getData`` method for doing a XHR GET.

You can expand this service for other XHR requests.

It also is already bound to the ``XxxDataResponseInterceptor`` service [Data Error Interceptor](#data-error-interceptor),
which automatically handles all XHR errors.

To use the data service, first import the service module into the dependent module as follows:

```
import {XxxDataModule} from '@app/xxx-common';
```

Then declare it in the module's ``imports`` array.

```
  imports: [XxxDataModule]
```

The service module uses ``providedIn``, so you don't need to add it to any ``providers``.

Then import the service into your component or service as follows:

```
import {XxxDataService} from '@app/xxx-common';
```

Then instantiate the service in your constructor as follows:

```
  constructor(
      private xxxDataService: XxxDataService
``` 

The ``getData`` method takes a URL as its argument.

It is recommended that you use the ``environments`` to contain all the urls used in your app.

This is how the data service is called:

```
    const url = environment.url.api + environment.url.comments;
    this.commentsSubscription = this.xxxDataService.getData(url)
        .subscribe(result => this.onSuccessGetComments(result),
            () => this.onErrorGetComments());
```

See one of my other projects for the full context.

#### Data Error Interceptor

The ``xxx-common`` package includes the ``XxxDataResponseInterceptor`` service.

This is already bound to the ``XxxDataService`` [Data Service](#data-service),
to automatically handle all XHR errors.

It uses the ``XxxMessageService`` to broadcast a message to the ``AppComponent``.
The ``AppComponent`` is set up up subscribe to this message,
and will display a pop up alert using the ``XxxAlertService`` [Alert Service](#alert-service).

#### Run Time Error Handler

The ``xxx-common`` package includes the ``XxxErrorHandler`` service.

This service intercepts all run time errors.

It uses the ```XxxLogService``` [Log Service](#log-service) to log the error.

It uses the ```XxxAlertService``` [Alert Service](#alert-service) to display a pop-up message to the user. 

To use the error handler service, first import the service module into the app module as follows:

```
import {XxxErrorHandlerModule} from '@app/xxx-common';
```

Then declare it in the module's ``imports`` array.

```
  imports: [XxxErrorHandlerModule]
```

The service should not be imported or instantiated. All of that is already done in the service module.

Nothing else is needed. The service will now work on its own.

#### Log Service

The ``xxx-common`` package includes the ``XxxLogService``.

This service creates a log entry, which for now, is displayed in the console.

For your large scale project, you can create an API endpoint,
which will do the logging on the back end.

Then you can modify this service to enable that feature.

To use the log service, first import the service module into the dependent module as follows:

```
import {XxxLogModule} from '@app/xxx-common';
```

Then declare it in the module's ``imports`` array.

```
  imports: [XxxLogModule]
```

The service module uses ``providedIn``, so you don't need to add it to any ``providers``.

Then import the service into your component or service as follows:

```
import {XxxLogService} from '@app/xxx-common';
```

Then instantiate the service in your constructor as follows:

```
  constructor(
      private xxxLogService: XxxLogService
``` 

To call the log service, first you need to create a log entry.
Then call it as follows:

```
    const logEntry: XxxLogEntry = new XxxLogEntry(error.message);
    logEntry.stack = error.stack;
    this.xxxLogService.log(logEntry);
```

#### Message Service

The ``xxx-common`` package includes the ``XxxMessageService``.

This service uses a publish and subscribe design,
to allow communication between any components or services.

This communication can be one to one, or one to many.

To use the service, first import the service module into your module,

```
import {XxxMessageModule} from '../xxx-message/xxx-message.module';
```

Then declare it in the module's ``imports`` array.

```
  imports: [XxxMessageModule]
```

The service module uses ``providedIn``, so you don't need to add it to any ``providers``.

Then import the service into your component or service file as follows:

```
import {XxxMessageService} from '@app/xxx-common';
```

Then instantiate the service in your constructor as follows:

```
  constructor(
      private xxxMessageService: XxxMessageService
```

##### How To Use The Message Service

To use the message service we first create a message object with a unique key:

```
const message=new XxxMessage('searchTextChanged');
```

The best practice is use a string key that is meaningful.
In this case we want to indicate that the search text has changed.

The next step is to send the message:

```
xxxMessageService.broadcast(message);
```

After the message is broadcast, one or more subscribers will instantly receive the message.
This is generally used to notify another component that something has happened.

Here is the code to subscribe to the message.

```
    this.subscriptionSearchTextChange = this.xxxMessageService.subscribe('searchTextChange', () => {
      this.onSearchTextChange();
    });
```

The message service also has a payload property, which allows you to send data.
The payload can be any kind of custom object. 

Here is an example of how to use the message payload:

```
    const message = new XxxMessage('data.responseError');
    message.payload = {
      alertType: XxxAlertType.ERROR,
      alertMessage: errorMsg
    };
    this.xxxMessageService.broadcast(message);
```

The payload in this case is a custom object that is used by the ``XxxAlertService``.

The payload is extracted by the subscriber as follows:

```
    this.subscriptionDataError = this.xxxMessageService.subscribe('data.responseError', (payload) => {
      this.xxxAlertService.openAlert(payload.alertType, payload.alertMessage);
    });
```

**Note**: The subscriber should store a reference to the subscription,
and especially in a component, use the OnDestroy hook to unsubscribe.

You should always unsubscribe any subscription, to avoid memory leaks.

### Styles Has Global Colors
 
Styles have global colors set in ```assets/styles/partials/_colors.scss```. Add your global colors here.

### Styles Have Media Breakpoints For Responsive Design

Responsive CSS allows a different layout for mobile/tablet/desktop.

Styles have global colors set in ```assets/styles/partials/_media-variables.scss```.

At the most basic level, the body font size can be used along with setting all measurements using *rem* units instead of *px*.

For a more fine-grained level, there are 3 more files that contain breakpoints for all of the different tablets and mobile devices.

If you don't need all of those, these files can be deleted.

### Mocks Directory Has Mocks For Route Testing

There is a ```mocks``` directory to contain any mocks for the built-in Angular services.

It has mocks that allow testing of the ``ActivatedRoute`` service.

Any other mocks for Angular services should be added to this folder.

But mocks for your own custom services and components should be in the same folder as the original.

### Modules Directory To Contain All Your Own Modules

The best practice I recommend is to have a ``modules/`` directory that contains all of your own modules.

The rule is to create a folder for each module, and to create a module for each component or service.

Each component or service should import all of it's own dependencies.

We don't import these services at the app module level, which is usually recommended by the Angular docs.

The reason is, if you refactor your app, or re-use components or services in other apps, you can easily just copy or move just the folders you want.

If you had imported these at the app level, you would need to delete or add imports at the app level.

But if you use the strategy recommended here, you don't bother with anything at the app level. 
When you just add your module folder, it already has all of its own dependencies. All you do is just import the module into the parent module that needs it. 

This is a fine-grained approach to code organization.

### Complete Tests Are Done For All Existing Services And Components

Complete tests are already done for all of the existing code.

These tests are designed to provide 100% coverage.

Use these tests as a guide for the correct way to do your unit tests.

You should use a mock for each of any dependencies.

This gives you the most flexibility and is the easiest way to handle dependencies.

### Angular Material and CDK Are Installed And Configured

Angular Material is already installed.

The default required styles are included in ``assets/styles/vendor/_angular-material.scss``.
 
### Angular Material Icons Are Installed And Configured

**Angular Material Icons** are imported using ``index.html``.
  
The initial configuration recommended for using Material Icons with Material Icon Buttons is done using  ```assets/styles/vendor/_mat-icon.scss```.

### App Component Has Routing

The ``AppComponent`` has routing.

Routing for the app module uses the ``app-routing.module.ts``. Only one path is defined here,
the default which is the ```XxxPageNotFoundPageComponent```.

As you add additional routing paths, do not add them here.
Instead, each page should have it's own component,
and it should also have it's own routing module.

See how this is done by looking at the routing module for the home page, ``xxx-home-page-routing.module.ts``.

The routing for each page is done in the routing module for that page component.

This is the recommended design for using routing in a large scale application.

**Note**: You need to import any module that has routing in the ``app.module.ts``.
So you will see in this case that we have imported ``XxxHomePageModule``.
 
#### If You Do Not Need Any Routing

1. Delete the ``@angular/router`` entry from the **package.json**.
2. Delete the ``app-routing.module.ts`` file.
3. Delete the import for the ``AppRoutingModule`` in the ``app-routing.module.ts``.
4. Delete the import for the ``XxxHomePageModule`` in the ``app-routing.module.ts``.
5. Delete the directories for ```xxx-home-page``` and ``xxx-page-not-found-page``.

### Home Page And Page Not Found Are Done 

Two initial pages for routing are set up. ```XxxHomePage``` and ```XxxPageNotFoundPage``` are done.

Each path (other than for page not found), should have its own routing module.

See how this is done by looking at the routing module for the home page, ``xxx-home-page-routing.module.ts``.

### Header Component Is Done

A header component ```XxxHeader``` is done. It uses Angular Material **MatToolbar**.

This gives you a decent looking application so you can start coding!

---
