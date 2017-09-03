alert("CONNECTED!")

var button = document.querySelector("button");
var body = document.querySelector("body");

var value = false;


// NOT RECOMMEND: USE JAVASCRIPT TO CHANGE STYLE DIRECTLY
// function colorSwitch(){
// 	if (value === false){
// 		body.style.background = "purple";
// 		value = true;
// 	}else if (value == true){
// 		body.style.background = "white";
// 		value = false;
// 	} else{
// 		alert("Error");
// 	}
// }

// RECOMMEND: ADD CLASS TO THE ELEMENT TO STYLE
function colorSwitch(){
	if (value === false){
		body.classList.remove("white");
		body.classList.add("purple");
		value = true;
	}else if (value == true){
		body.classList.remove("purple");
		body.classList.add("white");
		value = false;
	} else{
		alert("Error");
	}
}

button.addEventListener("click",colorSwitch);

