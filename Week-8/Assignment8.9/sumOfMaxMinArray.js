/**
 Problem: Get the sum of the maximum and minimum values in an array
 Write a function to return the sum of max and min values in an array.
 Time & Space Complexity : O(N) & O(1)
 */
function findSumOfMaxAndMin(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let minValue = arr[0];
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  const sum = minValue + maxValue;
  return sum;
}
console.log(findSumOfMaxAndMin([1, 2, 3, 4, 5]));
