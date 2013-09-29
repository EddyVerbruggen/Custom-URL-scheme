# LaunchMyApp PhoneGap (Build) Plugin
#### launch your app by a link like this: `mycoolapp://`
for iOS and Android, by [Eddy Verbruggen](http://www.x-services.nl)

1. [Description](https://github.com/EddyVerbruggen/LaunchMyApp-PhoneGap-Plugin#1-description)
2. [Installation](https://github.com/EddyVerbruggen/LaunchMyApp-PhoneGap-Plugin#2-installation)
	2. [Automatically (CLI / Plugman)](https://github.com/EddyVerbruggen/LaunchMyApp-PhoneGap-Plugin#automatically-cli--plugman)
	2. [Manually](https://github.com/EddyVerbruggen/LaunchMyApp-PhoneGap-Plugin#manually)
	2. [PhoneGap Build](https://github.com/EddyVerbruggen/LaunchMyApp-PhoneGap-Plugin#phonegap-build)
3. [Usage](https://github.com/EddyVerbruggen/LaunchMyApp-PhoneGap-Plugin#3-usage)
4. [License](https://github.com/EddyVerbruggen/LaunchMyApp-PhoneGap-Plugin#4-license)

## 1. Description

This plugin allows you to start your app by calling it with a URL like `mycoolapp://path?foo=bar`

* Compatible with [Cordova Plugman](https://github.com/apache/cordova-plugman)
* Submitted and waiting for approval at PhoneGap Build ([more information](https://build.phonegap.com/plugins))

### iOS specifics
* Forget about [using config.xml to define a URL scheme](https://build.phonegap.com/docs/config-xml#url_schemes). This plugin adds 2 essential enhancements:
  - Uniform URL scheme with Android (for which there is no option to define a URL scheme via PhoneGap configuration at all).
  - You still need to wire up the Javascript to handle incoming events. This plugin assists you with that.
* Tested on iOS 5.1, 6 and 7.

### Android specifics
* Unlike iOS, there is no way to use config.xml to define a scheme for your app. Now there is.
* Tested on Android 4.3, will most likely work with 2.2 and up.


## 2. Installation

### Automatically (CLI / Plugman)
LaunchMyApp is compatible with [Cordova Plugman](https://github.com/apache/cordova-plugman).
Replace `URL_SCHEME` by a nice scheme you want to have your app listen to, like `mycoolapp`:

```
$ phonegap local plugin add https://github.com/EddyVerbruggen/LaunchMyApp-PhoneGap-Plugin.git --variable URL_SCHEME=mycoolapp
```
or
```
$ cordova plugin add https://github.com/EddyVerbruggen/LaunchMyApp-PhoneGap-Plugin.git --variable URL_SCHEME=mycoolapp
```

Then reference the JavaScript code in your `index.html`:
```html
<!-- below <script src="phonegap.js"></script> -->
<script src="js/plugins/LaunchMyApp.js"></script>
```

Please note for iOS: there is a bug in Plugman (will be solved soon) which causes an error in your `*-Info.plist`.
Please manually remove the blank line and whitespace from `NSMainNibFile` and `NSMainNibFile~ipad` (or your app won't start at all).


### Manually

#### iOS
1\. `Copy www/ios/LaunchMyApp.js` to `www/js/plugins/LaunchMyApp.js` and reference it in your `index.html`:
```html
<script type="text/javascript" src="js/plugins/LaunchMyApp.js"></script>
```

2\. Add this to your `*-Info.plist` (replace `URL_SCHEME` by a nice scheme you want to have your app listen to, like `mycoolapp`):
```xml
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>mycoolapp</string>
    </array>
  </dict>
</array>
```

#### Android
1\. Copy www/android/LaunchMyApp.js to www/js/plugins/LaunchMyApp.js and reference it in your `index.html`:
```html
<script type="text/javascript" src="js/plugins/LaunchMyApp.js"></script>
```

2\. Add the following xml to your `config.xml` to always use the latest version of this plugin:
```xml
<plugin name="LaunchMyApp" value="nl.xservices.plugins.LaunchMyApp"/>
```

3\. Copy `LaunchMyApp.java` to `platforms/android/src/nl/xservices/plugins` (create the folders)

4\. Add the following to your `AndroidManifest.xml` inside the `/manifest/application/activity` node (replace `URL_SCHEME` by a nice scheme you want to have your app listen to, like `mycoolapp`):
```xml
<intent-filter>
  <data android:scheme="URL_SCHEME"/>
  <action android:name="android.intent.action.VIEW" />
  <category android:name="android.intent.category.DEFAULT" />
  <category android:name="android.intent.category.BROWSABLE" />
</intent-filter>
```

### PhoneGap Build

Using LaunchMyApp with PhoneGap Build requires these simple steps:

1\. Add the following xml to your `config.xml` to use the latest version of this plugin (replace `URL_SCHEME` by a nice scheme you want to have your app listen to, like `mycoolapp`):
```xml
<gap:plugin name="nl.x-services.plugins.launchmyapp">
  <param:name="URL_SCHEME" value="mycoolapp" />
</gap:plugin>
```

2\. Reference the JavaScript code in your `index.html`:
```html
<!-- below <script src="phonegap.js"></script> -->
<script src="js/plugins/LaunchMyApp.js"></script>
```

## 3. Usage

1\. Your app can be launced by linking to it like this (all of these will work):
```html
<a href="mycoolapp://">Open my app</a>
<a href="mycoolapp://somepath">Open my app</a>
<a href="mycoolapp://somepath?foo=bar">Open my app</a>
<a href="mycoolapp://?foo=bar">Open my app</a>
```

`mycoolapp` is the value of URL_SCHEME you used while installing this plugin.

2\. When your app is launched by a URL, you probably want to do something based on the path and parameters in the URL. For that, you need to implement the `handleOpenURL(url)` method, which receives the URL that was used to launch your app.
```javascript
function handleOpenURL(url) {
  console.log("received url: " + url);
}
```

If you want to alert the URL for testing the plugin, at least on iOS you need to wrap it in a timeout like this:
```javascript
function handleOpenURL(url) {
  setTimeout(function() {
    alert("received url: " + url);
  }, 0);
}
```
A more useful implementation would mean parsing the URL, saving any params to sessionStorage and redirecting the app to the correct page inside your app.
All this happens before the first page is loaded.

## 4. License

[The MIT License (MIT)](http://www.opensource.org/licenses/mit-license.html)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/EddyVerbruggen/launchmyapp-phonegap-plugin/trend.png)](https://bitdeli.com/free "Bitdeli Badge")