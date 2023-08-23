/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  //this is declarative programing
  // return arr.filter(fn);

  const res = [];
  for (const i in arr) {
    if (fn(arr[i], Number(i))) {
      res.push(arr[i]);
    }
  }
};
