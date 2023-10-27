class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode(-1);
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // Append remaining nodes from either l1 or l2
  if (l1 !== null) {
    current.next = l1;
  } else {
    current.next = l2;
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

let input1 = [1, 3, 5];
let input2 = [2, 4, 6];

let l1 = arrayToLinkedList(input1);
let l2 = arrayToLinkedList(input2);

let mergedHead = mergeTwoLists(l1, l2);
let output = linkedListToArray(mergedHead);

console.log(output);
