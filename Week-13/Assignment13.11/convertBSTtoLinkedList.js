class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function convertBSTtoLinkedList(root) {
  let head = null;
  let prev = null;

  function inorderTraversal(node) {
    if (node === null) return;

    inorderTraversal(node.left);

    if (prev === null) {
      head = node;
    } else {
      prev.right = node;
    }

    prev = node;
    node.left = null; // Make sure to set left to null after attaching to the list

    inorderTraversal(node.right);
  }

  inorderTraversal(root);

  return head;
}

const root = new Node(7);
root.left = new Node(4);
root.right = new Node(10);
root.left.left = new Node(3);
root.right.left = new Node(8);
root.right.right = new Node(11);

const result = convertBSTtoLinkedList(root);

let current = result;
while (current !== null) {
  console.log(current.val);
  current = current.right;
}
