// === Primtive Data Types ===

// --- Booleans ---
const bool1 = true;
const bool2 = false;

// Generating a boolean value
let age = 20;
const isOver25 = age > 25;
// console.log(isOver25);

// --- Numbers ---
const num1 = 1;
const num2 = 1.1;

const num3 = 2.01 * 'x';

// --- Strings ---
const name = 'Denis'; // Single quotes
const name2 = 'Denis2'; // Double quotes
// Backticks
// - Put Javsascript expressions inside
// - multiline strings
const name3 = `Denis3

${name2}
 more lines
 and more`;

// String() converts values to a string
const name4 = String(1.3); // '1.3'

// --- Undefined ---
// "undefined" is a primitive data type that represents the absence of a value. it is the default value of a variable that has been declared but not assigned a value.
const un = undefined;
// let variables will be undefined to start
let un2;
// console.log(un2);

// Object properties

// --- Null ---
// "null" indicates an intentional setting of empty or non-existent value.
const n = null;

age = null; // set a value to "empty" intentionally

// === Non-Primitive Data Types ===

// --- Objects ---
const person = {
  firstName: 'Denis', // Object property, consisting of a key: firstName, value: 'Denis'
  lastName: 'Koco',
};

// "object property" may also be called "attribute" or "key value pair"

const firstName = person.firstName; // Accessing an object property using dot notation
const firstName2 = person['firstName']; // Accessing an object property using bracket notation

let dropDown = 'lastName'; // value coming from user on website
const dynamicValue = person[dropDown]; // Accessing an object property using a variable as the key
// console.log(dynamicValue);

// Modifying an object
const user = {
  id: 1, // id property: unique identifier that shouldn't be changed
  firstName: 'Denis',
  lastName: 'Koco',
  address: {
    streetName: 'Main St',
    streetNumber: '56',
  },
};
user.lastName = 'xxx';

const streetNumber = user.address.streetNumber; // Accessing a nested object property
// console.log(user);

// --- Arrays ---
const arr = ['abc', 'def']; // array of strings
console.log(arr);

// array of object
const fruits = [
  { id: 1, color: 'red' },
  { id: 2, color: 'green' },
  { id: 3, color: 'green' },
];

// Accesing values in an array
console.log(arr[1]);
console.log(fruits[1].color);

// array methods

// .find() -  retrieving one item, loop over each item and provide tha item to function
console.log(
  fruits.find((fruit) => {
    const isCorrectFruit = fruit.color === 'red';
    return isCorrectFruit;
  }),
);

// .filter() - retrieving multiple items
console.log(
  fruits.filter((fruit) => {
    const isCorrectFruit = fruit.color === 'green';
    return isCorrectFruit;
  }),
);

// .forEach() - runs some code for each item
fruits.forEach((fruit) => {
  console.log('fruit', fruit);
});
// propably better to use for...const...of
for (const fruit of fruits) {
  console.log('fruit', fruit);
}

// .map() - modify existing array (returns array)
const modifiedFruits = fruits.map((fruit) => {
  fruit.color = 'purple';
  return fruit; // returns a new array with modified values
});
console.log(modifiedFruits);
console.log(fruits);

// .push() - add an item to the end of the array
fruits.push({ id: 4, color: 'yellow' });
console.log(fruits);

// ---- Functions ---
function simpleFunction() {
  console.log('simpleFunction');
}

simpleFunction(); // calling the function
simpleFunction();

const arrowFunction = () => {
  console.log('arrowFunction');
};
arrowFunction();

// --- Function Parameters ---
function sum(numberA, numberB) {
  return numberA + numberB;
}

const result = sum(5, 3);

console.log(result);
const result2 = sum(300, 200);
console.log(result2);
