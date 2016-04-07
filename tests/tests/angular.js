'use strict'
//var driver = require('../tests/driver.js')
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
expect = chai.expect;
chai.Should();

var assert = require("assert");

gauge.step("Check the title of the Angular home page is <title>", function (titleGiven, done) {
  driver
    .getTitle().then(function(title) {
      assert.equal(title, titleGiven);
    })
    .end()
    .call(done);
});
