import assert from "node:assert/strict";
import test from "node:test";
import { prefixSums, rangeSum } from "./index.ts";

test("prefix sums include a leading zero and preserve the input", () => {
  const cases: [number[], number[]][] = [
    [[], [0]],
    [[5], [0, 5]],
    [[2, -1, 3, 0, -4], [0, 2, 1, 4, 4, 0]],
    [[-3, -2], [0, -3, -5]],
  ];
  for (const [values, expected] of cases) {
    const original = [...values];
    assert.deepEqual(prefixSums(values), expected);
    assert.deepEqual(values, original);
  }
});

test("prefix sums answer every half-open range including empty ranges", () => {
  const values = [2, -1, 3, 0, -4];
  const prefix = prefixSums(values);
  for (let start = 0; start <= values.length; start++) {
    for (let end = start; end <= values.length; end++) {
      const expected = values.slice(start, end).reduce((sum, value) => sum + value, 0);
      assert.equal(rangeSum(prefix, start, end), expected);
    }
  }
  assert.equal(rangeSum(prefixSums([]), 0, 0), 0);
});

test("range sums reject invalid bounds", () => {
  for (const [start, end] of [[-1, 1], [2, 1], [0, 3], [0.5, 1], [0, 1.5], [NaN, 1], [0, Infinity]]) {
    assert.throws(() => rangeSum([0, 1, 3], start, end), RangeError);
  }
  assert.throws(() => rangeSum([], 0, 0), RangeError);
});
