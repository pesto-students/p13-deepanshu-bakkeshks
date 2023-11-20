class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let maxSum = Number.MIN_SAFE_INTEGER;

function findMaxPathSum(node) {
  if (node === null) {
    return 0;
  }

  const leftSum = Math.max(0, findMaxPathSum(node.left));

  const rightSum = Math.max(0, findMaxPathSum(node.right));

  const currentSum = node.val + leftSum + rightSum;

  maxSum = Math.max(maxSum, currentSum);

  return node.val + Math.max(leftSum, rightSum);
}

function maxPathSum(root) {
  maxSum = Number.MIN_SAFE_INTEGER;

  findMaxPathSum(root);

  return maxSum;
}

const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);
tree1.left.left = new TreeNode(-1);
tree1.left.right = new TreeNode(5);
tree1.right.left = new TreeNode(6);
tree1.right.right = new TreeNode(7);

console.log(maxPathSum(tree1)); // Output: 18

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.left.left = new TreeNode(3);
tree2.left.left.left = new TreeNode(4);
tree2.left.left.left.left = new TreeNode(5);

console.log(maxPathSum(tree2)); // Output: 15
