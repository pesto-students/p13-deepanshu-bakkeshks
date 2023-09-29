/* Find the maximum product subarray:
 Input: [2,3,-2,4,5] Output: 20 
 Steps:
  1] traversing in the current subarray.
  2] updating result every time to keep an eye over the maximum product.
  3] updating the result for (n-1)th index.

  Time & Space Complexity:  O(N^2) , O(1)
 */
function maxProductSubarray(elements) {
  let n = elements.length;
  let result = elements[0];

  for (let i = 0; i < n; i++) {
    let mul = elements[i];

    for (let j = i + 1; j < n; j++) {
      result = Math.max(result, mul);
      mul *= elements[j];
    }

    result = Math.max(result, mul);
  }

  return result;
}

let arr = [2, 3, -2, 4, 5];
console.log("Maximum Subarray product is " + maxProductSubarray(arr));
