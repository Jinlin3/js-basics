// --Variables--
// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number
// Cannot contain a space or hyphen
// Are case-sensitive

let firstName = 'JJ';
let lastName = 'Lin';

// let vs const
// const means constant, the variable cannot be changed
// if the variable needs to be changed use let instead

const interestRate = 0.3;
console.log(interestRate);

// Everything below are primitive types

let name = 'JJ'; // String Literal
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
let size = undefined; // undefined
let selectedColor = null; // null

// Static Languages - type of variables are set when declared and cannot be changed in the future
// Dynamic Languages (JS) - type of variables can change at runtime

// Reference Types : Objects/Arrays/Functions
// Objects:
let person = {
  name: 'Itai',
  age: 20
};
console.log(person);

// 2 Ways of retrieving an object property:

// Dot Notation
person.name = 'Jack';
console.log(person.name);

// Bracket Notation
let selection = 'name';
person[selection] = 'Christian';
console.log(person[selection]);

// Arrays
// Array length is dynamic
// Arrays can store different types
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);
console.log(selectedColors[0]);

// Functions
// name = parameter; 'JJ' = argument
function greet(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName);
}

greet('JJ', 'Lin');
greet('Itai', 'Mackavitch');

// Calculates a value
function square(number) {
  return number * number;
}

let number = square(2);
console.log(number);
console.log(square(2));

// Loops
for (let i = 1; i <= 3; i++) {
  if (i == 1) {
    console.log(i + ' loop');
  } else {
    console.log(i + ' loops');
  }
}

// Arrow Functions

function sum(a, b) {
  return a + b;
}

// Convert sum to an arrow function

const sum2 = (a, b) => a + b;
console.log(sum2(2, 3));

const isPositive = number => number >= 0;
console.log(isPositive(-1));