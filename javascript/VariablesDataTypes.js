/*
    Naming Conventions:
    1. Use camelCase for variable names (e.g., myVariableName).
    2. Start variable names with a letter, underscore (_), or dollar sign ($).
    3. Avoid using reserved keywords (e.g., var, function, return).
    4. Use meaningful names that describe the purpose of the variable.
    5. Be consistent with naming conventions throughout your code.
*/

/**
 * Variables: Containers for storing data values.
 */

var a = 10; // number
var b = 3.14; // number
var name = "John Doe"; // string
var isStudent = true; // boolean
var undef; // undefined
var empty = null; // null
var person = { firstName: "Jane", lastName: "Doe" }; // object
var colors = ["red", "green", "blue"]; // array

console.log("Number:", a, b);
console.log("String:", name);
console.log("Boolean:", isStudent);
console.log("Undefined:", undef);
console.log("Null:", empty);
console.log("Object:", person);
console.log("Array:", colors);
console.log("Type of a:", typeof a);
console.log("Type of name:", typeof name);
console.log("Type of isStudent:", typeof isStudent);
console.log("Type of undef:", typeof undef);
console.log("Type of empty:", typeof empty);
console.log("Type of person:", typeof person);
console.log("Type of colors:", typeof colors);
console.log("Is colors an array?", Array.isArray(colors));

console.log("------------------VAR--LET--CONST------------------");
/* 
    var vs let vs const:
    1. var: (Never Use) Function-scoped, can be redeclared and updated.
    2. let: (Most Used) Block-scoped, cannot be redeclared in the same scope, can be updated.
    3. const: (Most Used) Block-scoped, cannot be redeclared or updated, must be initialized at declaration.

    Example:
    - var x = 5;
    - x = 10; // valid
    
    - let y = 15;
    - y = 20; // valid

    - const z = 25;
    - // z = 30; // invalid, will throw an error
    - // const z; // invalid, must be initialized at declaration
*/

let age = 25;
console.log("Age:", age);

{
  let age = 27; // updating existing variable
  console.log("Updated Age inside block:", age);
}

console.log("Age:", age);

var count = 25;
console.log("count:", count);

{
  var count = 27; // updating existing variable
  console.log("Updated count inside block:", count);
}

console.log("count:", count);

/**
 * Data Types in JavaScript:
 * 1. Primitive Data --> data that is not an object and has no methods.
 *   - Number
 *   - String
 *   - Boolean
 *   - Undefined - when a variable is declared but not assigned a value.
 *   - Null - represents the intentional absence of any object value.
 *   - Symbol - a unique and immutable primitive value.
 *   - BigInt - represents integers with arbitrary precision.
 *
 *
 * 2. Non-Primitive Data --> data that is an object and has methods.
 *   - Object
 *   - Array
 *   - Function
 */

/** 
 * ---- Why does typeof null return "object"? ----
    In JavaScript, `typeof null` returning `"object"` is not intentional behavior, it is a long-standing bug preserved for backward compatibility**.

    --> What actually happened

        When JavaScript was first implemented in the mid-1990s, values were represented internally using **type tags**. Objects were identified by a specific tag value.

    * `null` was represented as a **null pointer**, which had the same internal tag as objects.
    * As a result, the `typeof` operator reported `"object"` for `null`.

        This mistake shipped in the very first version of JavaScript and quickly became relied upon by existing code.

    --> Why it was never fixed

        Changing it would have **broken massive amounts of legacy JavaScript** across browsers and applications. Because JavaScript prioritizes backward compatibility, the behavior was left unchanged.


    --> Important clarifications

        * `null` is **not an object**
        * `null` means **intentional absence of a value**
        * It is a **primitive value**, just like `undefined`, `number`, or `string`

    -->Correct way to check for null 

        Do **not** rely on `typeof` for `null` checks.

    Use one of these instead:

    ```js
    value === null
    ```
    (Or when you want to exclude both `null` and `undefined`)

    ```js
    value == null
    ```
 */

/**
    ----------- Object -----------

    Objects are collections of key-value pairs, where keys are strings (or Symbols) and values can be of any data type, including other objects.
 */

let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  isElectric: false,
};

car.price = 24000; // Adding a new property
car.year = 2021; // Updating an existing property

console.log("Car Object:", car);
console.log("Car Make:", car.make);
console.log("Car Year:", car.year);
console.log("Car Price:", car.price);
console.log("Is Car Electric?:", car.isElectric);

let strings = "Hello, World!";
console.log("String(addition):", strings + 1);
console.log("String(subtract):", strings - 10);

console.log(typeof NaN); // Number
console.log(typeof null); // Object

/**
 * ----------- Edge Cases/Operations -----------
   - Adding a number and a string results in string concatenation.
   - Subtracting a string from a number results in NaN (Not a Number) if the string cannot be       coerced to a number.
   - null is treated as 0 in numeric operations.
   - undefined results in NaN in numeric operations.
   - NaN is of type number but represents an invalid number.
   - typeof NaN returns "number".
   - typeof null returns "object" (this is a known quirk in JavaScript).
   - Arrays are of type object.
 */
