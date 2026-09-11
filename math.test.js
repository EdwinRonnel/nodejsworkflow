// math.test.js
const { add } = require('./math');

describe('add function', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('throws error if arguments are not numbers', () => {
    expect(() => add(2, '3')).toThrow('Both arguments must be numbers');
  });
});