function selectionSortStrings(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the current element with the smallest element in the unsorted subarray.
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

const arr = ["banana", "apple", "grape", "cherry"];

const sortedArr = selectionSortStrings(arr);

console.log(sortedArr); // ["apple", "banana", "cherry", "grape"]
