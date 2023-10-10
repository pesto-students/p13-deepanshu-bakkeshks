/*
Problem: Subarray with Sum K Hashing
Given an array of integers and a target sum, find if there exists a subarray with a sum equal to the target.
*/

function hasSubarrayWithSumK(arr, k) {
  let sum = 0;
  let sumMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === k || sumMap.has(sum - k)) {
      return true;
    }

    sumMap.set(sum, i);
  }

  return false;
}

const input1 = [3, 4, 7, 2, -3, 1, 4, 2];
const target1 = 7;
console.log(hasSubarrayWithSumK(input1, target1));

const input2 = [1, 2, 3, 4, 5];
const target2 = 9;
console.log(hasSubarrayWithSumK(input2, target2));
