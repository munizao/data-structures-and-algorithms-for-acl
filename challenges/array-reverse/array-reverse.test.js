const {
  arrayReverse
} = require('./array-reverse.js');

describe ('array reverse module', () => {
  it('reverses an even length array', () => {
    expect(arrayReverse([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  });
  it('reverses an odd length array', () => {
    expect(arrayReverse([1, 2, 3])).toEqual([3, 2, 1]);
  });
});
