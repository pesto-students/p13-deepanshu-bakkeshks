// Delete a node without the head node in a linked list
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

  // Insert a new node at the end
  insert(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }

    current.next = newNode;
  }

  // Delete a node without head
  deleteWithoutHead(key) {
    let current = this.head;
    let prev = null;

    if (current !== null && current.data === key) {
      this.head = current.next;
      return;
    }

    while (current != null && current.data !== key) {
      prev = current;
      current = current.next;
    }

    if (current === null) {
      return;
    }

    prev.next = current.next;
  }

  // Print the linked list
  printList() {
    let current = this.head;

    while (current != null) {
      console.log(current.data + " ");
      current = current.next;
    }
    console.log();
  }
}

// Usage
const list = new LinkedList();

list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);
list.insert(50);

const key = 30;

list.printList();

list.deleteWithoutHead(key);

list.printList();
