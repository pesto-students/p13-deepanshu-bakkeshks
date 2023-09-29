/*
Problem: Find non duplicate element in an array
Write a function that takes an array of integers as input and returns the non-duplicate element in the array. 
It is guaranteed that there is exactly one element that does not have a duplicate in the array

Time & Space Complexity : O(N) & O(1)
*/

function findNonDuplicateElement(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result ^= arr[i];
  }

  return result;
}
console.log(findNonDuplicateElement([5, 2, 3, 2, 5]));
