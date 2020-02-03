class BinaryTree {
  constructor() {
    this.root = null;
  }
  preOrder() {    
    const traversal = [];
    const traverse = (node) => {
      if(!node) return;
      traversal.push(node.value);
      traverse(node.left);
      traverse(node.right);
    };
    traverse(this.root);
    return traversal;
  }

  inOrder() {
    const traversal = [];
    const traverse = (node) => {
      if(!node) return;
      traverse(node.left);
      traversal.push(node.value);
      traverse(node.right);
    };
    traverse(this.root);
    return traversal;
  }

  postOrder() {
    const traversal = [];
    const traverse = (node) => {
      if(!node) return;
      traverse(node.left);
      traverse(node.right);
      traversal.push(node.value);
    };
    traverse(this.root);
    return traversal;
  }
}

module.exports = BinaryTree;
