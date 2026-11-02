import assert from "node:assert/strict";
import test from "node:test";
import { minHeap } from "./index.ts";

test("heap extracts repeated and negative values in order", () => {
  const heap = new minHeap();
  const values = [5, -1, 3, 3, 0, 10, 2];
  for (const value of values) heap.insert(value);
  assert.deepEqual(values.map(() => heap.delete()), [...values].sort((a, b) => a - b));
  assert.equal(heap.length, 0);
  heap.insert(4);
  assert.equal(heap.delete(), 4);
});
