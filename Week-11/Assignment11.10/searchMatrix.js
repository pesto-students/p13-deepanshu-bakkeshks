function searchMatrix(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  let start = 0;
  let end = m * n - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const row = Math.floor(mid / n);
    const col = mid % n;

    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
}

let matrix1 = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target1 = 13;

let matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
let target2 = 20;

console.log(searchMatrix(matrix1, target1)); // Output: false
console.log(searchMatrix(matrix2, target2)); // Output: true
