class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function levelOrderTraversal(root) {
  if (root === null) return [];

  const queue = [root];
  const result = [];
  let level = 0;

  while (queue.length > 0) {
    const currentLevel = [];

    for (let i = queue.length - 1; i >= 0; i--) {
      const node = queue.pop();
      currentLevel.push(node.val);

      if (node.left !== null) {
        queue.unshift(node.left);
      }

      if (node.right !== null) {
        queue.unshift(node.right);
      }
    }

    result.push(currentLevel);
    level++;
  }

  return result;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.right.right = new TreeNode(5);

const levelOrder = levelOrderTraversal(root);
console.log("Level order traversal:");
console.log(levelOrder);
