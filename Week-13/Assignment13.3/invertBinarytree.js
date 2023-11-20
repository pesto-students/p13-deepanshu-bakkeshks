class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function invertBinaryTree(root) {
  if (root === null) return null;

  // Swap the left and right children
  const tempLeft = root.left;
  root.left = root.right;
  root.right = tempLeft;

  // Recursively invert the left and right subtrees
  invertBinaryTree(root.left);
  invertBinaryTree(root.right);

  return root;
}

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right = new TreeNode(7);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

const invertedRoot = invertBinaryTree(root);
console.log("Inverted tree:");
console.log(invertedRoot);
