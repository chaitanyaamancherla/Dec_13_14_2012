//Functions 1
//Function hoisting
//arguments

function add(){
	var total = 0;
	for(var i=0;i<arguments.length;i++){
		if(typeof(arguments[i]) == "number")
			total += arguments[i];
	}
	console.log("Total : " + total);
}

add(1,2);
add(12,3,2,23);
add(12,12,"hello");



function code(){
	console.log("****Coding****");
	//arguments;
	for(var i=0;i<arguments.length;i++){
		console.log(arguments[i]);
	}
}

code();
code(1000,"lines");
code(100,"classes every day",100,"lines in each class");
code("Comments");


eat();
function eat(){
	console.log("Eating");
}

console.log(work());
function work(){
	return "I am sleeping";
}
