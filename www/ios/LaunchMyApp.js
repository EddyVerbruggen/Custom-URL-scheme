(function () {
  "use strict";

  var remainingAttempts = 10;

  function waitForAndCallHandlerFunction(url) {
    if (typeof window.handleOpenURL === "function") {
      window.handleOpenURL(url);
    } else if (remainingAttempts-- > 0) {
      setTimeout(function () { waitForAndCallHandlerFunction(url); }, 500);
    }
  }

  function triggerOpenURL() {
    cordova.exec(
      waitForAndCallHandlerFunction,
      function (error) {
        // Error callback
        console.error("Error opening URL: " + url);
      },
      "LaunchMyApp",
      "openURL",
      []
    );
  }

  document.addEventListener("deviceready", triggerOpenURL, false);

}());
