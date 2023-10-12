/*
Problem: Sort Array of Strings by Number of Vowels
Write a JavaScript function that takes an array of strings as input and sorts 
it based on the number of vowels in each string using the Cocktail Shaker Sort algorithm.
*/

function cocktailShakerSort(arr) {
  let left = 0;
  let right = arr.length - 1;
  let swapped = true;

  while (swapped) {
    // Reset the swapped flag on entering the loop,
    // because it might be true from a previous
    // iteration.
    swapped = false;

    // Perform a bubble sort from left to right
    for (let i = left; i < right; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap if the element found is greater than the next element
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }

    // If no two elements were swapped in the inner loop,
    // then the array is already sorted, and we can break
    if (!swapped) {
      break;
    }

    // Move the right pointer one step left,
    // indicating that the largest element is in its sorted spot
    right--;

    // Perform a bubble sort from right to left
    for (let i = right; i >= left; i--) {
      if (arr[i] > arr[i + 1]) {
        // Swap if the element found is greater than the next element
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }

    // Move the left pointer one step right,
    // indicating that the smallest element is in its sorted spot
    left++;
  }

  return arr;
}

let fruits = ["apple", "banana", "pear", "orange", "kiwi"];
let sortedFruits = cocktailShakerSort(fruits);
console.log("Sorted Fruits:", sortedFruits);
