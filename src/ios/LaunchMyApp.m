#import <Cordova/CDV.h>

@interface LaunchMyApp : CDVPlugin

- (void)openURL:(CDVInvokedUrlCommand*)command;

@end

@implementation LaunchMyApp

- (void)pluginInitialize {
  // Other initialization code
  [self.commandDelegate registerPlugin:self];
}

- (void)openURL:(CDVInvokedUrlCommand*)command {
    CDVPluginResult* pluginResult = nil;
    NSString* url = [command.arguments objectAtIndex:0];

    // Execute the callback function with the result
    if (url) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:url];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
