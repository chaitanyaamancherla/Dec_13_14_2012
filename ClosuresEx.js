//Closures Ex

var arr = [10,102,20,30,40,506,67,345,345,6,676,878,90];

function findCount(logic){
	var count = 0;
	for(var i=0;i<arr.length;i++){
		count = logic(arr[i])?count+1:count;
	}
	console.log("Count: " + count);	
}

var fn1 = function(num){return num > 35;};
findCount(fn1);
findCount(function(num){return num > 100;});
findCount(function(num){return num%2 == 0;});
findCount(function(num){return (num%2 != 0) && (num > 100);});
