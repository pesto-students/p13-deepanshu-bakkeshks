// Reverse K Elements in Queue
function reverseKElements(queue, K) {
  const stack = [];
  const modifiedQueue = [];

  for (let i = 0; i < K; i++) {
    stack.push(queue.shift());
  }

  // Pop elements from the stack and enqueue them back into the queue
  while (stack.length > 0) {
    modifiedQueue.push(stack.pop());
  }

  // Enqueue the remaining elements from the original queue back into the modified queue
  while (queue.length > 0) {
    modifiedQueue.push(queue.shift());
  }

  return modifiedQueue;
}

console.log("Test Case 1:", reverseKElements([1, 2, 3, 4, 5, 6, 7], 3));
