/*
Problem: Sort Array of Numbers in Descending Order
Write a JavaScript function that takes an array of numbers as input and sorts it in descending order using the Quick Sort algorithm.
Implement the function with the name quickSort.

*/

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const inputArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = quickSort(inputArray);
console.log(sortedArray.join(" ")); // Output: 90 64 34 25 22 12 11
