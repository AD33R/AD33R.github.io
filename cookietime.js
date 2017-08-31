

//document.cookie = "hello=friend";
//var y = document.cookie;
//console.log(y);




$(document).ready(function(){


$("#submit-button").click(function(){
	var amount = $("#amount").val();
	var aNumb = Number(amount);
	document.cookie = "amount" + "=" + aNumb;
	var flavor = $("#flavor").val();
	document.cookie = "flavor" + "=" + flavor;
	console.log(aNumb);
	if (aNumb > 0){
		var x = (aNumb + 10);
		console.log(x);
	};
	
});





});







//$("#submit-button").click(function(){

	//var number = (amount);
	//if( number != 0) {
	//	console.log(number);
		//alert("hi");

	//}

//});






//var amount = Cookies.get("amount");
//if (amount){
//	alert ("hello" + amount);
//}