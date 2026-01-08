/**
 * High Order Functions - Functions that take other functions as arguments or return functions as results.
 *
 * Callback Functions - Functions passed as arguments to other functions.
 */

// Higher Order Function: A function that returns a function or takes other functions as arguments is called HOF.

// Example 1
function add(a, b, cb) {
  let result = a + b;
  cb(result);

  return () => {
    console.log(result);
  };
}

// Arrow function
add(10, 20, (result) => {
  console.log(result);
});

// Function expression
add(100, 500, function (result) {
  console.log(result);
});

// Example 2 - Not Efficient Way of doing it
const radius = [1, 2, 3, 4];

const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

console.log(calculateArea(radius));

const calculateCircumference = (radius) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  return output;
};

console.log(calculateCircumference(radius));

// Example 3 - Efficient Way of doing it
console.log("Using Higher Order Functions - Efficent Way");
const area = (radius) => {
  return Math.PI * radius * radius;
};

const circumference = (radius) => {
  return 2 * Math.PI * radius;
};

const diameter = (radius) => {
  return 2 * radius;
};

const calculate = (radius, logic) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

console.log(
  `Using Map: ${radius.map(area)}, ${radius.map(circumference)}, ${radius.map(
    diameter
  )}`
);
