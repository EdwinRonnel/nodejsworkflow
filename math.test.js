// math.test.js
const test = require('node:test'); // Built-in Node.js test runner
const assert = require('node:assert'); // Built-in assertion library
const { add } = require('./math');

// Test: normal addition
test('add() should return the sum of two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});

// Test: type validation
test('add() should throw TypeError if arguments are not numbers', () => {
  assert.throws(() => add(2, 'x'), {
    name: 'TypeError',
    message: 'Both arguments must be numbers'
  });
});