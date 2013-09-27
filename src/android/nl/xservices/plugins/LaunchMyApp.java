package nl.xservices.plugins;

import android.content.Intent;
import org.apache.cordova.api.CordovaPlugin;

public class LaunchMyApp extends CordovaPlugin {

  public void onNewIntent(Intent intent) {
    super.onNewIntent(intent);
    if (intent.getDataString() != null /* TODO packagename of main class && intent.getDataString().startsWith("triodosmobilebanking://") */) {
      webView.loadUrl("javascript:window.launchMyAppIntentURL = '" + intent.getDataString() + "'");
    }
  }
}