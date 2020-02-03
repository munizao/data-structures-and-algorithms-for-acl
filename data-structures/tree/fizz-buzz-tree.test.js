const Node = require('./node');
const BinaryTree = require('./tree');
const { fizzify, fizzBuzzTree } = require('./fizz-buzz-tree');

let tree;
beforeEach(() => {
  tree = new BinaryTree();
  tree.root = new Node(5, new Node(3), new Node(7));
});

describe ('FizzBuzz tree module', () => {
  it('fizzes', () => {
    expect(fizzify(9)).toEqual('Fizz');
  });

  it('buzzes', () => {
    expect(fizzify(20)).toEqual('Buzz');
  });

  it('fizzbuzzes', () => {
    expect(fizzify(45)).toEqual('FizzBuzz');
  });

  it('neither fizzes nor buzzes', () => {
    expect(fizzify(13)).toStrictEqual('13');
  });

  it('fizzifies a tree', () => {
    const newTree = fizzBuzzTree(tree);
    expect(newTree.root.value).toEqual('Buzz');
    expect(newTree.root.left.value).toEqual('Fizz');
    expect(newTree.root.right.value).toStrictEqual('7');
  });
});
