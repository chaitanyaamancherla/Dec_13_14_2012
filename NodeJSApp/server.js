//server.js
var http = require("http");

function start(requestMapping){

	function doGetPost(request,response){
		console.log("request for " + request.url);
		if(request.url == "/"){
			requestMapping["/"](response);		
		}
		else{
			requestMapping["error"](response);
		}	
		response.end();
	}
	http.createServer(doGetPost).listen(9090);
	console.log("Waiting for requests at 9090");
}

exports.startServer = start;