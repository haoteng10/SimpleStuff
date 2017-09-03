alert("CONNECTED!")

 var array = [1,2,3];
 var array2 = [5,4,3];
 var array3 = ["hi","hi"];

function printReverse(Things){
	for (var i = Things.length - 1; i >= 0; i--) {
		console.log(Things[i]);
	}
}

function isUniform(array){
	for (var i = 0; i < array.length; i++) {
		if (array[i] !== array[i+1]){
			return false;
		}

		return true;
	}
}


printReverse(array);
console.log(isUniform(array));
console.log(isUniform(array2));
console.log(isUniform(array3));
