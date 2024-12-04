// Operators in JavaScript
// Operators perform operations on variables and values

// 1. Assignment Operator (=)
const userName = "Deepak Kalal";

// 2. Arithmetic Operators: +, -, *, /, %
const num1 = 10;
const num2 = 30;

const subtraction = num1 - num2;
const division = num1 / num2;
const addition = num1 + num2;
const multiplication = num1 * num2;

console.log(subtraction);      // Output: -20
console.log(division);         // Output: 0.3333333333333333
console.log(addition);         // Output: 40
console.log(multiplication);   // Output: 300

console.log(10 / 3);           // Output: 3.3333333333333335

const sum = 10 + 20;
console.log(sum);              // Output: 30

// Exponential Operator (**)
console.log(3 ** 3);           // Output: 27 (3 raised to the power of 3)

// 3. Comparison Operators: >, <, <=, >=
// These return a boolean value

// Greater than (>)
console.log(10 > 20);          // Output: false
console.log(100 > 20);         // Output: true

// Less than (<)
console.log(10 < 20);          // Output: true
console.log(100 < 20);         // Output: false

// Greater than or equal to (>=)
console.log(10 >= 10);         // Output: true
console.log(100 >= 20);        // Output: true

// Less than or equal to (<=)
console.log(100 <= 100);       // Output: true
console.log(30 <= 20);         // Output: false

// 4. Logical Operators: &&, ||, !
// AND (&&)
console.log(10 >= 10 && 100 <= 100); // Output: true
console.log(true && false);          // Output: false

// OR (||)
console.log(true || false);          // Output: true
console.log(false || false);         // Output: false

// NOT (!)
console.log(!false);                 // Output: true
console.log(!true);                  // Output: false

// 5. Bitwise Operators: &, |, ~
// AND (&)
console.log(2 & 3);                  // Output: 2
console.log(1 & 3);                  // Output: 1

// Bitwise NOT (~)
console.log(~2);                     // Output: -3

// 6. Equality Operators: ==, !=
// Double Equals (==): Compares values, allows type conversion
console.log(10 == 10);               // Output: true
console.log(10 == "10");             // Output: true

// Not Equal (!=)
console.log(10 != 11);               // Output: true
console.log(30 != "30");             // Output: false

// 7. Strict Equality (===) and Inequality (!==)
// Strict Equals (===): Compares values and types
console.log(10 === "10");            // Output: false
console.log(10 === 10);              // Output: true

// Strict Not Equals (!==)
console.log(10 !== "10");            // Output: true
console.log(10 !== 10);              // Output: false

// 8. Increment and Decrement Operators (++ / --)
// Pre-increment (++num)
let num = 10;
console.log(++num);                  // Output: 11

// Post-increment (num++)
console.log(num++);                  // Output: 11
console.log(num);                    // Output: 12

// Pre-decrement (--num)
num = 10;
console.log(--num);                  // Output: 9

// Post-decrement (num--)
console.log(num--);                  // Output: 9
console.log(num);                    // Output: 8

// 9. Ternary Operator
console.log(10 > 10 ? "Yes" : "No"); // Output: No

// 10. Compound Assignment Operators
let number = 20;
number = number + 10;               // Equivalent to: number += 10
number += 10;                       // Adds 10 to `number`
console.log(number);                // Output: 40

// 11. Bitwise Shift Operators: <<, >>
console.log(5 << 1);                // Output: 10 (Shift bits left)
console.log(5 >> 1);                // Output: 2  (Shift bits right)

// Decision-Making Statements
if (10 > 5) {
  console.log("Yes");              // Output: Yes
} else {
  console.log("No");
}

let age = 23;
if (age >= 18) {
  console.log("You can vote");     // Output: You can vote
} else {
  console.log("You cannot vote");
}

age = 21;
let gender = "M";                  // Changed variable name for clarity
if ((age >= 21 && gender === "M") || (age >= 18 && gender === "F")) {
  console.log("You can marry");    // Output: You can marry
} else {
  console.log("You cannot marry");
}
