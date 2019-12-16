const { LinkedList } = require('../linked-list/linked-list');
const { mergeLists } = require('./ll-merge');

let testList1;
let testList2;
let longerList;

beforeEach(() => {
  testList1 = new LinkedList();
  testList1.append('red');
  testList1.append('green');
  testList1.append('blue');
  
  testList2 = new LinkedList();
  testList2.append('cyan');
  testList2.append('magenta');
  testList2.append('yellow');

  longerList = new LinkedList();
  longerList.append('earth');
  longerList.append('air');
  longerList.append('water');
  longerList.append('fire');
  longerList.append('aether');
});

describe('linked list merge module', () => {
  it('merges two lists of the same length', () => {
    const mergedList = mergeLists(testList1, testList2);
    expect(mergedList.toString()).toEqual('red -> cyan -> green -> magenta -> blue -> yellow');
  });
  it('merges a shorter first list with a longer second list', () => {
    const mergedList = mergeLists(testList1, longerList);
    expect(mergedList.toString()).toEqual('red -> earth -> green -> air -> blue -> water -> fire -> aether')
  });
});
