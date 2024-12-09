"use strict";
let num;  // Declared here for all question
//  question 1st
function showreasult() {
  let num1 = prompt("Enter First Number ");
  let num2 = prompt(" Enter Second Number ");
  let addition = +num1 + +num2;
  console.log(addition);
  alert(`addition is ${addition}`);
}


//  question 2nd
let fName = prompt("Enter First name ");
let lName = prompt("Enter Last name ");
alert(`My name is ${fName} ${lName}`)


//  question 3rd
num = prompt("Enter Number ");
if (+num % 2 === 0) {
  alert("Even Number");
}
else {
  alert("Odd Number");
}



// question 4th
stringName("Rahul Khilari");

function stringName(name) {
  console.log(" length of string is ", name.length);
}



// question 5th
num = prompt("Enter Number ");
for (let i = 1; i <= 10; i++) {
  console.log(+num * i);
}


// question 5th
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log("sum is ", sum);


// question 6
let eNum1 = prompt("Enter First Number");
let eNum2 = prompt("Enter second Number");
let eNum3 = prompt("Enter Third Number");

if (+eNum1 > +eNum2 && +eNum1 > +eNum3) {
  console.log(eNum1, "is greater")
}
else if (+eNum2 > +eNum3) {
  console.log(eNum2, "is greater")
} else {
  console.log(+eNum3, "is greater")
}

// question 7


