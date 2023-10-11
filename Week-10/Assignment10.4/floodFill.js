/*
Problem: Flood Fill
Given a 2D grid and a starting position (row and column), fill the connected region with a given new color.
The connected region consists of all the cells that can be reached from the starting position by moving horizontally
or vertically to adjacent cells with the same color as the starting position.
*/
function floodFill(grid, row, col, visited, startingColor, newColor) {
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[0].length ||
    visited[row][col] ||
    grid[row][col] !== startingColor
  ) {
    return;
  }

  grid[row][col] = newColor;
  visited[row][col] = true;

  floodFill(grid, row + 1, col, visited, startingColor, newColor);
  floodFill(grid, row - 1, col, visited, startingColor, newColor);
  floodFill(grid, row, col + 1, visited, startingColor, newColor);
  floodFill(grid, row, col - 1, visited, startingColor, newColor);
}

function performFloodFill(grid, startRow, startCol, newColor) {
  const visited = new Array(grid.length)
    .fill(0)
    .map(() => new Array(grid[0].length).fill(false));
  const startingColor = grid[startRow][startCol];
  floodFill(grid, startRow, startCol, visited, startingColor, newColor);
  return grid;
}

// Example usage
const inputGrid = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
const startRow = 1;
const startCol = 1;
const newColor = 2;

const outputGrid = performFloodFill(inputGrid, startRow, startCol, newColor);
console.log(outputGrid);
