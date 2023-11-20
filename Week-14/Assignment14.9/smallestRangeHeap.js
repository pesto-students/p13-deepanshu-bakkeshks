class Node {
  constructor(ele, i, j) {
    this.ele = ele;
    this.i = i;
    this.j = j;
  }
}

class MinHeap {
  constructor(arr, size) {
    this.harr = arr;
    this.size = size;
    let i = Math.floor((size - 1) / 2);

    while (i >= 0) {
      this.minHeapify(i);
      i--;
    }
  }

  left(i) {
    return 2 * i + 1;
  }

  right(i) {
    return 2 * i + 2;
  }

  minHeapify(i) {
    let l = this.left(i);
    let r = this.right(i);
    let small = i;

    if (l < this.size && this.harr[l].ele < this.harr[i].ele) small = l;
    if (r < this.size && this.harr[r].ele < this.harr[small].ele) small = r;
    if (small !== i) {
      this.swap(small, i);
      this.minHeapify(small);
    }
  }

  swap(i, j) {
    let temp = this.harr[i];
    this.harr[i] = this.harr[j];
    this.harr[j] = temp;
  }

  getMin() {
    return this.harr[0];
  }

  replaceMin(x) {
    this.harr[0] = x;
    this.minHeapify(0);
  }
}

function findSmallestRange(arr, k) {
  let range = Number.MAX_VALUE;
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;
  let start = -1,
    end = -1;
  let n = arr[0].length;

  let arr1 = new Array(k);
  for (let i = 0; i < k; i++) {
    let node = new Node(arr[i][0], i, 1);
    arr1[i] = node;
    max = Math.max(max, node.ele);
  }

  let mh = new MinHeap(arr1, k);

  while (true) {
    let root = mh.getMin();
    min = root.ele;

    if (range > max - min + 1) {
      range = max - min + 1;
      start = min;
      end = max;
    }

    if (root.j < n) {
      root.ele = arr[root.i][root.j];
      root.j++;
      if (root.ele > max) max = root.ele;
    } else {
      break;
    }

    mh.replaceMin(root);
  }

  console.log(`The smallest range is [${start} ${end}]`);
}

// Driver Code
let arr = [
  [4, 7, 9, 12, 15],
  [0, 8, 10, 14, 20],
  [6, 12, 16, 30, 50],
];
let k = arr.length;

findSmallestRange(arr, k);
