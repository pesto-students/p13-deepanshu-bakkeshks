// Calculate Height of Binary Tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function getHeight(root) {
  if (!root) {
    return 0;
  }

  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

const root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

const height = getHeight(root);
console.log("Height of the binary tree:", height);
