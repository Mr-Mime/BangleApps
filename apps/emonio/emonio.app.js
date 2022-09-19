var creds = require("Storage").readJSON("credentials.json", true)

E.showMessage(creds[0].deviceUser + ":" + creds[0].devicePass, creds[0].deviceId);
