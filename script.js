// REACT - COMPREHENSIVE NOTES

// WHAT IS REACT?
// React is a free, open-source JavaScript library for building user interfaces (UIs)
// Specifically designed for creating interactive and dynamic web applications
// Focuses on building reusable UI components
// Uses a declarative programming approach - you describe what the UI should look like
// Primarily used for single-page applications (SPAs)

// WHO CREATED REACT?
// Created by: Jordan Walke, a software engineer at Facebook (now Meta)
// Initial Release: May 2013
// Organization: Facebook (Meta) - still maintains and develops React
// First used internally at Facebook for the News Feed in 2011
// Later used in Instagram in 2012 before being open-sourced

// WHY WAS REACT CREATED? (THE NEED)
// 1. Performance Issues: Traditional DOM manipulation was slow for complex UIs
// 2. Code Complexity: Managing state and UI updates in large applications was difficult
// 3. Reusability: Need for reusable UI components across different parts of applications
// 4. Maintainability: Large codebases were hard to maintain and debug
// 5. Data Synchronization: Keeping UI in sync with data was challenging
// 6. Scalability: Facebook needed a solution that could scale with their growing platform

// REACT HISTORY - TIMELINE

// 2011
// - Jordan Walke creates FaxJS, the early prototype of React
// - First deployed on Facebook's News Feed

// 2012
// - React adopted by Instagram after Facebook acquisition
// - Proved its scalability and effectiveness

// May 2013
// - React officially open-sourced at JSConf US
// - Initial version: React 0.3.0
// - Community adoption begins

// 2014
// - React Developer Tools released
// - Growing adoption by major companies
// - Introduction of React Native announced

// March 2015
// - React Native released for iOS
// - Enabled mobile app development using React
// - September 2015: Android support added

// 2015
// - React 0.14 released
// - Split into react and react-dom packages
// - Stateless functional components introduced

// 2016
// - React 15 released
// - Improved error handling
// - Better SVG support
// - Smaller file size

// September 2017
// - React 16 (React Fiber) released - MAJOR REWRITE
// - Complete rewrite of React's core algorithm
// - Improved rendering performance
// - Error boundaries introduced
// - Fragments support
// - Portals for rendering outside DOM hierarchy

// 2018
// - React 16.3: New Context API
// - React 16.6: React.memo, lazy loading, Suspense
// - React 16.8 (February 2019): HOOKS introduced - GAME CHANGER
//   * useState, useEffect, useContext, etc.
//   * Allowed functional components to have state and lifecycle features

// 2019
// - Concurrent Mode experimental release
// - Focus on improving user experience with better rendering

// October 2020
// - React 17 released
// - "No New Features" release
// - Focus on making upgrades easier
// - New JSX Transform

// March 2022
// - React 18 released
// - Concurrent rendering features
// - Automatic batching
// - Transitions API
// - Suspense improvements
// - New hooks: useId, useTransition, useDeferredValue

// 2023-Present
// - React Server Components (RSC) development
// - Focus on performance and developer experience
// - Integration with modern frameworks (Next.js, Remix)
// - Continued improvements to concurrent features

// KEY FEATURES THAT MADE REACT POPULAR
// 1. Virtual DOM: Efficient updates by comparing virtual and actual DOM
// 2. Component-Based: Build encapsulated components that manage their own state
// 3. JSX: JavaScript XML syntax for writing HTML-like code in JavaScript
// 4. One-Way Data Flow: Predictable data flow from parent to child components
// 5. React Hooks: Modern way to use state and lifecycle in functional components
// 6. Large Ecosystem: Vast collection of libraries and tools
// 7. Strong Community: Massive developer community and resources
// 8. React Native: Code reusability for mobile app development
// 9. Developer Tools: Excellent debugging and development tools
// 10. Backed by Meta: Strong corporate support and continuous development

// IMPACT ON WEB DEVELOPMENT
// - Changed how developers think about building UIs
// - Popularized component-based architecture
// - Influenced other frameworks (Vue, Angular, Svelte)
// - Made functional programming concepts mainstream in frontend
// - Created a massive ecosystem of tools and libraries
// - Became one of the most in-demand skills for frontend developers 






// sir class pratices.
// Problem 1: 'reactDOM' should be 'ReactDOM' (capital R and capital D)
// Problem 2: 'rander' should be 'render' (correct spelling)
// Problem 3: The render method should be called separately, not chained with createRoot
// Problem 4: Variable 'x' is unnecessary as render doesn't return a meaningful value
// above problem i fix that 
let rh1 = React.createElement(
    'h1', 
    null, 
    React.createElement('span', null, 'i am span')
);

let y = document.querySelector("#root");
// Corrected version:
let root = ReactDOM.createRoot(y);
root.render(rh1);




// WHY THE KEY WARNING OCCURS:
// When you pass an array of elements to React, React needs a way to track each element
// uniquely to efficiently update the DOM. Without keys, React can't identify which items
// have changed, been added, or removed. This can lead to performance issues and bugs.
// Keys help React identify which items in a list are changed, added, or removed.
// Keys should be given to elements inside arrays to give them a stable identity.

// FIXED VERSION: Added unique 'key' prop to each element in the array
let rh2 = React.createElement(
    'div',
    null,
    [React.createElement('h5', { key: 'h5-1' },
        React.createElement('span', null, 'i am span2')
    ),
    React.createElement('h2', { key: 'h2-1' }, 'i am h2'),
    React.createElement('h3', { key: 'h3-1' }, 'i am h3')
]);

let d = document.querySelector("#root2");
let root2 = ReactDOM.createRoot(d);
root2.render(rh2);

// EXPLANATION: YES, THIS IS HOW REACT STARTED FROM THE BEGINNING
// This is the fundamental, low-level way React works - using React.createElement()
// Before JSX was introduced, developers had to write React code exactly like this
// React.createElement() is the core API that creates React elements (virtual DOM nodes)
// Even today, when you write JSX, it gets transpiled/converted to React.createElement() calls behind the scenes
// Understanding this helps you grasp what's really happening under the hood of React
// Modern React uses JSX syntax which is much cleaner, but it all compiles down to createElement() calls
// So yes, this is the foundational way React was designed to work from its inception in 2013





// ES MODULES (ESM) - COMPREHENSIVE EXPLANATION

// WHAT ARE ES MODULES?
// ES Modules (ESM) are the official standard format for packaging JavaScript code for reuse
// Introduced in ES6 (ECMAScript 2015)
// Provides a standardized way to organize and share code between JavaScript files
// Uses 'import' and 'export' keywords
// Supported natively in modern browsers and Node.js

// WHY ES MODULES WERE CREATED?
// 1. No Native Module System: JavaScript originally had no built-in way to split code into modules
// 2. Global Scope Pollution: All variables were in global scope, causing naming conflicts
// 3. Dependency Management: Hard to manage dependencies between files
// 4. Code Organization: Large applications needed better code organization
// 5. Reusability: Need for reusable code across different projects
// 6. Maintainability: Better structure for maintaining large codebases

// BEFORE ES MODULES
// Developers used various solutions:
// - Script tags in HTML (order mattered, global scope issues)
// - IIFE (Immediately Invoked Function Expressions)
// - CommonJS (Node.js - require/module.exports)
// - AMD (Asynchronous Module Definition)
// - UMD (Universal Module Definition)

// ES MODULES SYNTAX

// EXPORT - Ways to share code from a module

// 1. NAMED EXPORTS (can have multiple per file)
// Export individual items
// export const name = "John";
// export const age = 25;
// export function greet() {
//     return "Hello!";
// }

// // Or export multiple items at once
// const city = "New York";
// const country = "USA";
// export { city, country };

// // Export with alias (rename during export)
// const myFunction = () => "test";
// export { myFunction as testFunction };

// // 2. DEFAULT EXPORT (only one per file)
// // Used for the main thing a module exports
// export default function MainComponent() {
//     return "Main Component";
// }

// // Or with variables
// const mainValue = 42;
// export default mainValue;

// // Or inline
// export default class MyClass {
//     constructor() {
//         this.value = "class value";
//     }
// }

// // IMPORT - Ways to use code from other modules

// // 1. IMPORTING NAMED EXPORTS
// // Import specific named exports
// import { name, age } from './user.js';

// // Import with alias (rename during import)
// import { name as userName, age as userAge } from './user.js';

// // Import all named exports as an object
// import * as User from './user.js';
// // Usage: User.name, User.age, User.greet()

// // 2. IMPORTING DEFAULT EXPORT
// // Can use any name you want
// import MainComponent from './component.js';
// import MyComponent from './component.js'; // Same thing, different name

// // 3. IMPORTING BOTH DEFAULT AND NAMED EXPORTS
// import MainComponent, { name, age } from './module.js';

// // 4. IMPORT FOR SIDE EFFECTS ONLY
// // Runs the module code without importing anything
// import './styles.css';
// import './polyfills.js';

// // DYNAMIC IMPORTS (ES2020)
// // Load modules conditionally or on-demand
// // Returns a Promise
// async function loadModule() {
//     const module = await import('./myModule.js');
//     module.doSomething();
// }

// // Or with .then()
// import('./myModule.js')
//     .then(module => {
//         module.doSomething();
//     })
//     .catch(err => {
//         console.error('Failed to load module:', err);
//     });

// // KEY FEATURES OF ES MODULES

// // 1. STATIC STRUCTURE
// // Imports and exports must be at the top level (not inside functions/conditions)
// // This allows tools to analyze dependencies without running code

// // 2. SINGLETON
// // Modules are evaluated only once
// // The same instance is shared across all imports

// // 3. STRICT MODE
// // ES modules automatically run in strict mode
// // No need to add 'use strict'

// // 4. THIS IS UNDEFINED
// // At the top level of a module, 'this' is undefined (not window/global)

// // 5. DEFERRED EXECUTION
// // Module scripts are deferred by default (like <script defer>)

// // USING ES MODULES IN HTML
// // Add type="module" attribute to script tag
// // <script type="module" src="main.js"></script>
// // <script type="module">
// //     import { greet } from './utils.js';
// //     greet();
// // </script>

// // USING ES MODULES IN NODE.JS
// // Method 1: Add "type": "module" in package.json
// // {
// //   "type": "module"
// // }

// // Method 2: Use .mjs file extension
// // myModule.mjs

// // PRACTICAL EXAMPLE - FILE STRUCTURE

// // File: utils.js
// export const add = (a, b) => a + b;
// export const subtract = (a, b) => a - b;
// export const multiply = (a, b) => a * b;

// export default function calculate(operation, a, b) {
//     switch(operation) {
//         case 'add': return add(a, b);
//         case 'subtract': return subtract(a, b);
//         case 'multiply': return multiply(a, b);
//         default: return 0;
//     }
// }

// // File: main.js
// import calculate, { add, subtract } from './utils.js';

// console.log(add(5, 3));           // 8
// console.log(subtract(10, 4));     // 6
// console.log(calculate('multiply', 3, 4)); // 12

// // BENEFITS OF ES MODULES
// // 1. Better Code Organization: Split code into logical, manageable pieces
// // 2. Explicit Dependencies: Clear what each file needs and provides
// // 3. Namespace Management: No global scope pollution
// // 4. Tree Shaking: Bundlers can remove unused code
// // 5. Better Tooling: IDEs can provide better autocomplete and refactoring
// // 6. Lazy Loading: Load code only when needed (dynamic imports)
// // 7. Standardized: Works across browsers and Node.js
// // 8. Maintainability: Easier to maintain and test isolated modules

// // COMMON PATTERNS IN REACT WITH ES MODULES

// // Exporting React Components
// // File: Button.js
// export default function Button({ text, onClick }) {
//     return <button onClick={onClick}>{text}</button>;
// }

// // Exporting multiple components
// // File: components.js
// export function Header() { return <header>Header</header>; }
// export function Footer() { return <footer>Footer</footer>; }

// // Importing in React
// // File: App.js
// import React from 'react';
// import Button from './Button.js';
// import { Header, Footer } from './components.js';

// function App() {
//     return (
//         <div>
//             <Header />
//             <Button text="Click me" onClick={() => alert('Clicked!')} />
//             <Footer />
//         </div>
//     );
// }

// export default App;

// // ES MODULES VS COMMONJS (Node.js)

// // CommonJS (Old Node.js way)
// // const module = require('./module.js');
// // module.exports = { name: 'value' };

// // ES Modules (Modern way)
// // import module from './module.js';
// // export { name };

// // KEY DIFFERENCES:
// // - CommonJS: Synchronous, dynamic, runtime loading
// // - ES Modules: Can be static, compile-time optimization, tree-shaking

// // BROWSER SUPPORT
// // Modern browsers (Chrome 61+, Firefox 60+, Safari 11+, Edge 16+)
// // For older browsers, use bundlers like Webpack, Rollup, or Vite
// // These tools transpile ES modules to older JavaScript formats

// // BEST PRACTICES
// // 1. Use named exports for utilities and multiple exports
// // 2. Use default export for main component/function of a file
// // 3. Keep file names and export names consistent
// // 4. One component per file (React best practice)
// // 5. Use absolute imports or path aliases for cleaner imports
// // 6. Avoid circular dependencies
// // 7. Use dynamic imports for code splitting and lazy loading









// sir example.
// export let a = 10;

export function sum(a, b) { return a + b; }
export function sub(a, b) { return a - b; }