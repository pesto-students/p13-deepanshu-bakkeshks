/*
Problem: Longest Palindromic Substring
Write a function that takes a string as input and findsthe longest palindromic substring within the string. 
A palindromic substring is a substring that reads the same forwards and backwards.
Input: "babad"
Output: "aba"
*/

function longestPalindromicSubstring(s) {
  if (s.length < 1) return "";

  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i + 1);
    let maxLength = Math.max(len1, len2);

    if (maxLength > end - start) {
      start = i - Math.floor((maxLength - 1) / 2);
      end = i + Math.floor(maxLength / 2);
    }
  }

  return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

let input = "babad";
let result = longestPalindromicSubstring(input);
console.log(result);
