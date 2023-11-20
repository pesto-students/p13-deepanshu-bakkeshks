class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function createTreeFromInput(input) {
  const nodes = input.split(" ");
  const root = new TreeNode(parseInt(nodes[0]));

  const queue = [root];
  let index = 1;

  while (index < nodes.length) {
    const current = queue.shift();

    const leftVal = nodes[index++];
    if (leftVal !== "null") {
      current.left = new TreeNode(parseInt(leftVal));
      queue.push(current.left);
    }

    const rightVal = nodes[index++];
    if (rightVal !== "null") {
      current.right = new TreeNode(parseInt(rightVal));
      queue.push(current.right);
    }
  }

  return root;
}

function areTreesIdentical(tree1, tree2) {
  if (tree1 === null && tree2 === null) return true;
  if (tree1 === null || tree2 === null) return false;

  if (tree1.val !== tree2.val) return false;

  return (
    areTreesIdentical(tree1.left, tree2.left) &&
    areTreesIdentical(tree1.right, tree2.right)
  );
}

function isSubtree(tree1, tree2) {
  if (tree2 === null) return true; // Empty tree is a subtree of any tree
  if (tree1 === null) return false;

  if (tree1.val === tree2.val && areTreesIdentical(tree1, tree2)) {
    return true; // Found a subtree
  }

  return isSubtree(tree1.left, tree2) || isSubtree(tree1.right, tree2);
}

const input = "3 4 5 1 2 null null null null";
const subtreeInput = "4 1 2";

const tree = createTreeFromInput(input);
const subtree = createTreeFromInput(subtreeInput);

console.log("Is subtree a subtree of tree?", isSubtree(tree, subtree));
