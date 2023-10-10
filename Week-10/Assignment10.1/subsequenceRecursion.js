/*
Problem: Subsequence using Recursion
Given a string, write a recursive function to find all possible subsequences of the string.
*/

function subsequenceRecursive(str, index, current, result) {
  if (index === str.length) {
    result.push(current);
    return;
  }

  subsequenceRecursive(str, index + 1, current + str[index], result);

  subsequenceRecursive(str, index + 1, current, result);
}

function subsequenceMain(str) {
  const result = [];
  subsequenceRecursive(str, 0, "", result);
  return result;
}

const input = "abc";
const output = subsequenceMain(input);
console.log(output); // Output: [, a, b, ab, c, ac, bc, abc]
