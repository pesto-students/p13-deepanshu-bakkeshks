function heapify(heap, index, heapSize) {
  const leftChild = index * 2 + 1;
  const rightChild = index * 2 + 2;
  let smallest = index;

  if (leftChild < heapSize && heap[leftChild].value < heap[smallest].value) {
    smallest = leftChild;
  }

  if (rightChild < heapSize && heap[rightChild].value < heap[smallest].value) {
    smallest = rightChild;
  }

  if (smallest !== index) {
    [heap[smallest], heap[index]] = [heap[index], heap[smallest]];
    heapify(heap, smallest, heapSize);
  }
}

function buildMinHeap(heap) {
  const heapSize = heap.length;
  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    heapify(heap, i, heapSize);
  }
}

function findKthSmallest(matrix, k) {
  const minHeap = [];
  const rows = matrix.length;
  const cols = matrix[0].length;

  if (k > rows * cols) {
    throw new Error("Invalid value of k");
  }

  for (let i = 0; i < rows; i++) {
    minHeap.push({
      value: matrix[i][0],
      row: i,
      col: 0,
    });
  }

  buildMinHeap(minHeap);

  for (let i = 0; i < k - 1; i++) {
    const smallestElement = minHeap.shift();
    const nextElementCol = smallestElement.col + 1;

    if (nextElementCol < cols) {
      minHeap.push({
        value: matrix[smallestElement.row][nextElementCol],
        row: smallestElement.row,
        col: nextElementCol,
      });

      heapify(minHeap, 0, minHeap.length);
    }
  }

  return minHeap[0].value;
}

const matrix = [
  [1, 3, 5],
  [2, 4, 7],
  [6, 8, 9],
];
const k = 3;

const kthSmallestElement = findKthSmallest(matrix, k);
console.log("Kth smallest element:", kthSmallestElement);
