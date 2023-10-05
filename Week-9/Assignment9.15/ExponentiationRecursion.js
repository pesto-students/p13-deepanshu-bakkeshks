/*
Problem: Exponentiation using Recursion
Input: base=2 exponent=3, Output: 8
Steps: 
    1] Base Case: If the exponent (p) is 0, return 1, because any number raised to the power of 0 is 1.
    2] Recursive Case: If the exponent is greater than 0, recursively calculate x raised to the power p−1 and 
    multiply the result by x.
Time & Space Complexity: O(P) & O(P)
*/

function exponentiation(x, p) {
  if (p === 0) {
    return 1;
  }

  return x * exponentiation(x, p - 1);
}

let base = 2;
let exponent = 3;
let result = exponentiation(base, exponent);
console.log(result);
