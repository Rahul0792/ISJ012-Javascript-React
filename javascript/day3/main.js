// operators
//operatoe will perform some operations

// 1. =  assignment operator 

const userName = "deepak Kalal";

// 2. arithmetic operators  =>    + , - , * , / , %
const num1 = 10;
const num2 = 30;

const substraction = num1 - num2;
const division = num1 / num2;
const addition = num1 + num2;
const multiplication = num1 * num2;


console.log(substraction); // -20
console.log(division);  //  0.3333333333333333
console.log(addition);   // 40
console.log(multiplication);  //  300

console.log(10 / 3); //3.3333333       ===================================================================================

const sum = 10 + 20; //30
console.log(sum);  // 30
// exponential operator 
console.log(3 ** 3) // 27  means 3^3   ===================================================================================


// 3. comparison   operators   =>  > , < , <= , >=
//  return boolean value

// greater than (  >  )
console.log(10 > 20); // false
console.log(100 > 20); // true

// less than (  <  )
console.log(10 < 20); // true 
console.log(100 < 20); // false

// greater than or equal to (  >=  )
console.log(10 >= 10); // true
console.log(100 >= 20); // true

// less than or equal to (  <=  )
console.log(100 <= 100); // true
console.log(30 <= 20); // false


// 4  logical operator  =>    &&  ,   ||   ,  !

// &&  (  AND )
console.log(10 >= 10 && 100 <= 100);   // true
console.log(true && false);  // // false

// ||  (  OR )
console.log(true || false);  // true
console.log(false || false);  // false

// ! ( NOT )
console.log(!false);  // true
console.log(!true);  // false


// 5.  short circuit operator  =>   & , | , ~

console.log(2 & 3); // 2
console.log(1 & 3); // 1
console.log(~2);  // -3            =========================================================



// 6. equality operator      =>    ==   ,   !=

// ==  ( double eual to )
console.log(10 == 10); // true  
console.log(11 == 10); // false
console.log(10 == "10"); // true        =======================================================
console.log("10" == 10); // true        =======================================================

// !=  ( double eual to )
console.log(10 != 10); // false
console.log(11 != 10); // true
console.log(30 != 30); // false
console.log(30 != 20); // true
console.log("10" != 11); // true        =======================================================



// 7. triple equal to operator / strict equality / check data with data type  =====================================================================

console.log(10 === "10"); // false      check data with data type =======================================================  
console.log("10" === 10); // false       check data with data type =======================================================


// 8 . increment and decrement operator  (  ++  )  (  --  )

// pre increment  
let num = 10;
console.log(++num);

// post increment
console.log(num++);

// pre decrement
 num = 10;
console.log(--num);

// post decrement
console.log(num--);


// 9. Ternary Operator

10 > 10 ? console.log("yes ") : console.log("No"); // No  //========================================================


//  10 . Compound assignment openator
let number = 20;

number = number + 10;   
number += 10;           

console.log(number);

//  bitwise  operator   <<  >>


// decision making statements

if (10 > 5) {
  console.log("yes");
} else {
  console.log("No");
}


let age = 23;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can not vote");
}

age = 21;
let gen = 'M';
if(( age >= 21 && gen === 'M') || ( age >= 18  &&  gen === 'F' ) ){
  console.log("You can marry");
} else {
  console.log("You cannt' marry");
}




























