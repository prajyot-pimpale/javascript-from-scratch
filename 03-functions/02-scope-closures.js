// SCOPE - where a variable is accessible from

let globalVar = "I'm global";

function showScope() {
  let localVar = "I'm local";
  console.log(globalVar); // works - global vars accessible everywhere
  console.log(localVar);  // works - inside its own function
}
showScope();
// console.log(localVar); // ERROR - localVar doesn't exist outside the function

// NESTED FUNCTIONS AND SCOPE CHAIN
function outer() {
  let outerVar = "outer value";
  function inner() {
    console.log(outerVar); // inner can access outer's variables
  }
  inner();
}
outer();

// CLOSURES - a function "remembers" the variables from where it was created,
// even after the outer function has finished running. This is one of the most
// important and most confusing concepts in JS, so read this example carefully.

function createCounter() {
  let count = 0; // this variable is "enclosed" inside the returned function
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter(); // createCounter() has already finished running
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
// count did NOT reset between calls - the inner function "closed over" count
// and kept its own private memory of it

// Practical use case: each counter created is independent
const counter2 = createCounter();
console.log(counter2()); // 1 - separate from "counter" above, has its own count