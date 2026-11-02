import assert from "node:assert/strict";
import test from "node:test";
import { maxWindowSum } from "./index.ts";

test("sliding window finds the maximum sum without modifying the input", () => {
  const cases: [number[], number, number][] = [
    [[2, 1, 5, 1, 3, 2], 3, 9],
    [[-4, -2, -7, -1], 2, -6],
    [[-5, 0, 4, -1], 1, 4],
    [[1, 2, 3], 3, 6],
    [[1, 2, 3, 4], 2, 7],
    [[4, 3, 2, 1], 2, 7],
    [[0, 0, 0], 2, 0],
    [[-3], 1, -3],
  ];
  for (const [values, size, expected] of cases) {
    const original = [...values];
    assert.equal(maxWindowSum(values, size), expected);
    assert.deepEqual(values, original);
  }
});

test("sliding window rejects invalid sizes and empty arrays", () => {
  for (const size of [-1, 0, 4, 1.5, NaN, Infinity]) {
    assert.throws(() => maxWindowSum([1, 2, 3], size), RangeError);
  }
  assert.throws(() => maxWindowSum([], 1), RangeError);
});
