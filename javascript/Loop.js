/**
 * @file Loop.js
 * @description This file contains the Loop class which provides functionality to create and manage loops in animations or game logic.
 */

// For Loop Example - Simple iteration
console.log("--- For Loop ---");
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i + 1}`);
}

// For ...of Loop Example - Iterating over an array
console.log("--- For ...of Loop ---");
const array = ["apple", "banana", "cherry"];
for (const fruit of array) {
  console.log(`Fruit: ${fruit}`);
}

// For ...in Loop Example - Iterating over an object
console.log("--- For ...in Loop ---");
const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
  console.log(`Key: ${key}, Value: ${object[key]}`);
}

// forEach Loop Example - Iterating over an array
console.log("--- For Each Loop ---");
const numbers = [10, 20, 30];
numbers.forEach((number) => {
  console.log(`Number: ${number}`);
});

// While Loop Example - Simple iteration
console.log("--- While Loop ---");
let count = 5;
while (count < 10) {
  console.log(`Count is at: ${count}`);
  count++;
}

// Do-While Loop Example - Simple iteration
console.log("--- Do While Loop ---");
let index = 1;
do {
  console.log(`Index is at: ${index}`);
  index++;
} while (index < 5);

/**
 * For Loop Example - Simple iteration
 *
 * For ...of Loop Example - Iterating over an array
 * For ...in Loop Example - Iterating over an object
 * forEach Loop Example - Iterating over an array
 *
 * While Loop Example - Simple iteration
 * Do-While Loop Example - Simple iteration
 */
