// Reverse a queue using stack

function reverseQueue(queue) {
  let stack = [];

  // Enqueue all elements to stack
  while (queue.length > 0) {
    stack.push(queue.shift());
  }

  // Enqueue back elements from stack
  while (stack.length > 0) {
    queue.push(stack.pop());
  }

  return queue;
}

let queue = [1, 2, 3, 4, 5];

let result = reverseQueue(queue);

console.log(result.join(" "));
