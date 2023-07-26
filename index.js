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
firstName = undefined; // undefined
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