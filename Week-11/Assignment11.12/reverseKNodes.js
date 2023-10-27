class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseKNodes(head, k) {
  if (!head || k === 1) {
    return head;
  }

  let dummy = new ListNode(-1);
  dummy.next = head;
  let prev = dummy;
  let curr = head;
  let count = 0;

  // Count the number of nodes in the linked list
  let temp = head;
  while (temp) {
    count++;
    temp = temp.next;
  }

  while (count >= k) {
    let nextGroupStart = curr.next;
    let prevGroupEnd = prev.next;
    let next = null;

    // Reverse k nodes in the current group
    for (let i = 0; i < k; i++) {
      next = curr.next;
      curr.next = nextGroupStart;
      nextGroupStart = curr;
      curr = next;
    }

    // Connect the reversed group to the previous group
    prev.next = nextGroupStart;
    prevGroupEnd.next = curr;

    // Update pointers and count for the next iteration
    prev = prevGroupEnd;
    count -= k;
  }

  return dummy.next;
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

let input1 = [1, 2, 3, 4, 5, 6, 7, 8];
let k1 = 3;

let input2 = [1, 2, 3, 4, 5];
let k2 = 2;

let head1 = arrayToLinkedList(input1);
let head2 = arrayToLinkedList(input2);

let modifiedHead1 = reverseKNodes(head1, k1);
let modifiedHead2 = reverseKNodes(head2, k2);

let output1 = linkedListToArray(modifiedHead1);
let output2 = linkedListToArray(modifiedHead2);

console.log(output1);
console.log(output2);
