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
  includes(value) {
    let current = this.head;
    while(current) {
      if(value === current.value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

module.exports = {
  LinkedList
}