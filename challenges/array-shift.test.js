const {
  arrayShift
} = require('./array-shift.js');

describe ('array shift module', () => {
  it('adds a value to the middle of an even length array', () => {
    expect(arrayShift([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
  });
  it('adds a value right after the middle of an odd length array', () => {
    expect(arrayShift([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
