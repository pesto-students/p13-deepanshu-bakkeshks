class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isBST(
  root,
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER
) {
  if (!root) {
    return true;
  }

  if (root.value < min || root.value > max) {
    return false;
  }

  return (
    isBST(root.left, min, root.value) && isBST(root.right, root.value, max)
  );
}

const root1 = new Node(5);
root1.left = new Node(3);
root1.right = new Node(7);
root1.left.left = new Node(2);
root1.left.right = new Node(4);
root1.right.right = new Node(8);
console.log("Output:", isBST(root1));
