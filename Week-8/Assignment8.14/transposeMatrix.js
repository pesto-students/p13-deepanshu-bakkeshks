/*
Problem: Transpose a matrix
Take a 2d array as input and return the tranposeof that 2d Matrix
Input: [[1, 2],[3, 4]] , Output: [[1,3],[2,4]]
*/

function transpose(matrix) {
  const transposedMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    const transposedRow = [];
    for (let j = 0; j < matrix[0].length; j++) {
      transposedRow.push(matrix[j][i]);
    }

    transposedMatrix.push(transposedRow);
  }

  return transposedMatrix;
}

const matrix = [
  [1, 2],
  [3, 4],
];

const transposedMatrix = transpose(matrix);

console.log(transposedMatrix);
// Output:  [[1, 3], [2, 4]]
