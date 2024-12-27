export const person = {
  firstName: "Deepak",
  lastName: "Kalal",
  city: " Mumbai",
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const city = person.city;

//Object Destructuring 
const { firstName, lastName, city } = person;
console.log(person);

//Array Destructuring 
const arr = ["Rohan", "kumar", "pandit"];

// Order Important
const [fName, lName, work] = arr;

console.log(arr);

