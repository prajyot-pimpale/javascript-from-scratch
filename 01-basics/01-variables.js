// VARIABLES

// var - old way, function-scoped, avoid using
var oldStyle = "I'm old school";

// let - block-scoped, can be reassigned
let age = 25;
age = 26; // this works

// const - block-scoped, CANNOT be reassigned
const country = "India";
// country = "USA"; // this would throw an error

console.log(oldStyle);
console.log(age);
console.log(country);

// Block scope demo
{
  let insideBlock = "only exists here";
  console.log(insideBlock); // works
}
// console.log(insideBlock); // ERROR: insideBlock is not defined outside the block