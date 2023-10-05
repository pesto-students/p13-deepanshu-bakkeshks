/*
Problem: First Index of Occurrence using Recursion
Input: arr=[1,2,3,4,5] target=5, Output: 2
Steps:
    1] Base Case: If the current index reaches the end of the array, return -1, indicating that the target value is not found.
    2] Recursive Case: If the element at the current index matches the target value, return the current index. If not, recursively 
    search for the target value in the rest of the array.
Time & Space complexity: O(N) & O(N)
*/

function firstIndexOfOccurrenceRecursive(arr, target, index) {
  if (index === arr.length) {
    return -1;
  }

  if (arr[index] === target) {
    return index;
  } else {
    return firstIndexOfOccurrenceRecursive(arr, target, index + 1);
  }
}

function firstIndexOfOccurrenceMain(arr, target) {
  return firstIndexOfOccurrenceRecursive(arr, target, 0);
}

const arr = [1, 2, 3, 4, 5];
const target = 5;
const index = firstIndexOfOccurrenceMain(arr, target);

if (index === -1) {
  console.log("Target not found");
} else {
  console.log("First index of occurrence:", index);
}
