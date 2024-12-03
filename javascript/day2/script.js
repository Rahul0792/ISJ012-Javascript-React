// data types in javascript
// there are 8 type of data in js



// 1. number
const age = 45;
const height = 5.5;
const weight = -60;

// type of is operator which gives data type of given data 
console.log("type of height ie.   5.5 is ", typeof height);



// 2. bigint
const num = 13345678945632145n; // last n is compulsory  ===============================================================
console.log("type of 13345678945632145n is ", typeof num);




// 3. Boolean 
const isValid = "true";
const Isvalid = false;
console.log("type of true is ", typeof isValid);
console.log("type of false is ", typeof Isvalid);


// 4 .  string

// double quotes
const userName = " Rahul Khilari";

// single quotes 
const city = "pune";

// backticks (ES6)

const sentence = ` my name is ${userName} and city is ${city}`;
console.log(typeof userName, typeof city, typeof sentence);
console.log(typeof sentence);
console.log(sentence);




// 5 . undefined 
let lastname;
console.log(typeof lastname);




// 6 . null 
//typeof null in js is object   //=========================================================================
let birthDate = null;
console.log(typeof birthDate); // Object



// 7. object
// in object we can store data in key value pair
const obj = {};
// Everything in javascript is object 
console.log(typeof obj);




//8 . symbol                 //===============================================================================
// unique value
const unique1 = Symbol(" Unique value");
const unique2 = Symbol(" Unique value");
//  here assigned value in both unique 1 and unique 2 are same  but because of symbol data type they are different




//  number                 =====================================================================================
console.log(5 / 0)
//  Infinity
console.log(-5 / 0)
//  - Infinity
console.log(0 / 0)
// NaN => ( not a number )
console.log(10 / 10)
//1
console.log(typeof Infinity); // number
console.log(typeof -Infinity);  // number
console.log(typeof NaN);  // number




// string
// "" ,  '' , ``

// string concatination 
const user = "rahul";

let sentencess = "Hello " + user + ",\n how are you";

let sentenceWithBackticks = `Hello ${user} ,
 How are you`;

console.log(sentenceWithBackticks);
// hello  rahul,
// how are you

console.log(sentencess);
// hello  rahul,
// how are you

const sentences = " hello " + "world";
console.log(sentences);//hello world





// object 
let person = {
  fName: "Deepak",
  lName: "Kalal"
}
console.log(person);
// op { fName: 'Deepak', lName: 'Kalal' }
console.log(person.fName); //access objects property and value 
//Deepak
console.log(person.lName);  //access object value
// kalal
console.log(person["fName"]); ////access object value  //=================================================================================================
//Deepak



// how to add new property in object
person.age = 21;         // added in object 
person.city = "Mumbai";  // added in object 
console.log(person);
// {fName: 'Deepak', lName: 'Kalal', age: 21, city: 'Mumbai'}



person.age = 21;            // update in object
person.fName = "Sainath";   //update in object
console.log(person);    
//{ fName: 'Sainath', lName: 'Kalal', age: 21, city: 'Mumbai' }
person["lName"] = " nanavare";     //update in object     ====================================================================================================
console.log(person);    
//{ fName: 'Sainath', lName: ' nanavare', age: 21, city: 'Mumbai' }




delete person.age;       // delete in object      ==================================================================================================
console.log(person);    
//{fName: 'Sainath', lName: ' nanavare', city: 'Mumbai'}




const pp = {
  firstName: "rahul" ,
  lastName : "Khilari" ,
};
pp.firstName = "rohit";  // var const ahe ithe reassign nahi tar change kel ahe const madhi reassign nahi karu shkat tevha error nahi yenar because  tari pan name chi value change hoil              //===================================================================================================================
console.log(pp); 
//{firstName: 'rohit', lastName: 'Khilari'}




const ppp = {
  1: "rahul",                  //================================================================
  "city name ": "pune",        //================================================================
  lastName: "Khilari",
};
console.log(ppp["1"]);
console.log(ppp["city name "]);
console.log(ppp["lastName"]);



















