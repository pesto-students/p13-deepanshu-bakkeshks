class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function isPalindrome(head) {
  if (head === null || head.next === null) {
    return true;
  }

  let slow = head;
  let fast = head;

  // Find the middle of the linked list using two-pointer approach
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the linked list
  slow = reverseLinkedList(slow);
  fast = head;

  // Compare the reversed second half with the first half
  while (slow !== null) {
    if (slow.val !== fast.val) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }

  return true;
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
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

let input1 = [1, 2, 3, 2, 1];
let input2 = [1, 2, 3, 3, 1];

let head1 = arrayToLinkedList(input1);
let head2 = arrayToLinkedList(input2);

console.log(isPalindrome(head1));
console.log(isPalindrome(head2));
