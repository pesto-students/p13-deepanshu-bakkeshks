/*
Problem : Sum of Two Matrix 
Time & Space Complexity: O(M*N) & O(1)
*/

function sumOfTwoMatrices(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array1[i].length; j++) {
      array1[i][j] += array2[i][j];
    }
  }

  return array1;
}
const array1 = [
  [1, 2, 3],
  [4, 5, 6],
];
const array2 = [
  [7, 8, 9],
  [10, 11, 12],
];
const sumArray = sumOfTwoMatrices(array1, array2);
console.log(sumArray);
