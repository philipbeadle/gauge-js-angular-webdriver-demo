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