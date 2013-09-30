"use strict";

// Q: Why an empty file?
// A: iOS doesn't need plumbing to get the plugin to work.
//    including no file would mean the import in index.html would differ per platform.
//    Also, using one version and adding a userAgent check for Android feels wrong.