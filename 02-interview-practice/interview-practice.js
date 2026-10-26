const users = [
  { id: 1, name: 'Anna', role: 'developer' },
  { id: 2, name: 'Mark', role: 'designer' },
  { id: 3, name: 'Sara', role: 'developer' },
  { id: 4, name: 'John', role: 'manager' },
];

function getUserById(users, id) {
  return users.find((user) => user.id === id);
}
//const result = getUserById(users, 3);
// console.log(result);

// const employees = [
// { name: 'Anna', department: 'HR', active: true },
// { name: 'Mark', department: 'IT', active: false },
//  { name: 'Sara', department: 'IT', active: true },
// { name: 'John', department: 'Sales', active: false },
// ];

//function hasActiveItEmployee(employees) {
//return employees.some(
// (employee) => employee.department === 'IT' && employee.active,
//);
//}
// const hasActiveEmployee = hasActiveItEmployee(employees);

// console.log(hasActiveEmployee);

//const orders = [
//{ id: 1, customer: 'Anna', total: 120 },
//{ //id: 2, customer: 'Mark', total: 75 },
//{// id: 3, customer: 'Sara', total: 250 },
//{ id: 4, customer: 'John', total: 90 },
//];
//function getTotalRevenue(orders) {
// return orders.reduce((total, order) => {
// return total + order.total;
//}, 0);
//}
// const totalRevenue = getTotalRevenue(orders);
// console.log(totalRevenue);

// const employees = [
// { name: 'Anna', salary: 2500 },
// { name: 'Mark', salary: 3200 },
// { name: 'Sara', salary: 2800 },
// { name: 'John', salary: 3500 },
// ];

// function getTotalSalary(employees) {
// return employees.reduce((salary, employee) => {
// return salary + employee.salary;
// }, 0);
// }
// const totalSalary = getTotalSalary(employees);
// console.log(totalSalary);

// const products = [
// { name: 'Laptop', price: 1000 },
// { name: 'Mouse', price: 50 },
// { name: 'Keyboard', price: 100 },
// { name: 'Monitor', price: 500 },
// ];
function getDiscountedPrices(products) {
  return products.map((product) => product.price * 0.8);
}

// const discountPrices = getDiscountedPrices(products);
// console.log(discountPrices);

const customers = [
  { name: 'Anna', age: 28, premium: true },
  { name: 'Mark', age: 17, premium: true },
  { name: 'Sara', age: 34, premium: false },
  { name: 'David', age: 22, premium: true },
  { name: 'John', age: 16, premium: false },
];

function getAdultPremiumCustomers(customers) {
  return customers
    .filter((customer) => customer.age >= 18 && customer.premium === true)
    .map((customer) => customer.name);
}

// const adultPremiumCustomers = getAdultPremiumCustomers(customers);
// console.log(adultPremiumCustomers);

// const products = [
// { name: 'Laptop', price: 1200, inStock: true },
// { name: 'Mouse', price: 50, inStock: true },
// { name: 'Keyboard', price: 100, inStock: false },
// { name: 'Monitor', price: 350, inStock: true },
// { name: 'Headphones', price: 80, inStock: true },
// ];

function getAffordableProducts(products) {
  return products
    .filter((product) => product.price <= 100 && product.inStock)
    .map((product) => product.name);
}

// const affordableProducts = getAffordableProducts(products);
// console.log(affordableProducts);

const employees = [
  { id: 1, name: 'Anna', department: 'HR', salary: 2800 },
  { id: 2, name: 'Mark', department: 'IT', salary: 3400 },
  { id: 3, name: 'Sara', department: 'IT', salary: 3100 },
  { id: 4, name: 'John', department: 'Sales', salary: 2900 },
];

function getEmployeeById(employees, id) {
  return employees.find((employee) => employee.id === id);
}
const employeeById = getEmployeeById(employees, 3);
console.log(employeeById);

const orders = [
  { id: 1, customer: 'Anna', total: 120, paid: true },
  { id: 2, customer: 'Mark', total: 80, paid: true },
  { id: 3, customer: 'Sara', total: 200, paid: false },
  { id: 4, customer: 'John', total: 150, paid: true },
  { id: 5, customer: 'Emma', total: 60, paid: false },
];

function getLargePaidOrders(ordesr) {
  return orders
    .filter((order) => order.total >= 100 && order.paid === true)
    .map((order) => order.customer);
}

const largePaidOrders = getLargePaidOrders(orders);
console.log(largePaidOrders);
