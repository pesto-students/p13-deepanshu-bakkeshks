function isMinHeap(arr) {
  const n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    if (arr[i] > arr[2 * i + 1]) {
      return false;
    }

    if (2 * i + 2 < n && arr[i] > arr[2 * i + 2]) {
      return false;
    }
  }

  return true;
}

// Example usage:
const heap1 = [5, 10, 15, 20, 25];
console.log(isMinHeap(heap1)); // Output: true

const heap2 = [20, 10, 25, 5, 15];
console.log(isMinHeap(heap2)); // Output: false
