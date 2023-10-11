/*
Problem: Sort Array of Numbers in Ascending Order
Write a JavaScript function that takes an array of numbers as input and sorts it in ascending order using the Bubble Sort algorithm.
Implement the function with the name bubbleSort.
*/

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements arr[j] and arr[j + 1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let inputArray = [64, 34, 25, 12, 22, 11, 90];
let sortedArray = bubbleSort(inputArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]
