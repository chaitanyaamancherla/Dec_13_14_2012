function GuessingGame(){
	var target = Math.floor(Math.random()*100);
	var attempts = 0;
	var message = "";
	this.getAttempts = function(){
		return attempts;
	};
	this.getMessage = function(){
		return message;
	};
	this.play = function(guess){
		attempts++;
		if(guess > target)
			message = "Aim Lower";
		else if(guess < target)
			message = "Aim Higher";
		else
			message = "You have got it!!!";
	};
}