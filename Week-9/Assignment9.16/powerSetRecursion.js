/*
Problem: Power Set using Recursion
Input: N= 1 2 3, Output: [ [], [ 1 ], [ 2 ], [ 1, 2 ], [ 3 ], [ 1, 3 ], [ 2, 3 ], [ 1, 2, 3 ] ]
Steps:
    1] Base Case: If the index reaches the length of the input array, add the current subset to the power set and return. 
    2] Recursive Case: For each index, there are two cases: include the current element in the subset and recurse, 
    or exclude the current element and recurse.
Time & Space Complexity: O(2^N) & O(2^N)
*/

function powerSetRecursive(nums, index, subset, powerSet) {
  if (index === nums.length) {
    powerSet.push(subset.slice());
    return;
  }

  // Include the current element in the subset and recurse.
  subset.push(nums[index]);
  powerSetRecursive(nums, index + 1, subset, powerSet);

  // Exclude the current element from the subset and recurse.
  subset.pop();
  powerSetRecursive(nums, index + 1, subset, powerSet);
}

function powerSetMain(input) {
  // Parse input string into an array of integers
  const nums = input.split(" ").map((num) => parseInt(num));
  const powerSet = [];
  const subset = [];
  powerSetRecursive(nums, 0, subset, powerSet);
  return powerSet;
}

const input = "1 2 3";
const result = powerSetMain(input);
console.log(result);
