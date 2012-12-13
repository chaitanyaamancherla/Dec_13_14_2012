//Functions 2
//closures

function confused(){
	return function(){
			return function(){
				console.log("I need a break");
			}
	       };
}
//confused()()();
var fn = confused();
var fn2 = fn();
fn2();


function work(mode){
	mode();
}

var eat = function(){
	console.log("Eating");
}

work(eat);
work(sleep);
work(function(){console.log("Scratching my head");});

function sleep(){
	console.log("Sleeping");
}


