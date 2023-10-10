/*
Problem: Minimum Window Substring
Given two strings, find the minimum window in the first string that contains all the characters 
from the second string. Return an empty string if there is no such window.
*/
function minWindowSubstring(str1, str2) {
  const charCount = {};
  for (const char of str2) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let left = 0;
  let right = 0;
  let minLength = Infinity;
  let minWindow = "";

  let requiredChars = Object.keys(charCount).length;
  let formedChars = 0;

  while (right < str1.length) {
    const char = str1[right];
    if (charCount[char] !== undefined) {
      charCount[char]--;
      if (charCount[char] === 0) {
        formedChars++;
      }
    }

    while (formedChars === requiredChars) {
      const windowSize = right - left + 1;
      if (windowSize < minLength) {
        minLength = windowSize;
        minWindow = str1.substring(left, right + 1);
      }

      const leftChar = str1[left];
      if (charCount[leftChar] !== undefined) {
        charCount[leftChar]++;
        if (charCount[leftChar] > 0) {
          formedChars--;
        }
      }

      left++;
    }

    right++;
  }

  return minWindow;
}

const str1 = "ADOBECODEBANC";
const str2 = "ABC";
const result = minWindowSubstring(str1, str2);
console.log(result); // Output: "BANC"
