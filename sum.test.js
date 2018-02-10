const {sum, multiply} = require('./sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multiply calculates 3 * 7 = 21', () => {
  expect(multiply(3,7)).toBe(21);
});