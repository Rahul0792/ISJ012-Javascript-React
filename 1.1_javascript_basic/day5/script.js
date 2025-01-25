"use strict"

//Labelled Loop                                //========================================================================
outerLoop:
for (let m = 1; m <= 100; m++) {
  innerLoop:
  for (let n = 1; n <= 50; n++) {
    break outerLoop;                           // Used for braking outer loop  
  }
}

let i = 1;

for (i; i <= 20; i++) {
  console.log("Learning for Loop");
}


i = 1;
while (i <= 20) {
  console.log("Learning while Loop");
  i++;
}


i = 21;
do {
  console.log("Learning do while loop");
  i++;
} while (i <= 20)


i = 1;
while (i <= 50) {
  console.log(i);
  i += 2;
}


i = 1;
do {
  console.log(i);
  i += 2;
} while (i <= 50)


// first method
i = 3;
while (i <= 50) {
  console.log(i);
  i += 3;
}

console.log("==========================");

// second method
i = 1;
while (i <= 50) {
  if (i % 3 == 0) {
    console.log(i);
  }
  i++;
}


for (i; i <= 20; i++) {
  console.log("Learning for Loop");
}


for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(i, "   ===>   fizzbuzz");
  }
  else if (i % 3 === 0) {
    console.log(i, "   ===>   fizz");
  }
  else if (i % 5 === 0) {
    console.log(i, "   ===>   buzz");
  }
  else {
    ;
  }
}


//Function

// alert("msg");                          //  For showing alert message on browser
// confirm("msg");                        //  It returns boolean value  true / false
// prompt("question");


// 1st method to convert string into number   //==================================================================
//    +"10"      string chya adhi + dyaycha

// 2nd method to convert string into number   //==================================================================
// parseInt("number");


// let num1 = prompt(" enter first number ");
// let num2 = prompt(" enter second number ");
// let addition = +num1 + +num2;
// alert(addition);


// const answer = prompt("What is your name ");
// alert(`${answer} you will be great front end developer `);

console.log("======================================================");

i = 2;
while (i <= 100) {
  console.log(i);
  i += 2;
}

console.log("======================================================");


//Function for printing maximum number : 
const max = Math.max(1, 2, 5, 7, 8, 96, 55, 989);                    //===============================================================
console.log(max);

//Function for printing minimum number : 
const min = Math.min(1, 2, 5, 7, 8, 96, 55, 989);                    //===============================================================
console.log(min);

//Generate random number between 0 -  1 
const randomNumber = Math.random();
console.log(randomNumber);

//Math floor 
const floorNumber = Math.floor(20.5);
console.log(floorNumber);

//Math ceil
const ceilNumber = Math.ceil(20.5);
console.log(ceilNumber);

// Math Round 
const mathRound = Math.round(3.5);
console.log(mathRound);

let num = 100;
let stringNum = num.toString();
console.log("num");




