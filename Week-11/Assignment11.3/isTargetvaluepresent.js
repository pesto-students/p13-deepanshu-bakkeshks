function isTargetPresent(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return true;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
}

// Given input array and target value
let inputArr = [1, 3, 5, 7, 9];
let target = 5;

let result = isTargetPresent(inputArr, target);
console.log(result);
