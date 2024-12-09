
// question 8

console.log("Addition of 50 and 7 is", add7(50));

function add7(num) {
  return +num + 7;
}

// question 9

convertIntoMinutes(10);

function convertIntoMinutes(minutes) {
  let totalSeconds = +minutes * 60;
  console.log("Total seconds = ", totalSeconds);
  console.log("Total seconds = ", +minutes * 60);

}

// question 10

areaOfTriangle(10, 20);

function areaOfTriangle(height, base) {
  let area = 1 / 2 * (+base * +height);
  console.log("Area of atriangle is ", area);

}

// question 11
perimeterOfRectangle(10, 20);

function perimeterOfRectangle(length, width) {
  let perimeter = [+width + +length] * 2;
  console.log("perimeter of rectangle  is ", perimeter);
}

// question 12
console.log(isLessThan100(50, 70));

function isLessThan100(num1, num2) {
  return num1 + num2 <= 100;
}


//question 12

num=5;
sum = 0;
sumOf(num);
function sumOf(num) {
  for (let i = 0; i <= num; i++) {
    sum = sum + i;
  }
}
console.log(sum)


// question 13

let marks = [10, 20, 30, 40, 50, 60];
let sum = 0;
addOfArray();
function addOfArray() {
  for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
  }
  console.log(sum);
}



let fact = 1;

findFact(6);

function findFact(num) {
  for (let i = 1; i <= num; i++){
    fact = fact * i;
  }
  console.log(fact);
}




// num = 121;
// sum = 0;
// let rev = 0 ;
// let r;
// let temp = num;

// // while ( temp >0  ) {
  
//   r = temp  % 10;   //  r    
//   rev = rev * 10 + r;
//   temp = temp / 10 ;

// }
// console.log(rev);
