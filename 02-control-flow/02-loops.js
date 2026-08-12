// FOR LOOP - use when you know how many times to repeat
for (let i = 0; i < 5; i++) {
  console.log("for loop:", i);
}
// Output: 0,1,2,3,4
// Structure: (start; condition to keep going; what happens each round)

// WHILE LOOP - use when you don't know how many times in advance, just a condition
let count = 0;
while (count < 3) {
  console.log("while loop:", count);
  count++;
}
// Output: 0,1,2
// WARNING: if you forget count++, this loops forever (infinite loop) and crashes/freezes

// DO...WHILE LOOP - runs the body at least once, THEN checks condition
let num = 10;
do {
  console.log("do while:", num);
  num++;
} while (num < 5);
// Output: "do while: 10" -> runs once even though condition (10 < 5) is false from the start

// FOR...OF LOOP - loops through values in an array (covered properly later)
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log("fruit:", fruit);
}
// Output: apple, banana, mango

// BREAK and CONTINUE
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // stops the loop entirely
  }
  console.log("break demo:", i);
}
// Output: 0,1,2,3,4 then stops

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // skips just this round, loop keeps going
  }
  console.log("continue demo:", i);
}
// Output: 0,1,3,4 (2 is skipped)