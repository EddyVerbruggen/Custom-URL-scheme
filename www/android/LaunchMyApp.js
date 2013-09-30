"use strict";

document.addEventListener(
    "deviceready",
    function() {
      cordova.exec(
          (typeof handleOpenURL == "function" ? handleOpenURL : null),
          null,
          "LaunchMyApp",
          "checkIntent",
          []);
    },
    false);