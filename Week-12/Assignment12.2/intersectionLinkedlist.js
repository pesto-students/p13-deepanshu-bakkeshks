// Find intersection point of given two  LinkedList
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Linked list class
class LinkedList {
  constructor() {
    this.head = null;
  }

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

  findIntersection(list2) {
    let l1 = this.head;
    let l2 = list2.head;

    let len1 = 0,
      len2 = 0;
    while (l1 !== null) {
      len1++;
      l1 = l1.next;
    }
    while (l2 !== null) {
      len2++;
      l2 = l2.next;
    }

    if (len1 > len2) {
      l1 = this.head;
      l2 = list2.head;
      for (let i = 0; i < len1 - len2; i++) {
        l1 = l1.next;
      }
    } else {
      l1 = list2.head;
      l2 = this.head;
      for (let i = 0; i < len2 - len1; i++) {
        l2 = l2.next;
      }
    }

    while (l1 !== null && l2 !== null) {
      if (l1.data === l2.data) {
        return l1;
      }
      l1 = l1.next;
      l2 = l2.next;
    }

    return null;
  }
}

const list1 = new LinkedList();
list1.insert(3);
list1.insert(6);
list1.insert(9);
list1.insert(15);
list1.insert(30);

const list2 = new LinkedList();
list2.insert(10);
list2.insert(15);
list2.insert(30);

const intersect = list1.findIntersection(list2);

if (intersect) {
  console.log("Intersection Point: " + intersect.data);
} else {
  console.log("No Intersection Point");
}
