//array de clases
var clases = ["miclase1", "miclase2"];

//elemento al que quitar y poner clases 

var el = document.getElementById("mitexto");
var class = ' '; //clase vacía

estilado();

function estilado () {
	removeclass (el, class); 

	class = claseRandom (); 

	addClass(el, class); 
}

function claseRandom () {
	var rand = Math.floor(Math.random() * clases.length);
	return clases[rand];
}

function addClass(el,class) {
	//...
}

function removeClass(el, class) {
	//...
}