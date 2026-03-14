// 1. CREATING ARRAYS

//  Array Literal Notation (Recommended)
const fruits = ["Apple", "Banana", "Mango"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "two", true, null, undefined, { name: "test" }, [1, 2, 3]];

//  Array Constructor
const arr1 = new Array(3); // Creates array with length 3 (empty slots)
const arr2 = new Array(1, 2, 3); // Creates [1, 2, 3]

//  Array.from() - From iterable or array-like
const fromString = Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']
const fromSet = Array.from(new Set([1, 2, 3])); // [1, 2, 3]
const fromArrayLike = Array.from({ length: 3 }, (_, i) => i); // [0, 1, 2]

//  Array.of() - Creates array from arguments
const arr3 = Array.of(1, 2, 3); // [1, 2, 3]
const arr4 = Array.of(5); // [5] (unlike new Array(5))

//  Spread Syntax
const copy1 = [...fruits];
const combined = [...fruits, ...numbers];

// 2. ARRAY CHARACTERISTICS

// - Zero-indexed: First element at index 0
// - Dynamic length: Can grow/shrink automatically
// - Heterogeneous: Can hold any data type
// - Reference type: Assignment copies reference, not values
// - Sparse arrays: Can have empty slots (gaps)

// 3. ARRAY PROPERTIES

const arr = [10, 20, 30, 40, 50];

//  length Property
console.log("Length:", arr.length); // 5

// Setting length can truncate or expand array
arr.length = 3; // Truncates to [10, 20, 30]
arr.length = 10; // Expands with empty slots [10, 20, 30, <7 empty slots>]

//  constructor Property
console.log("Constructor:", arr.constructor); // [Function: Array]

// 4. ACCESSING ELEMENTS

const colors = ["Red", "Green", "Blue", "Yellow"];

//  Bracket Notation
console.log(colors[0]); // "Red"
console.log(colors[2]); // "Blue"
console.log(colors[10]); // undefined (out of bounds)

//  at() Method (Modern - supports negative indices)
console.log(colors.at(0)); // "Red"
console.log(colors.at(-1)); // "Yellow" (last element)
console.log(colors.at(-2)); // "Blue" (second from last)

// 5. MUTATING METHODS (Modify Original Array)

let nums = [1, 2, 3, 4, 5];

//  push() - Add elements to end
nums.push(6); // [1, 2, 3, 4, 5, 6]
nums.push(7, 8, 9); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("After push:", nums);

//  pop() - Remove element from end
const removed = nums.pop(); // 9
console.log("After pop:", nums, "Removed:", removed);

//  unshift() - Add elements to front
nums.unshift(0); // [0, 1, 2, 3, 4, 5, 6, 7, 8]
nums.unshift(-2, -1); // [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log("After unshift:", nums);

//  shift() - Remove element from front
const first = nums.shift(); // -2
console.log("After shift:", nums, "Removed:", first);

/**
 * Slice - doesn't include end index
 * Splice - includes end index
 */

// splice() - Add/remove at specific index
// splice(start, deleteCount, ...itemsToAdd)
nums.splice(2, 0, 99); // Insert 99 at index 2, delete 0
console.log("After splice insert:", nums);

nums.splice(2, 3); // Delete 3 elements starting at index 2
console.log("After splice delete:", nums);

nums.splice(1, 2, 100, 200); // Replace 2 elements at index 1 with 100, 200
console.log("After splice replace:", nums);

//  reverse() - Reverse in place
nums.reverse();
console.log("After reverse:", nums);

//  sort() - Sort in place (converts to strings by default)
const unsorted = [5, 2, 10, 1, 100];
unsorted.sort(); // [1, 10, 100, 2, 5] (lexicographic!)
console.log("Default sort:", unsorted);

unsorted.sort((a, b) => a - b); // [1, 2, 5, 10, 100] (numeric ascending)
console.log("Numeric sort:", unsorted);

unsorted.sort((a, b) => b - a); // [100, 10, 5, 2, 1] (numeric descending)
console.log("Reverse numeric sort:", unsorted);

//  fill() - Fill with static value
const filled = new Array(5).fill(0); // [0, 0, 0, 0, 0]
const partialFill = [1, 2, 3, 4, 5].fill(9, 1, 4); // [1, 9, 9, 9, 5]
console.log("Filled:", filled);
console.log("Partial fill:", partialFill);

//  copyWithin() - Copy sequence within array
// copyWithin(target, start, end)
const copyArr = [1, 2, 3, 4, 5];
copyArr.copyWithin(0, 3); // [4, 5, 3, 4, 5] (copy from index 3 to 0)
console.log("After copyWithin:", copyArr);

// 6. NON-MUTATING METHODS (Return New Array)

const original = [1, 2, 3, 4, 5];

//  concat() - Join arrays/values
const concatenated = original.concat([6, 7], 8, [9, 10]);
console.log("Concat:", concatenated);
console.log("Original unchanged:", original);

//  slice() - Extract section
const sliced = original.slice(1, 4); // [2, 3, 4] (end not inclusive)
const slicedFrom = original.slice(2); // [3, 4, 5] (from index 2 to end)
const slicedNeg = original.slice(-3); // [3, 4, 5] (last 3 elements)
console.log("Sliced:", sliced);

//  toReversed() - Modern non-mutating reverse
const reversed = original.toReversed();
console.log("toReversed:", reversed);

//  toSorted() - Modern non-mutating sort
const sorted = original.toSorted((a, b) => b - a);
console.log("toSorted:", sorted);

//  toSpliced() - Modern non-mutating splice
const spliced = original.toSpliced(1, 2, 99, 88);
console.log("toSpliced:", spliced);

//  with() - Modern non-mutating element replacement
const withReplaced = original.with(2, 100); // Replace index 2 with 100
console.log("with():", withReplaced);

//  flat() - Flatten nested arrays
const nested = [1, [2, 3], [4, [5, 6]]];
const flat1 = nested.flat(); // [1, 2, 3, 4, [5, 6]] (depth 1)
const flat2 = nested.flat(2); // [1, 2, 3, 4, 5, 6] (depth 2)
const flatInf = nested.flat(Infinity); // [1, 2, 3, 4, 5, 6] (any depth)
console.log("Flat:", flat1);

//  flatMap() - Map then flatten one level
const sentences = ["Hello world", "How are you", "Goodbye"];
const words = sentences.flatMap((s) => s.split(" "));
console.log("flatMap:", words); // ["Hello", "world", "How", "are", "you", "Goodbye"]

//  join() - Convert to string
const joined = original.join("-"); // "1-2-3-4-5"
const joinedComma = original.join(", "); // "1, 2, 3, 4, 5"
console.log("Joined:", joined);

//  toString() - String representation
console.log("toString:", original.toString()); // "1,2,3,4,5"

//  toLocaleString() - Localized string
const priceArr = [1000, 2000, 3000];
console.log("toLocaleString:", priceArr.toLocaleString("en-US"));

// 7. SEARCH & FIND METHODS

const searchArr = [10, 20, 30, 40, 50, 30, 60];

//  indexOf() - First occurrence
console.log("indexOf(30):", searchArr.indexOf(30)); // 2
console.log("indexOf(99):", searchArr.indexOf(99)); // -1 (not found)
console.log("indexOf from index 3:", searchArr.indexOf(30, 3)); // 5

//  lastIndexOf() - Last occurrence
console.log("lastIndexOf(30):", searchArr.lastIndexOf(30)); // 5

//  includes() - Check existence
console.log("includes(30):", searchArr.includes(30)); // true
console.log("includes(99):", searchArr.includes(99)); // false

//  find() - First element matching condition
const found = searchArr.find((x) => x > 35);
console.log("find(x > 35):", found); // 40

const objArr = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const person = objArr.find((p) => p.id === 2);
console.log("find object:", person); // { id: 2, name: "Bob" }

//  findIndex() - Index of first matching element
const foundIndex = searchArr.findIndex((x) => x > 35);
console.log("findIndex(x > 35):", foundIndex); // 3

//  findLast() - Last element matching condition
const lastFound = searchArr.findLast((x) => x > 30);
console.log("findLast(x > 30):", lastFound); // 60

//  findLastIndex() - Index of last matching element
const lastFoundIndex = searchArr.findLastIndex((x) => x === 30);
console.log("findLastIndex(30):", lastFoundIndex); // 5

// 8. ITERATION METHODS

const iterateArr = [10, 20, 30, 40, 50];

//  forEach() - Execute for each element, no return value, modifies the original array
console.log("forEach:");
iterateArr.forEach((value, index, array) => {
  console.log(`  [${index}]: ${value}`);
});

//  map() - Transform each element, returns a new array, does not modify the original array
const doubled = iterateArr.map((x) => x * 2);
const indexed = iterateArr.map((x, i) => `${i}:${x}`);
console.log("map (doubled):", doubled);
console.log("map (indexed):", indexed);

//  filter() - Keep elements matching condition, returns a new array, does not modify the original array
const evens = iterateArr.filter((x) => x % 2 === 0);
const above30 = iterateArr.filter((x) => x > 30);
console.log("filter (evens):", evens);
console.log("filter (above 30):", above30);

//  every() - Test if ALL elements pass
const allAbove5 = iterateArr.every((x) => x > 5); // true
const allAbove20 = iterateArr.every((x) => x > 20); // false
console.log("every(x > 5):", allAbove5);
console.log("every(x > 20):", allAbove20);

//  some() - Test if ANY element passes
const someAbove40 = iterateArr.some((x) => x > 40); // true
const someAbove100 = iterateArr.some((x) => x > 100); // false
console.log("some(x > 40):", someAbove40);
console.log("some(x > 100):", someAbove100);

//  keys() - Iterator of indices
console.log("keys():", [...iterateArr.keys()]); // [0, 1, 2, 3, 4]

//  values() - Iterator of values
console.log("values():", [...iterateArr.values()]); // [10, 20, 30, 40, 50]

//  entries() - Iterator of [index, value] pairs
console.log("entries():", [...iterateArr.entries()]);
// [[0, 10], [1, 20], [2, 30], [3, 40], [4, 50]]

//  [Symbol.iterator]() - Default iterator (same as values)
console.log("Symbol.iterator:", [...iterateArr[Symbol.iterator]()]);

// 9. REDUCTION METHODS

const reduceArr = [1, 2, 3, 4, 5];

//  reduce() - Reduce to single value (left to right), does not modify the original array
const sum = reduceArr.reduce((acc, curr, index, array) => {
  return acc + curr;
}, 0); // 15
console.log("reduce (sum):", sum);

const product = reduceArr.reduce((acc, curr) => acc * curr, 1); // 120
console.log("reduce (product):", product);

// Without initial value (uses first element as initial)
const sumNoInit = reduceArr.reduce((acc, curr) => acc + curr); // 15
console.log("reduce (no init):", sumNoInit);

//  reduceRight() - Reduce from right to left
const rightReduce = reduceArr.reduceRight((acc, curr) => acc - curr, 0);
console.log("reduceRight:", rightReduce); // 0 - 5 - 4 - 3 - 2 - 1 = -15

// Practical reduce examples:
const words1 = ["Hello", "world", "from", "JavaScript"];
const longest = words1.reduce(
  (acc, word) => (word.length > acc.length ? word : acc),
  "",
);
console.log("Longest word:", longest); // "JavaScript"

const grouped = [1, 2, 3, 4, 5, 6].reduce((acc, num) => {
  const key = num % 2 === 0 ? "even" : "odd";
  acc[key] = acc[key] || [];
  acc[key].push(num);
  return acc;
}, {});
console.log("Grouped:", grouped); // { odd: [1, 3, 5], even: [2, 4, 6] }

// 10. STATIC METHODS

//  Array.isArray() - Check if value is array
console.log("Array.isArray([]):", Array.isArray([])); // true
console.log("Array.isArray({}):", Array.isArray({})); // false
console.log("Array.isArray(''):", Array.isArray("")); // false

//  Array.from() - Create from iterable
const fromIterable = Array.from([1, 2, 3]);
const fromMap = Array.from(
  new Map([
    [1, 2],
    [3, 4],
  ]),
);
console.log("Array.from:", fromIterable);

//  Array.of() - Create from arguments
const ofArr = Array.of(1, 2, 3);
console.log("Array.of:", ofArr);

//  Array.fromAsync() - Create from async iterable
(async () => {
  const asyncGen = async function* () {
    yield 1;
    yield 2;
    yield 3;
  };
  const fromAsync = await Array.fromAsync(asyncGen());
  console.log("Array.fromAsync:", fromAsync); // [1, 2, 3]
})();

// 11. IMPORTANT CONCEPTS & BEST PRACTICES

//  Shallow Copy vs Deep Copy
const originalNested = [1, [2, 3], { a: 4 }];

// Shallow copies (nested objects still reference same memory)
const shallow1 = [...originalNested];
const shallow2 = originalNested.slice();
const shallow3 = Array.from(originalNested);

shallow1[1][0] = 999; // Affects originalNested too!
console.log("Shallow copy affects original:", originalNested);

// Deep copy (creates independent copies)
const deep1 = JSON.parse(JSON.stringify(originalNested));
const deep2 = structuredClone(originalNested); // Modern API

//  Sparse Arrays (Empty Slots)
const sparse = [1, , , 4]; // [1, <2 empty slots>, 4]
console.log("Sparse array:", sparse);
console.log("Sparse length:", sparse.length); // 4

// Note: Some methods skip empty slots
sparse.forEach((x) => console.log("forEach skips empty:", x)); // Only logs 1 and 4

//  Array-Like Objects
const arrayLike = { 0: "a", 1: "b", length: 2 };
const fromLike = Array.from(arrayLike); // ["a", "b"]
console.log("From array-like:", fromLike);

//  Chaining Methods
const result = [1, 2, 3, 4, 5]
  .filter((x) => x % 2 === 0) // [2, 4]
  .map((x) => x * 10) // [20, 40]
  .reduce((acc, x) => acc + x, 0); // 60
console.log("Chained result:", result);

//  Performance Tip: Use for...of for simple iteration
for (const value of iterateArr) {
  // More efficient than forEach for simple loops
  // Can use break/continue
  if (value > 30) break;
}

//  Destructuring Arrays
const [first1, second, ...rest] = [1, 2, 3, 4, 5];
console.log("Destructured:", first1, second, rest); // 1, 2, [3, 4, 5]

//  Swapping Elements
let a = 1,
  b = 2;
[a, b] = [b, a]; // a = 2, b = 1
console.log("Swapped:", a, b);

/*
 * 12. SUMMARY OF METHODS
 * - push(value...): Add elements to end. Important: mutates the array.
 * - pop(): Remove last element and return it. Important: mutates the array.
 * - unshift(value...): Add elements to start. Important: mutates and can be O(n).
 * - shift(): Remove first element and return it. Important: mutates and can be O(n).
 * - splice(start, deleteCount, ...items): Insert/remove/replace at index. Important: mutating and flexible.
 * - slice(start, end): Return shallow copy of a portion. Important: non-mutating.
 * - reverse(): Reverse elements in place. Important: mutates original.
 * - sort([compareFn]): Sort in place; default is lexicographic. Important: provide numeric compare for numbers.
 * - fill(value, start?, end?): Fill range with value. Important: mutates and writes same reference for objects.
 * - copyWithin(target, start, end?): Copy a sequence within array. Important: mutating and does not change length.
 * - concat(...values): Join arrays/values into new array. Important: non-mutating and shallow copies.
 * - toReversed(): Return a reversed copy (non-mutating). Important: modern, preferred when immutability matters.
 * - toSorted(compareFn): Return a sorted copy (non-mutating).
 * - toSpliced(start, deleteCount, ...items): Return array with splice performed (non-mutating).
 * - with(index, value): Return shallow copy with element at `index` replaced. Important: non-mutating.
 * - flat(depth): Flatten nested arrays up to `depth`. Important: use Infinity to fully flatten.
 * - flatMap(fn): Map then flatten one level. Important: combine map+flat in one pass.
 * - join(separator): Convert to string using separator. Important: skips empty slots as empty strings.
 * - toString()/toLocaleString(): String representations; `toLocaleString` respects locale.
 * - indexOf(value, from?): First index of value or -1. Important: uses strict equality (===).
 * - lastIndexOf(value, from?): Last index of value or -1.
 * - includes(value, from?): Check existence; returns boolean.
 * - find(predicate)/findIndex(predicate): Return first matching element or its index. Important: stops at first match.
 * - findLast()/findLastIndex(): Like find/findIndex but from the end (where supported).
 * - forEach(fn): Execute `fn` for each present element; does not return a new array.
 * - map(fn): Transform elements and return new array. Important: non-mutating and same length.
 * - filter(fn): Return new array of elements that pass predicate. Important: can change length.
 * - every(fn)/some(fn): Test whether all/any elements satisfy predicate; short-circuits.
 * - keys()/values()/entries(): Iterators for indices, values, and [index,value] pairs.
 * - reduce(fn, init?)/reduceRight(fn, init?): Accumulate array to single value. Important: provide initial value to avoid surprises on empty arrays.
 * - Array.isArray(value): Test if value is an array.
 * - Array.from(iterable|arrayLike, mapFn?): Build array from iterable or array-like. Important: accepts mapping function.
 * - Array.of(...items): Create array from arguments (avoids `new Array(n)` ambiguity).
 * - Array.fromAsync(asyncIterable): Build array from async iterable (returns Promise).
 * - JSON.parse(JSON.stringify(obj)) / structuredClone(obj): Ways to deep-clone (structuredClone is preferred when available).
 *
 * Important concepts:
 * - Mutating vs Non-mutating: prefer non-mutating (`toReversed`, `toSorted`, `toSpliced`, `with`) when immutability helps clarity.
 * - Shallow vs Deep copy: most array methods make shallow copies; nested objects still reference same memory.
 * - Sparse arrays: empty slots behave differently (many methods skip them).
 * - Performance: use `for...of` for simple loops, avoid frequent `unshift`/`shift` on large arrays, and prefer `map/filter` chaining when it improves readability.
 */
