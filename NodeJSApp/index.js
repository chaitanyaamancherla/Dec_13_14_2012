var server = require("./server");
var handlers = require("./handlers");


var requestMapping = [];
requestMapping["/"] = handlers.index;
requestMapping["error"] = handlers.error;


server.startServer(requestMapping);