class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function lowestCommonAncestor(root, p, q) {
  if (root === null) return null;

  if (root.val === p.val || root.val === q.val) return root;

  const leftLCA = lowestCommonAncestor(root.left, p, q);
  const rightLCA = lowestCommonAncestor(root.right, p, q);

  if (leftLCA !== null && rightLCA !== null) return root;

  if (leftLCA !== null) return leftLCA;
  if (rightLCA !== null) return rightLCA;

  return null;
}

const p = new Node(5);
const q = new Node(1);

const root = new Node(3);
root.left = new Node(5);
root.right = new Node(1);
root.left.left = new Node(6);
root.right.left = new Node(2);
root.right.right = new Node(0);
root.left.left.left = new Node(8);

const lca = lowestCommonAncestor(root, p, q);
console.log("The lowest common ancestor of nodes 5 and 1 is:", lca.val);
