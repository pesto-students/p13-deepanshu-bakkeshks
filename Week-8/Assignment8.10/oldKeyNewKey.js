/* 
Problem : Old Key New Key
Take array as an input from the user andreplace occurrences of an old key with a new key in an array
Ex: Input: [1,2,3,2,4,2,5]
2
6
Output:
[1, 6, 3, 6, 4, 6, 5]
Explanation:
There are total 3 2s presenting a array which is replaced by 6
Time & Space Complexity : O(N) & O(1)
*/

function replaceKey(arr, oldKey, newKey) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === oldKey) {
      arr[i] = newKey;
    }
  }
  return arr;
}

// Example usage:
const inputArray = [1, 2, 3, 2, 4, 2, 5];
const oldKey = 2;
const newKey = 6;

const outputArray = replaceKey(inputArray, oldKey, newKey);
console.log(outputArray); // [1, 6, 3, 6, 4, 6, 5]
