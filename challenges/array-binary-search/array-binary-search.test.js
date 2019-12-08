const {
  binarySearch
} = require('./array-binary-search.js');

describe ('array shift module', () => {
  it('returns index of value in array', () => {
    expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
  });
  it('returns -1 if value is not found in the array', () => {
    expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toEqual(-1);
  });
});
