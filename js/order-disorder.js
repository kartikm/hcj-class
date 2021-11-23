function disorder(arg) {
	for (var i = 0; i < arg.length; i++) {
		if (Math.random() < 0.5) {
		var aux = arg[i];
		var rndPos = Math.floor(Math.random()) * arg.length;
		arg[i] = arg[rndPos];
		arg[rndPos] = aux;
		}
	}
	return arg;
}

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var myNewArray = disorder(myArray);

myNewArray.forEach(function(item) {
	console.log(item);
});
