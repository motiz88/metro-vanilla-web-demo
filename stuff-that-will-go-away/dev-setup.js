/* global __DEV__: false */

if (__DEV__) {
  const WebHMRClient = require("./WebHMRClient");
  WebHMRClient.setup(
    "web",
    window.location.host,
    window.location.port,
    true,
    window.location.protocol === "https:" ? "wss" : "ws"
  );

  // TODO: Auto-register bundles
  const bundleURL = window.location.origin + "/index.bundle?platform=web";
  WebHMRClient.registerBundle(bundleURL);
  WebHMRClient.enable();

  console.log("WebHMRClient enabled");
}
