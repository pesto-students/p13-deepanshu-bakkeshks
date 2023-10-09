/*
Problem: Longest Subarray with Equal Number of 0s and 1s.
Write a function that takes an array of 0s and 1s as input and finds the length of the longest subarray that contains
an equal number of 0s and 1s.
Input: [0 1 0 1 1 0 0]
Output: 6 
The function should return the length of the longest subarray with an equal number of 0s and 1s.
Steps:
    1] If the current element is 0, decrease the count; if it's 1, increase the count
    2] If the count is in the map, update the maxLength
    3] If count is not in the map, add it with the current index
*/
function findLongestSubarray(arr) {
  let maxLength = 0;
  let count = 0;
  const countMap = new Map();
  countMap.set(0, -1);

  for (let i = 0; i < arr.length; i++) {
    count += arr[i] === 0 ? -1 : 1;

    if (countMap.has(count)) {
      maxLength = Math.max(maxLength, i - countMap.get(count));
    } else {
      countMap.set(count, i);
    }
  }

  return maxLength;
}

const arr = [0, 1, 0, 1, 1, 0, 0];
const result = findLongestSubarray(arr);
console.log("Length of the longest subarray with equal 0s and 1s:", result);
