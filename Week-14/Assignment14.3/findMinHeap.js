function findMinElement(minHeap) {
  // The minimum element in a min heap is always at the root
  if (minHeap.length > 0) {
    return minHeap[0];
  } else {
    // Return an appropriate value if the heap is empty
    return null;
  }
}

// Example usage:
const minHeap1 = [3, 8, 10, 15, 20];
console.log("Minimum element in minHeap1:", findMinElement(minHeap1)); // Output: 3

const minHeap2 = [1, 2, 3, 4, 5];
console.log("Minimum element in minHeap2:", findMinElement(minHeap2)); // Output: 1
