var btnApi = document.getElementById("btn-api");
btnApi.addEventListener("click", showApi);


async function showApi () {
	var apiResult = await api("https://api.icndb.com/jokes/random/");
	var value = apiResult.value.joke
	console.log(value)

	var something = document.getElementById("something");
	something.innerHTML = value;
}

async function api(url) {	
	//cuando da error de origin > hacer objeto mode:cors. 		  
	var firstData = await fetch(url, {mode:"cors"}); 
	// only proceed once promise is resolved
	var data = await firstData.json();
	// only proceed once second promise is resolved
	return data;
}