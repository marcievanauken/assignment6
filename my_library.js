
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




$(function() {
	$("#list").hide({
		opacity: "70%"
	});
});




$(function() {
	$("#bar").hide();
});


$(function() {
	$("#foo").fadeOut(1000, function(){
		$("#foo").fadeIn(4000);		
	});

});