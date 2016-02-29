#Angular Testing From Scratch 
This project is to demonstrate how to go from an empty folder to a tested Angular App.
It will use Cucumber.js and protractor for automating the UI.
The app will have an Express service to demonstrate how to use super-test-as-promised for testing APIs

####How to follow this tutorial
The code is all in github repo https://github.com/philipbeadle/angularTestFromScratch
* Open a Terminal window
* Clone the repo locally and switch to branch Step1
_If you don't know how to set up SSH connections to Github check this article [SSH for github](https://help.github.com/articles/generating-an-ssh-key/)_
```
git clone git@github.com:philipbeadle/gauge-js-angular-webdriver-demo.git.git
```

##Step 1
```
git checkout Step1
```
This step shows a completed Angular app that shows off some basic elements and concepts such as lists and forms
See [Build Angular in 30 minutes](http://www.revillweb.com/tutorials/angularjs-in-30-minutes-angularjs-tutorial/) for how this was built

##Step 2
Install gauge, best way is to use brew
```
    brew update
    brew install gauge
```
##Step 3
Then install the gauge-js plugin
```
    gauge install js
```
##Step 4
Add a folder called tests and then initialise gauge-js in that folder
```
    gauge --init js
```
##Step 5
Check you have gauge setup correctly by running
```
    gauge specs/
```
You should get
