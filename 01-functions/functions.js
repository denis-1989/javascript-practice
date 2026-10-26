function sum(numberA, numberB) {
  return numberA + numberB;
}

const result = sum(5, 3);

// console.log(result);

// array of employee objects
const employees = [
  { name: 'Anna', salary: 2800 },
  { name: 'Mark', salary: 3500 },
  { name: 'Sara', salary: 4200 },
  { name: 'John', salary: 2600 },
  { name: 'Emma', salary: 3800 },
];

function getHighEarners(employees) {
  return employees
    .filter((employee) => employee.salary >= 3000) // returns an array of employees with salary >= 3000
    .map((employee) => employee.name); // returns an array of names of high earners
}
const highEarners = getHighEarners(employees);
//console.log(highEarners);

// Alternative implementation using a for loop
function getHighEarnerNames(employees) {
  const result = [];

  for (const employee of employees) {
    if (employee.salary >= 3000) {
      result.push(employee.name);
    }
  }

  return result;
}

const highEarnerNames = getHighEarnerNames(employees);

// console.log(highEarnerNames);

// const products = [
// { name: 'Laptop', price: 1200 },
// { name: 'Mouse', price: 25 },
// { name: 'Keyboard', price: 80 },
// { name: 'Monitor', price: 350 },
// { name: 'USB Cable', price: 15 },
// ];

function getAffordableProductNames(products) {
  const result = [];
  for (const product of products) {
    if (product.price < 100) {
      result.push(product.name);
    }
  }
  return result;
}

// const affordableProductNames = getAffordableProductNames(products);

// console.log(affordableProductNames);

const users = [
  { name: 'Anna', age: 17, active: true },
  { name: 'Mark', age: 25, active: true },
  { name: 'Sara', age: 32, active: false },
  { name: 'John', age: 19, active: true },
  { name: 'Emma', age: 16, active: true },
  { name: 'David', age: 41, active: false },
];

function getActiveAdultNames(users) {
  return users
    .filter((user) => user.age >= 18 && user.active)
    .map((user) => user.name);
}

// const activeAdultNames = getActiveAdultNames(users);
// console.log(activeAdultNames);

function getActiveAdultNames(users) {
  const result = [];
  for (const user of users) {
    if (user.age >= 18 && user.active) {
      result.push(user.name);
    }
  }
  return result;
}

const activeAdultNames = getActiveAdultNames(users);
// console.log(activeAdultNames);

const orders = [
  { id: 1, customer: 'Anna', total: 120, paid: true },
  { id: 2, customer: 'Mark', total: 75, paid: false },
  { id: 3, customer: 'Sara', total: 250, paid: true },
  { id: 4, customer: 'John', total: 90, paid: true },
  { id: 5, customer: 'Emma', total: 310, paid: false },
  { id: 6, customer: 'David', total: 180, paid: true },
];

function getLargePaidOrderCustomers(orders) {
  return orders
    .filter((order) => order.total >= 100 && order.paid)
    .map((order) => order.customer);
}

// const largePaidOrderCustomers = getLargePaidOrderCustomers(orders);
// console.log(largePaidOrderCustomers);

function getLargePaidOrderCustomers(orders) {
  const result = [];
  for (const order of orders) {
    if (order.total >= 100 && order.paid) {
      result.push(order.customer);
    }
  }
  return result;
}
const largePaidOrderCustomers = getLargePaidOrderCustomers(orders);
console.log(largePaidOrderCustomers);

const products = [
  { name: 'Laptop', price: 1200, inStock: true, category: 'electronics' },
  { name: 'Mouse', price: 45, inStock: true, category: 'electronics' },
  { name: 'Desk', price: 350, inStock: true, category: 'furniture' },
  { name: 'Monitor', price: 280, inStock: false, category: 'electronics' },
  { name: 'Keyboard', price: 120, inStock: true, category: 'electronics' },
  { name: 'Chair', price: 220, inStock: true, category: 'furniture' },
  { name: 'Headphones', price: 180, inStock: true, category: 'electronics' },
];

function getAvailableElectronics(products) {
  return products
    .filter(
      (product) =>
        product.price >= 100 &&
        product.inStock === true &&
        product.category === 'electronics',
    )
    .map((product) => product.name);
}

const availableElectronics = getAvailableElectronics(products);
console.log(availableElectronics);
