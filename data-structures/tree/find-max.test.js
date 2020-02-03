const Node = require('./node');
const BinaryTree = require('./tree');
const findMax = require('./find-max');

let tree;
beforeEach(() => {
  tree = new BinaryTree();
  tree.root = new Node(5, new Node(10, new Node(8, new Node(3), null), new Node(5, new Node(11), new Node(6))), new Node(2));
});

// ASCII Art FTW:
//      5
//     / \
//    10  2
//   / \
//  8   5
// /   / \
//3   11  6

describe ('find max module', () => {
  it('finds the maximum value in a tree', () => {
    expect(findMax(tree.root)).toEqual(11);
  });
});
