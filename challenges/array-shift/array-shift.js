function insertShiftArray(array, valueToInsert) {
  const newArray = new Array(array.length + 1);
  const insertPosition = Math.ceil(array.length / 2);
  for(let i = 0; i <= insertPosition; i++) {
    newArray[i] = array[i];
  }
  newArray[insertPosition] = valueToInsert;
  for(let i = insertPosition; i < array.length; i++) {
    newArray[i + 1] = array[i];
  }

  return newArray;
}

module.exports = {
  insertShiftArray
};
