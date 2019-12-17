class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value, this.top);
    this.top = newNode;
  }

  pop() {
    if(this.top) {
      const value = this.top.value;
      this.top = this.top.next;
      return value;
    }
    return undefined;
  }

  peek() {
    if(this.top) {
      return this.top.value;
    }
    return undefined;
  }
}

module.exports = {
  Stack
};
