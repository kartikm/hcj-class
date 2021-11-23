// Again, we are using inbuilt Math library to generate random number.
// Formula: Math.random() * (highestNumber - lowestNumber) + lowestNumber
// Random number is between 1 to 10.
const a = Math.random() * (10-1) + 1
console.log(`Random number between 1 and 10 is: ${a}`);