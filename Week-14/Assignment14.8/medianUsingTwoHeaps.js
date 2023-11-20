class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMax() {
    if (this.isEmpty()) {
      return null;
    }

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return max;
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.heap[currentIndex] > this.heap[parentIndex]) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];
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
        this.heap[leftChildIndex] > this.heap[maxChildIndex]
      ) {
        maxChildIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[maxChildIndex]
      ) {
        maxChildIndex = rightChildIndex;
      }

      if (maxChildIndex !== currentIndex) {
        [this.heap[currentIndex], this.heap[maxChildIndex]] = [
          this.heap[maxChildIndex],
          this.heap[currentIndex],
        ];
        currentIndex = maxChildIndex;
      } else {
        break;
      }
    }
  }

  peek() {
    return this.isEmpty() ? null : this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMin() {
    if (this.isEmpty()) {
      return null;
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.heap[currentIndex] < this.heap[parentIndex]) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];
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
      let minChildIndex = currentIndex;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[minChildIndex]
      ) {
        minChildIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[minChildIndex]
      ) {
        minChildIndex = rightChildIndex;
      }

      if (minChildIndex !== currentIndex) {
        [this.heap[currentIndex], this.heap[minChildIndex]] = [
          this.heap[minChildIndex],
          this.heap[currentIndex],
        ];
        currentIndex = minChildIndex;
      } else {
        break;
      }
    }
  }

  peek() {
    return this.isEmpty() ? null : this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function findMedian(stream) {
  const maxHeap = new MaxHeap();
  const minHeap = new MinHeap();
  let median = null;

  for (const num of stream) {
    if (maxHeap.isEmpty() || num <= median) {
      maxHeap.insert(num);
    } else {
      minHeap.insert(num);
    }

    // Balance the heaps
    if (maxHeap.size() > minHeap.size() + 1) {
      minHeap.insert(maxHeap.extractMax());
    } else if (minHeap.size() > maxHeap.size()) {
      maxHeap.insert(minHeap.extractMin());
    }

    // Update median
    if (maxHeap.size() === minHeap.size()) {
      median = (maxHeap.peek() + minHeap.peek()) / 2;
    } else {
      median = maxHeap.peek();
    }
  }

  return median;
}

const stream1 = [5, 10, 2, 8, 15];
// Example usage continued
const median1 = findMedian(stream1);
console.log("Median 1:", median1);

const stream2 = [10, 20, 30, 40, 50];
const median2 = findMedian(stream2);
console.log("Median 2:", median2);
