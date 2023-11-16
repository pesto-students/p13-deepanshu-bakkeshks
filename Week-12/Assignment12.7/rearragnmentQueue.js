// Queue Rearrangement
function rearrangeQueue(inputQueue) {
  const initialQueue = inputQueue.split(" ").map(Number);

  const evenQueue = [];
  const oddQueue = [];

  for (let i = 0; i < initialQueue.length; i++) {
    if (initialQueue[i] % 2 === 0) {
      evenQueue.push(initialQueue[i]);
    } else {
      oddQueue.push(initialQueue[i]);
    }
  }

  const rearrangedQueue = [];

  // Copy evenQueue elements to rearrangedQueue
  for (let i = 0; i < evenQueue.length; i++) {
    rearrangedQueue[i] = evenQueue[i];
  }

  // Copy oddQueue elements to rearrangedQueue
  for (let i = 0; i < oddQueue.length; i++) {
    rearrangedQueue[evenQueue.length + i] = oddQueue[i];
  }

  return rearrangedQueue;
}

console.log("Output:", rearrangeQueue("5 2 8 3 9 4"));
