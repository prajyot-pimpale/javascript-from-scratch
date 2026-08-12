// IF / ELSE IF / ELSE

let age = 20;

if (age < 13) {
  console.log("Child");
} else if (age < 20) {
  console.log("Teenager");
} else {
  console.log("Adult");
}
// Output: Adult

// Conditions are evaluated top to bottom, first match wins, rest are skipped

// TRUTHY AND FALSY VALUES - important concept
// JS treats these as "falsy" (act like false in conditions):
// false, 0, "", null, undefined, NaN
// Everything else is "truthy" (acts like true)

if (0) {
  console.log("won't run");
}
if ("") {
  console.log("won't run either");
}
if ("hello") {
  console.log("this runs - non-empty string is truthy");
}

// TERNARY OPERATOR - shorthand for simple if/else
let num = 7;
let result = num % 2 === 0 ? "Even" : "Odd";
console.log(result); // "Odd"
// Syntax: condition ? valueIfTrue : valueIfFalse

// SWITCH STATEMENT - cleaner alternative when checking one variable against many values
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Some other day");
}
// Output: Wednesday
// "break" stops it from falling through to the next case - forgetting break is a common bug