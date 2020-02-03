const BinarySearchTree = require('./bst');

let tree;
beforeEach(() => {
  tree = new BinarySearchTree();
  tree.add(10);
  tree.add(5);
  tree.add(15);
});

describe ('binary search tree module', () => {
  it('contains finds a value in a bst', () => {
    expect(tree.contains(15)).toEqual(true);
  });
  it('contains returns false for value not in bst', () => {
    expect(tree.contains(7)).toEqual(false);
  });
  it('can add a value into a bst in the right place', () => {
    tree.add(7);
    expect(tree.root.left.right.value).toEqual(7);
  });
});
