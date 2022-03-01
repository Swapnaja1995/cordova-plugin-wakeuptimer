var exec = require("cordova/exec");

/**
 * This is a global variable called wakeup exposed by cordova
 */    
var Wakeup = function(){};

Wakeup.prototype.wakeup = function(success, error, options) {
    exec(success, error, "WakeupPlugin", "wakeup", [options]);
};

Wakeup.prototype.snooze = function(success, error, options) {
    exec(success, error, "WakeupPlugin", "snooze", [options]);
};

module.exports = new Wakeup();


// Installation constructor that binds Wakeup to window
WakeupPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.wakeupPlugin = new WakeupPlugin();
  return window.plugins.wakeupPlugin;
};
cordova.addConstructor(WakeupPlugin.install);
