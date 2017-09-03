alert("Connected!");

function isEven(i){
	if ( i % 2 === 0){
		return "even";
	}else{
		return "odd";
	}
}

function factoral(input){
	var result = input;
	if (input === 0) {
		return 1;
	}else if (input < 0){
		return "Invalid"
	}else{
		for (var i = input; i >= 1; i--) {
		result = result * (i-1);
		}
	}
	return result;
}

// console.log(factoral(5));
console.log("The factoral is " + isEven(factoral(5)));
// console.log(isEven(5))