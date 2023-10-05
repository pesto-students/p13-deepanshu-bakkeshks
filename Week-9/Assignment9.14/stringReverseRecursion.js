/*
Problem: String Reversal using Recursion
Input: N="hello", Output: olleh
Steps: Reverse the substring from the 2nd character to the end, then concatenate the first character at the end.
    1] Base Case: If the input string is empty or has a length of 1, it is already reversed. Return the string itself.
    2] Recursive Case: For strings longer than 1 character, take the first character out, reverse the rest of the 
    string using recursion, and concatenate the first character at the end.
Time & Space Complexity: O(N) & O(N)
*/

function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }

  return reverseString(str.slice(1)) + str[0];
}

let inputString = "hello";
let reversedString = reverseString(inputString);
console.log(reversedString);
