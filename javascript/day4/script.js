if (22 > 12) {
  console.log("Given condition is true");
} else {
  console.log("Given condition is false");
}


let age = 22;
let gen = 'M';
if ((age >= 21 && gen === 'M') || (age >= 18 && gen === 'F')) {
  console.log(" Congratulations ,You can marry");
} else {
  console.log(" sorry , You cannt' marry");
}


const day = 2;

if (day == 1) {
  console.log("Monday");
} else if (day == 2) {
  console.log("Tuesday");
} else if (day == 3) {
  console.log("Wednesday");
} else if (day == 4) {
  console.log("Thursday");
} else if (day == 5) {
  console.log("Friday");
} else if (day == 6) {
  console.log("saturday");
} else if (day == 7) {
  console.log("Sunday");
} else {
  console.log("Invalid input");
}


// Switch case

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
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid input");
}


let role = "admin";
if (role === "admin") console.log("You can upload cource");
else if (role === "studet") console.log("You can access the cource");
else console.log("Access blocked");



if (0) {
  console.log("true");
} else {
  console.log("false"); // false
}

if ("") {  // empty string always considered as false ==========================================================
  console.log("true");
} else {
  console.log("false");  // false
}


if (" ") { //======================================================
  console.log("true");// true
} else {
  console.log("false");
}

if (undefined) {   //======================================================
  console.log("true");
} else {
  console.log("false");  // false
}

if (null) {  //======================================================
  console.log("true");
} else {
  console.log("false");  // false
}

if (NaN) {  //======================================================
  console.log("true");
} else {
  console.log("false");  // false
}

if (false) {
  console.log("true");
} else {
  console.log("false");   // false
}

if ({}) {   //======================================================
  console.log("true");   //true
} else {
  console.log("false");
}


for (let i = 1; i <= 10; i++) {
  console.log("Good Morning");
}


for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}


for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0)
    console.log(i);
  else
    console.log();
}


for (let i = 1; i <= 10; i++) {
  if (i == 5)
    continue;
  else
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i == 5)
    continue;
  else
    console.log(i);
}


for (let i = 1; i <= 100; i++) {
  if (i % 19 == 0)
    break;
  else
    console.log(i);
}


for (let i = 1; i <= 100; i++) {
  if (i % 11 == 0)
    continue;
  else
    console.log(i);
}

for (; ; ) {     // =====================================================

    console.log("hello"); // Infinite loop
}
