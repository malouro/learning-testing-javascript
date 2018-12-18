const { sum, subtract } = require('./math');

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }

      console.log('PASS');
    }
  }
}

expect(subtract(7, 3)).toBe(4);
expect(sum(3, 7)).toBe(10);