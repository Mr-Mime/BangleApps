var file_content = require("Storage").readJSON("credentials.json", true);
var device_creds = file_content.devices;

E.showMessage(device_creds[0].deviceUser + ":" + device_creds[0].devicePass, device_creds[0].deviceId);
