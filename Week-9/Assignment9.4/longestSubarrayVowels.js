/*
Problem: Longest Subarray with Equal Number of Vowels and Consonants
Write a function that takes an array of characters as input and finds the length of the longest subarray in the array that contains an 
equal number of vowels and consonants. The vowels are defined as 'a', 'e', 'i', 'o', and 'u' (both lowercase and uppercase).
Input: babadabcdeiouiop
Output: 8
*/

function longestSubarrayWithEqualVowelsAndConsonants(chars) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const countMap = new Map();
  countMap.set(0, -1);
  let vowelsCount = 0;
  let consonantsCount = 0;
  let maxLength = 0;

  for (let i = 0; i < chars.length; i++) {
    if (vowels.has(chars[i])) {
      vowelsCount++;
    } else {
      consonantsCount++;
    }

    const diff = vowelsCount - consonantsCount;
    if (i === 0) {
      maxLength = Math.max(maxLength, i - 1);
    } else if (countMap.has(diff)) {
      maxLength = Math.max(maxLength, i - countMap.get(diff));
    } else {
      countMap.set(diff, i);
    }
  }

  return maxLength;
}

const input = "babadabcdeiouiop";
const result = longestSubarrayWithEqualVowelsAndConsonants(input);
console.log(result); // Output: 12
