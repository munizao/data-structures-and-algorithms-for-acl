class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if(!this.first) {
      this.first = newNode;
    }
    if(this.last) {
      this.last.next = newNode;
    }
    this.last = newNode;
  }

  dequeue() {
    const value = this.first.value;
    this.first = this.first.next;
    return value;
  }
}

module.exports = {
  Queue
};

