function buildMinHeap(array) {
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, i);
  }
}

function heapify(array, index) {
  const leftChild = index * 2 + 1;
  const rightChild = index * 2 + 2;
  let smallest = index;

  if (leftChild < array.length && array[leftChild] < array[smallest]) {
    smallest = leftChild;
  }

  if (rightChild < array.length && array[rightChild] < array[smallest]) {
    smallest = rightChild;
  }

  if (smallest !== index) {
    [array[smallest], array[index]] = [array[index], array[smallest]];
    heapify(array, smallest);
  }
}

function mergeKSortedArrays(arrays) {
  const heap = [];
  const result = [];

  for (let i = 0; i < arrays.length; i++) {
    heap.push({ value: arrays[i][0], arrayIndex: i, elementIndex: 0 });
  }

  buildMinHeap(heap);

  while (heap.length > 0) {
    const smallestElement = heap.shift();
    result.push(smallestElement.value);

    const nextElementIndex = smallestElement.elementIndex + 1;
    if (nextElementIndex < arrays[smallestElement.arrayIndex].length) {
      heap.push({
        value: arrays[smallestElement.arrayIndex][nextElementIndex],
        arrayIndex: smallestElement.arrayIndex,
        elementIndex: nextElementIndex,
      });

      heapify(heap, 0);
    }
  }

  return result;
}

const arrays1 = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

const arrays2 = [
  [1, 3, 5],
  [2, 4, 6],
];

const mergedArray1 = mergeKSortedArrays(arrays1);
const mergedArray2 = mergeKSortedArrays(arrays2);

console.log("Merged array 1:", mergedArray1); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("Merged array 2:", mergedArray2); // Output: [1, 2, 3, 4, 5, 6]
