var driver;
module.exports = function () {
  console.log('driver');
  if (!driver) {
    driver = require('webdriverjs-angular');
    var options = {
      desiredCapabilities: {
        browserName: 'chrome'
      },
      ngRoot: 'body' // main application selector
    };
    console.log('test');
    driver
      .remote(options)
      .init()
      .url('http://127.0.0.1:8080/').then(function () {
      return driver;
    });
  } else {
    return driver
      .url('http://127.0.0.1:8080/').then(function () {
        return driver;
      });
  }
};
