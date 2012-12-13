//Closures 2

function Car(theModel){
	this.model = theModel;
	this.drive = function(){}
}

var c1 = new Car("City");
console.log(c1.model);
console.log(c1["model"]);
c1["drive"]();

var prop = "model";
console.log(c1[prop]);



function Book(theTitle,thePrice){
	this.title = theTitle;
	this.price = thePrice;
	if(Book.numberOfBooks == undefined)
		Book.numberOfBooks = 1;
	else
		Book.numberOfBooks++;
	this.read = function(){
			console.log("Reading " + this.title);
		    };
	var author;
	function tear(){}
}
Book.getNumberOfBooks = function(){
	return Book.numberOfBooks;
}
Book("dsfjndsf","dsf",12,3434,true);
Book("dsfjndsf","dsf",12,3434,true);
Book("dsfjndsf","dsf",12,3434,true);
var b1 = new Book("XML",100);
console.log(b1.title + ", " + b1.price);
b1.read();

console.log("Book count: " + Book.getNumberOfBooks());




var b2 = new Book("AJAX",150);
console.log(b2.title + ", " + b2.price);
b2.read();



//eat(); Error
var eat = function(){console.log("Eating");}

