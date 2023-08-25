/**
 * @return {number}
 */
var once = function (fn) {
  let called = false;

  return function (...args) {
    if (called) {
      return undefined;
    }
    called = true;
    return fn.apply(this, ...args);
  };
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
