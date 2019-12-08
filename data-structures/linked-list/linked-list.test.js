const { LinkedList } = require('./linked-list');
let testList = null;
beforeEach(() => {
  testList = new LinkedList();
  testList.insert('gravy');
  testList.insert('potatoes');
  testList.insert('brussels spouts');
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
    expect(testList.toString()).toEqual('"gravy", "potatoes", "brussels spouts"');
  });
});
