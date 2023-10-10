/*
Problem: Find the First Non-Repeating Character
Implement a function that takes a string as input and returns the first non-repeating character in the string.
*/

function findFirstNonRepeatingCharacter(str) {
  // Create an object to store the frequency of each character.
  const charMap = {};
  for (const char of str) {
    if (charMap[char] === undefined) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  // Iterate over the string again and return the first character with a frequency of 1.
  for (const char of str) {
    if (charMap[char] === 1) {
      return char;
    }
  }

  // If there are no non-repeating characters, return an empty string.
  return "";
}

const inputString = "abcdabcde";
const result = findFirstNonRepeatingCharacter(inputString);
console.log(result);
// Output: e
