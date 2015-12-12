module.exports  = function (context) {
    var deferred = context.requireCordovaModule('q').defer(),
        fs = context.requireCordovaModule('fs'),
        path = context.requireCordovaModule('path'),
        projectRoot = context.opts.projectRoot,
        appFile = path.join(projectRoot, "App.xaml.cs");    
    
    fs.readFile(appFile, 'utf8', function (err,data) {
		if (err) {
			deferred.reject(err);
		}

		var result = data.replace(/^(\s*?)(RootFrame.NavigationFailed\s*?\+=\s*?RootFrame_NavigationFailed;)/gm,
			"$1$2\n\n$1// Assign the URI-mapper class to the application frame\n$1RootFrame.UriMapper = new CompositeUriMapper();");
        
		fs.writeFile(appFile, result, 'utf8', function (err) {
			if (err){
				deferred.reject(err);
			} else{
				deferred.resolve();
			}
		});
	});

	return deferred.promise;
}