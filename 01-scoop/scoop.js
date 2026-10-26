function sum(a, b) {
  const result = a + b;
  return result;
}

const x = sum(1, 2);

// ReferenceError resulte is not definet
// console.log(result);
// console.log(a);
// console.log(b);
console.log(x);

// 2. block scoop

let age = 20;
if (age < 25) {
  const isUnder25 = true;
  console.log(isUnder25);
}

console.log(isUnder25); // ReferenceError: isUnder25 is not defined

// Workaround: Declare `let` variable first
let isUnder25;
if (age < 25) {
  isUnder25 = true;
  console.log(isUnder25);
}

console.log(isUnder25); // ReferenceError: isUnder25 is not defined

// 3. let vs var vs const

if (age < 25) {
  // var will allow for access outside of scopes
  var isUnder25Number2 = true;
}

comsole.log(isUnder25Number2);
