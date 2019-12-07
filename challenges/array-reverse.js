function arrayReverse(array) {
  for(let i = 0; i < array.length / 2; i++) {
    const temp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = temp;
  }
  return array;
}

module.exports = {
  arrayReverse
};
