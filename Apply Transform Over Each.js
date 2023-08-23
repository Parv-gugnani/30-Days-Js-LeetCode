var map = function (arr, fn) {
  const res = [];
  for (const i in arr) {
    res.push(fn(arr[i], Number(i))); //push do the end of arry
  }
  return res;
};
