/*
Problem: Longest Consecutive Subsequence 
Write a function that takes an array of integers as input and finds the length of the longest consecutive subsequence in the array.
A consecutive subsequenceis a sequence of numbers that appear consecutively in the array (without gaps).
Input: [1,0,0,4,2,0,0,1,3,2]
Output: 4
The function should return the length of the longest consecutive subsequencein the array.
*/

function findLongestConsecutiveSubsequence(arr) {
  let numSet = new Set(arr);
  let longestStreak = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}

let input = [100, 4, 200, 1, 3, 2];
let result = findLongestConsecutiveSubsequence(input);
console.log("Output: " + result);
