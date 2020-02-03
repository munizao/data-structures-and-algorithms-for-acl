const BinaryTree = require('./tree.js');

class BreadthFirstTree extends BinaryTree {
  breadthFirstOrder() {
    const traversal = [];
    const queue = [];
    let curr = null;
    queue.push(this.root);
    while(queue.length > 0) {
      curr = queue.shift();
      traversal.push(curr.value);
      curr.left && queue.push(curr.left);
      curr.right && queue.push(curr.right);
    }
    return traversal;
  }
}

module.exports = BreadthFirstTree;
