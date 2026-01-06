/**
 * Functions are blocks of code that perform a specific task.
 * Pros:
 * - Reusability
 * - Code Organization
 * - Code Reusability
 *
 * Properties:
 * - Function Name
 * - Parameters
 * - Return Values
 *
 *
 * Definition:
 * function functionName(parameters) {
 *   // code to be executed
 * }
 *
 * Invoking:
 * functionName(parameters);
 *
 * */

/**
 * Good Practices
 * - Use Descriptive Names
 * - Use Parameters
 * - Use Return Values(Always Return a Value)
 * - Use Arrow Functions
 *
 */

// Function Defintion - Argument is the value that is passed to the function
function language(langauge) {
  console.log("The Language that i like is " + langauge);
}

// Function Invocation/Call - Parameter is the name of the variable that is used to pass the value to the function
language("Rust");
language("Go-Lang");
language("TypeScript");

// Without Parameters
function status() {
  console.log("Skill Issues");
}

status();
status();
status();

// With Parameters
function language(langauge) {
  console.log("The Language that i like is " + langauge);
}

language("Rust");
language("Go-Lang");
language("TypeScript");

// With Return Values and Parameters
function language(langauge) {
  return "The Language that i like is " + langauge;
}

console.log(language("Rust"));
console.log(language("Go-Lang"));
console.log(language("TypeScript"));

// With Multiple Parameters
function series(name, episode) {
  console.log("The series is " + name + " and the episode is " + episode);
}

series("Game of Thrones", 10);
series("Breaking Bad", 9);
series("Stranger Things", 6);

// Unlimed Arguments
// Arguments is an array like object  - arguments is not an array - arguments is not iterable - arguments is not a function
function series() {
  console.log(arguments);
}
series("Game of Thrones", 10, "Episode 1");
series("Breaking Bad", 9, 10);
series("Stranger Things", 6, "Episode 3");

console.log("Using Arguments Object");
function addNumbers() {
  let res = 0;
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
}

console.log(addNumbers(1, 2, 3, 4, 5));
console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));

console.log("Using Spread Operator");

// Using Spread Operator
function addNumbers(...numbers) {
  let res = 0;
  for (let i = 0; i < numbers.length; i++) {
    res += numbers[i];
  }
  return res;
}

console.log(addNumbers(1, 2, 3, 4, 5));
console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));

/**
 * Arrow Functions - Its a function that is defined using the arrow operator =>
 *
 *
 * Properties:
 * - Function Name
 * - Parameters
 * - Return Values
 *
 * Pros:
 * - Concise Syntax
 * - Better Readability
 *
 * Cons:
 * - Cannot be used as a constructor
 * - Cannot be used as a generator
 *
 */

// 1. Syntax
const sayBye = () => {
  console.log("Bye");
};

const sayHello = (name) => {
  console.log("Hello " + name);
};

sayHello("Dracarys");

const add = (a, b) => a + b; // one Liner
console.log(add);

const addv2 = (a, b) => {
  return a + b;
};
console.log(addv2);

/**
 *  Use return keyword when you have multiple lines of code.
 *
 */

/* 2. 'arguments' Keyword */
// arguments keyword is not available in arrow functions
function addNumbers() {
  let res = 0;
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
}

console.log(addNumbers(1, 2, 3, 4, 5));

/* 3. Hoisting */
// Hoisting is the process of moving function declarations to the top of the file.
// Can't hoist arrow functions

/* 4. This Keyword */
// Arrow functions do not have their own this keyword
// Arrow functions inherit this from the parent scope

const obj = {
  name: "Dracarys",
  age: 25,
  sayHello: function () {
    console.log("Hello " + this.name);
  },
};

obj.sayHello();

const obj2 = {
  name: "Dracarys",
  age: 25,
  sayHello: () => {
    console.log(this);
    // console.log("Hello " + this.name); -- doesn't work - returns undefined - (When run in browser --> Value is [window object])
    console.log("Hello " + obj2.name);
  },
};

obj2.sayHello();

// Example of Arrow Function
const domains = (name, price) => {
  console.log("The domain is " + name + " and the price is " + price + "$");
};

domains("google.com", 10000);
domains("facebook.com", 20000);
domains("youtube.com", 30000);
domains("amazon.com", 40000);
domains("apple.com", 50000);

/**
 * ----------- Advanced -----------
 *
 * INTERVIEW & PRODUCTION POV:
 *
 * 1. Traditional Functions (Function Declaration):
 *    - Hoisting: Can be called before they are defined in the code. Useful for organizing code where
 *      helper functions are at the bottom.
 *    - `this` context: Dynamic. Depends on how the function is called. Essential for object methods
 *      and prototypes.
 *    - Use Case: Top-level component definitions, utility libraries where hoisting aids readability,
 *      and object methods.
 *
 * 2. Arrow Functions:
 *    - No Hoisting: Must be defined before use (const/let). Enforces a stricter flow.
 *    - `this` context: Lexical. Inherits `this` from the surrounding scope. This is the "killer feature"
 *      that solved the old `var self = this` hack in callbacks.
 *    - Implicit Return: One-liners don't need `{ return ... }`.
 *    - Use Case: Callbacks (map, filter, reduce), event handlers in React (to preserve `this` or avoid binding),
 *      and simple functional utilities.
 *
 * REAL LIFE SCENARIO:
 * Imagine an E-commerce Cart.
 */

// Traditional Function: Best for methods needing their own 'this'
const cart = {
  items: ["Laptop", "Mouse"],
  printItems: function () {
    console.log("Cart contains:", this.items); // 'this' refers to the cart object
  },
};

// Arrow Function: Best for callbacks to preserve context
const checkout = {
  store: "BestBuy",
  processPayment: function () {
    // We use a traditional function here to get 'this.store'
    // But inside the callback (setTimeout), we use an Arrow Function to KEEP 'this' pointing to checkout
    setTimeout(() => {
      console.log(`Payment processed for ${this.store}`); // Lexical scoping works here!
    }, 1000);
  },
};

cart.printItems();
checkout.processPayment();
