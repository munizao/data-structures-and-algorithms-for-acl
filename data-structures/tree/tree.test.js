const Node = require('./node');
const BinaryTree = require('./tree');

let tree;
beforeEach(() => {
  tree = new BinaryTree();
  tree.root = new Node(1, new Node(2, new Node(3, new Node(4), null), new Node(5, null, new Node(6))), new Node(7));
});

describe ('binary tree module', () => {
  it('performs a pre-order traversal', () => {
    expect(tree.preOrder()).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('performs an in-order traversal', () => {
    expect(tree.inOrder()).toEqual([4, 3, 2, 5, 6, 1, 7]);
  });

  it('performs a post-order traversal', () => {
    expect(tree.postOrder()).toEqual([4, 3, 6, 5, 2, 7, 1]);
  });
});
