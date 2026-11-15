import assert from "node:assert/strict";
import test from "node:test";
import { combinations } from "./index.ts";

test("combinations choose k distinct numbers from 1 through n", () => {
  const cases: [number, number, number[][]][] = [
    [4, 2, [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]],
    [3, 1, [[1], [2], [3]]],
    [3, 3, [[1, 2, 3]]],
    [3, 0, [[]]],
    [0, 0, [[]]],
    [0, 1, []],
    [2, 3, []],
  ];
  for (const [n, k, expected] of cases) {
    assert.deepEqual(combinations(n, k), expected);
  }
});

test("combinations reject invalid sizes", () => {
  for (const value of [-1, 1.5, NaN, Infinity, Number.MAX_SAFE_INTEGER + 1]) {
    assert.throws(() => combinations(value, 0), RangeError);
    assert.throws(() => combinations(3, value), RangeError);
  }
});

test("combinations have independent storage", () => {
  const result = combinations(3, 2);
  result[0][0] = 99;
  assert.deepEqual(result[1], [1, 3]);
});
