module.exports  = function (context) {
    var deferred = context.requireCordovaModule('q').defer(),
        fs = context.requireCordovaModule('fs'),
        path = context.requireCordovaModule('path'),
        projectRoot = context.opts.projectRoot;
        
    // While on AppBuilder the above may work, the Cordova CLI doesn't like it
    // (or at least not all versions of it).
    var xamlFile = path.join(projectRoot, "App.xaml.cs");
    try {
        fs.statSync(xamlFile);
    } catch (err) {
        xamlFile = path.join(projectRoot, "platforms", "wp8", "App.xaml.cs");
        try {
            fs.statSync(xamlFile);        
        } catch (err2) {
            console.error("Custom URL Scheme plugin couldn't find your App's xaml file! Try to adjust the file manually according to the 'add-uri-mapper.js' hook.");
            return;
        }
    }

    fs.readFile(xamlFile, 'utf8', function (err,data) {
		if (err) {
            console.error("Error while configuring the Custom URL Scheme: " + err);
       		deferred.reject(err);
            return;
		}

		var result = data.replace(/^(\s*?)(RootFrame.NavigationFailed\s*?\+=\s*?RootFrame_NavigationFailed;)/gm,
			"$1$2\n\n$1// Assign the URI-mapper class to the application frame\n$1RootFrame.UriMapper = new CompositeUriMapper();");
        
		fs.writeFile(xamlFile, result, 'utf8', function (err) {
			if (err){
				deferred.reject(err);
			} else{
				deferred.resolve();
			}
		});
	});

	return deferred.promise;
}