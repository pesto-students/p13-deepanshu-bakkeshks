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

function findKthLargest(array, k) {
  const minHeap = [];

  if (k > array.length) {
    throw new Error("Invalid value of k");
  }

  for (let i = 0; i < k; i++) {
    minHeap.push(array[i]);
  }

  buildMinHeap(minHeap);

  for (let i = k; i < array.length; i++) {
    if (array[i] > minHeap[0]) {
      minHeap[0] = array[i];
      heapify(minHeap, 0);
    }
  }

  return minHeap[0];
}

const elements = [5, 2, 9, 1, 7];
const k = 2;
const kthLargestElement = findKthLargest(elements, k);
console.log("Kth largest element:", kthLargestElement);
