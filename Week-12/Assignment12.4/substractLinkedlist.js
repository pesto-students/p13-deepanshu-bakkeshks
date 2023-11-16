//  Subtract Two Numbers represented as Linked Lists
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert nodes at end of list
  insert(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Subtract two linked lists - l1 - l2
  subtract(l2) {
    let dummy = new Node(0);
    let current = dummy;
    let borrow = 0;

    let p1 = this.head;
    let p2 = l2.head;

    while (p1 !== null || p2 !== null) {
      let x = p1 != null ? p1.data : 0;
      let y = p2 != null ? p2.data : 0;
      let diff = x - y - borrow;

      if (diff < 0) {
        diff += 10;
        borrow = 1;
      } else {
        borrow = 0;
      }

      current.next = new Node(diff);
      current = current.next;

      if (p1 != null) p1 = p1.next;
      if (p2 != null) p2 = p2.next;
    }

    if (borrow > 0) {
      current.next = new Node(1);
    }

    return dummy.next;
  }

  // Print linked list
  printList(head) {
    let current = head;
    let result = "";
    while (current != null) {
      result += current.data + " ";
      current = current.next;
    }
    console.log(result.trim());
  }
}

const l1 = new LinkedList();
l1.insert(3);
l1.insert(2);
l1.insert(1);

const l2 = new LinkedList();
l2.insert(1);
l2.insert(2);

const result = l1.subtract(l2);
l1.printList(result);
