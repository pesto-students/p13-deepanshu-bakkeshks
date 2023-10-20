function topologicalSort(vertices, adjacencyMatrix) {
  let stack = [];
  let visited = new Array(vertices).fill(false);

  function dfs(vertex) {
    visited[vertex] = true;
    for (let i = 0; i < vertices; i++) {
      if (adjacencyMatrix[vertex][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
    stack.push(vertex);
  }

  for (let i = 0; i < vertices; i++) {
    if (!visited[i]) {
      dfs(i);
    }
  }

  let result = "";
  while (stack.length > 0) {
    result += stack.pop();
    if (stack.length > 0) {
      result += " -> ";
    }
  }

  return result;
}

const vertices = 5;
const adjacencyMatrix = [
  [0, 1, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
];

const topologicalOrder = topologicalSort(vertices, adjacencyMatrix);
console.log("Topological Sort Order: " + topologicalOrder);
