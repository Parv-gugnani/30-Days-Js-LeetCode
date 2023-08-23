function createCounter(initialValue) {
  let value = initialValue;

  function counter() {
    const currentValue = value;
    value += 1;
    return currentValue;
  }

  return counter;
}
