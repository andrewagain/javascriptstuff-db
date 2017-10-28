/**
 * Returns true if the outer array contains any of the entries in the inner array.
 * @param  {Array} outerArray
 * @param  {Array} innerArray
 * @return {Boolean}
 */
module.exports = function includesAny(outerArray, innerArray) {
  if (!Array.isArray(outerArray)) {
    return false;
  }
  if (!Array.isArray(innerArray)) {
    return false;
  }
  for (let index = 0; index < innerArray.length; index += 1) {
    const innerItem = innerArray[index];
    if (outerArray.includes(innerItem)) {
      return true;
    }
  }
  return false;
};
