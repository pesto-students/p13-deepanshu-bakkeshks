/*
Problem: First Non Repeating Element
The task is to find the first non-repeating character in a given string.
A non-repeating character is a character that appears only once in the string.

*/
function firstNonRepeating(str, n) {
  const charCount = new Map();

  for (let i = 0; i < n; i++) {
    const char = str[i];
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let i = 0; i < n; i++) {
    const char = str[i];
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  return "";
}

var inputString = "abbcadef";
var n = inputString.length;
console.log(firstNonRepeating(inputString, n));
// Output: c
