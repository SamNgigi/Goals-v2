# Angular 6

## Installation

It would seem that Angular CLI: 6.1.1 has an issue and it is advised to work with @angular/cli@6.1.0-rc.0.

[See here on Stackoverflow.](https://stackoverflow.com/questions/51539032/angular-cli-not-installed-properly)

## Week1 Wednesday: Deleting Goals

Code highlighting `goalDelete`.

## Week1 Wednesday: NgModel

### *Two way data binding*

Correct _two data binding_ to  _*two way data-binding*_.

## Week1 Wednesday: Submit Form

### *Submitting forms using ngSubmit*

*addNewGoal class* should be **addNewGoal function**

## Week1 Wednesday: Deployment

### Step 4: Deploy using the CLI

__*Using gh-pages*__

If deploying to **gh-pages** using **Angular 6** you will have to check if the **dist** folder contains a sub-folder that is named after your project name.

If yes you need to specify the deploy directory **manually** using code below.

`npx ngh --dir=dist/project-name`

Your project name can be found in the **angular.json** file at `defaultProject`.

More info about angular-cli-ghpages [here](https://www.npmjs.com/package/angular-cli-ghpages).

__*Using Azure*__

Places to take care of is make sure.

  1. Disable add blocker.

  2. When selecting a template you click on *Or start with [Empty pipeline](www).*

  3. Make user to go... *to be continued*.

## Bootstrap

Remember for some functionality like modals, carousels, collapsible menu we need jQuery and Popper Js.

So we need to install these with:

`npm install jquery --save`

`npm install popper.js --save`

After go to the angular.json file and add the path to the minified jQuery, popper.js and bootstrap to the scripts array, as follows.

```
  "scripts": [
              "./node_modules/jquery/dist/jquery.min.js",
              "./node_modules/popper.js/dist/umd/popper.min.js",
              "./node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
```