// FUNCTION DECLARATION - the classic way
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Alex")); // "Hello, Alex"

// Functions can take multiple parameters
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8

// Default parameters - used if no argument is passed
function greetWithDefault(name = "Guest") {
  return "Hello, " + name;
}
console.log(greetWithDefault());        // "Hello, Guest"
console.log(greetWithDefault("Sara"));   // "Hello, Sara"

// FUNCTION EXPRESSION - storing a function in a variable
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(4, 5)); // 20

// ARROW FUNCTIONS - shorter syntax, very common in modern JS
const subtract = (a, b) => {
  return a - b;
};
console.log(subtract(10, 4)); // 6

// Arrow function shorthand - if body is just one return statement, you can skip braces and "return"
const square = (n) => n * n;
console.log(square(5)); // 25

// Arrow function with one parameter - parentheses are optional
const double = n => n * 2;
console.log(double(7)); // 14

// Function with no return - returns undefined automatically
function logMessage(msg) {
  console.log(msg);
  // no return statement here
}
let result = logMessage("Hi");
console.log(result); // undefined

// FUNCTIONS CAN BE PASSED AS ARGUMENTS (called "callbacks") - important concept used everywhere
function processUser(name, callback) {
  console.log("Processing user: " + name);
  callback();
}
processUser("John", function () {
  console.log("Done processing!");
});