/*
Problem : find the given number is even.
1] Input: n=2, Output: true 
2] Input: n=3, Output: false
Time Complexity: O(1) 
Space Complexity: O(1)
*/

function isEven(n) {
  if (n % 2 == 0) {
    return true;
  }
  return false;
}

console.log(isEven(5));
