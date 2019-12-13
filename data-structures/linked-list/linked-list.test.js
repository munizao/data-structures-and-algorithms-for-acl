const { LinkedList } = require('./linked-list');
let testList = null;
let longerList = null;
beforeEach(() => {
  testList = new LinkedList();
  testList.insert('gravy');
  testList.insert('potatoes');
  testList.insert('brussels spouts');
  longerList = new LinkedList();
  for(let i = 0; i < 15; i++) {
    longerList.insert(i);
  }
});

describe ('linked list module', () => {
  it('insert inserts a new node at the head of the list', () => {
    testList.insert('cranberries');
    expect(testList.head.value).toEqual('cranberries');
  });

  it('includes returns true if the value is in the linked list', () => {
    expect(testList.includes('potatoes')).toEqual(true);
  });

  it('includes returns false if the value is not in the linked list', () => {
    expect(testList.includes('cake')).toEqual(false);
  });

  it('toString writes a string of all values ', () => {
    expect(testList.toString()).toEqual('brussels spouts -> potatoes -> gravy');
  });

  it('kthFromEnd throws error if k is too large', () => {
    expect(() => longerList.kthFromEnd(20)).toThrowError('k too large');
  });

  it('kthFromEnd throws error if k is negative', () => {
    expect(() => longerList.kthFromEnd(-1)).toThrowError('k should not be negative');
  });
});
