const Node = require('./node');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
    }
    else {
      let curr = this.root;
      //This feels uglier than while(true), but eslint doesn't like the latter
      while(curr) {
        if(value < curr.value) {
          if(!curr.left) {
            curr.left = newNode;
            break;
          }
          curr = curr.left;
        }
        else {
          if(!curr.right) {
            curr.right = newNode;
            break;
          }
          curr = curr.right;
        }
      }
    }
  }

  contains(value) {
    let curr = this.root;
    while(curr) {
      if(value === curr.value) {
        return true;
      }
      else if(value < curr.value) {
        curr = curr.left;
      }
      else if(value > curr.value) {
        curr = curr.right;
      }
    }
    return false;
  }
}

module.exports = BinarySearchTree;
