var creds = require("Storage").readJSON("credentials.json", true)

E.showMessage(creds.deviceUser + ":" + creds.devicePass, creds.deviceId);
