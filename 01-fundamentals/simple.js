const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

function runTest (result, expected) {
  if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
  }

  console.log('Test passed!');
}

runTest(sum(3, 7), 10);
runTest(subtract(7, 3), 4);
