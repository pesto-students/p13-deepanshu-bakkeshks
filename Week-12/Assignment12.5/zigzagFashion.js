// Zig-Zag Fashion.  rearrange its elements in a zig-zag fashion. The zig-zag fashion means rearranging the elements
//such that every other element is greater than its previous and next elements. The order of the elements should be maintained.
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

  // Insert a node at the end
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

  // Rearrange linked list in zig-zag fashion
  rearrange() {
    let current = this.head;
    let index = 0;

    while (current != null && current.next != null) {
      // If index is even and current > next, swap
      if (index % 2 == 0 && current.data > current.next.data) {
        let temp = current.data;
        current.data = current.next.data;
        current.next.data = temp;
      }

      current = current.next;
      index++;
    }
  }

  // Print linked list
  printList() {
    let current = this.head;
    let result = "";
    while (current != null) {
      result += current.data + " ";
      current = current.next;
    }
    console.log(result);
  }
}

const list = new LinkedList();
list.insert(4);
list.insert(3);
list.insert(7);
list.insert(8);
list.insert(6);
list.insert(2);
list.insert(1);

list.rearrange();
list.printList();
