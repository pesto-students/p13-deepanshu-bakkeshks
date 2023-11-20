class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function hasPathSum(root, targetSum) {
  if (root === null) {
    // Check if the remaining sum can be reached through the other subtree
    return targetSum === 0;
  }

  targetSum -= root.val;

  if (root.left === null && root.right === null) {
    return targetSum === 0;
  }

  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
}

// Example usage
const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.right.left = new TreeNode(13);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2); // Add this line to make the path sum equal to 22
root.right.right = new TreeNode(1);
root.right.right.right = new TreeNode(22);

const targetSum = 21;

const hasPath = hasPathSum(root, targetSum);
console.log("Does a path sum exist?", hasPath);
