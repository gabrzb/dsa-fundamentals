import assert from "node:assert/strict";
import test from "node:test";
import { radixSort } from "./index.ts";

test(`${radixSort.name}: sorts empty, repeated, sorted and reversed values`, () => {
  const cases = [[], [1], [3, 1, 2, 1], [0, 10, 2, 100], [1, 2, 3], [3, 2, 1]];

  for (const values of cases) {
    assert.deepEqual(radixSort([...values]), [...values].sort((a, b) => a - b));
  }
});

test("radix sort rejects negative integers", () => {
  assert.throws(() => radixSort([-1, 2]));
});
