/*
Problem: Maze Path using Recursion
Given a maze with obstacles, write a recursive function to find all possible paths from the top-left corner
to the bottom-right corner. You can only move down or right.
*/

function mazePathRecursive(row, col, numRows, numCols, currentPath, result) {
  // Base case: If the current position is the bottom-right corner
  if (row === numRows - 1 && col === numCols - 1) {
    result.push(currentPath);
    return;
  }

  // Move right if within boundaries
  if (col + 1 < numCols) {
    mazePathRecursive(
      row,
      col + 1,
      numRows,
      numCols,
      currentPath + "R",
      result
    );
  }

  // Move down if within boundaries
  if (row + 1 < numRows) {
    mazePathRecursive(
      row + 1,
      col,
      numRows,
      numCols,
      currentPath + "D",
      result
    );
  }
}

function mazePathMain(numRows, numCols) {
  let result = [];
  mazePathRecursive(0, 0, numRows, numCols, "", result);
  return result;
}

let numRows = 3;
let numCols = 3;
let paths = mazePathMain(numRows, numCols);
console.log(paths); // Output: ["RRDD", "RDRD", "RDDR", "DRRD", "DRDR", "DDRR"]
