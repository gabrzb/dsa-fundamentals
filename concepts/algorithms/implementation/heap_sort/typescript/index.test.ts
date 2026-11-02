import assert from "node:assert/strict";
import test from "node:test";
import { heapSort } from "./index.ts";

test(`${heapSort.name}: sorts empty, repeated, sorted and reversed values`, () => {
  const cases = [[], [1], [3, 1, 2, 1], [0, 10, 2, 100], [1, 2, 3], [3, 2, 1]];
  cases.push([-3, 0, 2, -1]);
  for (const values of cases) {
    assert.deepEqual(heapSort([...values]), [...values].sort((a, b) => a - b));
  }
});
