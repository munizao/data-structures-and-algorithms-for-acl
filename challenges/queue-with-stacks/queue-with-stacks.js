const { Stack } = require('./stack');

class pseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(value) {
    //move everything to stack2, then push to stack2.
    let current;
    while(this.stack1.peek() !== undefined) {
      current = this.stack1.pop();
      this.stack2.push(current);
    }
    this.stack2.push(value);
  }
  dequeue() {
    //move everything to stack1, then pop from stack1.
    let current;
    while(this.stack2.peek() !== undefined) {
      current = this.stack2.pop();
      this.stack1.push(current);
    }
    return this.stack1.pop();
  }
}

module.exports = {
  pseudoQueue
};
