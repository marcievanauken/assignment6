// function myFunction() {
// 	console.log("hello");
// }


// function myFunction(theFunction) {
// 	theFunction();
// }

// function doStuff() {
// 	console.log ("marcie");
// }

// myFunction(doStuff);

// var x = doStuff;
// myFunction(x);



$(function() {

	$("#clickExample").on("click", function() {
			console.log("there was a click");
			console.log("hello there");
		});

		function sayHi() {
			console.log("hello there");
		}

	$("#clickExample").on("click", sayHi);

	$("#clickExample").animate( {
	opacity: 0.25,
	width: "70%"
	} , 2000 );


});

/* lines 23-26 is one way to code the click function, lines 28-32 is another way */


// $("ul").animate( {
// 	opacity: "70%"
// } , 2000 );

$(function() {
	$("#list").hide({
		opacity: "70%"
	});
});

/*
$(function() {
	$("#list").hide();
});
*/

/*
// $function sayHi(name) {
// 	console.log("hello there, " + name);
// }

// sayHi("toby")
// sayHi("marcie")
*/

// "name" is  a string
// "callback" is a function that takes 1 argument


