/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
//  */

//reducing ?
// for ex if we given a array and we have to find sum of it

//how we can do it by reduce
var reduce = function (nums, fn, init) {
  return nums.reduce(fn, init);
};
