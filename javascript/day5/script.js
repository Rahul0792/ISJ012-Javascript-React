"use strict"

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

// alert("msg");     //  For showing alert message on browser
// confirm("msg");   //  It returns boolean value  true / false
// prompt("question");


// 1st method to convert string into number   //==================================================================
//    +"10"      sttring chya adhi no dyaycha

// 2nd method to convert string into number   //==================================================================
// parseInt("number");


// let num1 = prompt(" enter first number ");
// let num2 = prompt(" enter second number ");
// let addition = +num1 + +num2;
// alert(addition);


// const answer = prompt("What is your name ");
// alert(`${answer} you will be great front end developer `);