(function () {
    "use strict";

  var remainingAttempts = 10;

  function waitForAndCallHandlerFunction(url) {
    if (typeof window.handleOpenURL === "function") {
      // Clear the intent when we have a handler
      cordova.exec(
          null,
          null,
          "LaunchMyApp",
          "clearIntent",
          []);

      window.handleOpenURL(url);
    } else if (remainingAttempts-- > 0) {
      setTimeout(function(){waitForAndCallHandlerFunction(url);}, 500);
    }
  }

  function triggerOpenURL() {
    cordova.exec(
        waitForAndCallHandlerFunction,
        null,
        "LaunchMyApp",
        "checkIntent",
        []);
  }

  document.addEventListener("deviceready", triggerOpenURL, false);

  var launchmyapp = {
    getLastIntent: function(success, failure) {
      cordova.exec(
        success,
        failure,
        "LaunchMyApp",
        "getLastIntent",
        []);
    }
  }

  module.exports = launchmyapp;

}());
