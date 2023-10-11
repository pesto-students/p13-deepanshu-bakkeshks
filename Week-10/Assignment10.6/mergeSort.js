/*
Problem: Implement Merge Sort
Implement the Merge Sort algorithm to sort an array of numbers in ascending order.
*/
function mergeSort(arr) {
  // Base case.
  if (arr.length <= 1) {
    return arr;
  }

  // Recursive calls.
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  // Merge the two sorted subarrays.
  return merge(left, right);
}

function merge(left, right) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  // Add any remaining elements from the left subarray.
  while (i < left.length) {
    merged.push(left[i]);
    i++;
  }

  // Add any remaining elements from the right subarray.
  while (j < right.length) {
    merged.push(right[j]);
    j++;
  }

  return merged;
}

const arr = [8, 3, 1, 7, 5];

const sortedArr = mergeSort(arr);

console.log(sortedArr); // [1, 3, 5, 7, 8]
