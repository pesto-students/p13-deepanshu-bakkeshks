/*
Problem: Check for Duplicates using Hashing
Implement a function that takes an array of integers as input and checks if there are any duplicate elements using hashing.
*/

function checkDuplicates(array) {
  let uniqueElements = new Set();

  for (let num of array) {
    if (uniqueElements.has(num)) {
      return true;
    } else {
      uniqueElements.add(num);
    }
  }

  return false;
}

let inputArray = [1, 2, 3, 4, 5, 1];

if (checkDuplicates(inputArray)) {
  console.log("There are duplicate elements in the array.");
} else {
  console.log("There are no duplicate elements in the array.");
}
