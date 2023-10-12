/*
Problem: Sort Array of Strings by Length in Descending Order
Write a JavaScript function that takes an array of strings as input and sorts it in descending order based on the 
length of the strings using the Heap Sort algorithm.
*/

function heapSort(arr) {
  for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
    heapify(arr, arr.length, i);
  }

  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[i] < arr[left]) {
    largest = left;
  }

  if (right < n && arr[largest] < arr[right]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}
const arr = ["apple", "banana", "pear", "orange", "kiwi"];

const sortedArray = heapSort(arr);

console.log(sortedArray); // ["banana", "orange", "apple", "pear", "kiwi"]
