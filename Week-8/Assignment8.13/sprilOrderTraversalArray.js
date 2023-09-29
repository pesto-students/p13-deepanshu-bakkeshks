/*
    Problem: Spiral Order Traversal in Array
        Given a 2D array of integers, implement an algorithm to print its elements in spiral order.
    Input: [1, 2, 3] [4, 5, 6] [7, 8, 9] , Output:  [1, 2, 3, 6, 9, 8, 7, 4, 5]
    Steps:
        1] Traverse top row from left to right
        2] Traverse right column from top to bottom 
        3] Traverse bottom row from right to left
        4] Traverse left column from bottom to top
    Time & Space Complexity: O(M*N) & O(1) 
*/
function spiralOrderTraversal(matrix) {
  let result = [];

  while (matrix.length > 0) {
    result = result.concat(matrix.shift());

    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].length > 0) {
        result.push(matrix[i].pop());
      }
    }

    if (matrix.length > 0) {
      result = result.concat(matrix.pop().reverse());
    }

    for (let i = matrix.length - 1; i >= 0; i--) {
      if (matrix[i].length > 0) {
        result.push(matrix[i].shift());
      }
    }
  }

  return result;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const result = spiralOrderTraversal(matrix);
console.log(result);
