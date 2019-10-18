/**
 * Recursively sums item in an array and returns the sum.
 * @param {*} array 
 */

const sumItems = function(array) {
  // Sum all the numbers in the array
  let count = 0;
  for (item of array) {
    if (Array.isArray(item)) { //Inductive step
      count += sumItems(item);
    } else { //Base case:
      count += item;
    }
  }
  return count;
};

console.log(sumItems([1, [1, 2, 3], 3, 4]));

module.exports = sumItems;