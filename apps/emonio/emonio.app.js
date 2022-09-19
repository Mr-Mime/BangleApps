var file_content = require("Storage").readJSON("emonio-creds.json", true);
var device_creds = file_content.devices;

//E.showMessage(device_creds[0].deviceUser + ":" + device_creds[0].devicePass, device_creds[0].deviceId);

var scanResults = {
  "" : {title: "Emonios"},
  "emonio-2cd341": function() {connect("emonio-2cd341");},
  "emonio-123456": function() {connect("emonio-123456");},
  "emonio-123451": function() {connect("emonio-123456");},
  "emonio-123452": function() {connect("emonio-123456");},
  "emonio-121453": function() {connect("emonio-123456");},
  "emonio-123454": function() {connect("emonio-123456");},
  "emonio-123455": function() {connect("emonio-123456");},
  "emonio-123457": function() {connect("emonio-123456");},
};


E.showMenu(scanResults);
