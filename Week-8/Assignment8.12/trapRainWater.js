/* Problem: Trapping Rain Water : Given an array representing the heights of bars, find the total amount of rainwater
                that can be trapped between the bars.
   Input: N:8 ,[0,1,0,2,1,0,1,3], Output : 5 . The output should be the total amount of rainwater that can be trapped.
   Steps: 
   1] Store the max water in res variable.
   2] Find maximum element on its left.
   3] Find maximum element on its right.
   4] Update maximum water value.

   Time & Space Complexity: O(N^2), O(1)
 */

function maxWater(arr, n) {
  let res = 0;
  for (let i = 1; i < n - 1; i++) {
    let left = arr[i];
    for (let j = 0; j < i; j++) {
      left = Math.max(left, arr[j]);
    }

    let right = arr[i];
    for (let j = i + 1; j < n; j++) {
      right = Math.max(right, arr[j]);
    }

    res += Math.min(left, right) - arr[i];
  }
  return res;
}

let arr = [0, 1, 0, 2, 1, 0, 1, 3];
let n = arr.length;

console.log(maxWater(arr, n));
