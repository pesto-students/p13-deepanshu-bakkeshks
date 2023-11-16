// Next greater element

function nextGreaterElement(arr) {
  let stack = [];
  let result = new Array(arr.length).fill(-1);

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      result[i] = -1;
    } else {
      result[i] = stack[stack.length - 1];
    }

    stack.push(arr[i]);
  }

  return result;
}

let arr = [5, 3, 8, 4, 2, 7, 1];
let result = nextGreaterElement(arr);

console.log(result.join(", "));
