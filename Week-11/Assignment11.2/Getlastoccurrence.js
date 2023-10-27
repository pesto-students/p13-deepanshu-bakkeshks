function getLastOccurrence(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let lastOccurrence = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      lastOccurrence = mid;
      // Check if this is the last occurrence
      if (mid === arr.length - 1 || arr[mid + 1] > target) {
        return lastOccurrence;
      } else {
        // Move to the right side of the array
        low = mid + 1;
      }
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return lastOccurrence;
}

// Given input array and target value
let inputArr = [1, 2, 3, 3, 5, 3];
let target = 3;

let result = getLastOccurrence(inputArr, target);
console.log(result);
