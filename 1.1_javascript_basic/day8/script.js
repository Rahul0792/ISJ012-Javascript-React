const person = {
  fName: "Raj",
  lName: "Kumar",
  age: 21,

  myFunction: function () {  // write function in object ===============================================
    console.log("Heyyy Good Morning ");
  },
  greed: function () {
    return this.lName + " in 10th standard "   // access key in object 
  }

};
console.log(person);
person.myFunction();  // call function which is present in object
console.log(person.greed());
