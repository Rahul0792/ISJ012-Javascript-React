// const randomNumber = Math.round(-20);

// Gererate random Number from 1 to 20  
const randomNumber1 = Math.random() * 20;
const num = Math.floor(randomNumber1);
console.log(num);


// Gererate random Number from 1 to 20  
const randomNumber = Math.floor(Math.random() * 20);
console.log(randomNumber);


// Gererate random Number from 10 to 20  
let randomNumber2 = Math.floor(Math.random() * 10);
console.log(randomNumber2 + 10);

// Gererate 4 digit random number 
let randomNumber3 = Math.floor(Math.random() * 5000);
console.log(randomNumber3 + 5000);

// Largest Number 
const num1 = 20;
const num2 = 300;
console.log(Math.max(num1, num2))

// Largest Number  whithout using math.max
const num3 = 2000;
const num4 = 300;
if (num3 > num4)
  console.log(num3)
else
  console.log(num4);


// Largest Number 
const num5 = 20000;
const num6 = 300;
const num7 = 30000;
console.log(Math.max(num5, num6, num7));

console.log("=======================================")
// Largest Number  whithout using math.max
const num9 = 2000;
const num10 = 300;
const num11 = 40;
if (num9 > num10 > num11)
  console.log(num9)
else if (num10 > num11) {
  console.log(num10)
}
else {
  console.log(num11)
}


// Convert Number to string =====================================================================
let num55 = 100;
let stringNum = num55.toString();   //========================================
console.log(typeof stringNum);


let num90 = 121;
let rev = 0;
let temp = num90;
while (num90 > 0) {
  let r = num90 % 10;
  rev = rev * 10 + r;
  num90 = Math.floor(num90 / 10); //==================================================================================================================
}
console.log(rev);
if (temp == rev) {
  console.log("Number is pallindrome");
}
else {
  console.log("Number is not pallindrome");
}


//  Pattern      ======================================================================================================
let pattern = "";
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= i; j++) {
    pattern = pattern + "* ";
  }
  pattern = pattern + "\n";
}
console.log(pattern);






