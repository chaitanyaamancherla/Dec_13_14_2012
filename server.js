//server.js
//Require JS

var http = require("http");

function onRequest(request,response){
	response.write('friday({"capital":"New Delhi","continent":"Asia"})');
   response.end();			
}
http.createServer(onRequest).listen(9090);
console.log("Server running on http://127.0.0.01:9090/");