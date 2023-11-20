class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function areIdenticalTrees(root1, root2) {
  if (root1 === null && root2 === null) {
    return true;
  }

  if (root1 === null || root2 === null) {
    return false;
  }

  if (root1.val !== root2.val) {
    return false;
  }

  // Recursively check if the left subtrees are identical
  const leftSubtreesAreIdentical = areIdenticalTrees(root1.left, root2.left);

  // Recursively check if the right subtrees are identical
  const rightSubtreesAreIdentical = areIdenticalTrees(root1.right, root2.right);

  // If both left and right subtrees are identical, return true
  return leftSubtreesAreIdentical && rightSubtreesAreIdentical;
}

const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

const identicalTrees = areIdenticalTrees(tree1, tree2);
console.log(
  identicalTrees
    ? "The two binary trees are identical"
    : "The two binary trees are not identical"
);
