const BinaryTree = require('./tree');
const Node = require('./node');


const fizzify = (n) => {
  if(n % 15 === 0) return 'FizzBuzz';
  if(n % 5 === 0) return 'Buzz';
  if(n % 3 === 0) return 'Fizz';
  return String(n);
};

const traverseAndCopy = (node, newNode) => {
  newNode.value = fizzify(node.value);
  if(node.left) {
    newNode.left = new Node();
    traverseAndCopy(node.left, newNode.left);
  }
  if(node.right) {
    newNode.right = new Node();
    traverseAndCopy(node.right, newNode.right);
  }
};

const fizzBuzzTree = (tree) => {
  const newTree = new BinaryTree();
  if(tree.root) {
    newTree.root = new Node();
    traverseAndCopy(tree.root, newTree.root);
  }
  return newTree;
};

module.exports = { fizzify, fizzBuzzTree };
