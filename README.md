# Testing an angular js site with Gauge and webdriver.io
This project is to demonstrate how to go from an empty folder to a tested Angular App.
It will use gauge-js and webdriver.io for automating the UI.


#### How to follow this tutorial
The code is all in github repo https://github.com/philipbeadle/angularTestFromScratch
* Open a Terminal window
* Clone the repo locally and switch to branch Step1
_If you don't know how to set up SSH connections to Github check this article [SSH for github](https://help.github.com/articles/generating-an-ssh-key/)_
```
git clone git@github.com:philipbeadle/gauge-js-angular-webdriver-demo.git
```

## Step 1
```
git checkout Step1
```
This step shows a completed Angular app that shows off some basic elements and concepts such as lists and forms
See [Build Angular in 30 minutes](http://www.revillweb.com/tutorials/angularjs-in-30-minutes-angularjs-tutorial/) for how this was built

## Step 2
Install gauge, best way is to use brew
```
    brew update
    brew install gauge
```
Install the Gauge plugin for IntelliJ too.

## Step 3
Then install the gauge-js plugin
```
    gauge install js
```
## Step 4
Add a folder called tests and then initialise gauge-js in that folder
```
    gauge --init js
```
## Step 5
Check you have gauge setup correctly by running
```
    gauge specs/
```
You should get
```
# Specification Heading
  ## Vowel counts in single word         ✔ ✔
  ## Vowel counts in multiple word       ✔ ✔

Specifications: 1 executed      1 passed        0 failed        0 skipped
Scenarios:      2 executed      2 passed        0 failed        0 skipped
```
You can checkout step5 to get to this point
```
git checkout Step5
```
## Step 6
Check your angular site works by running live-server in the app folder
if you dont have live-server install it with
```
    npm install live-server -g
```
You should see a basic site with a list of festivals that I DJ at :)
## Step 7
Initialise the tests folder to use node
```
    npm init
```
Fill out the questions however you like except the test command option put
```
    gauge specs/
```
there so you can run the tests by typing
```
    npm test
```
## Step 8
Install webdriver for angular and the chai assertion library
```
    npm install chai --save-dev
    npm install chai-as-promised --save-dev
    npm install webdriverio --save-dev
    npm install webdriverjs-angular --save-dev
```
## Step 9
Add a new file called google.spec

We'll test out the google home page before we test our angular app.
Add the following to the spec file
```
    #This spec is an example on how to use Asynch operqtions with webdriver.io

    Check the title
    ---------------------------
    * Check the title of the Google home page is "Google"
```
Locate the tests folder that gauge created to steps and add a new file called google.js
The following code uses the standard webdriver.io to navigate to the Google home page and check the title.
It shows how to use the "done" callback for asynchronous operations.
```
    'use strict'

    var webdriverio = require('webdriverio');
    var options = {
      desiredCapabilities: {
        browserName: 'firefox'
      }
    };
    var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');

    chai.use(chaiAsPromised);
    expect = chai.expect;
    chai.Should();

    var assert = require("assert");

    gauge.step("Check the title of the Google home page is <title>", function (titleGiven, done) {
      webdriverio
        .remote(options)
        .init()
        .url('http://google.com')
        .getTitle().then(function(title) {
          assert.equal(title, titleGiven);
        })
        .end()
        .call(done);
    });
```
Next you need to install and start the Selenium Standalone Server so that webdriver.io has an instance to use
```
    npm install selenium-standalone@latest -g
    selenium-standalone install
    selenium-standalone start
```
And lastly we need to increase the timeout from 1 second to about 30.  Open the tests/env/default/js.properties file and set the timeout to 30 seconds.

Now run the tests again and you will see your new test
```
    Philip-Beadle-MacBook-Pro:gauge-js-angular-webdriver philipbeadle$ npm test

    > gauge-js-angular-webdriver-demo@0.0.1 test /Projects/gauge-js-angular-webdriver
    > gauge tests/specs/

    # Specification Heading
      ## Vowel counts in single word         ✔ ✔
      ## Vowel counts in multiple word       ✔ ✔

    # This spec is an example on how to use Asynch operqtions with webdriver.io
      ## Check the title     ✔

    Specifications: 2 executed      2 passed        0 failed        0 skipped
    Scenarios:      3 executed      3 passed        0 failed        0 skipped
```

## Step 10
Add a new file pair for our new spec angular.spec and add the spec
```
    #This spec is an example on how to test an angular website with webdriver.io

    Check the title of the Angular home page
    ----------------------------------------
    * Check the title of the Google home page is "Angular testing with Gauge and webdriver.io"
```
Add the following code to the angular.js steps file
```
    'use strict'

    var webdriverjsAngular = require('webdriverjs-angular');
    var options = {
      desiredCapabilities: {
        browserName: 'chrome'
      },
      ngRoot: 'body' // main application selector
    };
    var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');

    chai.use(chaiAsPromised);
    expect = chai.expect;
    chai.Should();

    var assert = require("assert");

    gauge.step("Check the title of the Angular home page is <title>", function (titleGiven, done) {
      webdriverjsAngular
        .remote(options)
        .init()
        .url('http://127.0.0.1:55623/')
        .getTitle().then(function(title) {
          assert.equal(title, titleGiven);
        })
        .end()
        .call(done);
    });
```
This spec uses the webdriverjs-angular driver to check the title on an angular page.  Nice and simple.
