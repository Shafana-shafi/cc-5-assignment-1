import assert from "assert";
// This function will print the number at the given index in the Fibonacci series.
function fib(index) {
  assert(index >= 0, "Index must be greater or Equal to Zero");
  assert(typeof index === 'number', "Index must be a number");
  if (index === 0)
    return 0;
  if (index === 1)
    return 1;
  return fib(index - 1) + fib(index - 2)
}
assert.throws(() => fib(""), Error);
assert.throws(() => fib(-3), Error);
assert.equal(fib(0), 0, "The Fibonacci number at index 0 should be 0");
assert.equal(fib(1), 1, "The Fibonacci number at index 1 should be 1");
assert.equal(fib(2), 1, "The Fibonacci number at index 2 should be 1");
assert.equal(fib(3), 2, "The Fibonacci number at index 3 should be 2");
assert.equal(fib(4), 3, "The Fibonacci number at index 4 should be 3");
assert.equal(fib(5), 5, "The Fibonacci number at index 5 should be 5");
assert.equal(fib(6), 8, "The Fibonacci number at index 6 should be 8");

