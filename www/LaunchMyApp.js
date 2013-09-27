"use strict";

// a tryout for a bit of wiring for Android
if (window["androidIntentURL"] != undefined) {
  handleOpenURL(window["androidIntentURL"]);
}

// Handler for incoming urlscheme calls. Currently supported:
function handleOpenURL(url) {
  alert("LaunchMyApp received external URL: " + url);
  // now parse the url, save the params to sessionstorage, route to your next page, or anything else you can think of
}