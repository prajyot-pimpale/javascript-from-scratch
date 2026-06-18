// ARITHMETIC OPERATORS
console.log(10 + 5);  // 15 addition
console.log(10 - 5);  // 5  subtraction
console.log(10 * 5);  // 50 multiplication
console.log(10 / 5);  // 2  division
console.log(10 % 3);  // 1  modulus (remainder after division)
console.log(2 ** 3);  // 8  exponent (2 to the power 3)

// INCREMENT / DECREMENT
let x = 5;
x++;  // same as x = x + 1
console.log(x); // 6
x--;  // same as x = x - 1
console.log(x); // 5

// ASSIGNMENT OPERATORS (shorthand)
let y = 10;
y += 5;  // y = y + 5 -> 15
y -= 3;  // y = y - 3 -> 12
y *= 2;  // y = y * 2 -> 24
y /= 4;  // y = y / 4 -> 6
console.log(y); // 6

// COMPARISON OPERATORS
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 >= 5);  // true
console.log(5 <= 4);  // false
console.log(5 === 5); // true
console.log(5 !== 4); // true

// LOGICAL OPERATORS
console.log(true && false); // false - AND: both must be true
console.log(true || false); // true  - OR: at least one must be true
console.log(!true);          // false - NOT: flips the boolean

// Practical example combining logical operators
let isLoggedIn = true;
let isAdmin = false;
console.log(isLoggedIn && isAdmin); // false - not an admin
console.log(isLoggedIn || isAdmin); // true  - at least logged in