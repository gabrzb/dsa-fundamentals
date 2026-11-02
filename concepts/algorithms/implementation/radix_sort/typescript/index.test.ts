import assert from "node:assert/strict";
import test from "node:test";
import { radixSort } from "./index.ts";

test(`${radixSort.name}: sorts empty, repeated, sorted and reversed values`, () => {
  const cases = [
    [], [1], [0, 0], [-1], [3, 1, 2, 1], [0, 10, 2, 100], [1, 2, 3], [3, 2, 1],
    [-3, 0, 2, -1, 2, -3], [-1, -10, -2, -100, -10], [-12, -2, -21, -1],
  ];

  for (const values of cases) {
    assert.deepEqual(radixSort([...values]), [...values].sort((a, b) => a - b));
  }
});

test("radix sort handles safe integer limits", () => {
  const values = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0, -1, 1,
    Number.MIN_SAFE_INTEGER + 1, Number.MAX_SAFE_INTEGER - 1];
  assert.deepEqual(radixSort(values), [...values].sort((a, b) => a - b));
});

test("radix sort rejects values that cannot represent safe integers", () => {
  for (const value of [1.5, NaN, Infinity, -Infinity, Number.MAX_SAFE_INTEGER + 1, Number.MIN_SAFE_INTEGER - 1]) {
    assert.throws(() => radixSort([value]), RangeError);
  }
});

test("radix sort orders mixed signs across digit boundaries", () => {
  const values = Array.from({ length: 2001 }, (_, index) => (index % 2 === 0 ? index : -index));
  assert.deepEqual(radixSort(values), [...values].sort((a, b) => a - b));
});
