/**
 * String - It is a primitive data type, used to store text, and is immutable.
 */

let name = "Dracarys";
console.log(name);
console.log(typeof name);

console.log("Dracarys".length);
console.log(name[0]);
console.log(name[8]);

let name1 = "Jon Snow";
let name2 = "Aerys Targaryen";

// String Interpolation - Template Literal
console.log(`The name is ${name1} and brother name is ${name2}`);

// Escape Sequence
console.log("Dracarys\nSnow"); // New Line
console.log("Dracarys\tSnow"); // Tab
console.log("Dracarys\rSnow"); // Carriage Return - it will overwrite the previous character
console.log("Dracarys\bSnow"); // Backspace - it will remove the previous character
console.log("Dracarys\fSnow"); // Form Feed - it will move the cursor to the next line

/**
 * String methods
 * toUpperCase() - Converts the string to uppercase.
 * toLowerCase() - Converts the string to lowercase.
 * charAt() - Returns the character at the specified index.
 * charCodeAt() - Returns the Unicode of the character at the specified index.
 * concat() - Joins two or more strings.
 * indexOf() - Returns the index of the specified value.
 * lastIndexOf() - Returns the index of the specified value (from the end).
 * match() - Searches a string for a specified value, or regular expression, and returns the matches.
 * replace() - Replaces specified values with other values.
 * search() - Searches a string for a specified value, or regular expression, and returns the position of the match.
 * slice() - Extracts parts of a string and returns the extracted parts in a new string.
 * split() - Splits a string into an array of substrings.
 * substr() - Extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
 * substring() - Extracts parts of a string and returns the extracted parts in a new string.
 * toLocaleLowerCase() - Converts a string to lowercase letters, according to the host's locale.
 * toLocaleUpperCase() - Converts a string to uppercase letters, according to the host's locale.
 * toLowerCase() - Converts a string to lowercase letters.
 * toUpperCase() - Converts a string to uppercase letters.
 * trim() - Removes whitespace from both ends of a string.
 * trimEnd() - Removes whitespace from the end of a string.
 * trimStart() - Removes whitespace from the start of a string.
 * valueOf() - Returns the primitive value of a string.
 */

console.log(
  "-------------------------------String Methods-------------------------------"
);
let series = "Game of Thrones";
let webSeries = "Stranger Things";
console.log("Character at index 0 is: " + series.charAt(0));
console.log("Character at index 0 is: " + webSeries.charAt(0));
console.log("Character code at index 0 is: " + series.charCodeAt(0));
console.log("Character code at index 0 is: " + webSeries.charCodeAt(0));

console.log("Concatenated string is: " + series.concat(webSeries));
console.log("Concatenated string is: " + series.concat(" ", webSeries));

console.log("Index of Thrones is: " + series.indexOf(" Thrones"));
console.log("Last index of Thrones is: " + series.lastIndexOf(" Thrones"));
console.log("Matched value is: " + series.match(" Thrones"));
console.log("Replaced value is: " + series.replace(" Thrones", " Wars"));
console.log("Searched value is: " + series.search(" Thrones"));
console.log("Sliced value is: " + series.slice(0, 5));
console.log("Sliced value is(only 1 value): " + series.slice(3));
console.log("Split value is: " + series.split(" "));
console.log("Substr value is: " + series.substr(0, 5));
console.log("Substring value is: " + series.substring(0, 5));
console.log("To locale lowercase value is: " + series.toLocaleLowerCase());
console.log("To locale uppercase value is: " + series.toLocaleUpperCase());
console.log("To lowercase value is: " + series.toLowerCase());
console.log("To uppercase value is: " + series.toUpperCase());
console.log("Trim value is: " + series.trim());
console.log("Trim end value is: " + series.trimEnd());
console.log("Trim start value is: " + series.trimStart());
console.log("Value of is: " + series.valueOf());

// String declaration methods
let str1 = "Hello"; // It is a string
let str2 = String("Hello"); // It is a string
let str3 = new String("Hello"); // It is an object
console.log(str1);
console.log(str2);
console.log(str3);
console.log(typeof str1);
console.log(typeof str2);
console.log(typeof str3);

console.log(str1.__proto__);
console.log(str2.__proto__);
console.log(str3.__proto__);
