//JavaScript language

var countries = [];
countries["India"] = "New Delhi";
countries["UK"] = "London";

for(var key in countries){
	console.log(key + ": " + countries[key]);
}

var numbers = [];
var numbers2 = [1,2,3,4,5];
var coll1 = [1,2,3,"hello",true,"yes",null];

for(var i=0;i<coll1.length;i++){
	console.log(coll1[i]);
}


var i;
i = 100; //Number
i = true; //Boolean
i = "String"; 
i = 'String';
i = null;

var j;
if(j != undefined)
	console.log(j);
else
	console.log("j is undefined");

