class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function serializeBinaryTree(root) {
  if (root === null) return "";

  const serializedString = [];

  function preorderTraversal(node) {
    if (node === null) {
      serializedString.push("null");
      return;
    }

    serializedString.push(node.val);
    preorderTraversal(node.left);
    preorderTraversal(node.right);
  }

  preorderTraversal(root);
  return serializedString.join(",");
}

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

const serializedString = serializeBinaryTree(root);
console.log("Serialized binary tree:", serializedString); // Output: 1,2,null,null,3
