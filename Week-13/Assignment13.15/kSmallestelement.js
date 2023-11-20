class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function kthSmallest(root, k) {
  let stack = [];
  let count = 0;
  let current = root;

  while (current !== null || stack.length > 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    count++;

    if (count === k) {
      return current.val;
    }

    current = current.right;
  }

  // If k is greater than the number of elements in the BST
  return -1;
}

const tree1 = new TreeNode(7);
tree1.left = new TreeNode(4);
tree1.left.left = new TreeNode(2);
tree1.left.right = new TreeNode(6);
tree1.left.left.left = new TreeNode(1);
tree1.left.left.right = new TreeNode(3);
tree1.right = new TreeNode(5);
tree1.right.right = new TreeNode(7);

const k1 = 3;
console.log(kthSmallest(tree1, k1)); // Output: 3

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

const k2 = 4; // k is greater than the number of elements
console.log(kthSmallest(tree2, k2)); // Output: -1
