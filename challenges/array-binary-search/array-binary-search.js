function binarySearch(array, value) {
  let left = 0;
  let right = array.length - 1;
  let i = 0;
  while(left <= right) {
    i = Math.floor((left + right) / 2);
    if(array[i] < value) {
      right = i - 1;
    }
    if(array[i] > value) {
      left = i + 1;
    }
    if(array[i] === value) {
      return i;
    }
  }
  return -1;
}

module.exports = {
  binarySearch
};
