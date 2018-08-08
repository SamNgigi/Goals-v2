# Angular 6

## Installation

When installing Angular first make sure that you have the correct version of node.

Make sure to remove all previous versions of node and npm that you have in your system and instead use nvm to manage your the node downloads and installation.

Here is how to completely remove node, nodejs, node_modules and npm from your system. Make sure to follow it thoroughly.

```
  sudo apt-get remove nodejs

  sudo apt-get remove npm
```

**Then**

```
  sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node* /usr/local/lib/dtrace/node.d ~/.npm ~/.node-gyp /opt/local/bin/node /opt/local/include/node /opt/local/lib/node_modules 

  sudo rm -rf /usr/local/lib/node*

  sudo rm -rf /usr/local/include/node*

  sudo rm -rf /usr/local/bin/node*
```

Also make sure you go to your **Home** directory and **remove** all `node`, `.node `or `.npm` folders. Also be sure to remove any `package.json`.

For brew mac-Os user

```
  brew uninstall node; 
  # or `brew uninstall --force node` which removes all versions
  brew prune;
  rm -f /usr/local/bin/npm /usr/local/lib/dtrace/node.d;
  rm -rf ~/.npm;
```

**Next**
Download Node Version Manager (`nvm`) to download and manage your node version. Click [here](https://nodesource.com/blog/installing-node-js-tutorial-using-nvm-on-mac-os-x-and-ubuntu/) for nvm installation details.

Note that `nvm use` allows you to use and install version for example

```
  nvm use node  
```
to use latest version of node.

```
  nvm use --lts  
```
to use the long term support (lts) version of node.

For a list of nvm command just type `nvm --help`.


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