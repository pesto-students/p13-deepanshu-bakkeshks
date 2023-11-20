function countLeafNodes(root) {
  if (root === null) return 0;

  if (root.left === null && root.right === null) {
    return 1;
  } else {
    return countLeafNodes(root.left) + countLeafNodes(root.right);
  }
}

// Example usage
const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 6,
      left: null,
      right: null,
    },
  },
};

const leafCount = countLeafNodes(root);
console.log("Number of leaf nodes:", leafCount); // Output: 3
