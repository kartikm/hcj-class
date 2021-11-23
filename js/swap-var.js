//Program to swap values of two variables

//We will use let instead of var now onwards!
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//Creating temporary variable
let tmp;

//Swap the variables!
tmp = a;
a = b;
b = tmp;

//Remember this syntax!
console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);