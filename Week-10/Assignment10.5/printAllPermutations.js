/*
Problem: Print All Permutations
Write a recursive function to print all permutations of a given string.
*/

function printAllPermutations(str) {
  let permutations = [];
  permute(str, 0, permutations);
  return permutations;
}

function permute(str, start, permutations) {
  if (start === str.length - 1) {
    permutations.push(str);
    return;
  }

  for (let i = start; i < str.length; i++) {
    str = swap(str, start, i);
    permute(str, start + 1, permutations);
    str = swap(str, start, i); // backtrack to the original string
  }
}

function swap(str, i, j) {
  const strArray = str.split("");
  const temp = strArray[i];
  strArray[i] = strArray[j];
  strArray[j] = temp;
  return strArray.join("");
}

// Example usage
const inputString = "abc";
const result = printAllPermutations(inputString);
console.log(result);
