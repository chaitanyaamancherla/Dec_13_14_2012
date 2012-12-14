//handlers.js

function index(response){
	var indexPage = "<html>";
	indexPage += "<body>";	
	indexPage += "Country <input type='text' id='countrytext'>";
	indexPage += "<input type='button' value='Click'>";	
	indexPage += "</body>";	
	indexPage += "</html>";	
	response.write(indexPage);
}
function error(response){
	response.writeHead(404, {
		  	"Content-Type": "text/plain" 
			});

	response.write("Error!!! Page not found.");
}

exports.index = index;
exports.error = error;