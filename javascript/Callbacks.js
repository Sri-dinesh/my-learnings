/**
 * CALLBACKS:
 *
 * DEFINITION:
 * A callback is a function passed as an argument to another function
 * and is executed after the completion of that first function.
 *
 * In JavaScript, functions are objects. Therefore, functions can take
 * functions as arguments, and can be returned by other functions.
 * Functions that do this are called "higher-order functions".
 */

// REAL LIFE ANALOGY

/*
 * SITUATION: Ordering Pizza at a restaurant.
 *
 * WITHOUT CALLBACK (Synchronous/Blocking):
 * You order a pizza. You wait exactly at the counter until it is baked.
 * No one else can order while you stand there. This is inefficient.
 *
 * WITH CALLBACK (Asynchronous/Non-Blocking):
 * 1. You give your order and your PHONE NUMBER to the cashier.
 * 2. You go home or sit down (You don't wait).
 * 3. The Cashier calls you back (CALLBACK) when the pizza is ready.
 * 4. You pick up the pizza and eat it (EXECUTE THE CODE).
 */

// CODE EXAMPLE 1: BASIC SYNCHRONOUS CALLBACK

// A function that takes a name and a callback function
function greetUser(name, callback) {
  console.log(`Hello ${name}!`);
  // Executing the callback function passed in
  callback();
}

// The function we want to pass as a callback
function sayGoodbye() {
  console.log("Goodbye, see you soon!");
}

// Usage: We pass 'sayGoodbye' as an argument (no parentheses)
greetUser("Alice", sayGoodbye);

/*
 * OUTPUT:
 * Hello Alice!
 * Goodbye, see you soon!
 */

// CODE EXAMPLE 2: REAL WORLD USE CASE (Simulated API)

// Simulating a data download with a setTimeout (Asynchronous)
function downloadData(url, successCallback, errorCallback) {
  console.log(`Starting download from ${url}...`);

  setTimeout(() => {
    const isDownloadSuccessful = true; // Try changing to false to test error

    if (isDownloadSuccessful) {
      // Pass the data to the success callback
      const data = "{ id: 1, content: 'JS Notes' }";
      successCallback(data);
    } else {
      // Pass the error message to the error callback
      errorCallback("Network Connection Failed");
    }
  }, 2000); // Simulates a 2 second delay
}

// Define what happens on success
function handleSuccess(data) {
  console.log("Success! Data received:");
  console.log(data);
}

// Define what happens on failure
function handleError(error) {
  console.error("Error:", error);
}

// Trigger the function - Notice how we define logic now, but it runs later (in 2 seconds)
downloadData("https://api.example.com/notes", handleSuccess, handleError);

// USE CASES OF CALLBACKS

/*
 * 1. ASYNCHRONOUS OPERATIONS (Async/Await & Promises origin):
 *    Used when fetching data from APIs, reading files (Node.js), or
 *    waiting for a timer. You don't want the code to freeze while waiting.
 *
 * 2. EVENT LISTENERS:
 *    When a user clicks a button, you pass a callback function to run.
 *    Example: button.addEventListener('click', myCallbackFunction);
 *
 * 3. ARRAY METHODS (Higher Order Functions):
 *    Methods like .map(), .filter(), and .forEach() take callbacks
 *    to transform or loop through data.
 */

// Example: Array Method Callback
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function (num) {
  return num * 2; // This anonymous function is the callback
});

console.log("Doubled Numbers:", doubled); // [2, 4, 6, 8]

/*
 * THE PROBLEM: CALLBACK HELL
 * When callbacks are nested within callbacks (e.g., wait for login,
 * then get user, then get posts), code becomes hard to read.
 *
 * Modern JS uses Promises and Async/Await to solve this, but
 * understanding callbacks is the foundation of JS.
 */
