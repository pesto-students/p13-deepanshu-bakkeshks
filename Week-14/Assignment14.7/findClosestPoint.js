class MaxHeap {
  constructor() {
    this.heap = [];
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  push(point) {
    this.heap.push(point);
    this.heapifyUp();
  }

  pop() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return root;
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[currentIndex].distance > this.heap[parentIndex].distance) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let currentIndex = 0;

    while (true) {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      let maxChildIndex = currentIndex;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex].distance > this.heap[maxChildIndex].distance
      ) {
        maxChildIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex].distance > this.heap[maxChildIndex].distance
      ) {
        maxChildIndex = rightChildIndex;
      }

      if (maxChildIndex !== currentIndex) {
        this.swap(currentIndex, maxChildIndex);
        currentIndex = maxChildIndex;
      } else {
        break;
      }
    }
  }
}

function calculateDistance(x, y) {
  return Math.sqrt(x ** 2 + y ** 2);
}

function findClosestPoints(points, k) {
  const maxHeap = new MaxHeap();

  for (const point of points) {
    const [x, y] = point;
    const distance = calculateDistance(x, y);

    if (maxHeap.heap.length < k) {
      maxHeap.push({ point, distance });
    } else if (distance < maxHeap.heap[0].distance) {
      maxHeap.pop();
      maxHeap.push({ point, distance });
    }
  }

  const result = [];
  while (maxHeap.heap.length > 0) {
    result.unshift(maxHeap.pop().point);
  }

  return result;
}

const k = 3;
const pointsArray = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
  [9, 10],
];

// Find and print the k closest points
const closestPoints = findClosestPoints(pointsArray, k);
console.log("K closest points to the origin:", closestPoints);
