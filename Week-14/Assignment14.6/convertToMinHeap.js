class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function convertToMinHeap(root) {
  const levelOrderTraversal = [];
  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const currentNode = queue.shift();
    if (currentNode) {
      levelOrderTraversal.push(currentNode.value);
      queue.push(currentNode.left);
      queue.push(currentNode.right);
    } else {
      levelOrderTraversal.push(null);
    }
  }

  // Sort the array in ascending order
  levelOrderTraversal.sort((a, b) => (a !== null && b !== null ? a - b : 0));

  // Construct a new min heap from the sorted array
  const rootNode = constructMinHeap(levelOrderTraversal, 0);

  return rootNode;
}

function constructMinHeap(levelOrderTraversal, index) {
  if (
    index >= levelOrderTraversal.length ||
    levelOrderTraversal[index] === null
  )
    return null;

  const root = new Node(levelOrderTraversal[index]);
  const leftIndex = 2 * index + 1;
  const rightIndex = 2 * index + 2;

  root.left = constructMinHeap(levelOrderTraversal, leftIndex);
  root.right = constructMinHeap(levelOrderTraversal, rightIndex);

  return root;
}

function printInorder(root) {
  if (!root) return;

  printInorder(root.left);
  console.log(root.value);
  printInorder(root.right);
}

const root = new Node(4);
root.left = new Node(2);
root.right = new Node(6);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(5);
root.right.right = new Node(7);

const rootNode = convertToMinHeap(root);

printInorder(rootNode);
