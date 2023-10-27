class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function removeDuplicates(head) {
  if (!head || !head.next) {
    return head;
  }

  let set = new Set();
  let current = head;
  let previous = null;

  while (current) {
    if (set.has(current.val)) {
      // Remove the current node
      previous.next = current.next;
    } else {
      // Add value to the set
      set.add(current.val);
      // Move previous pointer
      previous = current;
    }
    // Move to the next node
    current = current.next;
  }

  return head;
}

// Function to convert array to linked list
function arrayToLinkedList(arr) {
  if (arr.length === 0) {
    return null;
  }
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Function to convert linked list to array
function linkedListToArray(head) {
  let result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

let input1 = [1, 2, 3, 2, 4, 1];
let input2 = [1, 1, 1, 1];

let head1 = arrayToLinkedList(input1);
let head2 = arrayToLinkedList(input2);

let modifiedHead1 = removeDuplicates(head1);
let modifiedHead2 = removeDuplicates(head2);

let output1 = linkedListToArray(modifiedHead1);
let output2 = linkedListToArray(modifiedHead2);

console.log(output1);
console.log(output2);
