# Launch My App (by URL)

by [Eddy Verbruggen](http://www.x-services.nl)

TODO include js example

1. [Description](https://github.com/EddyVerbruggen/iPadLandscapeEnabler-PhoneGapBuild-Plugin#1-description)
2. [Installation](https://github.com/EddyVerbruggen/iPadLandscapeEnabler-PhoneGapBuild-Plugin#2-installation)
3. [License](https://github.com/EddyVerbruggen/iPadLandscapeEnabler-PhoneGapBuild-Plugin#3-license)

## 1. Description

If you are using PhoneGap Build and want landscape and portrait enabled on iPad, but only portrait on iPhone/iPod, then you've come to the right place.
Add this plugin and set orientation to portrait, this plugin will add landscape orientation for iPad only.

## 2. Installation

The only thing you need to do is editing your `www/config.xml`.
Add this line:

```xml
<gap:plugin name="nl.x-services.plugins.ipadlandscapeenabler" />
```
or to use this exact version:
```xml
<gap:plugin name="nl.x-services.plugins.ipadlandscapeenabler" version="1.0" />
```

And while you are editing the `www/config.xml`, make sure you set the orientation preference to portrait:
```xml
<preference name="orientation" value="portrait" />
```

This makes sure all devices will have portrait mode only, but for iPad landscape is added by this plugin.

## 3. License

[The MIT License (MIT)](http://www.opensource.org/licenses/mit-license.html)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rightsxs
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

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/EddyVerbruggen/ipadlandscapeenabler-phonegapbuild-plugin/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

