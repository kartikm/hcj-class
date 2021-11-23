//Array is list-like objects

//Create an array
let languages = ['Hindi', 'Marathi', 'Gujarati', 'Tamil', 'Telugu'];

console.log(languages.length);

// Access elements using index
let first = languages[0];
// Result?

let last = languages[languages.length - 1];
// Result?

// loop
languages.forEach(function (item, index, array) {
	console.log(item, index)
})

// Access full array?
document.getElementById("ID").innerHTML = languages;

// Push and Pop - Add and Remove
let newLang = languages.push('Manipuri');
let rmLang = languages.pop();

// shift and unshift
// Remove first element
let firstLang = languages.shift();

// Add element to the start/beginning
let firstAdd = languages.unshift('English');

// Position
let posLang = languages.indexOf('Hindi');

// Bonus

// Create an empty array
values = []

// Loop - what's this?
for (let x = 0; x < 10; x++){
// Push the values to ..
	values.push([
		2 ** x,
		2 * x ** 2
	])
}

// .. the table format!
console.table(values)
