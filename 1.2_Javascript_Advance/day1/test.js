// Question 1

function isPrimeOrNo(num) {
  if (num <= 1) {
    return 0; // Numbers less than or equal to 1 are not prime
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return 0; // Not a prime number
    }
  }
  return 1; // Prime number
}

let num = 17; // Change this to test different numbers
let k = isPrimeOrNo(num);

if (k) {
  console.log(num + " is a prime number");
} else {
  console.log(num + " is not a prime number");
}




 // Question 2
function filterArray(arr1) {
  let arr2 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 0) {
      arr2.push(arr1[i]);
    }
  }

  return arr2;
}
console.log(filterArray([1, 2, 3, 4, 5, 6, 0, -1]));


 // Question 3

function filterArrayEven(arr1) {
  let arr2 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
      arr2.push(arr1[i]);
    }
  }
  return arr2;
}
console.log(filterArrayEven([1, 2, 3, 4, 5, 6, 0, -1]));



function filterArrayEvenusingFilter(arr1) {
  return arr1.filter((num) => num % 2 === 0);
}
console.log(filterArrayEvenusingFilter([1, 2, 3, 4, 5, 6, 0, -1]));

