"use strict";

// Don't change this line:
cordova.exec(handleOpenURL, null, "LaunchMyApp", "checkIntent", []);

document.addEventListener('DOMContentLoaded', checkForHandleOpenURLFunction, false);

function checkForHandleOpenURLFunction() {
  if (typeof handleOpenURL != "function") {
    alert("Please implement a global Javascript function 'handleOpenURL(url)' to use the LaunchMyApp plugin on iOS.");
  }
}