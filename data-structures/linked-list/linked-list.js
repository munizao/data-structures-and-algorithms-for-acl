class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }
}

module.exports = {
  LinkedList
}