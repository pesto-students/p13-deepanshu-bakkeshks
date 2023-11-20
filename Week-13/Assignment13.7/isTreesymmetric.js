class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isSymmetric(root) {
  if (root === null) return true;

  function isMirror(left, right) {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;

    if (left.val !== right.val) return false;

    return isMirror(left.left, right.right) && isMirror(left.right, right.left);
  }

  return isMirror(root.left, root.right);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3);
root.right.right = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);

const isSym = isSymmetric(root);
console.log("Is the tree symmetric?", isSym);
