import {
  sum,
  subtract,
  asyncSum,
  asyncSubtract
} from '../common/math';

test('sum function adds numbers together', () => {
  expect(sum(3, 7)).toBe(10);
});

test('subtract function subtracts numbers from each other', () => {
  expect(subtract(7, 3)).toBe(4);
});

test('asyncSum function adds numbers together, asynchronously', async () => {
  expect(await asyncSum(3, 7)).toBe(10);
});

test('asyncSubtract function adds numbers together, asynchronously', async () => {
  expect(await asyncSubtract(7, 3)).toBe(4);
});