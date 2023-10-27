class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  toString() {
    let currentNode = this.head;
    const values = [];
    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values.join(" ");
  }
}

function quicksort(linkedList) {
  if (linkedList.length < 2) {
    return linkedList;
  }

  const pivotValue = linkedList.head.value;
  const lessThanPivot = new LinkedList();
  const equalPivot = new LinkedList();
  const greaterThanPivot = new LinkedList();

  let currentNode = linkedList.head;
  while (currentNode !== null) {
    if (currentNode.value < pivotValue) {
      lessThanPivot.add(currentNode.value);
    } else if (currentNode.value === pivotValue) {
      equalPivot.add(currentNode.value);
    } else {
      greaterThanPivot.add(currentNode.value);
    }
    currentNode = currentNode.next;
  }

  return concatenate(
    quicksort(lessThanPivot),
    equalPivot,
    quicksort(greaterThanPivot)
  );
}

function concatenate(less, equal, greater) {
  const result = new LinkedList();
  let current = less.head;
  while (current !== null) {
    result.add(current.value);
    current = current.next;
  }

  current = equal.head;
  while (current !== null) {
    result.add(current.value);
    current = current.next;
  }

  current = greater.head;
  while (current !== null) {
    result.add(current.value);
    current = current.next;
  }

  return result;
}

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(3);
linkedList.add(2);
linkedList.add(1);
linkedList.add(2);
linkedList.add(4);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);

const sortedLinkedList = quicksort(linkedList);
console.log(sortedLinkedList.toString());
