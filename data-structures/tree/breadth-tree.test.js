const Node = require('./node');
const BreadthFirstTree = require('./breadth-tree');

let tree;
beforeEach(() => {
  tree = new BreadthFirstTree();
  tree.root = new Node(1, new Node(2, new Node(3, new Node(4), null), new Node(5, null, new Node(6))), new Node(7));
});

// ASCII Art FTW:
//      1
//     / \
//    2   7
//   / \
//  3   5
// /     \
//4       6

describe ('binary tree module', () => {
  it('performs a breadth-first traversal', () => {
    expect(tree.breadthFirstOrder()).toEqual([1, 2, 7, 3, 5, 4, 6]);
  });
});
