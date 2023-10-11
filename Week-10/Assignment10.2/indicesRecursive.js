/*
Problem: All Indices in Array using Recursion
Given an array and a target element, write a recursive function to find all the indices of the target element in the array.
*/
function indicesRecursive(arr, target, index = 0) {
  if (index === arr.length) {
    return [];
  }

  const currentElement = arr[index];
  const indices = indicesRecursive(arr, target, index + 1);

  if (currentElement === target) {
    indices.unshift(index);
  }

  return indices;
}

function indicesMain(arr, target) {
  return indicesRecursive(arr, target);
}

const inputArray = [1, 2, 3, 2, 4, 2, 5];
const targetElement = 2;
const output = indicesMain(inputArray, targetElement);
console.log(output); // Output: [1, 3, 5]
