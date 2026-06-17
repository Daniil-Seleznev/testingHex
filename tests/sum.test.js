const sum = require('../src/sum');

test('adds numbers', () => {
  expect(sum(2, 3)).toBe(5);
});

test('works with negatives', () => {
  expect(sum(-2, 5)).toBe(3);
});