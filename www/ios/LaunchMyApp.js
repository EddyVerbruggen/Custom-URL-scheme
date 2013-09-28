"use strict";

document.addEventListener(
    "deviceready",
    function() {
      if (typeof handleOpenURL != "function") {
        alert("Please implement a global Javascript function 'handleOpenURL(url)' to use the LaunchMyApp plugin on iOS.");
      }
    },
    false);