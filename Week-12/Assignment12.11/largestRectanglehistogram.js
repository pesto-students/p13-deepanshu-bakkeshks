// Find largest rectangle area in histogram

function largestRectangle(heights) {
  let stack = [];
  let maxArea = 0;
  let i = 0;

  while (i < heights.length) {
    // Push index if stack empty or current bar > top bar
    if (stack.length === 0 || heights[i] >= heights[stack[stack.length - 1]]) {
      stack.push(i);
      i++;
    } else {
      // Pop stacks and calculate area
      let top = stack.pop();

      let area =
        heights[top] *
        (stack.length === 0 ? i : i - stack[stack.length - 1] - 1);

      maxArea = Math.max(area, maxArea);
    }
  }

  // Pop remaining bars and calculate area
  while (stack.length > 0) {
    let top = stack.pop();

    let area =
      heights[top] * (stack.length === 0 ? i : i - stack[stack.length - 1] - 1);

    maxArea = Math.max(area, maxArea);
  }

  return maxArea;
}

let heights = [2, 1, 5, 6, 2, 3];
let result = largestRectangle(heights);

console.log(result);
