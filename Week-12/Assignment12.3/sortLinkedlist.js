//  Sort a linked list of 0s, 1s and 2s
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked List class
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
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Sort the linked list
  sortList() {
    let count = [0, 0, 0];

    let current = this.head;
    while (current !== null) {
      count[current.data]++;
      current = current.next;
    }

    current = this.head;

    let i = 0;
    while (current !== null) {
      if (count[i] === 0) {
        i++;
      } else {
        current.data = i;
        count[i]--;
        current = current.next;
      }
    }
  }

  // Print the linked list
  printList() {
    let current = this.head;
    while (current !== null) {
      process.stdout.write(current.data + " ");
      current = current.next;
    }
    console.log();
  }
}

const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(0);
list.insert(2);
list.insert(1);

list.sortList();

list.printList();
