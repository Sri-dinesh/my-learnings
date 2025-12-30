// Conditionals

/**
 * Types:
 * 1. if
 * 2. else if
 * 3. else
 * 4. switch
 * 5. ternary operator
 * 6. logical operators (&&, ||, !)
 */

function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
console.log(checkNumber(10)); // Output: Positive
console.log(checkNumber(-5)); // Output: Negative
console.log(checkNumber(0)); // Output: Zero

// Switch Statement
function getDayName(dayNumber) {
  let dayName;
  switch (dayNumber) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;

    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    case 7:
      dayName = "Sunday";
      break;
    default:
      dayName = "Invalid day number";
  }
  return dayName;
}

console.log(getDayName(3)); // Output: Wednesday
console.log(getDayName(8)); // Output: Invalid day number

/**
 * OPERATORS:
 * 1. Arithmetic Operators: +, -, *, /, %, ++, --, **
 * 2. Assignment Operators: =, +=, -=, *=, /= %=, **=
 * 3. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
 * 4. Relational Operators: >, <, >=, <=
 * 5. Logical Operators: && (AND), || (OR), ! (NOT)
 * 6. Bitwise Operators: &, |, ^, ~, <<, >>, >>>
 * 7. Ternary Operator: condition ? expr1 : expr2
 * 8. Type Operators: typeof, instanceof
 * 9. Nullish Coalescing Operator: ??
 */

// Operations
let a = 10;
let b = 5;
let sum = a + b; // Arithmetic
let isEqual = a === b; // Comparison
let isGreater = a > b; // Relational
let logicalAnd = a > 0 && b > 0; // Logical
let ternaryResult = a > b ? "a is greater" : "b is greater"; // Ternary

console.log(
  `A: ${a} B: ${b} | Sum: ${sum}, Is Equal: ${isEqual}, Is Greater: ${isGreater}, Logical AND: ${logicalAnd}, Ternary Result: ${ternaryResult}`
);

// Typeof & instanceof Operator
let typeOfA = typeof a;
console.log(`Type of A: ${typeOfA}`); // Output: number

let date = new Date();
let isDateInstance = date instanceof Date;
console.log(`Is date an instance of Date? ${isDateInstance}`); // Output: true

// Nullish Coalescing
let value = null;
let defaultValue = value ?? "Default Value";
console.log(`Value: ${defaultValue}`); // Output: Default Value
