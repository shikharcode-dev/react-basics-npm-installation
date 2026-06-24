// // MAIN FILE - Importing and displaying all exported values
// import calculate, { add, subtract, multiply } from './utils.js';
// import { name, age, greet, city, country, testFunction } from './module.js';
// import MainComponent from './component.js';
// import MyClass from './class.js';
// import Button from './Button.js';
// import { Header, Footer } from './components.js';
// import App from './App.js';

// // Output all imported values
// console.log('=== NAMED EXPORTS ===');
// console.log('Name:', name);
// console.log('Age:', age);
// console.log('Greeting:', greet());
// console.log('City:', city);
// console.log('Country:', country);
// console.log('Test Function:', testFunction());

// console.log('\n=== UTILITY FUNCTIONS ===');
// console.log('Add 5 + 3:', add(5, 3));
// console.log('Subtract 10 - 4:', subtract(10, 4));
// console.log('Multiply 3 * 4:', multiply(3, 4));

// console.log('\n=== DEFAULT EXPORTS ===');
// console.log('Calculate (add, 5, 3):', calculate('add', 5, 3));
// console.log('Calculate (subtract, 10, 4):', calculate('subtract', 10, 4));
// console.log('Calculate (multiply, 3, 4):', calculate('multiply', 3, 4));
// console.log('Main Component:', MainComponent());

// console.log('\n=== CLASS INSTANCE ===');
// const myClassInstance = new MyClass();
// console.log('MyClass value:', myClassInstance.value);

// console.log('\n=== REACT COMPONENTS ===');
// console.log('Button Component:', Button);
// console.log('Header Component:', Header);
// console.log('Footer Component:', Footer);
// console.log('App Component:', App);





// sir example
// import { a } from './script.js';
// console.log(a);

import { sum, sub } from './script.js';
let x = sum(10, 20);
console.log(x);
let y = sub(20, 10);
console.log(y);
