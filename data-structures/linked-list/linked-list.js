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

  append(value) {
    const newNode = new Node(value, null);
    let current = this.head;
    while(current && current.next) {
      current = current.next;
    }
    current.next = newNode;
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

  insertBefore(value, newValue) {
    let current = this.head;
    while(current) {
      if(current.next && value === current.next.value) {
        const newNode = new Node(newValue, current.next);
        current.next = newNode;
      }
      current = current.next;
    }
  }

  insertAfter(value, newValue) {
    let current = this.head;
    while(current) {
      if(value === current.value) {
        const newNode = new Node(newValue, current.next);
        current.next = newNode;
      }
      current = current.next;
    }
  }

  kthFromEnd(k) {
    if(k < 0) {
      throw new Error('k should not be negative');
    }
    let current = this.head;
    const values = [];
    while(current) {
      values.push(current.value);
      current = current.next;
    }
    if(k > values.length) {
      throw new Error('k too large');
    }
    return values[values.length - k - 1];
  }

  toString() {
    const values = [];
    let current = this.head;
    while(current) {
      values.push(current.value);
      current = current.next;
    }
    return values.join(' -> ');
  }
}

module.exports = {
  LinkedList
};
