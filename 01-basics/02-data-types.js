// PRIMITIVE DATA TYPES

let str = "Hello World";     // String - text, wrapped in quotes
let num = 42;                 // Number - integers AND decimals, no separate "float" type
let decimal = 3.14;
let isActive = true;           // Boolean - true or false only
let nothing = null;            // Null - "intentionally empty", you set this yourself
let notSet;                    // Undefined - declared but never given a value
let bigNumber = 9007199254740991n; // BigInt - for numbers too large for regular Number type

console.log(typeof str);        // "string"
console.log(typeof num);        // "number"
console.log(typeof isActive);   // "boolean"
console.log(typeof nothing);    // "object" <- this is a famous JS quirk/bug, null shows as object
console.log(typeof notSet);     // "undefined"
console.log(typeof bigNumber);  // "bigint"

// NULL vs UNDEFINED - important distinction
let a;            // undefined - JS hasn't been told what this is yet
let b = null;      // null - YOU explicitly said "this has no value"

// TYPE COERCION (JS auto-converts types sometimes, this causes bugs if you don't know it)
console.log("5" + 3);    // "53" -> string, because + with a string concatenates
console.log("5" - 3);    // 2    -> number, because - forces numeric conversion
console.log("5" * "2");  // 10   -> both converted to numbers
console.log(1 + true);   // 2    -> true becomes 1
console.log(1 + false);  // 1    -> false becomes 0

// Checking equality - VERY IMPORTANT DIFFERENCE
console.log(5 == "5");   // true  -> loose equality, converts types before comparing
console.log(5 === "5");  // false -> strict equality, checks type AND value
// ALWAYS prefer === and !== in real code. Avoid == and != almost entirely.