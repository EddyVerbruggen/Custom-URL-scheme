"use strict";

// Don't change this line:
cordova.exec(handleOpenURL, null, "LaunchMyApp", "checkIntent", []);

// You need to implement this method:
function handleOpenURL(url) {
  alert("LaunchMyApp received external URL: " + url);
  // now parse the url, save the params to sessionstorage, route to your next page, or anything else you can think of
}